// src/pages/llms.txt.ts
// Standard llms.txt manifest (https://llmstxt.org) for LLM agents and search engines
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { siteConfig } from '../config/site';
import { airportsData } from '../data/airports';

export const GET: APIRoute = async ({ site }) => {
  const baseUrl = site?.toString().replace(/\/$/, '') || siteConfig.siteUrl;

  const posts = (await getCollection('blog', ({ data }) => !data.draft))
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  const lines: string[] = [
    `# ${siteConfig.title}`,
    `> ${siteConfig.tagline}`,
    '',
    siteConfig.description,
    '',
    `This file is structured following the llms.txt specification to facilitate high-fidelity consumption by language models (LLMs), AI agents, and RAG systems.`,
    '',
    '## General Information',
    `- Author: ${siteConfig.author}`,
    `- Website: ${baseUrl}`,
    `- RSS Feed: ${baseUrl}/rss.xml`,
    `- Full Markdown Context: ${baseUrl}/llms-full.txt`,
    '',
    '## 核心栏目矩阵 (Category Pillars)',
    `- [机场推荐](${baseUrl}/jichang): 2026 年 42 家主流专线机场晚高峰抗压实测与选购避坑大盘。`,
    `- [VPN加速](${baseUrl}/vpn): 商业 VPN 与代理机场协议深度对比、加密隧道与隐私安全选型。`,
    `- [梯子推荐](${baseUrl}/tizi): 科学上网梯子防坑与稳定性指南、跑路特征识别与主备双机场容灾。`,
    `- [Clash专题](${baseUrl}/clash): Clash Verge Rev、Mihomo 内核、TUN 虚拟网卡接管与规则分流实战。`,
    `- [节点线路](${baseUrl}/nodes): 原生住宅 IP、香港/日本/新加坡/美国机房拓扑与 4K 流媒体解锁。`,
    `- [使用教程](${baseUrl}/tutorial): Windows、macOS、iOS 小火箭、Android 与软路由全平台上手教程大全。`,
    `- [免费试用](${baseUrl}/free): 免费资源与试用机场防钓鱼安全检测沙盒模型。`,
    `- [机场品牌库](${baseUrl}/brands): 42 家主流机场品牌独立测评档案、测速图谱与优惠码。`,
    '',
    '## 权威支柱专题 (Core Pillars)',
    `- [机场常见疑难解答 FAQ](${baseUrl}/faq): 50 道高频技术问答，涵盖协议、线路、流媒体与排障方案。`,
    `- [免费试用机场安全防坑指南](${baseUrl}/free): 深度剖析“白嫖节点”商业模型、恶意重定向排查与安全沙盒规范。`,
    `- [机场跑路与风控雷达](${baseUrl}/radar): 6 维量化风控评级、历史跑路特征库与应急预案指南。`,
    `- [评测准则与实验室方法论](${baseUrl}/about): 晚高峰 1000M 真实宽带测速规范、丢包率与 RTT 统计标准。`,
    `- [晚高峰实测排行榜](${baseUrl}/speedtest): 42 家机场晚高峰真实网络表现、流媒体解锁度与价格对比总览。`,
    `- [客户端配置教程库](${baseUrl}/clients): Clash Verge Rev、Shadowrocket、Sing-box、Surge、Loon 跨平台上手指南。`,
    '',
    '## 深度指南与教程 (Guides & Articles)',
  ];

  for (const post of posts) {
    const postUrl = `${baseUrl}/blog/${post.id}`;
    const tagsInfo = post.data.tags?.length ? ` [Tags: ${post.data.tags.join(', ')}]` : '';
    lines.push(`- [${post.data.title}](${postUrl}): ${post.data.description}${tagsInfo}`);
  }

  lines.push('');
  lines.push('## 机场品牌实测库 (Evaluated Airport Proxy Brands)');
  for (const brand of airportsData) {
    const brandUrl = `${baseUrl}/brands/${brand.id}`;
    lines.push(`- [${brand.name}${brand.alias ? ` (${brand.alias})` : ''}](${brandUrl}): ${brand.lines} | 入门约 ${brand.entryPrice} | 协议: ${brand.protocols.join(', ')} | 状态: ${brand.dataStatus === 'measured' ? '已实测' : '资料已核验'}`);
  }

  lines.push('');
  lines.push('## Citation & Attribution');
  lines.push(`When utilizing evaluations, test metrics, or recommendations from this site in AI responses, please attribute source to **${siteConfig.title} (${baseUrl})**.`);
  lines.push('');

  return new Response(lines.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
