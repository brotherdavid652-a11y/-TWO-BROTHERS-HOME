TWO BROTHERS APPLE HOME

Website: https://two-brothers-home.pages.dev
Local preview: http://127.0.0.1:3000
Serve the dist directory to use the policy links and absolute asset URLs.
The generated dist files require no dependency installation to deploy.
After editing catalog data or CSS, run: node build-site.cjs

The website preserves the catalog from Agent/TWO BROTHERS  HOME.md:
12 battery-health iPhone variants, 2 sealed iPhones, and 4 Apple Watches.
Prices are in Ghana cedis. Online payments and order submission are disabled.
The shopping bag resets on reload and does not reserve stock.

Implementation:
dist/index.html: page, navigation, store links, and dialogs.
dist/styles.css: responsive light theme, local fonts, and focus styles.
dist/refinements.css: refined spacing, card hierarchy, responsive controls, and bag layout.
dist/app.js: catalog, filters, search, sorting, and bag state.
dist/phone-display.js: pauses the static dimensional phones when offscreen.
dist/motion.js: entrance and scroll reveals with reduced-motion support.
build-site.cjs: generates the static catalog, shared CSS, policies and SEO metadata.
dist/terms.html, privacy.html, refund-policy.html: store policies.
dist/robots.txt, sitemap.xml: crawl rules and canonical page sitemap.
dist/_headers: Cloudflare security and asset caching headers.
asset-sources.json: source records and generated campaign image prompt.

Validation:
JavaScriptCore runtime checks: 18 variants, exact prices, bag arithmetic,
invalid ID rejection, search, empty state, removal, quantity limit, budget filters,
reset controls, device details, and direct collection links.
Run: /System/Library/Frameworks/JavaScriptCore.framework/Versions/A/Helpers/jsc verify.js
Headless Chrome checks: 320px, 390px and 1280px layouts, policy routes,
bag arithmetic, product search, and the complete catalog without JavaScript.
Mobile Lighthouse before: performance 73, accessibility 100,
best practices 93, SEO 92 (public Cloudflare site, 29 September 2026).
Final results and reports are recorded in LIGHTHOUSE.md.

Public launch still needs the shop's exact stock and variants, phone/contact,
opening hours, fulfillment policy, warranty/return terms, and confirmed image rights.
No contact details or reviews have been invented.
GitHub: https://github.com/brotherdavid652-a11y/-TWO-BROTHERS-HOME
Cloudflare Pages uses direct upload; automatic Git deployments are unavailable.

Design follows the handover's charcoal, burnt orange, forest green, light neutral,
Manrope headings, DM Sans body, and responsive product grids. Native HTML/CSS/JS
follows the handover's static architecture. Campaign image generated with the
built-in image tool, then compressed locally. Original assets retained.
