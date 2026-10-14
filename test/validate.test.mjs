import { test } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { validate } from "../scripts/validate.mjs";

const fixture = (name) => fileURLToPath(new URL(`./fixtures/${name}`, import.meta.url));

test("a valid kit has no errors", () => {
  assert.deepEqual(validate(fixture("good")).errors, []);
});

test("an invalid kit reports each problem", () => {
  const errors = validate(fixture("bad")).errors.join("\n");
  assert.match(errors, /name "Other_Name" must be 1-64 lowercase/);
  assert.match(errors, /name "Other_Name" must match "wrong-folder"/);
  assert.match(errors, /description is 10 characters/);
  assert.match(errors, /missing "## Guardrails" section/);
  assert.match(errors, /broken link "missing.md"/);
  assert.match(errors, /no-frontmatter\/SKILL.md: frontmatter must open on line 1/);
  assert.match(errors, /lists unknown skill "ghost-skill"/);
  assert.match(errors, /name "no-prefix" must start with "biz-"/);
  assert.match(errors, /biz-colon-desc\/SKILL.md: frontmatter is not valid YAML/);
  assert.match(errors, /biz-drift-b\/SKILL.md: "## Guardrails" differs from skills\/biz-drift-a\/SKILL.md/);
});

test("the kit in this repository is valid", () => {
  assert.deepEqual(validate(fileURLToPath(new URL("..", import.meta.url))).errors, []);
});
