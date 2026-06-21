// converter-core — barrel exports
export { convert, getUnit, getUnitPairs, formatResult, pairSlug, valueSlug, getCommonValues, getCategory, getCategories } from './lib/units.js';
export { hreflangTags, canonicalUrl } from './lib/seo.js';
export { t, type Lang, LANGUAGES, LANG_LABELS } from './utils/i18n.js';
export { categories, CATEGORY_ICONS, COMMON_VALUES, CATEGORY_VALUES } from './data/units.js';
export type { Unit } from './data/units.js';
export { unitDescriptions } from './data/descriptions.js';
export { NUMBER_BASE_VALUES, numberBaseSlug, parseNumberBaseSlug, baseDisplayName, parseBaseValue } from './data/number-base-values.js';
