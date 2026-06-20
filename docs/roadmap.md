# Unit Converter pSEO — 完整实施路线图

> 创建日期: 2026-06-19 | 更新: 2026-06-20 | 目标: 万页级 pSEO 转换工具矩阵，睡后收入

## ✅ 完成状态

| Phase | 状态 | 说明 |
|-------|------|------|
| **0** | ✅ 已完成 | 架构重构（通用路由、Converter组件、convertFn、测试） |
| **1** | ✅ 已完成 | Weight/Temperature/Data 分类 |
| **2** | ✅ 已完成 | Area/Volume 分类 |
| **3** | ✅ 已完成 | Speed/Time/Pressure/Energy 分类 |
| **4** | ✅ 已完成 | SEO优化+内容充实 |
| **4.5** | ✅ 已完成 | Neo-Brutalist 视觉重设计 |
| **4.6** | ✅ 已完成 | 对比度修复 |
| **4.7** | ✅ 已完成 | 7个新类别 (Power/Fuel/Frequency/Angle/Force/Torque/Shoe) |
| **5** | ✅ 已完成 | AdSense 集成 |
| **7** | ✅ 已完成 | 部署+域名+SEO 提交 (24,508 URLs) |
| **8** | ✅ 已完成 | 语言扩展 — 10新语言 → 12种语言, Workers SSR 迁移 |
| **6** | ⬜ 待开始 | 多站群架构 + 新品类 (进制/时间戳/百分比/BMI) |

## 总览

| Phase | 内容 | 页面数 | 状态 |
|-------|------|--------|------|
| **0** | 架构重构 | ~620 | ✅ |
| **1** | P0: Weight/Temperature/Data | ~2,304 | ✅ |
| **2** | P1: Area/Volume | ~4,306 | ✅ |
| **3** | P2: Speed/Time/Pressure/Energy | ~6,419 | ✅ |
| **4** | SEO优化+内容充实 | ~6,419 | ✅ |
| **4.5** | Neo-Brutalist 重设计 | ~6,419 | ✅ |
| **4.6** | 对比度修复 | ~6,419 | ✅ |
| **4.7** | 7新类别 | ~8,041 | ✅ |
| **5** | AdSense集成 | ~8,041 | ✅ |
| **7** | 部署+域名+SEO (SSG) | ~8,041 | ✅ |
| **8** | 10新语言 + SSR 迁移 | **29,401** | ✅ |
| **6** | 多站群 + 高价值品类 | 待定 | ⬜ |

**当前页面数**: 29,401 | **目标**: 持续扩展 | **17分类, 123单位, 12语言**

---

## 当前项目数据

### 线上信息

| 项 | 值 |
|---|---|
| 网站域名 | https://convunit.net |
| GitHub | https://github.com/wwwqqqzzz/unit-converter |
| 部署方式 | Cloudflare Workers SSR |
| 页面数 | 29,401 URLs |
| 架构 | Workers SSR (非SSG, 无文件数限制) |
| AdSense | ca-pub-4967918867986181 (3 positions: top/middle/bottom) |
| Google Search Console | 已验证, sitemap 已提交 (29,401 URLs) |

### 分类统计

| 分类 | 单位数 | 对数 | 常用值 | 语言 | 页面数/语言 |
|------|--------|------|--------|------|-----------|
| Length/长度 | 8 | 28 | 10 | 12 | 616 |
| Weight/重量 | 8 | 28 | 10 | 12 | 616 |
| Temperature/温度 | 3 | 3 | 10 | 12 | 66 |
| Data Storage/数据存储 | 10 | 45 | 10 | 12 | 990 |
| Area/面积 | 10 | 45 | 10 | 12 | 990 |
| Volume/体积 | 13 | 78 | 9 | 12 | 1,404 |
| Speed/速度 | 6 | 15 | 8 | 12 | 240 |
| Time/时间 | 8 | 28 | 8 | 12 | 448 |
| Pressure/压力 | 8 | 28 | 7 | 12 | 392 |
| Energy/能量 | 7 | 21 | 7 | 12 | 294 |
| Power/功率 | 8 | 28 | 8 | 12 | 504 |
| Fuel Efficiency/燃油效率 | 4 | 6 | 6 | 12 | 43 |
| Frequency/频率 | 6 | 15 | 7 | 12 | 136 |
| Angle/角度 | 6 | 15 | 8 | 12 | 136 |
| Force/力 | 6 | 15 | 7 | 12 | 120 |
| Torque/扭矩 | 6 | 15 | 7 | 12 | 120 |
| Shoe Size/鞋码 | 6 | 15 | 0 | 12 | 32 |
| **合计** | **123** | **433** | — | **12** | **29,401** |

### SEO 功能清单

| 功能 | 状态 |
|------|------|
| 值页面标题含答案 (e.g. "5 cm = 1.97 inches") | ✅ |
| 对页面标题含分类名 | ✅ |
| 123单位 × 12语言 SEO描述 (descriptions.ts) | ✅ |
| UnitDescription 折叠组件 (native `<details>`) | ✅ |
| FAQ JSON-LD (2-4题/页, 含 "What is X?") | ✅ |
| HowTo JSON-LD (3步转换指南) | ✅ |
| BreadcrumbList JSON-LD | ✅ |
| 跨分类链接 (9个其他分类/页) | ✅ |
| 分类页热门转换 | ✅ |
| Hreflang (12语言 + x-default) | ✅ |
| Canonical URL | ✅ |
| 语言切换 (12语言) | ✅ |
| Sitemap.xml (29,401 URLs) | ✅ |
| 每页约22个内链 | ✅ |
| Google Search Console 验证 | ✅ |
| Sitemap 提交 (29,401 URLs) | ✅ |

### 性能 & 安全

| 项 | 值 |
|---|---|
| HTML 缓存 (middleware) | max-age=3600, stale-while-revalidate=86400 |
| 静态资源缓存 | immutable, max-age=31536000 (Astro 哈希文件名) |
| 安全头 (middleware) | X-Frame-Options: DENY, X-Content-Type-Options: nosniff, X-XSS-Protection, Permissions-Policy, Referrer-Policy |
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
| Cloudflare 20K文件限制 | SSG → Workers SSR 迁移 | 2026-06-20 |

---

## Phase 0-7: 已完成 (详见 changelog.md)

### Phase 0: 架构重构 ✅
- 通用化动态路由
- 通用化 Converter 组件
- convertFn 支持非线性转换
- 74 vitest 测试

### Phase 1-3: 全部分类 ✅
- 17分类, 123单位, 433个转换对

### Phase 4: SEO 优化 ✅
- 页面标题含答案、FAQ+HowTo JSON-LD、跨分类链接、sitemap

### Phase 4.5-4.7: 视觉+内容 ✅
- Neo-Brutalist 设计、对比度修复、7新类别 (Power~Shoe)

### Phase 5: AdSense ✅
- 3广告位条件渲染, ca-pub-4967918867986181

### Phase 7: 部署 ✅
- convunit.net, Cloudflare Pages, Google Search Console

---

## Phase 8: 语言扩展 ✅ (已完成)

### 实现策略

| 步骤 | 详情 |
|------|------|
| 1 | 创建 10 个 i18n JSON 文件 (es/fr/de/ja/pt/it/ko/ru/hi/tr) |
| 2 | 更新 units.ts — 123单位名 × 10语言 + 17分类名 × 10语言 |
| 3 | 更新 i18n.ts — LANG_LABELS + LANGUAGES (12语言) |
| 4 | 修复硬编码 `lang==='zh'` 引用 |
| 5 | 翻译描述 — 123单位 × 10语言 = 1230条 (Bing Translation API) |
| 6 | SSG → Workers SSR 迁移 (绕过 20K 文件限制) |
| 7 | 恢复完整 CATEGORY_VALUES |
| 8 | 部署验证 — 12语言全部正常渲染 |

### 翻译统计

| 语言 | i18n UI | 单位名 | 描述 |
|------|---------|--------|------|
| 西班牙语 (es) | ✅ | ✅ | ✅ |
| 法语 (fr) | ✅ | ✅ | ✅ |
| 德语 (de) | ✅ | ✅ | ✅ |
| 日语 (ja) | ✅ | ✅ | ✅ |
| 葡萄牙语 (pt) | ✅ | ✅ | ✅ |
| 意大利语 (it) | ✅ | ✅ | ✅ |
| 韩语 (ko) | ✅ | ✅ | ✅ |
| 俄语 (ru) | ✅ | ✅ | ✅ |
| 印地语 (hi) | ✅ | ✅ | ✅ |
| 土耳其语 (tr) | ✅ | ✅ | ✅ |

### SSG → SSR 迁移

| 维度 | SSG | Workers SSR |
|------|-----|------------|
| 输出 | 静态 HTML 文件 | 运行时渲染 |
| 文件限制 | 20K (Cloudflare Pages) | 无限制 |
| 头信息 | `_headers` 文件 | `middleware.ts` |
| 配置 | `astro.config.mjs` (静态) | `wrangler.toml` + SSR adapter |

### 页面增长

| 阶段 | 页面数 | 语言数 |
|------|--------|--------|
| Phase 4.7 完成 | 8,041 | 2 |
| Phase 8 完成 | **29,401** | **12** |

---

## Phase 6: 高价值品类 + 多站群 (下一步)

### 待定优先级

| 品类 | 类型 | 流量潜力 | 开发难度 | 策略 |
|------|------|---------|---------|------|
| 数字进制 (Bin/Dec/Hex/Oct) | 当前站新品类 | 中 (程序员) | 低 | 直接加 |
| Unix 时间戳 | 当前站新品类 | 中 (程序员/运维) | 低 | 直接加 |
| 百分比计算器 | 当前站新品类 | 高 (通用) | 低 | 直接加 |
| BMI 计算器 | 新站候选 | 高 (全球) | 低 | 拆独立站 |
| Age Calculator | 新站候选 | 高 (全球) | 低 | 拆独立站 |
| 汇率 | 新站候选 | 极高 (SEO) | 中 (API) | 拆独立站, 每日数据 |

### 策略调整

基于用户对SEO的分析，确认核心方向:
1. **用户搜索的是具体转换** ("10 inch to cm")，而非 "单位转换器"
2. **鞋码应单独做 Landing Page**，利用 `US 9 to EU` 等高流量长尾
3. **多站群策略**延后，先用当前站验证品类流量
4. 等某个品类跑出足够流量时再拆独立域名

### 推荐执行顺序

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
Phase 7  部署+域名+SEO ✅ (convunit.net, SSG)
Phase 8  10新语言 + SSR迁移 ✅ (12语言, 29,401页, Workers SSR)
    ↓
High Priority: 数字进制 + Unix时间戳 (当前站, 1天)
    ↓
Medium Priority: 百分比计算器 + 鞋码专区 (当前站, 2天)
    ↓
Low Priority: BMI + Age Calculator + 汇率 (新站候选)
```