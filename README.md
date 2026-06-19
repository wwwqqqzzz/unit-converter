# Unit Converter — Multilingual pSEO Tool Site

A programmatic SEO (pSEO) unit conversion website built with **Astro + TypeScript**, statically generating **8,041 pages** across **17 categories**, **123 units**, and **2 languages** (English + Chinese). Live at **[convunit.net](https://convunit.net)**.

## Live Site

| 项 | 值 |
|---|---|
| URL | https://convunit.net |
| Pages | 8,041 |
| AdSense | ca-pub-4967918867986181 |
| Search Console | Verified, sitemap submitted (8,041 URLs) |

## Tech Stack

- **Astro 5** — static site generation (SSG)
- **TypeScript** — type-safe unit configuration
- **Vitest** — 74 unit tests
- **Cloudflare Pages** — deployment + CDN
- **AdSense** — conditional rendering, 3 positions
- **No backend** — all conversion logic runs in the browser via vanilla JS

## Stats

| Metric | Value |
|--------|-------|
| Total pages | 8,041 |
| Categories | 17 (Length, Weight, Temperature, Data, Area, Volume, Speed, Time, Pressure, Energy, Power, Fuel Efficiency, Frequency, Angle, Force, Torque, Shoe Size) |
| Units | 123 |
| Languages | 2 (English, Chinese) |
| Internal links/page | ~22 |
| Structured data | BreadcrumbList + FAQPage + HowTo |
| Tests | 74 passing |
| Design | Neo-Brutalist (Space Grotesk, 3px borders, hard shadows, #ffe033 accent) |

## Quick Start

```bash
npm install
npm run dev      # local dev server at http://localhost:4321
npm run build    # static output → dist/
npm run preview  # preview the build locally
npm test         # run 74 vitest tests
```

### Build with AdSense

```bash
PUBLIC_ADSENSE_ID=ca-pub-4967918867986181 npm run build
```

### Deploy to Cloudflare Pages

```bash
npx wrangler pages deploy dist --project-name unit-convert
```

## Project Structure

```
src/
├── data/
│   ├── units.ts          ← Unit definitions (edit this to add categories/units)
│   └── descriptions.ts   ← SEO descriptions for all 123 units × 2 languages
├── i18n/
│   ├── en.json           ← English UI strings
│   └── zh.json           ← Chinese UI strings
├── lib/
│   ├── units.ts          ← Conversion logic (pure functions + convertFn)
│   ├── seo.ts            ← Hreflang, canonical helpers
│   └── __tests__/        ← Vitest test suite
├── utils/
│   └── i18n.ts           ← Translation loader + LANGUAGES config
├── components/
│   ├── Converter.astro   ← Interactive conversion tool (client-side JS)
│   ├── ConversionTable.astro  ← Common values table
│   ├── CrossLinks.astro  ← Cross-linking navigation (12 same-cat + 9 cross-cat)
│   ├── UnitDescription.astro ← Collapsible unit descriptions (native <details>)
│   └── AdSense.astro     ← Conditional AdSense (top/middle/bottom)
├── layouts/
│   └── BaseLayout.astro  ← HTML shell with SEO meta + JSON-LD + theme-color + favicon
├── pages/
│   ├── index.astro              ← Root redirect → /en/
│   ├── [lang]/index.astro       ← Language homepage
│   ├── [lang]/[category]/index.astro ← Category overview
│   ├── [lang]/[category]/[...slug].astro ← Dynamic converter/value pages
│   ├── sitemap.xml.ts           ← Auto-generated sitemap (8,041 URLs)
│   └── robots.txt.ts            ← Robots config
└── public/
    ├── _headers            ← Cloudflare Pages caching + security headers
    ├── _redirects          ← Root / → /en/ (302)
    └── favicon.svg          ← Neo-brutalist yellow U on black
```

## Categories

| Category | Units | Pairs | Common Values | Pages |
|-----------|-------|-------|---------------|-------|
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

**Total**: 123 units, 433 pairs, ~8,037 content pages + category/home/sitemap = **8,041 pages**

## How to Add a New Category

Only one file to edit: `src/data/units.ts`.

```typescript
// Add to the categories array:
{
  id: 'weight',
  name: { en: 'Weight', zh: '重量' },
  baseUnitId: 'g',
  units: [
    { id: 'mg',   name: { en: 'Milligrams', zh: '毫克' }, symbol: 'mg', toBase: 0.001 },
    { id: 'g',    name: { en: 'Grams', zh: '克' }, symbol: 'g', toBase: 1 },
    { id: 'kg',   name: { en: 'Kilograms', zh: '千克' }, symbol: 'kg', toBase: 1000 },
    { id: 'lb',   name: { en: 'Pounds', zh: '磅' }, symbol: 'lb', toBase: 453.592 },
  ],
  // Add CATEGORY_VALUES and CATEGORY_ICONS entries
},
```

Then add descriptions in `src/data/descriptions.ts`, update `en.json`/`zh.json` nav, and run `npm run build`.

For non-linear conversions (e.g. temperature), add a `convertFn`:

```typescript
{
  id: 'temperature',
  name: { en: 'Temperature', zh: '温度' },
  baseUnitId: 'c',
  units: [...],
  convertFn: (value, fromId, toId) => { /* Celsius-based conversion */ },
},
```

## How to Add a New Language

1. Create `src/i18n/{code}.json` — translate all ~50 UI strings
2. Add the language code to `LANGUAGES` in `src/utils/i18n.ts`
3. Add translated unit names in `src/data/units.ts` (each unit's `name` field)
4. Add descriptions in `src/data/descriptions.ts`
5. `npm run build` — all pages generate for the new language

Each new language multiplies page count by ~1.5x. Adding Spanish (es) brings total to ~12,000 pages.

## SEO Features

- **Value-in-title** — pages include the answer in the title (e.g. "5 cm = 1.97 inches")
- **Unique meta descriptions** per page
- **Hreflang tags** — en, zh, x-default (3 per page, no duplicates)
- **Canonical URLs** — every page points to itself (convunit.net)
- **Semantic HTML** — H1, breadcrumbs, proper heading hierarchy
- **JSON-LD structured data**:
  - BreadcrumbList on all pages
  - FAQPage (2-4 questions per page)
  - HowTo (3-step conversion guide per page)
- **Unit descriptions** — collapsible `<details>` elements with unique content per unit
- **Cross-category links** — 9 other category links per page
- **Same-category links** — 12 pair links per page + 1 reverse link
- **Auto-generated sitemap.xml** — category-specific common values
- **Mobile-first responsive** design
- **Core Web Vitals friendly** — minimal JS, no frameworks in client bundle
- **Google Search Console** — verified, sitemap submitted (8,041 URLs)

## Performance & Security

| Feature | Value |
|---------|-------|
| HTML cache | max-age=3600, stale-while-revalidate=86400 |
| Static asset cache | immutable, max-age=31536000 |
| Security headers | X-Frame-Options: DENY, X-Content-Type-Options: nosniff, X-XSS-Protection, Permissions-Policy, Referrer-Policy |
| Root redirect | / → /en/ (302) |
| Font preload | preconnect + preload Google Fonts |
| Favicon | Neo-brutalist yellow U SVG |
| CDN | Cloudflare (HTTP/2, Brotli, H3/QUIC) |
| TTFB (cached) | ~0.38s |

## Deployment

### Cloudflare Pages (current)

```bash
# Build with AdSense
PUBLIC_ADSENSE_ID=ca-pub-4967918867986181 npm run build

# Deploy
npx wrangler pages deploy dist --project-name unit-convert
```

Domain: `convunit.net` (Cloudflare Registrar)

### Environment Variables

| Variable | Description |
|----------|-------------|
| `PUBLIC_ADSENSE_ID` | AdSense publisher ID (e.g. `ca-pub-4967918867986181`) |
| `PUBLIC_ADSENSE_SLOT_TOP` | Ad slot for top position |
| `PUBLIC_ADSENSE_SLOT_MIDDLE` | Ad slot for middle position |
| `PUBLIC_ADSENSE_SLOT_BOTTOM` | Ad slot for bottom position |

## Documentation

- `docs/roadmap.md` — Full implementation roadmap (8 phases)
- `docs/changelog.md` — Implementation log
- `docs/phase5-7-report.md` — Deployment + AdSense detailed report

## What's Next

- **Phase 8**: Add Spanish (es) → ~12,000 pages, then Japanese (ja) → ~16,000 pages
- **Phase 6**: Multi-site architecture (currency, BMI, percentage calculators)
- **Analytics**: Google Analytics 4 integration