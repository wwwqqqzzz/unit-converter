// ============================================================
// i18n helper — loads translation JSON and does %token% replacement
// ============================================================

import en from '../i18n/en.json';
import zh from '../i18n/zh.json';
import es from '../i18n/es.json';
import fr from '../i18n/fr.json';
import de from '../i18n/de.json';
import ja from '../i18n/ja.json';
import pt from '../i18n/pt.json';
import it from '../i18n/it.json';
import ko from '../i18n/ko.json';
import ru from '../i18n/ru.json';
import hi from '../i18n/hi.json';
import tr from '../i18n/tr.json';

const strings: Record<string, any> = { en, zh, es, fr, de, ja, pt, it, ko, ru, hi, tr };

export type Lang = 'en' | 'zh' | 'es' | 'fr' | 'de' | 'ja' | 'pt' | 'it' | 'ko' | 'ru' | 'hi' | 'tr';

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

export const LANG_LABELS: Record<string, string> = {
  en: 'EN', zh: '中文', es: 'ES', fr: 'FR', de: 'DE', ja: 'JA',
  pt: 'PT', it: 'IT', ko: 'KO', ru: 'RU', hi: 'HI', tr: 'TR',
};

/** All supported languages */
export const LANGUAGES: Lang[] = ['en', 'zh', 'es', 'fr', 'de', 'ja'];