TWO BROTHERS APPLE HOME

Open dist/index.html in a browser to view the completed local storefront.
No dependency installation or build step is needed.

The website preserves the catalog from Agent/TWO BROTHERS  HOME.md:
12 battery-health iPhone variants, 2 sealed iPhones, and 4 Apple Watches.
Prices are in Ghana cedis. Online payments and order submission are disabled.
The shopping bag resets on reload and does not reserve stock.

Implementation:
dist/index.html: page, navigation, store links, and dialogs.
dist/styles.css: responsive light theme, local fonts, and focus styles.
dist/refinements.css: refined spacing, card hierarchy, responsive controls, and bag layout.
dist/app.js: catalog, filters, search, sorting, and bag state.
dist/phone-display.js: dimensional rotating phones with texture loading fallback.
dist/motion.js: entrance and scroll reveals with reduced-motion support.
asset-sources.json: source records and generated campaign image prompt.

Validation:
JavaScriptCore runtime checks: 18 variants, exact prices, bag arithmetic,
invalid ID rejection, search, empty state, removal, quantity limit, budget filters,
reset controls, device details, and direct collection links.
Run: /System/Library/Frameworks/JavaScriptCore.framework/Versions/A/Helpers/jsc verify.js
Browser visual checks were unavailable because no browser was connected.

Public launch still needs the shop's exact stock and variants, phone/contact,
opening hours, fulfillment policy, warranty/return terms, and confirmed image rights.
No contact details or reviews have been invented.
The existing hosted preview was not updated: this folder contains no hosting
project identity or source repository. No second site was created.

Design follows the handover's charcoal, burnt orange, forest green, light neutral,
Manrope headings, DM Sans body, and responsive product grids. Native HTML/CSS/JS
follows the handover's static architecture. Campaign image generated with the
built-in image tool, then compressed locally. Original assets retained.
