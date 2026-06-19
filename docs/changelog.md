# 实施日志

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

### 下一步
- Phase 0: 架构重构（必须先做）