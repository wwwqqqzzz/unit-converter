import { LANGUAGES } from '../utils/i18n';
import { categories, COMMON_VALUES } from '../data/units';
import { getUnitPairs, pairSlug, valueSlug } from '../lib/units';

export const prerender = true;

export async function GET() {
  const site = 'https://unitconvert.example.com';
  const urls: string[] = [];

  // Root
  urls.push(site);

  for (const lang of LANGUAGES) {
    // Homepage
    urls.push(`${site}/${lang}/`);

    for (const cat of categories) {
      // Category page
      urls.push(`${site}/${lang}/${cat.id}/`);

      const pairs = getUnitPairs(cat);

      for (const [u1, u2] of pairs) {
        // Converter page
        urls.push(`${site}/${lang}/${cat.id}/${pairSlug(u1, u2, lang)}/`);

        // Value pages
        for (const val of COMMON_VALUES) {
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
