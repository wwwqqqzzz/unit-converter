# Phase 10: Number Base SEO Value Pages + Shoe Size Landing Page

> 完成日期: 2026-06-21 | 投产: convunit.net | 新增 URL: 516 | 总 URL: 48,925

## Phase 10.1: Number Base SEO 价值页面

### 动机

Number Base 计算器原本只有 1 页/语言（工具页本身）。对比 converter 分类有几百个 value 页，Number Base 缺乏长尾 SEO 入口。本次为 Number Base 添加了 43 个精选换算对 × 12 语言 = 516 个 SEO 价值页面。

### 数据

43 个换算对分布：

| 种类 | 数量 | 示例 |
|------|------|------|
| binary → decimal | 16 | binary-1, binary-10, ..., binary-11111111 |
| decimal → binary | 15 | decimal-1, decimal-42, ..., decimal-1000 |
| decimal → hex | 8 | decimal-10, decimal-255, decimal-1024 |
| hex → decimal | 6 | hex-1, hex-a, hex-ff, hex-100 |
| decimal → octal | 3 | decimal-8, decimal-64, decimal-512 |
| octal → decimal | 3 | octal-10, octal-77, octal-100 |

### 架构

```
src/data/number-base-values.ts         ← 43 换算对定义 + 工具函数
src/pages/[lang]/[category]/[...slug].astro  ← getStaticPaths + 渲染
src/pages/sitemap.xml.ts               ← 包含 number-base value 页 URL
```

关键设计模式：
- **`[...slug].astro` 增强**：为 `number-base` 分类添加 `getStaticPaths` 生成 value 页路径
- **slug 格式**：英文 `binary-1010-to-decimal`，中文 `二进制-1010-转-十进制`
- **页面渲染**：答案 hero（黄色警示框）+ 嵌入 NumberBase 组件 + FAQ 折叠
- **JSON-LD**：BreadcrumbList + FAQPage 结构化数据

### URL 示例

```
/en/number-base/binary-1010-to-decimal/
/en/number-base/decimal-255-to-hex/
/zh/number-base/二进制-1010-转-十进制/
/zh/number-base/十六进制-ff-转-十进制/
```

### 页面结构

```
[面包屑: Home → Number Base Converter → binary → decimal]
┌─────────────────────────────────────┐
│  1010 (binary) = 10 (decimal)       │  ← 黄色 hero
└─────────────────────────────────────┘
[Number Base 计算器 — 可继续交互]
[FAQ 折叠区]
  ▸ What is 1010 in binary to decimal?
  ▸ How do you convert binary to decimal?
[5 语言切换链接]
```

---

## Phase 10.2: 鞋码 Landing Page

### 动机

鞋码是少数没有 value 页的分类（complex convertFn，无法做简单 value 页）。替代方案：将 category index 页升级为内容丰富的 Landing Page，直接在该页提供完整指南和尺码表。

### 新增组件

**`src/components/ShoeSizeChart.astro`**

国际鞋码对照表组件：
- 脚长 22cm → 31cm，每 0.5cm 递增（共 19 行）
- 6 列：cm, US Men, US Women, UK, EU, JP
- 使用 shoe 分类的 `convertFn` 实时计算所有尺码
- Neo-Brutalist 风格：黑色表头、黄色高亮常见尺码区间 (24-28cm)
- 暗色模式适配、移动端水平滚动

### i18n 内容

17 个翻译键：

```json
{
  "shoeGuide": {
    "title": "Shoe Size Conversion Guide",
    "howToMeasure": "How to Measure Your Foot",
    "howToMeasureDesc1-3": "3-step measuring guide",
    "sizeChart": "International Shoe Size Chart",
    "tips": "Shoe Size Tips",
    "tip1-3": "3 practical tips",
    "faqTitle": "Frequently Asked Questions",
    "faq1-3": "3 Q&A about US/UK/EU sizing"
  }
}
```

| 语言 | 状态 |
|------|------|
| en, zh | 完整翻译 |
| es, fr, de, ja, pt, it, ko, ru, hi, tr | 自动 fallback 英文 |

### 页面结构

```
[面包屑: Home → Shoe Size]
# 鞋码转换指南
## 如何测量脚长
  1. 脚踩白纸，后跟贴墙
  2. 标记最长脚趾
  3. 测量距离
## 国际鞋码对照表
  [表格: cm | US M | US W | UK | EU | JP]
## 鞋码小贴士
  • 下午量脚最准
  • 两只脚都要量
  • 品牌间有差异
## 常见问题
  ▸ 美码男女款区别？
  ▸ 美码英码区别？
  ▸ 欧码换美码？
## 单位换算 (保留原有 pair grid)
```

---

## 项目统计

| 指标 | 之前 | 之后 |
|------|------|------|
| 总 URL | 29,473 | **48,925** |
| 分类 | 23 | 23 |
| Number Base 页/语言 | 1 | **44** (1 index + 43 value) |
| 鞋码内容 | 纯 pair grid | Landing Page + 尺码表 |
| git commits | `ac92dda` | `7bbe14e`, `de872aa` |
| 构建 | ✅ | ✅ |
| 测试 | 107 passing | 107 passing |

## Git 记录

| Commit | 信息 |
|--------|------|
| `7bbe14e` | feat: add number base SEO value pages (516 pages across 12 languages) |
| `de872aa` | feat: shoe size landing page with size chart and guide |

## 下一步

1. **多站群架构** — 提取 `converter-core` 共享包，创建 BMI/Age 独立站
2. **重新提交 sitemap** — Google Search Console 需要更新到 48,925 URLs
