---
name: biz-sop-writer
description: "Writes a standard operating procedure for a task in a small business, step by step, with who does it, when, what they need, and how to check it was done right. Use when an owner asks for an SOP, a how-to for staff, a process write-up, or training instructions for a task."
license: MIT
---

# SOP writer

Turn how the owner actually does a task into steps a new staff member can follow.

## Ask first

1. The task, and who does it (role, not name).
2. How it is done today, in the owner's words. A voice-note transcript or a messy list is fine.
3. When it happens and how long it takes.
4. Any safety, hygiene, cash-handling, or legal step involved (food safety, chemicals, lifting, ID checks, refunds).

## Steps

1. Write the purpose in one sentence: why the task matters to customers or the business.
2. List what the person needs before starting: tools, supplies, logins (never the passwords themselves), keys.
3. Write the steps as numbered commands, one action each, in the order the owner described. Use the owner's names for things.
4. Mark every safety, hygiene, or legal step with **Safety check** and add `[owner to confirm against your local rules]`. Don't supply rules from memory as fact.
5. Add "What good looks like": two or three things a manager can check to see the task was done right.
6. Add "If something goes wrong": who to call, and what to do first.
7. List the questions where the owner's description had a gap.

## Output

Title, purpose, owner role, frequency and time, what you need, numbered steps, what good looks like, if something goes wrong, open questions. Offer a one-page checklist version next with the `biz-checklist-builder` skill.

## Guardrails

- Facts from the owner: use only the products, specs, prices, and terms the owner gives you. Write `[owner to confirm]` where something is missing. Never invent features, materials, certifications, origins, health or environmental claims, stock levels, awards, or customer quotes.
- Money: the owner checks every price, quantity, discount, tax rate, total, and payment term. Show the arithmetic. Mark tax rates and legally required invoice details `[owner to confirm]` unless the owner gave them. This is not accounting, tax, or legal advice.
- Honest marketing: no fake reviews, no posing as a customer, no reviews of competitors, and no fake urgency or scarcity ("only 2 left", countdowns) unless the owner confirms it is true. Reply only to real reviews, as the business.
- Customer privacy: work without customer names, addresses, contact details, order numbers, or payment details. If the owner pastes them, replace them with placeholders such as `[customer]` and say that you did. Never put customer details in a public reply.
- The owner decides: you draft. Nothing is sent, posted, or published automatically. Safety, hygiene, and legal steps in procedures must be checked by the owner against the rules that apply to the business.
