#!/usr/bin/env node
import { readFileSync, readdirSync, existsSync, statSync } from "node:fs";
import { join, dirname, resolve, relative, basename, extname } from "node:path";
import { fileURLToPath } from "node:url";
import { parse } from "yaml";

const NAME_RE = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const PREFIX = "biz-";
const DESCRIPTION_MIN = 50;
const DESCRIPTION_MAX = 1024;
const SKILL_MAX_LINES = 500;
const SKIP_DIRS = new Set([".git", "node_modules", "fixtures"]);

export function parseFrontmatter(text) {
  const lines = text.split(/\r?\n/);
  if (lines[0] !== "---") return { error: 'must open on line 1 with "---"' };
  const end = lines.indexOf("---", 1);
  if (end === -1) return { error: 'must close with "---"' };
  let data;
  try {
    data = parse(lines.slice(1, end).join("\n"), { strict: true });
  } catch (error) {
    return { error: `is not valid YAML: ${error.message.split("\n")[0]}` };
  }
  if (data === null || typeof data !== "object" || Array.isArray(data)) return { error: "must be a YAML mapping" };
  return { data, body: lines.slice(end + 1).join("\n") };
}

function guardrails(body) {
  const match = body.match(/^## Guardrails\n[\s\S]*?(?=^## |(?![\s\S]))/m);
  return match ? match[0].trim() : null;
}

function markdownFiles(dir) {
  const out = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (SKIP_DIRS.has(entry.name)) continue;
    const path = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...markdownFiles(path));
    else if (extname(entry.name) === ".md") out.push(path);
  }
  return out;
}

function checkName(name, expected, where, errors) {
  if (typeof name !== "string" || !name) return errors.push(`${where}: missing "name"`);
  if (name.length > 64 || !NAME_RE.test(name)) errors.push(`${where}: name "${name}" must be 1-64 lowercase letters, digits, and single hyphens`);
  if (!name.startsWith(PREFIX)) errors.push(`${where}: name "${name}" must start with "${PREFIX}"`);
  if (name !== expected) errors.push(`${where}: name "${name}" must match "${expected}"`);
}

function checkDescription(description, where, errors) {
  if (typeof description !== "string" || !description) return errors.push(`${where}: missing "description"`);
  if (description.length < DESCRIPTION_MIN || description.length > DESCRIPTION_MAX) {
    errors.push(`${where}: description is ${description.length} characters, must be ${DESCRIPTION_MIN}-${DESCRIPTION_MAX}`);
  }
}

export function validate(root) {
  const errors = [];
  const skillsDir = join(root, "skills");
  const skills = existsSync(skillsDir)
    ? readdirSync(skillsDir).filter((d) => statSync(join(skillsDir, d)).isDirectory()).sort()
    : [];
  const skillNames = new Set(skills);
  let firstGuardrails = null;

  for (const dir of skills) {
    const file = join(skillsDir, dir, "SKILL.md");
    const where = relative(root, file);
    if (!existsSync(file)) {
      errors.push(`${where}: missing`);
      continue;
    }
    const text = readFileSync(file, "utf8");
    const parsed = parseFrontmatter(text);
    if (parsed.error) {
      errors.push(`${where}: frontmatter ${parsed.error}`);
      continue;
    }
    checkName(parsed.data.name, dir, where, errors);
    checkDescription(parsed.data.description, where, errors);
    const section = guardrails(parsed.body);
    if (!section) errors.push(`${where}: missing "## Guardrails" section`);
    else if (firstGuardrails === null) firstGuardrails = { section, where };
    else if (section !== firstGuardrails.section) errors.push(`${where}: "## Guardrails" differs from ${firstGuardrails.where}`);
    if (text.split("\n").length > SKILL_MAX_LINES) errors.push(`${where}: longer than ${SKILL_MAX_LINES} lines`);
  }

  const agentsDir = join(root, "agents");
  const agents = existsSync(agentsDir) ? readdirSync(agentsDir).filter((f) => f.endsWith(".md")) : [];
  for (const file of agents) {
    const where = `agents/${file}`;
    const parsed = parseFrontmatter(readFileSync(join(agentsDir, file), "utf8"));
    if (parsed.error) {
      errors.push(`${where}: frontmatter ${parsed.error}`);
      continue;
    }
    checkName(parsed.data.name, basename(file, ".md"), where, errors);
    checkDescription(parsed.data.description, where, errors);
    if (!Array.isArray(parsed.data.skills) || parsed.data.skills.length === 0) {
      errors.push(`${where}: "skills" must list at least one skill`);
      continue;
    }
    for (const skill of parsed.data.skills) {
      if (!skillNames.has(skill)) errors.push(`${where}: lists unknown skill "${skill}"`);
    }
    for (const [, skill] of parsed.body.matchAll(/`([a-z0-9-]+)`/g)) {
      if (skillNames.has(skill) && !parsed.data.skills.includes(skill)) {
        errors.push(`${where}: body uses skill "${skill}" that is not in its "skills" list`);
      }
    }
  }

  for (const file of markdownFiles(root)) {
    const where = relative(root, file);
    const text = readFileSync(file, "utf8");
    if (text.includes("\u2014")) errors.push(`${where}: contains an em dash`);
    for (const [, skill] of text.matchAll(/`([a-z0-9-]+)` skill/g)) {
      if (!skillNames.has(skill)) errors.push(`${where}: refers to unknown skill "${skill}"`);
    }
    const prose = text.replace(/```[\s\S]*?```/g, "").replace(/`[^`\n]*`/g, "");
    for (const [, rawTarget] of prose.matchAll(/\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g)) {
      if (/^[a-z]+:/i.test(rawTarget) || rawTarget.startsWith("#")) continue;
      const target = decodeURIComponent(rawTarget.split("#")[0]);
      if (!existsSync(resolve(dirname(file), target))) errors.push(`${where}: broken link "${rawTarget}"`);
    }
  }

  return { errors, skillCount: skills.length, agentCount: agents.length };
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const root = resolve(process.argv[2] ?? join(dirname(fileURLToPath(import.meta.url)), ".."));
  const { errors, skillCount, agentCount } = validate(root);
  for (const error of errors) console.error(`error: ${error}`);
  if (errors.length) {
    console.error(`${errors.length} problem(s) found.`);
    process.exit(1);
  }
  console.log(`OK: ${skillCount} skills, ${agentCount} agents, all links resolve.`);
}
