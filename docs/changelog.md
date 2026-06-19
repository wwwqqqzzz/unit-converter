# 实施日志

## 2026-06-20 — Phase 5 + Phase 7 完成：AdSense 集成 + 部署上线 + 域名配置

### Phase 5: AdSense 集成 ✅

**广告位布局**:
- `top`: 首页 + 分类页，加载 auto-ads 脚本 + 信息流广告
- `middle`: 详情页 + 分类页，自动响应式
- `bottom`: 详情页 + 分类页，水平横幅

**条件渲染**:
- 无 `PUBLIC_ADSENSE_ID` → 零输出（无占位符、无布局偏移）
- 有 ID → 渲染 `<ins class="adsbygoogle">` + `adsbygoogle.js` 脚本
- auto-ads 脚本仅 top 位置加载一次（避免重复请求）

**Publisher ID**: `ca-pub-4967918867986181`

**修改文件**: `src/components/AdSense.astro`

### Phase 7: 部署 + 域名 + SEO ✅

**域名**:
- 用户误购 `convertunit.it.com`（子域名陷阱），建议退款
- 最终域名: `convunit.net`（Cloudflare Registrar, ~$10/yr）
- 域名选择标准: 高 SEO (.net 信任度)、短、好记、可用

**Cloudflare Pages 部署**:
- 项目名: `unit-convert`
- 部署方式: `wrangler pages deploy dist`（直接上传）
- 临时 URL: `unit-convert-dd0.pages.dev`
- 自定义域名: `convunit.net` ✅ 绑定成功
- wrangler v4.103.0, OAuth 认证
- Account ID: `a82e169d7b3eb1c5f273e30bbf96ceb4`

**性能优化 (public/_headers)**:
| 路径 | 缓存策略 | 安全头 |
|------|----------|--------|
| `/*.html`, `/*/` | max-age=3600, stale-while-revalidate=86400 | X-Frame-Options: DENY, X-Content-Type-Options: nosniff, X-XSS-Protection, Permissions-Policy, Referrer-Policy |
| `/_astro/*` | max-age=31536000, immutable | — |
| `/sitemap.xml`, `/robots.txt` | max-age=86400 | — |

**性能优化 (public/_redirects)**:
- `/ → /en/` (302)

**性能优化 (BaseLayout.astro)**:
- `<link rel="preconnect">` + `<link rel="preload">` for Google Fonts
- `<meta name="theme-color" content="#ffe033">`
- `<link rel="icon" type="image/svg+xml" href="/favicon.svg">`
- `public/favicon.svg`: Neo-brutalist 黄色 U 字 SVG

**TTFB 性能**:
| 测量 | 首次 | 缓存后 |
|------|------|--------|
| TTFB | ~0.45s | ~0.38s |
| Total | ~0.48s | ~0.40s |

**Google Search Console**:
- 网址前缀资源: `https://convunit.net` ✅ 已验证
- 域名资源: `convunit.net` ✅ 已验证 (DNS TXT)
- Sitemap `sitemap.xml` ✅ 已提交
- 状态: 成功, 8,041 URLs discovered

**GitHub**:
- 仓库: https://github.com/wwwqqqzzz/unit-converter
- 所有代码已推送到 main 分支

**构建命令更新**:
- `PUBLIC_ADSENSE_ID=ca-pub-4967918867986181 npm run build`

### 当前项目状态

- **网站**: https://convunit.net (8,041 页面, 17 分类, 123 单位, 2 语言)
- **GitHub**: https://github.com/wwwqqqzzz/unit-converter
- **部署**: Cloudflare Pages, convunit.net 自定义域名
- **AdSense**: ca-pub-4967918867986181, 3 广告位, 条件渲染
- **SEO**: Google Search Console 已验证, sitemap 已提交 (8,041 URLs)
- **性能**: TTFB ~0.38s (缓存), HTTP/2 + Brotli + H3/QUIC 自动
- **安全**: X-Frame-Options: DENY, X-Content-Type-Options, Permissions-Policy

---

## 2026-06-19 (深夜) — Phase 4.5 ~ 4.7 完成：视觉重设计 + 对比度修复 + 7新类别

### Phase 4.5: Neo-Brutalist 视觉重设计 ✅

**设计语言**:
- 字体: Space Grotesk (几何感、粗犷、有辨识度)
- 边框: 3px 实线黑色 (`--b: 3px solid #000`)
- 阴影: 4px 硬偏移 (`--shadow-hard: 4px 4px 0 #000`)
- 强调色: `#ffe033` 黄色
- 圆角: 0px (零圆角，粗野主义)
- 暗色模式: 白色边框/阴影，黄色不变

**更新文件 (8个)**:
| 文件 | 变更 |
|------|------|
| BaseLayout.astro | 完整CSS变量系统, 暗色模式, sticky header |
| Converter.astro | 黑色hero卡, 硬阴影, 黄色hover |
| index.astro (首页) | 黄色信任徽章, 阴影卡片 |
| [category]/index.astro | 配对卡片阴影+hover, 黄色分类芯片 |
| [...slug].astro (详情页) | 黄色直接答案卡, 公式边框卡 |
| ConversionTable.astro | 边框表格, 黄色hover行 |
| CrossLinks.astro | 阴影反向链接, 黄色分类芯片 |
| UnitDescription.astro | 边框details, 黄色+号切换 |
| AdSense.astro | 虚线边框占位, 大写AD标签 |

**交互效果**:
- hover: `translate(-1px, -1px)` + 阴影增大 → 元素浮起感
- active: `translate(1px, 1px)` + 阴影消失 → 按下感

### Phase 4.6: 对比度修复 ✅

**用户反馈**: "灰色配黑色看不清"

**亮色模式**:
| 变量 | 修复前 | 修复后 | 原因 |
|------|--------|--------|------|
| --c-text-secondary | #333 | #222 | 正文更清晰 |
| --c-text-tertiary | #666 | #555 | WCAG AA 4.5:1 on #f5f5f0 |
| --c-border-light | #ccc | #bbb | 边框更可见 |

**暗色模式（重点修复）**:
| 变量 | 修复前 | 修复后 | 对比度 |
|------|--------|--------|--------|
| --c-text-secondary | #bbb | #d4d4d4 | 3.3:1 → 7.5:1 |
| --c-text-tertiary | #777 | #999 | 3.3:1 → 4.7:1 |
| --c-border-light | #555 | #666 | 不可见 → 可见 |
| --c-surface-hover | #222 | #252525 | 与 #1a1a1a 区分 |
| --c-surface-active | #2a2a2a | #303030 | 与 hover 区分 |
| --c-hero-border | #444 | #666 | hero内可见 |
| --c-hero-surface | #222 | #252525 | 与 #111 区分 |
| --c-hero-input-bg | #222 | #252525 | 一致性 |

**Converter 组件**:
- `opacity: 0.6` 标签 → `color: var(--c-text-secondary)` (不再淡化文字)
- 暗色模式下拉箭头 SVG `#999` → `#ccc`

### Phase 4.7: 7新类别 ✅

**页面数**: 6,419 → 8,041 (+25%)

| 分类 | 单位数 | 转换方式 | 常用值 | 页面数 |
|------|--------|----------|--------|--------|
| Power/功率 | 8 | 线性 (W基准) | 8 | 504 |
| Fuel Efficiency/燃油效率 | 4 | 非线性 (km/L中转) | 6 | 43 |
| Frequency/频率 | 6 | 线性 (Hz基准) | 7 | 136 |
| Angle/角度 | 6 | 非线性 (度中转) | 8 | 136 |
| Force/力 | 6 | 线性 (N基准) | 7 | 120 |
| Torque/扭矩 | 6 | 线性 (N·m基准) | 7 | 120 |
| Shoe Size/鞋码 | 6 | 非线性 (cm脚长中转) | 0 | 32 |

**非线性转换**:
- **Fuel Efficiency**: 通过 km/L 中转，L/100km 是倒数关系
- **Angle**: 通过度中转，弧度/梯度/角分/角秒/圈均有精确公式
- **Shoe Size**: 通过 cm 脚长中转，US Men/Women/UK/EU/JP 各有近似公式

**新增描述**: 42个单位 × 2语言 = 84段 SEO 描述

**新增 i18n**: 7个分类名加入 en.json 和 zh.json

### 当前项目状态

- **构建**: 8,041 页面, 74 测试通过
- **分类**: 17 个
- **单位**: 123 个 (42 新增)
- **语言**: 2 (en, zh)
- **每页内链**: ~22 个
- **结构化数据**: BreadcrumbList + FAQPage + HowTo
- **视觉**: Neo-Brutalist (Space Grotesk, 3px borders, hard shadows, #ffe033 accent)
- **设计系统**: CSS 变量完整, 暗色模式支持, WCAG AA 对比度

---

## 2026-06-19 (晚间) — Phase 2 & Phase 3 & Phase 4 完成 + 多语言修复

### Phase 2: P1 分类 (Area, Volume) ✅

**新增分类**:

| 分类 | 单位数 | 对数 | 常用值 | 语言 |
|------|--------|------|--------|------|
| Area/面积 | 10 (sqmm, sqcm, sqm, sqkm, ha, acre, sqft, sqin, sqmi, mu) | 45 | 10 | en/zh |
| Volume/体积 | 13 (ml, cl, dl, l, m3, gal, gal_uk, qt, pt, cup, floz, tbsp, tsp) | 78 | 9 | en/zh |

Area 包含中式单位 `mu` (亩)，Volume 包含美制和英制加仑。

### Phase 3: P2 分类 (Speed, Time, Pressure, Energy) ✅

**新增分类**:

| 分类 | 单位数 | 对数 | 常用值 | 语言 |
|------|--------|------|--------|------|
| Speed/速度 | 6 (m/s, km/h, mph, kn, ft/s, mach) | 15 | 8 | en/zh |
| Time/时间 | 8 (ms, s, min, h, d, wk, mo, yr) | 28 | 8 | en/zh |
| Pressure/压力 | 8 (Pa, kPa, MPa, bar, atm, psi, mmHg, Torr) | 28 | 7 | en/zh |
| Energy/能量 | 7 (J, kJ, cal, kcal, kWh, BTU, Wh) | 21 | 7 | en/zh |

注意: Time 单位 `ms_time` 用了下划线后缀避免与 Speed 的 `ms` 冲突。

### Phase 4: SEO 优化 + 内容充实 ✅

**4.1 增强页面标题**
- 值页面: `{value} {unit1} = {result} {unit2} — Convert {unit1} to {unit2}`
- 对页面: `{unit1} to {unit2} — Free {category} Converter`
- 中文格式同理

**4.2 单位描述数据**
- `src/data/descriptions.ts` — 81单位 × 2语言 = 162段描述
- 每段2-3句，SEO友好，包含单位符号和常见用途

**4.3 UnitDescription 组件**
- `src/components/UnitDescription.astro`
- 使用原生 `<details>` 元素（SEO可索引）
- 折叠/展开动画

**4.4 FAQ 结构化数据增强**
- 从2题增加到4题
- 新增 "What is {unit}?" 问题，答案来自 descriptions 数据
- 中英双语自动适配

**4.5 HowTo 结构化数据**
- 每页添加 HowTo JSON-LD schema
- 线性转换: 3步 (取值 → 乘以系数 → 得结果)
- 温度转换: 3步特殊公式 (°C→°F: 乘9/5加32, °F→°C: 减32乘5/9)
- 中英双语步骤描述

**4.6 跨分类链接**
- 每个对页面底部显示9个其他分类的链接卡片
- 使用 CATEGORY_ICONS 图标

**4.7 sitemap.xml 修复**
- 使用 `getCommonValues(catId)` 替代 `COMMON_VALUES`
- 温度页面包含 -40°C、37°C 等语义值

**4.8 分类页增强**
- BreadcrumbList JSON-LD 结构化数据
- "Popular Conversions" 区域（热门值页面链接）
- "Other Conversion Categories" 跨分类链接

**4.9 i18n 新增字符串**
- `converter.aboutUnit`, `converter.whatIsUnit`
- `converter.otherCategories`, `category.otherCategories`
- `category.popularConversions`

### 多语言问题修复 ✅

**修复: PSI 中文名含 `/` 导致URL损坏**
- `磅力/平方英寸` → `磅力每平方英寸`
- 修复前: 48个中文页面缺失（pressure分类中涉及PSI的所有页面对）
- 修复后: 0个缺失页面

**修复: Hreflang 重复**
- BaseLayout.astro 中 hreflangTags() 和 langLinks 重复生成了 en/zh 的 alternate 链接
- 移除 langLinks 的重复 alternate links，现在只有3个 hreflang (en, zh, x-default)

**多语言审计结果**:
- ✅ i18n 键同步: en.json 和 zh.json 完全同步
- ✅ 单位描述覆盖: 81/81 单位 × 2语言
- ✅ 缺失页面: 0
- ✅ URL特殊字符: 无 `/` 或可能导致slug冲突的字符
- ✅ Hreflang: 3标签/页 (en, zh, x-default)
- ✅ Canonical URL: 每页有（但域名是 placeholder）
- ✅ 语言切换: 双向链接存在
- ⚠️ Canonical 域名: `unitconvert.example.com` 需部署时替换
- ⚠️ 加新语言需要: i18n json + units name + descriptions 三处改动

### 开源项目评估

**结论: 借数据不借库**

| 方案 | 推荐？ | 理由 |
|------|--------|------|
| 用 `convert` 包数据作参考 | ✅ | MIT, 16类, NIST精确值 |
| 用 `convert` 作运行时依赖 | ❌ | 转换逻辑就是 `value * ratio` |
| 用 `convert-units` | ⚠️ | 覆盖广但格式复杂, beta版 |
| 用 `js-quantities` | ❌ | 科学计算导向, 数据嵌在解析器里 |

关键事实:
1. 没有库提供中文单位名 — i18n 完全要自己做
2. 没有库提供 SEO 元数据 — 内容层是自己的 IP
3. toBase 单值比 ratio 更直观, convertFn 处理非线性比 difference 更灵活

### 当前项目状态

- **构建**: 6,419 页面, 74 测试通过
- **分类**: 9 个 (Length, Weight, Temperature, Data, Area, Volume, Speed, Time, Pressure, Energy)
- **单位**: 81 个
- **语言**: 2 (en, zh)
- **每页内链**: ~22 个 (1 reverse + 12 same-category + 9 cross-category)
- **结构化数据**: BreadcrumbList + FAQPage + HowTo
- **已知限制**: 
  - Canonical URL 域名为占位符
  - 温度客户端JS与服务端convertFn有轻微重复

---

## 2026-06-19 (下午) — Phase 0 架构重构 + Phase 1 P0 分类

### Phase 0: 架构重构 ✅

**目标**: 消除所有硬编码，使添加新分类只需编辑 `units.ts` 一个文件。

**完成项**:

1. **通用化动态路由** — 删除 `src/pages/[lang]/length/` 硬编码目录，创建 `src/pages/[lang]/[category]/[...slug].astro` 和 `src/pages/[lang]/[category]/index.astro`，使用 `Astro.params.category` 动态获取分类 ID。

2. **通用化 Converter 组件** — 替换硬编码的 8 个 length rates 为 `data-rates`/`data-all-units`/`data-custom-convert` data 属性。下拉框从只显示 2 个选项改为显示当前分类所有单位。

3. **添加 convertFn 支持** — `Category` 接口新增可选 `convertFn` 字段，`lib/units.ts` 的 `convert()` 函数优先使用自定义转换（温度等非线性场景），线性转换保持默认。

4. **首页分类图标** — 新增 `CATEGORY_ICONS` 映射，替代硬编码三元表达式。

5. **分类特定常用值** — 新增 `CATEGORY_VALUES` 和 `getCommonValues()` 函数，每个分类可有不同的常用值列表。

6. **测试套件** — 安装 vitest，创建 24 个测试用例覆盖转换、格式化、slug 生成。

**验证**: `npm run build` 产出 621 页，24/24 测试通过。

### Phase 1: P0 分类 (Weight, Temperature, Data) ✅

**新增分类**:

| 分类 | 单位数 | 对数 | 常用值 | 语言 |
|------|--------|------|--------|------|
| Weight/重量 | 8 (mg, g, kg, tonne, oz, lb, st, jin) | 28 | 0.1-1000 | en/zh |
| Temperature/温度 | 3 (°C, °F, K) | 3 | -40~200 | en/zh |
| Data Storage/数据存储 | 10 (bit, B, KB, MB, GB, TB, PB, Kbit, Mbit, Gbit) | 45 | 1-1024 | en/zh |

**温度非线性转换**: 使用 `convertFn` 实现摄氏度中转策略 (源→°C→目标)，客户端同步实现。

**i18n 更新**: en.json 和 zh.json 的 nav 部分新增 weight/temperature/data 条目。

**测试扩展**: 从 24 个增加到 39 个测试，新增温度转换验证 (0°C=32°F, -40°F=-40°C 等)。

**验证**: `npm run build` 产出 **2,299 页**，39/39 测试通过，`npm run dev` 无报错。

### 修复

- 修复 `Converter.astro` 注释中 `<script>` 字面量导致 esbuild 依赖扫描报错的问题。

---

## 2026-06-19 — 项目启动 & 路线图制定

### 项目现状
- Astro 5 + TypeScript 静态站点
- 1 个分类 (Length/长度)，8 个单位，~504 页面
- 中英双语，hreflang SEO
- AdSense 广告位已预留
- 架构设计良好：只需改 `units.ts` 一个文件就能加新分类（理论上）

### 发现的架构问题
1. **路由硬编码**: `src/pages/[lang]/length/[...slug].astro` 目录名和代码都硬编码了 `length`
2. **Converter 客户端硬编码**: `Converter.astro` 第 96-105 行硬编码了 8 个 length rates
3. **下拉限制**: Converter `<select>` 只有 2 个选项（当前 pair），不能切换到同分类其他单位

### 用户决策
- **分类优先级**: P0 (Weight, Temperature, Data) → P1 (Area, Volume) → P2 (Speed, Time, Pressure, Energy)
- **语言**: 暂不加新语言，保持中英双语
- **变现**: 多站群策略 — 同架构复制到汇率、BMI 等新站
- **规模目标**: 万页级别