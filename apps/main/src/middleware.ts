import type { MiddlewareResponseHandler, MiddlewareHandler } from 'astro';

const securityHeaders: Record<string, string> = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
};

export const onRequest: MiddlewareHandler = async (context, next) => {
  const response = await next();

  const url = new URL(context.request.url);
  const pathname = url.pathname;

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

  // Sitemap and robots — medium cache
  if (pathname === '/sitemap.xml' || pathname === '/robots.txt') {
    response.headers.set('Cache-Control', 'public, max-age=86400');
  }

  return response;
};