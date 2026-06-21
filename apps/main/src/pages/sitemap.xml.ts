import { LANGUAGES } from 'converter-core/utils/i18n';
import { categories } from 'converter-core/data/units';
import { getUnitPairs, pairSlug, valueSlug, getCommonValues } from 'converter-core/lib/units';
import { NUMBER_BASE_VALUES, numberBaseSlug } from 'converter-core/data/number-base-values';

export const prerender = true;

export async function GET() {
  const site = import.meta.env.SITE || 'https://unit-converter.pages.dev';
  const urls: string[] = [];

  // Root
  urls.push(site);

  for (const lang of LANGUAGES) {
    // Homepage
    urls.push(`${site}/${lang}/`);

    for (const cat of categories) {
      // Category page
      urls.push(`${site}/${lang}/${cat.id}/`);

      // Calculator categories: no pair/value pages (except number-base)
      if (cat.type === 'calculator') {
        if (cat.id === 'number-base') {
          for (const conv of NUMBER_BASE_VALUES) {
            urls.push(`${site}/${lang}/${cat.id}/${numberBaseSlug(conv, lang)}/`);
          }
        }
        continue;
      }

      const pairs = getUnitPairs(cat);
      const commonValues = getCommonValues(cat.id);

      for (const [u1, u2] of pairs) {
        // Converter page
        urls.push(`${site}/${lang}/${cat.id}/${pairSlug(u1, u2, lang)}/`);

        // Value pages (per-category common values)
        for (const val of commonValues) {
          urls.push(`${site}/${lang}/${cat.id}/${valueSlug(val, u1, u2, lang)}/`);
        }
      }
    }
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url><loc>${url}</loc></url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
