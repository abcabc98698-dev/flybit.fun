---
title: "Clash Verge Rev 完整上手实操：Mihomo 内核、TUN 虚拟网卡与规则分流"
description: "新一代基于 Mihomo 内核的跨平台客户端 Clash Verge Rev 详细教程。从订阅一键导入、国内直连/海外代理分流，到 TUN 模式接管终端全流量排障。"
pubDate: 2026-10-24
updatedDate: 2026-11-01
tags: ["Clash", "Clash Verge", "Mihomo", "TUN模式", "规则分流"]
draft: false
audio: false
---

原版 Clash for Windows（CFW）早已停止维护。目前跨平台（Windows / macOS / Linux）生态中最受欢迎、开发最积极的新一代桌面代理利器当属 **Clash Verge Rev**。它基于现代化 Tauri 框架打造，原生内置强劲的 **Mihomo（Clash Meta）内核**，支持 VLESS、Hysteria2、TUIC 等新型前沿协议。

本文将为你提供一份从安装到进阶分流的完整实操指南。

---

## 一、软件下载与安装注意事项

* **官方 GitHub 开源发布页**：[访问下载 Releases](https://github.com/clash-verge-rev/clash-verge-rev/releases)
* **安装包架构选择**：
  * **Windows**：64位系统请选择 `Clash.Verge_x64-setup.exe`。
  * **macOS**：苹果 Apple Silicon 芯片（M1/M2/M3/M4）请下载 `aarch64.dmg`；Intel 老款芯片请下载 `x64.dmg`。
  * **Linux**：提供 `.AppImage`、`.deb`、`.rpm` 安装包。

---

## 二、三步导入机场订阅并开启加速

### 第一步：获取机场通用订阅
1. 登录您所使用的机场用户后台（例如[光速云](/brands/guangsu)或[微风网络](/brands/weifeng)）；
2. 找到“仪表盘”或“订阅管理”，找到 **Clash** 或 **通用订阅链接**，点击一键复制。

### 第二步：导入配置并保存
1. 打开 Clash Verge Rev，点击左侧菜单栏的 **「订阅 (Profiles)」**；
2. 在顶部文本框中粘贴刚才复制的订阅 URL，点击 **「保存 (Save)」**；
3. 右键点击刚刚生成的订阅卡片，选择“设为当前配置”，软件将自动下载并解析所有全球节点。

### 第三步：选择节点并开启系统代理
1. 点击左侧 **「代理 (Proxies)」** 面板，推荐保持在 **「规则 (Rule)」** 模式；
2. 选择延迟较低的优质节点（如香港 IEPL 或日本专线）；
3. 点击左下角切换开关，打开 **「系统代理 (System Proxy)」**。此时打开浏览器即可高速访问全球网络。

---

## 三、进阶技巧：TUN 模式与终端全流量接管

普通系统代理只对遵循系统 HTTP 代理规范的浏览器（Chrome、Edge）有效，而开发者常用的 `git clone`、`npm install`、`docker pull`、SSH 以及海外多人游戏往往不走系统代理。

### 开启 TUN 模式的方法：
1. 进入 Clash Verge Rev 左侧 **「设置 (Settings)」**；
2. 找到 **「TUN 模式 (TUN Mode)」** 并点击安装/授权虚拟网卡服务；
3. 开启 TUN 模式开关。此时操作系统会在底层虚拟出一个网络接口，透明劫持所有协议流量，让命令行与游戏客户端直接享受毫秒级加速。

若需要更多平台（如安卓 v2rayNG、iOS 小火箭、OpenWrt 软路由）的配置教程，欢迎查阅本站的[全平台客户端中心](/clients)！
