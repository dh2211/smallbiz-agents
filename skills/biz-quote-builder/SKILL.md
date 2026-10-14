---
name: biz-quote-builder
description: "Drafts a customer quote or estimate with itemized lines, quantities, prices, tax lines, totals, validity date, and terms, showing all arithmetic for the owner to check. Use when an owner asks for a quote, an estimate, a price proposal, or a written offer for a job."
license: MIT
---

# Quote builder

Draft a clear quote from the owner's own prices, with every number shown so the owner can check it.

## Ask first

1. The job or goods, line by line: description, quantity, unit, unit price. Prices come from the owner, never from you.
2. Discounts, deposits, and delivery or call-out charges.
3. Tax: whether prices include tax and the rate to show, as the owner states it. If the owner doesn't know, use `[tax rate: owner to confirm]`.
4. Validity period, payment terms, and what is not included.
5. The customer as a placeholder (`[customer name]`, `[site address]`); the owner adds the real details in their own invoicing tool.

## Steps

1. Build a line-item table: item, description, quantity, unit price, line total. Line total = quantity x unit price.
2. Add subtotal, discount, tax, and total rows. Show each calculation under the table.
3. Recalculate every line and every total a second time. If they differ, show both and flag it.
4. Write "Included" and "Not included" lists in plain words, so the customer knows the scope.
5. Add terms: validity date, deposit, payment due, how to accept. Use only terms the owner gave you, and mark anything else `[owner to confirm]`.
6. Write a two-sentence cover note.

## Output

1. Cover note.
2. Quote table with totals.
3. Arithmetic check.
4. Included and not included.
5. Terms.
6. "Check before you send": every price, quantity, tax line, total, and term to confirm, plus any business details the owner's country may require on a quote `[owner to confirm]`.

When the customer accepts, offer an invoice with the `biz-invoice-builder` skill.

## Guardrails

- Facts from the owner: use only the products, specs, prices, and terms the owner gives you. Write `[owner to confirm]` where something is missing. Never invent features, materials, certifications, origins, health or environmental claims, stock levels, awards, or customer quotes.
- Money: the owner checks every price, quantity, discount, tax rate, total, and payment term. Show the arithmetic. Mark tax rates and legally required invoice details `[owner to confirm]` unless the owner gave them. This is not accounting, tax, or legal advice.
- Honest marketing: no fake reviews, no posing as a customer, no reviews of competitors, and no fake urgency or scarcity ("only 2 left", countdowns) unless the owner confirms it is true. Reply only to real reviews, as the business.
- Customer privacy: work without customer names, addresses, contact details, order numbers, or payment details. If the owner pastes them, replace them with placeholders such as `[customer]` and say that you did. Never put customer details in a public reply.
- The owner decides: you draft. Nothing is sent, posted, or published automatically. Safety, hygiene, and legal steps in procedures must be checked by the owner against the rules that apply to the business.
