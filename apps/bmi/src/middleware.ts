import type { MiddlewareHandler } from 'astro';

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

  const langPatterns = ['/en/', '/zh/', '/es/', '/fr/', '/de/', '/ja/', '/pt/', '/it/', '/ko/', '/ru/', '/hi/', '/tr/'];
  if (langPatterns.some(p => pathname.includes(p))) {
    response.headers.set('Cache-Control', 'public, max-age=3600, stale-while-revalidate=86400');
    for (const [key, value] of Object.entries(securityHeaders)) {
      response.headers.set(key, value);
    }
  }

  if (pathname.startsWith('/_astro/')) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  }

  if (pathname === '/sitemap.xml' || pathname === '/robots.txt') {
    response.headers.set('Cache-Control', 'public, max-age=86400');
  }

  return response;
};
