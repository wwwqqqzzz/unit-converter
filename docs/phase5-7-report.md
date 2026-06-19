# Phase 5-7 实施报告：AdSense 集成 + 部署上线 + 域名配置

> 日期: 2026-06-20 | 状态: ✅ 全部完成

## 概要

| Phase | 内容 | 状态 |
|-------|------|------|
| **5** | AdSense 集成（条件渲染、3广告位、auto-ads） | ✅ |
| **7** | 部署 + 域名 + 性能优化 + SEO 提交 | ✅ |

---

## Phase 5: AdSense 集成

### 广告位布局

| 位置 | 页面类型 | 格式 | 说明 |
|------|----------|------|------|
| top | 首页、分类页 | auto + auto-ads脚本 | 加载 auto-ads 脚本（仅此位置加载一次） |
| middle | 详情页、分类页 | auto 响应式 | 自然断点，公式阅读后 |
| bottom | 详情页、分类页 | horizontal 横幅 | 内容尾声 |

### 条件渲染机制

```astro
// AdSense.astro 核心逻辑
const PUBLISHER_ID = import.meta.env.PUBLIC_ADSENSE_ID;

{PUBLISHER_ID ? (
  <div class={`ad-container ad-${position}`}>
    {position === 'top' && <script src="...adsbygoogle.js?client={PUBLISHER_ID}" />}
    <ins class="adsbygoogle" data-ad-client={PUBLISHER_ID} data-ad-slot={slot} data-ad-format="auto" />
  </div>
) : null}
```

**关键设计决策**:
- 无 Publisher ID → 零 HTML 输出（不渲染任何 DOM 元素）
- 防止布局偏移（CLS = 0）
- auto-ads 脚本仅在 `position === 'top'` 加载一次，避免重复请求
- 支持三个独立 ad-slot 环境变量：`PUBLIC_ADSENSE_SLOT_TOP`, `MIDDLE`, `BOTTOM`

### 广告出现位置

| 页面 | top | middle | bottom | 总广告位 |
|------|-----|--------|--------|----------|
| 首页 (/en/) | ✅ | — | — | 1 |
| 分类页 (/en/weight/) | ✅ | ✅ | ✅ | 3 |
| 详情页 (/en/weight/kg-to-lb/) | — | ✅ | ✅ | 2 |

### 构建命令

```bash
PUBLIC_ADSENSE_ID=ca-pub-4967918867986181 npm run build
```

7,620 个内容页面包含广告代码（sitemap/robots 等非内容页面不含广告）。

---

## Phase 7: 部署 + 域名 + 性能优化

### 7.1 域名选择

**过程**:
- 用户在 Namecheap 误购 `convertunit.it.com`（实际是 `.it.com` 子域名服务，非独立域名）
- 建议退款（5天窗口内）
- 域名搜索: `.com` 全部被占用，检查 `.net`/`.cc` 等
- 最终选择: **`convunit.net`**
  - `.net` 信任度高，SEO 友好
  - 短、好记、含义清晰（conv + unit）
  - Cloudflare Registrar ~$10/yr
  - 域名和 CDN 同一家，DNS 配置自动化

### 7.2 Cloudflare Pages 部署

| 项 | 值 |
|---|---|
| 项目名 | unit-convert |
| 临时 URL | unit-convert-dd0.pages.dev |
| 自定义域名 | convunit.net |
| 部署方式 | `wrangler pages deploy dist`（直接上传） |
| wrangler 版本 | v4.103.0 |
| Account ID | a82e169d7b3eb1c5f273e30bbf96ceb4 |
| 构建输出 | 8,041 页面 + _headers + _redirects + favicon.svg |

### 7.3 性能优化

#### `public/_headers` — Cloudflare Pages 缓存 + 安全头

```
/*.html
  Cache-Control: public, max-age=3600, stale-while-revalidate=86400
  X-Content-Type-Options: nosniff
  X-Frame-Options: DENY
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()

/*/
  Cache-Control: public, max-age=3600, stale-while-revalidate=86400
  ...安全头同上

/_astro/*
  Cache-Control: public, max-age=31536000, immutable

/sitemap.xml
  Cache-Control: public, max-age=86400
/robots.txt
  Cache-Control: public, max-age=86400
```

**stale-while-revalidate=86400 策略**:
- 用户首次访问: 正常请求
- 缓存期内 (1h): 直接返回缓存
- 缓存过期: 立即返回旧版本，后台静默更新
- 效果: 回访用户 TTFB 从 ~0.45s 降到 ~0.38s

#### `public/_redirects`

```
/ /en/ 302
```

#### BaseLayout.astro 优化

| 优化 | 实现 |
|------|------|
| 字体预加载 | `<link rel="preconnect" href="fonts.googleapis.com">` + `<link rel="preload" href="...fonts...css" as="style">` |
| 主题色 | `<meta name="theme-color" content="#ffe033">` |
| Favicon | `<link rel="icon" type="image/svg+xml" href="/favicon.svg">` |
| favicon.svg | Neo-brutalist 黄色 U 字（270 bytes, 无外部请求） |

#### CDN 内置优化

- HTTP/2 自动
- Brotli 压缩自动
- H3/QUIC (`alt-svc: h3=":443"; ma=86400`) 自动
- 全球边缘节点

### 7.4 Google Search Console

| 步骤 | 状态 |
|------|------|
| 域名资源验证 (DNS TXT) | ✅ |
| 网址前缀验证 (https://convunit.net) | ✅ |
| Sitemap 提交 (`sitemap.xml`) | ✅ |
| URLs discovered | 8,041 |
| 状态 | 成功 |

### 7.5 构建验证

```
✓ 8041 page(s) built
✓ 7621 files uploaded (425 already cached)
✓ Deployment complete!
```

**线上验证**:
```bash
# 缓存头
$ curl -sI https://convunit.net/en/ | grep cache-control
cache-control: public, max-age=3600, stale-while-revalidate=86400

# 安全头
$ curl -sI https://convunit.net/en/ | grep -i x-frame
x-frame-options: DENY

# 静态资源缓存
$ curl -sI https://convunit.net/_astro/xxx.css | grep cache-control
cache-control: public, max-age=31536000, immutable

# 重定向
$ curl -sI https://convunit.net/ | grep -i location
location: /en/

# TTFB
$ curl -sL -w "TTFB: %{time_starttransfer}s\n" https://convunit.net/en/weight/kg-to-lb/ -o /dev/null
TTFB: 0.379782s (缓存后)

# 广告渲染
$ curl -sL https://convunit.net/en/ | grep -o 'ca-pub-[^"]*'
ca-pub-4967918867986181
```

---

## 文件变更清单

| 文件 | 变更类型 | 说明 |
|------|----------|------|
| `src/components/AdSense.astro` | 重写 | 3 广告位，条件渲染，auto-ads 脚本 |
| `src/layouts/BaseLayout.astro` | 修改 | 字体预加载、theme-color、favicon |
| `astro.config.mjs` | 修改 | site URL → convunit.net |
| `public/_headers` | 新增 | 缓存策略 + 安全头 |
| `public/_redirects` | 新增 | 根路径重定向 |
| `public/favicon.svg` | 新增 | Neo-brutalist 黄色 U 字 |
| `docs/roadmap.md` | 更新 | Phase 5+7 完成 |
| `docs/changelog.md` | 更新 | Phase 5+7 日志 |
| `README.md` | 重写 | 反映当前线上状态 |

---

## Git 提交记录

| Commit | 说明 |
|--------|------|
| `9a7fc16` | deploy: production domain convunit.net |
| `8df7950` | perf: caching, security headers, preloads, favicon |
| `af308ae` | feat: AdSense optimization — auto-ads, slot positions, conditional rendering |

---

## 下一步

| 优先级 | 任务 | 预估 |
|--------|------|------|
| P0 | AdSense 审核（1-7天） | 等待 Google |
| P1 | 加西班牙语 (es) | ~8h → ~12,000 页 |
| P2 | Google Analytics 4 | ~2h |
| P3 | 多站群架构 | ~20h |