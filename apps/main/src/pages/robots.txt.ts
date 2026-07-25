export const prerender = true;

export async function GET() {
  const site = import.meta.env.SITE || 'https://convunit.net';
  const body = `# ConvUnit — https://convunit.net
# Allow all crawlers including AI agents

User-agent: *
Allow: /
Disallow: /api/

# Sitemap
Sitemap: ${site}/sitemap.xml

# AI-friendly: llms.txt is available at /llms.txt
# It contains structured site information for AI crawlers`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
