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
  {
    id: 'area',
    name: { en: 'Area', zh: '面积' },
    baseUnitId: 'sqm',
    units: [
      { id: 'sqmm',  name: { en: 'Square Millimeters', zh: '平方毫米' }, symbol: 'mm²',  toBase: 0.000001 },
      { id: 'sqcm',  name: { en: 'Square Centimeters', zh: '平方厘米' }, symbol: 'cm²',  toBase: 0.0001 },
      { id: 'sqm',   name: { en: 'Square Meters',      zh: '平方米' },   symbol: 'm²',   toBase: 1 },
      { id: 'sqkm',  name: { en: 'Square Kilometers',   zh: '平方千米' }, symbol: 'km²',   toBase: 1000000 },
      { id: 'ha',    name: { en: 'Hectares',             zh: '公顷' },     symbol: 'ha',    toBase: 10000 },
      { id: 'acre',  name: { en: 'Acres',                zh: '英亩' },     symbol: 'ac',    toBase: 4046.8564224 },
      { id: 'sqft',  name: { en: 'Square Feet',          zh: '平方英尺' }, symbol: 'ft²',   toBase: 0.09290304 },
      { id: 'sqin',  name: { en: 'Square Inches',         zh: '平方英寸' }, symbol: 'in²',   toBase: 0.00064516 },
      { id: 'sqmi',  name: { en: 'Square Miles',         zh: '平方英里' }, symbol: 'mi²',   toBase: 2589988.110336 },
      { id: 'mu',    name: { en: 'Mu (Chinese)',          zh: '亩' },       symbol: '亩',    toBase: 666.667 },
    ],
  },
  {
    id: 'volume',
    name: { en: 'Volume', zh: '体积' },
    baseUnitId: 'l',
    units: [
      { id: 'ml',      name: { en: 'Milliliters',       zh: '毫升' },     symbol: 'mL',    toBase: 0.001 },
      { id: 'cl',      name: { en: 'Centiliters',       zh: '厘升' },     symbol: 'cL',    toBase: 0.01 },
      { id: 'dl',      name: { en: 'Deciliters',        zh: '分升' },     symbol: 'dL',    toBase: 0.1 },
      { id: 'l',       name: { en: 'Liters',             zh: '升' },       symbol: 'L',     toBase: 1 },
      { id: 'm3',      name: { en: 'Cubic Meters',       zh: '立方米' },   symbol: 'm³',    toBase: 1000 },
      { id: 'gal',     name: { en: 'US Gallons',          zh: '美加仑' },   symbol: 'gal',   toBase: 3.785411784 },
      { id: 'gal_uk',  name: { en: 'UK Gallons',          zh: '英加仑' },   symbol: 'gal',   toBase: 4.54609 },
      { id: 'qt',      name: { en: 'US Quarts',           zh: '美夸脱' },   symbol: 'qt',    toBase: 0.946352946 },
      { id: 'pt',      name: { en: 'US Pints',            zh: '美品脱' },   symbol: 'pt',    toBase: 0.473176473 },
      { id: 'cup',     name: { en: 'US Cups',             zh: '美杯' },     symbol: 'cup',   toBase: 0.2365882365 },
      { id: 'floz',    name: { en: 'US Fluid Ounces',    zh: '美液盎司' }, symbol: 'fl oz', toBase: 0.0295735295625 },
      { id: 'tbsp',    name: { en: 'Tablespoons',         zh: '汤匙' },     symbol: 'tbsp',  toBase: 0.014786764375 },
      { id: 'tsp',     name: { en: 'Teaspoons',           zh: '茶匙' },     symbol: 'tsp',   toBase: 0.00492892 },
    ],
  },
  {
    id: 'speed',
    name: { en: 'Speed', zh: '速度' },
    baseUnitId: 'ms',
    units: [
      { id: 'ms',   name: { en: 'Meters per Second', zh: '米每秒' },   symbol: 'm/s',  toBase: 1 },
      { id: 'kmh',  name: { en: 'Kilometers per Hour', zh: '千米每小时' }, symbol: 'km/h', toBase: 0.277778 },
      { id: 'mph',  name: { en: 'Miles per Hour',    zh: '英里每小时' }, symbol: 'mph',  toBase: 0.44704 },
      { id: 'kn',   name: { en: 'Knots',              zh: '节' },        symbol: 'kn',   toBase: 0.514444 },
      { id: 'fts',  name: { en: 'Feet per Second',   zh: '英尺每秒' },  symbol: 'ft/s',  toBase: 0.3048 },
      { id: 'mach', name: { en: 'Mach',               zh: '马赫' },      symbol: 'Ma',    toBase: 343 },
    ],
  },
  {
    id: 'time',
    name: { en: 'Time', zh: '时间' },
    baseUnitId: 's',
    units: [
      { id: 'ms_time', name: { en: 'Milliseconds', zh: '毫秒' }, symbol: 'ms',  toBase: 0.001 },
      { id: 's',       name: { en: 'Seconds',      zh: '秒' },   symbol: 's',   toBase: 1 },
      { id: 'min',     name: { en: 'Minutes',      zh: '分钟' }, symbol: 'min', toBase: 60 },
      { id: 'h',       name: { en: 'Hours',         zh: '小时' }, symbol: 'h',   toBase: 3600 },
      { id: 'd',       name: { en: 'Days',          zh: '天' },   symbol: 'd',   toBase: 86400 },
      { id: 'wk',      name: { en: 'Weeks',         zh: '周' },   symbol: 'wk',  toBase: 604800 },
      { id: 'mo',      name: { en: 'Months (avg)', zh: '月' },   symbol: 'mo',  toBase: 2629746 },
      { id: 'yr',      name: { en: 'Years (365.25 days)', zh: '年' }, symbol: 'yr', toBase: 31557600 },
    ],
  },
  {
    id: 'pressure',
    name: { en: 'Pressure', zh: '压力' },
    baseUnitId: 'pa',
    units: [
      { id: 'pa',   name: { en: 'Pascals',       zh: '帕斯卡' },   symbol: 'Pa',    toBase: 1 },
      { id: 'kpa',  name: { en: 'Kilopascals',   zh: '千帕' },      symbol: 'kPa',   toBase: 1000 },
      { id: 'mpa',  name: { en: 'Megapascals',   zh: '兆帕' },      symbol: 'MPa',   toBase: 1000000 },
      { id: 'bar',  name: { en: 'Bar',            zh: '巴' },        symbol: 'bar',   toBase: 100000 },
      { id: 'atm',  name: { en: 'Atmospheres',   zh: '标准大气压' }, symbol: 'atm',   toBase: 101325 },
      { id: 'psi',  name: { en: 'PSI',            zh: '磅力每平方英寸' }, symbol: 'psi', toBase: 6894.76 },
      { id: 'mmhg', name: { en: 'mmHg',           zh: '毫米汞柱' },  symbol: 'mmHg',  toBase: 133.322 },
      { id: 'torr', name: { en: 'Torr',           zh: '托' },        symbol: 'Torr',  toBase: 133.322 },
    ],
  },
  {
    id: 'energy',
    name: { en: 'Energy', zh: '能量' },
    baseUnitId: 'j',
    units: [
      { id: 'j',    name: { en: 'Joules',           zh: '焦耳' },   symbol: 'J',   toBase: 1 },
      { id: 'kj',   name: { en: 'Kilojoules',        zh: '千焦' },    symbol: 'kJ',  toBase: 1000 },
      { id: 'cal',  name: { en: 'Calories',          zh: '卡路里' },  symbol: 'cal', toBase: 4.184 },
      { id: 'kcal', name: { en: 'Kilocalories',      zh: '千卡' },    symbol: 'kcal', toBase: 4184 },
      { id: 'kwh',  name: { en: 'Kilowatt-hours',    zh: '千瓦时' },  symbol: 'kWh', toBase: 3600000 },
      { id: 'btu',  name: { en: 'BTU',                zh: '英热单位' }, symbol: 'BTU', toBase: 1055.06 },
      { id: 'wh',   name: { en: 'Watt-hours',         zh: '瓦时' },    symbol: 'Wh',  toBase: 3600 },
    ],
  },
];
