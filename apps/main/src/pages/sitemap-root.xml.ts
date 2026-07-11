import { LANGUAGES } from 'converter-core/utils/i18n';
import { categories } from 'converter-core/data/units';
import { getUnitPairs, pairSlug, valueSlug, getCommonValues } from 'converter-core/lib/units';

export const prerender = true;

export async function GET() {
  const site = import.meta.env.SITE || 'https://convunit.net';
  const today = new Date().toISOString().split('T')[0];

  const urls: { loc: string; lastmod: string; changefreq: string; priority: string }[] = [];

  urls.push({ loc: site, lastmod: today, changefreq: 'weekly', priority: '1.0' });

  for (const lang of LANGUAGES) {
    urls.push({ loc: `${site}/${lang}/`, lastmod: today, changefreq: 'weekly', priority: '0.9' });
    for (const cat of categories) {
      urls.push({ loc: `${site}/${lang}/${cat.id}/`, lastmod: today, changefreq: 'weekly', priority: '0.8' });
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
