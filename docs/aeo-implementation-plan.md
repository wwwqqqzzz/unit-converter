# AEO 实施计划

> 创建日期: 2026-06-30 | 状态: ⬜ 待实施 | 依赖: docs/aeo-analysis-report.md

## 总览

基于 AEO 分析报告，按 ROI 排序的实施计划。每个 Phase 有明确的验收标准。

| Phase | 内容 | 影响范围 | 预计工时 |
|-------|------|---------|---------|
| 13 | Schema 修复 + llms.txt + robots.txt | 全站 48,925 页 | 3-4h |
| 14 | 品牌锚定 + 内容结构优化 | 全站页面模板 | 8-12h |
| 15 | 信任建设 (About/方法/隐私) | 新增 3-4 页 | 4-6h |
| 16 | 差异化内容 (现实类比/行业指南) | 逐步扩展 | 8-16h |

---

## Phase 13: Schema 修复 + AI 爬虫配置

> 目标: 让 AI 引擎正确理解站点结构和身份
> 预期: Perplexity 2-7 天内开始识别结构变更

### 13.1 添加 WebApplication schema 到主站转换页

**文件**: `apps/main/src/pages/[lang]/[category]/[...slug].astro`

**当前** (lines 195-213):
```javascript
const breadcrumbJsonld = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', ... };
const faqJsonld = { '@context': 'https://schema.org', '@type': 'FAQPage', ... };
const howToJsonld = { '@context': 'https://schema.org', '@type': 'HowTo', ... };
jsonld = JSON.stringify([breadcrumbJsonld, faqJsonld, howToJsonld]);
```

**改为**:
```javascript
const webAppJsonld = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  'name': `${fromUnit.localName} to ${toUnit.localName} Converter`,
  'url': canonicalUrl,
  'applicationCategory': 'UtilitiesApplication',
  'operatingSystem': 'All',
  'browserRequirements': 'Requires JavaScript',
  'offers': {
    '@type': 'Offer',
    'price': '0',
    'priceCurrency': 'USD'
  },
  'description': metaDescription
};

jsonld = JSON.stringify([breadcrumbJsonld, faqJsonld, howToJsonld, webAppJsonld]);
```

**验收**: 在任意转换页 URL 加 `?format=json-ld` 或查看源码，应看到 WebApplication schema。

### 13.2 添加 Organization + WebSite schema 到首页

**文件**: `apps/main/src/pages/[lang]/index.astro`

**新增**:
```javascript
const orgJsonld = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://convunit.net/#organization',
  'name': 'ConvUnit',
  'url': 'https://convunit.net',
  'logo': 'https://convunit.net/favicon.svg',
  'sameAs': [] // 后续添加社交账号
};

const websiteJsonld = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://convunit.net/#website',
  'url': 'https://convunit.net',
  'name': 'ConvUnit.net',
  'description': 'Free online unit converter covering 23 categories across 12 languages',
  'publisher': { '@id': 'https://convunit.net/#organization' },
  'potentialAction': {
    '@type': 'SearchAction',
    'target': 'https://convunit.net/en/?q={search_term_string}',
    'query-input': 'required name=search_term_string'
  },
  'inLanguage': ['en', 'zh', 'es', 'fr', 'de', 'ja', 'pt', 'it', 'ko', 'ru', 'hi', 'tr']
};
```

**验收**: 首页源码应包含 Organization + WebSite JSON-LD。

### 13.3 添加 Organization publisher 到 BaseLayout

**文件**: `apps/main/src/layouts/BaseLayout.astro`

在每个页面的 JSON-LD 中注入 `publisher` 引用，指向 Organization @id。这样每个 FAQPage、HowTo、WebApplication 都能关联到同一个实体。

### 13.4 添加 dateModified

**文件**: `apps/main/src/pages/[lang]/[category]/[...slug].astro`

在每个 schema 中添加：
```javascript
'dateModified': new Date().toISOString().split('T')[0],  // 构建日期
'datePublished': '2026-06-22'  // 站点创建日期
```

**验收**: Google Rich Results Test 应显示 dateModified。

### 13.5 创建 llms.txt

**文件**: `apps/main/public/llms.txt`

```markdown
# ConvUnit.net

> ConvUnit.net is a free online unit conversion website with 48,925 pages across 12 languages. Covers length, weight, temperature, volume, area, speed, time, pressure, energy, power, fuel efficiency, frequency, angle, force, torque, and shoe size conversions, plus 6 interactive calculators (number base, timestamp, percentage, BMI, age, currency). All conversions use precise formulas with no signup required.

## Key Pages

- [Length Conversions](https://convunit.net/en/length/): Meters, feet, inches, cm, km, miles, yards, mm
- [Weight Conversions](https://convunit.net/en/weight/): kg, lbs, oz, grams, tonnes
- [Temperature Conversions](https://convunit.net/en/temperature/): Celsius, Fahrenheit, Kelvin
- [Volume Conversions](https://convunit.net/en/volume/): liters, gallons, ml, cups, pints
- [Area Conversions](https://convunit.net/en/area/): sq ft, sq m, acres, hectares
- [Speed Conversions](https://convunit.net/en/speed/): km/h, mph, m/s, knots
- [Currency Converter](https://convunit.net/en/currency/): 30 currencies, real-time rates
- [BMI Calculator](https://bmi.convunit.net/en/bmi/): Free BMI calculator with health categories
- [Age Calculator](https://age.convunit.net/en/age/): Calculate exact age in years, months, days

## Languages

English, 中文, Español, Français, Deutsch, 日本語, Português, Italiano, 한국어, Русский, हिन्दी, Türkçe

## About

- All conversions use precise mathematical formulas
- Currency rates sourced from European Central Bank via Frankfurter API
- No signup, no ads blocking content, works on all devices
- Built with Astro on Cloudflare Workers for fast global access
```

### 13.6 更新 robots.txt

**文件**: `apps/main/src/pages/robots.txt.ts` (或 `public/robots.txt`)

```typescript
// 明确允许 AI 爬虫
const robotsTxt = `User-agent: *
Allow: /

# AI Crawlers - Explicitly allowed
User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Applebot
Allow: /

User-agent: Bytespider
Allow: /

User-agent: CCBot
Allow: /

Sitemap: https://convunit.net/sitemap.xml
`;
```

**验收**: `curl https://convunit.net/robots.txt` 应返回包含 AI 爬虫允许的配置。

### Phase 13 验收标准

- [ ] 所有转换页包含 WebApplication + FAQPage + HowTo + BreadcrumbList schema
- [ ] 首页包含 Organization + WebSite schema
- [ ] BaseLayout 包含 Organization publisher 引用
- [ ] llms.txt 可在 `/llms.txt` 访问
- [ ] robots.txt 包含 AI 爬虫明确允许规则
- [ ] 所有 schema 通过 Google Rich Results Test

---

## Phase 14: 品牌锚定 + 内容结构优化

> 目标: 让 AI 引用内容时被迫包含品牌名
> 预期: 2-4 周后 Google AIO 可能开始引用

### 14.1 品牌锚定答案胶囊

**文件**: `apps/main/src/pages/[lang]/[category]/[...slug].astro`

在每个转换页的 H1 标题下方，添加一个可见的"答案胶囊"段落：

```html
<p class="direct-answer" data-slot="answer-capsule">
  According to ConvUnit.net, {value} {fromUnit} equals {result} {toUnit}. 
  The conversion formula is {value} {fromUnit} × {factor} = {result} {toUnit}.
</p>
```

**关键**: 每个可提取的文本必须包含 "ConvUnit.net" 或 "ConvUnit"。这样 AI 提取时无法避开品牌名。

### 14.2 将 `<details>` 内容改为可见

**文件**: `apps/main/src/components/UnitDescription.astro`

当前：所有单位描述隐藏在 `<details>` 折叠区。

**改为**: 第一段可见（直接展示），其余内容可折叠：

```html
<div class="unit-description">
  <p class="unit-desc-primary">{primaryDescription}</p>
  <details class="unit-desc-extra">
    <summary>{t('moreAbout', lang)} {unitName}</summary>
    <p>{secondaryDescription}</p>
  </details>
</div>
```

### 14.3 FAQ 从 `<details>` 改为可见

**文件**: `apps/main/src/pages/[lang]/[category]/[...slug].astro`

当前：FAQ 问答藏在 `<details>` 折叠区。

**改为**: FAQ 以可见的 H2 + Q&A 格式展示（至少前 3 个可见，其余可折叠）。

### 14.4 H2 标题改为问题格式

**当前**: `<h2>Centimeters to Inches Conversion</h2>`

**改为**: `<h2>How many inches is 1 centimeter?</h2>` 或 `<h2>Centimeters to Inches: How to Convert</h2>`

问题格式的 H2 更容易被 AI 引用，因为它们直接匹配用户的搜索查询。

### 14.5 添加现实世界类比

**文件**: `packages/converter-core/src/data/descriptions.ts`

为每个单位的首段描述添加现实世界类比。示例：

- 1米 ≈ 门把手的高度
- 1英寸 ≈ 大拇指的宽度
- 1公斤 ≈ 一升水的重量
- 1英里 ≈ 15分钟步行距离

这些类比是 AI 引用率最高的内容类型。

### Phase 14 验收标准

- [ ] 每个转换页包含品牌锚定答案胶囊（含 ConvUnit.net）
- [ ] 单位描述首段可见（不再全部折叠）
- [ ] FAQ 前 3 个可见
- [ ] H2 标题使用问题格式
- [ ] 描述包含至少 1 个现实世界类比

---

## Phase 15: 信任建设

> 目标: 让 AI 引擎认为这是可信来源
> 预期: 提升被引用概率

### 15.1 创建 About 页面

**路径**: `/[lang]/about/`

内容：
- ConvUnit.net 是什么（使命声明）
- 我们如何确保准确性（方法论）
- 数据来源（NIST、BIPM、ISO 标准）
- 团队/作者信息
- 联系方式

Schema: Organization + Person

### 15.2 创建方法/来源页面

**路径**: `/[lang]/methodology/`

内容：
- 换算公式来源说明
- 精度声明
- 货币汇率来源（Frankfurter API / 欧洲央行）
- 更新频率
- 错误报告方式

### 15.3 创建隐私政策页面

**路径**: `/[lang]/privacy/`

标准隐私政策模板 + 数据处理说明。

### 15.4 添加 Person schema

在 About 页面添加作者 Person schema：

```json
{
  "@type": "Person",
  "name": "Author Name",
  "url": "https://convunit.net/en/about/",
  "sameAs": ["https://github.com/wwwqqqzzz"]
}
```

### 15.5 Footer 更新

在每个页面的 footer 添加：
- About 链接
- 方法论链接
- 隐私政策链接
- 联系方式
- "最后更新"年份

### Phase 15 验收标准

- [ ] `/en/about/` 返回 200
- [ ] `/en/methodology/` 返回 200
- [ ] `/en/privacy/` 返回 200
- [ ] About 页包含 Organization + Person schema
- [ ] Footer 包含 About/方法论/隐私链接
- [ ] 方法论页面包含数据来源说明

---

## Phase 16: 差异化内容

> 目标: 创造 AI 不得不引用的独特内容
> 预期: 1-3 月后开始出现在 AI 回答中

### 16.1 行业专项换算指南

为每个大类创建深度内容页：

| 类别 | 指南主题 |
|------|---------|
| 温度 | 烘焙温度换算终极指南（°F ↔ °C） |
| 长度 | 工程师常用换算速查表 |
| 重量 | 国际快递重量限制换算指南 |
| 面积 | 房产面积换算：平方米 ↔ 平方英尺 |
| 体积 | 烹饪量杯换算表 |

这些内容的价值在于**不可替代性**——AI 不能从通用换算公式推导出来。

### 16.2 比较性内容

| 内容 | 示例标题 |
|------|---------|
| 公制 vs 英制 | "公制 vs 英制：为什么世界不统一？" |
| 单位历史 | "米的定义：从地球子午线到光速" |
| 常见错误 | "5 个最常见的单位换算错误" |

### 16.3 视觉对比工具（长期）

- 温度标尺可视化（°C 和 °F 并排）
- 双尺对比（cm 和 inches 并排）
- 点阵可视化（1平方米 vs 1平方英尺）

这些是 Qvert 已经在做的事情，但我们可以做得更好。

---

## 实施顺序总览

```
Phase 13 (3-4h) → Phase 14 (8-12h) → Phase 15 (4-6h) → Phase 16 (8-16h)
     ↓                   ↓                    ↓                   ↓
  Schema修复          品牌锚定            信任建设            差异化内容
  llms.txt           内容重构            About/方法           行业指南
  robots.txt          可见化             隐私政策             比较内容
                     │                   │                   │
                     ↓                   ↓                   ↓
              Perplexity 2-7天     Google AIO 2-4周     AI引用 1-3月
              开始识别            可能开始引用          全面效果
```

## 度量标准

| 指标 | 当前 | 30天目标 | 90天目标 |
|------|------|---------|---------|
| JSON-LD schema 类型数 | 3 (FAQ, HowTo, Breadcrumb) | 6+ | 6+ |
| Organization schema | 0 | 1 | 1 |
| 品牌锚定页 | 0 | 48,925 | 48,925 |
| llms.txt | 无 | ✅ | ✅ |
| About 页 | 无 | ✅ | ✅ |
| Perplexity 引用 | 0 | 1+ | 5+ |
| Google AIO 引用 | 0 | 0 | 1+ |
| GSC 索引页数 | 0 | 1,000+ | 10,000+ |
| 日真人访问 | ~50-100 | 200+ | 500+ |