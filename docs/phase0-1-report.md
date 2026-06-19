# Phase 0 & Phase 1 实施报告

> 日期: 2026-06-19 | 状态: ✅ 完成

## Phase 0: 架构重构

### 问题

原始架构有 3 个硬编码瓶颈，导致添加新分类需要修改多个文件：

1. **路由硬编码** — `src/pages/[lang]/length/[...slug].astro` 目录名 `length` 和代码 `catId = 'length'` 写死
2. **Converter 组件硬编码** — 客户端 JS 写死了 8 个 length 的 conversion rates
3. **下拉限制** — `<select>` 只显示当前 pair 的 2 个单位，无法切换

### 解决方案

| 问题 | 解决方案 | 文件 |
|------|---------|------|
| 路由硬编码 | 删除 `length/` 目录，创建 `[category]/` 动态路由 | `[...slug].astro`, `index.astro` |
| Converter 硬编码 | `data-rates`/`data-all-units`/`data-custom-convert` 属性传递数据 | `Converter.astro` |
| 下拉限制 | `allUnits.map()` 遍历渲染所有单位选项 | `Converter.astro` |
| 非线性转换 | `Category.convertFn` 可选字段 + 客户端 Celsius 中转策略 | `units.ts`, `Converter.astro` |
| 图标硬编码 | `CATEGORY_ICONS` 映射表 | `units.ts`, `index.astro` |
| 常用值单一 | `CATEGORY_VALUES` 按分类定制 + `getCommonValues()` | `units.ts` |

### 文件变更清单

| 操作 | 文件 |
|------|------|
| 修改 | `src/data/units.ts` — 新增 `convertFn`, `CATEGORY_ICONS`, `CATEGORY_VALUES` |
| 修改 | `src/lib/units.ts` — `convert()` 支持 `convertFn`, 新增 `getCommonValues()` |
| 修改 | `src/components/Converter.astro` — 动态 data 属性 + 全分类下拉 + 温度转换 |
| 修改 | `src/pages/[lang]/index.astro` — `CATEGORY_ICONS` 替代硬编码 |
| 修改 | `src/i18n/en.json` — nav 扩展 |
| 修改 | `src/i18n/zh.json` — nav 扩展 |
| 新增 | `src/pages/[lang]/[category]/[...slug].astro` — 通用动态路由 |
| 新增 | `src/pages/[lang]/[category]/index.astro` — 通用分类首页 |
| 新增 | `src/lib/__tests__/convert.test.ts` — 测试套件 |
| 删除 | `src/pages/[lang]/length/[...slug].astro` — 硬编码路由 |
| 删除 | `src/pages/[lang]/length/index.astro` — 硬编码首页 |

### 验证

- `npm run build`: 621 页面 ✅
- `npm run dev`: 无错误 ✅
- `npx vitest run`: 24/24 测试通过 ✅
- 新增分类只需编辑 `units.ts` ✅

---

## Phase 1: P0 分类 (Weight, Temperature, Data)

### 新增分类详情

#### Weight / 重量

| id | en | zh | symbol | toBase (grams) |
|----|-----|-----|--------|----------------|
| mg | Milligrams | 毫克 | mg | 0.001 |
| g | Grams | 克 | g | 1 |
| kg | Kilograms | 千克 | kg | 1000 |
| tonne | Metric Tons | 公吨 | t | 1000000 |
| oz | Ounces | 盎司 | oz | 28.3495 |
| lb | Pounds | 磅 | lb | 453.592 |
| st | Stones | 英石 | st | 6350.29 |
| jin | Jin (Chinese) | 斤 | 斤 | 500 |

8 单位 → 28 对 × 11 常用值 × 2 语言 = **616 页面**

#### Temperature / 温度 (非线性)

| id | en | zh | symbol |
|----|-----|-----|--------|
| c | Celsius | 摄氏度 | °C |
| f | Fahrenheit | 华氏度 | °F |
| k | Kelvin | 开尔文 | K |

转换公式 (通过 `convertFn`):
- °C → °F: `celsius * 9/5 + 32`
- °C → K: `celsius + 273.15`
- °F → °C: `(fahrenheit - 32) * 5/9`
- K → °C: `kelvin - 273.15`

3 单位 → 3 对 × 11 常用值 × 2 语言 = **66 页面**

#### Data Storage / 数据存储

| id | en | zh | symbol | toBase (bytes) |
|----|-----|-----|--------|----------------|
| bit | Bits | 比特 | bit | 0.125 |
| b | Bytes | 字节 | B | 1 |
| kb | Kilobytes | 千字节 | KB | 1024 |
| mb | Megabytes | 兆字节 | MB | 1,048,576 |
| gb | Gigabytes | 千兆字节 | GB | 1,073,741,824 |
| tb | Terabytes | 太字节 | TB | 1,099,511,627,776 |
| pb | Petabytes | 拍字节 | PB | 1,125,899,906,842,624 |
| kbit | Kilobits | 千比特 | Kbit | 128 |
| mbit | Megabits | 兆比特 | Mbit | 131,072 |
| gbit | Gigabits | 千兆比特 | Gbit | 134,217,728 |

10 单位 → 45 对 × 11 常用值 × 2 语言 = **990 页面**

### 页面统计

| 分类 | 单位 | 对数 | 页面 |
|------|------|------|------|
| Length | 8 | 28 | 616 |
| Weight | 8 | 28 | 616 |
| Temperature | 3 | 3 | 66 |
| Data | 10 | 45 | 990 |
| **合计** | **29** | **104** | **~2,288** |

实际 build 产出: **2,299 页面** (含首页、sitemap 等)

### 文件变更清单

| 操作 | 文件 |
|------|------|
| 修改 | `src/data/units.ts` — 新增 Weight、Temperature、Data 三个分类 |
| 修改 | `src/i18n/en.json` — nav 新增 weight/temperature/data |
| 修改 | `src/i18n/zh.json` — nav 新增 重量/温度/数据存储 |
| 修改 | `src/lib/__tests__/convert.test.ts` — 新增 15 个测试 |

### 验证

- `npm run build`: 2,299 页面 ✅
- `npm run dev`: 无错误 ✅
- `npx vitest run`: 39/39 测试通过 ✅
- 温度转换测试: 0°C=32°F, 100°C=212°F, -40°F=-40°C ✅
- 重量转换测试: 1kg=1000g, 1lb≈0.454kg ✅
- 数据转换测试: 1KB=1024B, 1GB=1024MB, 8bit=1B ✅

---

## 修复记录

- 修复 `Converter.astro` 注释中 `<script>` 字面量导致 esbuild/Vite dev server 依赖扫描报错 `Expected ";" but found "reads"` 的问题。将 `via an inline <script> that reads` 改为 `via an inline script block that reads`。

---

## 下一步: Phase 2 (Area, Volume)

按照路线图推荐执行顺序，Phase 5 (AdSense优化) 和 Phase 7 (部署) 优先级更高：

```
Phase 0  架构重构 ✅
Phase 1  P0分类 ✅
    ↓
Phase 5  AdSense优化 (开始赚钱)
Phase 7  部署+监控 (上线 Cloudflare Pages)
    ↓
Phase 2  P1分类 (Area, Volume)
Phase 3  P2分类 (Speed, Time, Pressure, Energy)
Phase 4  SEO+内容充实
Phase 6  多站群架构
```