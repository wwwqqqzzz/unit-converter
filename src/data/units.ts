// ============================================================
// Unit definitions & conversion coefficients
// Edit this file to add categories or units — pages auto-generate
// ============================================================

export interface Unit {
  /** Machine ID, used in URLs (e.g. "cm", "inch") */
  id: string;
  /** Human-readable names per language */
  name: Record<string, string>;
  /** Symbol / abbreviation (e.g. "cm", "in") */
  symbol: string;
  /** Multiplier to convert 1 of this unit → base unit */
  toBase: number;
}

export interface Category {
  /** Machine ID (e.g. "length") */
  id: string;
  /** Display name per language */
  name: Record<string, string>;
  /** ID of the reference (base) unit — conversion chains through this */
  baseUnitId: string;
  /** Units in this category */
  units: Unit[];
  /** Non-linear conversion function (e.g. temperature). If provided, convert() uses this instead of toBase ratios. */
  convertFn?: (value: number, fromId: string, toId: string) => number;
}

/** Common values used to generate specific-value pages per pair */
export const COMMON_VALUES = [1, 2, 3, 5, 10, 20, 50, 100, 500, 1000];

export const CATEGORY_ICONS: Record<string, string> = {
  length: '📏', weight: '⚖️', temperature: '🌡️', data: '💾',
  area: '📐', volume: '🧪', speed: '🏎️', time: '⏱️',
  pressure: '🔧', energy: '⚡',
};

export const CATEGORY_VALUES: Record<string, number[]> = {
  length: [0.5, 1, 2, 5, 10, 20, 50, 100, 500, 1000],
  weight: [0.1, 0.5, 1, 5, 10, 25, 50, 100, 500, 1000],
  temperature: [-40, 0, 10, 20, 25, 30, 37, 50, 100, 200],
  data: [1, 2, 5, 10, 50, 100, 256, 500, 1000, 1024],
  area: [0.5, 1, 5, 10, 50, 100, 500, 1000, 5000, 10000],
  volume: [0.5, 1, 2, 5, 10, 50, 100, 500, 1000],
  speed: [1, 5, 10, 20, 50, 100, 200, 500],
  time: [1, 5, 10, 30, 60, 100, 500, 1000],
  pressure: [1, 5, 10, 50, 100, 500, 1000],
  energy: [1, 5, 10, 50, 100, 500, 1000],
};

export const categories: Category[] = [
  {
    id: 'length',
    name: { en: 'Length', zh: '长度' },
    baseUnitId: 'm',
    units: [
      { id: 'mm',       name: { en: 'Millimeters', zh: '毫米' },     symbol: 'mm',   toBase: 0.001 },
      { id: 'cm',       name: { en: 'Centimeters', zh: '厘米' },     symbol: 'cm',   toBase: 0.01 },
      { id: 'm',        name: { en: 'Meters',       zh: '米' },      symbol: 'm',    toBase: 1 },
      { id: 'km',       name: { en: 'Kilometers',  zh: '千米' },     symbol: 'km',   toBase: 1000 },
      { id: 'inch',     name: { en: 'Inches',       zh: '英寸' },    symbol: 'in',   toBase: 0.0254 },
      { id: 'foot',     name: { en: 'Feet',         zh: '英尺' },    symbol: 'ft',   toBase: 0.3048 },
      { id: 'yard',     name: { en: 'Yards',        zh: '码' },      symbol: 'yd',   toBase: 0.9144 },
      { id: 'mile',     name: { en: 'Miles',        zh: '英里' },    symbol: 'mi',   toBase: 1609.344 },
    ],
  },
  {
    id: 'weight',
    name: { en: 'Weight', zh: '重量' },
    baseUnitId: 'g',
    units: [
      { id: 'mg',     name: { en: 'Milligrams', zh: '毫克' }, symbol: 'mg',    toBase: 0.001 },
      { id: 'g',      name: { en: 'Grams',      zh: '克' },   symbol: 'g',     toBase: 1 },
      { id: 'kg',     name: { en: 'Kilograms',  zh: '千克' }, symbol: 'kg',    toBase: 1000 },
      { id: 'tonne',  name: { en: 'Metric Tons', zh: '公吨' }, symbol: 't',    toBase: 1000000 },
      { id: 'oz',     name: { en: 'Ounces',     zh: '盎司' }, symbol: 'oz',    toBase: 28.3495 },
      { id: 'lb',     name: { en: 'Pounds',     zh: '磅' },   symbol: 'lb',    toBase: 453.592 },
      { id: 'st',     name: { en: 'Stones',     zh: '英石' }, symbol: 'st',    toBase: 6350.29 },
      { id: 'jin',    name: { en: 'Jin (Chinese)', zh: '斤' }, symbol: '斤',    toBase: 500 },
    ],
  },
  {
    id: 'temperature',
    name: { en: 'Temperature', zh: '温度' },
    baseUnitId: 'c',
    units: [
      { id: 'c', name: { en: 'Celsius',    zh: '摄氏度' }, symbol: '°C', toBase: 0 },
      { id: 'f', name: { en: 'Fahrenheit',  zh: '华氏度' }, symbol: '°F', toBase: 0 },
      { id: 'k', name: { en: 'Kelvin',      zh: '开尔文' }, symbol: 'K',  toBase: 0 },
    ],
    convertFn: (value: number, fromId: string, toId: string): number => {
      // Convert to Celsius first, then to target
      let celsius: number;
      switch (fromId) {
        case 'c': celsius = value; break;
        case 'f': celsius = (value - 32) * 5 / 9; break;
        case 'k': celsius = value - 273.15; break;
        default: return NaN;
      }
      switch (toId) {
        case 'c': return celsius;
        case 'f': return celsius * 9 / 5 + 32;
        case 'k': return celsius + 273.15;
        default: return NaN;
      }
    },
  },
  {
    id: 'data',
    name: { en: 'Data Storage', zh: '数据存储' },
    baseUnitId: 'b',
    units: [
      { id: 'bit',  name: { en: 'Bits',        zh: '比特' },    symbol: 'bit', toBase: 0.125 },
      { id: 'b',    name: { en: 'Bytes',       zh: '字节' },    symbol: 'B',   toBase: 1 },
      { id: 'kb',   name: { en: 'Kilobytes',   zh: '千字节' },  symbol: 'KB',  toBase: 1024 },
      { id: 'mb',   name: { en: 'Megabytes',   zh: '兆字节' }, symbol: 'MB',  toBase: 1048576 },
      { id: 'gb',   name: { en: 'Gigabytes',   zh: '千兆字节' }, symbol: 'GB',  toBase: 1073741824 },
      { id: 'tb',   name: { en: 'Terabytes',   zh: '太字节' },  symbol: 'TB',  toBase: 1099511627776 },
      { id: 'pb',   name: { en: 'Petabytes',   zh: '拍字节' },  symbol: 'PB',  toBase: 1125899906842624 },
      { id: 'kbit', name: { en: 'Kilobits',    zh: '千比特' },  symbol: 'Kbit', toBase: 128 },
      { id: 'mbit', name: { en: 'Megabits',    zh: '兆比特' },  symbol: 'Mbit', toBase: 131072 },
      { id: 'gbit', name: { en: 'Gigabits',    zh: '千兆比特' }, symbol: 'Gbit', toBase: 134217728 },
    ],
  },
];
