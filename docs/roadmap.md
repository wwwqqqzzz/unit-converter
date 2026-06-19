# Unit Converter pSEO — 完整实施路线图

> 创建日期: 2026-06-19 | 更新: 2026-06-19 | 目标: 万页级 pSEO 转换工具矩阵，睡后收入

## ✅ 完成状态

| Phase | 状态 |
|-------|------|
| **0** | ✅ 已完成 — 架构重构（通用路由、Converter组件、convertFn、测试） |
| **1** | ✅ 已完成 — Weight/Temperature/Data 分类已添加 |

## 总览

| Phase | 内容 | 工时 | 页面数 | 状态 |
|-------|------|------|--------|------|
| **0** | 架构重构 | 4-6h | ~620 | ✅ Done |
| **1** | P0: Weight/Temperature/Data | 8h | ~2,304 | ✅ Done |
| **2** | P1: Area/Volume | 3h | ~4,306 | ⬜ |
| **3** | P2: Speed/Time/Pressure/Energy | 4.5h | ~6,330 | ⬜ |
| **4** | SEO优化+内容充实 | 34h | ~6,330 | ⬜ |
| **5** | AdSense优化 | 4.5h | ~6,330 | ⬜ |
| **6** | 多站群架构 | 20h | 多站点 | ⬜ |
| **7** | 部署+监控 | 4h | — | ⬜ |

**剩余工时**: ~42-46h | **当前页面数**: ~2,304 | **目标**: 6,330+ → 万页(加语言/站点)

---

## 关键阻塞：架构有3个硬编码问题

### 阻塞 1: 路由硬编码 `length`

```
src/pages/[lang]/length/[...slug].astro  ← 目录名硬编码 "length"
第60行: const catId = 'length';           ← 代码也硬编码
```

**修复**: 移到 `src/pages/[lang]/[category]/[...slug].astro`，用动态参数

### 阻塞 2: Converter 客户端 JS 硬编码 8 个 rate

```javascript
// Converter.astro 第96-105行
const rates: Record<string, number> = {
  'mm': 0.001, 'cm': 0.01, 'm': 1, 'km': 1000,
  'inch': 0.0254, 'foot': 0.3048, 'yard': 0.9144, 'mile': 1609.344,
};
```

**修复**: 通过 `data-rates` 属性从服务端传入所有单位的转换系数

### 阻塞 3: Converter 下拉只有 2 个选项

当前 `<select>` 只显示当前 pair 的 2 个单位，不支持切换到同分类其他单位。

**修复**: 通过 `data-all-units` 传入分类所有单位，客户端动态填充下拉

---

## Phase 0: 架构重构（必须先做）

重构后，**加新分类只需编辑 `src/data/units.ts` 一个文件**。

### 0.1 通用化动态路由

**删**: `src/pages/[lang]/length/[...slug].astro`
**删**: `src/pages/[lang]/length/index.astro`
**建**: `src/pages/[lang]/[category]/[...slug].astro`
**建**: `src/pages/[lang]/[category]/index.astro`

关键改动:
- `getStaticPaths()` 遍历 `categories × LANGUAGES × pairs × COMMON_VALUES`
- 移除 `catId = 'length'` 硬编码 → 使用 `Astro.params.category`
- `parseSlug()` 已经是通用的（通过查表找单位）

### 0.2 通用化 Converter 组件

**文件**: `src/components/Converter.astro`

用 `data-*` 属性传递数据替代硬编码:

```astro
<div class="converter-card" id="converter-root"
  data-rates={JSON.stringify(Object.fromEntries(category.units.map(u => [u.id, u.toBase])))}
  data-all-units={JSON.stringify(category.units.map(u => ({
    id: u.id, name: u.name[lang], symbol: u.symbol
  })))}
  data-category-type={category.id}
  data-custom-convert={category.convertFn ? 'true' : 'false'}
>
```

客户端脚本:
- 读取 `JSON.parse(root.dataset.rates)` 替代硬编码 rates
- 读取 `JSON.parse(root.dataset.allUnits)` 动态填充 `<select>`
- 温度类检查 `data-custom-convert` 使用特殊公式

### 0.3 通用化首页分类网格

**文件**: `src/pages/[lang]/index.astro`

新增分类图标映射:

```typescript
export const CATEGORY_ICONS: Record<string, string> = {
  length: '📏', weight: '⚖️', temperature: '🌡️', data: '💾',
  area: '📐', volume: '🧪', speed: '🏎️', time: '⏱️',
  pressure: '🔧', energy: '⚡',
};
```

### 0.4 添加 `convertFn` 支持（温度非线性转换）

```typescript
// Category 接口新增可选字段
export interface Category {
  id: string;
  name: Record<string, string>;
  baseUnitId: string;
  units: Unit[];
  /** 非线性转换函数（温度等） */
  convertFn?: (value: number, fromId: string, toId: string) => number;
}
```

`lib/units.ts` 的 `convert()` 函数:

```typescript
export function convert(category: Category, value: number, fromId: string, toId: string): number {
  if (category.convertFn) return category.convertFn(value, fromId, toId);
  // 线性转换（默认）
  const from = getUnit(category, fromId);
  const to = getUnit(category, toId);
  if (!from || !to) return NaN;
  return (value * from.toBase) / to.toBase;
}
```

### 0.5 添加测试

安装 vitest: `npm install -D vitest`

测试文件:
- `src/lib/__tests__/convert.test.ts` — 转换逻辑
- `src/lib/__tests__/format.test.ts` — 格式化
- `src/lib/__tests__/slug.test.ts` — URL slug 生成

关键测试用例:
- `convert(length, 1, 'km', 'm') === 1000`
- `convert(length, 1, 'm', 'm') === 1` (同单位)
- `convert(length, 1, 'inch', 'cm') ≈ 2.54` (精度)
- `convert(length, 1, 'x', 'm')` 返回 NaN (无效)
- `formatResult(0) === '0'`
- `formatResult(Infinity) === '—'`
- `pairSlug(en/zh)` 格式正确
- `getUnitPairs()` 返回 n*(n-1)/2 对

### Phase 0 成功标准

- [ ] `npm run build` 产出同样 ~620 页
- [ ] 所有测试通过
- [ ] **加新分类只需改 `units.ts`**
- [ ] Converter 下拉显示分类所有单位

### Phase 0 原子提交

1. `test: add vitest and conversion test suite`
2. `refactor: generalize dynamic route from length/ to [category]/`
3. `refactor: generalize category overview page`
4. `refactor: Converter component — dynamic rates and unit dropdowns`
5. `feat: add category icon map and update homepage`
6. `feat: add convertFn to Category for non-linear conversions`

---

## Phase 1: P0 分类 — Weight, Temperature, Data

### 1.1 Weight 重量（toBase = grams）

| id | en | zh | symbol | toBase |
|----|----|----|--------|--------|
| mg | Milligrams | 毫克 | mg | 0.001 |
| g | Grams | 克 | g | 1 |
| kg | Kilograms | 千克 | kg | 1000 |
| tonne | Metric Tons | 公吨 | t | 1000000 |
| oz | Ounces | 盎司 | oz | 28.3495 |
| lb | Pounds | 磅 | lb | 453.592 |
| st | Stones | 英石 | st | 6350.29 |
| jin | 斤 | 斤 | 斤 | 500 |

8 units → 28 pairs × 11 × 2 langs = **616 pages**

### 1.2 Temperature 温度（非线性！）

| id | en | zh | symbol |
|----|----|----|--------|
| c | Celsius | 摄氏度 | °C |
| f | Fahrenheit | 华氏度 | °F |
| k | Kelvin | 开尔文 | K |

转换公式（通过 `convertFn`）:
```
°C → °F: celsius * 9/5 + 32
°C → K: celsius + 273.15
°F → °C: (fahrenheit - 32) * 5/9
K → °C: kelvin - 273.15
```

测试用例:
- `0°C = 32°F`
- `100°C = 212°F`
- `0°C = 273.15K`
- `-40°C = -40°F` (交叉点)
- `32°F = 0°C` (反向)

3 units → 3 pairs × 11 × 2 = **66 pages**

### 1.3 Data 数据存储（toBase = bytes, 1024进制）

| id | en | zh | symbol | toBase (bytes) |
|----|----|----|--------|--------|
| b | Bytes | 字节 | B | 1 |
| kb | Kilobytes | 千字节 | KB | 1024 |
| mb | Megabytes | 兆字节 | MB | 1048576 |
| gb | Gigabytes | 千兆字节 | GB | 1073741824 |
| tb | Terabytes | 太字节 | TB | 1099511627776 |
| pb | Petabytes | 拍字节 | PB | 1125899906842624 |
| bit | Bits | 比特 | bit | 0.125 |
| kbit | Kilobits | 千比特 | Kbit | 128 |
| mbit | Megabits | 兆比特 | Mbit | 131072 |
| gbit | Gigabits | 千兆比特 | Gbit | 134217728 |

10 units → 45 pairs × 11 × 2 = **990 pages**

### Phase 1 页面统计

| Category | Units | Pairs | Pages |
|----------|-------|-------|-------|
| Length | 8 | 28 | 616 |
| Weight | 8 | 28 | 616 |
| Temperature | 3 | 3 | 66 |
| Data | 10 | 45 | 990 |
| **Total** | **29** | **104** | **~2,304** |

### Phase 1 原子提交

1. `feat: add convertFn to Category for non-linear conversions (temperature)`
2. `test: add temperature conversion tests`
3. `feat: add weight category (8 units, toBase in grams)`
4. `test: add weight conversion tests`
5. `feat: add data/digital storage category (10 units, toBase in bytes)`
6. `test: add data conversion tests`
7. `refactor: Converter component multi-unit dropdown with all category units`
8. `feat: temperature client-side conversion logic in Converter`
9. `feat: update i18n for weight, temperature, data categories`

---

## Phase 2: P1 分类 — Area, Volume

### 2.1 Area 面积（toBase = m²）

| id | en | zh | symbol | toBase |
|----|----|----|--------|--------|
| mm2 | Square Millimeters | 平方毫米 | mm² | 0.000001 |
| cm2 | Square Centimeters | 平方厘米 | cm² | 0.0001 |
| m2 | Square Meters | 平方米 | m² | 1 |
| km2 | Square Kilometers | 平方千米 | km² | 1000000 |
| ha | Hectares | 公顷 | ha | 10000 |
| acre | Acres | 英亩 | ac | 4046.86 |
| ft2 | Square Feet | 平方英尺 | sq ft | 0.092903 |
| in2 | Square Inches | 平方英寸 | sq in | 0.00064516 |
| mu | 亩 | 亩 | 亩 | 666.667 |

9 units → 36 pairs × 11 × 2 = **792 pages**

### 2.2 Volume 体积（toBase = liters）

| id | en | zh | symbol | toBase |
|----|----|----|--------|--------|
| ml | Milliliters | 毫升 | mL | 0.001 |
| l | Liters | 升 | L | 1 |
| m3 | Cubic Meters | 立方米 | m³ | 1000 |
| gal_us | US Gallons | 美制加仑 | gal | 3.78541 |
| gal_uk | UK Gallons | 英制加仑 | gal | 4.54609 |
| qt | US Quarts | 夸脱 | qt | 0.946353 |
| pt | US Pints | 品脱 | pt | 0.473176 |
| cup | US Cups | 杯 | cup | 0.236588 |
| floz | US Fluid Ounces | 液体盎司 | fl oz | 0.0295735 |
| tbsp | Tablespoons | 汤匙 | tbsp | 0.0147868 |
| tsp | Teaspoons | 茶匙 | tsp | 0.00492892 |

11 units → 55 pairs × 11 × 2 = **1,210 pages**

### Phase 2 页面统计

| Running Total | Pairs | Pages |
|--------------|-------|-------|
| Phase 1 | 104 | ~2,304 |
| + Area | 36 | +792 |
| + Volume | 55 | +1,210 |
| **Total** | **195** | **~4,306** |

---

## Phase 3: P2 分类 — Speed, Time, Pressure, Energy

### 3.1 Speed 速度（toBase = m/s）

| id | en | zh | symbol | toBase |
|----|----|----|--------|--------|
| ms | Meters per Second | 米每秒 | m/s | 1 |
| kmh | Kilometers per Hour | 千米每小时 | km/h | 0.277778 |
| mph | Miles per Hour | 英里每小时 | mph | 0.44704 |
| kn | Knots | 节 | kn | 0.514444 |
| fts | Feet per Second | 英尺每秒 | ft/s | 0.3048 |
| mach | Mach | 马赫 | Ma | 343 |

6 units → 15 pairs × 11 × 2 = **330 pages**

### 3.2 Time 时间（toBase = seconds）

| id | en | zh | symbol | toBase |
|----|----|----|--------|--------|
| ms | Milliseconds | 毫秒 | ms | 0.001 |
| s | Seconds | 秒 | s | 1 |
| min | Minutes | 分钟 | min | 60 |
| h | Hours | 小时 | h | 3600 |
| d | Days | 天 | d | 86400 |
| wk | Weeks | 周 | wk | 604800 |
| mo | Months (avg) | 月 | mo | 2629746 |
| yr | Years (365.25 days) | 年 | yr | 31557600 |

8 units → 28 pairs × 11 × 2 = **616 pages**

### 3.3 Pressure 压力（toBase = Pa）

| id | en | zh | symbol | toBase |
|----|----|----|--------|--------|
| pa | Pascals | 帕斯卡 | Pa | 1 |
| kpa | Kilopascals | 千帕 | kPa | 1000 |
| mpa | Megapascals | 兆帕 | MPa | 1000000 |
| bar | Bar | 巴 | bar | 100000 |
| atm | Atmospheres | 标准大气压 | atm | 101325 |
| psi | PSI | 磅力/平方英寸 | psi | 6894.76 |
| mmhg | mmHg | 毫米汞柱 | mmHg | 133.322 |
| torr | Torr | 托 | Torr | 133.322 |

8 units → 28 pairs × 11 × 2 = **616 pages**

### 3.4 Energy 能量（toBase = Joules）

| id | en | zh | symbol | toBase |
|----|----|----|--------|--------|
| j | Joules | 焦耳 | J | 1 |
| kj | Kilojoules | 千焦 | kJ | 1000 |
| cal | Calories | 卡路里 | cal | 4.184 |
| kcal | Kilocalories | 千卡 | kcal | 4184 |
| kwh | Kilowatt-hours | 千瓦时 | kWh | 3600000 |
| btu | BTU | 英热单位 | BTU | 1055.06 |
| wh | Watt-hours | 瓦时 | Wh | 3600 |

7 units → 21 pairs × 11 × 2 = **462 pages**

### Phase 3 页面统计

| Running Total | Pairs | Pages |
|--------------|-------|-------|
| Phase 2 | 195 | ~4,306 |
| + Speed | 15 | +330 |
| + Time | 28 | +616 |
| + Pressure | 28 | +616 |
| + Energy | 21 | +462 |
| **Grand Total** | **287** | **~6,330** |

---

## Phase 4: SEO 优化 + 内容充实

### 4.1 增强标题/描述模板

**当前**: 通用 `%value% %unit1% to %unit2%` 格式

**优化后** (值页面包含答案):

| 页面类型 | EN 标题 | ZH 标题 |
|----------|---------|---------|
| 对页面 | `{unit1} to {unit2} Converter — Free Online Tool` | `{unit1}换算{unit2} — 免费在线换算器` |
| 值页面 | `{value} {unit1} = {result} {unit2} — Convert {unit1} to {unit2}` | `{value}{unit1} = {result}{unit2} — {unit1}换算{unit2}` |

SEO 洞察: 排名最高的转换页面使用"查询镜像"模式，Google 常把答案拉入精选摘要。

### 4.2 "关于 X 单位" 教育内容

新增 `src/data/descriptions.ts`:

```typescript
export interface UnitDescription {
  en: string;  // 2-3 句话, 50-100 词
  zh: string;
}

export const unitDescriptions: Record<string, Record<string, UnitDescription>> = {
  length: {
    cm: {
      en: "The centimeter (cm) is a metric unit of length...",
      zh: "厘米（cm）是公制长度单位...",
    },
  },
};
```

在每对页面添加可折叠 `<details>` 段落，每个 ~100-200 词独特内容。

### 4.3 增强结构化数据

| Schema | 用途 | 位置 |
|--------|------|------|
| `HowTo` | 分步转换公式 | 值页面 |
| `WebApplication` | 标记转换器为交互工具 | 所有页面 |
| `FAQPage` (增强) | 新增 "What is {unit1}?" 问题 | 所有页面 |

### 4.4 内链优化

- **热门转换侧栏**: 每分类 top 5 高搜索量对
- **跨分类链接**: 分类页互相推荐 ("Also try: Weight Converter")
- **面包屑一致性**: 每页 Home > Category > Pair

SEO 研究: pSEO 页面进入 "Discovered — currently not indexed" 的 #1 原因是**孤儿页面** — 只有 sitemap 可达、零内链。每页至少需要 3 个内链指向它。

### 4.5 分类特定常用值

```typescript
export const CATEGORY_VALUES: Record<string, number[]> = {
  length: [0.5, 1, 2, 5, 10, 20, 50, 100, 500, 1000],
  weight: [0.1, 0.5, 1, 5, 10, 25, 50, 100, 500, 1000],
  temperature: [-40, 0, 10, 20, 25, 30, 37, 50, 100, 200],
  data: [1, 2, 5, 10, 50, 100, 256, 500, 1000, 1024],
};
```

"37 celsius to fahrenheit" (体温) 是高搜索量关键词。

---

## Phase 5: AdSense 优化

### 广告位布局

| 位置 | 类型 | 尺寸 | 说明 |
|------|------|------|------|
| 转换器上方 | Display | 响应式 | 最高可视率 |
| 公式下方 | In-feed | 300×250 | 自然断点 |
| 表格下方 | In-article | 响应式 | 值表后 |
| 侧栏(desktop) | Display | 300×600 | 宽屏粘性 |
| 交叉链接下方 | Anchor | 响应式 | 低优先级 |

**原则**: 永远不在标题和转换结果之间放广告。

### 性能保障

- Core Web Vitals: 预留广告位 `min-height` 防止布局偏移
- 使用 `data-ad-format="auto"` 响应式广告
- 下方广告懒加载 (IntersectionObserver)
- `<link rel="preconnect">` 预连接广告域名

---

## Phase 6: 多站群架构

### 目标: 提取 `converter-core` 共享包，快速复制新站

```
converters/
├── packages/
│   └── converter-core/          ← 共享 npm 包
│       ├── src/
│       │   ├── lib/
│       │   │   ├── convert.ts    ← 通用转换逻辑
│       │   │   ├── seo.ts       ← 共享 SEO 助手
│       │   │   ├── i18n.ts      ← 共享 i18n 工具
│       │   │   └── types.ts     ← 共享类型
│       │   └── components/
│       │       ├── Converter.astro
│       │       ├── ConversionTable.astro
│       │       ├── CrossLinks.astro
│       │       ├── AdSense.astro
│       │       └── BaseLayout.astro
│       ├── package.json
│       └── tsconfig.json
├── sites/
│   ├── unit-converter/           ← 当前站点
│   │   ├── src/data/units.ts
│   │   ├── src/i18n/
│   │   └── ...
│   ├── currency-converter/       ← 汇率转换
│   ├── bmi-calculator/          ← BMI 计算器
│   └── percentage-calc/         ← 百分比计算器
├── pnpm-workspace.yaml
└── package.json
```

### 新站估算

| 站点 | 页面估算 | 特点 |
|------|----------|------|
| 汇率转换器 | ~990页 | 每日更新汇率 |
| BMI 计算器 | ~200+页 | 公式型，复用 convertFn |
| 百分比计算器 | ~100+页 | 简单公式 |
| 时区转换器 | ~200+页 | 需要实时数据 |

**5个站点 × 2000+ 页/站 = 万页级别达成**

---

## Phase 7: 部署与监控

### Cloudflare Pages

```bash
# Build command
npm run build

# Output directory
dist

# 环境变量
PUBLIC_ADSENSE_ID=ca-pub-XXXXXXXXX
PUBLIC_SITE_URL=https://unitconvert.example.com
```

### 分析工具

- Google Analytics 4 — 页面浏览 + 转换器交互追踪
- Cloudflare Web Analytics — 隐私友好备选
- Google Search Console — 提交 sitemap, 监控索引状态
- UptimeRobot — 免费监控

### 监控指标

- Core Web Vitals (通过 CrUX)
- 每周 AdSense RPM / CTR
- Search Console 索引覆盖率
- 页面加载时间 < 2s

---

## 推荐执行顺序（按收益最大化）

```
Phase 0  架构重构 (4-6h)
    ↓
Phase 1  P0分类 (8h)  → 立刻部署，2,304 页开始索引
    ↓
Phase 5  AdSense优化 (4.5h)  → 开始赚钱
    ↓
Phase 7  部署+监控 (4h)  → 上线 Cloudflare Pages
    ↓
Phase 2  P1分类 (3h)  → 扩展到 4,306 页
    ↓
Phase 3  P2分类 (4.5h)  → 扩展到 6,330 页
    ↓
Phase 4  SEO+内容 (34h)  → 长期 SEO 价值
    ↓
Phase 6  多站群 (20h)  → 架构复用，新站矩阵
```