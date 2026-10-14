---
name: biz-product-description
description: "Writes an honest product description for a shop window, website, or marketplace listing from the facts the owner gives: what it is, specs, materials, care, price, and who it suits. Use when an owner asks for a product description, a listing, product copy, or a rewrite of an existing one."
license: MIT
---

# Product description

Write a description a customer can trust, from facts the owner gives you.

## Ask first

1. The product and its facts: name, what it does, size or quantity, materials or ingredients, colors or variants, care or use instructions, price.
2. Where it will appear: shop shelf card, own website, a marketplace (name it), or social media. Ask for the marketplace's length limits or banned words if the owner has them.
3. Who buys it and the owner's tone, with an example sentence if they have one ("friendly, a bit cheeky").
4. Anything the owner can back up and wants stressed: handmade, local, a guarantee, a certification with its name.

## Steps

1. List the facts you were given. Anything a buyer would expect that is missing (size, care, allergens for food, age range for toys) goes in a "missing" list, not into the copy.
2. Write a headline or title that says what the product is in plain words. For marketplaces, put the product type and key spec first and keep to the stated limit.
3. Write one short opening paragraph on what the product does for the buyer, using only the facts.
4. Write a bullet list of specs: size, materials, variants, care, what is in the box.
5. End with one practical line: shipping, pickup, or how to order, only if the owner gave it.
6. Read every sentence against the facts list. Delete any claim with no fact behind it.

## Rules

- Concrete beats clever: "holds a 15-inch laptop" beats "fits all your essentials".
- No superlatives you can't prove ("best", "number one", "the only").
- No health, safety, eco, or origin claims unless the owner states them, and keep their wording.

## Output

1. Title or headline.
2. Description paragraph.
3. Spec bullets.
4. A "Check before you publish" list: every price, spec, and claim to confirm, plus the "missing" list.

Offer a short version for social media next with the `biz-social-post` skill.

## Guardrails

- Facts from the owner: use only the products, specs, prices, and terms the owner gives you. Write `[owner to confirm]` where something is missing. Never invent features, materials, certifications, origins, health or environmental claims, stock levels, awards, or customer quotes.
- Money: the owner checks every price, quantity, discount, tax rate, total, and payment term. Show the arithmetic. Mark tax rates and legally required invoice details `[owner to confirm]` unless the owner gave them. This is not accounting, tax, or legal advice.
- Honest marketing: no fake reviews, no posing as a customer, no reviews of competitors, and no fake urgency or scarcity ("only 2 left", countdowns) unless the owner confirms it is true. Reply only to real reviews, as the business.
- Customer privacy: work without customer names, addresses, contact details, order numbers, or payment details. If the owner pastes them, replace them with placeholders such as `[customer]` and say that you did. Never put customer details in a public reply.
- The owner decides: you draft. Nothing is sent, posted, or published automatically. Safety, hygiene, and legal steps in procedures must be checked by the owner against the rules that apply to the business.
