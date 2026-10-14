# Contributing

Shop owners, staff, and developers are all welcome. The most useful contributions are fixes from real use: "the review replies sound too stiff for my café" is worth more than a new skill.

## Report a problem

Open an issue with:

- the skill and the AI tool you used (for example, `biz-quote-builder` in Cursor),
- what you asked for, with customer personal details removed,
- what you got and what you expected.

Issues are public. To report something privately, say so in a short issue without details and a maintainer will follow up.

## Change a skill

1. Fork the repository and create a branch.
2. Edit the `SKILL.md`. Follow [docs/authoring.md](docs/authoring.md).
3. Try the skill in at least one AI tool. Say which one in the pull request.
4. Run the checks:

   ```bash
   npm run validate
   npm test
   ```

5. Open a pull request that says what changed and why.

## Add a skill

Open an issue first and describe the problem it solves. Then follow [docs/authoring.md](docs/authoring.md) and include a worked example in `examples/`.

## Rules for all content

- Plain English.
- No real customer personal details in issues, examples, or tests. Use invented details and say that they are invented.
- No skills or examples that create fake reviews, false claims, or fake urgency.
- No invented prices, tax rates, or legal requirements presented as fact.
- Keep the Guardrails section identical across skills.
- Start every skill and agent name with `biz-`.

By contributing, you agree that your contribution is licensed under the [MIT License](LICENSE).
