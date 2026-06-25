// ============================================================
// SEO helpers — hreflang, canonical, meta
// ============================================================

import type { Lang } from '../utils/i18n';
import { LANGUAGES } from '../utils/i18n';

/** Ensure path has trailing slash (Astro trailingSlash: 'always') */
function ensureTrailingSlash(path: string): string {
  return path.endsWith('/') ? path : path + '/';
}

/** Build hreflang link tags for a page path (without leading slash) */
export function hreflangTags(pagePath: string, site: string = ''): string {
  const tags: string[] = [];
  const normalizedPath = ensureTrailingSlash(pagePath);

  for (const lang of LANGUAGES) {
    const href = site ? `${site}/${lang}/${normalizedPath}` : `/${lang}/${normalizedPath}`;
    tags.push(
      `<link rel="alternate" hreflang="${lang}" href="${href}" />`
    );
  }

  // x-default: point to English as the fallback
  const xDefault = site ? `${site}/en/${normalizedPath}` : `/en/${normalizedPath}`;
  tags.push(
    `<link rel="alternate" hreflang="x-default" href="${xDefault}" />`
  );

  return tags.join('\n    ');
}

/** Generate canonical URL for a given language's page */
export function canonicalUrl(lang: Lang, pagePath: string, site: string): string {
  const normalizedPath = ensureTrailingSlash(pagePath);
  return `${site}/${lang}/${normalizedPath}`;
}
