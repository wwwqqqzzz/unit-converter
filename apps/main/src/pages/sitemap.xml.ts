import { LANGUAGES } from 'converter-core/utils/i18n';

export const prerender = true;

export async function GET() {
  const site = import.meta.env.SITE || 'https://convunit.net';
  const today = new Date().toISOString().split('T')[0];

  const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${site}/sitemap-root.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
${LANGUAGES.map(lang => `  <sitemap>
    <loc>${site}/sitemap/${lang}.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>`).join('\n')}
</sitemapindex>`;

  return new Response(sitemapIndex, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
