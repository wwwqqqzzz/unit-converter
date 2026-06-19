// ============================================================
// Unit definitions & conversion coefficients
// Edit this file to add categories or units — pages auto-generate
// ============================================================

export interface Unit {
  id: string;
  name: Record<string, string>;
  symbol: string;
  toBase: number;
}

export interface Category {
  id: string;
  name: Record<string, string>;
  baseUnitId: string;
  units: Unit[];
  convertFn?: (value: number, fromId: string, toId: string) => number;
}

export const COMMON_VALUES = [1, 2, 3, 5, 10, 20, 50, 100, 500, 1000];

export const CATEGORY_ICONS: Record<string, string> = {
  length: '📏', weight: '⚖️', temperature: '🌡️', data: '💾',
  area: '📐', volume: '🧪', speed: '🏎️', time: '⏱️',
  pressure: '🔧', energy: '⚡', power: '💡', fuel: '⛽',
  frequency: '📡', angle: '📐', force: '🏋️', torque: '🔩',
  shoe: '👟',
};

export const CATEGORY_VALUES: Record<string, number[]> = {
  length: [1, 2, 5, 10, 50, 100, 500, 1000],
  weight: [1, 5, 10, 50, 100, 500, 1000],
  temperature: [0, 20, 37, 100],
  data: [1, 10, 100, 1024, 1048576],
  area: [1, 10, 100, 1000, 10000],
  volume: [1, 5, 10, 100, 1000],
  speed: [1, 10, 100, 500],
  time: [1, 60, 3600, 86400],
  pressure: [1, 10, 100, 1000],
  energy: [1, 10, 100, 1000],
  power: [1, 10, 100, 1000],
  fuel: [1, 10],
  frequency: [1, 1000, 1000000],
  angle: [1, 45, 90, 180, 360],
  force: [1, 10, 100, 1000],
  torque: [1, 10, 100, 1000],
  shoe: [],
};

export const categories: Category[] = [
  {
    id: 'length',
    name: { en: 'Length', zh: '长度', es: 'Longitud', fr: 'Longueur', de: 'Länge', ja: '長さ', pt: 'Comprimento', it: 'Lunghezza', ko: '길이', ru: 'Длина', hi: 'लंबाई', tr: 'Uzunluk' },
    baseUnitId: 'm',
    units: [
      { id: 'mm',       name: { en: 'Millimeters', zh: '毫米', es: 'Milímetros', fr: 'Millimètres', de: 'Millimeter', ja: 'ミリメートル', pt: 'Milímetros', it: 'Millimetri', ko: '밀리미터', ru: 'Миллиметры', hi: 'मिलीमीटर', tr: 'Milimetre' }, symbol: 'mm',   toBase: 0.001 },
      { id: 'cm',       name: { en: 'Centimeters', zh: '厘米', es: 'Centímetros', fr: 'Centimètres', de: 'Zentimeter', ja: 'センチメートル', pt: 'Centímetros', it: 'Centimetri', ko: '센티미터', ru: 'Сантиметры', hi: 'सेंटीमीटर', tr: 'Santimetre' }, symbol: 'cm',   toBase: 0.01 },
      { id: 'm',        name: { en: 'Meters', zh: '米', es: 'Metros', fr: 'Mètres', de: 'Meter', ja: 'メートル', pt: 'Metros', it: 'Metri', ko: '미터', ru: 'Метры', hi: 'मीटर', tr: 'Metre' }, symbol: 'm',    toBase: 1 },
      { id: 'km',       name: { en: 'Kilometers', zh: '千米', es: 'Kilómetros', fr: 'Kilomètres', de: 'Kilometer', ja: 'キロメートル', pt: 'Quilômetros', it: 'Chilometri', ko: '킬로미터', ru: 'Километры', hi: 'किलोमीटर', tr: 'Kilometre' }, symbol: 'km',   toBase: 1000 },
      { id: 'inch',     name: { en: 'Inches', zh: '英寸', es: 'Pulgadas', fr: 'Pouces', de: 'Zoll', ja: 'インチ', pt: 'Polegadas', it: 'Pollici', ko: '인치', ru: 'Дюймы', hi: 'इंच', tr: 'İnç' }, symbol: 'in',   toBase: 0.0254 },
      { id: 'foot',     name: { en: 'Feet', zh: '英尺', es: 'Pies', fr: 'Pieds', de: 'Fuß', ja: 'フィート', pt: 'Pés', it: 'Piedi', ko: '피트', ru: 'Футы', hi: 'फीट', tr: 'Fit' }, symbol: 'ft',   toBase: 0.3048 },
      { id: 'yard',     name: { en: 'Yards', zh: '码', es: 'Yardas', fr: 'Yards', de: 'Yard', ja: 'ヤード', pt: 'Jardas', it: 'Iarde', ko: '야드', ru: 'Ярды', hi: 'यार्ड', tr: 'Yarda' }, symbol: 'yd',   toBase: 0.9144 },
      { id: 'mile',     name: { en: 'Miles', zh: '英里', es: 'Millas', fr: 'Miles', de: 'Meilen', ja: 'マイル', pt: 'Milhas', it: 'Miglia', ko: '마일', ru: 'Мили', hi: 'मील', tr: 'Mil' }, symbol: 'mi',   toBase: 1609.344 },
    ],
  },
  {
    id: 'weight',
    name: { en: 'Weight', zh: '重量', es: 'Peso', fr: 'Poids', de: 'Gewicht', ja: '重さ', pt: 'Peso', it: 'Peso', ko: '무게', ru: 'Вес', hi: 'वजन', tr: 'Ağırlık' },
    baseUnitId: 'g',
    units: [
      { id: 'mg',     name: { en: 'Milligrams', zh: '毫克', es: 'Miligramos', fr: 'Milligrammes', de: 'Milligramm', ja: 'ミリグラム', pt: 'Miligramas', it: 'Milligrammi', ko: '밀리그램', ru: 'Миллиграммы', hi: 'मिलीग्राम', tr: 'Miligram' }, symbol: 'mg',    toBase: 0.001 },
      { id: 'g',      name: { en: 'Grams', zh: '克', es: 'Gramos', fr: 'Grammes', de: 'Gramm', ja: 'グラム', pt: 'Gramas', it: 'Grammi', ko: '그램', ru: 'Граммы', hi: 'ग्राम', tr: 'Gram' }, symbol: 'g',     toBase: 1 },
      { id: 'kg',     name: { en: 'Kilograms', zh: '千克', es: 'Kilogramos', fr: 'Kilogrammes', de: 'Kilogramm', ja: 'キログラム', pt: 'Quilogramas', it: 'Chilogrammi', ko: '킬로그램', ru: 'Килограммы', hi: 'किलोग्राम', tr: 'Kilogram' }, symbol: 'kg',    toBase: 1000 },
      { id: 'tonne',  name: { en: 'Metric Tons', zh: '公吨', es: 'Toneladas', fr: 'Tonnes', de: 'Tonnen', ja: 'トン', pt: 'Toneladas', it: 'Tonnellate', ko: '톤', ru: 'Тонны', hi: 'मेट्रिक टन', tr: 'Metrik Ton' }, symbol: 't',    toBase: 1000000 },
      { id: 'oz',     name: { en: 'Ounces', zh: '盎司', es: 'Onzas', fr: 'Onces', de: 'Unzen', ja: 'オンス', pt: 'Onças', it: 'Once', ko: '온스', ru: 'Унции', hi: 'औंस', tr: 'Ons' }, symbol: 'oz',    toBase: 28.3495 },
      { id: 'lb',     name: { en: 'Pounds', zh: '磅', es: 'Libras', fr: 'Livres', de: 'Pfund', ja: 'ポンド', pt: 'Libras', it: 'Libbre', ko: '파운드', ru: 'Фунты', hi: 'पाउंड', tr: 'Libra' }, symbol: 'lb',    toBase: 453.592 },
      { id: 'st',     name: { en: 'Stones', zh: '英石', es: 'Stones', fr: 'Stones', de: 'Stone', ja: 'ストーン', pt: 'Stones', it: 'Stone', ko: '스톤', ru: 'Стоуны', hi: 'स्टोन', tr: 'Stone' }, symbol: 'st',    toBase: 6350.29 },
      { id: 'jin',    name: { en: 'Jin (Chinese)', zh: '斤', es: 'Jin (chino)', fr: 'Jin (chinois)', de: 'Jin (chinesisch)', ja: '斤（中国）', pt: 'Jin (chinês)', it: 'Jin (cinese)', ko: '근(중국)', ru: 'Цзинь (китайский)', hi: 'जिन (चीनी)', tr: 'Jin (Çin)' }, symbol: '斤',    toBase: 500 },
    ],
  },
  {
    id: 'temperature',
    name: { en: 'Temperature', zh: '温度', es: 'Temperatura', fr: 'Température', de: 'Temperatur', ja: '温度', pt: 'Temperatura', it: 'Temperatura', ko: '온도', ru: 'Температура', hi: 'तापमान', tr: 'Sıcaklık' },
    baseUnitId: 'c',
    units: [
      { id: 'c', name: { en: 'Celsius', zh: '摄氏度', es: 'Celsius', fr: 'Celsius', de: 'Celsius', ja: '摂氏', pt: 'Celsius', it: 'Celsius', ko: '섭씨', ru: 'Цельсий', hi: 'सेल्सियस', tr: 'Celsius' }, symbol: '°C', toBase: 0 },
      { id: 'f', name: { en: 'Fahrenheit', zh: '华氏度', es: 'Fahrenheit', fr: 'Fahrenheit', de: 'Fahrenheit', ja: '華氏', pt: 'Fahrenheit', it: 'Fahrenheit', ko: '화씨', ru: 'Фаренгейт', hi: 'फ़ारेनहाइट', tr: 'Fahrenheit' }, symbol: '°F', toBase: 0 },
      { id: 'k', name: { en: 'Kelvin', zh: '开尔文', es: 'Kelvin', fr: 'Kelvin', de: 'Kelvin', ja: 'ケルビン', pt: 'Kelvin', it: 'Kelvin', ko: '켈빈', ru: 'Кельвин', hi: 'केल्विन', tr: 'Kelvin' }, symbol: 'K',  toBase: 0 },
    ],
    convertFn: (value: number, fromId: string, toId: string): number => {
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
    name: { en: 'Data Storage', zh: '数据存储', es: 'Almacenamiento', fr: 'Stockage', de: 'Datenspeicher', ja: 'データ容量', pt: 'Armazenamento', it: 'Archiviazione', ko: '데이터 용량', ru: 'Данные', hi: 'डेटा स्टोरेज', tr: 'Veri Depolama' },
    baseUnitId: 'b',
    units: [
      { id: 'bit',  name: { en: 'Bits', zh: '比特', es: 'Bits', fr: 'Bits', de: 'Bits', ja: 'ビット', pt: 'Bits', it: 'Bit', ko: '비트', ru: 'Биты', hi: 'बिट', tr: 'Bit' }, symbol: 'bit', toBase: 0.125 },
      { id: 'b',    name: { en: 'Bytes', zh: '字节', es: 'Bytes', fr: 'Octets', de: 'Bytes', ja: 'バイト', pt: 'Bytes', it: 'Byte', ko: '바이트', ru: 'Байты', hi: 'बाइट', tr: 'Bayt' }, symbol: 'B',   toBase: 1 },
      { id: 'kb',   name: { en: 'Kilobytes', zh: '千字节', es: 'Kilobytes', fr: 'Kilooctets', de: 'Kilobytes', ja: 'キロバイト', pt: 'Quilobytes', it: 'Kilobyte', ko: '킬로바이트', ru: 'Килобайты', hi: 'किलोबाइट', tr: 'Kilobayt' }, symbol: 'KB',  toBase: 1024 },
      { id: 'mb',   name: { en: 'Megabytes', zh: '兆字节', es: 'Megabytes', fr: 'Mégaoctets', de: 'Megabytes', ja: 'メガバイト', pt: 'Megabytes', it: 'Megabyte', ko: '메가바이트', ru: 'Мегабайты', hi: 'मेगाबाइट', tr: 'Megabayt' }, symbol: 'MB',  toBase: 1048576 },
      { id: 'gb',   name: { en: 'Gigabytes', zh: '千兆字节', es: 'Gigabytes', fr: 'Gigaoctets', de: 'Gigabytes', ja: 'ギガバイト', pt: 'Gigabytes', it: 'Gigabyte', ko: '기가바이트', ru: 'Гигабайты', hi: 'गिगाबाइट', tr: 'Gigabayt' }, symbol: 'GB',  toBase: 1073741824 },
      { id: 'tb',   name: { en: 'Terabytes', zh: '太字节', es: 'Terabytes', fr: 'Téraoctets', de: 'Terabytes', ja: 'テラバイト', pt: 'Terabytes', it: 'Terabyte', ko: '테라바이트', ru: 'Терабайты', hi: 'टेराबाइट', tr: 'Terabayt' }, symbol: 'TB',  toBase: 1099511627776 },
      { id: 'pb',   name: { en: 'Petabytes', zh: '拍字节', es: 'Petabytes', fr: 'Pétaoctets', de: 'Petabytes', ja: 'ペタバイト', pt: 'Petabytes', it: 'Petabyte', ko: '페타바이트', ru: 'Петабайты', hi: 'पेटाबाइट', tr: 'Petabayt' }, symbol: 'PB',  toBase: 1125899906842624 },
      { id: 'kbit', name: { en: 'Kilobits', zh: '千比特', es: 'Kilobits', fr: 'Kilobits', de: 'Kilobits', ja: 'キロビット', pt: 'Quilobits', it: 'Kilobit', ko: '킬로비트', ru: 'Килобиты', hi: 'किलोबिट', tr: 'Kilobit' }, symbol: 'Kbit', toBase: 128 },
      { id: 'mbit', name: { en: 'Megabits', zh: '兆比特', es: 'Megabits', fr: 'Mégabits', de: 'Megabits', ja: 'メガビット', pt: 'Megabits', it: 'Megabit', ko: '메가비트', ru: 'Мегабиты', hi: 'मेगाबिट', tr: 'Megabit' }, symbol: 'Mbit', toBase: 131072 },
      { id: 'gbit', name: { en: 'Gigabits', zh: '千兆比特', es: 'Gigabits', fr: 'Gigabits', de: 'Gigabits', ja: 'ギガビット', pt: 'Gigabits', it: 'Gigabit', ko: '기가비트', ru: 'Гигабиты', hi: 'गिगाबिट', tr: 'Gigabit' }, symbol: 'Gbit', toBase: 134217728 },
    ],
  },
  {
    id: 'area',
    name: { en: 'Area', zh: '面积', es: 'Área', fr: 'Superficie', de: 'Fläche', ja: '面積', pt: 'Área', it: 'Area', ko: '면적', ru: 'Площадь', hi: 'क्षेत्रफल', tr: 'Alan' },
    baseUnitId: 'sqm',
    units: [
      { id: 'sqmm',  name: { en: 'Square Millimeters', zh: '平方毫米', es: 'Milímetros cuadrados', fr: 'Millimètres carrés', de: 'Quadratmillimeter', ja: '平方ミリメートル', pt: 'Milímetros quadrados', it: 'Millimetri quadrati', ko: '제곱밀리미터', ru: 'Квадратные миллиметры', hi: 'वर्ग मिलीमीटर', tr: 'Milimetrekare' }, symbol: 'mm²',  toBase: 0.000001 },
      { id: 'sqcm',  name: { en: 'Square Centimeters', zh: '平方厘米', es: 'Centímetros cuadrados', fr: 'Centimètres carrés', de: 'Quadratzentimeter', ja: '平方センチメートル', pt: 'Centímetros quadrados', it: 'Centimetri quadrati', ko: '제곱센티미터', ru: 'Квадратные сантиметры', hi: 'वर्ग सेंटीमीटर', tr: 'Santimetrekare' }, symbol: 'cm²',  toBase: 0.0001 },
      { id: 'sqm',   name: { en: 'Square Meters', zh: '平方米', es: 'Metros cuadrados', fr: 'Mètres carrés', de: 'Quadratmeter', ja: '平方メートル', pt: 'Metros quadrados', it: 'Metri quadrati', ko: '제곱미터', ru: 'Квадратные метры', hi: 'वर्ग मीटर', tr: 'Metrekare' }, symbol: 'm²',   toBase: 1 },
      { id: 'sqkm',  name: { en: 'Square Kilometers', zh: '平方千米', es: 'Kilómetros cuadrados', fr: 'Kilomètres carrés', de: 'Quadratkilometer', ja: '平方キロメートル', pt: 'Quilômetros quadrados', it: 'Chilometri quadrati', ko: '제곱킬로미터', ru: 'Квадратные километры', hi: 'वर्ग किलोमीटर', tr: 'Kilometrekare' }, symbol: 'km²',   toBase: 1000000 },
      { id: 'ha',    name: { en: 'Hectares', zh: '公顷', es: 'Hectáreas', fr: 'Hectares', de: 'Hektar', ja: 'ヘクタール', pt: 'Hectares', it: 'Ettari', ko: '헥타르', ru: 'Гектары', hi: 'हेक्टेयर', tr: 'Hektar' }, symbol: 'ha',    toBase: 10000 },
      { id: 'acre',  name: { en: 'Acres', zh: '英亩', es: 'Acres', fr: 'Acres', de: 'Acres', ja: 'エーカー', pt: 'Acres', it: 'Acri', ko: '에이커', ru: 'Акры', hi: 'एकड़', tr: 'Dönüm' }, symbol: 'ac',    toBase: 4046.8564224 },
      { id: 'sqft',  name: { en: 'Square Feet', zh: '平方英尺', es: 'Pies cuadrados', fr: 'Pieds carrés', de: 'Quadratfuß', ja: '平方フィート', pt: 'Pés quadrados', it: 'Piedi quadrati', ko: '제곱피트', ru: 'Квадратные футы', hi: 'वर्ग फीट', tr: 'Feetkare' }, symbol: 'ft²',   toBase: 0.09290304 },
      { id: 'sqin',  name: { en: 'Square Inches', zh: '平方英寸', es: 'Pulgadas cuadradas', fr: 'Pouces carrés', de: 'Quadratzoll', ja: '平方インチ', pt: 'Polegadas quadradas', it: 'Pollici quadrati', ko: '제곱인치', ru: 'Квадратные дюймы', hi: 'वर्ग इंच', tr: 'İnçkare' }, symbol: 'in²',   toBase: 0.00064516 },
      { id: 'sqmi',  name: { en: 'Square Miles', zh: '平方英里', es: 'Millas cuadradas', fr: 'Miles carrés', de: 'Quadratmeilen', ja: '平方マイル', pt: 'Milhas quadradas', it: 'Miglia quadrate', ko: '제곱마일', ru: 'Квадратные мили', hi: 'वर्ग मील', tr: 'Milkare' }, symbol: 'mi²',   toBase: 2589988.110336 },
      { id: 'mu',    name: { en: 'Mu (Chinese)', zh: '亩', es: 'Mu (chino)', fr: 'Mu (chinois)', de: 'Mu (chinesisch)', ja: '畝（中国）', pt: 'Mu (chinês)', it: 'Mu (cinese)', ko: '무(중국)', ru: 'Му (китайский)', hi: 'मू (चीनी)', tr: 'Mu (Çin)' }, symbol: '亩',    toBase: 666.667 },
    ],
  },
  {
    id: 'volume',
    name: { en: 'Volume', zh: '体积', es: 'Volumen', fr: 'Volume', de: 'Volumen', ja: '体積', pt: 'Volume', it: 'Volume', ko: '부피', ru: 'Объём', hi: 'आयतन', tr: 'Hacim' },
    baseUnitId: 'l',
    units: [
      { id: 'ml',      name: { en: 'Milliliters', zh: '毫升', es: 'Mililitros', fr: 'Millilitres', de: 'Milliliter', ja: 'ミリリットル', pt: 'Mililitros', it: 'Millilitri', ko: '밀리리터', ru: 'Миллилитры', hi: 'मिलीलीटर', tr: 'Mililitre' }, symbol: 'mL',    toBase: 0.001 },
      { id: 'cl',      name: { en: 'Centiliters', zh: '厘升', es: 'Centilitros', fr: 'Centilitres', de: 'Zentiliter', ja: 'センチリットル', pt: 'Centilitros', it: 'Centilitri', ko: '센티리터', ru: 'Сантилитры', hi: 'सेंटीलीटर', tr: 'Santilitre' }, symbol: 'cL',    toBase: 0.01 },
      { id: 'dl',      name: { en: 'Deciliters', zh: '分升', es: 'Decilitros', fr: 'Décilitres', de: 'Deziliter', ja: 'デシリットル', pt: 'Decilitros', it: 'Decilitri', ko: '데시리터', ru: 'Децилитры', hi: 'डेसीलीटर', tr: 'Desilitre' }, symbol: 'dL',    toBase: 0.1 },
      { id: 'l',       name: { en: 'Liters', zh: '升', es: 'Litros', fr: 'Litres', de: 'Liter', ja: 'リットル', pt: 'Litros', it: 'Litri', ko: '리터', ru: 'Литры', hi: 'लीटर', tr: 'Litre' }, symbol: 'L',     toBase: 1 },
      { id: 'm3',      name: { en: 'Cubic Meters', zh: '立方米', es: 'Metros cúbicos', fr: 'Mètres cubes', de: 'Kubikmeter', ja: '立方メートル', pt: 'Metros cúbicos', it: 'Metri cubi', ko: '세제곱미터', ru: 'Кубические метры', hi: 'घन मीटर', tr: 'Metreküp' }, symbol: 'm³',    toBase: 1000 },
      { id: 'gal',     name: { en: 'US Gallons', zh: '美加仑', es: 'Galones EE.UU.', fr: 'Gallons US', de: 'US-Gallonen', ja: '米ガロン', pt: 'Galões EUA', it: 'Galloni US', ko: '미국 갤런', ru: 'Галлоны США', hi: 'US गैलन', tr: 'ABD Galonu' }, symbol: 'gal',   toBase: 3.785411784 },
      { id: 'gal_uk',  name: { en: 'UK Gallons', zh: '英加仑', es: 'Galones UK', fr: 'Gallons UK', de: 'UK-Gallonen', ja: '英ガロン', pt: 'Galões UK', it: 'Galloni UK', ko: '영국 갤런', ru: 'Галлоны UK', hi: 'UK गैलन', tr: 'İngiliz Galonu' }, symbol: 'gal',   toBase: 4.54609 },
      { id: 'qt',      name: { en: 'US Quarts', zh: '美夸脱', es: 'Cuartos EE.UU.', fr: 'Quarts US', de: 'US-Quarts', ja: '米クォート', pt: 'Quartos EUA', it: 'Quarti US', ko: '미국 쿼트', ru: 'Кварты США', hi: 'US क्वार्ट', tr: 'ABD Quart' }, symbol: 'qt',    toBase: 0.946352946 },
      { id: 'pt',      name: { en: 'US Pints', zh: '美品脱', es: 'Pintas EE.UU.', fr: 'Pintes US', de: 'US-Pinten', ja: '米パイント', pt: 'Pintas EUA', it: 'Pinte US', ko: '미국 파인트', ru: 'Пинты США', hi: 'US पिंट', tr: 'ABD Pint' }, symbol: 'pt',    toBase: 0.473176473 },
      { id: 'cup',     name: { en: 'US Cups', zh: '美杯', es: 'Tazas EE.UU.', fr: 'Tasses US', de: 'US-Tassen', ja: '米カップ', pt: 'Xícaras EUA', it: 'Tazze US', ko: '미국 컵', ru: 'Чашки США', hi: 'US कप', tr: 'ABD Cup' }, symbol: 'cup',   toBase: 0.2365882365 },
      { id: 'floz',    name: { en: 'US Fluid Ounces', zh: '美液盎司', es: 'Onzas líquidas EE.UU.', fr: 'Onces liquides US', de: 'US-Flüssigunzen', ja: '米液量オンス', pt: 'Onças líquidas EUA', it: 'Once fluide US', ko: '미국 액량 온스', ru: 'Жидкие унции США', hi: 'US द्रव औंस', tr: 'ABD Sıvı Ons' }, symbol: 'fl oz', toBase: 0.0295735295625 },
      { id: 'tbsp',    name: { en: 'Tablespoons', zh: '汤匙', es: 'Cucharadas', fr: 'Cuillères à soupe', de: 'Esslöffel', ja: '大さじ', pt: 'Colheres de sopa', it: 'Cucchiai', ko: '큰술', ru: 'Столовые ложки', hi: 'बड़ा चम्मच', tr: 'Yemek kaşığı' }, symbol: 'tbsp',  toBase: 0.014786764375 },
      { id: 'tsp',     name: { en: 'Teaspoons', zh: '茶匙', es: 'Cucharaditas', fr: 'Cuillères à café', de: 'Teelöffel', ja: '小さじ', pt: 'Colheres de chá', it: 'Cucchiaini', ko: '작은술', ru: 'Чайные ложки', hi: 'छोटा चम्मच', tr: 'Çay kaşığı' }, symbol: 'tsp',   toBase: 0.00492892 },
    ],
  },
  {
    id: 'speed',
    name: { en: 'Speed', zh: '速度', es: 'Velocidad', fr: 'Vitesse', de: 'Geschwindigkeit', ja: '速度', pt: 'Velocidade', it: 'Velocità', ko: '속도', ru: 'Скорость', hi: 'गति', tr: 'Hız' },
    baseUnitId: 'ms',
    units: [
      { id: 'ms',   name: { en: 'Meters per Second', zh: '米每秒', es: 'Metros por segundo', fr: 'Mètres par seconde', de: 'Meter pro Sekunde', ja: 'メートル毎秒', pt: 'Metros por segundo', it: 'Metri al secondo', ko: '미터 매 초', ru: 'Метры в секунду', hi: 'मीटर प्रति सेकंड', tr: 'Metre/saniye' }, symbol: 'm/s',  toBase: 1 },
      { id: 'kmh',  name: { en: 'Kilometers per Hour', zh: '千米每小时', es: 'Kilómetros por hora', fr: 'Kilomètres par heure', de: 'Kilometer pro Stunde', ja: 'キロメートル毎時', pt: 'Quilômetros por hora', it: 'Chilometri all\'ora', ko: '킬로미터 매 시', ru: 'Километры в час', hi: 'किलोमीटर प्रति घंटा', tr: 'Kilometre/saat' }, symbol: 'km/h', toBase: 0.277778 },
      { id: 'mph',  name: { en: 'Miles per Hour', zh: '英里每小时', es: 'Millas por hora', fr: 'Miles par heure', de: 'Meilen pro Stunde', ja: 'マイル毎時', pt: 'Milhas por hora', it: 'Miglia all\'ora', ko: '마일 매 시', ru: 'Мили в час', hi: 'मील प्रति घंटा', tr: 'Mil/saat' }, symbol: 'mph',  toBase: 0.44704 },
      { id: 'kn',   name: { en: 'Knots', zh: '节', es: 'Nudos', fr: 'Nœuds', de: 'Knoten', ja: 'ノット', pt: 'Nós', it: 'Nodi', ko: '노트', ru: 'Узлы', hi: 'नॉट', tr: 'Knot' }, symbol: 'kn',   toBase: 0.514444 },
      { id: 'fts',  name: { en: 'Feet per Second', zh: '英尺每秒', es: 'Pies por segundo', fr: 'Pieds par seconde', de: 'Fuß pro Sekunde', ja: 'フィート毎秒', pt: 'Pés por segundo', it: 'Piedi al secondo', ko: '피트 매 초', ru: 'Футы в секунду', hi: 'फीट प्रति सेकंड', tr: 'Fit/saniye' }, symbol: 'ft/s',  toBase: 0.3048 },
      { id: 'mach', name: { en: 'Mach', zh: '马赫', es: 'Mach', fr: 'Mach', de: 'Mach', ja: 'マッハ', pt: 'Mach', it: 'Mach', ko: '마하', ru: 'Мах', hi: 'मैक', tr: 'Mach' }, symbol: 'Ma',    toBase: 343 },
    ],
  },
  {
    id: 'time',
    name: { en: 'Time', zh: '时间', es: 'Tiempo', fr: 'Temps', de: 'Zeit', ja: '時間', pt: 'Tempo', it: 'Tempo', ko: '시간', ru: 'Время', hi: 'समय', tr: 'Zaman' },
    baseUnitId: 's',
    units: [
      { id: 'ms_time', name: { en: 'Milliseconds', zh: '毫秒', es: 'Milisegundos', fr: 'Millisecondes', de: 'Millisekunden', ja: 'ミリ秒', pt: 'Milissegundos', it: 'Millisecondi', ko: '밀리초', ru: 'Миллисекунды', hi: 'मिलीसेकंड', tr: 'Milisaniye' }, symbol: 'ms',  toBase: 0.001 },
      { id: 's',       name: { en: 'Seconds', zh: '秒', es: 'Segundos', fr: 'Secondes', de: 'Sekunden', ja: '秒', pt: 'Segundos', it: 'Secondi', ko: '초', ru: 'Секунды', hi: 'सेकंड', tr: 'Saniye' }, symbol: 's',   toBase: 1 },
      { id: 'min',     name: { en: 'Minutes', zh: '分钟', es: 'Minutos', fr: 'Minutes', de: 'Minuten', ja: '分', pt: 'Minutos', it: 'Minuti', ko: '분', ru: 'Минуты', hi: 'मिनट', tr: 'Dakika' }, symbol: 'min', toBase: 60 },
      { id: 'h',       name: { en: 'Hours', zh: '小时', es: 'Horas', fr: 'Heures', de: 'Stunden', ja: '時間', pt: 'Horas', it: 'Ore', ko: '시간', ru: 'Часы', hi: 'घंटा', tr: 'Saat' }, symbol: 'h',   toBase: 3600 },
      { id: 'd',       name: { en: 'Days', zh: '天', es: 'Días', fr: 'Jours', de: 'Tage', ja: '日', pt: 'Dias', it: 'Giorni', ko: '일', ru: 'Дни', hi: 'दिन', tr: 'Gün' }, symbol: 'd',   toBase: 86400 },
      { id: 'wk',      name: { en: 'Weeks', zh: '周', es: 'Semanas', fr: 'Semaines', de: 'Wochen', ja: '週', pt: 'Semanas', it: 'Settimane', ko: '주', ru: 'Недели', hi: 'सप्ताह', tr: 'Hafta' }, symbol: 'wk',  toBase: 604800 },
      { id: 'mo',      name: { en: 'Months (avg)', zh: '月', es: 'Meses (prom.)', fr: 'Mois (moy.)', de: 'Monate (ø)', ja: '月', pt: 'Meses (méd.)', it: 'Mesi (media)', ko: '월(평균)', ru: 'Месяцы (ср.)', hi: 'महीना (औसत)', tr: 'Ay (ort.)' }, symbol: 'mo',  toBase: 2629746 },
      { id: 'yr',      name: { en: 'Years (365.25 days)', zh: '年', es: 'Años (365,25 días)', fr: 'Années (365,25 jours)', de: 'Jahre (365,25 Tage)', ja: '年', pt: 'Anos (365,25 dias)', it: 'Anni (365,25 giorni)', ko: '년(365.25일)', ru: 'Годы (365,25 дней)', hi: 'वर्ष (365.25 दिन)', tr: 'Yıl (365,25 gün)' }, symbol: 'yr', toBase: 31557600 },
    ],
  },
  {
    id: 'pressure',
    name: { en: 'Pressure', zh: '压力', es: 'Presión', fr: 'Pression', de: 'Druck', ja: '圧力', pt: 'Pressão', it: 'Pressione', ko: '압력', ru: 'Давление', hi: 'दबाव', tr: 'Basınç' },
    baseUnitId: 'pa',
    units: [
      { id: 'pa',   name: { en: 'Pascals', zh: '帕斯卡', es: 'Pascales', fr: 'Pascals', de: 'Pascal', ja: 'パスカル', pt: 'Pascais', it: 'Pascal', ko: '파스칼', ru: 'Паскали', hi: 'पास्कल', tr: 'Pascal' }, symbol: 'Pa',    toBase: 1 },
      { id: 'kpa',  name: { en: 'Kilopascals', zh: '千帕', es: 'Kilopascales', fr: 'Kilopascals', de: 'Kilopascal', ja: 'キロパスカル', pt: 'Quilopascais', it: 'Kilopascal', ko: '킬로파스칼', ru: 'Килопаскали', hi: 'किलोपास्कल', tr: 'Kilopascal' }, symbol: 'kPa',   toBase: 1000 },
      { id: 'mpa',  name: { en: 'Megapascals', zh: '兆帕', es: 'Megapascales', fr: 'Mégapascals', de: 'Megapascal', ja: 'メガパスカル', pt: 'Megapascais', it: 'Megapascal', ko: '메가파스칼', ru: 'Мегапаскали', hi: 'मेगापास्कल', tr: 'Megapascal' }, symbol: 'MPa',   toBase: 1000000 },
      { id: 'bar',  name: { en: 'Bar', zh: '巴', es: 'Bar', fr: 'Bar', de: 'Bar', ja: 'バール', pt: 'Bar', it: 'Bar', ko: '바', ru: 'Бар', hi: 'बार', tr: 'Bar' }, symbol: 'bar',   toBase: 100000 },
      { id: 'atm',  name: { en: 'Atmospheres', zh: '标准大气压', es: 'Atmósferas', fr: 'Atmosphères', de: 'Atmosphären', ja: '標準大気圧', pt: 'Atmosferas', it: 'Atmosfere', ko: '기압', ru: 'Атмосферы', hi: 'वायुमंडल', tr: 'Atmosfer' }, symbol: 'atm',   toBase: 101325 },
      { id: 'psi',  name: { en: 'PSI', zh: '磅力每平方英寸', es: 'PSI', fr: 'PSI', de: 'PSI', ja: 'PSI', pt: 'PSI', it: 'PSI', ko: 'PSI', ru: 'PSI', hi: 'PSI', tr: 'PSI' }, symbol: 'psi', toBase: 6894.76 },
      { id: 'mmhg', name: { en: 'mmHg', zh: '毫米汞柱', es: 'mmHg', fr: 'mmHg', de: 'mmHg', ja: 'mmHg', pt: 'mmHg', it: 'mmHg', ko: 'mmHg', ru: 'мм рт. ст.', hi: 'mmHg', tr: 'mmHg' }, symbol: 'mmHg',  toBase: 133.322 },
      { id: 'torr', name: { en: 'Torr', zh: '托', es: 'Torr', fr: 'Torr', de: 'Torr', ja: 'トル', pt: 'Torr', it: 'Torr', ko: '토르', ru: 'Торр', hi: 'टोर', tr: 'Torr' }, symbol: 'Torr',  toBase: 133.322 },
    ],
  },
  {
    id: 'energy',
    name: { en: 'Energy', zh: '能量', es: 'Energía', fr: 'Énergie', de: 'Energie', ja: 'エネルギー', pt: 'Energia', it: 'Energia', ko: '에너지', ru: 'Энергия', hi: 'ऊर्जा', tr: 'Enerji' },
    baseUnitId: 'j',
    units: [
      { id: 'j',    name: { en: 'Joules', zh: '焦耳', es: 'Julios', fr: 'Joules', de: 'Joule', ja: 'ジュール', pt: 'Joules', it: 'Joule', ko: '줄', ru: 'Джоули', hi: 'जूल', tr: 'Joule' }, symbol: 'J',   toBase: 1 },
      { id: 'kj',   name: { en: 'Kilojoules', zh: '千焦', es: 'Kilojulios', fr: 'Kilojoules', de: 'Kilojoule', ja: 'キロジュール', pt: 'Quilojoules', it: 'Kilojoule', ko: '킬로줄', ru: 'Килоджоули', hi: 'किलोजूल', tr: 'Kilojoule' }, symbol: 'kJ',  toBase: 1000 },
      { id: 'cal',  name: { en: 'Calories', zh: '卡路里', es: 'Calorías', fr: 'Calories', de: 'Kalorien', ja: 'カロリー', pt: 'Calorias', it: 'Calorie', ko: '칼로리', ru: 'Калории', hi: 'कैलोरी', tr: 'Kalori' }, symbol: 'cal', toBase: 4.184 },
      { id: 'kcal', name: { en: 'Kilocalories', zh: '千卡', es: 'Kilocalorías', fr: 'Kilocalories', de: 'Kilokalorien', ja: 'キロカロリー', pt: 'Quilocalorias', it: 'Chilocalorie', ko: '킬로칼로리', ru: 'Килокалории', hi: 'किलोकैलोरी', tr: 'Kilokalori' }, symbol: 'kcal', toBase: 4184 },
      { id: 'kwh',  name: { en: 'Kilowatt-hours', zh: '千瓦时', es: 'Kilovatios-hora', fr: 'Kilowattheures', de: 'Kilowattstunden', ja: 'キロワット時', pt: 'Quilowatts-hora', it: 'Chilowattora', ko: '킬로와트시', ru: 'Киловатт-часы', hi: 'किलोवाट-घंटा', tr: 'Kilovatsaat' }, symbol: 'kWh', toBase: 3600000 },
      { id: 'btu',  name: { en: 'BTU', zh: '英热单位', es: 'BTU', fr: 'BTU', de: 'BTU', ja: 'BTU', pt: 'BTU', it: 'BTU', ko: 'BTU', ru: 'BTU', hi: 'BTU', tr: 'BTU' }, symbol: 'BTU', toBase: 1055.06 },
      { id: 'wh',   name: { en: 'Watt-hours', zh: '瓦时', es: 'Vatios-hora', fr: 'Wattheures', de: 'Wattstunden', ja: 'ワット時', pt: 'Watts-hora', it: 'Wattora', ko: '와트시', ru: 'Ватт-часы', hi: 'वाट-घंटा', tr: 'Vatsaat' }, symbol: 'Wh',  toBase: 3600 },
    ],
  },
  {
    id: 'power',
    name: { en: 'Power', zh: '功率', es: 'Potencia', fr: 'Puissance', de: 'Leistung', ja: '電力', pt: 'Potência', it: 'Potenza', ko: '전력', ru: 'Мощность', hi: 'शक्ति', tr: 'Güç' },
    baseUnitId: 'w',
    units: [
      { id: 'w',     name: { en: 'Watts', zh: '瓦特', es: 'Vatios', fr: 'Watts', de: 'Watt', ja: 'ワット', pt: 'Watts', it: 'Watt', ko: '와트', ru: 'Ватты', hi: 'वाट', tr: 'Vat' }, symbol: 'W',    toBase: 1 },
      { id: 'kw',    name: { en: 'Kilowatts', zh: '千瓦', es: 'Kilovatios', fr: 'Kilowatts', de: 'Kilowatt', ja: 'キロワット', pt: 'Quilowatts', it: 'Kilowatt', ko: '킬로와트', ru: 'Киловатты', hi: 'किलोवाट', tr: 'Kilovat' }, symbol: 'kW',   toBase: 1000 },
      { id: 'mw',    name: { en: 'Megawatts', zh: '兆瓦', es: 'Megavatios', fr: 'Mégawatts', de: 'Megawatt', ja: 'メガワット', pt: 'Megawatts', it: 'Megawatt', ko: '메가와트', ru: 'Мегаватты', hi: 'मेगावाट', tr: 'Megavat' }, symbol: 'MW',   toBase: 1000000 },
      { id: 'hp',    name: { en: 'Horsepower', zh: '马力', es: 'Caballos de fuerza', fr: 'Chevaux-vapeur', de: 'Pferdestärke', ja: '馬力', pt: 'Cavalos-vapor', it: 'Cavalli vapore', ko: '마력', ru: 'Лошадиные силы', hi: 'अश्वशक्ति', tr: 'Beygir gücü' }, symbol: 'hp',    toBase: 745.7 },
      { id: 'ps',    name: { en: 'Metric Horsepower', zh: '公制马力', es: 'Caballos métricos', fr: 'Chevaux DIN', de: 'PS', ja: 'PS（メートル法馬力）', pt: 'Cavalos métricos', it: 'Cavalli metrici', ko: '미터법 마력', ru: 'Метрические л.с.', hi: 'मेट्रिक अश्वशक्ति', tr: 'Metrik beygir' }, symbol: 'PS', toBase: 735.499 },
      { id: 'btuh',  name: { en: 'BTU/hour', zh: '英热单位/时', es: 'BTU/hora', fr: 'BTU/heure', de: 'BTU/Stunde', ja: 'BTU/時', pt: 'BTU/hora', it: 'BTU/ora', ko: 'BTU/시', ru: 'BTU/час', hi: 'BTU/घंटा', tr: 'BTU/saat' }, symbol: 'BTU/h', toBase: 0.29307107 },
      { id: 'ftlbs', name: { en: 'Foot-pounds/second', zh: '英尺磅/秒', es: 'Libra-pie/segundo', fr: 'Pied-livre/seconde', de: 'Fuß-Pfund/Sekunde', ja: 'フィートポンド/秒', pt: 'Libra-pé/segundo', it: 'Piede-libbra/secondo', ko: '피트파운드/초', ru: 'Фут-фунты/сек', hi: 'फुट-पाउंड/सेकंड', tr: 'Fit-libra/saniye' }, symbol: 'ft·lbf/s', toBase: 1.35582 },
      { id: 'calps', name: { en: 'Calories/second', zh: '卡路里/秒', es: 'Calorías/segundo', fr: 'Calories/seconde', de: 'Kalorien/Sekunde', ja: 'カロリー/秒', pt: 'Calorias/segundo', it: 'Calorie/secondo', ko: '칼로리/초', ru: 'Калории/сек', hi: 'कैलोरी/सेकंड', tr: 'Kalori/saniye' }, symbol: 'cal/s', toBase: 4.184 },
    ],
  },
  {
    id: 'fuel',
    name: { en: 'Fuel Efficiency', zh: '燃油效率', es: 'Consumo', fr: 'Consommation', de: 'Verbrauch', ja: '燃費', pt: 'Consumo', it: 'Consumo', ko: '연비', ru: 'Расход топлива', hi: 'ईंधन दक्षता', tr: 'Yakıt Tüketimi' },
    baseUnitId: 'kml',
    units: [
      { id: 'kml',  name: { en: 'Kilometers per Liter', zh: '千米每升', es: 'Kilómetros por litro', fr: 'Kilomètres par litre', de: 'Kilometer pro Liter', ja: 'キロメートル毎リットル', pt: 'Quilômetros por litro', it: 'Chilometri per litro', ko: '킬로미터 매 리터', ru: 'Километры на литр', hi: 'किलोमीटर प्रति लीटर', tr: 'Kilometre/litre' }, symbol: 'km/L',  toBase: 1 },
      { id: 'l100',  name: { en: 'Liters per 100km', zh: '升每百千米', es: 'Litros por 100km', fr: 'Litres aux 100km', de: 'Liter pro 100km', ja: 'リットル/100km', pt: 'Litros por 100km', it: 'Litri per 100km', ko: '리터/100km', ru: 'Литры на 100км', hi: 'लीटर प्रति 100किमी', tr: 'Litre/100km' }, symbol: 'L/100km', toBase: 0 },
      { id: 'mpg_us', name: { en: 'Miles per Gallon (US)', zh: '英里每加仑(美)', es: 'Millas por galón (EE.UU.)', fr: 'Miles par gallon (US)', de: 'Meilen pro Gallone (US)', ja: 'マイル/ガロン(米)', pt: 'Milhas por galão (EUA)', it: 'Miglia per gallone (US)', ko: '마일/갤런(미국)', ru: 'Мили на галлон (США)', hi: 'मील प्रति गैलन (US)', tr: 'Mil/galon (ABD)' }, symbol: 'mpg', toBase: 0.425144 },
      { id: 'mpg_uk', name: { en: 'Miles per Gallon (UK)', zh: '英里每加仑(英)', es: 'Millas por galón (UK)', fr: 'Miles par gallon (UK)', de: 'Meilen pro Gallone (UK)', ja: 'マイル/ガロン(英)', pt: 'Milhas por galão (UK)', it: 'Miglia per gallone (UK)', ko: '마일/갤런(영국)', ru: 'Мили на галлон (UK)', hi: 'मील प्रति गैलन (UK)', tr: 'Mil/galon (İngiltere)' }, symbol: 'mpg', toBase: 0.354006 },
    ],
    convertFn: (value: number, fromId: string, toId: string): number => {
      let kml: number;
      switch (fromId) {
        case 'kml': kml = value; break;
        case 'l100': kml = value === 0 ? NaN : 100 / value; break;
        case 'mpg_us': kml = value * 0.425144; break;
        case 'mpg_uk': kml = value * 0.354006; break;
        default: return NaN;
      }
      switch (toId) {
        case 'kml': return kml;
        case 'l100': return kml === 0 ? NaN : 100 / kml;
        case 'mpg_us': return kml / 0.425144;
        case 'mpg_uk': return kml / 0.354006;
        default: return NaN;
      }
    },
  },
  {
    id: 'frequency',
    name: { en: 'Frequency', zh: '频率', es: 'Frecuencia', fr: 'Fréquence', de: 'Frequenz', ja: '周波数', pt: 'Frequência', it: 'Frequenza', ko: '주파수', ru: 'Частота', hi: 'आवृत्ति', tr: 'Frekans' },
    baseUnitId: 'hz',
    units: [
      { id: 'hz',  name: { en: 'Hertz', zh: '赫兹', es: 'Hercios', fr: 'Hertz', de: 'Hertz', ja: 'ヘルツ', pt: 'Hertz', it: 'Hertz', ko: '헤르츠', ru: 'Герцы', hi: 'हर्ट्ज़', tr: 'Hertz' }, symbol: 'Hz',  toBase: 1 },
      { id: 'khz', name: { en: 'Kilohertz', zh: '千赫兹', es: 'Kilohercios', fr: 'Kilohertz', de: 'Kilohertz', ja: 'キロヘルツ', pt: 'Quilo-hertz', it: 'Kilohertz', ko: '킬로헤르츠', ru: 'Килогерцы', hi: 'किलोहर्ट्ज़', tr: 'Kilohertz' }, symbol: 'kHz', toBase: 1000 },
      { id: 'mhz', name: { en: 'Megahertz', zh: '兆赫兹', es: 'Megahercios', fr: 'Mégahertz', de: 'Megahertz', ja: 'メガヘルツ', pt: 'Megahertz', it: 'Megahertz', ko: '메가헤르츠', ru: 'Мегагерцы', hi: 'मेगाहर्ट्ज़', tr: 'Megahertz' }, symbol: 'MHz', toBase: 1000000 },
      { id: 'ghz', name: { en: 'Gigahertz', zh: '吉赫兹', es: 'Gigahercios', fr: 'Gigahertz', de: 'Gigahertz', ja: 'ギガヘルツ', pt: 'Gigahertz', it: 'Gigahertz', ko: '기가헤르츠', ru: 'Гигагерцы', hi: 'गिगाहर्ट्ज़', tr: 'Gigahertz' }, symbol: 'GHz', toBase: 1000000000 },
      { id: 'rpm', name: { en: 'Revolutions per Minute', zh: '转每分', es: 'Revoluciones por minuto', fr: 'Tours par minute', de: 'Umdrehungen pro Minute', ja: '回転毎分', pt: 'Revoluções por minuto', it: 'Giri al minuto', ko: '회전/분', ru: 'Обороты в минуту', hi: 'प्रति मिनट चक्कर', tr: 'Devir/dakika' }, symbol: 'rpm', toBase: 1 / 60 },
      { id: 'rps', name: { en: 'Revolutions per Second', zh: '转每秒', es: 'Revoluciones por segundo', fr: 'Tours par seconde', de: 'Umdrehungen pro Sekunde', ja: '回転毎秒', pt: 'Revoluções por segundo', it: 'Giri al secondo', ko: '회전/초', ru: 'Обороты в секунду', hi: 'प्रति सेकंड चक्कर', tr: 'Devir/saniye' }, symbol: 'rps', toBase: 1 },
    ],
  },
  {
    id: 'angle',
    name: { en: 'Angle', zh: '角度', es: 'Ángulo', fr: 'Angle', de: 'Winkel', ja: '角度', pt: 'Ângulo', it: 'Angolo', ko: '각도', ru: 'Угол', hi: 'कोण', tr: 'Açı' },
    baseUnitId: 'deg',
    units: [
      { id: 'deg',  name: { en: 'Degrees', zh: '度', es: 'Grados', fr: 'Degrés', de: 'Grad', ja: '度', pt: 'Graus', it: 'Gradi', ko: '도', ru: 'Градусы', hi: 'डिग्री', tr: 'Derece' }, symbol: '°',   toBase: 1 },
      { id: 'rad',  name: { en: 'Radians', zh: '弧度', es: 'Radianes', fr: 'Radians', de: 'Radiant', ja: 'ラジアン', pt: 'Radianos', it: 'Radianti', ko: '라디안', ru: 'Радианы', hi: 'रेडियन', tr: 'Radyan' }, symbol: 'rad', toBase: 0 },
      { id: 'grad', name: { en: 'Gradians', zh: '梯度', es: 'Gradianes', fr: 'Grades', de: 'Gon', ja: 'グラード', pt: 'Grados', it: 'Gradi centesimali', ko: '그래디안', ru: 'Грады', hi: 'ग्रेडियन', tr: 'Grad' }, symbol: 'gon', toBase: 0 },
      { id: 'arcmin', name: { en: 'Arcminutes', zh: '角分', es: 'Minutos de arco', fr: 'Minutes d\'arc', de: 'Bogenminuten', ja: '角分', pt: 'Minutos de arco', it: 'Primi d\'arco', ko: '각분', ru: 'Угловые минуты', hi: 'आर्कमिनट', tr: 'Dakika (açı)' }, symbol: '′',   toBase: 1 / 60 },
      { id: 'arcsec', name: { en: 'Arcseconds', zh: '角秒', es: 'Segundos de arco', fr: 'Secondes d\'arc', de: 'Bogensekunden', ja: '角秒', pt: 'Segundos de arco', it: 'Secondi d\'arco', ko: '각초', ru: 'Угловые секунды', hi: 'आर्कसेकंड', tr: 'Saniye (açı)' }, symbol: '″',   toBase: 1 / 3600 },
      { id: 'turn', name: { en: 'Turns', zh: '圈', es: 'Vueltas', fr: 'Tours', de: 'Umdrehungen', ja: 'ターン', pt: 'Voltas', it: 'Giri', ko: '회전', ru: 'Обороты', hi: 'घुमाव', tr: 'Tur' }, symbol: 'tr',  toBase: 0 },
    ],
    convertFn: (value: number, fromId: string, toId: string): number => {
      let deg: number;
      switch (fromId) {
        case 'deg': deg = value; break;
        case 'rad': deg = value * (180 / Math.PI); break;
        case 'grad': deg = value * 0.9; break;
        case 'arcmin': deg = value / 60; break;
        case 'arcsec': deg = value / 3600; break;
        case 'turn': deg = value * 360; break;
        default: return NaN;
      }
      switch (toId) {
        case 'deg': return deg;
        case 'rad': return deg * (Math.PI / 180);
        case 'grad': return deg / 0.9;
        case 'arcmin': return deg * 60;
        case 'arcsec': return deg * 3600;
        case 'turn': return deg / 360;
        default: return NaN;
      }
    },
  },
  {
    id: 'force',
    name: { en: 'Force', zh: '力', es: 'Fuerza', fr: 'Force', de: 'Kraft', ja: '力', pt: 'Força', it: 'Forza', ko: '힘', ru: 'Сила', hi: 'बल', tr: 'Kuvvet' },
    baseUnitId: 'n',
    units: [
      { id: 'n',    name: { en: 'Newtons', zh: '牛顿', es: 'Newtons', fr: 'Newtons', de: 'Newton', ja: 'ニュートン', pt: 'Newtons', it: 'Newton', ko: '뉴턴', ru: 'Ньютоны', hi: 'न्यूटन', tr: 'Newton' }, symbol: 'N',    toBase: 1 },
      { id: 'kn',   name: { en: 'Kilonewtons', zh: '千牛', es: 'Kilonewtons', fr: 'Kilonewtons', de: 'Kilonewton', ja: 'キロニュートン', pt: 'Quilonewtons', it: 'Kilonewton', ko: '킬로뉴턴', ru: 'Килоньютоны', hi: 'किलोन्यूटन', tr: 'Kilonewton' }, symbol: 'kN',   toBase: 1000 },
      { id: 'lbf',  name: { en: 'Pound-force', zh: '磅力', es: 'Libra-fuerza', fr: 'Livre-force', de: 'Pfund-Kraft', ja: 'ポンド力', pt: 'Libra-força', it: 'Libbra-forza', ko: '파운드힘', ru: 'Фунт-сила', hi: 'पाउंड-बल', tr: 'Libra-kuvvet' }, symbol: 'lbf',  toBase: 4.44822 },
      { id: 'kgf',  name: { en: 'Kilogram-force', zh: '千克力', es: 'Kilogramo-fuerza', fr: 'Kilogramme-force', de: 'Kilopond', ja: 'キログラム力', pt: 'Quilograma-força', it: 'Chilogrammo-forza', ko: '킬로그램힘', ru: 'Килограмм-сила', hi: 'किलोग्राम-बल', tr: 'Kilogram-kuvvet' }, symbol: 'kgf',  toBase: 9.80665 },
      { id: 'dyn',  name: { en: 'Dynes', zh: '达因', es: 'Dinas', fr: 'Dynes', de: 'Dyn', ja: 'ダイン', pt: 'Dinas', it: 'Dine', ko: '다인', ru: 'Дины', hi: 'डाइन', tr: 'Din' }, symbol: 'dyn',  toBase: 0.00001 },
      { id: 'ozf',  name: { en: 'Ounce-force', zh: '盎司力', es: 'Onza-fuerza', fr: 'Once-force', de: 'Unze-Kraft', ja: 'オンス力', pt: 'Onça-força', it: 'Oncia-forza', ko: '온스힘', ru: 'Унция-сила', hi: 'औंस-बल', tr: 'Ons-kuvvet' }, symbol: 'ozf',  toBase: 0.278014 },
    ],
  },
  {
    id: 'torque',
    name: { en: 'Torque', zh: '扭矩', es: 'Par motor', fr: 'Couple', de: 'Drehmoment', ja: 'トルク', pt: 'Torque', it: 'Coppia', ko: '토크', ru: 'Крутящий момент', hi: 'टॉर्क', tr: 'Tork' },
    baseUnitId: 'nm',
    units: [
      { id: 'nm',    name: { en: 'Newton-meters', zh: '牛顿米', es: 'Newton-metros', fr: 'Newton-mètres', de: 'Newtonmeter', ja: 'ニュートンメートル', pt: 'Newton-metros', it: 'Newton-metri', ko: '뉴턴미터', ru: 'Ньютон-метры', hi: 'न्यूटन-मीटर', tr: 'Newton-metre' }, symbol: 'N·m',   toBase: 1 },
      { id: 'kNm',   name: { en: 'Kilonewton-meters', zh: '千牛米', es: 'Kilonewton-metros', fr: 'Kilonewton-mètres', de: 'Kilonewtonmeter', ja: 'キロニュートンメートル', pt: 'Quilonewton-metros', it: 'Kilonewton-metri', ko: '킬로뉴턴미터', ru: 'Килоньютон-метры', hi: 'किलोन्यूटन-मीटर', tr: 'Kilonewton-metre' }, symbol: 'kN·m',  toBase: 1000 },
      { id: 'lbft',  name: { en: 'Pound-feet', zh: '磅英尺', es: 'Libra-pie', fr: 'Livre-pied', de: 'Pfund-Fuß', ja: 'ポンドフィート', pt: 'Libra-pé', it: 'Libbra-piede', ko: '파운드피트', ru: 'Фунт-футы', hi: 'पाउंड-फीट', tr: 'Libra-fit' }, symbol: 'lb·ft', toBase: 1.35582 },
      { id: 'lbin',  name: { en: 'Pound-inches', zh: '磅英寸', es: 'Libra-pulgada', fr: 'Livre-pouce', de: 'Pfund-Zoll', ja: 'ポンドインチ', pt: 'Libra-polegada', it: 'Libbra-pollice', ko: '파운드인치', ru: 'Фунт-дюймы', hi: 'पाउंड-इंच', tr: 'Libra-inç' }, symbol: 'lb·in', toBase: 0.112985 },
      { id: 'kgfm',  name: { en: 'Kilogram-force meters', zh: '千克力米', es: 'Kilogramo-fuerza metros', fr: 'Kilogramme-force mètres', de: 'Kilopondmeter', ja: 'キログラム力メートル', pt: 'Quilograma-força metros', it: 'Chilogrammo-forza metri', ko: '킬로그램힘미터', ru: 'Килограмм-сила-метры', hi: 'किलोग्राम-बल मीटर', tr: 'Kilogram-kuvvet metre' }, symbol: 'kgf·m', toBase: 9.80665 },
      { id: 'ozin',  name: { en: 'Ounce-inches', zh: '盎司英寸', es: 'Onza-pulgada', fr: 'Once-pouce', de: 'Unze-Zoll', ja: 'オンスインチ', pt: 'Onça-polegada', it: 'Oncia-pollice', ko: '온스인치', ru: 'Унция-дюймы', hi: 'औंस-इंच', tr: 'Ons-inç' }, symbol: 'oz·in', toBase: 0.0070616 },
    ],
  },
  {
    id: 'shoe',
    name: { en: 'Shoe Size', zh: '鞋码', es: 'Talla de zapato', fr: 'Pointure', de: 'Schuhgröße', ja: '靴サイズ', pt: 'Tamanho de sapato', it: 'Numero di scarpa', ko: '신발 사이즈', ru: 'Размер обуви', hi: 'जूते का साइज़', tr: 'Ayakkabı Numarası' },
    baseUnitId: 'cm',
    units: [
      { id: 'cm',    name: { en: 'Centimeters (foot length)', zh: '厘米（脚长）', es: 'Centímetros (largo del pie)', fr: 'Centimètres (longueur du pied)', de: 'Zentimeter (Fußlänge)', ja: 'センチメートル（足の長さ）', pt: 'Centímetros (comprimento do pé)', it: 'Centimetri (lunghezza del piede)', ko: '센티미터(발 길이)', ru: 'Сантиметры (длина стопы)', hi: 'सेंटीमीटर (पैर की लंबाई)', tr: 'Santimetre (ayak uzunluğu)' }, symbol: 'cm', toBase: 1 },
      { id: 'us_m',  name: { en: 'US Men', zh: '美码（男）', es: 'EE.UU. hombre', fr: 'US homme', de: 'US Herren', ja: '米国男性', pt: 'EUA masculino', it: 'US uomo', ko: '미국 남성', ru: 'US мужские', hi: 'US पुरुष', tr: 'ABD erkek' }, symbol: 'US M',  toBase: 0 },
      { id: 'us_w',  name: { en: 'US Women', zh: '美码（女）', es: 'EE.UU. mujer', fr: 'US femme', de: 'US Damen', ja: '米国女性', pt: 'EUA feminino', it: 'US donna', ko: '미국 여성', ru: 'US женские', hi: 'US महिला', tr: 'ABD kadın' }, symbol: 'US W',  toBase: 0 },
      { id: 'uk',    name: { en: 'UK', zh: '英码', es: 'UK', fr: 'UK', de: 'UK', ja: 'UK', pt: 'UK', it: 'UK', ko: '영국', ru: 'UK', hi: 'UK', tr: 'UK' }, symbol: 'UK',    toBase: 0 },
      { id: 'eu',    name: { en: 'EU', zh: '欧码', es: 'EU', fr: 'EU', de: 'EU', ja: 'EU', pt: 'EU', it: 'EU', ko: '유럽', ru: 'EU', hi: 'EU', tr: 'EU' }, symbol: 'EU',    toBase: 0 },
      { id: 'jp',    name: { en: 'Japan', zh: '日码', es: 'Japón', fr: 'Japon', de: 'Japan', ja: '日本', pt: 'Japão', it: 'Giappone', ko: '일본', ru: 'Япония', hi: 'जापान', tr: 'Japonya' }, symbol: 'JP',    toBase: 0 },
    ],
    convertFn: (value: number, fromId: string, toId: string): number => {
      let cm: number;
      switch (fromId) {
        case 'cm': cm = value; break;
        case 'us_m': cm = (value + 16) * 0.838 + 1.27; break;
        case 'us_w': cm = (value + 14.5) * 0.838 + 1.27; break;
        case 'uk': cm = (value + 16.5) * 0.838 + 1.27; break;
        case 'eu': cm = (value * 0.667) + 1.27; break;
        case 'jp': cm = value * 0.1; break;
        default: return NaN;
      }
      switch (toId) {
        case 'cm': return cm;
        case 'us_m': return (cm - 1.27) / 0.838 - 16;
        case 'us_w': return (cm - 1.27) / 0.838 - 14.5;
        case 'uk': return (cm - 1.27) / 0.838 - 16.5;
        case 'eu': return (cm - 1.27) / 0.667;
        case 'jp': return cm * 10;
        default: return NaN;
      }
    },
  },
];