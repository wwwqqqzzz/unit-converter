# Phase 2, 3, 4 实施报告

> 日期: 2026-06-19 | 状态: ✅ 全部完成

## 概览

| Phase | 内容 | 页面增长 | 状态 |
|-------|------|----------|------|
| **2** | P1: Area, Volume | 2,288 → 4,306 | ✅ |
| **3** | P2: Speed, Time, Pressure, Energy | 4,306 → 6,330 | ✅ |
| **4** | SEO 优化 + 内容充实 | 6,330 → 6,419 (含首页等) | ✅ |

---

## Phase 2: Area & Volume

### Area / 面积 (toBase = m²)

| id | en | zh | symbol | toBase |
|----|-----|-----|--------|--------|
| sqmm | Square Millimeters | 平方毫米 | mm² | 0.000001 |
| sqcm | Square Centimeters | 平方厘米 | cm² | 0.0001 |
| sqm | Square Meters | 平方米 | m² | 1 |
| sqkm | Square Kilometers | 平方千米 | km² | 1000000 |
| ha | Hectares | 公顷 | ha | 10000 |
| acre | Acres | 英亩 | ac | 4046.8564224 |
| sqft | Square Feet | 平方英尺 | ft² | 0.09290304 |
| sqin | Square Inches | 平方英寸 | in² | 0.00064516 |
| sqmi | Square Miles | 平方英里 | mi² | 2589988.110336 |
| mu | Mu (Chinese) | 亩 | 亩 | 666.667 |

10 单位 → 45 对 × 10 常用值 × 2 语言 = **990 页面**

特色: 包含中式单位 `亩` (mu)，中国搜索量高。

### Volume / 体积 (toBase = liters)

| id | en | zh | symbol | toBase |
|----|-----|-----|--------|--------|
| ml | Milliliters | 毫升 | mL | 0.001 |
| cl | Centiliters | 厘升 | cL | 0.01 |
| dl | Deciliters | 分升 | dL | 0.1 |
| l | Liters | 升 | L | 1 |
| m3 | Cubic Meters | 立方米 | m³ | 1000 |
| gal | US Gallons | 美加仑 | gal | 3.785411784 |
| gal_uk | UK Gallons | 英加仑 | gal | 4.54609 |
| qt | US Quarts | 美夸脱 | qt | 0.946352946 |
| pt | US Pints | 美品脱 | pt | 0.473176473 |
| cup | US Cups | 美杯 | cup | 0.2365882365 |
| floz | US Fluid Ounces | 美液盎司 | fl oz | 0.0295735295625 |
| tbsp | Tablespoons | 汤匙 | tbsp | 0.014786764375 |
| tsp | Teaspoons | 茶匙 | tsp | 0.00492892 |

13 单位 → 78 对 × 9 常用值 × 2 语言 = **1,404 页面**

特色: 最多单位的分类，包含美制和英制加仑，烹饪单位 (tbsp, tsp, cup)。

### 验证

- `npm run build`: 4,306 页面 ✅
- `npx vitest run`: 所有测试通过 ✅
- `npm run dev`: 无错误 ✅

---

## Phase 3: Speed, Time, Pressure, Energy

### Speed / 速度 (toBase = m/s)

| id | en | zh | symbol | toBase |
|----|-----|-----|--------|--------|
| ms | Meters per Second | 米每秒 | m/s | 1 |
| kmh | Kilometers per Hour | 千米每小时 | km/h | 0.277778 |
| mph | Miles per Hour | 英里每小时 | mph | 0.44704 |
| kn | Knots | 节 | kn | 0.514444 |
| fts | Feet per Second | 英尺每秒 | ft/s | 0.3048 |
| mach | Mach | 马赫 | Ma | 343 |

6 单位 → 15 对 × 8 常用值 × 2 语言 = **240 页面**

### Time / 时间 (toBase = seconds)

| id | en | zh | symbol | toBase |
|----|-----|-----|--------|--------|
| ms_time | Milliseconds | 毫秒 | ms | 0.001 |
| s | Seconds | 秒 | s | 1 |
| min | Minutes | 分钟 | min | 60 |
| h | Hours | 小时 | h | 3600 |
| d | Days | 天 | d | 86400 |
| wk | Weeks | 周 | wk | 604800 |
| mo | Months (avg) | 月 | mo | 2629746 |
| yr | Years (365.25 days) | 年 | yr | 31557600 |

8 单位 → 28 对 × 8 常用值 × 2 语言 = **448 页面**

注意: `ms_time` 使用下划线后缀避免与 Speed 的 `ms` (meters per second) ID 冲突。

### Pressure / 压力 (toBase = Pa)

| id | en | zh | symbol | toBase |
|----|-----|-----|--------|--------|
| pa | Pascals | 帕斯卡 | Pa | 1 |
| kpa | Kilopascals | 千帕 | kPa | 1000 |
| mpa | Megapascals | 兆帕 | MPa | 1000000 |
| bar | Bar | 巴 | bar | 100000 |
| atm | Atmospheres | 标准大气压 | atm | 101325 |
| psi | PSI | 磅力每平方英寸 | psi | 6894.76 |
| mmhg | mmHg | 毫米汞柱 | mmHg | 133.322 |
| torr | Torr | 托 | Torr | 133.322 |

8 单位 → 28 对 × 7 常用值 × 2 语言 = **392 页面**

⚠️ 修复: PSI 中文名从 `磅力/平方英寸` 改为 `磅力每平方英寸`，避免 `/` 破坏 URL slug。

### Energy / 能量 (toBase = Joules)

| id | en | zh | symbol | toBase |
|----|-----|-----|--------|--------|
| j | Joules | 焦耳 | J | 1 |
| kj | Kilojoules | 千焦 | kJ | 1000 |
| cal | Calories | 卡路里 | cal | 4.184 |
| kcal | Kilocalories | 千卡 | kcal | 4184 |
| kwh | Kilowatt-hours | 千瓦时 | kWh | 3600000 |
| btu | BTU | 英热单位 | BTU | 1055.06 |
| wh | Watt-hours | 瓦时 | Wh | 3600 |

7 单位 → 21 对 × 7 常用值 × 2 语言 = **294 页面**

### 验证

- `npm run build`: 6,419 页面 ✅
- `npx vitest run`: 74/74 测试通过 ✅
- `npm run dev`: 无错误 ✅

---

## Phase 4: SEO 优化 + 内容充实

### 4.1 增强页面标题

**之前**: 通用格式 `%value% %unit1% to %unit2%`

**之后**:
- 值页面: `{value} {unit1} = {result} {unit2} — Convert {unit1} to {unit2}`
  - 例: `5 cm = 1.97 inches — Convert Centimeters to Inches`
  - 例: `100 千克 = 220.46 磅 — 千克换算磅`
- 对页面: `{unit1} to {unit2} — Free {category} Converter`
  - 例: `cm to inches — Free Length Converter`

SEO 价值: 值页面标题包含答案，匹配 Google 精选摘要。

### 4.2 单位描述数据

新增 `src/data/descriptions.ts`:
- 81 个单位 × 2 语言 = 162 段描述
- 每段 2-3 句，50-150 词
- 包含单位符号、常见用途、历史背景
- SEO 友好: 独特内容，无重复

示例:
```
cm (en): "The centimeter (cm) is a metric unit of length equal to one-hundredth of a meter. It is widely used in everyday measurements, from height to clothing sizes."
cm (zh): "厘米（cm）是公制长度单位，等于一米的百分之一。广泛应用于日常测量，从身高到服装尺码。"
```

### 4.3 UnitDescription 组件

`src/components/UnitDescription.astro`:
- 使用原生 HTML `<details>` 元素
- SEO 优势: Google 可以抓取 `<details>` 内的内容
- 无 JS 依赖: 纯 HTML/CSS 实现
- 每个对页面显示 2 个折叠段落（关于 unit1 和 unit2）
- 样式: 自定义箭头图标，展开/折叠动画

### 4.4 FAQ 结构化数据增强

**之前**: 2 个问题 (How to convert? What is the formula?)

**之后**: 2-4 个问题:
1. How to convert {unit1} to {unit2}? (保留)
2. What is the formula? (保留)
3. What is {unit1}? (新增，来自 descriptions)
4. What is {unit2}? (新增，来自 descriptions)

每个问题都有中英双语。

### 4.5 HowTo 结构化数据

每个值页面添加 HowTo JSON-LD:
- **线性转换** (大部分): 3 步
  1. Take the value in {unit1}
  2. Multiply by {rate}
  3. Result is the value in {unit2}
- **温度转换**: 3 步特殊公式
  - °C→°F: "Multiply by 9/5, then add 32"
  - °F→°C: "Subtract 32, then multiply by 5/9"
  - °C→K: "Add 273.15"

### 4.6 跨分类链接

每个对页面底部新增 "Other Conversion Categories" 区域:
- 显示所有 9 个其他分类的链接卡片
- 每个卡片包含分类图标 + 分类名
- 使用 CATEGORY_ICONS 映射

每页内链数: ~22 个 (1 reverse + 12 same-category + 9 cross-category)

### 4.7 sitemap.xml 修复

**问题**: sitemap 使用全局 `COMMON_VALUES` 而非分类特定 `CATEGORY_VALUES`

**修复**: 使用 `getCommonValues(catId)` 获取每个分类的常用值

效果: 温度页面现在包含 -40°C、37°C 等语义值页面。

### 4.8 分类页增强

`src/pages/[lang]/[category]/index.astro`:
- **BreadcrumbList JSON-LD**: Home > Category
- **Popular Conversions**: 热门值页面链接（如 "1 cm to inches", "5 kg to pounds"）
- **Other Conversion Categories**: 9 个其他分类链接卡片

### 4.9 i18n 新增字符串

`src/i18n/en.json` / `zh.json` 新增:
- `converter.aboutUnit`: "About {unit}" / "关于{unit}"
- `converter.whatIsUnit`: "What is {unit}?" / "什么是{unit}？"
- `converter.otherCategories`: "Other Conversion Categories" / "其他转换分类"
- `category.otherCategories`: 同上
- `category.popularConversions`: "Popular {name} Conversions" / "{name}热门转换"

---

## 多语言问题修复

### PSI 中文名 URL 损坏

**问题**: PSI 中文名 `磅力/平方英寸` 包含 `/`，导致 URL slug 生成错误，48 个中文页面缺失。

**修复**: `磅力/平方英寸` → `磅力每平方英寸`

**验证**: 0 缺失页面，6,419 总页面正常生成。

### Hreflang 重复

**问题**: `hreflangTags()` 生成的 alternate links 和 `langLinks` 重复了 en/zh 的 hreflang。

**修复**: 移除 BaseLayout.astro 中 `langLinks` 的重复 alternate links，现在只有 3 个 hreflang (en, zh, x-default)。

---

## 开源项目评估

### 结论: 借数据不借库

| 方案 | 推荐？ | 理由 |
|------|--------|------|
| 用 `convert` 包数据作参考 | ✅ | MIT, 16类, NIST精确值 |
| 用 `convert` 作运行时依赖 | ❌ | 转换逻辑就是 `value * ratio`，50行自己写 |
| 用 `convert-units` | ⚠️ | 覆盖最广但数据格式复杂, beta版 |
| 用 `js-quantities` | ❌ | 科学计算导向, 数据嵌在解析器里 |

关键事实:
1. 没有库提供中文单位名 — i18n 完全要自己做
2. 没有库提供 SEO 元数据 — 内容层是自己的 IP
3. 当前方案已经够好 — toBase 直观, convertFn 灵活

---

## 完整页面统计

| 分类 | 单位 | 对数 | 常用值 | 语言 | 页面数 |
|------|------|------|--------|------|--------|
| Length | 8 | 28 | 10 | en/zh | 616 |
| Weight | 8 | 28 | 10 | en/zh | 616 |
| Temperature | 3 | 3 | 10 | en/zh | 66 |
| Data | 10 | 45 | 10 | en/zh | 990 |
| Area | 10 | 45 | 10 | en/zh | 990 |
| Volume | 13 | 78 | 9 | en/zh | 1,404 |
| Speed | 6 | 15 | 8 | en/zh | 240 |
| Time | 8 | 28 | 8 | en/zh | 448 |
| Pressure | 8 | 28 | 7 | en/zh | 392 |
| Energy | 7 | 21 | 7 | en/zh | 294 |
| **合计** | **81** | **297** | — | — | **~6,056** |

加上首页(2)、分类首页(18)、sitemap(1)等: **6,419 页面**

---

## 已知限制

1. **Canonical URL 域名**: `unitconvert.example.com` 是占位符，部署时需替换为实际域名
2. **温度客户端 JS 重复**: Converter.astro 中温度转换逻辑与 `convertFn` 有轻微重复
3. **Time 单位 ID**: `ms_time` 用下划线后缀避免与 Speed 的 `ms` 冲突，略显不雅但功能正确
4. **加新语言**: 需要改动 4 处 (i18n json + units name + descriptions + LANGUAGES 数组)