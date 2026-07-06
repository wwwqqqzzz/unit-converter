import { descriptions_en } from './en';
import { descriptions_zh } from './zh';
import { descriptions_es } from './es';
import { descriptions_fr } from './fr';
import { descriptions_de } from './de';
import { descriptions_ja } from './ja';
import { descriptions_pt } from './pt';
import { descriptions_it } from './it';
import { descriptions_ko } from './ko';
import { descriptions_ru } from './ru';
import { descriptions_hi } from './hi';
import { descriptions_tr } from './tr';

import type { Lang } from '../../utils/i18n';

const perLangMap: Record<string, Record<string, Record<string, string>>> = {
  en: descriptions_en,
  zh: descriptions_zh,
  es: descriptions_es,
  fr: descriptions_fr,
  de: descriptions_de,
  ja: descriptions_ja,
  pt: descriptions_pt,
  it: descriptions_it,
  ko: descriptions_ko,
  ru: descriptions_ru,
  hi: descriptions_hi,
  tr: descriptions_tr,
};

/**
 * Get a single description text for a unit in a specific language.
 * Falls back to English if the language is not available.
 */
export function getDescriptionText(categoryId: string, unitId: string, lang: string): string | undefined {
  const langMap = perLangMap[lang] || perLangMap.en;
  return langMap[categoryId]?.[unitId];
}

export { perLangMap };