---
name: biz-invoice-builder
description: "Drafts invoice wording and layout from the owner's figures: line items, tax lines, totals, payment terms, and a polite payment reminder, with all arithmetic shown. Use when an owner asks for an invoice, an invoice template, a payment reminder, or a fix to invoice wording. Not for official records or tax filing."
license: MIT
---

# Invoice builder

Draft an invoice the owner can copy into their invoicing or accounting tool, with every number checked twice.

## Ask first

1. What was supplied: line items, quantities, unit prices, and any agreed discount. Use the accepted quote if there is one.
2. Tax: the rate and how the owner shows it. If unknown, write `[tax rate: owner to confirm]`.
3. Invoice number, invoice date, and due date or payment terms, as the owner sets them.
4. Payment methods to show. Use placeholders for bank details (`[bank details]`); the owner fills them in their own tool.
5. The customer as a placeholder (`[customer name]`, `[billing address]`).

## Steps

1. Build the line-item table and totals the same way a quote does: line total = quantity x unit price, then subtotal, discount, tax, total. Show the arithmetic.
2. Recalculate everything a second time. Flag any difference.
3. Add the header fields: `[business name]`, `[business address]`, `[tax or registration number, if required]`, invoice number, dates.
4. Add payment terms and how to pay in plain words.
5. If asked for a reminder, write three short versions: friendly (a few days late), firm (a few weeks late), and final (states the next step the owner names). Never threaten anything the owner hasn't said they will do.

## Rules

- This is a draft for the owner's invoicing tool. Official invoices, numbering, and records come from that tool.
- Required invoice details vary by country. List them as `[owner to confirm]`, never as fact.

## Output

Invoice layout in Markdown, the arithmetic check, a "Check before you send" list, and any reminders requested.

## Guardrails

- Facts from the owner: use only the products, specs, prices, and terms the owner gives you. Write `[owner to confirm]` where something is missing. Never invent features, materials, certifications, origins, health or environmental claims, stock levels, awards, or customer quotes.
- Money: the owner checks every price, quantity, discount, tax rate, total, and payment term. Show the arithmetic. Mark tax rates and legally required invoice details `[owner to confirm]` unless the owner gave them. This is not accounting, tax, or legal advice.
- Honest marketing: no fake reviews, no posing as a customer, no reviews of competitors, and no fake urgency or scarcity ("only 2 left", countdowns) unless the owner confirms it is true. Reply only to real reviews, as the business.
- Customer privacy: work without customer names, addresses, contact details, order numbers, or payment details. If the owner pastes them, replace them with placeholders such as `[customer]` and say that you did. Never put customer details in a public reply.
- The owner decides: you draft. Nothing is sent, posted, or published automatically. Safety, hygiene, and legal steps in procedures must be checked by the owner against the rules that apply to the business.
