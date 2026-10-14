# Painter and decorator: quote to invoice

> **Owner request.** I'm a sole-trader painter (invented business: Hill Street Decorating). Quote for repainting a 3-bedroom flat: walls and ceilings in 3 bedrooms, living room, and hallway, 2 coats. Labour 24 hours at 35 per hour. Paint and materials 180. Prices exclude tax; add tax at 20%. 30% deposit to book, the rest on completion, due in 14 days. Quote valid 30 days. Not included: woodwork, wallpaper removal, moving heavy furniture. Later: the customer accepted, and the job is done. Make the invoice, number HSD-0042, and a friendly reminder for when it's late.

## Quote (`biz-quote-builder`)

**Cover note.**

> Hello `[customer name]`, thank you for having me round to look at the flat. Here is my quote for painting the walls and ceilings, two coats throughout. Any questions, just reply to this email.

**Quote for `[customer name]`, `[site address]`. Date `[quote date]`. Valid 30 days.**

| Item | Description | Qty | Unit price | Line total |
| --- | --- | --- | --- | --- |
| 1 | Labour: walls and ceilings, 3 bedrooms, living room, hallway, 2 coats | 24 hours | 35.00 | 840.00 |
| 2 | Paint and materials | 1 | 180.00 | 180.00 |
| | **Subtotal** | | | **1,020.00** |
| | Tax at 20% | | | 204.00 |
| | **Total** | | | **1,224.00** |

**Arithmetic check.**

- Labour: 24 x 35.00 = 840.00
- Subtotal: 840.00 + 180.00 = 1,020.00
- Tax: 1,020.00 x 0.20 = 204.00
- Total: 1,020.00 + 204.00 = 1,224.00
- Deposit 30%: 1,224.00 x 0.30 = 367.20. Balance: 1,224.00 - 367.20 = 856.80.

Rechecked: all lines agree.

**Included.** Walls and ceilings in the three bedrooms, living room, and hallway. Two coats. Paint and materials. Covering floors and clearing up.

**Not included.** Woodwork (doors, skirting, frames). Wallpaper removal. Moving heavy furniture.

**Terms.**

- This quote is valid for 30 days from `[quote date]`.
- A deposit of 367.20 (30%) books the job.
- The balance of 856.80 is due within 14 days of completion.
- To accept, reply to this email or sign below.

**Check before you send.**

- Labour hours, hourly rate, materials figure, and tax rate (20%).
- Totals, deposit, and balance.
- "Covering floors and clearing up" was added from normal practice: confirm or delete.
- Business details your country may require on a quote, such as a registration or tax number: `[owner to confirm]`.

## Invoice (`biz-invoice-builder`)

**Hill Street Decorating** `[business address]` `[tax or registration number, if required]`

**Invoice HSD-0042.** Invoice date `[completion date]`. Due date `[completion date + 14 days]`.

**Bill to.** `[customer name]`, `[billing address]`

| Item | Description | Qty | Unit price | Line total |
| --- | --- | --- | --- | --- |
| 1 | Labour: walls and ceilings, 3 bedrooms, living room, hallway, 2 coats | 24 hours | 35.00 | 840.00 |
| 2 | Paint and materials | 1 | 180.00 | 180.00 |
| | **Subtotal** | | | **1,020.00** |
| | Tax at 20% | | | 204.00 |
| | **Total** | | | **1,224.00** |
| | Deposit received | | | -367.20 |
| | **Balance due** | | | **856.80** |

**Arithmetic check.** Same lines as the accepted quote. 1,224.00 - 367.20 = 856.80. Rechecked.

**How to pay.** Bank transfer to `[bank details]`, using HSD-0042 as the reference.

**Check before you send.** That the deposit of 367.20 was actually received; the dates; the tax rate; and the invoice details your country requires `[owner to confirm]`. Issue the final invoice from your invoicing tool.

## Payment reminders

**Friendly (a few days late).**

> Hello `[customer name]`, a quick reminder that invoice HSD-0042 for 856.80 was due on `[due date]`. If you've already paid, thank you and please ignore this. Bank details are on the invoice. Best wishes, `[your name]`, Hill Street Decorating

**Firm (a few weeks late).**

> Hello `[customer name]`, invoice HSD-0042 for 856.80 is now `[number]` days overdue. Please pay by `[new date]` or let me know if there's a problem with the invoice. `[your name]`

**Final.** Not drafted: tell me what you'll do next if it stays unpaid, and I'll write it around that. I won't mention a step you haven't decided on.
