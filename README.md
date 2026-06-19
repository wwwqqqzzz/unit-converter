# Unit Converter — Multilingual pSEO Tool Site

A programmatic SEO (pSEO) unit conversion website built with **Astro + TypeScript**, statically generated for maximum speed and SEO performance. Currently supports **English and Chinese**, with the **Length** category.

## Tech Stack

- **Astro 5** — static site generation (SSG)
- **TypeScript** — type-safe unit configuration
- **No backend** — all conversion logic runs in the browser via vanilla JS
- **Deploy target** — Cloudflare Pages or Netlify (free tier)

## Quick Start

```bash
npm install
npm run dev      # local dev server at http://localhost:4321
npm run build    # static output → dist/
npm run preview  # preview the build locally
```

## Project Structure

```
src/
├── data/
│   └── units.ts          ← **Unit definitions** (edit this to add categories/units)
├── i18n/
│   ├── en.json           ← English UI strings
│   └── zh.json           ← Chinese UI strings
├── lib/
│   ├── units.ts          ← Conversion logic (pure functions)
│   └── seo.ts            ← Hreflang, canonical helpers
├── utils/
│   └── i18n.ts           ← Translation loader
├── components/
│   ├── Converter.astro   ← Interactive conversion tool (client-side JS)
│   ├── ConversionTable.astro  ← Common values table
│   ├── CrossLinks.astro  ← Cross-linking navigation
│   └── AdSense.astro     ← AdSense placeholder
├── layouts/
│   └── BaseLayout.astro  ← HTML shell with SEO meta
├── pages/
│   ├── index.astro              ← Root redirect → /en/
│   ├── [lang]/index.astro       ← Language homepage
│   ├── [lang]/length/index.astro ← Category overview
│   ├── [lang]/length/[...slug].astro ← **Dynamic converter/value pages**
│   ├── sitemap.xml.ts           ← Auto-generated sitemap
│   └── robots.txt.ts            ← Robots config
```

## How to Add a New Category

Only one file to edit: `src/data/units.ts`.

Example — adding `weight`:

```typescript
// Add to the categories array:
{
  id: 'weight',
  name: { en: 'Weight', zh: '重量' },
  baseUnitId: 'kg',
  units: [
    { id: 'mg',   name: { en: 'Milligrams', zh: '毫克' },   symbol: 'mg', toBase: 0.000001 },
    { id: 'g',    name: { en: 'Grams',      zh: '克' },     symbol: 'g',  toBase: 0.001 },
    { id: 'kg',   name: { en: 'Kilograms',  zh: '千克' },   symbol: 'kg', toBase: 1 },
    { id: 'lb',   name: { en: 'Pounds',     zh: '磅' },     symbol: 'lb', toBase: 0.453592 },
    { id: 'oz',   name: { en: 'Ounces',     zh: '盎司' },   symbol: 'oz', toBase: 0.0283495 },
  ],
},
```

Then `npm run build` — all pages auto-generate:
- Weight category page at `/en/weight/` and `/zh/weight/`
- All unit pair pages: `/en/weight/kg-to-lb/`, `/zh/weight/千克-磅/`
- All value pages: `/en/weight/5-kg-to-lb/`, `/zh/weight/5-千克-磅/`

No other files need changes.

## How to Add a New Language

1. Create `src/i18n/{code}.json` — translate all strings. Use the same keys as `en.json`.
2. Add the language code to the `LANGUAGES` array in `src/utils/i18n.ts`.
3. Add translated unit names in `src/data/units.ts` (the `name` field on each unit supports `Record<string, string>`).
4. If the language uses a different URL slug pattern, update the slug parsing logic in `[...slug].astro`.
5. `npm run build` — all pages generate for the new language.

## How to Configure AdSense

1. Get your AdSense publisher ID (e.g. `ca-pub-123456789`).
2. Set the environment variable before building:

```bash
PUBLIC_ADSENSE_ID=ca-pub-123456789 npm run build
```

Or edit the default in `src/components/AdSense.astro`:

```typescript
const PUBLISHER_ID = import.meta.env.PUBLIC_ADSENSE_ID || 'ca-pub-XXXXXXXX';
```

3. Replace the `AD_SLOT` constant in the same file with your actual ad slot ID.

Until you set a valid publisher ID, all ad slots render as labeled placeholders (visible during development).

## SEO Features

- **Unique titles + meta descriptions** per page (dynamically includes value/unit/language)
- **Hreflang tags** — correct alternate links for both language versions + `x-default`
- **Canonical URLs** — every page points to itself
- **Semantic HTML** — H1, breadcrumbs, proper heading hierarchy
- **Structured data** — BreadcrumbList + FAQ (JSON-LD)
- **Auto-generated sitemap.xml** — all 504+ pages indexed
- **Mobile-first responsive** design
- **Core Web Vitals friendly** — minimal JS, no frameworks in client bundle

## Deployment

### Cloudflare Pages

1. Push to GitHub.
2. In Cloudflare Dashboard → Pages → Connect Git repo.
3. Build command: `npm run build`
4. Build output directory: `dist`
5. (Optional) Set `PUBLIC_ADSENSE_ID` as an environment variable.

### Netlify

1. Push to GitHub.
2. In Netlify → Import Git repo.
3. Build command: `npm run build`
4. Publish directory: `dist`
5. (Optional) Set `PUBLIC_ADSENSE_ID` as an environment variable.

## Monitization

This site uses Google AdSense. The approach:
- **Tool-first design** — the converter is always the most prominent element
- **3 ad slots per page** — top, middle, bottom — never between the tool and the answer
- **Ad component is configurable** — can adjust density or disable per page

## What's Not Included (First Phase Scope)

- ❌ No other categories beyond Length (add them in `units.ts`)
- ❌ No other languages beyond English/Chinese
- ❌ No backend or API
- ❌ No user accounts or saved conversions
