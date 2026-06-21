// ============================================================
// Curated number base conversion value pages for SEO
// Each entry generates a value page like:
//   /en/number-base/binary-1010-to-decimal/
//   /zh/number-base/二进制-1010-转-十进制/
// ============================================================

export interface NumberBaseConversion {
  /** The value string as entered in the source base (e.g. '1010', 'ff') */
  value: string;
  /** Source base name */
  from: 'binary' | 'octal' | 'decimal' | 'hex';
  /** Target base name */
  to: 'binary' | 'octal' | 'decimal' | 'hex';
}

export const BASE_RADIX: Record<string, number> = {
  binary: 2,
  octal: 8,
  decimal: 10,
  hex: 16,
};

export const BASE_NAMES_ZH: Record<string, string> = {
  binary: '二进制',
  octal: '八进制',
  decimal: '十进制',
  hex: '十六进制',
};

export const BASE_NAMES_EN: Record<string, string> = {
  binary: 'binary',
  octal: 'octal',
  decimal: 'decimal',
  hex: 'hex',
};

/** Popular binary → decimal conversions */
const binaryToDecimal: NumberBaseConversion[] = [
  { value: '1', from: 'binary', to: 'decimal' },
  { value: '10', from: 'binary', to: 'decimal' },
  { value: '11', from: 'binary', to: 'decimal' },
  { value: '100', from: 'binary', to: 'decimal' },
  { value: '101', from: 'binary', to: 'decimal' },
  { value: '110', from: 'binary', to: 'decimal' },
  { value: '111', from: 'binary', to: 'decimal' },
  { value: '1000', from: 'binary', to: 'decimal' },
  { value: '1001', from: 'binary', to: 'decimal' },
  { value: '1010', from: 'binary', to: 'decimal' },
  { value: '1111', from: 'binary', to: 'decimal' },
  { value: '10000', from: 'binary', to: 'decimal' },
  { value: '100000', from: 'binary', to: 'decimal' },
  { value: '1000000', from: 'binary', to: 'decimal' },
  { value: '10000000', from: 'binary', to: 'decimal' },
  { value: '11111111', from: 'binary', to: 'decimal' },
];

/** Popular decimal → binary conversions */
const decimalToBinary: NumberBaseConversion[] = [
  { value: '1', from: 'decimal', to: 'binary' },
  { value: '2', from: 'decimal', to: 'binary' },
  { value: '3', from: 'decimal', to: 'binary' },
  { value: '5', from: 'decimal', to: 'binary' },
  { value: '10', from: 'decimal', to: 'binary' },
  { value: '16', from: 'decimal', to: 'binary' },
  { value: '32', from: 'decimal', to: 'binary' },
  { value: '42', from: 'decimal', to: 'binary' },
  { value: '64', from: 'decimal', to: 'binary' },
  { value: '100', from: 'decimal', to: 'binary' },
  { value: '128', from: 'decimal', to: 'binary' },
  { value: '255', from: 'decimal', to: 'binary' },
  { value: '256', from: 'decimal', to: 'binary' },
  { value: '512', from: 'decimal', to: 'binary' },
  { value: '1000', from: 'decimal', to: 'binary' },
];

/** Popular decimal → hex conversions */
const decimalToHex: NumberBaseConversion[] = [
  { value: '1', from: 'decimal', to: 'hex' },
  { value: '10', from: 'decimal', to: 'hex' },
  { value: '15', from: 'decimal', to: 'hex' },
  { value: '16', from: 'decimal', to: 'hex' },
  { value: '42', from: 'decimal', to: 'hex' },
  { value: '100', from: 'decimal', to: 'hex' },
  { value: '255', from: 'decimal', to: 'hex' },
  { value: '1024', from: 'decimal', to: 'hex' },
];

/** Popular hex → decimal conversions */
const hexToDecimal: NumberBaseConversion[] = [
  { value: '1', from: 'hex', to: 'decimal' },
  { value: 'a', from: 'hex', to: 'decimal' },
  { value: 'f', from: 'hex', to: 'decimal' },
  { value: '10', from: 'hex', to: 'decimal' },
  { value: 'ff', from: 'hex', to: 'decimal' },
  { value: '100', from: 'hex', to: 'decimal' },
];

/** Popular decimal ⇄ octal conversions */
const decimalToOctal: NumberBaseConversion[] = [
  { value: '8', from: 'decimal', to: 'octal' },
  { value: '64', from: 'decimal', to: 'octal' },
  { value: '512', from: 'decimal', to: 'octal' },
];

const octalToDecimal: NumberBaseConversion[] = [
  { value: '10', from: 'octal', to: 'decimal' },
  { value: '77', from: 'octal', to: 'decimal' },
  { value: '100', from: 'octal', to: 'decimal' },
];

/** Master list of all popular number base conversions */
export const NUMBER_BASE_VALUES: NumberBaseConversion[] = [
  ...binaryToDecimal,
  ...decimalToBinary,
  ...decimalToHex,
  ...hexToDecimal,
  ...decimalToOctal,
  ...octalToDecimal,
];

/**
 * Parse a string value in the given base name to a decimal number.
 */
export function parseBaseValue(value: string, baseName: string): number {
  const radix = BASE_RADIX[baseName];
  if (!radix) return NaN;
  return parseInt(value, radix);
}

/**
 * Convert a decimal number to a string in the given base name.
 */
export function formatBaseValue(decimal: number, baseName: string): string {
  const radix = BASE_RADIX[baseName];
  if (!radix) return String(decimal);
  return decimal.toString(radix).toUpperCase();
}

/** Get the display name of a base in a given language */
export function baseDisplayName(baseName: string, lang: string): string {
  if (lang === 'zh') return BASE_NAMES_ZH[baseName] ?? baseName;
  return BASE_NAMES_EN[baseName] ?? baseName;
}

/**
 * Generate a slug for a number base conversion.
 * English: "binary-1010-to-decimal"
 * Chinese: "二进制-1010-转-十进制"
 */
export function numberBaseSlug(conv: NumberBaseConversion, lang: string): string {
  const fromName = lang === 'zh' ? BASE_NAMES_ZH[conv.from] : conv.from;
  const toName = lang === 'zh' ? BASE_NAMES_ZH[conv.to] : conv.to;
  if (lang === 'zh') {
    return `${fromName}-${conv.value}-转-${toName}`;
  }
  return `${fromName}-${conv.value}-to-${toName}`;
}

interface NumberBasePageData {
  conv: NumberBaseConversion;
  decimalValue: number;
  result: string;
}

/**
 * Parse a number base slug back into page data.
 * English: "binary-1010-to-decimal" → { conv: { value: "1010", from: "binary", to: "decimal" }, ... }
 * Chinese: "二进制-1010-转-十进制" → { conv: { value: "1010", from: "binary", to: "decimal" }, ... }
 */
export function parseNumberBaseSlug(slug: string, lang: string): NumberBasePageData | null {
  let match: RegExpMatchArray | null;
  let fromName: string;
  let value: string;
  let toName: string;

  if (lang === 'zh') {
    match = slug.match(/^(.+)-(\w+)-转-(.+)$/);
    if (!match) return null;
    fromName = match[1];
    value = match[2];
    toName = match[3];
  } else {
    match = slug.match(/^(\w+)-(.+)-to-(\w+)$/);
    if (!match) return null;
    fromName = match[1];
    value = match[2];
    toName = match[3];
  }

  // Reverse lookup base name → key
  const reverseNames: Record<string, string> = {};
  for (const [key, name] of Object.entries(BASE_NAMES_EN)) {
    reverseNames[name] = key;
  }
  for (const [key, name] of Object.entries(BASE_NAMES_ZH)) {
    reverseNames[name] = key;
  }

  const from = reverseNames[fromName];
  const to = reverseNames[toName];
  if (!from || !to) return null;

  const conv: NumberBaseConversion = { value, from, to };
  const decimalValue = parseBaseValue(value, from);
  if (isNaN(decimalValue)) return null;
  const result = formatBaseValue(decimalValue, to);

  return { conv, decimalValue, result };
}
