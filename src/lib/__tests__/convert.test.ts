import { describe, it, expect } from 'vitest';
import { convert, getUnit, getUnitPairs, formatResult, pairSlug, valueSlug, getCommonValues } from '../units';
import { categories, COMMON_VALUES, CATEGORY_VALUES, CATEGORY_ICONS } from '../../data/units';

// Find the length category for linear conversion tests
const lengthCat = categories.find(c => c.id === 'length')!;

describe('convert (linear)', () => {
  it('converts km to m', () => {
    expect(convert(lengthCat, 1, 'km', 'm')).toBe(1000);
  });

  it('converts m to m (same unit)', () => {
    expect(convert(lengthCat, 1, 'm', 'm')).toBe(1);
  });

  it('converts inch to cm with precision', () => {
    expect(convert(lengthCat, 1, 'inch', 'cm')).toBeCloseTo(2.54, 2);
  });

  it('returns NaN for invalid unit', () => {
    expect(convert(lengthCat, 1, 'x', 'm')).toBeNaN();
  });

  it('converts 0 correctly', () => {
    expect(convert(lengthCat, 0, 'km', 'm')).toBe(0);
  });

  it('converts large values', () => {
    expect(convert(lengthCat, 100, 'km', 'm')).toBe(100000);
  });

  it('converts small values', () => {
    expect(convert(lengthCat, 1, 'mm', 'km')).toBeCloseTo(0.000001, 6);
  });
});

describe('convert (non-linear / temperature)', () => {
  const tempCat = categories.find(c => c.id === 'temperature')!;

  it('0°C = 32°F', () => {
    expect(convert(tempCat, 0, 'c', 'f')).toBeCloseTo(32, 1);
  });

  it('100°C = 212°F', () => {
    expect(convert(tempCat, 100, 'c', 'f')).toBeCloseTo(212, 1);
  });

  it('0°C = 273.15K', () => {
    expect(convert(tempCat, 0, 'c', 'k')).toBeCloseTo(273.15, 2);
  });

  it('-40°C = -40°F (crossover point)', () => {
    expect(convert(tempCat, -40, 'c', 'f')).toBeCloseTo(-40, 1);
  });

  it('32°F = 0°C (reverse)', () => {
    expect(convert(tempCat, 32, 'f', 'c')).toBeCloseTo(0, 1);
  });

  it('same unit returns same value (°C to °C)', () => {
    expect(convert(tempCat, 25, 'c', 'c')).toBe(25);
  });
});

describe('getUnit', () => {
  it('finds a unit by id', () => {
    const m = getUnit(lengthCat, 'm');
    expect(m).toBeDefined();
    expect(m!.id).toBe('m');
  });

  it('returns undefined for non-existent unit', () => {
    expect(getUnit(lengthCat, 'nonexistent')).toBeUndefined();
  });
});

describe('getUnitPairs', () => {
  it('returns n*(n-1)/2 pairs for length', () => {
    const pairs = getUnitPairs(lengthCat);
    // length has 8 units, so 8*7/2 = 28 pairs
    expect(pairs.length).toBe(28);
  });
});

describe('formatResult', () => {
  it('formats 0 as "0"', () => {
    expect(formatResult(0)).toBe('0');
  });

  it('formats Infinity as "—"', () => {
    expect(formatResult(Infinity)).toBe('—');
  });

  it('formats NaN as "—"', () => {
    expect(formatResult(NaN)).toBe('—');
  });

  it('formats normal numbers', () => {
    expect(formatResult(2.54)).toBe('2.54');
  });

  it('strips trailing zeros', () => {
    expect(formatResult(1000)).toBe('1000');
  });

  it('formats very large numbers with exponential', () => {
    const result = formatResult(1000000000);
    expect(result).toContain('e');
  });
});

describe('pairSlug', () => {
  const u1 = lengthCat.units.find(u => u.id === 'cm')!;
  const u2 = lengthCat.units.find(u => u.id === 'm')!;

  it('generates English slug', () => {
    expect(pairSlug(u1, u2, 'en')).toBe('cm-to-m');
  });

  it('generates Chinese slug', () => {
    expect(pairSlug(u1, u2, 'zh')).toBe('厘米-米');
  });
});

describe('valueSlug', () => {
  const u1 = lengthCat.units.find(u => u.id === 'cm')!;
  const u2 = lengthCat.units.find(u => u.id === 'm')!;

  it('generates English value slug', () => {
    expect(valueSlug(5, u1, u2, 'en')).toBe('5-cm-to-m');
  });

  it('generates Chinese value slug', () => {
    expect(valueSlug(5, u1, u2, 'zh')).toBe('5-厘米-米');
  });
});

describe('getCommonValues', () => {
  it('returns category-specific values for length', () => {
    const values = getCommonValues('length');
    expect(values).toContain(1);
    expect(values).toContain(100);
  });

  it('falls back to COMMON_VALUES for unknown category', () => {
    const values = getCommonValues('unknown');
    expect(values).toEqual(COMMON_VALUES);
  });
});

describe('CATEGORY_ICONS', () => {
  it('has icon for length', () => {
    expect(CATEGORY_ICONS['length']).toBe('📏');
  });

  it('has icon for all Phase 1 categories', () => {
    expect(CATEGORY_ICONS['weight']).toBe('⚖️');
    expect(CATEGORY_ICONS['temperature']).toBe('🌡️');
    expect(CATEGORY_ICONS['data']).toBe('💾');
  });
});

describe('convert (weight)', () => {
  const weightCat = categories.find(c => c.id === 'weight')!;

  it('converts kg to g', () => {
    expect(convert(weightCat, 1, 'kg', 'g')).toBe(1000);
  });

  it('converts lb to kg', () => {
    expect(convert(weightCat, 1, 'lb', 'kg')).toBeCloseTo(0.453592, 4);
  });

  it('converts jin (斤) to g', () => {
    expect(convert(weightCat, 1, 'jin', 'g')).toBe(500);
  });
});

describe('convert (data storage)', () => {
  const dataCat = categories.find(c => c.id === 'data')!;

  it('converts KB to bytes', () => {
    expect(convert(dataCat, 1, 'kb', 'b')).toBe(1024);
  });

  it('converts GB to MB', () => {
    expect(convert(dataCat, 1, 'gb', 'mb')).toBeCloseTo(1024, 0);
  });

  it('converts bits to bytes', () => {
    expect(convert(dataCat, 8, 'bit', 'b')).toBe(1);
  });
});

describe('getUnitPairs (new categories)', () => {
  it('weight has 28 pairs (8 units)', () => {
    const cat = categories.find(c => c.id === 'weight')!;
    expect(getUnitPairs(cat).length).toBe(28);
  });

  it('temperature has 3 pairs (3 units)', () => {
    const cat = categories.find(c => c.id === 'temperature')!;
    expect(getUnitPairs(cat).length).toBe(3);
  });

  it('data has 45 pairs (10 units)', () => {
    const cat = categories.find(c => c.id === 'data')!;
    expect(getUnitPairs(cat).length).toBe(45);
  });
});

describe('convert (area)', () => {
  const areaCat = categories.find(c => c.id === 'area')!;

  it('converts sqm to sqcm', () => {
    expect(convert(areaCat, 1, 'sqm', 'sqcm')).toBe(10000);
  });

  it('converts acre to sqm', () => {
    expect(convert(areaCat, 1, 'acre', 'sqm')).toBeCloseTo(4046.8564, 3);
  });

  it('converts sqkm to sqm', () => {
    expect(convert(areaCat, 1, 'sqkm', 'sqm')).toBe(1000000);
  });

  it('converts ha to sqm', () => {
    expect(convert(areaCat, 1, 'ha', 'sqm')).toBe(10000);
  });

  it('converts sqin to sqcm', () => {
    expect(convert(areaCat, 1, 'sqin', 'sqcm')).toBeCloseTo(6.4516, 3);
  });
});

describe('convert (volume)', () => {
  const volCat = categories.find(c => c.id === 'volume')!;

  it('converts l to ml', () => {
    expect(convert(volCat, 1, 'l', 'ml')).toBe(1000);
  });

  it('converts gal to l', () => {
    expect(convert(volCat, 1, 'gal', 'l')).toBeCloseTo(3.7854, 3);
  });

  it('converts m3 to l', () => {
    expect(convert(volCat, 1, 'm3', 'l')).toBe(1000);
  });

  it('converts cup to ml', () => {
    expect(convert(volCat, 1, 'cup', 'ml')).toBeCloseTo(236.588, 2);
  });

  it('converts tbsp to ml', () => {
    expect(convert(volCat, 1, 'tbsp', 'ml')).toBeCloseTo(14.787, 2);
  });
});

describe('getUnitPairs (area & volume)', () => {
  it('area has 36 pairs (9 units)', () => {
    const cat = categories.find(c => c.id === 'area')!;
    expect(getUnitPairs(cat).length).toBe(36);
  });

  it('volume has 55 pairs (11 units)', () => {
    const cat = categories.find(c => c.id === 'volume')!;
    expect(getUnitPairs(cat).length).toBe(55);
  });
});