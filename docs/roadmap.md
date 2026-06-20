# Unit Converter pSEO — 完整实施路线图

> 创建日期: 2026-06-19 | 更新: 2026-06-21 | 目标: 万页级 pSEO 转换工具矩阵，睡后收入

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
| **9** | ✅ **已完成** | **5个交互式计算器 (数字进制/时间戳/百分比/BMI/年龄)** |
| **6** | ⬜ 待定 | 汇率(API) + 多站群架构 |

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
| **9** | 6个交互式计算器 (含汇率) | **29,473** | ✅ |

**当前页面数**: 29,473 | **分类**: 23 (17转换器 + 6计算器) | **单位**: 123 | **语言**: 12

---

## 当前项目数据

### 线上信息

| 项 | 值 |
|---|---|
| 网站域名 | https://convunit.net |
| GitHub | https://github.com/wwwqqqzzz/unit-converter |
| 部署方式 | Cloudflare Workers SSR |
| 页面数 | 29,473 URLs |
| 分类 | 23 (17 converter + 6 calculator) |
| 计算器 | 数字进制, Unix时间戳, 百分比, BMI, 年龄, 汇率 |
| 架构 | Workers SSR (非SSG, 无文件数限制) |
| AdSense | ca-pub-4967918867986181 (3 positions: top/middle/bottom) |
| Google Search Console | 已验证, sitemap 已提交 (29,461 URLs) |

### 分类统计

#### 转换器 (17)

| 分类 | 单位数 | 对数 | 常用值 | 页面数/语言 |
|------|--------|------|--------|-----------|
| Length/长度 | 8 | 28 | 10 | 616 |
| Weight/重量 | 8 | 28 | 10 | 616 |
| Temperature/温度 | 3 | 3 | 10 | 66 |
| Data Storage/数据存储 | 10 | 45 | 10 | 990 |
| Area/面积 | 10 | 45 | 10 | 990 |
| Volume/体积 | 13 | 78 | 9 | 1,404 |
| Speed/速度 | 6 | 15 | 8 | 240 |
| Time/时间 | 8 | 28 | 8 | 448 |
| Pressure/压力 | 8 | 28 | 7 | 392 |
| Energy/能量 | 7 | 21 | 7 | 294 |
| Power/功率 | 8 | 28 | 8 | 504 |
| Fuel Efficiency/燃油效率 | 4 | 6 | 6 | 43 |
| Frequency/频率 | 6 | 15 | 7 | 136 |
| Angle/角度 | 6 | 15 | 8 | 136 |
| Force/力 | 6 | 15 | 7 | 120 |
| Torque/扭矩 | 6 | 15 | 7 | 120 |
| Shoe Size/鞋码 | 6 | 15 | 0 | 32 |
| **小计** | **123** | **433** | — | **6,247/语言** |

#### 计算器 (6)

| 计算器 | URL | 页面/语言 |
|--------|-----|-----------|
| 🔢 数字进制 | `/en/number-base/` | 1 |
| ⏰ Unix时间戳 | `/en/timestamp/` | 1 |
| 💯 百分比 | `/en/percentage/` | 1 |
| ⚕️ BMI | `/en/bmi/` | 1 |
| 🎂 年龄 | `/en/age/` | 1 |
| 💱 汇率 | `/en/currency/` | 1 |
| **小计** | **6个计算器** | **6/语言** |

#### 总计: (6,247 + 6) × 12 语言 = 29,436 + 12 语言首页 + 25 其他页 = **29,473 URLs**

### SEO 功能清单

| 功能 | 状态 |
|------|------|
| 值页面标题含答案 (e.g. "5 cm = 1.97 inches") | ✅ |
| 对页面标题含分类名 | ✅ |
| 123单位 × 12语言 SEO描述 (descriptions.ts) | ✅ |
| 6计算器 × 12语言 SEO描述 (calc i18n) | ✅ |
| UnitDescription 折叠组件 (native `<details>`) | ✅ |
| FAQ JSON-LD (2-4题/页, 含 "What is X?") | ✅ |
| HowTo JSON-LD (3步转换指南) | ✅ |
| BreadcrumbList JSON-LD | ✅ |
| 计算器页面 BreadcrumbList JSON-LD | ✅ |
| 跨分类链接 (21个其他分类/页) | ✅ |
| 分类页热门转换 | ✅ |
| Hreflang (12语言 + x-default) | ✅ |
| Canonical URL | ✅ |
| 语言切换 (12语言) | ✅ |
| Sitemap.xml (29,473 URLs) | ✅ |
| Google Search Console 验证 | ✅ |
| Sitemap 提交 (29,473 URLs) | ✅ |

### 性能 & 安全

| 项 | 值 |
|---|---|
| HTML 缓存 (middleware) | max-age=3600, stale-while-revalidate=86400 |
| 静态资源缓存 | immutable, max-age=31536000 |
| 安全头 | X-Frame-Options: DENY, X-Content-Type-Options, X-XSS-Protection, Permissions-Policy, Referrer-Policy |
| 根路径重定向 | / → /en/ (302) |
| CDN | Cloudflare (HTTP/2, Brotli, H3/QUIC) |

---

## Phase 9: 6个交互式计算器 ✅ (已完成)

### 新增

| # | 计算器 | URL 示例 | 功能 |
|---|--------|---------|------|
| 1 | 🔢 数字进制转换 | `/en/number-base/` | Bin/Oct/Dec/Hex 互转，4种表示同时显示 |
| 2 | ⏰ Unix时间戳 | `/en/timestamp/` | 时间戳↔日期双向转换，本地/UTC同步 |
| 3 | 💯 百分比计算 | `/en/percentage/` | 3模式：折扣/增长/占比 |
| 4 | ⚕️ BMI 计算 | `/en/bmi/` | kg/lb + cm/ft，分类刻度尺指示器 |
| 5 | 🎂 年龄计算 | `/en/age/` | 年月日精确，总天数/周数/月数，下个生日 |
| 6 | 💱 汇率转换 | `/en/currency/` | Frankfurter API SSR 嵌入，30种货币，实时换算 |

### 架构变更

Category 类型系统引入 `type` 字段: `'converter'` | `'calculator'`。计算器类型无需 units、无 pair/value 页面，仅在 index 页渲染自定义交互组件。

**汇率特殊点**: 唯一需要外部 API 的计算器。采用 SSR-Embedded 模式（服务端 fetch Frankfurter → 嵌入 HTML → 客户端零 API 请求），Cloudflare 边缘缓存 1h。

---

## 下一步

| 优先级 | 品类 | 策略 | 预估 |
|--------|------|------|------|
| 🟡 P1 | 鞋码专区 — 独立 Landing Page | 当前站新页面 | ~2h |
| 🟡 P1 | Number Base SEO 价值页面 | "binary-42-to-decimal" 长尾页面 | ~2h |
| 🟢 P2 | 多站群架构 (BMI/Age 独立站) | 新项目 | ~20h |

所有主要品类已完成（17转换器 + 6计算器 = 23分类）。下一步可考虑鞋码独立 Landing Page 或为计算器类型添加 SEO 价值页面。