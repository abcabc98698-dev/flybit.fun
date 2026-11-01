# ⚡ Flybit.fun — 网络实测实验室与跨境加速知识库

<p align="center">
  <strong>基于 Astro 7 纯静态架构（Pure SSG）驱动的中立网络工程实测大盘、42家主流机场晚高峰监控与科学选购指南</strong>
</p>

<p align="center">
  <a href="https://flybit.fun"><img src="https://img.shields.io/badge/Official_Website-flybit.fun-10b981?style=for-the-badge&logo=safari&logoColor=white" alt="Website" /></a>
  <a href="https://astro.build"><img src="https://img.shields.io/badge/Astro-7.2.9-BC52EE?style=for-the-badge&logo=astro&logoColor=white" alt="Astro" /></a>
  <a href="https://www.typescriptlang.org"><img src="https://img.shields.io/badge/TypeScript-5.7-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" /></a>
  <img src="https://img.shields.io/badge/DevSecOps-100%25_PASS-success?style=for-the-badge&logo=shield" alt="Security" />
  <img src="https://img.shields.io/badge/WCAG_2.1-AA_Compliant-blue?style=for-the-badge&logo=w3c" alt="WCAG AA" />
  <img src="https://img.shields.io/badge/License-MIT-gray?style=for-the-badge" alt="License" />
</p>

---

## 📖 项目简介 (Overview)

**Flybit 测评实验室（[flybit.fun](https://flybit.fun)）** 创立于对互联网代理行业充斥虚假营销、云测速套皮的不满。本项目立足于底层网络指标（BGP 路由调度、IEPL/IPLC 物理专线抗 QoS 能力、TLS RTT 握手延时、原生住宅 IP 洁净度），为每一位对跨境网络有高要求的开发者、外贸从业者与科研人员提供真实可信的选购大盘与技术指南。

全站基于 **Astro 7** 构建，采用 **100% 预渲染静态页面（Pure SSG）**，零客户端运行时水合包袱，兼具极速首屏加载性能与顶级的搜索引擎（SEO）和生成式引擎（GEO）友好度。

---

## ✨ 核心功能与内容矩阵 (Feature Matrix)

```
flybit.fun
├── 🏢 机场品牌库 (/brands) ────── 42 家主流品牌独立实测档案与 NOC 工程手记
├── 🔥 机场推荐 (/jichang) ─────── 晚高峰首选梯队、物理专线对比与选购避坑
├── 🛡️ VPN 加速 (/vpn) ────────── 商业 VPN vs 代理机场底层协议安全性对比
├── 🚨 梯子推荐 (/tizi) ────────── 跑路危险信号识别、真实带宽成本与主备容灾
├── ⚡ Clash 专题 (/clash) ─────── Mihomo 内核、TUN 虚拟网卡接管与规则分流
├── 🌐 节点线路 (/nodes) ───────── 原生住宅 IP vs 机房广播 IP、4K 奈飞/AI 匹配
├── 📖 使用教程 (/tutorial) ────── Windows / Mac / iOS 小火箭 / 软路由上手指南
├── 🎁 免费试用 (/free) ────────── 10,000+ 字免费白嫖防钓鱼安全沙盒指南
├── 📡 避坑雷达 (/radar) ───────── 6 维量化风控评级模型与交互式在线计算器
├── ❓ 疑难 FAQ (/faq) ─────────── 50 道高频实测技术问答与即时搜索
├── ⚡ 实测实验室 (/speedtest) ──── 晚高峰千兆宽带真机丢包/吞吐大盘榜单
└── 📝 专题博客 (/blog) ────────── 专著级系统架构长篇深度指南
```

### 1. 晚高峰千兆真实环境实测
- **严苛测试窗口**：统一在工作日及周末晚高峰拥塞极值时段（`20:30 ~ 22:30`）执行实测。
- **物理硬件环境**：千兆家庭宽带，超六类网线直连千兆硬路由，排除本地 Wi-Fi 抖动干扰。
- **真机高清图谱**：集成 **PhotoSwipe 5** 支持手势双指与全屏放大的真机测速图，拒绝虚假云测评。

### 2. 8 大核心栏目聚合支柱 (Pillars)
- 每个栏目均具备独立 Title、Description、H1、深度背景说明、子分类入口、推荐卡片、面包屑导航与标准 `CollectionPage` Schema 结构化标记。

### 3. 42 家品牌防模板指纹（Anti-Fingerprinting）设计
- 每个品牌页动态注入 **`🔬 实验室网络工程实测手记`**，涵盖链路丢包与 Jitter 抖动方差、GeoDNS 流媒体分流、Cloudflare Turnstile 验证码穿透与客户端调优，强效防御搜索引擎内容同质化判定。

### 4. 工业级 SEO & GEO 基础设施
- **绝对规范化 Canonical**：全站 100% 输出自引用 `https://flybit.fun/.../` 绝对地址。
- **清洁 Sitemap 索引**：标准 `sitemap.xml` 与 `sitemap-index.xml`，仅收录 62 条高价值规范路由，过滤旧模版幽灵页与轻量 Tag 页。
- **全爬虫友好**：`robots.txt` 明确放行 Googlebot、bingbot、Baiduspider 及 yisouspider（神马搜索）。
- **AI 大模型友好**：规范输出 `llms.txt` 与 `llms-full.txt`，供 SearchGPT、Perplexity、Claude 等直接抓取与权威引用。
- **出站外链合规**：全站 134 处商业跳转链接 100% 严格携带 `rel="nofollow sponsored noopener"`，零违规降权风险。

---

## 🛠️ 技术栈与工程底座 (Tech Stack)

| 领域 | 技术选型 | 说明 |
| :--- | :--- | :--- |
| **底层框架** | [Astro v7](https://astro.build) | 采用最新静态内容集合（Content Collections）与零 JS 孤岛渲染 |
| **开发语言** | TypeScript | 强类型约束数据库模型与组件 Props |
| **图库引擎** | PhotoSwipe v5 | 支持触控手势缩放、原生 WebP 高清加载 |
| **样式系统** | 原生 CSS 变量架构 | 支持 Slate Navy、Midnight OLED 等多套无闪烁（Anti-FOUC）主题 |
| **合规与风控** | DevSecOps Sentinel | 本地静态代码扫描，零凭证/内网泄漏 |
| **无障碍标准** | WCAG 2.1 / 2.2 AA | 全站 100% 通过色彩对比度、ARIA 标签与标题跳级合规审查 |

---

## 📁 目录结构 (Directory Layout)

```text
flybit.fun/
├── astro.config.mjs             # Astro 核心配置文件 (Sitemap 过滤、Markdown 处理)
├── package.json                 # 项目依赖与自动化质检脚本
├── public/
│   ├── images/                  # 静态图库与设计系统图标
│   └── robots.txt               # 搜索引擎爬虫抓取规则
├── scripts/
│   ├── audit-security.mjs       # DevSecOps 源码与编译产物安全巡检脚本
│   ├── audit-wcag.mjs           # WCAG AA 无障碍与语义化标题检测脚本
│   └── audit-google-search.mjs  # Googlebot 抓取、元数据与 Schema 门禁检查
└── src/
    ├── components/              # 导航、页脚、品牌卡片、快速搜索框等可复用组件
    ├── config/
    │   └── site.ts              # 站点全局常量、导航配置、站长验证密钥
    ├── data/
    │   ├── airports.ts          # 42 家机场评测数据库、参数指标、优惠码
    │   └── clients.ts           # 跨平台客户端指南与上手数据
    ├── layouts/
    │   └── BaseLayout.astro     # 全站 SEO Head、Canonical、Schema.org @graph 模板
    └── pages/
        ├── index.astro          # 首页大盘
        ├── jichang/             # 机场推荐专栏
        ├── vpn/                 # VPN 加速专栏
        ├── tizi/                # 梯子推荐专栏
        ├── clash/               # Clash 专题
        ├── nodes/               # 节点线路专栏
        ├── tutorial/            # 使用教程专栏
        ├── free.astro           # 免费试用与安全沙盒
        ├── brands/              # 42 家品牌索引与详情页动态路由 [id].astro
        ├── radar.astro          # 跑路风控雷达
        ├── faq.astro            # 50 问答疑难全集
        ├── speedtest/           # 实测测速排行榜
        ├── blog/                # 专题技术长文目录
        ├── sitemap.xml.ts       # 站点地图入口
        ├── llms.txt.ts          # AI Agent 索引清单
        └── 404.astro            # 友好 404 错误页 (noindex)
```

---

## 🚀 本地开发与运行 (Getting Started)

### 环境要求
- Node.js `>= 22.12.0`
- 包管理器：`npm` / `pnpm`

### 操作步骤

```bash
# 1. 克隆代码仓库
git clone https://github.com/abcabc98698-dev/flybit.fun.git
cd flybit.fun

# 2. 安装项目依赖
npm install

# 3. 启动本地开发服务 (支持 HMR 热更新)
npm run dev

# 4. 构建生产环境静态产物 (输出至 dist/)
npm run build

# 5. 本地预览生产构建
npm run preview
```

---

## 🧪 自动化质量门禁与审计 (Quality Assurance)

项目内置了三道自动化质量门禁，确保在每次提交与构建前保持零暗伤：

```bash
# 执行完整质检流水线
npm run check             # Astro 类型与语法检查
npm run audit:security    # DevSecOps 安全合规审计 (检测反向 Tabnabbing、混合内容与凭证泄露)
npm run audit:wcag        # WCAG 2.1/2.2 AA 无障碍合规性扫描
npm run audit:google      # Google 爬虫抓取门槛与 Rich Cards JSON-LD 结构化数据检验
```

---

## 🛡️ 商业透明度与免责声明 (Commercial Transparency)

- **中立实测原则**：本站所有评测数据均基于真实环境实测抓包所得，不受任何服务商赞助影响评测打分。
- **推广代码披露**：本站部分出站链接包含推广分成代码（Affiliate Link），所有推广外链已无条件注入 `rel="nofollow sponsored noopener"`，符合 FTC 与 Google 站长关于《赞助商关系声明》的最高合规标准。
- **免责声明**：本项目内容仅供计算机网络拓扑研究、学术科研人员及跨境合法外贸从业者参考，请严格遵守当地法律法规。

---

## 📄 开源许可证 (License)

本项目采用 [MIT License](LICENSE) 开源协议。
