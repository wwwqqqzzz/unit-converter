import { LANGUAGES } from 'converter-core/utils/i18n';
export const prerender = true;
const site = 'https://age.convunit.net';
export async function GET() {
  const urls = LANGUAGES.flatMap(lang => [`${site}/${lang}/age/`]);
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url><loc>${url}</loc></url>`).join('\n')}
</urlset>`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
