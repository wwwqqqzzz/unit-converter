// ============================================================
// i18n helper — loads translation JSON and does %token% replacement
// ============================================================

import en from '../i18n/en.json';
import zh from '../i18n/zh.json';

const strings: Record<string, any> = { en, zh };

export type Lang = 'en' | 'zh';

export function t(lang: Lang, key: string, vars?: Record<string, string | number>): string {
  const keys = key.split('.');
  let val: any = strings[lang];
  for (const k of keys) {
    val = val?.[k];
  }
  if (typeof val !== 'string') return key;
  if (!vars) return val;
  return val.replace(/%(\w+)%/g, (_, k) => String(vars[k] ?? '%' + k + '%'));
}

/** All supported languages */
export const LANGUAGES: Lang[] = ['en', 'zh'];
