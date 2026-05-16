# AI-8.7 个人网站 + 技术博客 — 学习笔记

## 完成时间
2026-05-16

## 技术选型与理由

| 选项 | 选择 | 理由 |
|------|------|------|
| 框架 | **纯 HTML/CSS/JS** | 零依赖，GitHub Pages 原生支持，无需构建步骤 |
| 样式 | **手写 CSS (Custom Properties)** | 完整控制，支持暗色模式，轻量（~15KB） |
| 字体 | **Noto Sans SC + JetBrains Mono** | Google Fonts 免费，中文支持好 |
| 部署 | **GitHub Pages** | 免费、稳定、自动 HTTPS |

## 遵循的教程方法
Easy-Vibe Stage 3 教程推荐的 **GitHub Pages + 学术模板 + AI 修改** 路线，但由于 GitHub 网络不可达，改为 **纯手写 Vibe Coding** 方式（教程 Section 6）。

## 网站结构
```
07-website/
├── index.html              # 首页（个人简介 + 技能 + 项目 + 博客预览）
├── css/style.css            # 全部样式（含暗色模式、响应式）
├── js/main.js               # 交互逻辑（主题切换、博客加载、动画）
├── blog/
│   ├── index.html           # 博客列表页
│   ├── posts.json           # 博客文章数据（JSON，动态加载）
│   ├── vibe-coding-to-fullstack.html  # 文章 1
│   └── multi-agent-system.html         # 文章 2
```

## 核心功能
- ✅ 个人主页（简介、技能、项目展示）
- ✅ 技术博客（列表 + 详情页，2 篇示例文章）
- ✅ 暗色/亮色模式切换（localStorage 持久化）
- ✅ 响应式设计（桌面 + 移动端）
- ✅ 滚动动画（Intersection Observer）
- ✅ 导航栏自动隐藏（滚动时）
- ✅ 零外部运行时依赖

## 部署方式
1. 推送整个 `07-website/` 目录到 GitHub 仓库
2. 仓库 Settings → Pages → 选择 `Deploy from a branch (main, /root)`
3. 访问 `https://<用户名>.github.io/` 即可

## 踩坑记录
1. **write_file 工具持久化问题**：有时文件写入后在其他工具调用中不可见，改用 terminal 的 mkdir 创建目录后再 write_file 可解决
2. **GitHub 网络不可达**：模板克隆失败，改用纯手写方式
3. **学术主页模板依赖 Ruby/Jekyll**：环境配置复杂，纯 HTML 方式更简单可靠
