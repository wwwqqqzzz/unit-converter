# AEO 优化与项目方向

> 最后更新: 2026-06-30 | 作者: Sisyphus | 目标读者: 任何新接手此项目的人

---

## 一句话结论

**网站被 AI 爬虫大量抓取（日均 27K），但 AI 不引用我们的名字。修复方法：加 Schema、改内容结构、建信任页。SaaS 扩展现在不做，等日活过 10K 再说。**

---

## 当前状况

| 指标 | 值 | 说明 |
|------|-----|------|
| 总页面 | 48,925 | 17 转换器 + 6 计算器，12 语言 |
| 日真人访问 | ~50-100 | 非常少，但站点上线不到 2 周 |
| Google 索引 | 0 页 | 正常——新站需 2-6 周开始索引 |
| AI 爬虫流量 | ~27K/天 | 95% 来自法国，99.7% 是 Unknown 浏览器（AI 爬虫） |
| 日广告收入 | ≈ $0 | GSC 0 索引，真人流量极低 |
| 运营成本 | ~$5/月 | Cloudflare Workers |

---

## 为什么要做 AEO

### 问题：被爬 ≠ 被引用 ≠ 被提及

AI 爬虫抓了我们的页面，但回答用户问题时不会提到 ConvUnit.net。

原因：
1. **没有 WebApplication schema** — BMI/Age 站有，主站 48,925 页没有
2. **没有 Organization schema** — AI 不知道这个站是谁做的
3. **没有 About 页面** — AI 不信任匿名来源
4. **教育内容藏在折叠区** — AI 认为是"补充"不是"核心"
5. **品牌名不在可提取文本中** — AI 引用数据但不提名字（幽灵引用）

### 研究数据

- FAQPage schema 让被引概率提升 **4.2 倍**（Semrush 2026）
- 62% 的 AI 引用是"幽灵引用"——用了数据但不提品牌名（Kevin Indig）
- 前 4 个信号占引用权重的 **71%**：FAQ 质量、答案清晰度、统计密度、标题结构

---

## 实施计划

按 ROI 从高到低排序。每个 Phase 标注了改哪些文件、改什么、怎么验证。

### Phase 13: Schema 修复 + AI 爬虫配置（3-4 小时）

#### 13.1 主站转换页加 WebApplication schema

**文件**: `apps/main/src/pages/[lang]/[category]/[...slug].astro` (约 195-213 行)

**现在**:
```javascript
jsonld = JSON.stringify([breadcrumbJsonld, faqJsonld, howToJsonld]);
```

**改成**:
```javascript
const webAppJsonld = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  'name': `${fromUnit.localName} to ${toUnit.localName} Converter`,
  'url': canonicalUrl,
  'applicationCategory': 'UtilitiesApplication',
  'operatingSystem': 'All',
  'browserRequirements': 'Requires JavaScript',
  'offers': { '@type': 'Offer', 'price': '0', 'priceCurrency': 'USD' },
  'description': metaDescription
};

jsonld = JSON.stringify([breadcrumbJsonld, faqJsonld, howToJsonld, webAppJsonld]);
```

**为什么**: BMI 站已经有 `WebApplication` schema，主站没有。这是 48,925 页最大的 gap。

**验证**: 随便打开一个转换页，查看源码，搜索 `WebApplication`。

#### 13.2 首页加 Organization + WebSite schema

**文件**: `apps/main/src/pages/[lang]/index.astro`

**现在**: 没有传 `jsonld` prop 给 BaseLayout。

**改成**: 在首页逻辑中生成 Organization + WebSite JSON-LD 并传入 BaseLayout。

```javascript
const orgJsonld = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://convunit.net/#organization',
  'name': 'ConvUnit',
  'url': 'https://convunit.net',
  'logo': 'https://convunit.net/favicon.svg'
};

const websiteJsonld = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://convunit.net/#website',
  'url': 'https://convunit.net',
  'name': 'ConvUnit.net',
  'publisher': { '@id': 'https://convunit.net/#organization' },
  'inLanguage': ['en', 'zh', 'es', 'fr', 'de', 'ja', 'pt', 'it', 'ko', 'ru', 'hi', 'tr']
};
```

**验证**: 打开 `convunit.net/en/`，查看源码，搜索 `Organization` 和 `WebSite`。

#### 13.3 每个页面的 schema 加 publisher 引用

**文件**: `apps/main/src/layouts/BaseLayout.astro`

在所有 FAQPage、HowTo、WebApplication 中加 `"publisher": { "@id": "https://convunit.net/#organization" }`。

这样每个页面都和 Organization 实体关联，AI 引擎可以识别"这些页面都是同一个组织做的"。

#### 13.4 创建 llms.txt

**新文件**: `apps/main/public/llms.txt`

```markdown
# ConvUnit.net

> Free online unit converter with 48,925 pages across 12 languages. Length, weight, temperature, volume, area, speed, time, pressure, energy, power, fuel efficiency, frequency, angle, force, torque, shoe size conversions, plus BMI, age, currency, number base, timestamp, percentage calculators. All conversions use precise formulas. No signup required.

## Popular Conversions

- [cm to inches](https://convunit.net/en/length/cm-to-inch/)
- [kg to lbs](https://convunit.net/en/weight/kg-to-lbs/)
- [Celsius to Fahrenheit](https://convunit.net/en/temperature/celsius-to-fahrenheit/)
- [meters to feet](https://convunit.net/en/length/meters-to-feet/)
- [BMI Calculator](https://bmi.convunit.net/en/bmi/)

## Languages

English, 中文, Español, Français, Deutsch, 日本語, Português, Italiano, 한국어, Русский, हिन्दी, Türkçe
```

**验证**: `curl https://convunit.net/llms.txt` 应返回以上内容。

#### 13.5 更新 robots.txt

**文件**: `apps/main/src/pages/robots.txt.ts`

在 `User-agent: * / Allow: /` 之后加：

```
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
```

末尾加 `Sitemap: https://convunit.net/sitemap.xml`。

**验证**: `curl https://convunit.net/robots.txt`。

---

### Phase 14: 品牌锚定 + 内容结构优化（8-12 小时）

#### 14.1 答案胶囊——每个页面首段含品牌名

**文件**: `apps/main/src/pages/[lang]/[category]/[...slug].astro`

在 H1 标题下面加一段可见文字：

```
According to ConvUnit.net, {value} {fromUnit} equals {result} {toUnit}.
```

**为什么**: 如果文本里没有 "ConvUnit.net"，AI 引用数据时不会提你的名字。

#### 14.2 单位描述从折叠改为可见

**文件**: `apps/main/src/components/UnitDescription.astro`

**现在**: 所有描述在 `<details>` 折叠区里。

**改成**: 第一段直接显示，其余可折叠：

```html
<div class="unit-description">
  <p class="unit-desc-primary">{首段描述}</p>
  <details class="unit-desc-extra">
    <summary>More about {unitName}</summary>
    <p>{其余描述}</p>
  </details>
</div>
```

**为什么**: AI 引擎把折叠内容视为"补充"而非"核心"。可见内容被引用的概率更高。

#### 14.3 H2 标题改为问题格式

**文件**: `apps/main/src/pages/[lang]/[category]/[...slug].astro`

**现在**: `<h2>Meters to Feet Conversion</h2>`

**改成**: `<h2>How many feet is 1 meter?</h2>` 或保持原标题加一个副标题问题。

**为什么**: 问题格式的 H2 直接匹配用户搜索词，AI 引用概率更高。

---

### Phase 15: 信任建设（4-6 小时）

创建以下页面：

| 页面 | 路径 | 内容 |
|------|------|------|
| About | `/[lang]/about/` | ConvUnit.net 是什么、谁做的、为什么做 |
| 方法论 | `/[lang]/methodology/` | 换算公式来源、精度声明、数据来源 |
| 隐私政策 | `/[lang]/privacy/` | 标准隐私政策 |

每个页面加 JSON-LD (Organization + Person)。

**为什么**: AI 引擎信任有 About 页和作者信息的来源。没有这些 = 匿名 = 低信任 = 低引用。

---

### Phase 16: 差异化内容（8-16 小时，可逐步做）

这是长期投入，优先级最低。

| 内容类型 | 示例 | AI 引用价值 |
|---------|------|------------|
| 现实世界类比 | "1米 ≈ 门把手的高度" | 极高 |
| 历史/文化背景 | "英制单位为什么美国还在用" | 高 |
| 行业专项指南 | "烘焙温度换算终极指南" | 中高 |
| 比较性内容 | "公制 vs 英制：哪个更精确？" | 中 |

**核心策略**: 从"工具"转向"知识+工具"。Google 自带换算，但不会告诉你"1米大约是门把手的高度"。

---

## SaaS 扩展：不做，现在不做

| 方向 | 结论 | 原因 |
|------|------|------|
| 单位换算 API | ❌ 现在 | 市场小，竞品多，但可作为附带收入 |
| 嵌入式组件 | ❌ 现在 | 应该免费提供换 backlink，不是 SaaS |
| 专业计算器 | ❌ | 偏离核心，竞争激烈 |
| 企业白标 | ❌ 现在 | 需要流量基础才能获客 |
| 教育/数据 | ❌ | 市场太小 |

**触发条件**: 日活 > 10K 时再评估 SaaS 方向。

**核心逻辑**: pSEO 模型的边际成本接近零（48,925 页 = 48,925 入口），SaaS 边际成本高。没有流量做 SaaS 是空中楼阁。

---

## 时间线预期

| 时间 | 里程碑 |
|------|--------|
| Phase 13 完成后 2-7 天 | Perplexity 开始识别结构变更 |
| 2-4 周后 | Google 开始索引，AIO 可能开始引用 |
| 4-6 周后 | 真人流量开始增长 |
| 2-3 月后 | 全面 SEO/AEO 效果体现 |

---

## 详细研究数据

完整的研究数据、竞品分析、Schema 对比见：
- `docs/aeo-analysis-report.md` — 完整分析报告（含研究来源、竞品对比、流量审计）
- `docs/aeo-implementation-plan.md` — 详细实施计划（含验收标准、代码示例）
- `docs/saas-expansion-analysis.md` — SaaS 方向完整评估（6 个方向的详细分析）