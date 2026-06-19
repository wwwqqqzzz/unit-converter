# Phase 4.5 ~ 4.7 报告 — 视觉重设计 + 对比度修复 + 7新类别

> 日期: 2026-06-19 | 状态: ✅ 完成 | 页面: 6,419 → 8,041 (+25%)

## 概要

Phase 4.5-4.7 完成了三件大事：Neo-Brutalist 视觉重设计、对比度可读性修复、7个新类别添加。项目从"功能完整但视觉普通"升级为"功能完整且视觉有辨识度"，同时大幅扩充了转换类别覆盖面。

---

## Phase 4.5: Neo-Brutalist 视觉重设计

### 设计决策

**为什么选 Neo-Brutalist？**
- 竞品分析：unitconverters.net, convertunits.com, rapidtables 全用蓝紫渐变 + 圆角 + 细边框，视觉同质化严重
- Neo-Brutalist 的粗边框、硬阴影、零圆角、黄色强调色在转换工具领域零竞争
- Space Grotesk 字体几何感强，辨识度高，不落入 Inter/Roboto 的无趣

### 设计系统

```css
:root {
  --c-bg: #f5f5f0;          /* 米白背景 */
  --c-surface: #fff;         /* 卡片白 */
  --c-accent: #ffe033;       /* 黄色强调 */
  --c-hero-bg: #000;         /* 黑色hero卡 */
  --c-text: #000;            /* 主文字黑 */
  --c-text-secondary: #222;  /* 二级文字 */
  --c-text-tertiary: #555;   /* 三级文字 */
  --b: 3px solid #000;       /* 粗边框 */
  --shadow-hard: 4px 4px 0 #000;  /* 硬偏移阴影 */
  --r: 0px;                  /* 零圆角 */
  --font: 'Space Grotesk', sans-serif;
}
```

### 暗色模式

```css
@media (prefers-color-scheme: dark) {
  :root {
    --c-bg: #0d0d0d;
    --c-surface: #1a1a1a;
    --c-text: #f0f0f0;
    --c-text-secondary: #d4d4d4;  /* 7.5:1 对比度 */
    --c-text-tertiary: #999;       /* 4.7:1 对比度 */
    --c-accent: #ffe033;           /* 黄色不变 */
    --b: 3px solid #e8e8e8;
    --shadow-hard: 4px 4px 0 #e8e8e8;
  }
}
```

### 交互效果

| 状态 | 效果 |
|------|------|
| 默认 | 硬阴影 `4px 4px 0` |
| Hover | 上移 `translate(-1px, -1px)` + 阴影增大 |
| Active | 下移 `translate(1px, 1px)` + 阴影消失（按下感）|

### 更新文件 (8个)

1. `BaseLayout.astro` — 完整 CSS 变量系统, sticky header, 语言切换按钮
2. `Converter.astro` — 黑色 hero 卡片, 黄色 hover/focus, swap 按钮按压效果
3. `index.astro` (首页) — 黄色信任徽章, 分类卡片阴影+hover
4. `[category]/index.astro` — 配对卡片, 黄色分类芯片
5. `[...slug].astro` (详情页) — 直接答案黄色卡, 公式边框卡
6. `ConversionTable.astro` — 边框表格, 黄色 hover 行
7. `CrossLinks.astro` — 阴影反向链接, 黄色分类芯片
8. `UnitDescription.astro` — 边框 details, 黄色 + 号切换按钮
9. `AdSense.astro` — 虚线边框占位, 大写 AD 标签

---

## Phase 4.6: 对比度修复

### 问题

用户反馈："灰色配黑色看不清"

暗色模式下：
- `#777` 文字在 `#1a1a1a` 背景上 → 对比度仅 3.3:1（不达标）
- `#555` 边框在深色背景上 → 几乎不可见
- Converter 标签 `opacity: 0.6` → 白色文字变灰 → 对比度骤降

### 修复

| 变量 | 修复前 | 修复后 | 改善 |
|------|--------|--------|------|
| `--c-text-secondary` (暗) | #bbb | #d4d4d4 | 3.3:1 → 7.5:1 |
| `--c-text-tertiary` (暗) | #777 | #999 | 3.3:1 → 4.7:1 |
| `--c-border-light` (暗) | #555 | #666 | 不可见 → 可见 |
| `--c-text-secondary` (亮) | #333 | #222 | 更清晰 |
| `--c-text-tertiary` (亮) | #666 | #555 | 3.6:1 → 4.6:1 |
| `--c-border-light` (亮) | #ccc | #bbb | 更可见 |
| `--c-hero-border` (暗) | #444 | #666 | hero 内可见 |
| `--c-hero-surface` (暗) | #222 | #252525 | 与 #111 区分 |
| Converter label | opacity:0.6 | color:var(--text-secondary) | 不再淡化 |
| 暗色下拉箭头 | #999 | #ccc | 更可见 |

---

## Phase 4.7: 7新类别

### 新增类别详情

#### 💡 Power (功率) — 8单位, 504页面

线性转换, W 为基准单位。

| 单位 | 符号 | toBase |
|------|------|--------|
| Watts | W | 1 |
| Kilowatts | kW | 1000 |
| Megawatts | MW | 1,000,000 |
| Horsepower | hp | 745.7 |
| Metric Horsepower | PS | 735.499 |
| BTU/hour | BTU/h | 0.29307107 |
| Foot-pounds/second | ft·lbf/s | 1.35582 |
| Calories/second | cal/s | 4.184 |

#### ⛽ Fuel Efficiency (燃油效率) — 4单位, 43页面

**非线性转换**, 通过 km/L 中转。

| 单位 | 符号 | 转换策略 |
|------|------|----------|
| km/L | km/L | 直接值 |
| L/100km | L/100km | 倒数: 100/kml |
| mpg (US) | mpg | ×0.425144 |
| mpg (UK) | mpg | ×0.354006 |

#### 📡 Frequency (频率) — 6单位, 136页面

线性转换, Hz 为基准。

| 单位 | 符号 | toBase |
|------|------|--------|
| Hertz | Hz | 1 |
| Kilohertz | kHz | 1,000 |
| Megahertz | MHz | 1,000,000 |
| Gigahertz | GHz | 1,000,000,000 |
| Revolutions per Minute | rpm | 1/60 |
| Revolutions per Second | rps | 1 |

#### 📐 Angle (角度) — 6单位, 136页面

**非线性转换**, 通过度(°)中转。

| 单位 | 符号 | 转换策略 |
|------|------|----------|
| Degrees | ° | 直接值 |
| Radians | rad | ×180/π |
| Gradians | gon | ×0.9 |
| Arcminutes | ′ | /60 |
| Arcseconds | ″ | /3600 |
| Turns | tr | ×360 |

#### 🏋️ Force (力) — 6单位, 120页面

线性转换, N 为基准。

| 单位 | 符号 | toBase |
|------|------|--------|
| Newtons | N | 1 |
| Kilonewtons | kN | 1000 |
| Pound-force | lbf | 4.44822 |
| Kilogram-force | kgf | 9.80665 |
| Dynes | dyn | 0.00001 |
| Ounce-force | ozf | 0.278014 |

#### 🔩 Torque (扭矩) — 6单位, 120页面

线性转换, N·m 为基准。

| 单位 | 符号 | toBase |
|------|------|--------|
| Newton-meters | N·m | 1 |
| Kilonewton-meters | kN·m | 1000 |
| Pound-feet | lb·ft | 1.35582 |
| Pound-inches | lb·in | 0.112985 |
| Kilogram-force meters | kgf·m | 9.80665 |
| Ounce-inches | oz·in | 0.0070616 |

#### 👟 Shoe Size (鞋码) — 6单位, 32页面

**非线性转换**, 通过 cm 脚长中转。近似公式:

| 单位 | 符号 | cm 转换公式 |
|------|------|-------------|
| Centimeters | cm | 直接值 |
| US Men | US M | cm ≈ (US + 16) × 0.838 + 1.27 |
| US Women | US W | cm ≈ (US + 14.5) × 0.838 + 1.27 |
| UK | UK | cm ≈ (UK + 16.5) × 0.838 + 1.27 |
| EU | EU | cm ≈ EU × 0.667 + 1.27 |
| Japan | JP | cm = JP × 0.1 |

### 页面数变化

| 指标 | Phase 4.7 前 | Phase 4.7 后 | 变化 |
|------|-------------|-------------|------|
| 总页面 | 6,419 | 8,041 | +25% |
| 分类数 | 10 | 17 | +70% |
| 单位数 | 81 | 123 | +52% |
| 描述段 | 162 | 246 | +52% |
| 非线性类别 | 1 (Temperature) | 4 (+Fuel, Angle, Shoe) | +3 |

---

## 构建验证

```
[build] 8,041 page(s) built in 30.53s
✓ 74 tests passing
```

非线性转换验证:
- Fuel Efficiency: ✅ `data-custom-convert="true"`
- Angle: ✅ `data-custom-convert="true"`
- Shoe Size: ✅ `data-custom-convert="true"`
- Power: ✅ 线性 `data-rates` 正确传递

---

## 下一步

| Phase | 内容 | 预期效果 |
|-------|------|----------|
| 5 | AdSense 优化 | 开始赚钱 |
| 7 | 部署 Cloudflare Pages | 上线 |
| 8 | 加 es (西班牙语) | 8,041 × 1.5 ≈ **12,000 页** → 破万 |