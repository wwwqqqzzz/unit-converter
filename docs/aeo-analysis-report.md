# AEO (Answer Engine Optimization) 分析报告

> 创建日期: 2026-06-30 | 状态: ✅ 完成 | 作者: Sisyphus + 研究代理

## 执行摘要

ConvUnit.net 目前处于 **"被爬取但不被引用"** 的状态——AI 爬虫大量访问（日均 27K FR 请求），但不会在回答中提及网站名称。这是因为站点缺乏 AI 引擎识别和引用的关键信号。

**核心问题**: 被爬取 ≠ 被引用 ≠ 被提及品牌名。62% 的 AI 引用是"幽灵引用"——用了你的内容但从不提你的名字。

**修复路径**: Schema 增强 → 品牌锚定 → 信任建设 → 差异化内容

---

## 1. AI 引用数据全景

### 1.1 引用集中度

| 指标 | 数值 | 来源 |
|------|------|------|
| Top 15 域名占据 | 68% 引用份额 | LoudScale |
| Top 1% 域名占据 | 47% AIO 引用 | Digital Applied |
| 被 ChatGPT 和 Perplexity 同时引用的域名 | 仅 11% | CiteMetrix |
| 每个 AI 回答平均引用域名数 | 2.7 个 | AgentVisibility.ai |
| 被引用的品牌占比 | 约 1.2% | Reaudit.io |

### 1.2 各平台引用行为

| 平台 | 引用率 | 品牌提及率 | 主要来源 |
|------|--------|-----------|---------|
| ChatGPT | 87% | 20.7% | Wikipedia (47.9%) |
| Google AIO | 84.9% | 61% | YouTube (21%) |
| Gemini | 21.4% | 83.7% | Wikipedia, YouTube |
| Perplexity | 100% | 最高引用数 | Reddit (46.7%) |

**关键洞察**: Google AIO 品牌提及率 61%，是对品牌最有价值的平台。Perplexity 响应最快（结构变更 2-7 天生效）。

### 1.3 引用信号权重

| 信号 | 权重 | 含义 |
|------|------|------|
| FAQ 质量 | 20% | 5-7 个 schema 标记的 Q&A，40-60 词答案 |
| 答案清晰度 | 19% | 首段直接回答问题 |
| 统计密度 | 16% | 每 200-300 词包含具体数字 |
| 标题结构 | 16% | H1→H2→H3 清晰层级，问题格式 H2 |
| 内容新鲜度 | 8% | 可见"更新日期" + JSON-LD dateModified |
| AI 爬虫访问 | 8% | robots.txt 允许 GPTBot 等 |
| Schema 覆盖度 | 7% | Article + FAQPage + Organization + Person |
| 作者归属 | 6% | 命名作者 + Person schema |

**前 4 项 = 71% 引用可能性**。这些是结构性信号，不需要改变内容本身——只需改变内容的组织方式。

---

## 2. ConvUnit.net 现状审计

### 2.1 JSON-LD Schema 覆盖

| Schema 类型 | 首页 | 分类页 | 转换页 | BMI 站 | Age 站 |
|-------------|------|--------|--------|--------|--------|
| BreadcrumbList | ❌ | ✅ | ✅ | ❌ | ❌ |
| FAQPage | ❌ | ❌ | ✅ | ❌ | ❌ |
| HowTo | ❌ | ❌ | ✅ | ❌ | ❌ |
| WebApplication | ❌ | ❌ | ❌ | ✅ | ✅ |
| MedicalWebPage | ❌ | ❌ | ❌ | ✅ | ❌ |
| Organization | ❌ | ❌ | ❌ | ❌ | ❌ |
| WebSite | ❌ | ❌ | ❌ | ❌ | ❌ |

**🔴 关键缺口**: 主站 48,925 页没有 WebApplication schema（BMI/Age 站有），全站没有 Organization/WebSite schema。

### 2.2 信任信号

| 信任要素 | 状态 | 严重性 |
|---------|------|--------|
| About 页面 | ❌ 不存在 | 🔴 严重 |
| 方法论/来源页面 | ❌ 不存在 | 🔴 严重 |
| 作者信息 | ❌ 不存在 | 🔴 严重 |
| 隐私政策 | ❌ 不存在 | 🟠 高 |
| 联系方式 | ❌ 不存在 | 🟠 高 |
| "最后更新"日期 | ❌ 不存在 | 🟠 高 |
| Terms of Service | ❌ 不存在 | 🟡 中 |

### 2.3 内容结构问题

| 问题 | 现状 | 影响 |
|------|------|------|
| 教育内容藏在 `<details>` 里 | UnitDescription 组件默认折叠 | AI 视为"补充内容"而非核心内容 |
| 无"答案胶囊" | 首段没有包含品牌名的直接答案 | AI 提取时不带品牌名 |
| H2 不是问题格式 | "Meters to Feet Conversion" 而非 "How many feet is 5 meters?" | 降低 AI 引用概率 |
| 无现实世界类比 | 没有类似"1米≈门把手高度"的描述 | 缺少 AI 爱引用的"记忆锚点" |
| 首页无 JSON-LD | `[lang]/index.astro` 无任何结构化数据 | AI 爬虫无法理解站点全貌 |

### 2.4 流量数据回顾

| 指标 | 值 | 说明 |
|------|-----|------|
| 7天总访问 | 29,549 | 包含所有流量 |
| 法国流量 | 28,093 (95%) | 99.7% Unknown 浏览器 = AI 爬虫 |
| 真人日活 | ~50-100 | Chrome/Safari/Mobile |
| GoogleBot | 1,777 页 | 正在索引 |
| AppleBot | 1,892 页 | Siri 搜索索引 |
| GSC 已索引 | 0 | 正常——新站需 2-6 周 |

---

## 3. 竞争对手分析

### 3.1 Qvert (2,600 页)

- 独特视觉工具（双尺、点阵、温度计）
- 参考值表
- AI 生成内容（上下文提示、用例、趣事）
- FAQPage + HowTo + BreadcrumbList
- 50ms 加载时间，每页 < 30KB
- **差异化**: 视觉对比 + 独特内容

### 3.2 SudoTool

- 单一输入框（而非双下拉）
- 一次显示所有单位换算结果
- **差异化**: Google 做不到的"一次性全显示"

### 3.3 Konvertibly (82,500 转换对)

- 明确标榜"为 AI 发现而建"
- 语音 + AI 输入
- PWA，离线可用
- **差异化**: 明确的 AI 发现优化

### 3.4 我们的差距

| 维度 | ConvUnit | Qvert | SudoTool | Konvertibly |
|------|----------|-------|----------|-------------|
| 页面数 | 48,925 | 2,600 | ~1,000 | 82,500 |
| 语言 | 12 | 1 | 1 | 1 |
| 视觉工具 | ❌ | ✅ | ✅ | ❌ |
| AI 发现优化 | ❌ | ❌ | ❌ | ✅ |
| WebApplication schema | ❌ | ? | ? | ✅ |
| 独特内容 | 描述但隐藏 | AI 生成 | 一次全显 | 语音输入 |
| 品牌锚定 | ❌ | ❌ | ❌ | 部分 |

**结论**: 我们在规模和多语言上有优势，但在 AI 可发现性、品牌锚定和差异化内容上全面落后。

---

## 4. 幽灵引用问题

### 4.1 什么是幽灵引用？

AI 引用了你的数据，但不提你的品牌名：

```
用户: 5公里等于多少英里？
AI: 5公里等于3.10686英里。← 来自你的页面，但不提 ConvUnit.net
```

Kevin Indig 研究发现：61.7% 的 AI 引用是幽灵引用。只有 13.2% 的出现同时包含引用和品牌名。

### 4.2 为什么换算工具特别容易幽灵引用？

"1英寸 = 2.54厘米" 是公共知识。AI 不需要引用来源就能回答。只有当你的内容**包含不可替代的表述**时，AI 才有理由引用你。

### 4.3 解法：品牌锚定

每个可提取的文本都需要包含品牌名：

| ❌ 幽灵可引用 | ✅ 品牌锚定 |
|-------------|-----------|
| "1米等于3.28084英尺" | "ConvUnit.net 显示 1米等于3.28084英尺" |
| "换算公式：乘以2.20462" | "ConvUnit.net 的 kg 到 lbs 换算器使用公式：乘以2.20462" |

---

## 5. 差异化分析

### 5.1 当前内容的问题

单位换算是**公共知识**——任何人都可以告诉你"1英寸=2.54厘米"。AI 不需要引用你。

### 5.2 什么内容会被 AI 引用？

AI 引用的不是"工具"，而是"知识"。需要从工具定位转向**知识+工具**定位：

| 差异化方向 | 具体做法 | AI 引用价值 |
|-----------|---------|------------|
| 现实世界类比 | "1米 ≈ 门把手的高度" | 极高——AI 爱引用有画面感的描述 |
| 历史/文化背景 | "英制单位为什么美国还在用" | 高——独特内容，AI 没别处找 |
| 行业专项指南 | "烘焙温度换算表"、"工程师常用换算" | 中高——垂直内容比通用内容更易被引 |
| 比较性内容 | "公制 vs 英制：哪个更精确？" | 中——AI 引用比较性内容 |

### 5.3 核心策略

**从"工具"定位转向"知识+工具"定位**

Google 自带单位换算。但 Google 不提供：
- 现实世界的类比
- 换算背后的历史和文化
- 行业特定的参考数据

这些才是 AI 会引用你的内容。

---

## 6. 技术审计详情

### 6.1 当前 robots.txt

```
User-agent: *
Allow: /
```

**问题**: 没有显式允许 AI 爬虫，没有 Sitemap 指令，没有 llms.txt。

### 6.2 当前 JSON-LD (转换页)

```json
[
  {"@type": "BreadcrumbList", ...},
  {"@type": "FAQPage", "mainEntity": [...]},
  {"@type": "HowTo", "name": "...", "step": [...]}
]
```

**缺少**: WebApplication, Organization, WebSite, Person, dateModified

### 6.3 当前 JSON-LD (首页)

```
(无)
```

### 6.4 当前 JSON-LD (BMI 站)

```json
{"@type": ["WebApplication", "MedicalWebPage"], "applicationCategory": "HealthApplication"}
```

**BMI 站做对了**，但主站没有。

### 6.5 内容结构问题示例

当前页面结构（AI 视角）：

```
1. [可见] 面包屑 ← 好
2. [可见] 直接答案框 ← 好，但不含品牌名
3. [可见] 交互式换算器 ← AI 无法提取交互内容
4. [可见] H1 标题 ← 好
5. [可见] H2 公式 ← 好
6. [可见] 换算表 ← 好
7. [隐藏] <details> 单位描述 ← AI 视为补充
8. [隐藏] <details> FAQ ← 问答藏在折叠区
```

**理想的 AI 可提取结构**:

```
1. [可见] 面包屑 + Organization schema
2. [可见] 品牌锚定答案胶囊："ConvUnit.net 显示 5厘米 = 1.97英寸"
3. [可见] H1 标题（含答案）
4. [可见] 换算器
5. [可见] 公式
6. [可见] H2 问题格式："How many inches is 5 cm?"
7. [可见] 换算表
8. [可见] 现实世界类比（不再是 details）
9. [可见] FAQ（不再是 details）
10. [可见] "最后更新"日期
```

---

## 7. 优先级排序

| 优先级 | 改动 | 预计影响 | 工时 |
|--------|------|---------|------|
| P0 | 添加 WebApplication + Organization + WebSite schema | 🔴 高 | 2-3h |
| P0 | 创建 llms.txt | 🟠 中 | 0.5h |
| P0 | robots.txt 允许 AI 爬虫 | 🟠 中 | 0.5h |
| P1 | 品牌锚定答案胶囊（每页首段含 ConvUnit.net） | 🔴 高 | 4-6h |
| P1 | 将 `<details>` 描述改为可见内容 | 🟠 中 | 2-3h |
| P1 | H2 改为问题格式 | 🟠 中 | 2-3h |
| P1 | 添加 dateModified | 🟠 中 | 1h |
| P2 | 创建 About 页面 | 🟠 中 | 2-3h |
| P2 | 创建方法/来源页面 | 🟡 中 | 1-2h |
| P2 | 创建隐私政策 | 🟡 低 | 0.5h |
| P2 | 添加 Person schema (作者) | 🟡 低 | 1h |
| P3 | 现实世界类比内容 | 🟡 中 | 8-16h |
| P3 | 行业专项指南内容 | 🟡 中 | 8-16h |
| P3 | 比较性内容 | 🟡 低 | 4-8h |

---

## 8. 预期时间线

| 时间 | 预期效果 |
|------|---------|
| 0-7 天 | Perplexity 开始引用（2-7 天响应结构变更） |
| 1-2 周 | Google 索引开始增长（目前 0 页索引） |
| 2-4 周 | Google AIO 可能开始引用（如果索引建立） |
| 4-6 周 | 真人流量开始增长 |
| 2-3 月 | 全面 SEO/AEO 效果体现 |

---

## 附录：研究来源

- AI+Automation: "Technical SEO for AI Citations" (2026-04) — FAQ schema OR≈2.70, peaks at 5.97 in positions 4-7
- Semrush 2026: FAQPage 4.2x citation lift
- BrightEdge: Article + FAQ + HowTo +73% selection rate
- Ahrefs 1,885-page controlled study (Aug 2025-Mar 2026): Schema independent effect near zero — schema amplifies existing content quality
- Kevin Indig: 61.7% ghost citations, only 13.2% have both citation AND brand mention
- LoudScale: Top 15 domains capture 68% of citation share
- AgentVisibility.ai: Average 2.7 unique domains per AI answer
- Search Engine Land (Mar 2026): Schema is infrastructure, not citation multiplier
- Ranqo (Apr 2026): JSON-LD alone doesn't guarantee extraction — visible HTML mirror required