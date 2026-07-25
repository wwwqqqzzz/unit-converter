# Phase 17: SEO URL 规范化 — Trailing-Slash 301 + Middleware 强制

> 日期: 2026-07-25 | 状态: ✅ 已部署到生产环境 | 测试: 87/87 通过 | 涉及文件: 7
>
> **生产部署**: commit `cea0cb7` → [convunit.net](https://convunit.net) · Preview: https://bb2bb018.unit-convert-dd0.pages.dev · Custom domain: `convunit.net`

## 背景

审计 GSC 数据时发现，ConvUnit 存在 slashless URL 变体（如 `/en/force?from=n&to=lbf`）与带尾部斜杠的变体（如 `/en/force/?from=n&to=lbf`）同时出现在搜索数据中，造成重复信号风险：搜索引擎可能将两者视为独立页面，稀释索引权重并产生 canonical 混乱。

**根本原因**：`astro.config.mjs` 中 `trailingSlash: 'always'` 的配置在 Astro 路由层 **之前** 拒绝了不带斜杠的请求，直接返回 404，绕过了 SSR middleware 的 301 重定向逻辑。要让 middleware 生效，必须将该配置改为 `'ignore'`，使 Astro 先将请求交给 middleware，由 middleware 统一发出 301。

### 问题链路

```
用户请求: GET /en/force?from=n&to=lbf
    │
    ▼
Astro trailingSlash: 'always'  ← 拦截：路径不含尾部斜杠 → 404
    │
    ▼ (middleware 永远不会执行)
```

修复后：

```
用户请求: GET /en/force?from=n&to=lbf
    │
    ▼
Astro trailingSlash: 'ignore'  ← 不拦截，传递给 middleware
    │
    ▼
middleware: needsTrailingSlashRedirect() = true → 301 → Location: /en/force/?from=n&to=lbf
```

## 变更内容

### 17.1 Astro 配置修改 ✅

**文件**: `apps/main/astro.config.mjs`

| 配置项 | 修改前 | 修改后 |
|--------|--------|--------|
| `trailingSlash` | `'always'` | `'ignore'` |

`'ignore'` 让 Astro 不在路由层拦截尾部斜杠，将控制权交给 middleware。

### 17.2 Middleware 尾部斜杠 301 重定向 ✅

**文件**: `apps/main/src/middleware.ts`

新增两个导出函数 + 在 `onRequest` 处理器中插入重定向逻辑：

#### `needsTrailingSlashRedirect(pathname: string): boolean`

判断路径是否需要 301 重定向。排除规则：

| 排除条件 | 示例 | 原因 |
|----------|------|------|
| 已有尾部斜杠 | `/en/force/` | 正常 |
| 根路径 `/` | `/` | 已是最终形态 |
| `/api` 和 `/api/*` | `/api/convert` | API 端点无斜杠惯例 |
| 含扩展名 | `/sitemap.xml`, `/robots.txt`, `/favicon.svg` | 静态资源 |
| `/_astro` 和 `/_astro/*` | `/_astro/main.abc123.js` | CDN 资源 |
| `/sitemap.xml` | `/sitemap.xml` | 已显式排除 |
| `/sitemap-root.xml` | `/sitemap-root.xml` | 根 sitemap |
| `/sitemap/{lang}.xml` | `/sitemap/en.xml` | 语言 sitemap |

其他所有路径（`/en`, `/en/length`, `/en/length/cm-to-inch` 等）均返回 `true`。

#### `trailingSlashRedirectLocation(pathname, search): string`

生成 301 Location 值：`pathname + '/' + search`。保留 query 参数不变。

#### onRequest 中的执行顺序

```
1. needsTrailingSlashRedirect() 检查 → 301 if true
2. next() → SSR 渲染
3. Cache-Control 头设置（HTML / 静态资源 / sitemap+robots）
4. 安全头设置
```

重定向在 SSR 之前执行，避免不必要的渲染开销。

#### Cache-Control 扩展

`sitemap` 和 `robots.txt` 的缓存头从条件判断扩展为覆盖所有 sitemap 变体：

| 路径 | Cache-Control |
|------|---------------|
| `/sitemap.xml` | `public, max-age=86400` |
| `/sitemap-root.xml` | `public, max-age=86400` |
| `/sitemap/{lang}.xml` | `public, max-age=86400` |
| `/robots.txt` | `public, max-age=86400` |

### 17.3 Robots.txt 默认域名修复 ✅

**文件**: `apps/main/src/pages/robots.txt.ts`

| 修改前 | 修改后 |
|--------|--------|
| `import.meta.env.SITE \|\| 'https://unit-converter.pages.dev'` | `import.meta.env.SITE \|\| 'https://convunit.net'` |

修复 fallback 域名从临时 Pages 域名改为实际域名。

### 17.4 Middleware 单元测试 ✅

**文件**: `apps/main/src/__tests__/middleware.test.ts` (新建)

13 个测试用例，覆盖 `needsTrailingSlashRedirect` 和 `trailingSlashRedirectLocation`：

| 测试组 | 用例数 | 覆盖场景 |
|--------|--------|----------|
| `needsTrailingSlashRedirect` | 7 | 内容路径 301、已有斜杠、根路径、API、扩展名、_astro、sitemap 变体 |
| `trailingSlashRedirectLocation` | 6 | query 参数保留、无 query、嵌套路径、多次前导斜杠 open-redirect 规范化 |

> 多次前导斜杠路径（如 `//en/force/`、`///en/force/`）的规范化归一化测试确保重定向前路径已被清理，防止开放重定向。

### 17.5 Vitest 配置 ✅

**文件**: `apps/main/vitest.config.ts` (新建)

为 `apps/main` 配置独立 Vitest，匹配 `src/**/*.test.ts`。

### 17.6 Package.json 脚本 ✅

**文件**: `apps/main/package.json`

新增 `"test": "vitest run"` 脚本。

## 本地验证结果

### 构建

| 检查项 | 结果 |
|--------|------|
| `npm run build` (apps/main) | ✅ 成功，有已知 SSR 警告 |
| 已知警告 | `getStaticPaths is ignored for SSR dynamic routes` — 正常，SSR 模式下预期行为 |

### 测试

| 测试套件 | 用例数 | 结果 |
|----------|--------|------|
| converter-core (74 转换测试) | 74 | ✅ 全部通过 |
| apps/main middleware (13 重定向+安全测试) | 13 | ✅ 全部通过 |
| **合计** | **87** | **✅ 全部通过** |

### 本地运行时验证

| 验证项 | 请求 | 预期 | 结果 |
|--------|------|------|------|
| 斜杠重定向 | `GET /en/force?from=n&to=lbf` | 301 → `/en/force/?from=n&to=lbf` | ✅ |
| 已有斜杠不重定向 | `GET /en/force/` | 200 | ✅ |
| robots.txt | `GET /robots.txt` | 200 | ✅ |
| sitemap.xml | `GET /sitemap.xml` | 200 | ✅ |
| sitemap-root.xml | `GET /sitemap-root.xml` | 200 | ✅ |
| sitemap/en.xml | `GET /sitemap/en.xml` | 200 | ✅ |

### Cache-Control 验证

| 路径 | Cache-Control |
|------|---------------|
| `/sitemap.xml` | `public, max-age=86400` ✅ |
| `/sitemap-root.xml` | `public, max-age=86400` ✅ |
| `/sitemap/en.xml` | `public, max-age=86400` ✅ |
| `/robots.txt` | `public, max-age=86400` ✅ |

## 生产环境验证 (2026-07-25)

部署 commit `cea0cb7` 后，通过自定义域名 `convunit.net` 进行了完整的生产验证。

| 验证项 | 请求 | 预期 | 结果 |
|--------|------|------|------|
| slashless query → 301 | `GET /en/force?from=n&to=lbf` | 301, Location: `/en/force/?from=n&to=lbf` (相对路径斜杠) | ✅ |
| slash page → 200 | `GET /en/force/` | 200 | ✅ |
| open-redirect 安全 | `GET //evil.com/phish` | safe same-origin `/evil.com/phish/` | ✅ |
| robots.txt | `GET /robots.txt` | 200 | ✅ |
| root sitemap | `GET /sitemap.xml` | 200 | ✅ |
| language sitemap | `GET /sitemap/en.xml` | 200 | ✅ |

### Cache-Control 生产传播

首次自定义域名检查时，语言 sitemap `/sitemap/en.xml` 仍返回 Pages 默认的 `max-age=0`；根 sitemap 与 robots 已是 `max-age=86400`。经过 Cloudflare CDN 配置传播后，`/sitemap/en.xml` 和 `/sitemap/zh.xml` 也返回预期的 `public, max-age=86400`。

> **说明**: sitemap 变体（`/sitemap.xml`、`/sitemap-root.xml`、`/sitemap/{lang}.xml`）和 `/robots.txt` 是 prerendered 的静态资源，不经过 SSR middleware。这些文件的 `Cache-Control` 头由 `apps/main/public/_headers` 提供——middleware 仅控制 SSR 请求的响应头，无法覆盖 Pages 对静态资产的默认缓存行为。

## 变更文件汇总

| 文件 | 变更类型 | 说明 |
|------|----------|------|
| `apps/main/astro.config.mjs` | 修改 | `trailingSlash: 'always'` → `'ignore'` |
| `apps/main/src/middleware.ts` | 修改 | 新增 301 重定向逻辑 + sitemap cache 扩展 |
| `apps/main/src/pages/robots.txt.ts` | 修改 | fallback 域名 `unit-converter.pages.dev` → `convunit.net` |
| `apps/main/src/__tests__/middleware.test.ts` | 新建 | 13 个 middleware 单元测试（含多次前导斜杠 open-redirect 规范化） |
| `apps/main/vitest.config.ts` | 新建 | apps/main 独立 Vitest 配置 |
| `apps/main/package.json` | 修改 | 新增 `test` 脚本 |
| `apps/main/public/_headers` | 修改 | 新增 sitemap/robots 静态资源 `max-age=86400` 规则（middleware 不控制静态资产响应头） |

## 已知风险

| 风险 | 严重程度 | 说明 |
|------|----------|------|
| `trailingSlash: 'ignore'` 改变了 Astro 行为 | 低 | 所有实际内容路由已有尾部斜杠；middleware 301 保证新请求自动规范化 |
| SSR 警告 `getStaticPaths is ignored` | 信息 | 已存在，非本次引入；SSR 模式下 `getStaticPaths` 仅用于 SEO hint，实际路由由 Workers SSR 处理 |
| 旧 URL 的 GSC 索引数据 | 低 | 部署后 Google 会将斜杠/非斜杠版本合并为一个 canonical；可能需要 1-2 周索引稳定 |

## 部署后用户操作步骤

### 1. 生产验证（部署后已完成）

以下验证已在 2026-07-25 通过自定义域名 `convunit.net` 完成（见上方「生产环境验证」）。原始验证命令保留供参考：

```bash
# 1. 验证 301 重定向（slashless → slash with query）
curl -I "https://convunit.net/en/force?from=n&to=lbf"
# 已验证: HTTP/1.1 301, Location: /en/force/?from=n&to=lbf

# 2. 验证正常页面
curl -I "https://convunit.net/en/force/"
# 已验证: HTTP/1.1 200

# 3. 验证 open-redirect 安全（多次前导斜杠规范化）
curl -I "https://convunit.net//evil.com/phish"
# 已验证: 301 → /evil.com/phish/ (safe same-origin)

# 4. 验证 sitemap 缓存
curl -I "https://convunit.net/sitemap.xml"
# 已验证: Cache-Control: public, max-age=86400 (经传播后)

# 5. 验证 robots.txt
curl -I "https://convunit.net/robots.txt"
# 已验证: HTTP/1.1 200

# 6. 运行完整测试
npm test                     # converter-core 74 tests
cd apps/main && npm test     # middleware 13 tests
# 预期: 87/87 通过
```

### 2. Google Search Console 验证（部署后 3-7 天）

GSC 变化需要 3-7 天才能反映，以下步骤仍需用户手动执行：

1. 登录 [Google Search Console](https://search.google.com/search-console)
2. 选择 `convunit.net` 资源
3. **URL 检查** → 输入 `https://convunit.net/en/force?from=n&to=lbf`
   - 预期：显示 301 → `/en/force/?from=n&to=lbf`
4. **覆盖范围报告** → 检查是否仍有 "已索引，但被 robots.txt 阻止" 或重复页面警告
5. **Sitemap** → 确认 sitemap 状态仍为 "成功"

**注意**: 不需要使用 Indexing API 手动推送。Google 会在正常爬取周期内自动发现 301 重定向并合并 canonical。通常 1-2 周内 GSC 会反映变化。
