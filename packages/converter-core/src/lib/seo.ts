// ============================================================
// SEO helpers — hreflang, canonical, meta
// ============================================================

import type { Lang } from '../utils/i18n';
import { LANGUAGES } from '../utils/i18n';

function ensureTrailingSlash(path: string): string {
  if (!path) return '';
  return path.endsWith('/') ? path : path + '/';
}

/** Build hreflang link tags for a page path (without leading slash) */
export function hreflangTags(pagePath: string, site: string = ''): string {
  const tags: string[] = [];
  const pathSegment = ensureTrailingSlash(pagePath);

  for (const lang of LANGUAGES) {
    const href = site ? `${site}/${lang}/${pathSegment}` : `/${lang}/${pathSegment}`;
    tags.push(
      `<link rel="alternate" hreflang="${lang}" href="${href}" />`
    );
  }

  const xDefault = site ? `${site}/en/${pathSegment}` : `/en/${pathSegment}`;
  tags.push(
    `<link rel="alternate" hreflang="x-default" href="${xDefault}" />`
  );

  return tags.join('\n    ');
}

/** Generate canonical URL for a given language's page */
export function canonicalUrl(lang: Lang, pagePath: string, site: string): string {
  const pathSegment = ensureTrailingSlash(pagePath);
  return pathSegment ? `${site}/${lang}/${pathSegment}` : `${site}/${lang}/`;
}
