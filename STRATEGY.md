# AI-32 个人网站 + 技术博客 — 战略方案

## 一、技术选型决策

### 推荐方案：GitHub Pages + Jekyll + Academic Theme

| 维度 | 选择 | 理由 |
|------|------|------|
| 托管 | GitHub Pages | 免费、自动 HTTPS、自定义域名支持 |
| 框架 | Jekyll (Static Site Generator) | Ruby 生态成熟、学术模板丰富、原生 GitHub Pages 支持 |
| 模板 | academic-homepage (luost26) | 专为学术/技术个人设计、支持博客+论文+项目展示 |
| 内容 | Markdown / YAML config | 零门槛维护、AI 友好 |
| 编辑 | Trae / 任意编辑器 | Vibe Coding 模式，中文对话驱动修改 |

### 备选方案对比

| 方案 | 优势 | 劣势 |
|------|------|------|
| Hugo + Academic | 构建快、Go 语言 | 模板不如 Jekyll 学术生态丰富 |
| Next.js + 手写 | 完全自定义 | 开发维护成本高，大炮打蚊子 |
| **Jekyll (Winner) ✓** | 零成本、教程完善、AI 可全流程代劳 | 构建慢（小站无感）|

## 二、整体规划

```
阶段 1: 环境搭建
  ├── 安装 Git + Ruby + Jekyll
  ├── Fork academic-homepage 模板
  └── 本地预览验证

阶段 2: 内容定制（AI 驱动）
  ├── 替换身份信息（姓名、Bio、教育背景）
  ├── 添加技术项目展示
  ├── 配置博客功能
  └── 自定义主题配色

阶段 3: 部署上线
  ├── 配置 GitHub Pages
  ├── 发布到 <username>.github.io
  └── 配置自定义域名（可选）
```

## 三、任务拆解与分工

| 子任务 | 负责 | 预计工时 | 前置依赖 |
|--------|------|----------|----------|
| A. 环境配置（Ruby/Git/GitHub Pages 模板 fork） | 技术研发官 | 30min | 无 |
| B. 本地预览 + Jekyll 依赖安装 | 技术研发官 | 20min | A |
| C. 内容定制（身份/项目/博客替换） | 技术研发官 | 1h | B |
| D. 风格定制（配色/主题微调） | 技术研发官 | 30min | C |
| E. 部署上线 & 验证 | 技术研发官 | 15min | D |

## 四、关键技术要点

1. **仓库命名必须为 `<username>.github.io`** — GitHub Pages 硬性要求
2. **Gemfile source 改为国内镜像** — `https://gems.ruby-china.com/` 加速 bundle install
3. **Jekyll 本地预览** — `bundle exec jekyll serve` → `http://127.0.0.1:4000`
4. **AI 修改策略** — 先在 ChatGPT 整理结构化 Markdown，再让 Trae 批量替换
5. **模板关键文件**：
   - `_config.yml` — 全局配置（标题、头像、社交链接）
   - `_data/` — 结构化数据（教育背景、项目、论文）
   - `_posts/` — 博客文章（Markdown + YAML front matter）
   - `assets/css/` — 自定义样式
