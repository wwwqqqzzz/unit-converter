import { describe, it, expect } from 'vitest';
import { needsTrailingSlashRedirect, trailingSlashRedirectLocation } from '../middleware';

describe('needsTrailingSlashRedirect', () => {
  it('redirects content paths without trailing slash', () => {
    expect(needsTrailingSlashRedirect('/en')).toBe(true);
    expect(needsTrailingSlashRedirect('/en/length')).toBe(true);
    expect(needsTrailingSlashRedirect('/en/length/cm-to-inch')).toBe(true);
    expect(needsTrailingSlashRedirect('/zh/temperature')).toBe(true);
  });

  it('does not redirect paths already ending with slash', () => {
    expect(needsTrailingSlashRedirect('/en/')).toBe(false);
    expect(needsTrailingSlashRedirect('/en/length/')).toBe(false);
    expect(needsTrailingSlashRedirect('/en/length/cm-to-inch/')).toBe(false);
  });

  it('does not redirect root', () => {
    expect(needsTrailingSlashRedirect('/')).toBe(false);
  });

  it('does not redirect /api and /api/*', () => {
    expect(needsTrailingSlashRedirect('/api')).toBe(false);
    expect(needsTrailingSlashRedirect('/api/convert')).toBe(false);
    expect(needsTrailingSlashRedirect('/api/rates')).toBe(false);
  });

  it('does not redirect paths with file extensions', () => {
    expect(needsTrailingSlashRedirect('/sitemap.xml')).toBe(false);
    expect(needsTrailingSlashRedirect('/robots.txt')).toBe(false);
    expect(needsTrailingSlashRedirect('/favicon.svg')).toBe(false);
    expect(needsTrailingSlashRedirect('/en/something.html')).toBe(false);
  });

  it('does not redirect /_astro root and /_astro/* static assets', () => {
    expect(needsTrailingSlashRedirect('/_astro')).toBe(false);
    expect(needsTrailingSlashRedirect('/_astro/main.abc123.js')).toBe(false);
    expect(needsTrailingSlashRedirect('/_astro/style.def456.css')).toBe(false);
  });

  it('does not redirect sitemap variants', () => {
    expect(needsTrailingSlashRedirect('/sitemap.xml')).toBe(false);
    expect(needsTrailingSlashRedirect('/sitemap-root.xml')).toBe(false);
    expect(needsTrailingSlashRedirect('/sitemap/en.xml')).toBe(false);
    expect(needsTrailingSlashRedirect('/sitemap/zh.xml')).toBe(false);
    expect(needsTrailingSlashRedirect('/sitemap/pt.xml')).toBe(false);
  });

  // Invalid URLs use `Astro.rewrite('/404/')`. Astro normalizes the internal
  // path to `/404`, so redirecting it to `/404/` would add a 301 hop in front
  // of every 404 — and a 301 before a 404 reads as a soft 404 to crawlers.
  it('does not redirect /404 and /500 error routes', () => {
    expect(needsTrailingSlashRedirect('/404')).toBe(false);
    expect(needsTrailingSlashRedirect('/500')).toBe(false);
  });
});

describe('trailingSlashRedirectLocation', () => {
  it('appends trailing slash and preserves query parameters', () => {
    expect(trailingSlashRedirectLocation('/en/length', '?from=cm&to=inch')).toBe(
      '/en/length/?from=cm&to=inch',
    );
  });

  it('appends trailing slash with no query string', () => {
    expect(trailingSlashRedirectLocation('/zh', '')).toBe('/zh/');
  });

  it('preserves full query string on nested paths', () => {
    expect(trailingSlashRedirectLocation('/en/length/cm-to-inch', '?v=1&page=2')).toBe(
      '/en/length/cm-to-inch/?v=1&page=2',
    );
  });

  it('collapses double-leading slashes to prevent protocol-relative open redirect', () => {
    expect(trailingSlashRedirectLocation('//evil.com/phish', '')).toBe('/evil.com/phish/');
  });

  it('collapses double-leading slashes and preserves query parameters', () => {
    expect(trailingSlashRedirectLocation('//evil.com/phish', '?token=abc')).toBe(
      '/evil.com/phish/?token=abc',
    );
  });

  it('collapses triple-leading slashes to single slash', () => {
    expect(trailingSlashRedirectLocation('///evil.com/phish', '')).toBe('/evil.com/phish/');
  });
});
