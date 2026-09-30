# Website performance and SEO

Mobile Lighthouse 12.8.2, using Chrome's standard simulated mobile network and CPU settings against https://two-brothers-home.pages.dev. Audited on 29 September 2026 (New York time).

| Category | Before | After |
| --- | ---: | ---: |
| Performance | 73 | 98 |
| Accessibility | 100 | 100 |
| Best practices | 93 | 100 |
| SEO | 92 | 100 |

Largest contentful paint improved from 8.4 seconds to 2.2 seconds; first contentful paint improved from 1.4 seconds to 1.0 seconds. The final audit measured 60 ms total blocking time and 0.001 cumulative layout shift.

Scores are measurements from individual cold-load lab runs and can vary with network and machine conditions. A Lighthouse SEO score checks technical basics; it does not guarantee search rankings.

Changes include a 106 KB WebP hero texture instead of the 1.7 MB PNG, removal of the extra campaign image download, WOFF2 fonts, smaller WebP product photos, HTML phone geometry, a crawlable 18-product catalog, canonical and social metadata, local store structured data, a valid robots.txt, an XML sitemap, readable policy pages, accessible button names, and larger small-screen text.

The store address and Cape Coast pickup point retain the supplied details. No stock availability, business contact details, opening hours, return period, warranty duration, ratings, or reviews have been invented. The policy pages provide the current sale and request process and preserve applicable rights.

Browser checks passed at 320, 390 and 1280 pixels, including product search, bag totals, policy routes and the catalog with JavaScript disabled. All 14 JavaScriptCore catalog and bag checks passed.

The complete before/after HTML and JSON reports are saved locally in reports/. These reports are excluded from the public deployment and Git repository.
