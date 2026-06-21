# 多站群架构设计方案

> 创建日期: 2026-06-21 | 状态: ⬜ 待实施 | 优先级: P1

## 目标

将当前单体 Astro 项目重构为多站 monorepo，实现"一份核心逻辑，多个独立站点"：

```
convunit.net          ← 主站：17转换器 + 6计算器 (48,925 URLs)
├── bmi.example.com   ← BMI 独立站
├── age.example.com   ← 年龄计算器独立站
├── currency.example.com ← 汇率转换独立站
└── number-base.example.com ← 数字进制转换独立站
```

每个子站共享 converter-core 包中的转换逻辑、数据、i18n，但拥有独立的 Astro 配置、wrangler 部署、域名。

## 架构

```
unit-converter/                      ← Monorepo root
├── package.json                     ← npm workspaces
├── tsconfig.base.json               ← 共享 TS 配置
├── packages/
│   └── converter-core/              ← 共享核心包
│       ├── package.json             ← "name": "converter-core"
│       ├── tsconfig.json
│       ├── vitest.config.ts
│       └── src/
│           ├── index.ts             ← Barrel exports
│           ├── data/
│           │   ├── units.ts         ← 分类+单位定义 (50KB)
│           │   ├── descriptions.ts  ← SEO 描述 (707KB)
│           │   └── number-base-values.ts
│           ├── i18n/                ← 12 语言 JSON
│           ├── lib/
│           │   ├── units.ts         ← 转换逻辑
│           │   └── seo.ts           ← hreflang/canonical
│           └── utils/
│               └── i18n.ts          ← t() 翻译函数
├── apps/
│   ├── main/                        ← convunit.net 主站
│   │   ├── astro.config.mjs
│   │   ├── wrangler.toml
│   │   ├── tsconfig.json
│   │   ├── public/
│   │   └── src/
│   │       ├── components/
│   │       ├── layouts/
│   │       ├── pages/               ← 全部 48K+ 路由
│   │       └── middleware.ts
│   └── bmi/                         ← BMI 独立站 (示范)
│       ├── astro.config.mjs
│       ├── wrangler.toml
│       ├── tsconfig.json
│       ├── public/
│       └── src/
│           ├── components/
│           ├── layouts/
│           └── pages/
│               ├── [lang]/
│               │   ├── index.astro
│               │   └── bmi/
│               │       └── index.astro
│               └── sitemap.xml.ts
```

## 共享包 (converter-core)

### 包含内容

| 模块 | 文件 | 用途 |
|------|------|------|
| data/units | 123 单位 + 23 分类 + convertFn | 所有品类定义 |
| data/descriptions | 1,230 SEO 描述 | 单位描述翻译 |
| data/number-base-values | 43 换算对 | Number Base value 页数据 |
| lib/units | convert, formatResult, slug 工具 | 纯转换逻辑 |
| lib/seo | hreflangTags, canonicalUrl | SEO 工具 |
| utils/i18n | t(), Lang, LANGUAGES, LANG_LABELS | 翻译 + 语言常量 |
| i18n/*.json | 12 个翻译文件 | UI 字符串 |

### 不包含内容

- ❌ Astro 组件 (Converter.astro, calculators/*.astro)
- ❌ Astro 页面 (pages/)
- ❌ React/JSX
- ❌ 样式/CSS

### 导出方式

```typescript
// 子路径导出，支持 tree-shaking
import { convert, formatResult } from 'converter-core/lib/units';
import { categories } from 'converter-core/data/units';
import { t } from 'converter-core/utils/i18n';
```

```jsonc
// converter-core/package.json
{
  "exports": {
    ".": "./src/index.ts",
    "./data/units": "./src/data/units.ts",
    "./data/descriptions": "./src/data/descriptions.ts",
    "./lib/units": "./src/lib/units.ts",
    "./lib/seo": "./src/lib/seo.ts",
    "./utils/i18n": "./src/utils/i18n.ts"
  }
}
```

### 测试

```bash
# 运行全部测试（含 converter-core 核心测试）
npm test -w converter-core

# 运行单个 app 测试
npm test -w apps/main
```

## 各站点架构

### apps/main — 全线站点 (convunit.net)

| 配置 | 值 |
|------|-----|
| 框架 | Astro 5 SSR |
| 部署 | Cloudflare Workers (Pages Functions) |
| 域名 | convunit.net |
| 路由 | 48,925 URLs |
| 内容 | 17 转换器 + 6 计算器 |

### apps/bmi — BMI 独立站 (bmi.example.com) — PoC

| 配置 | 值 |
|------|-----|
| 框架 | Astro 5 SSR |
| 部署 | Cloudflare Workers |
| 页面 | `/en/bmi/`, `/zh/bmi/` ... (12 语言) |
| 内容 | BMI 计算器 + BMI 指南 + 健康分类表 |
| 组件 | BMI.astro (来自 converter-core 包装) |
| SEO | 独立 title/description, hreflang, JSON-LD |

## 迁移步骤

### Step 1: 创建 monorepo 骨架

```bash
# 根 package.json 添加 workspaces
# 创建 packages/ 和 apps/ 目录
# 初始化 converter-core 包结构
```

**文件变更**:
- `package.json` (根) — `workspaces: ["packages/*", "apps/*"]`
- `packages/converter-core/package.json` (新建)
- `packages/converter-core/tsconfig.json` (新建)
- `packages/converter-core/src/index.ts` (新建)

### Step 2: 提取 converter-core

将以下目录移到 `packages/converter-core/src/`:
- `src/data/` → `packages/converter-core/src/data/`
- `src/i18n/` → `packages/converter-core/src/i18n/`
- `src/lib/` (不含 `__tests__`) → `packages/converter-core/src/lib/`
- `src/utils/` → `packages/converter-core/src/utils/`

更新内部 import 路径（大部分相对路径不变）。

### Step 3: 创建 apps/main 并接入 converter-core

- 将剩余 Astro 内容移到 `apps/main/`
- 所有 `../../../data/units` 等 import 改为 `converter-core/...`
- 配置 apps/main 的 tsconfig、astro.config、wrangler.toml

### Step 4: 创建 apps/bmi PoC

- 基本的 Astro SSR 项目
- 页面: `[lang]/index.astro` + `[lang]/bmi/index.astro`
- 导入 BMI.astro 组件（从主站复制或从 converter-core 包装）
- 独立 sitemap、robots.txt
- 独立 wrangler 配置 → 部署到独立 Cloudflare 项目

### Step 5: 验证

```bash
# 根级别
npm install           # 安装所有 workspaces 依赖
npm run build -w apps/main   # 主站构建
npm run build -w apps/bmi    # BMI 站构建
npm test -w converter-core   # 核心测试
npm test                     # 全部测试
```

## 技术决策

| 决策 | 选择 | 理由 |
|------|------|------|
| 包管理器 | npm workspaces | 项目已用 npm，不增加新依赖 |
| 共享包形式 | 本地 workspace 包 | 开发时 symlink，无需发布 |
| 导出策略 | 子路径 exports | 支持 tree-shaking (descriptions.ts 700KB) |
| 构建工具 | Astro 自带 | 无需 turbo/nx (项目规模不大) |
| 测试 | vitest workspace | 每个包独立配置 |
| 子站生成 | 手动复制模板 | PoC 阶段不需要脚手架 |

## 进度追踪

- [ ] `package.json` workspaces 配置
- [ ] `packages/converter-core/` 骨架
- [ ] 核心文件移动到 converter-core
- [ ] `apps/main/` 目录 + 主站配置
- [ ] 主站 import 路径更新
- [ ] 主站构建验证
- [ ] `apps/bmi/` 创建 + 构建验证
- [ ] 全部测试通过
- [ ] 文档更新
