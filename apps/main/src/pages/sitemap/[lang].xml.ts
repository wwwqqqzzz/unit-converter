import { LANGUAGES, type Lang } from 'converter-core/utils/i18n';
import { categories } from 'converter-core/data/units';
import { getUnitPairs, pairSlug, valueSlug, getCommonValues } from 'converter-core/lib/units';
import { NUMBER_BASE_VALUES, numberBaseSlug } from 'converter-core/data/number-base-values';

export function getStaticPaths() {
  return LANGUAGES.map(lang => ({ params: { lang } }));
}

export const prerender = true;

export async function GET({ params }: { params: { lang: string } }) {
  const lang = params.lang as Lang;
  const site = import.meta.env.SITE || 'https://convunit.net';
  const today = new Date().toISOString().split('T')[0];

  const urls: { loc: string; lastmod: string; changefreq: string; priority: string }[] = [];

  urls.push({ loc: `${site}/${lang}/`, lastmod: today, changefreq: 'weekly', priority: '0.9' });

  for (const cat of categories) {
    urls.push({ loc: `${site}/${lang}/${cat.id}/`, lastmod: today, changefreq: 'weekly', priority: '0.8' });

    if (cat.type === 'calculator') {
      if (cat.id === 'number-base') {
        for (const conv of NUMBER_BASE_VALUES) {
          urls.push({ loc: `${site}/${lang}/${cat.id}/${numberBaseSlug(conv, lang)}/`, lastmod: today, changefreq: 'monthly', priority: '0.5' });
        }
      }
      continue;
    }

    const pairs = getUnitPairs(cat);
    const commonValues = getCommonValues(cat.id);

    for (const [u1, u2] of pairs) {
      urls.push({ loc: `${site}/${lang}/${cat.id}/${pairSlug(u1, u2, lang)}/`, lastmod: today, changefreq: 'monthly', priority: '0.6' });
      for (const val of commonValues) {
        urls.push({ loc: `${site}/${lang}/${cat.id}/${valueSlug(val, u1, u2, lang)}/`, lastmod: today, changefreq: 'monthly', priority: '0.4' });
      }
    }
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
