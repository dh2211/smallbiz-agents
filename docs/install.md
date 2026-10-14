# Install the skills for your agent

Copy each folder in `skills/` into a skills folder your agent reads. Each skill must sit in its own folder, directly under the skills folder: `<skills folder>/biz-product-description/SKILL.md`.

Pick a scope:

- **Personal.** The skills load in every project on your computer. Use this if you work on your business in many folders.
- **Project.** The skills load only inside one folder or repository, and anyone who clones it gets them. Use this for a shared folder your team works in.

## Folders per agent

Each row was checked against the tool's documentation on 2026-10-13. Tools change, so follow the link if a path stops working.

| Agent | Personal folder | Project folder | Source |
| --- | --- | --- | --- |
| Claude Code | `~/.claude/skills/` | `.claude/skills/` | [Claude Code: Extend Claude with skills](https://code.claude.com/docs/en/skills) |
| Codex (CLI, IDE extension, ChatGPT desktop app) | `~/.agents/skills/` | `.agents/skills/` | [OpenAI: Build skills](https://developers.openai.com/codex/skills) |
| Cursor | `~/.cursor/skills/` or `~/.agents/skills/` | `.cursor/skills/` or `.agents/skills/` | [Cursor: Agent Skills](https://cursor.com/docs/context/skills) |
| Grok (Grok Build CLI) | `~/.grok/skills/` or `~/.agents/skills/` | `.grok/skills/` | [xAI: Skills, Plugins and Marketplaces](https://docs.x.ai/build/features/skills-plugins-marketplaces) |
| OpenCode | `~/.config/opencode/skills/` or `~/.agents/skills/` | `.opencode/skills/` or `.agents/skills/` | [OpenCode: Agent Skills](https://opencode.ai/docs/skills/) |

Not verified:

- **Grok Bot and other chat assistants.** We found no public documentation of a skills folder. Attach or paste the `SKILL.md` you need into the conversation and ask the assistant to follow it.
- **Any other agent.** If it says it supports the Agent Skills format, check its documentation for the folder. The [Agent Skills specification](https://agentskills.io/specification) defines the file format, not the folder.

## One folder for most agents

Codex, Cursor, Grok, and OpenCode all document `~/.agents/skills/` as a personal folder. Install there once and those four agents load the skills. Claude Code does not list that folder, so copy the skills to `~/.claude/skills/` as well if you use it.

## Copy the skills

macOS or Linux, personal scope:

```bash
git clone https://github.com/SmallBizOps/smallbiz-agents.git
mkdir -p ~/.agents/skills
cp -R smallbiz-agents/skills/* ~/.agents/skills/
```

Windows PowerShell, personal scope:

```powershell
git clone https://github.com/SmallBizOps/smallbiz-agents.git
New-Item -ItemType Directory -Force "$HOME\.agents\skills"
Copy-Item -Recurse smallbiz-agents\skills\* "$HOME\.agents\skills\"
```

Replace `~/.agents/skills` with the folder from the table for your agent.

Every skill and agent name in this kit starts with `biz-`, so the copy doesn't replace skills you already have with common names such as `invoice-builder`. Only an older copy of smallbiz-agents gets replaced, which is what you want when you update.

To update later, run `git pull` in `smallbiz-agents` and copy again.

## Link instead of copy

A symbolic link keeps the skills up to date with `git pull`. Claude Code and Codex document that they follow symlinked skill folders. The Cursor, Grok, and OpenCode pages don't say, so copy for those or test the link yourself.

```bash
mkdir -p ~/.claude/skills
for skill in "$PWD"/smallbiz-agents/skills/*/; do
  ln -s "$skill" ~/.claude/skills/
done
```

## Install the agents

The files in `agents/` are optional.

- **Claude Code.** Agent file names also start with `biz-`, so they don't replace your other agents. Copy them to `~/.claude/agents/` or the project's `.claude/agents/`. The skills page above lists that folder for custom subagents. We have not tested whether Claude Code preloads the `skills` list in our frontmatter; the agent body names each skill too, so the agent can still find them if it does not.
- **Grok.** The xAI page says Grok reads Claude Code agents, so the Claude Code folders above apply. Not tested.
- **Other agents.** Paste the body of the agent file into your first message, or into the project's `AGENTS.md`, and ask the agent to follow it.

## Check the install

Start a new session and ask the agent: "Which skills do you have for small business admin?" It should list the smallbiz-agents skills. In Claude Code and Grok, `/skills` lists them. In Codex, type `/skills` or `$`.

If a skill is missing, check that the folder holds `SKILL.md` directly (`~/.agents/skills/biz-product-description/SKILL.md`, not `~/.agents/skills/skills/biz-product-description/SKILL.md`), then restart the agent.
