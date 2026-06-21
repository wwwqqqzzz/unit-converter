export const prerender = true;

export async function GET() {
  const site = import.meta.env.SITE || 'https://unit-converter.pages.dev';
  const body = `User-agent: *
Allow: /

Sitemap: ${site}/sitemap.xml`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
