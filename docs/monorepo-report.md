# Phase 11: 多站群 Monorepo 架构迁移报告

> 完成日期: 2026-06-21 | 架构: 单体 → Monorepo (npm workspaces) | Git: `9ad36b6`

## 一、迁移动机

项目从 2026-06-19 的单个 Length 分类发展到 2026-06-21 的 23 个分类、48,925 URLs。架构面临的核心矛盾：

| 维度 | 单体架构 | 迁移后 (Monorepo) |
|------|---------|-------------------|
| 代码复用 | Astro 组件与转换逻辑混合，子站必须 fork | converter-core 独立包，子站直接依赖 |
| 子站创建 | 手动复制整个项目，diff 管理 | `apps/` 下新增站点，共享核心 |
| 构建 | 单次构建，48K 路由全部产出 | 各站独立构建，只产本站路由 |
| 依赖 | 所有依赖混合在根 package.json | 各 workspace 声明自有依赖 |
| 部署 | 单站点，单域名 | 多站点，独立域名，独立 wrangler 部署 |

## 二、架构设计

### 包划分

```
packages/converter-core/     ← 纯逻辑层，零框架依赖
  ├── data/                  ← 单位定义、分类、description、number-base values
  ├── i18n/                  ← 12 语言 JSON 文件
  ├── lib/                   ← 转换函数、SEO 工具 (hreflang, canonical)
  └── utils/                 ← 翻译加载器 t()

apps/main/                   ← Astro SSR 应用层
  ├── components/            ← Astro 组件 (Converter, 6 calculators, ShoeSizeChart...)
  ├── layouts/               ← BaseLayout (SEO meta, JSON-LD, 样式系统)
  ├── pages/                 ← 全部 48,925 路由
  └── middleware.ts           ← HTTP 缓存 + 安全头

apps/bmi/                    ← BMI 独立站 (PoC)
  ├── components/BMI.astro   ← BMI 计算器组件
  ├── layouts/BaseLayout.astro ← 简化布局
  └── pages/[lang]/bmi/      ← 12 语言 BMI 页面
```

### 关键决策

| 决策 | 选择 | 理由 |
|------|------|------|
| 包管理器 | npm workspaces | 已有 npm，零新依赖 |
| 共享包引用 | `"converter-core": "*"` + 子路径 exports | symlink 开发期，无需 publish |
| 导出策略 | subpath exports (7 条) | tree-shaking 支持，descriptions.ts 707KB |
| 构建工具 | Astro 自带 `--root` | 原生支持 monorepo 场景 |
| 测试 | vitest workspace | 每个包可独立运行测试 |
| TypeScript | 每个 workspace 独立 tsconfig | 灵活兼容 Astro strict 模式 |

## 三、Import 迁移

所有 core 包 import 从相对路径改为 workspace 包引用：

```typescript
// 迁移前 (单体)
import { categories } from '../../../data/units';
import { t } from '../../utils/i18n';
import { hreflangTags } from '../lib/seo';

// 迁移后 (monorepo)
import { categories } from 'converter-core/data/units';
import { t } from 'converter-core/utils/i18n';
import { hreflangTags } from 'converter-core/lib/seo';
```

**文件覆盖**: 10 个文件，31 处 import 更新

| 文件 | 旧 import 数 | 新 import |
|------|-------------|-----------|
| `apps/main/src/components/UnitDescription.astro` | 4 | `converter-core/data/units`, `converter-core/utils/i18n`, `converter-core/data/descriptions` |
| `apps/main/src/components/CrossLinks.astro` | 5 | `converter-core/data/units`, `converter-core/lib/units`, `converter-core/utils/i18n` |
| `apps/main/src/components/ShoeSizeChart.astro` | 2 | `converter-core/data/units`, `converter-core/utils/i18n` |
| `apps/main/src/components/Converter.astro` | 1 | `converter-core/utils/i18n` |
| `apps/main/src/components/ConversionTable.astro` | 1 | `converter-core/lib/units` |
| `apps/main/src/pages/[lang]/[category]/[...slug].astro` | 5 | `converter-core/utils/i18n`, `converter-core/lib/units`, `converter-core/data/units`, `converter-core/data/descriptions`, `converter-core/data/number-base-values` |
| `apps/main/src/pages/[lang]/[category]/index.astro` | 3 | `converter-core/utils/i18n`, `converter-core/lib/units`, `converter-core/data/units` |
| `apps/main/src/pages/[lang]/index.astro` | 3 | `converter-core/utils/i18n`, `converter-core/lib/units`, `converter-core/data/units` |
| `apps/main/src/pages/sitemap.xml.ts` | 4 | `converter-core/utils/i18n`, `converter-core/data/units`, `converter-core/lib/units`, `converter-core/data/number-base-values` |
| `apps/main/src/layouts/BaseLayout.astro` | 2 | `converter-core/utils/i18n`, `converter-core/lib/seo` |

## 四、BMI 独立站 PoC

### 页面

| 路由 | 类型 | 说明 |
|------|------|------|
| `/[lang]/` | 重定向 (301) | → `/[lang]/bmi/` |
| `/[lang]/bmi/` | BMI 计算器 | 组件 + FAQ + JSON-LD |
| `/sitemap.xml` | 动态 | 12 URL × 1 |
| `/robots.txt` | 静态 | 通用规则 |

### 组件

BMI.astro 复制自 `apps/main`，纯客户端 JS 计算，无外部依赖。支持 kg/lb + cm/ft 切换。

### i18n

在 `converter-core` 的 en.json 和 zh.json 中新增 BMI FAQ 键：

| 键 | en | zh |
|----|----|----|
| `bmi.faqTitle` | Frequently Asked Questions | 常见问题 |
| `bmi.faq1q` | What is BMI? | 什么是BMI？ |
| `bmi.faq1a` | BMI is a measure... | BMI是根据身高和体重衡量体脂的指标 |
| `bmi.faq2q` | What is a healthy BMI range? | 健康的BMI范围是多少？ |
| `bmi.faq2a` | 18.5 to 24.9... | 18.5至24.9 |
| `bmi.faq3q` | Is BMI accurate for everyone? | BMI对所有人都准确吗？ |
| `bmi.faq3a` | General screening tool... | 一般筛查工具 |

## 五、构建与部署

```bash
# 安装（首次或新增依赖时）
npm install

# 开发
npm run dev                    # apps/main (localhost:4321)

# 构建
npm run build                  # apps/main → dist/
npx astro build --root apps/bmi
npx astro build --root apps/age

# 测试
npm test                       # 所有 workspace
npm test -w converter-core     # 仅 core

# CI/CD
推送 main 分支 → GitHub Actions 自动测试 + 部署所有站点
```

### 线上地址

| 站点 | Project | URL | 自定义域名 |
|------|---------|-----|-----------|
| 主站 | `unit-convert` | `https://convunit.net` | convunit.net ✅ |
| BMI | `bmi-calculator` | `https://bmi-calculator-27p.pages.dev` | ⬜ 待绑定 |
| Age | `age-calculator` | `https://age-calculator-2rd.pages.dev` | ⬜ 待绑定 |

### 构建产物

| 站点 | 输出目录 | 类型 | 大小 |
|------|---------|------|------|
| apps/main | `apps/main/dist/` | SSR (Worker) | ~1.5MB |
| apps/bmi | `apps/bmi/dist/` | SSR (Worker) | ~300KB |
| apps/age | `apps/age/dist/` | SSR (Worker) | ~300KB |

## 六、项目统计

| 指标 | 迁移前 | 迁移后 |
|------|--------|--------|
| 项目结构 | 单体 | npm workspaces monorepo |
| Workspaces | 1 (root) | 3 (root + apps/main + apps/bmi + converter-core) |
| 共享包 | 无 | `converter-core` (7 子路径导出) |
| 站点数 | 1 (convunit.net) | 3 (main + bmi + age) |
| 总 URL | 48,925 | 48,925 (main) + 12 (bmi) + 12 (age) |
| 测试 | 74 passing | 74 passing (converter-core) |
| 构建 | 0 errors | 0 errors (both apps) |
| Git | `de872aa` | `9ad36b6` |
