# Phase 9: 5 Interactive Calculators

> 完成日期: 2026-06-21 | 投产: convunit.net | 类型计算器: 5

## 概览

Phase 9 在当前 convunit.net 站上新增了 5 个交互式计算器工具，扩展了网站从纯转换器到通用工具平台的定位。Category 类型系统引入 `type: 'calculator'` 支持非转换工具。

### 新增计算器

| 计算器 | URL | 专长 |
|--------|-----|------|
| 🔢 数字进制 | `/en/number-base/` | Bin/Oct/Dec/Hex 互转，4种表示法同时显示 |
| ⏰ Unix 时间戳 | `/en/timestamp/` | 时间戳↔日期双向，本地/UTC 同步，即时刷新 |
| 💯 百分比计算 | `/en/percentage/` | 3 模式：折扣/增长/占比，公式显示 |
| ⚕️ BMI 计算 | `/en/bmi/` | kg/lb + cm/ft 切换，WHO 分类，彩色指示器 |
| 🎂 年龄计算 | `/en/age/` | 年月日精确，总天数/周数/月数，下个生日倒计时 |

### 设计模式

每个计算器是一个独立的 Astro 组件 (`src/components/calculators/*.astro`)：

1. **接收 `lang` prop** → 组件内部映射 UI 文本、按钮标签、说明文字
2. **内联 `<script>`** → 所有交互逻辑纯客户端 JS，用 `input` 事件实时计算
3. **Neo-Brutalist 风格** → 黑色 hero 卡片、3px 硬边框、阴影、`#ffe033` 黄色强调
4. **独立 SEO** → `calcMeta` 提供每个计算器在各语言下的 title/description

### 架构变更

```typescript
// Category 接口新增 type 字段
interface Category {
  id: string;
  type?: 'converter' | 'calculator';  // 默认 'converter'
  name: Record<string, string>;
  baseUnitId?: string;                 // calculator 类型无需
  units?: Unit[];                      // calculator 类型无需
  convertFn?: (v: number, f: string, t: string) => number;
}
```

#### 路由行为对比

| 方面 | `converter` | `calculator` |
|------|-------------|--------------|
| getStaticPaths | 生成所有 pair/value 页 | 只生成 index 页 |
| `[...slug].astro` | 渲染转换器/值页 | 运行时 302 → index |
| `[category]/index.astro` | 转换器 UI | 对应计算器组件 |
| sitemap 条目 | pair pages + index | 只有 index |

#### 计算器组件映射 (index.astro)

```astro
{isCalculator && catId === 'number-base' && <NumberBase lang={lang} />}
{isCalculator && catId === 'timestamp' && <Timestamp lang={lang} />}
{isCalculator && catId === 'percentage' && <Percentage lang={lang} />}
{isCalculator && catId === 'bmi' && <BMI lang={lang} />}
{isCalculator && catId === 'age' && <Age lang={lang} />}
```

### i18n

每个语言文件新增 `calc.*` keys:

```json
{
  "calc": {
    "number-base": { "title": "Number Base Converter", "desc": "..." },
    "timestamp": { "title": "Unix Timestamp Converter", "desc": "..." },
    "percentage": { "title": "Percentage Calculator", "desc": "..." },
    "bmi": { "title": "BMI Calculator", "desc": "..." },
    "age": { "title": "Age Calculator", "desc": "..." }
  }
}
```

### 部署统计

| 指标 | 值 |
|------|-----|
| 新增页面 | 60 (5 calculators × 12 languages) |
| 总页面 | 29,461 |
| 新增文件 | 5 个 .astro 组件 |
| 修改文件 | units.ts, index.astro, [...slug].astro, sitemap.xml.ts, lib/units.ts, 12× i18n |
| 构建状态 | 0 errors |
| 测试 | 74/74 passing |
| Git | `efd053b` (Phase 9: 5 interactive calculators) |

### 流量潜力评估

| 计算器 | 搜索意图 | 月搜索量 (预估) | 竞争度 |
|--------|---------|----------------|--------|
| BMI | 健康自查 | 极高 (全球前100) | 高但长尾丰富 |
| Age | 休闲/社交 | 极高 (how old am i) | 中 |
| Percentage | 日常购物 | 高 | 高 |
| Number Base | 程序员 | 中 | 低 |
| Timestamp | 程序员/运维 | 中 | 低 |

### 已知限制

1. **计算器组件映射** — 硬编码 `&&` 链，不是注册表模式。添加新计算器需 3 步修改
2. **No unit pairs** — 计算器没有 value 页面，SEO 页面数涨幅有限（仅 60 页/5计算器）
3. **Currency 延迟** — 需要免费 API，尚未调研可用方案

### 下一步

1. 调研免费汇率 API（exchangerate-api.com, frankfurter.app, exchangerate.host）
2. 在当前站添加汇率计算器（独立计算器类别，非转换器）
3. 可选：为 number-base 添加 SE0 价值页面（"binary-42-to-decimal"）
4. 提交更新后 sitemap 到 Google Search Console