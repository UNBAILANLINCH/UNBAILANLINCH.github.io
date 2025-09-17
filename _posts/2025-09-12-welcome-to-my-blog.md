---
layout: single
title: "欢迎来到我的技术博客"
date: 2025-09-12 10:00:00 +0800
categories: 
  - tech
tags: 
  - 博客
  - Jekyll
  - GitHub Pages
author_profile: true
toc: true
toc_label: "目录"
toc_icon: "cog"
comments: true
header:
  teaser: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
---

##  欢迎

欢迎来到我的技术博客！这是我的第一篇技术文章，主要介绍一下这个网站的搭建过程。

##  网站技术栈

这个网站使用了以下技术：

### 基础框架
- **Jekyll**: 静态网站生成器
- **GitHub Pages**: 免费的静态网站托管
- **Minimal Mistakes**: 专业的 Jekyll 主题

### 特色功能
-  **响应式设计**: 适配pc与移动端
-  **多语言支持**: 中英文界面切换
-  **SEO 优化**: 搜索引擎友好
-  **评论系统**: 支持多种评论插件

### 尚需完善
1. **建站时间**：这个项目已经搁置很久了，我想知道过了多久了。
2. **流量仪表盘**: 统计网站访问量，了解用户行为
3. **图片优化**: 压缩图片大小，提高加载速度
4. **代码高亮**: 添加代码高亮功能

目前先这些，后续有新需求再补充，但应该是够用了，不想花很多时间在搭建的时间上。毕竟我非专业前端，虽说为了了解unity的uss，搭了半个AI辅助的植物模拟器网页游戏去了解css与html，但对本网站来说应该就够用了，出于本身对各种技术的热情，走深入下去会使得本就泛而不精的情况更是雪上加霜。

## 📚 学习资源

搜索引擎关键词是：Jekyll, GitHub Pages, Minimal Mistakes
知乎、csdn、博客园等

## 🔧 遇到的问题与解决

感恩Claude Sonnet4.

### 问题 1: 依赖项错误
```bash
Dependency Error: kramdown-parser-gfm
```

**解决方案**: 在 Gemfile 中添加必要的依赖
```ruby
gem "kramdown-parser-gfm"
gem "github-pages", group: :jekyll_plugins
```

### 问题 2: 中文本地化
**解决方案**: 配置 `_config.yml` 和 `ui-text.yml` 文件

##  未来计划

接下来我计划写一些关于以下主题的文章：

- [ ] 之前一些做一半的TA项目更新
- [ ] 3d模型与渲染影片上的细节展示
- [ ] 机场与v2r与clash的基础使用


如果你也想搭建类似的网站，欢迎参考我的 [GitHub 仓库](https://github.com/UNBAILANLINCH/UNBAILANLINCH.github.io)！

---

*感谢阅读！如有问题欢迎在下方评论或通过[联系页面](/contact/)与我交流。*
