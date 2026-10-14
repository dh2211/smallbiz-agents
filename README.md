# smallbiz-agents

Agent Skills that help small shop and business owners with the admin behind the counter: product descriptions, review replies, standard operating procedures (SOPs), staff checklists, quotes, invoices, promotion plans, social posts, and customer messages.

Each skill is a folder with a `SKILL.md` file in the open [Agent Skills](https://agentskills.io/specification) format. You bring your own AI tool. Claude Code, Codex, Cursor, Grok, OpenCode, and other agents document support for that format. You install the skills once, then ask in plain English: "Write a product description for our oak chopping board for the website."

**Status: not yet tested live in any tool.** The skills pass the validator in this repository, and the worked examples were produced by following the skills by hand. Nobody has yet recorded a run in Claude Code, Codex, Cursor, Grok, or OpenCode. Please [report what you find](CONTRIBUTING.md).

## Quick start

1. Clone the repository:

   ```bash
   git clone https://github.com/SmallBizOps/smallbiz-agents.git
   ```

2. Copy the `skills/` folders into the skills folder your agent reads. For Claude Code on macOS or Linux:

   ```bash
   mkdir -p ~/.claude/skills
   cp -R smallbiz-agents/skills/* ~/.claude/skills/
   ```

   [docs/install.md](docs/install.md) lists the folder for each agent, with links to each tool's documentation. You don't need Node.js or any other software to use the skills.

3. Start your agent and ask for what you need:

   > Write a quote for repainting a 3-bedroom flat: 2 coats, labour 24 hours at 35 per hour, paint 180. Prices exclude tax. Valid 30 days.

   The agent picks the matching skill, asks for anything missing, and drafts the quote with the arithmetic shown.

## Skills

| Skill | What it makes |
| --- | --- |
| [biz-product-description](skills/biz-product-description/SKILL.md) | An honest product description or marketplace listing from the facts you give |
| [biz-review-reply](skills/biz-review-reply/SKILL.md) | Two reply options for a real customer review, good or bad, that you post yourself |
| [biz-customer-message](skills/biz-customer-message/SKILL.md) | Order updates, delay and refund notices, and replies to customers who wrote in |
| [biz-sop-writer](skills/biz-sop-writer/SKILL.md) | A step-by-step SOP for a task, with safety checks marked for you to confirm |
| [biz-checklist-builder](skills/biz-checklist-builder/SKILL.md) | Printable opening, closing, cleaning, or first-day checklists |
| [biz-quote-builder](skills/biz-quote-builder/SKILL.md) | An itemized quote with totals, the arithmetic shown, and terms |
| [biz-invoice-builder](skills/biz-invoice-builder/SKILL.md) | Invoice wording and layout for your invoicing tool, plus payment reminders |
| [biz-promotion-plan](skills/biz-promotion-plan/SKILL.md) | A simple promotion plan with a real offer, a dated calendar, and how to measure it |
| [biz-social-post](skills/biz-social-post/SKILL.md) | Short posts in your voice, with hashtags and an image idea |

## Agents

An agent here is a short role file that names the skills it uses and the order to use them in. It adds no new business instructions. Those live in the skills.

| Agent | Role |
| --- | --- |
| [biz-shopfront-agent](agents/biz-shopfront-agent.md) | Product descriptions, then a promotion plan and its posts, pausing for your approval at each step |
| [biz-customer-care-agent](agents/biz-customer-care-agent.md) | Replies to reviews and customer messages |
| [biz-back-office-agent](agents/biz-back-office-agent.md) | SOPs and checklists, and quotes turned into invoices |

You don't need the agents. Every skill works on its own.

## Examples

[examples/](examples/) has complete outputs produced by following the skills. Every business, customer, price, and review in them is invented.

- [Candle shop: new product and spring promotion](examples/candle-shop-spring-promotion.md). A product description, a promotion plan, and two social posts.
- [Café: review replies and a closing checklist](examples/cafe-reviews-and-closing.md). Replies to a good and a bad review, an SOP, and a checklist.
- [Painter and decorator: quote to invoice](examples/painter-quote-to-invoice.md). A quote, the invoice, and a payment reminder.

## What the skills always do

Every skill ends with the same Guardrails section, and the validator fails if one is missing or different. The agent:

- uses only the products, specs, prices, and terms you give it, and marks gaps `[owner to confirm]`,
- shows its arithmetic and leaves every price, tax line, total, and term for you to check,
- never writes fake reviews, poses as a customer, or invents urgency or scarcity,
- works without customer names, contact, order, or payment details,
- drafts, and sends or posts nothing. You check safety and legal steps against the rules that apply to you.

## You check every price, tax line, and term

AI tools get numbers wrong. Anything with a price, a promise, or your name on it gets your check before it goes out. The quote and invoice skills draft wording and layout; your invoicing or accounting tool keeps the official record. Nothing here is accounting, tax, or legal advice.

## Privacy

Don't paste customer names, addresses, phone numbers, emails, order numbers, or payment details into an AI tool unless your tool and setup allow it under the privacy rules that apply to you. Use placeholders such as `[customer]` and fill them in later. The skills tell the agent to remove details it sees, but by then the text has already reached the AI provider.

## Why Agent Skills

[docs/format.md](docs/format.md) explains the choice. In short, a skill is plain Markdown in a folder, several major coding agents already load the same folder layout, and an owner can read and edit every instruction.

## Documentation

- [Install for your agent](docs/install.md)
- [Use the skills](docs/usage.md)
- [Write a new skill](docs/authoring.md)
- [Why this format](docs/format.md)
- [Contributing](CONTRIBUTING.md)

## License

[MIT](LICENSE).
