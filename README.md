# Unit Converter — Multilingual pSEO Tool Site

A programmatic SEO (pSEO) unit conversion website built with **Astro + TypeScript**, statically generating **6,419 pages** across **10 categories**, **81 units**, and **2 languages** (English + Chinese). Designed for passive income through AdSense.

## Tech Stack

- **Astro 5** — static site generation (SSG)
- **TypeScript** — type-safe unit configuration
- **Vitest** — 74 unit tests
- **No backend** — all conversion logic runs in the browser via vanilla JS
- **Deploy target** — Cloudflare Pages or Netlify (free tier)

## Stats

| Metric | Value |
|--------|-------|
| Total pages | 6,419 |
| Categories | 10 (Length, Weight, Temperature, Data, Area, Volume, Speed, Time, Pressure, Energy) |
| Units | 81 |
| Languages | 2 (English, Chinese) |
| Internal links/page | ~22 |
| Structured data | BreadcrumbList + FAQPage + HowTo |
| Tests | 74 passing |

## Quick Start

```bash
npm install
npm run dev      # local dev server at http://localhost:4321
npm run build    # static output → dist/
npm run preview  # preview the build locally
npm test         # run 74 vitest tests
```

## Project Structure

```
src/
├── data/
│   ├── units.ts          ← Unit definitions (edit this to add categories/units)
│   └── descriptions.ts   ← SEO descriptions for all 81 units × 2 languages
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
│   └── AdSense.astro     ← AdSense placeholder
├── layouts/
│   └── BaseLayout.astro  ← HTML shell with SEO meta + JSON-LD
├── pages/
│   ├── index.astro              ← Root redirect → /en/
│   ├── [lang]/index.astro       ← Language homepage
│   ├── [lang]/[category]/index.astro ← Category overview
│   ├── [lang]/[category]/[...slug].astro ← Dynamic converter/value pages
│   ├── sitemap.xml.ts           ← Auto-generated sitemap
│   └── robots.txt.ts            ← Robots config
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

**Total**: 81 units, 297 pairs, ~6,056 content pages + category/home/sitemap = **6,419 pages**

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

Each new language multiplies page count by ~1.5x. Adding Spanish (es) brings total to ~9,600 pages.

## SEO Features

- **Value-in-title** — pages include the answer in the title (e.g. "5 cm = 1.97 inches")
- **Unique meta descriptions** per page
- **Hreflang tags** — en, zh, x-default (3 per page, no duplicates)
- **Canonical URLs** — every page points to itself
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

## Deployment

### Cloudflare Pages

1. Push to GitHub.
2. In Cloudflare Dashboard → Pages → Connect Git repo.
3. Build command: `npm run build`
4. Build output directory: `dist`
5. Set environment variables:
   - `PUBLIC_ADSENSE_ID=ca-pub-XXXXXXXXX`
   - `PUBLIC_SITE_URL=https://your-domain.com`

### Netlify

1. Push to GitHub.
2. In Netlify → Import Git repo.
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Set the same environment variables.

## Documentation

- `docs/roadmap.md` — Full implementation roadmap (8 phases)
- `docs/changelog.md` — Implementation log
- `docs/phase0-1-report.md` — Phase 0 & 1 detailed report
- `docs/phase2-4-report.md` — Phase 2, 3, 4 detailed report

## What's Next

- **Phase 5**: AdSense optimization (sidebar, sticky bottom, responsive ads)
- **Phase 7**: Deploy to Cloudflare Pages + Search Console + Analytics
- **Phase 8**: Add Spanish (es) → ~9,600 pages, then Japanese (ja) → ~12,800 pages
- **Phase 6**: Multi-site architecture (currency, BMI, percentage calculators)