import type { MiddlewareHandler } from 'astro';

const securityHeaders: Record<string, string> = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
};

/**
 * Returns true when the path needs a 301 redirect to the trailing-slash version.
 *
 * Excluded (no redirect needed):
 * - Already ends with '/' (normalized)
 * - Root '/'
 * - '/api' or '/api/*'
 * - File/extension paths (contains a dot-segment like .xml, .txt)
 * - '/_astro' and '/_astro/*' static assets
 * - Sitemap XML paths (/sitemap.xml, /sitemap-root.xml, /sitemap/{lang}.xml)
 * - '/robots.txt'
 */
export function needsTrailingSlashRedirect(pathname: string): boolean {
  if (pathname.endsWith('/')) return false;
  if (pathname === '/') return false;
  if (pathname === '/api' || pathname.startsWith('/api/')) return false;
  if (/\/[^/]+\.[^/]+$/.test(pathname)) return false;
  if (pathname === '/_astro' || pathname.startsWith('/_astro/')) return false;
  if (pathname === '/sitemap.xml' || pathname === '/robots.txt') return false;
  if (pathname === '/sitemap-root.xml' || /^\/sitemap\/[^/]+\.xml$/.test(pathname)) return false;
  return true;
}

export function trailingSlashRedirectLocation(pathname: string, search: string): string {
  // Collapse multiple leading slashes to prevent open redirect (e.g. //evil.com → /evil.com)
  const normalized = pathname.replace(/^\/+/, '/');
  return normalized + '/' + search;
}

export const onRequest: MiddlewareHandler = async (context, next) => {
  const url = new URL(context.request.url);
  const pathname = url.pathname;

  // Trailing-slash redirect (301) — runs before SSR to avoid duplicate content
  if (needsTrailingSlashRedirect(pathname)) {
    return new Response(null, {
      status: 301,
      headers: { Location: trailingSlashRedirectLocation(pathname, url.search) },
    });
  }

  const response = await next();

  // Security headers for HTML pages
  if (
    pathname.endsWith('/') ||
    pathname.endsWith('.html') ||
    !pathname.includes('.') ||
    pathname.includes('/en/') ||
    pathname.includes('/zh/') ||
    pathname.includes('/es/') ||
    pathname.includes('/fr/') ||
    pathname.includes('/de/') ||
    pathname.includes('/ja/') ||
    pathname.includes('/pt/') ||
    pathname.includes('/it/') ||
    pathname.includes('/ko/') ||
    pathname.includes('/ru/') ||
    pathname.includes('/hi/') ||
    pathname.includes('/tr/')
  ) {
    response.headers.set('Cache-Control', 'public, max-age=3600, stale-while-revalidate=86400');
    for (const [key, value] of Object.entries(securityHeaders)) {
      response.headers.set(key, value);
    }
  }

  // Static assets — long cache
  if (pathname.startsWith('/_astro/')) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  }

  // Sitemap and robots — 24-hour cache
  if (
    pathname === '/sitemap.xml' ||
    pathname === '/sitemap-root.xml' ||
    pathname === '/robots.txt' ||
    /^\/sitemap\/[^/]+\.xml$/.test(pathname)
  ) {
    response.headers.set('Cache-Control', 'public, max-age=86400');
  }

  return response;
};