# Unit Converter — Multilingual pSEO Tool Site

A programmatic SEO (pSEO) unit conversion website built with **Astro + TypeScript**, serving **29,473 URLs** across **23 categories** (17 converters + 6 calculators), **123 units**, and **12 languages**. Live at **[convunit.net](https://convunit.net)**.

## Live Site

| 项 | 值 |
|---|---|
| URL | https://convunit.net |
| Pages | 29,473 |
| Languages | 12 (EN, 中文, ES, FR, DE, JA, PT, IT, KO, RU, HI, TR) |
| Categories | 17 converters + 6 calculators = 23 total |
| Architecture | Cloudflare Workers SSR (unlimited pages) |
| AdSense | ca-pub-4967918867986181 |
| Search Console | Verified, sitemap submitted (29,473 URLs) |

## Tech Stack

- **Astro 5** — Cloudflare Workers SSR (`@astrojs/cloudflare` adapter)
- **TypeScript** — type-safe unit configuration
- **Vitest** — 74 unit tests
- **Cloudflare Workers** — server-side rendering, unlimited pages
- **Bing Translation API** — free multilingual content generation
- **AdSense** — conditional rendering, 3 positions

## Stats

| Metric | Value |
|--------|-------|
| Total URLs | 29,473 |
| Languages | 12 (en, zh, es, fr, de, ja, pt, it, ko, ru, hi, tr) |
| Categories | 23 (17 converters + 6 interactive calculators) |
| Units | 123 |
| Calculators | Number Base, Unix Timestamp, Percentage, BMI, Age, Currency |
| Unit descriptions | 1,230 (123 units × 10 non-English languages) |
| Internal links/page | ~22 |
| Structured data | BreadcrumbList + FAQPage + HowTo |
| Tests | 74 passing |
| Design | Neo-Brutalist (Space Grotesk, 3px borders, hard shadows, #ffe033 accent) |

## Quick Start

```bash
npm install
npm run dev              # local dev server at http://localhost:4321
npm run build            # output → dist/
PUBLIC_ADSENSE_ID=ca-pub-4967918867986181 npm run build  # build with AdSense
npx wrangler pages deploy dist --project-name unit-convert  # deploy
```

## Project Structure

```
src/
├── data/
│   ├── units.ts          ← Unit definitions (edit this to add categories/units)
│   └── descriptions.ts   ← SEO descriptions: 123 units × 12 languages (1,230 total)
├── i18n/
│   ├── en.json           ← English UI strings
│   ├── zh.json           ← Chinese UI strings
│   ├── es.json           ← Spanish (and 9 more languages...)
│   └── ...
├── lib/
│   ├── units.ts          ← Conversion logic (pure functions + convertFn)
│   ├── seo.ts            ← Hreflang, canonical helpers
│   └── __tests__/        ← Vitest test suite
├── utils/
│   └── i18n.ts           ← Translation loader + LANGUAGES (12 languages)
├── components/
│   ├── Converter.astro   ← Interactive conversion tool (client-side JS)
│   ├── ConversionTable.astro  ← Common values table
│   ├── CrossLinks.astro  ← Cross-linking navigation (12 same-cat + 9 cross-cat)
│   ├── UnitDescription.astro ← Collapsible unit descriptions (native <details>)
│   ├── AdSense.astro     ← Conditional AdSense (top/middle/bottom)
│   └── calculators/      ← Interactive calculator components (no units/pairs)
│       ├── NumberBase.astro   ← Bin/Oct/Dec/Hex converter
│       ├── Timestamp.astro    ← Unix timestamp ↔ date
│       ├── Percentage.astro   ← Discount/increase/difference
│       ├── BMI.astro          ← BMI with unit toggles + color scale
│       └── Age.astro          ← Age calculator + stats
├── layouts/
│   └── BaseLayout.astro  ← HTML shell with SEO meta + JSON-LD + theme-color + favicon
├── middleware.ts          ← SSR middleware: cache-control + security headers
├── pages/
│   ├── index.astro              ← Root redirect → /en/
│   ├── [lang]/index.astro       ← Language homepage
│   ├── [lang]/[category]/index.astro ← Category overview
│   ├── [lang]/[category]/[...slug].astro ← Dynamic converter/value pages
│   ├── sitemap.xml.ts           ← Auto-generated sitemap (29,401 URLs)
│   └── robots.txt.ts            ← Robots config
├── public/
│   ├── _headers            ← Legacy headers (partial use in SSR mode)
│   ├── _redirects          ← Root / → /en/ (302)
│   └── favicon.svg         ← Neo-brutalist yellow U on black
└── wrangler.toml           ← Cloudflare Workers SSR configuration
```

## Categories

| Category | Units | Pairs | Values | Pages/lang |
|-----------|-------|-------|--------|-----------|
| Length | 8 | 28 | 10 | 616 |
| Weight | 8 | 28 | 10 | 616 |
| Temperature | 3 | 3 | 10 | 66 |
| Data Storage | 10 | 45 | 10 | 990 |
| Area | 10 | 45 | 10 | 990 |
| Volume | 13 | 78 | 9 | 1,404 |
| Speed | 6 | 15 | 8 | 240 |
| Time | 8 | 28 | 8 | 448 |
| Pressure | 8 | 28 | 7 | 392 |
| Energy | 7 | 21 | 7 | 294 |
| Power | 8 | 28 | 8 | 504 |
| Fuel Efficiency | 4 | 6 | 6 | 43 |
| Frequency | 6 | 15 | 7 | 136 |
| Angle | 6 | 15 | 8 | 136 |
| Force | 6 | 15 | 7 | 120 |
| Torque | 6 | 15 | 7 | 120 |
| Shoe Size | 6 | 15 | 0 | 32 |

### Calculators (non-converter interactive tools)

| Calculator | Pages/lang | Description |
|------------|-----------|-------------|
| Number Base | 1 | Bin/Oct/Dec/Hex bidirectional conversion |
| Unix Timestamp | 1 | Timestamp ↔ date, local/UTC sync |
| Percentage | 1 | Discount/increase/difference with formula |
| BMI | 1 | kg/lb + cm/ft, category badge, color scale |
| Age | 1 | Years/months/days, total stats, next birthday |
| Currency | 1 | Live rates via Frankfurter API, 30 currencies, SSR-embedded |

**123 units, 433 pairs, ~2,450 content pages + 6 calculator pages × 12 languages = 29,473 URLs total**

## SEO Features

- **Value-in-title** — pages include the answer in the title (e.g. "5 cm = 1.97 inches")
- **Unique meta descriptions** per page
- **Hreflang tags** — 12 languages + x-default (13 per page)
- **Canonical URLs** — every page points to itself (convunit.net)
- **Unit descriptions** — collapsible `<details>` with 123 units × 12 languages (1,230 descriptions)
- **JSON-LD structured data** — BreadcrumbList + FAQPage + HowTo
- **Cross-category links** — 9 other category links per page
- **Same-category links** — 12 pair links per page + 1 reverse link
- **Auto-generated sitemap.xml** — 29,473 URLs
- **Mobile-first responsive** design
- **Google Search Console** — verified, sitemap submitted (29,473 URLs)

## Performance & Security

| Feature | Value |
|---------|-------|
| HTML cache (middleware) | max-age=3600, stale-while-revalidate=86400 |
| Static asset cache | immutable, max-age=31536000 |
| Security headers | X-Frame-Options: DENY, X-Content-Type-Options: nosniff, X-XSS-Protection, Permissions-Policy, Referrer-Policy |
| Root redirect | / → /en/ (302) |
| Font preload | preconnect + preload Google Fonts |
| CDN | Cloudflare (HTTP/2, Brotli, H3/QUIC) |
| TTFB (cached) | ~0.38s |

## Deployment

```bash
# Build with AdSense
PUBLIC_ADSENSE_ID=ca-pub-4967918867986181 npm run build

# Deploy to Cloudflare Workers SSR
npx wrangler pages deploy dist --project-name unit-convert
```

Domain: `convunit.net` (Cloudflare Registrar)

## Documentation

- `docs/roadmap.md` — Full implementation roadmap
- `docs/changelog.md` — Implementation log
- `docs/phase5-7-report.md` — Deployment + AdSense report
- `docs/phase8-report.md` — Multilingual + SSR migration report
- `docs/phase9-report.md` — 6 interactive calculators (Number Base, Timestamp, Percentage, BMI, Age, Currency)

## What's Next

- **Medium Priority**: Number base SEO value pages ("binary-42-to-decimal" long-tail pages)
- **Medium Priority**: Enhanced shoe size landing pages
- **Low Priority**: Multi-site monorepo with shared converter-core package (phase 6)