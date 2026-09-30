---
title: "TWO BROTHERS  HOME"
description: Website handover and brand reference for the TWO BROTHERS HOME storefront.
---
# TWO BROTHERS  HOME

Website handover · Updated 29 September 2026

[Open the website](https://two-brothers-apple-home.brotherdavid652.chatgpt.site)

## Project overview

A Ghanaian storefront for browsing iPhones and Apple Watches, comparing the listed prices, and reviewing products in a shopping bag. The business operates in Kumasi and Cape Coast. All prices are in **Ghana cedis (GH₵ / GHS)**.

**Current status:** private website preview. The catalog and shopping bag work. **Online payments and order submission are not enabled.** Adding an item to the bag or reviewing it does not reserve stock, create an order, or charge money.

## Brand and design

- Business name: **TWO BROTHERS  HOME**.
- Headline: **Big upgrades. Better prices.**
- Visual direction: charcoal text, burnt-orange accents, forest-green details, and a light neutral background.
- Fonts: Manrope for headings and DM Sans for body text, with sans-serif fallbacks.
- Responsive product grids, clear product prices, and navigation to iPhones, sealed phones, watches, and stores.

## Refinements in this update

- Improved typography, contrast, product-card spacing, and price alignment.
- Added a persistent navigation bar and a direct link to the new and sealed collection.
- Enlarged bag controls and product buttons for touch use.
- Improved keyboard focus when opening the bag, changing quantities, removing items, and reviewing an order.
- Clarified the difference between a product subtotal and a completed purchase.
- Made the unavailable payment status explicit in the footer, bag, and order review.
- Clarified that catalog photos show model ranges and do not guarantee every pictured colour is stocked.
- Preserved all supplied prices and both store locations.

## Catalog

The following is the business owner's supplied price list. Stock quantities, device-specific battery percentages, and most colour options have not been provided.

### iPhones — battery health 87–100%

| Model | Storage | Price (GH₵) |
| --- | --- | ---: |
| iPhone 11 | 64GB | 2,200 |
| iPhone 11 | 128GB | 2,500 |
| iPhone 12 | 64GB | 2,400 |
| iPhone 12 | 128GB | 2,800 |
| iPhone 12 Pro | 128GB | 3,350 |
| iPhone 13 | 128GB | 3,600 |
| iPhone 13 Pro | 128GB | 4,550 |
| iPhone 13 Pro Max | 128GB | 5,000 |
| iPhone 14 | 128GB | 4,000 |
| iPhone 15 | 128GB | 5,700 |
| iPhone 15 Pro Max | 256GB | 8,750 |
| iPhone 16 Pro Max | 256GB | 11,500 |

Battery health is a supplied range for this collection. Exact condition, repair history, accessories, warranty, and the battery percentage of an individual unit still need confirmation.

### New, non-activated, sealed iPhones

| Model | Storage / colour supplied | Price (GH₵) |
| --- | --- | ---: |
| iPhone 17 Pro Max | 256GB | 17,200 |
| iPhone 18 Pro Max | 256GB · Brown | 24,000 |

The original price list repeated the iPhone 17 Pro Max. The owner subsequently confirmed **GH₵17,200**, so the website contains one listing at that price.

### Apple Watches

**Every watch comes with a charger**, as supplied by the business owner.

| Model | Size supplied | Price (GH₵) |
| --- | --- | ---: |
| Apple Watch Series 6 | 44mm | 1,800 |
| Apple Watch Series 7 | 44mm | 2,050 |
| Apple Watch Series 8 | 45mm | 2,750 |
| Apple Watch Series 10 | 45mm | 4,000 |

Sizes are retained from the supplied list. Confirm the exact case sizes and model numbers, especially Series 7 and Series 10, before opening checkout. GPS/cellular variants, watch condition, colours, and battery health have not been supplied.

## Store locations

### Kumasi

Blessing House, PZ, **Store No. 24**.

[Search for the area on Google Maps](https://www.google.com/maps/search/?api=1&query=Blessing+House+PZ+Kumasi+Ghana)

### Cape Coast

**Dr Wash, Ayensu, UCC**.

[Search for the area on Google Maps](https://www.google.com/maps/search/?api=1&query=Dr+Wash+Ayensu+UCC+Cape+Coast+Ghana)

These are area search links, not verified store pins. Opening hours, a business phone number, email address, and precise map pins still need to be supplied.

## What works now

1. Browse 18 product listings: 12 battery-health iPhone options, 2 sealed iPhones, and 4 watches.
2. View the supplied storage/size, prices, battery information, and charger notes.
3. Add products to the bag, increase or decrease quantity, and remove products.
4. Review the product subtotal in GH₵.
5. See a clear payment-unavailable message; no order is submitted.
6. Navigate to either store's location details.

The shopping bag exists only in the current page session and resets when the page reloads. The 99-unit interface limit is a guard against excessive quantities, not a statement of available inventory. There is no customer account, order database, inventory reservation, delivery calculator, or payment processing service yet.

## Next steps for online payments

The owner has not created a payment-provider account. Paystack was suggested as a possible provider; this is a recommendation, not a connected or selected account.

1. Choose a payment provider and create/activate the business account.
2. Supply the fulfillment rules: store pickup, delivery areas, delivery charges, and expected timing.
3. Confirm sale terms, returns/warranty arrangements, stock quantities, and the exact variants offered.
4. Implement a server-backed checkout that calculates prices from a trusted catalog and stores pending orders.
5. Redirect customers to the provider's hosted payment flow. Keep secret keys on the server.
6. Verify payment with the provider on the server, including amount, currency, and order reference. Handle duplicate callbacks safely.
7. Mark an order as paid only after successful verification, and make it available to the shop for fulfillment.
8. Test successful, failed, abandoned, and duplicate payment scenarios before accepting real payments.
9. When the shop is ready, change the site's audience from private to public and optionally attach a custom domain.

These are pending implementation steps. The present website does not include a connected payment integration or a live order-processing backend.

## Maintenance notes

The current implementation is static HTML, CSS, and JavaScript:

- `dist/index.html`: page content, metadata, navigation, stores, and dialog markup.
- `dist/styles.css`: theme, layouts, responsive rules, and accessible control styling.
- `dist/app.js`: the product list, bag calculations, UI behavior, and page tools.
- `dist/assets/`: product images.
- `asset-sources.json`: image source records.
- `.openai/hosting.json`: the existing site's hosting identity and static output location.

To update a price, change the matching product's numeric `price` in `dist/app.js`; keep its stable product ID. Check the hero price separately if changing the featured iPhone 18 Pro Max. Keep this Markdown catalog synchronized with future catalog edits.

Prices currently live in browser code because checkout is disabled. Before enabling payments, the server must become the authority for prices and stock; a browser-calculated total must never authorize a charge.

The website exposes page tools to read the catalog, read the bag, and add an item to the bag. They use the same bag state as the visible controls and cannot submit an order or process payment.

## Product imagery

Photos were sourced from Apple's device-identification pages and stored locally. They show representative model ranges. The owner should confirm reuse rights or supply original stock photos before a public business launch.

- [Apple: Identify your iPhone](https://support.apple.com/en-us/108044)
- [Apple: Identify your Apple Watch](https://support.apple.com/en-us/108056)

## Verification

- JavaScript syntax checked.
- Catalog and prices checked against the supplied list, including the confirmed GH₵17,200 price.
- Browser checks confirmed that two iPhone 13 units subtotal GH₵7,200 and decreasing to one changes the subtotal to GH₵3,600.
- Keyboard focus remains on the quantity control after a change and moves to the order-review heading when appropriate.
- Invalid product IDs are rejected without changing the bag.
- The payment button is disabled and the review explicitly states that no order has been placed.
- Mobile layouts checked at 320px and 390px viewport widths with no horizontal overflow.
- Payment processing cannot be tested until a provider and backend are connected.
