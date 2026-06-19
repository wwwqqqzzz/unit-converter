# Unit Converter pSEO — 完整实施路线图

> 创建日期: 2026-06-19 | 更新: 2026-06-20 | 目标: 万页级 pSEO 转换工具矩阵，睡后收入

## ✅ 完成状态

| Phase | 状态 |
|-------|------|
| **0** | ✅ 已完成 — 架构重构（通用路由、Converter组件、convertFn、测试） |
| **1** | ✅ 已完成 — Weight/Temperature/Data 分类已添加 |
| **2** | ✅ 已完成 — Area/Volume 分类已添加 |
| **3** | ✅ 已完成 — Speed/Time/Pressure/Energy 分类已添加 |
| **4** | ✅ 已完成 — SEO优化+内容充实 |
| **4.5** | ✅ 已完成 — Neo-Brutalist 视觉重设计 |
| **4.6** | ✅ 已完成 — 对比度修复（暗色/亮色模式可读性） |
| **4.7** | ✅ 已完成 — 7个新类别（Power, Fuel, Frequency, Angle, Force, Torque, Shoe） |
| **5** | ✅ 已完成 — AdSense集成（条件渲染、3广告位、auto-ads） |
| **7** | ✅ 已完成 — 部署+域名+SEO提交 |
| **6** | ⬜ 待开始 — 多站群架构 |
| **8** | ⬜ 待开始 — 语言扩展 (es, ja, fr, ko) |

## 总览

| Phase | 内容 | 工时 | 页面数 | 状态 |
|-------|------|------|--------|------|
| **0** | 架构重构 | 4-6h | ~620 | ✅ Done |
| **1** | P0: Weight/Temperature/Data | 8h | ~2,304 | ✅ Done |
| **2** | P1: Area/Volume | 3h | ~4,306 | ✅ Done |
| **3** | P2: Speed/Time/Pressure/Energy | 4.5h | ~6,419 | ✅ Done |
| **4** | SEO优化+内容充实 | 34h | ~6,419 | ✅ Done |
| **4.5** | Neo-Brutalist 重设计 | 4h | ~6,419 | ✅ Done |
| **4.6** | 对比度修复 | 1h | ~6,419 | ✅ Done |
| **4.7** | 7新类别 | 3h | ~8,041 | ✅ Done |
| **5** | AdSense集成 | 2h | ~8,041 | ✅ Done |
| **7** | 部署+域名+SEO | 3h | 8,041 | ✅ Done |
| **6** | 多站群架构 | 20h | 多站点 | ⬜ |
| **8** | 语言扩展 | 8h/语言 | ~4,000/语言 | ⬜ |

**当前页面数**: 8,041 | **目标**: 万页(加语言即可) | **17分类, 123单位, 2语言**

---

## 当前项目数据

### 线上信息

| 项 | 值 |
|---|---|
| 网站域名 | https://convunit.net |
| GitHub | https://github.com/wwwqqqzzz/unit-converter |
| 部署方式 | Cloudflare Pages (wrangler pages deploy) |
| 页面数 | 8,041 |
| AdSense | ca-pub-4967918867986181 (3 positions: top/middle/bottom) |
| Google Search Console | 已验证, sitemap 已提交 (8,041 URLs discovered) |

### 分类统计

| 分类 | 单位数 | 对数 | 常用值 | 语言 | 页面数 |
|------|--------|------|--------|------|--------|
| Length/长度 | 8 | 28 | 10 | en/zh | 616 |
| Weight/重量 | 8 | 28 | 10 | en/zh | 616 |
| Temperature/温度 | 3 | 3 | 10 | en/zh | 66 |
| Data Storage/数据存储 | 10 | 45 | 10 | en/zh | 990 |
| Area/面积 | 10 | 45 | 10 | en/zh | 990 |
| Volume/体积 | 13 | 78 | 9 | en/zh | 1,404 |
| Speed/速度 | 6 | 15 | 8 | en/zh | 240 |
| Time/时间 | 8 | 28 | 8 | en/zh | 448 |
| Pressure/压力 | 8 | 28 | 7 | en/zh | 392 |
| Energy/能量 | 7 | 21 | 7 | en/zh | 294 |
| Power/功率 | 8 | 28 | 8 | en/zh | 504 |
| Fuel Efficiency/燃油效率 | 4 | 6 | 6 | en/zh | 43 |
| Frequency/频率 | 6 | 15 | 7 | en/zh | 136 |
| Angle/角度 | 6 | 15 | 8 | en/zh | 136 |
| Force/力 | 6 | 15 | 7 | en/zh | 120 |
| Torque/扭矩 | 6 | 15 | 7 | en/zh | 120 |
| Shoe Size/鞋码 | 6 | 15 | 0 | en/zh | 32 |
| **合计** | **123** | **433** | — | — | **~8,037** |

加上首页、分类页、sitemap 等: **8,041 页**

### SEO 功能清单

| 功能 | 状态 |
|------|------|
| 值页面标题含答案 (e.g. "5 cm = 1.97 inches") | ✅ |
| 对页面标题含分类名 | ✅ |
| 123单位 × 2语言 SEO描述 (descriptions.ts) | ✅ |
| UnitDescription 折叠组件 (native `<details>`) | ✅ |
| FAQ JSON-LD (2-4题/页, 含 "What is X?") | ✅ |
| HowTo JSON-LD (3步转换指南) | ✅ |
| BreadcrumbList JSON-LD | ✅ |
| 跨分类链接 (9个其他分类/页) | ✅ |
| 分类页热门转换 | ✅ |
| Hreflang (en, zh, x-default) | ✅ |
| Canonical URL | ✅ |
| 语言切换 | ✅ |
| Sitemap.xml (8,041 URLs) | ✅ |
| 每页约22个内链 | ✅ |
| Google Search Console 验证 | ✅ |
| Sitemap 提交 (8,041 URLs discovered) | ✅ |

### 性能 & 安全

| 项 | 值 |
|---|---|
| HTML 缓存 | max-age=3600, stale-while-revalidate=86400 |
| 静态资源缓存 | immutable, max-age=31536000 (Astro 哈希文件名) |
| 安全头 | X-Frame-Options: DENY, X-Content-Type-Options: nosniff, X-XSS-Protection, Permissions-Policy, Referrer-Policy |
| 根路径重定向 | / → /en/ (302) |
| 字体预加载 | preconnect + preload Google Fonts |
| favicon.svg | Neo-brutalist 黄色 U 字 |
| CDN | Cloudflare (自动 HTTP/2, Brotli, H3/QUIC) |

### 已修复问题

| 问题 | 修复 | 日期 |
|------|------|------|
| PSI 中文名含 `/` | `磅力/平方英寸` → `磅力每平方英寸` | 2026-06-19 |
| Hreflang 重复 | 移除 BaseLayout 重复 alternate links | 2026-06-19 |
| 灰色配黑色看不清 | 暗色模式对比度全面修复 | 2026-06-19 |
| 域名占位符 | unitconvert.example.com → convunit.net | 2026-06-20 |

---

## Phase 0: 架构重构 ✅ (已完成)

重构后，**加新分类只需编辑 `src/data/units.ts` 一个文件**。

### 0.1 通用化动态路由

- 删除 `src/pages/[lang]/length/` 硬编码目录
- 创建 `src/pages/[lang]/[category]/[...slug].astro` 通用动态路由
- 创建 `src/pages/[lang]/[category]/index.astro` 通用分类首页

### 0.2 通用化 Converter 组件

- `data-rates` 传递转换系数
- `data-all-units` 传递所有单位
- `data-custom-convert` 标记非线性转换
- 下拉框显示当前分类所有单位

### 0.3 通用化首页分类网格

- `CATEGORY_ICONS` 映射表替代硬编码

### 0.4 添加 convertFn 支持

- `Category` 接口新增 `convertFn?` 字段
- 温度使用 Celsius 中转策略

### 0.5 添加测试

- vitest 74 个测试用例覆盖转换、格式化、slug 生成

---

## Phase 1: P0 分类 ✅ (已完成)

| 分类 | 单位 | 对数 | 页面 |
|------|------|------|------|
| Length | 8 | 28 | 616 |
| Weight | 8 | 28 | 616 |
| Temperature | 3 | 3 | 66 |
| Data | 10 | 45 | 990 |
| **合计** | **29** | **104** | **~2,288** |

---

## Phase 2: P1 分类 ✅ (已完成)

| 分类 | 单位 | 对数 | 页面 |
|------|------|------|------|
| Area/面积 | 10 | 45 | 990 |
| Volume/体积 | 13 | 78 | 1,404 |

---

## Phase 3: P2 分类 ✅ (已完成)

| 分类 | 单位 | 对数 | 页面 |
|------|------|------|------|
| Speed/速度 | 6 | 15 | 240 |
| Time/时间 | 8 | 28 | 448 |
| Pressure/压力 | 8 | 28 | 392 |
| Energy/能量 | 7 | 21 | 294 |

---

## Phase 4: SEO 优化 + 内容充实 ✅ (已完成)

- 4.1: 增强页面标题 — 值页面包含答案，对页面包含分类名
- 4.2: 81单位 × 2语言 SEO描述 (descriptions.ts)
- 4.3: UnitDescription 折叠组件
- 4.4: FAQ 增强至 4 题/页
- 4.5: HowTo JSON-LD 3步转换指南
- 4.6: 跨分类链接
- 4.7: sitemap.xml 修复 (使用 CATEGORY_VALUES)
- 4.8: 分类页增强 (BreadcrumbList, Popular Conversions, 跨分类)
- 4.9: i18n 新增字符串

---

## Phase 4.5: Neo-Brutalist 视觉重设计 ✅ (已完成)

- Space Grotesk 字体（几何感、粗犷、有辨识度）
- 3px 实线黑色边框 (`--b: 3px solid #000`)
- 4px 硬偏移阴影 (`--shadow-hard: 4px 4px 0 #000`)
- 黄色强调色 `#ffe033`
- 零圆角 (`--r: 0px`)
- 暗色模式完整支持（白色边框/阴影）
- 8个文件全部更新
- 交互效果: hover时阴影上移, active时阴影消失（按下感）

## Phase 4.6: 对比度修复 ✅ (已完成)

用户反馈: "灰色配黑色看不清"

**亮色模式修复**:
- `--c-text-secondary`: `#333` → `#222`
- `--c-text-tertiary`: `#666` → `#555` (WCAG AA 4.5:1 on #f5f5f0)
- `--c-border-light`: `#ccc` → `#bbb`

**暗色模式修复（重点）**:
- `--c-text-secondary`: `#bbb` → `#d4d4d4` (7.5:1 on #0d0d0d)
- `--c-text-tertiary`: `#777` → `#999` (4.7:1 on #0d0d0d)
- `--c-border-light`: `#555` → `#666`

## Phase 4.7: 7新类别 ✅ (已完成)

| 分类 | 单位数 | 转换方式 | 特点 |
|------|--------|----------|------|
| Power/功率 | 8 | 线性 (W基准) | W, kW, MW, hp, PS, BTU/h, ft·lbf/s, cal/s |
| Fuel Efficiency/燃油效率 | 4 | 非线性 (km/L中转) | km/L ↔ L/100km ↔ mpg(US) ↔ mpg(UK) |
| Frequency/频率 | 6 | 线性 (Hz基准) | Hz, kHz, MHz, GHz, rpm, rps |
| Angle/角度 | 6 | 非线性 (度中转) | °, rad, gon, ′, ″, turn |
| Force/力 | 6 | 线性 (N基准) | N, kN, lbf, kgf, dyn, ozf |
| Torque/扭矩 | 6 | 线性 (N·m基准) | N·m, kN·m, lb·ft, lb·in, kgf·m, oz·in |
| Shoe Size/鞋码 | 6 | 非线性 (cm脚长中转) | cm, US Men, US Women, UK, EU, JP |

页面数: 6,419 → 8,041 (+25%)
单位数: 81 → 123 (+52%)
分类数: 10 → 17 (+70%)

---

## Phase 5: AdSense 集成 ✅ (已完成)

### 广告位布局

| 位置 | 页面类型 | 格式 | 广告单元 |
|------|----------|------|----------|
| top | 首页、分类页 | auto + auto-ads脚本 | AD_SLOT_TOP |
| middle | 详情页、分类页 | auto 响应式 | AD_SLOT_MIDDLE |
| bottom | 详情页、分类页 | horizontal 横幅 | AD_SLOT_BOTTOM |

### 条件渲染

- 无 `PUBLIC_ADSENSE_ID` → 零输出（不留占位符、不产生布局偏移）
- 有 `PUBLIC_ADSENSE_ID` → 渲染 `<ins class="adsbygoogle">` + `adsbygoogle.js` 脚本
- auto-ads 脚本仅在 top 位置加载一次（避免重复）

### 实现

- `src/components/AdSense.astro` — 3 个位置（top/middle/bottom），条件渲染
- 构建时通过 `PUBLIC_ADSENSE_ID=ca-pub-4967918867986181 npm run build` 注入
- 7,620 个内容页面包含广告代码
- Cloudflare Pages secret 已设置 `PUBLIC_ADSENSE_ID`

---

## Phase 7: 部署与上线 ✅ (已完成)

### 域名

- 首选域名: `convunit.net` (.net 信任度高，SEO 友好)
- Cloudflare Registrar 购买，自动配置 DNS
- 旧域名 `convertunit.it.com` 为子域名陷阱，建议退款

### Cloudflare Pages 部署

| 项 | 值 |
|---|---|
| 项目名 | unit-convert |
| 部署方式 | `wrangler pages deploy dist` (直接上传) |
| 临时 URL | unit-convert-dd0.pages.dev |
| 自定义域名 | convunit.net ✅ |
| 构建命令 | `PUBLIC_ADSENSE_ID=ca-pub-4967918867986181 npm run build` |

### 性能优化

| 优化 | 值 |
|---|---|
| HTML 缓存 | `public, max-age=3600, stale-while-revalidate=86400` |
| 静态资源缓存 | `public, max-age=31536000, immutable` |
| sitemap/robots 缓存 | `public, max-age=86400` |
| 安全头 | X-Frame-Options: DENY, X-Content-Type-Options: nosniff, X-XSS-Protection, Permissions-Policy, Referrer-Policy |
| 根路径重定向 | `/ → /en/` (302) |
| 字体预加载 | preconnect + preload Google Fonts CSS |
| favicon | Neo-brutalist 黄色 U 字 SVG |
| CDN | Cloudflare (HTTP/2, Brotli, H3/QUIC 自动) |
| TTFB (首次) | ~0.45s |
| TTFB (缓存) | ~0.38s |

### Google Search Console

- 网址前缀资源: `https://convunit.net` ✅ 已验证
- 域名资源: `convunit.net` ✅ 已验证 (DNS TXT)
- Sitemap: `sitemap.xml` ✅ 已提交, 8,041 URLs discovered
- 状态: 成功

---

## Phase 6: 多站群架构 ⬜ (待开始)

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
│   ├── currency-converter/       ← 汇率转换
│   ├── bmi-calculator/          ← BMI 计算器
│   └── percentage-calc/         ← 百分比计算器
├── pnpm-workspace.yaml
└── package.json
```

---

## Phase 8: 语言扩展 ⬜ (待开始)

### 语言 ROI 分析

| 语言 | 页面倍增 | 翻译量 | CPM | 搜索量 |
|------|----------|--------|-----|--------|
| 西班牙语 (es) | ×1.5 → ~12,000 | ~170单位名 + ~120描述 | 中高 | 极高 (拉美+西班牙) |
| 日语 (ja) | ×2 → ~16,000 | ~170单位名 + ~120描述 | 高 | 高 |
| 法语 (fr) | ×2.5 → ~20,000 | ~170单位名 + ~120描述 | 中高 | 高 |
| 韩语 (ko) | ×3 → ~24,000 | ~170单位名 + ~120描述 | 中 | 中 |

### 优先级: es > ja > fr > ko

西班牙语搜索量最大，ROI 最高。加1门语言(es)即可破万页(~12,000)。

---

## 推荐执行顺序

```
Phase 0  架构重构 ✅
Phase 1  P0分类 ✅
Phase 2  P1分类 ✅
Phase 3  P2分类 ✅
Phase 4  SEO+内容 ✅
Phase 4.5 Neo-Brutalist 重设计 ✅
Phase 4.6 对比度修复 ✅
Phase 4.7 7新类别 ✅ (6,419→8,041页)
Phase 5  AdSense集成 ✅ (ca-pub-4967918867986181)
Phase 7  部署+域名+SEO ✅ (convunit.net, 8,041 URLs submitted)
    ↓
Phase 8  语言扩展 (es→万页目标)  → es 即可破万
    ↓
Phase 6  多站群架构  → 多站点矩阵
```