// ============================================================
// Pure conversion logic — no UI, no I/O
// ============================================================

import { categories, CATEGORY_VALUES, COMMON_VALUES, type Category, type Unit } from '../data/units';

export function getCategories(): Category[] {
  return categories;
}

export function getCategory(id: string): Category | undefined {
  return categories.find(c => c.id === id);
}

export function getUnit(category: Category, unitId: string): Unit | undefined {
  return category.units.find(u => u.id === unitId);
}

/** Convert value from unit `from` to unit `to` within the same category */
export function convert(category: Category, value: number, fromId: string, toId: string): number {
  if (category.convertFn) return category.convertFn(value, fromId, toId);

  const from = getUnit(category, fromId);
  const to = getUnit(category, toId);
  if (!from || !to) return NaN;

  const baseValue = value * from.toBase;
  return baseValue / to.toBase;
}

/**
 * Format a number for display: strip trailing zeros, respect precision.
 * - Very small/large numbers use up to 10 sig figs
 * - "Normal" numbers drop unnecessary trailing zeros
 */
export function formatResult(value: number): string {
  if (!isFinite(value)) return '—';
  if (value === 0) return '0';

  const abs = Math.abs(value);

  // For very small or very large numbers, use fixed-width with precision
  if (abs < 0.001 || abs >= 1_000_000) {
    return value.toExponential(6);
  }

  // Determine appropriate decimal places
  const str = value.toFixed(10);
  // Strip trailing zeros
  const trimmed = str.replace(/\.?0+$/, '');
  return trimmed;
}

/** Generate all unique unit pairs (only A→B once, not B→A) */
export function getUnitPairs(category: Category): Array<[Unit, Unit]> {
  if (category.type === 'calculator' || !category.units) return [];
  const pairs: Array<[Unit, Unit]> = [];
  for (let i = 0; i < category.units.length; i++) {
    for (let j = i + 1; j < category.units.length; j++) {
      pairs.push([category.units[i], category.units[j]]);
    }
  }
  return pairs;
}

/** Human-friendly slug for a unit pair in a given language */
export function pairSlug(unit1: Unit, unit2: Unit, lang: string): string {
  if (lang === 'zh') {
    return `${unit1.name.zh}-${unit2.name.zh}`;
  }
  return `${unit1.id}-to-${unit2.id}`;
}

/** Human-friendly slug for a specific value page */
export function valueSlug(value: number, unit1: Unit, unit2: Unit, lang: string): string {
  if (lang === 'zh') {
    return `${value}-${unit1.name.zh}-${unit2.name.zh}`;
  }
  return `${value}-${unit1.id}-to-${unit2.id}`;
}

/** Get common values for a category, falling back to default COMMON_VALUES */
export function getCommonValues(categoryId: string): number[] {
  return CATEGORY_VALUES[categoryId] ?? COMMON_VALUES;
}
