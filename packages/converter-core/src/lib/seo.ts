// ============================================================
// SEO helpers — hreflang, canonical, meta
// ============================================================

import type { Lang } from '../utils/i18n';
import { LANGUAGES } from '../utils/i18n';

/** Build hreflang link tags for a page path (without leading slash) */
export function hreflangTags(pagePath: string, site: string = ''): string {
  const tags: string[] = [];

  for (const lang of LANGUAGES) {
    const href = site ? `${site}/${lang}/${pagePath}` : `/${lang}/${pagePath}`;
    tags.push(
      `<link rel="alternate" hreflang="${lang}" href="${href}" />`
    );
  }

  // x-default: point to English as the fallback
  const xDefault = site ? `${site}/en/${pagePath}` : `/en/${pagePath}`;
  tags.push(
    `<link rel="alternate" hreflang="x-default" href="${xDefault}" />`
  );

  return tags.join('\n    ');
}

/** Generate canonical URL for a given language's page */
export function canonicalUrl(lang: Lang, pagePath: string, site: string): string {
  return `${site}/${lang}/${pagePath}`;
}
