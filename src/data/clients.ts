// src/data/clients.ts
// Cross-platform proxy clients database for Flybit Network Observatory
// Sourced from authoritative open-source repositories and user guidelines.

export interface ProxyClient {
  id: string;
  name: string;
  platform: 'windows' | 'android' | 'ios' | 'macos' | 'linux' | 'openwrt';
  category: string;
  badge?: string;
  featured?: boolean;
  description: string;
  features: string[];
  protocols: string[];
  githubOrSiteUrl: string;
  tutorialSummary: string;
}

export interface PlatformGuide {
  id: 'windows' | 'android' | 'ios' | 'macos' | 'linux' | 'openwrt';
  title: string;
  icon: string;
  seoKeywords: string[];
  intro: string;
  clients: ProxyClient[];
  importSteps: { step: number; title: string; desc: string }[];
}

export const platformGuides: PlatformGuide[] = [
  {
    id: 'windows',
    title: 'Windows 电脑客户端',
    icon: '💻',
    seoKeywords: ['Clash for Windows', 'Clash Verge Rev 下载', 'v2rayN 下载', 'Windows 机场客户端', '电脑代理软件', 'Mihomo 客户端', 'VLESS Windows 客户端'],
    intro: 'Windows 平台拥有最为丰富的代理生态。目前强烈推荐采用基于 Mihomo 内核的现代图形客户端 Clash Verge Rev，或多核心支持的 v2rayN，兼顾分流体验与高性能传输。',
    importSteps: [
      { step: 1, title: '下载安装客户端', desc: '前往 GitHub 官方 Releases 页面下载安装包（如 Clash Verge Rev 64位安装版），解压并运行。' },
      { step: 2, title: '获取机场订阅链接', desc: '登录机场后台（如光速云），在“仪表盘”或“订阅管理”找到 Clash 或通用订阅链接，点击“一键复制”。' },
      { step: 3, title: '导入订阅并更新节点', desc: '在客户端点击“订阅”或“配置”标签，粘贴订阅链接，点击“保存并导入”即可自动拉取全球节点列表。' },
      { step: 4, title: '开启系统代理与规则分流', desc: '在“代理”面板选择“规则模式（Rule）”，选择延迟最低的优质节点，开启“系统代理”或“TUN 模式”即可畅享全球高速网络。' }
    ],
    clients: [
      {
        id: 'clash-verge-rev-win',
        name: 'Clash Verge Rev',
        platform: 'windows',
        category: 'Mihomo 核心 / 现代化 UI',
        badge: '全网首选',
        featured: true,
        description: '基于 Tauri 框架打造的新一代 Clash 桌面客户端，内置 Mihomo 内核，支持完整规则分流、TUN 虚拟网卡模式及现代化深色主题。',
        features: ['Mihomo 内核支持', 'TUN 模式接管全局流量', '订阅自动定时更新', '分流规则与策略组可视化管理'],
        protocols: ['Shadowsocks', 'VMess', 'VLESS', 'Trojan', 'Hysteria2', 'TUIC'],
        githubOrSiteUrl: 'https://github.com/clash-verge-rev/clash-verge-rev/releases',
        tutorialSummary: '安装后在订阅界面粘贴链接，开启系统代理或 TUN 模式即可生效。'
      },
      {
        id: 'v2rayn-win',
        name: 'v2rayN',
        platform: 'windows',
        category: 'Xray / sing-box 多核心',
        badge: '极客首选',
        featured: true,
        description: '经典而强大的 Windows 代理工具，支持 Xray、sing-box 等多种底层核心，适合对多协议兼容性与底层参数有精细控制需求的用户。',
        features: ['支持 Xray / sing-box 双核心自由切换', '自定义路由分流规则', '支持单节点与批量节点延迟真连接测试', '内存占用轻量'],
        protocols: ['VLESS', 'VMess', 'Trojan', 'Shadowsocks', 'SOCKS5'],
        githubOrSiteUrl: 'https://github.com/2dust/v2rayN/releases',
        tutorialSummary: '解压即用，在订阅分组中添加机场链接，更新后右键托盘图标选择“自动配置系统代理”。'
      },
      {
        id: 'flclash-win',
        name: 'FlClash',
        platform: 'windows',
        category: 'Flutter 跨平台 / 极简',
        description: '基于 Flutter 开发的跨平台 Clash 客户端，界面清新直观，极度省电且占用系统资源极低。',
        features: ['多平台统一界面设计', 'Mihomo 内核强劲驱动', '支持深浅色模式自适应'],
        protocols: ['Shadowsocks', 'VLESS', 'Trojan', 'Hysteria2'],
        githubOrSiteUrl: 'https://github.com/chen08209/FlClash/releases',
        tutorialSummary: '导入 Clash YAML 订阅后，一键开启连接即可。'
      },
      {
        id: 'hiddify-win',
        name: 'Hiddify Next',
        platform: 'windows',
        category: '全协议 / 智能路由',
        description: '跨平台全协议客户端，专为绕过复杂网络封锁设计，内置自动测速与智能路由策略。',
        features: ['支持主流与前沿新型传输协议', '智能连通性监测', '零配置快速接入'],
        protocols: ['VLESS', 'VMess', 'Trojan', 'Shadowsocks', 'SSH', 'WARP'],
        githubOrSiteUrl: 'https://github.com/hiddify/hiddify-next/releases',
        tutorialSummary: '一键粘贴机场订阅或分享链接，点击连接自动测试最优节点。'
      }
    ]
  },
  {
    id: 'android',
    title: 'Android 安卓客户端',
    icon: '📱',
    seoKeywords: ['v2rayNG 下载', 'FlClash 安卓版', 'Clash Meta for Android', '安卓机场客户端', '手机翻墙软件', 'Hiddify Android'],
    intro: '安卓系统开源生态完备，主流客户端均能提供流畅的后台常驻分流体验。v2rayNG 与 FlClash 是目前兼顾易用性与功耗控制的标杆应用。',
    importSteps: [
      { step: 1, title: '下载安装 APK', desc: '通过 GitHub Releases 页面下载对应手机 CPU 架构（推荐 arm64-v8a）的 APK 安装包并完成安装。' },
      { step: 2, title: '复制订阅或扫描二维码', desc: '在手机浏览器登录机场官网后台，复制订阅链接，或使用手机相机直接扫描后台提供的节点二维码。' },
      { step: 3, title: '更新订阅并开启分流', desc: '在客户端内点击“更新订阅”，节点加载完成后选择“绕过局域网及大陆地址”分流模式。' },
      { step: 4, title: '开启 VPN 权限', desc: '点击圆形连接按钮，同意系统创建 VPN 连接请求，即可在状态栏看到常驻代理小钥匙图标。' }
    ],
    clients: [
      {
        id: 'v2rayng-android',
        name: 'v2rayNG',
        platform: 'android',
        category: 'Xray 核心 / 经典稳定',
        badge: '安卓装机必备',
        featured: true,
        description: '安卓平台经久不衰的经典代理客户端，由 Xray 社区官方衍生，资源消耗极低，即使在入门安卓机上也能毫秒级后台响应。',
        features: ['支持分应用代理白名单/黑名单', '支持自定义分流规则与域名阻断', '扫描二维码或剪贴板一键导入'],
        protocols: ['VLESS', 'VMess', 'Trojan', 'Shadowsocks', 'SOCKS'],
        githubOrSiteUrl: 'https://github.com/2dust/v2rayNG/releases',
        tutorialSummary: '右上角加号导入订阅设置，更新订阅后选择节点，点击右下角 V 图标启动。'
      },
      {
        id: 'flclash-android',
        name: 'FlClash Android',
        platform: 'android',
        category: 'Mihomo 核心 / 美观流畅',
        badge: '高颜值推荐',
        featured: true,
        description: '界面极具现代设计感的安卓端 Mihomo 客户端，完美支持 Clash 订阅以及策略组切换，适合注重 UI 审美的用户。',
        features: ['Material Design 3 风格设计', '内置 Mihomo 完整分流规则', '多配置文件无缝切换'],
        protocols: ['Shadowsocks', 'VLESS', 'Trojan', 'Hysteria2'],
        githubOrSiteUrl: 'https://github.com/chen08209/FlClash/releases',
        tutorialSummary: '在配置页粘贴 Clash 订阅链接，保存后点击开启代理开关。'
      },
      {
        id: 'hiddify-android',
        name: 'Hiddify',
        platform: 'android',
        category: '全协议支持 / 新手友好',
        description: '支持几乎所有主流代理协议，自带简单明了的测速与连接开关，适合新手快速上手。',
        features: ['自动最佳节点推荐', '多国语言支持', '界面直观轻量'],
        protocols: ['VLESS', 'Trojan', 'Shadowsocks', 'Hysteria2', 'SSH'],
        githubOrSiteUrl: 'https://github.com/hiddify/hiddify-next/releases',
        tutorialSummary: '粘贴机场订阅链接，点击“连接”即可自动分流。'
      },
      {
        id: 'karing-android',
        name: 'Karing',
        platform: 'android',
        category: 'sing-box 架构 / 跨设备联动',
        description: '基于 sing-box 架构开发的跨平台新型客户端，支持多种订阅格式解析与多配置合并管理。',
        features: ['兼容 Clash、V2ray、Sing-box 订阅', '精细化流量监控与分流', '跨设备配置同步支持'],
        protocols: ['VLESS', 'Trojan', 'Hysteria2', 'Shadowsocks'],
        githubOrSiteUrl: 'https://github.com/KaringX/karing/releases',
        tutorialSummary: '添加配置文件并启用分流规则即可。'
      }
    ]
  },
  {
    id: 'ios',
    title: 'iPhone / iPad (iOS) 客户端',
    icon: '🍎',
    seoKeywords: ['Shadowrocket 小火箭下载', '小火箭配置教程', 'Stash iOS 下载', 'Quantumult X 圈X', '苹果手机翻墙客户端', '美区 Apple ID 购买小火箭'],
    intro: '由于苹果 App Store 区域审核政策，主流代理应用需使用非国区（如美区、日区、港区）Apple ID 前往 App Store 下载安装。其中 Shadowrocket（小火箭）因价格亲民且功能强大，成为国内 iOS 用户的绝对首选。',
    importSteps: [
      { step: 1, title: '准备非国区 Apple ID', desc: '在 App Store 退出当前国区账号，登录美区或港区 Apple ID（切勿在手机系统设置登录 iCloud）。' },
      { step: 2, title: '搜索下载 Shadowrocket', desc: '在美区 App Store 搜索购买并下载 Shadowrocket（售价通常为 2.99 美元）。' },
      { step: 3, title: '一键导入节点订阅', desc: '在 Safari 中登录机场官网后台，点击“一键导入 Shadowrocket”，系统会自动唤起小火箭并完成节点同步。' },
      { step: 4, title: '开启全局路由配置', desc: '在全局路由中选择“配置（Config）”模式（国内直连、海外走代理），打开顶部连接开关即可。' }
    ],
    clients: [
      {
        id: 'shadowrocket-ios',
        name: 'Shadowrocket（小火箭）',
        platform: 'ios',
        category: '经典规则代理 / 性价比之王',
        badge: 'iOS 绝对首选',
        featured: true,
        description: 'iOS 平台最具知名度的网络调试与规则分流工具，价格便宜，更新频繁，支持扫码导入、一键唤起订阅、按域名分流及按节点测速。',
        features: ['支持 URL 订阅自动拉取与定时刷新', '内置丰富路由规则配置库', '支持按 ping 连通性测试最优节点', '耗电控制极其优秀'],
        protocols: ['Shadowsocks', 'VLESS', 'VMess', 'Trojan', 'Hysteria2', 'Snell'],
        githubOrSiteUrl: 'https://apps.apple.com/us/app/shadowrocket/id932747118',
        tutorialSummary: '一键导入订阅，全局路由选择“配置”，开启连接开关并允许系统 VPN 配置。'
      },
      {
        id: 'stash-ios',
        name: 'Stash',
        platform: 'ios',
        category: 'Clash 规则分支 / 策略组覆写',
        badge: '进阶利器',
        description: '专为 iOS 设计的 Clash 规范网络代理工具，原生支持 Clash YAML 配置文件、策略组及覆写规则，适合深度 Clash 爱好者。',
        features: ['完整兼容 Clash Premium 规则体系', '仪表盘实时网络连接图谱', '支持按应用分流及 MitM 证书解密'],
        protocols: ['Shadowsocks', 'VLESS', 'VMess', 'Trojan', 'Hysteria2'],
        githubOrSiteUrl: 'https://apps.apple.com/us/app/stash-rule-based-proxy/id1596063718',
        tutorialSummary: '在配置列表添加 Clash 订阅，切换到“规则”模式，连接即可。'
      },
      {
        id: 'quantumult-x-ios',
        name: 'Quantumult X（圈 X）',
        platform: 'ios',
        category: '极客高阶工具 / 脚本自动化',
        description: '资深玩家推崇的高性能网络调试平台，支持强大的 JavaScript 重写脚本、精细的策略组分流和请求重写。',
        features: ['强大的本地/远程分流规则', '支持 JS 脚本自动化任务', '毫秒级网络状态监控'],
        protocols: ['Shadowsocks', 'VMess', 'Trojan', 'HTTP(S)'],
        githubOrSiteUrl: 'https://apps.apple.com/us/app/quantumult-x/id1453996191',
        tutorialSummary: '通过分资源链接导入节点列表，配置引用规则后启动代理。'
      },
      {
        id: 'surge-ios',
        name: 'Surge 5',
        platform: 'ios',
        category: '企业级网络调试 / 终极神器',
        description: 'iOS 与 macOS 上顶级的网络调试与代理套件，专为开发者与网络工程师打造，性能与稳定性天花板。',
        features: ['网络捕获与实时请求追踪', '企业级 MitM 与脚本执行', '无缝的跨设备云端配置同步'],
        protocols: ['Snell', 'Shadowsocks', 'VMess', 'Trojan', 'WireGuard'],
        githubOrSiteUrl: 'https://nssurge.com/',
        tutorialSummary: '高级工具，适合有专属定制需求的用户配置。'
      }
    ]
  },
  {
    id: 'macos',
    title: 'macOS 苹果电脑客户端',
    icon: '💻',
    seoKeywords: ['Clash Verge Mac 版', 'macOS 机场客户端', 'Mac 翻墙教程', 'M1 M2 M3 Mac 代理软件', 'Surge Mac 下载', 'v2rayN Mac 版'],
    intro: '在 macOS 上，请务必根据您的 Mac 处理器架构（Apple Silicon M1/M2/M3/M4 系列请选择 aarch64/arm64 安装包；Intel 芯片请选择 x64 安装包）下载对应客户端以获得最佳性能与最低发热。',
    importSteps: [
      { step: 1, title: '确认芯片架构并下载', desc: '点击 Mac 左上角苹果图标“关于本机”，确认是 Apple 芯片还是 Intel 芯片，在 GitHub Releases 下载对应 DMG 安装包。' },
      { step: 2, title: '安装并授权辅助工具', desc: '将应用拖入 Applications 文件夹，首次运行时在系统偏好设置中允许辅助网络工具扩展安装。' },
      { step: 3, title: '导入机场订阅配置', desc: '在客户端订阅管理界面填入机场提供的 Clash 或通用订阅链接，点击刷新拉取节点。' },
      { step: 4, title: '开启系统代理与规则分流', desc: '选择延迟较低的专线节点，勾选“系统代理（Set as System Proxy）”或开启“TUN 模式”即可畅游。' }
    ],
    clients: [
      {
        id: 'clash-verge-rev-mac',
        name: 'Clash Verge Rev for Mac',
        platform: 'macos',
        category: '原生通用架构 / Mihomo 驱动',
        badge: 'Mac 强烈推荐',
        featured: true,
        description: 'macOS 平台上最流行、维护最积极的现代化代理客户端，同时提供 Apple Silicon（arm64）与 Intel（x64）原生架构二进制文件。',
        features: ['原生支持 Apple Silicon 高效低功耗', 'TUN 模式完美代理终端命令行与所有软件', '深色模式与原生磨砂玻璃视觉融合'],
        protocols: ['Shadowsocks', 'VLESS', 'VMess', 'Trojan', 'Hysteria2'],
        githubOrSiteUrl: 'https://github.com/clash-verge-rev/clash-verge-rev/releases',
        tutorialSummary: '下载 DMG 安装后，导入订阅链接，在菜单栏图标开启“系统代理”。'
      },
      {
        id: 'flclash-mac',
        name: 'FlClash for Mac',
        platform: 'macos',
        category: '极简跨平台 / 资源轻量',
        description: '基于 Flutter 编写的轻量客户端，界面优美直观，适合偏好极简界面的轻度与中度用户。',
        features: ['超轻量内存占用', '一键式直观配置管理', '完善的分流策略规则'],
        protocols: ['Shadowsocks', 'VLESS', 'Trojan', 'Hysteria2'],
        githubOrSiteUrl: 'https://github.com/chen08209/FlClash/releases',
        tutorialSummary: '添加配置文件并启用分流即可。'
      },
      {
        id: 'surge-mac',
        name: 'Surge Mac',
        platform: 'macos',
        category: '专业级网关与调试 / 顶级质感',
        description: 'macOS 平台的网络代理旗舰标杆，具备网关级性能，支持接管家庭局域网流量。',
        features: ['全套网络流量诊断分析', '卓越的并发吞吐能力', '原生 macOS 设计哲学'],
        protocols: ['Snell', 'Shadowsocks', 'VMess', 'Trojan'],
        githubOrSiteUrl: 'https://nssurge.com/',
        tutorialSummary: '商业授权软件，适合追求极致稳定性的高端用户。'
      }
    ]
  },
  {
    id: 'linux',
    title: 'Linux 操作系统客户端',
    icon: '🐧',
    seoKeywords: ['Linux 代理客户端', 'Ubuntu Clash 安装', 'Arch Linux 科学上网', 'v2rayA 教程', 'Clash Verge Linux AppImage', 'Linux 终端代理配置'],
    intro: 'Linux 平台提供图形界面客户端（AppImage / DEB / RPM）与轻量化 Web 控制台（v2rayA / Mihomo core）。无论用于桌面工作站还是无头服务器，均能实现透明代理与规则分流。',
    importSteps: [
      { step: 1, title: '选择安装格式', desc: '桌面用户推荐直接下载 AppImage 或 DEB 格式安装 Clash Verge Rev；服务器或无桌面环境推荐部署 v2rayA。' },
      { step: 2, title: '赋予执行权限并运行', desc: '终端执行 chmod +x *.AppImage，或使用 sudo dpkg -i *.deb 安装完成。' },
      { step: 3, title: '配置订阅与路由规则', desc: '通过图形界面或 Web 仪表盘粘贴机场订阅链接，更新节点信息。' },
      { step: 4, title: '配置环境变量或透明代理', desc: '根据需要在 shell 中 export http_proxy 或开启 TUN/透明代理重定向系统流量。' }
    ],
    clients: [
      {
        id: 'clash-verge-rev-linux',
        name: 'Clash Verge Rev Linux',
        platform: 'linux',
        category: '桌面 GUI 客户端 / AppImage & DEB',
        badge: 'Linux 桌面推荐',
        featured: true,
        description: '提供 DEB、RPM、AppImage 以及 AUR 安装包，完美适配 Ubuntu、Debian、Fedora、Arch Linux 等主流发行版。',
        features: ['完美集成 Linux 桌面托盘', '支持 systemd 服务与 TUN 模式', '多发行版开箱即用打包'],
        protocols: ['Shadowsocks', 'VLESS', 'VMess', 'Trojan', 'Hysteria2'],
        githubOrSiteUrl: 'https://github.com/clash-verge-rev/clash-verge-rev/releases',
        tutorialSummary: '下载 AppImage 赋予执行权限即可启动，导入订阅后配置 TUN 模式。'
      },
      {
        id: 'v2raya-linux',
        name: 'v2rayA',
        platform: 'linux',
        category: 'Web GUI / 透明代理 / 无桌面服务器首选',
        badge: '服务器与NAS神器',
        featured: true,
        description: '兼顾轻量与易用性的 Web 界面代理客户端，原生支持透明代理与全流量接管，特别适合部署在 Linux 主机、软路由或 NAS 设备上。',
        features: ['纯 Web 网页管理面板（默认 2017 端口）', '支持透明代理接管所有进程流量', '支持多协议节点订阅与自动故障转移'],
        protocols: ['VLESS', 'VMess', 'Trojan', 'Shadowsocks'],
        githubOrSiteUrl: 'https://github.com/v2rayA/v2rayA/releases',
        tutorialSummary: '通过包管理器安装并启动服务，浏览器访问 127.0.0.1:2017，导入订阅即可。'
      }
    ]
  },
  {
    id: 'openwrt',
    title: 'OpenWrt / 软路由客户端',
    icon: '🌐',
    seoKeywords: ['OpenClash 安装配置', 'PassWall2 软路由教程', 'OpenWrt 翻墙插件', '软路由科学上网', 'Nikki 软路由插件', '透明网关分流'],
    intro: '在软路由或刷机路由器上配置代理，可实现全屋智能电视、游戏主机、手机与电脑免客户端一键无感知出海。安装前需核实 OpenWrt 固件版本、CPU 架构（如 x86_64, aarch64）以及内核依赖。',
    importSteps: [
      { step: 1, title: '检查固件架构与依赖', desc: '进入 OpenWrt 后台确认 CPU 架构，安装 luci-compat、iptables/nftables 等必要核心依赖包。' },
      { step: 2, title: '上传并安装 IPK 软件包', desc: '在“系统 - 文件传输”上传 OpenClash 或 PassWall 安装包，点击安装或通过 SSH 执行 opkg install。' },
      { step: 3, title: '导入机场订阅配置', desc: '在插件设置界面的“配置文件管理”中粘贴机场提供的 Clash 订阅链接，下载生成路由规则配置文件。' },
      { step: 4, title: '配置运行模式与启动', desc: '运行模式推荐选择“Fake-IP (TUN)”或“Redir-Host”，勾选“仅代理常用端口”，保存并应用启动网关。' }
    ],
    clients: [
      {
        id: 'openclash',
        name: 'OpenClash',
        platform: 'openwrt',
        category: 'LuCI 插件 / Mihomo/Clash 核心',
        badge: '软路由装机标配',
        featured: true,
        description: 'OpenWrt 社区中最受欢迎的图形化代理插件，支持 Clash/Mihomo 双内核，具有强大的流量可视化与策略分流控制能力。',
        features: ['支持 Fake-IP 与 Redir 模式无感透明代理', '一键在线自动更新规则集与内核', '针对游戏主机与特定局域网 IP 独立分流设置'],
        protocols: ['Shadowsocks', 'VLESS', 'VMess', 'Trojan', 'Hysteria2'],
        githubOrSiteUrl: 'https://github.com/vernesong/OpenClash/releases',
        tutorialSummary: '在“配置订阅”添加机场链接，选择 Fake-IP 混合模式启动主程序。'
      },
      {
        id: 'passwall2',
        name: 'PassWall2',
        platform: 'openwrt',
        category: 'Xray / sing-box 多核心支持',
        badge: '极速稳定',
        description: '专注于轻量高效的 OpenWrt 科学上网工具，支持多种协议分流与节点健康检查轮询。',
        features: ['支持自动测速与最优备用节点故障转移', '分流域名列表与中国大陆 IP 自动直连', '支持针对不同设备自定义代理网关'],
        protocols: ['VLESS', 'VMess', 'Trojan', 'Shadowsocks', 'Hysteria2'],
        githubOrSiteUrl: 'https://github.com/xiaorouji/openwrt-passwall',
        tutorialSummary: '在节点列表添加机场订阅，在主界面启用并绑定分流规则。'
      },
      {
        id: 'nikki',
        name: 'Nikki (原 ShellCrash Web)',
        platform: 'openwrt',
        category: '现代化 UI / OpenWrt 24.10+ 原生',
        description: '基于最新 OpenWrt 规范打造的现代路由代理插件，专为最新版固件优化，支持快速配置与高性能策略管理。',
        features: ['要求 OpenWrt 24.10+，适配 nftables 架构', '极低 CPU 开销与内存占用', '直观的 Web 管理界面'],
        protocols: ['Shadowsocks', 'VLESS', 'Trojan', 'Hysteria2'],
        githubOrSiteUrl: 'https://github.com/nikkinikki-org/OpenWrt-nikki',
        tutorialSummary: '上传安装后配置订阅，启动策略组调度服务。'
      }
    ]
  }
];
