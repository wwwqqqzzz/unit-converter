# Phase 9: 6 Interactive Calculators（含汇率转换器）

> 完成日期: 2026-06-21 | 投产: convunit.net | 类型计算器: 6

## 概览

Phase 9 在当前 convunit.net 站上新增了 **6 个交互式计算器工具**（含汇率转换器），扩展了网站从纯转换器到通用工具平台的定位。Category 类型系统引入 `type: 'calculator'` 支持非转换工具。

### 新增计算器

| 计算器 | URL | 专长 |
|--------|-----|------|
| 🔢 数字进制 | `/en/number-base/` | Bin/Oct/Dec/Hex 互转，4种表示法同时显示 |
| ⏰ Unix 时间戳 | `/en/timestamp/` | 时间戳↔日期双向，本地/UTC 同步，即时刷新 |
| 💯 百分比计算 | `/en/percentage/` | 3 模式：折扣/增长/占比，公式显示 |
| ⚕️ BMI 计算 | `/en/bmi/` | kg/lb + cm/ft 切换，WHO 分类，彩色指示器 |
| 🎂 年龄计算 | `/en/age/` | 年月日精确，总天数/周数/月数，下个生日倒计时 |
| 💱 汇率转换 | `/en/currency/` | Frankfurter API SSR 嵌入，30种货币，实时换算 |

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
| 新增页面 | 72 (6 calculators × 12 languages) |
| 总页面 | 29,473 |
| 新增文件 | 6 个 .astro 组件 (含 Currency.astro) |
| 修改文件 | units.ts, index.astro, [...slug].astro, sitemap.xml.ts, lib/units.ts, 12× i18n |
| 构建状态 | 0 errors |
| 测试 | 74/74 passing |
| Git (Phase 9a) | `efd053b` (5 calculators) |
| Git (Phase 9b) | `2ada6eb` (Currency.astro) |

### 流量潜力评估

| 计算器 | 搜索意图 | 月搜索量 (预估) | 竞争度 |
|--------|---------|----------------|--------|
| BMI | 健康自查 | 极高 (全球前100) | 高但长尾丰富 |
| Age | 休闲/社交 | 极高 (how old am i) | 中 |
| Percentage | 日常购物 | 高 | 高 |
| Number Base | 程序员 | 中 | 低 |
| Timestamp | 程序员/运维 | 中 | 低 |

### 汇率转换器 (Phase 9.1 — 追加)

#### 数据流架构

```
用户请求 → Workers SSR → fetch(Frankfurter) → 注入 <script id="cur-data"> → HTML
                                                       │
                                              CF Edge Cache (3600s)
                                                       │
                                              Client JS → 无 API 调用
```

#### 关键设计决策

| 决策 | 选择 | 原因 |
|------|------|------|
| API | Frankfurter v2 | ECB 数据、无 key、不限流、1.6k stars |
| 货币数 | 30 种 | 常用货币，select 可用首字母跳转 |
| 数据流 | SSR-Embedded | 零客户端请求、CF 缓存、无 CORS 问题 |
| UI 语言 | en + zh 完整翻译 | 其他语言 fallback 英文货币名 |
| 缓存兜底 | 5s SSR timeout | API 异常时优雅报错 |

#### 组件交互流程

1. 用户选择 source currency（默认 USD）和 target currency（默认 EUR）
2. 输入金额 → `input` 事件 → `amount / rates[from] * rates[to]`
3. 结果格式化：JPY/KRW/VND/IDR 0 位小数，其他 2 位
4. Swap 按钮：调换 from/to，重新计算
5. 快捷按钮：USD→EUR/JPY/GBP/CNY/AUD/CAD 一键切换

### 已知限制

1. **计算器组件映射** — 硬编码 `&&` 链，不是注册表模式。添加新计算器需 3 步修改
2. **No unit pairs** — 计算器没有 value 页面，SEO 页面数涨幅有限（仅 72 页/6计算器）
3. **汇率每日更新** — Frankfurter 每日 16:00 CET 更新，非实时

### 下一步

1. 为 number-base 添加 SEO 价值页面（"binary-42-to-decimal" 长尾页）
2. 鞋码独立 Landing Page
3. 多站群架构（BMI/Age 独立站）