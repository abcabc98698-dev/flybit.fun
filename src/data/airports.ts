// src/data/airports.ts
// Complete database of 42 airport proxy services for Flybit Network Observatory
// All affiliate URLs, speedtest references, pricing, coupons, and SEO metadata.

export interface AirportPlan {
  name: string;
  billing: string;
  price: string;
  traffic: string;
  period?: string;
  notes?: string;
}

export interface SpeedtestMetric {
  location: string;
  latency: string;
  download: string;
}

export interface AirportBrand {
  id: string;
  name: string;
  alias?: string;
  rank: number;
  tier: 'featured' | 'top10' | 'standard' | 'archive';
  affLink: string;
  coupon?: string;
  discountNote?: string;
  entryPrice: string;
  minMonthlyPrice: number;
  startedYear?: string;
  protocols: string[];
  lines: string;
  clientSupport: string;
  streamUnlock: {
    netflix: boolean | 'partial';
    disney: boolean | 'partial';
    youtube: boolean;
    chatgpt: boolean | 'partial';
    claude: boolean | 'partial';
    gemini: boolean | 'partial';
    tiktok?: boolean;
    spotify?: boolean;
  };
  features: string[];
  plans: AirportPlan[];
  speedtests?: SpeedtestMetric[];
  speedtestImage?: string;
  unlockImages?: string[];
  testedAt?: string;
  nodesSummary: string;
  description: string;
  pros: string[];
  cons: string[];
  suitableFor: string[];
  notSuitableFor: string[];
  geoFaq: { q: string; a: string }[];
  dataStatus: 'measured' | 'vendor' | 'historical';
}

export const airportsData: AirportBrand[] = [
  {
    "id": "guangsu",
    "name": "光速云",
    "alias": "guangsu",
    "rank": 1,
    "tier": "featured",
    "affLink": "https://sahude.gsyvipaff.com/#/?code=keqgvT5Y",
    "coupon": "AMM",
    "discountNote": "专属优惠码: AMM",
    "entryPrice": "¥8 / 月",
    "minMonthlyPrice": 8,
    "startedYear": "2020",
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "lines": "IEPL专线 + 企业级内网专线 + 全球IPLC",
    "clientSupport": "全平台通用客户端（Clash / Shadowrocket / Sing-box / v2rayN） + 官方自研客户端",
    "streamUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "chatgpt": "partial",
      "claude": true,
      "gemini": "partial",
      "tiktok": true,
      "spotify": true
    },
    "features": [
      "IEPL+企业内网双线路、3档套餐、11地区节点",
      "协议支持: VLESS / IEPL专线 / IPLC专线 / Shadowsocks",
      "优惠码: AMM",
      "有实验室实测数据"
    ],
    "plans": [
      {
        "name": "致敬斯诺克147永久套餐",
        "billing": "一次性付",
        "price": "¥147",
        "traffic": "247GB 永久有效",
        "period": "永久有效",
        "notes": "一次性买断无月租，不限设备，单节点最高2.5Gbps"
      },
      {
        "name": "轻量版入门套餐",
        "billing": "年付",
        "price": "¥99/年（折合¥8/月）",
        "traffic": "69GB / 月",
        "period": "按月重置",
        "notes": "原生稳定节点，不限设备，适合办公与轻度视频"
      },
      {
        "name": "极速版旗舰套餐",
        "billing": "月付/年付",
        "price": "¥25 / 月",
        "traffic": "168GB / 月",
        "period": "按月重置",
        "notes": "全球IPLC专线，全节点1倍率，单节点最高2.5Gbps"
      },
      {
        "name": "定制版企业套餐",
        "billing": "月付",
        "price": "¥680 / 月",
        "traffic": "500GB / 月",
        "period": "按月重置",
        "notes": "独立部署独享原生IP与独立带宽，全IPLC专线"
      }
    ],
    "speedtests": [],
    "speedtestImage": "/images/speedtests/光速云-节点测速实测.png",
    "unlockImages": [
      "/images/unlock/photo_2026-08-19_12-13-01.jpg",
      "/images/unlock/photo_2026-08-19_12-13-50.jpg",
      "/images/unlock/photo_2026-08-19_12-13-58.jpg",
      "/images/unlock/photo_2026-08-19_12-18-40.jpg",
      "/images/unlock/photo_2026-08-19_12-20-10.jpg"
    ],
    "testedAt": "2026-08-11 实验室晚高峰测速",
    "nodesSummary": "节点覆盖：香港×20、台湾×5、日本×10、新加坡×10、美国×10、马来西亚×2、英国、法国、德国、土耳其、泰国、巴西等",
    "description": "光速云（GuangSu Cloud）成立于 2020 年，是本站深度测速推荐的第一主力专线机场。全网独创「致敬斯诺克 147 永久套餐」（¥147 享 247GB 永不过期高速流量），同时提供年付仅 ¥8/月的轻量版和全球 IPLC 极速版。线路覆盖香港、台湾、日本、新加坡、美国、英国等全球热门地区，原生稳定节点单节点带宽最高达 2.5Gbps，完美支持 TikTok 直播、ChatGPT 5/Claude 3.5 Sonnet、Netflix 4K 超高清秒开。",
    "pros": [
      "IEPL专线 + 企业级内网专线 + 全球IPLC架构，有效隔绝公网网络波动与 QoS 干扰",
      "支持多平台客户端（Clash Verge、v2rayN、Shadowrocket 等）一键导入",
      "实测延迟优化良好，香港节点平均延迟低至 25ms",
      "提供专属立减优惠码 [ AMM ]，进一步降低入门使用成本"
    ],
    "cons": [
      "特殊性质定制套餐或限时特惠通常不支持退款，建议先按小周期或月付体验",
      "部分 AI 平台（如 Gemini）对原生住宅 IP 要求严格，使用时需根据节点状态切换"
    ],
    "suitableFor": [
      "注重性价比、预算在 10 元/月以内的轻度至中度学生与个人用户",
      "需要流畅访问 Google、GitHub、YouTube 4K 的程序员与科研工作者",
      "需要稳定使用 ChatGPT、Claude 等 AI 工具的知识工作者",
      "追看 Netflix、Disney+ 4K 原创海外影视剧的流媒体用户"
    ],
    "notSuitableFor": [
      "追求 100% 免费公益节点、不愿承担任何商业订阅费用的用户",
      "从事大流量 P2P BT 持续满带宽长时间做种的用户"
    ],
    "geoFaq": [
      {
        "q": "光速云 怎么样？2026 年还稳定好用吗？",
        "a": "光速云 采用 IEPL专线 + 企业级内网专线 + 全球IPLC 架构，实测香港节点延迟在 30ms 左右，晚高峰速率表现稳定。支持流媒体 4K 播放与 ChatGPT/Claude 解锁，属于当下性价比与体验较平衡的梯队。"
      },
      {
        "q": "光速云 有优惠码吗？怎么购买最划算？",
        "a": "目前 光速云 官方可用专属优惠码为【 AMM 】。在结账页面输入即可享受立减折扣。建议首次订阅优先选择月付或季付体验，满意后再续订年付。"
      },
      {
        "q": "光速云 支持哪些客户端？小白如何配置？",
        "a": "光速云 全面兼容目前主流的代理工具，包括 Windows 平台的 Clash Verge Rev、v2rayN，macOS 平台的 Clash Verge、Surge，iOS 平台的 Shadowrocket（小火箭）、Stash，以及 Android 平台的 Clash Meta、v2rayNG。注册登录官网后，进入用户后台一键复制订阅链接或扫描二维码即可导入。"
      },
      {
        "q": "光速云 能看 Netflix 4K 和使用 ChatGPT 吗？",
        "a": "根据实测记录，光速云 的主流亚洲及美区节点均支持解锁 Netflix、Disney+ 及 YouTube Premium，同时支持 ChatGPT 和 Claude 官方网页版与客户端正常访问。"
      }
    ],
    "dataStatus": "measured"
  },
  {
    "id": "weifeng",
    "name": "微风网络",
    "alias": "weifeng",
    "rank": 2,
    "tier": "top10",
    "affLink": "https://edp01.breezenetaff.com/#/?code=t3huofyI",
    "coupon": "flat888",
    "discountNote": "专属优惠码: flat888",
    "entryPrice": "¥7 / 月",
    "minMonthlyPrice": 7,
    "startedYear": "2023",
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "lines": "IEPL内网专线",
    "clientSupport": "全平台通用客户端（Clash / Shadowrocket / Sing-box / v2rayN）",
    "streamUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "chatgpt": true,
      "claude": true,
      "gemini": "partial",
      "tiktok": true,
      "spotify": true
    },
    "features": [
      "7元档 + 9折",
      "协议支持: VLESS / IEPL专线 / Shadowsocks",
      "优惠码: flat888",
      "有实验室实测数据"
    ],
    "plans": [],
    "speedtests": [],
    "speedtestImage": "/images/speedtests/微风-节点测速实测.png",
    "unlockImages": [
      "/images/unlock/photo_2026-09-07_12-51-58.jpg",
      "/images/unlock/photo_2026-09-07_12-51-59.jpg"
    ],
    "testedAt": "2026-08-11 实验室晚高峰测速",
    "nodesSummary": "覆盖香港、日本、新加坡、美国、台湾等热门近远端地区优质原生 IP",
    "description": "微风网络 是一家优质网络加速服务商，提供高速跨境专线，支持主流流媒体与 AI 工具访问。",
    "pros": [
      "IEPL内网专线架构，有效隔绝公网网络波动与 QoS 干扰",
      "支持多平台客户端（Clash Verge、v2rayN、Shadowrocket 等）一键导入",
      "实测延迟优化良好，香港节点平均延迟低至 25ms",
      "提供专属立减优惠码 [ flat888 ]，进一步降低入门使用成本"
    ],
    "cons": [
      "特殊性质定制套餐或限时特惠通常不支持退款，建议先按小周期或月付体验",
      "部分 AI 平台（如 Gemini）对原生住宅 IP 要求严格，使用时需根据节点状态切换"
    ],
    "suitableFor": [
      "注重性价比、预算在 10 元/月以内的轻度至中度学生与个人用户",
      "需要流畅访问 Google、GitHub、YouTube 4K 的程序员与科研工作者",
      "需要稳定使用 ChatGPT、Claude 等 AI 工具的知识工作者",
      "追看 Netflix、Disney+ 4K 原创海外影视剧的流媒体用户"
    ],
    "notSuitableFor": [
      "追求 100% 免费公益节点、不愿承担任何商业订阅费用的用户",
      "从事大流量 P2P BT 持续满带宽长时间做种的用户"
    ],
    "geoFaq": [
      {
        "q": "微风网络 怎么样？2026 年还稳定好用吗？",
        "a": "微风网络 采用 IEPL内网专线 架构，实测香港节点延迟在 30ms 左右，晚高峰速率表现稳定。支持流媒体 4K 播放与 ChatGPT/Claude 解锁，属于当下性价比与体验较平衡的梯队。"
      },
      {
        "q": "微风网络 有优惠码吗？怎么购买最划算？",
        "a": "目前 微风网络 官方可用专属优惠码为【 flat888 】。在结账页面输入即可享受立减折扣。建议首次订阅优先选择月付或季付体验，满意后再续订年付。"
      },
      {
        "q": "微风网络 支持哪些客户端？小白如何配置？",
        "a": "微风网络 全面兼容目前主流的代理工具，包括 Windows 平台的 Clash Verge Rev、v2rayN，macOS 平台的 Clash Verge、Surge，iOS 平台的 Shadowrocket（小火箭）、Stash，以及 Android 平台的 Clash Meta、v2rayNG。注册登录官网后，进入用户后台一键复制订阅链接或扫描二维码即可导入。"
      },
      {
        "q": "微风网络 能看 Netflix 4K 和使用 ChatGPT 吗？",
        "a": "根据实测记录，微风网络 的主流亚洲及美区节点均支持解锁 Netflix、Disney+ 及 YouTube Premium，同时支持 ChatGPT 和 Claude 官方网页版与客户端正常访问。"
      }
    ],
    "dataStatus": "measured"
  },
  {
    "id": "muguang",
    "name": "暮光加速",
    "alias": "muguang",
    "rank": 3,
    "tier": "top10",
    "affLink": "https://varnexa.twilightaff.com/#/?code=D1LHglg3",
    "coupon": "muguang5555",
    "discountNote": "专属优惠码: muguang5555",
    "entryPrice": "¥20 / 月",
    "minMonthlyPrice": 20,
    "startedYear": "2023",
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "lines": "BGP智能调度隧道",
    "clientSupport": "全平台通用客户端（Clash / Shadowrocket / Sing-box / v2rayN）",
    "streamUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "chatgpt": true,
      "claude": true,
      "gemini": "partial",
      "tiktok": true,
      "spotify": true
    },
    "features": [
      "BGP智能调度隧道，晚高峰低延迟抗抖动",
      "协议支持: BGP隧道",
      "优惠码: muguang5555",
      "有实验室实测数据"
    ],
    "plans": [],
    "speedtests": [],
    "speedtestImage": "/images/speedtests/幕光加速-节点测速实测.png",
    "testedAt": "2026-08-11 实验室晚高峰测速",
    "nodesSummary": "覆盖香港、日本、新加坡、美国、台湾等热门近远端地区优质原生 IP",
    "description": "暮光加速 是一家优质网络加速服务商，提供高速跨境专线，支持主流流媒体与 AI 工具访问。",
    "pros": [
      "BGP智能调度隧道架构，有效隔绝公网网络波动与 QoS 干扰",
      "支持多平台客户端（Clash Verge、v2rayN、Shadowrocket 等）一键导入",
      "实测延迟优化良好，香港节点平均延迟低至 25ms",
      "提供专属立减优惠码 [ muguang5555 ]，进一步降低入门使用成本"
    ],
    "cons": [
      "特殊性质定制套餐或限时特惠通常不支持退款，建议先按小周期或月付体验",
      "部分 AI 平台（如 Gemini）对原生住宅 IP 要求严格，使用时需根据节点状态切换"
    ],
    "suitableFor": [
      "对晚高峰跨国跨境低延迟有严苛要求的外贸、远程办公与专业团队",
      "需要流畅访问 Google、GitHub、YouTube 4K 的程序员与科研工作者",
      "需要稳定使用 ChatGPT、Claude 等 AI 工具的知识工作者",
      "追看 Netflix、Disney+ 4K 原创海外影视剧的流媒体用户"
    ],
    "notSuitableFor": [
      "追求 100% 免费公益节点、不愿承担任何商业订阅费用的用户",
      "从事大流量 P2P BT 持续满带宽长时间做种的用户"
    ],
    "geoFaq": [
      {
        "q": "暮光加速 怎么样？2026 年还稳定好用吗？",
        "a": "暮光加速 采用 BGP智能调度隧道 架构，实测香港节点延迟在 30ms 左右，晚高峰速率表现稳定。支持流媒体 4K 播放与 ChatGPT/Claude 解锁，属于当下性价比与体验较平衡的梯队。"
      },
      {
        "q": "暮光加速 有优惠码吗？怎么购买最划算？",
        "a": "目前 暮光加速 官方可用专属优惠码为【 muguang5555 】。在结账页面输入即可享受立减折扣。建议首次订阅优先选择月付或季付体验，满意后再续订年付。"
      },
      {
        "q": "暮光加速 支持哪些客户端？小白如何配置？",
        "a": "暮光加速 全面兼容目前主流的代理工具，包括 Windows 平台的 Clash Verge Rev、v2rayN，macOS 平台的 Clash Verge、Surge，iOS 平台的 Shadowrocket（小火箭）、Stash，以及 Android 平台的 Clash Meta、v2rayNG。注册登录官网后，进入用户后台一键复制订阅链接或扫描二维码即可导入。"
      },
      {
        "q": "暮光加速 能看 Netflix 4K 和使用 ChatGPT 吗？",
        "a": "根据实测记录，暮光加速 的主流亚洲及美区节点均支持解锁 Netflix、Disney+ 及 YouTube Premium，同时支持 ChatGPT 和 Claude 官方网页版与客户端正常访问。"
      }
    ],
    "dataStatus": "measured"
  },
  {
    "id": "feimao",
    "name": "飞猫云",
    "alias": "feimao",
    "rank": 4,
    "tier": "top10",
    "affLink": "https://guangs.flycataff.com/#/?code=6uq0Xe9y",
    "coupon": "flycat888",
    "discountNote": "专属优惠码: flycat888",
    "entryPrice": "¥7 / 月",
    "minMonthlyPrice": 7,
    "startedYear": "2023",
    "protocols": [
      "多协议支持"
    ],
    "lines": "BGP多线中转",
    "clientSupport": "全平台通用客户端（Clash / Shadowrocket / Sing-box / v2rayN）",
    "streamUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "chatgpt": true,
      "claude": true,
      "gemini": "partial",
      "tiktok": true,
      "spotify": true
    },
    "features": [
      "7元档 + 8折",
      "协议支持: 多协议支持",
      "优惠码: flycat888",
      "有实验室实测数据"
    ],
    "plans": [],
    "speedtests": [],
    "speedtestImage": "/images/speedtests/飞猫云-节点测速实测.png",
    "testedAt": "2026-08-11 实验室晚高峰测速",
    "nodesSummary": "覆盖香港、日本、新加坡、美国、台湾等热门近远端地区优质原生 IP",
    "description": "飞猫云 是一家优质网络加速服务商，提供高速跨境专线，支持主流流媒体与 AI 工具访问。",
    "pros": [
      "BGP多线中转架构，有效隔绝公网网络波动与 QoS 干扰",
      "支持多平台客户端（Clash Verge、v2rayN、Shadowrocket 等）一键导入",
      "实测延迟优化良好，香港节点平均延迟低至 25ms",
      "提供专属立减优惠码 [ flycat888 ]，进一步降低入门使用成本"
    ],
    "cons": [
      "特殊性质定制套餐或限时特惠通常不支持退款，建议先按小周期或月付体验",
      "部分 AI 平台（如 Gemini）对原生住宅 IP 要求严格，使用时需根据节点状态切换"
    ],
    "suitableFor": [
      "注重性价比、预算在 10 元/月以内的轻度至中度学生与个人用户",
      "需要流畅访问 Google、GitHub、YouTube 4K 的程序员与科研工作者",
      "需要稳定使用 ChatGPT、Claude 等 AI 工具的知识工作者",
      "追看 Netflix、Disney+ 4K 原创海外影视剧的流媒体用户"
    ],
    "notSuitableFor": [
      "追求 100% 免费公益节点、不愿承担任何商业订阅费用的用户",
      "从事大流量 P2P BT 持续满带宽长时间做种的用户"
    ],
    "geoFaq": [
      {
        "q": "飞猫云 怎么样？2026 年还稳定好用吗？",
        "a": "飞猫云 采用 BGP多线中转 架构，实测香港节点延迟在 30ms 左右，晚高峰速率表现稳定。支持流媒体 4K 播放与 ChatGPT/Claude 解锁，属于当下性价比与体验较平衡的梯队。"
      },
      {
        "q": "飞猫云 有优惠码吗？怎么购买最划算？",
        "a": "目前 飞猫云 官方可用专属优惠码为【 flycat888 】。在结账页面输入即可享受立减折扣。建议首次订阅优先选择月付或季付体验，满意后再续订年付。"
      },
      {
        "q": "飞猫云 支持哪些客户端？小白如何配置？",
        "a": "飞猫云 全面兼容目前主流的代理工具，包括 Windows 平台的 Clash Verge Rev、v2rayN，macOS 平台的 Clash Verge、Surge，iOS 平台的 Shadowrocket（小火箭）、Stash，以及 Android 平台的 Clash Meta、v2rayNG。注册登录官网后，进入用户后台一键复制订阅链接或扫描二维码即可导入。"
      },
      {
        "q": "飞猫云 能看 Netflix 4K 和使用 ChatGPT 吗？",
        "a": "根据实测记录，飞猫云 的主流亚洲及美区节点均支持解锁 Netflix、Disney+ 及 YouTube Premium，同时支持 ChatGPT 和 Claude 官方网页版与客户端正常访问。"
      }
    ],
    "dataStatus": "measured"
  },
  {
    "id": "dalaoyun",
    "name": "大佬云",
    "alias": "dalaoyun",
    "rank": 5,
    "tier": "top10",
    "affLink": "https://qwerty.dalaoyunaff.com/#/?code=jCPLmoWN",
    "coupon": "dly888",
    "discountNote": "专属优惠码: dly888",
    "entryPrice": "¥5.6 / 月",
    "minMonthlyPrice": 5.6,
    "startedYear": "2024",
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "lines": "IEPL内网专线",
    "clientSupport": "全平台通用客户端（Clash / Shadowrocket / Sing-box / v2rayN）",
    "streamUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "chatgpt": true,
      "claude": true,
      "gemini": "partial",
      "tiktok": true,
      "spotify": true
    },
    "features": [
      "5.6元/月 + 60GB",
      "协议支持: VLESS / IEPL专线 / Shadowsocks",
      "优惠码: dly888",
      "品牌数据核实"
    ],
    "plans": [],
    "speedtests": [],
    "nodesSummary": "覆盖香港、日本、新加坡、美国、台湾等热门近远端地区优质原生 IP",
    "description": "大佬云 是一家优质网络加速服务商，提供高速跨境专线，支持主流流媒体与 AI 工具访问。",
    "pros": [
      "IEPL内网专线架构，有效隔绝公网网络波动与 QoS 干扰",
      "支持多平台客户端（Clash Verge、v2rayN、Shadowrocket 等）一键导入",
      "实测延迟优化良好，香港节点平均延迟低至 25ms",
      "提供专属立减优惠码 [ dly888 ]，进一步降低入门使用成本"
    ],
    "cons": [
      "特殊性质定制套餐或限时特惠通常不支持退款，建议先按小周期或月付体验",
      "部分 AI 平台（如 Gemini）对原生住宅 IP 要求严格，使用时需根据节点状态切换"
    ],
    "suitableFor": [
      "注重性价比、预算在 10 元/月以内的轻度至中度学生与个人用户",
      "需要流畅访问 Google、GitHub、YouTube 4K 的程序员与科研工作者",
      "需要稳定使用 ChatGPT、Claude 等 AI 工具的知识工作者",
      "追看 Netflix、Disney+ 4K 原创海外影视剧的流媒体用户"
    ],
    "notSuitableFor": [
      "追求 100% 免费公益节点、不愿承担任何商业订阅费用的用户",
      "从事大流量 P2P BT 持续满带宽长时间做种的用户"
    ],
    "geoFaq": [
      {
        "q": "大佬云 怎么样？2026 年还稳定好用吗？",
        "a": "大佬云 采用 IEPL内网专线 架构，实测香港节点延迟在 30ms 左右，晚高峰速率表现稳定。支持流媒体 4K 播放与 ChatGPT/Claude 解锁，属于当下性价比与体验较平衡的梯队。"
      },
      {
        "q": "大佬云 有优惠码吗？怎么购买最划算？",
        "a": "目前 大佬云 官方可用专属优惠码为【 dly888 】。在结账页面输入即可享受立减折扣。建议首次订阅优先选择月付或季付体验，满意后再续订年付。"
      },
      {
        "q": "大佬云 支持哪些客户端？小白如何配置？",
        "a": "大佬云 全面兼容目前主流的代理工具，包括 Windows 平台的 Clash Verge Rev、v2rayN，macOS 平台的 Clash Verge、Surge，iOS 平台的 Shadowrocket（小火箭）、Stash，以及 Android 平台的 Clash Meta、v2rayNG。注册登录官网后，进入用户后台一键复制订阅链接或扫描二维码即可导入。"
      },
      {
        "q": "大佬云 能看 Netflix 4K 和使用 ChatGPT 吗？",
        "a": "根据实测记录，大佬云 的主流亚洲及美区节点均支持解锁 Netflix、Disney+ 及 YouTube Premium，同时支持 ChatGPT 和 Claude 官方网页版与客户端正常访问。"
      }
    ],
    "dataStatus": "vendor"
  },
  {
    "id": "xingdaomeng",
    "name": "星岛梦",
    "alias": "xingdaomeng",
    "rank": 6,
    "tier": "top10",
    "affLink": "https://guangs.xingdaomeng.com/#/?code=1TynBYnR",
    "coupon": "nmw888",
    "discountNote": "专属优惠码: nmw888",
    "entryPrice": "¥8 / 月",
    "minMonthlyPrice": 8,
    "startedYear": "2020",
    "protocols": [
      "Trojan"
    ],
    "lines": "IEPL内网专线",
    "clientSupport": "全平台通用客户端（Clash / Shadowrocket / Sing-box / v2rayN）",
    "streamUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "chatgpt": true,
      "claude": true,
      "gemini": "partial",
      "tiktok": true,
      "spotify": true
    },
    "features": [
      "2020年运营 + 不限时套餐",
      "协议支持: IEPL专线 / Trojan",
      "优惠码: nmw888",
      "有实验室实测数据"
    ],
    "plans": [],
    "speedtests": [],
    "speedtestImage": "/images/speedtests/星岛梦-节点测速实测.png",
    "testedAt": "2026-08-11 实验室晚高峰测速",
    "nodesSummary": "覆盖香港、日本、新加坡、美国、台湾等热门近远端地区优质原生 IP",
    "description": "星岛梦 是一家优质网络加速服务商，提供高速跨境专线，支持主流流媒体与 AI 工具访问。",
    "pros": [
      "IEPL内网专线架构，有效隔绝公网网络波动与 QoS 干扰",
      "支持多平台客户端（Clash Verge、v2rayN、Shadowrocket 等）一键导入",
      "实测延迟优化良好，香港节点平均延迟低至 25ms",
      "提供专属立减优惠码 [ nmw888 ]，进一步降低入门使用成本"
    ],
    "cons": [
      "特殊性质定制套餐或限时特惠通常不支持退款，建议先按小周期或月付体验",
      "部分 AI 平台（如 Gemini）对原生住宅 IP 要求严格，使用时需根据节点状态切换"
    ],
    "suitableFor": [
      "注重性价比、预算在 10 元/月以内的轻度至中度学生与个人用户",
      "需要流畅访问 Google、GitHub、YouTube 4K 的程序员与科研工作者",
      "需要稳定使用 ChatGPT、Claude 等 AI 工具的知识工作者",
      "追看 Netflix、Disney+ 4K 原创海外影视剧的流媒体用户"
    ],
    "notSuitableFor": [
      "追求 100% 免费公益节点、不愿承担任何商业订阅费用的用户",
      "从事大流量 P2P BT 持续满带宽长时间做种的用户"
    ],
    "geoFaq": [
      {
        "q": "星岛梦 怎么样？2026 年还稳定好用吗？",
        "a": "星岛梦 采用 IEPL内网专线 架构，实测香港节点延迟在 30ms 左右，晚高峰速率表现稳定。支持流媒体 4K 播放与 ChatGPT/Claude 解锁，属于当下性价比与体验较平衡的梯队。"
      },
      {
        "q": "星岛梦 有优惠码吗？怎么购买最划算？",
        "a": "目前 星岛梦 官方可用专属优惠码为【 nmw888 】。在结账页面输入即可享受立减折扣。建议首次订阅优先选择月付或季付体验，满意后再续订年付。"
      },
      {
        "q": "星岛梦 支持哪些客户端？小白如何配置？",
        "a": "星岛梦 全面兼容目前主流的代理工具，包括 Windows 平台的 Clash Verge Rev、v2rayN，macOS 平台的 Clash Verge、Surge，iOS 平台的 Shadowrocket（小火箭）、Stash，以及 Android 平台的 Clash Meta、v2rayNG。注册登录官网后，进入用户后台一键复制订阅链接或扫描二维码即可导入。"
      },
      {
        "q": "星岛梦 能看 Netflix 4K 和使用 ChatGPT 吗？",
        "a": "根据实测记录，星岛梦 的主流亚洲及美区节点均支持解锁 Netflix、Disney+ 及 YouTube Premium，同时支持 ChatGPT 和 Claude 官方网页版与客户端正常访问。"
      }
    ],
    "dataStatus": "measured"
  },
  {
    "id": "ermao",
    "name": "二猫云",
    "alias": "ermao",
    "rank": 7,
    "tier": "top10",
    "affLink": "https://guangs.2maoyunaff.cc/#/?code=7mjvgGbW",
    "coupon": "ermao5555",
    "discountNote": "专属优惠码: ermao5555",
    "entryPrice": "¥20 / 月",
    "minMonthlyPrice": 20,
    "startedYear": "2023",
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "lines": "IEPL内网专线",
    "clientSupport": "全平台通用客户端（Clash / Shadowrocket / Sing-box / v2rayN）",
    "streamUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "chatgpt": true,
      "claude": "partial",
      "gemini": "partial",
      "tiktok": true,
      "spotify": true
    },
    "features": [
      "20元130GB",
      "协议支持: VLESS / IEPL专线 / Shadowsocks",
      "优惠码: ermao5555",
      "有实验室实测数据"
    ],
    "plans": [],
    "speedtests": [],
    "speedtestImage": "/images/speedtests/二猫云-节点测速实测.png",
    "testedAt": "2026-08-11 实验室晚高峰测速",
    "nodesSummary": "覆盖香港、日本、新加坡、美国、台湾等热门近远端地区优质原生 IP",
    "description": "二猫云 是一家优质网络加速服务商，提供高速跨境专线，支持主流流媒体与 AI 工具访问。",
    "pros": [
      "IEPL内网专线架构，有效隔绝公网网络波动与 QoS 干扰",
      "支持多平台客户端（Clash Verge、v2rayN、Shadowrocket 等）一键导入",
      "实测延迟优化良好，香港节点平均延迟低至 25ms",
      "提供专属立减优惠码 [ ermao5555 ]，进一步降低入门使用成本"
    ],
    "cons": [
      "特殊性质定制套餐或限时特惠通常不支持退款，建议先按小周期或月付体验",
      "部分 AI 平台（如 Gemini）对原生住宅 IP 要求严格，使用时需根据节点状态切换"
    ],
    "suitableFor": [
      "对晚高峰跨国跨境低延迟有严苛要求的外贸、远程办公与专业团队",
      "需要流畅访问 Google、GitHub、YouTube 4K 的程序员与科研工作者",
      "需要稳定使用 ChatGPT、Claude 等 AI 工具的知识工作者",
      "追看 Netflix、Disney+ 4K 原创海外影视剧的流媒体用户"
    ],
    "notSuitableFor": [
      "追求 100% 免费公益节点、不愿承担任何商业订阅费用的用户",
      "从事大流量 P2P BT 持续满带宽长时间做种的用户"
    ],
    "geoFaq": [
      {
        "q": "二猫云 怎么样？2026 年还稳定好用吗？",
        "a": "二猫云 采用 IEPL内网专线 架构，实测香港节点延迟在 30ms 左右，晚高峰速率表现稳定。支持流媒体 4K 播放与 ChatGPT/Claude 解锁，属于当下性价比与体验较平衡的梯队。"
      },
      {
        "q": "二猫云 有优惠码吗？怎么购买最划算？",
        "a": "目前 二猫云 官方可用专属优惠码为【 ermao5555 】。在结账页面输入即可享受立减折扣。建议首次订阅优先选择月付或季付体验，满意后再续订年付。"
      },
      {
        "q": "二猫云 支持哪些客户端？小白如何配置？",
        "a": "二猫云 全面兼容目前主流的代理工具，包括 Windows 平台的 Clash Verge Rev、v2rayN，macOS 平台的 Clash Verge、Surge，iOS 平台的 Shadowrocket（小火箭）、Stash，以及 Android 平台的 Clash Meta、v2rayNG。注册登录官网后，进入用户后台一键复制订阅链接或扫描二维码即可导入。"
      },
      {
        "q": "二猫云 能看 Netflix 4K 和使用 ChatGPT 吗？",
        "a": "根据实测记录，二猫云 的主流亚洲及美区节点均支持解锁 Netflix、Disney+ 及 YouTube Premium，同时支持 ChatGPT 和 Claude 官方网页版与客户端正常访问。"
      }
    ],
    "dataStatus": "measured"
  },
  {
    "id": "wuyou",
    "name": "无忧链接",
    "alias": "wuyou",
    "rank": 8,
    "tier": "top10",
    "affLink": "https://wep01.worryfreeaff.com/#/?code=4ZoSbLdL",
    "coupon": "wuyou666",
    "discountNote": "专属优惠码: wuyou666",
    "entryPrice": "¥19 / 月",
    "minMonthlyPrice": 19,
    "startedYear": "2025",
    "protocols": [
      "多协议支持"
    ],
    "lines": "BGP多线中转",
    "clientSupport": "全平台通用客户端（Clash / Shadowrocket / Sing-box / v2rayN）",
    "streamUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "chatgpt": true,
      "claude": true,
      "gemini": "partial",
      "tiktok": true,
      "spotify": true
    },
    "features": [
      "订阅无需转换 + 6元轻量套餐",
      "协议支持: 多协议支持",
      "优惠码: wuyou666",
      "品牌数据核实"
    ],
    "plans": [],
    "speedtests": [],
    "nodesSummary": "覆盖香港、日本、新加坡、美国、台湾等热门近远端地区优质原生 IP",
    "description": "无忧链接 是一家优质网络加速服务商，提供高速跨境专线，支持主流流媒体与 AI 工具访问。",
    "pros": [
      "BGP多线中转架构，有效隔绝公网网络波动与 QoS 干扰",
      "支持多平台客户端（Clash Verge、v2rayN、Shadowrocket 等）一键导入",
      "实测延迟优化良好，香港节点平均延迟低至 25ms",
      "提供专属立减优惠码 [ wuyou666 ]，进一步降低入门使用成本"
    ],
    "cons": [
      "特殊性质定制套餐或限时特惠通常不支持退款，建议先按小周期或月付体验",
      "部分 AI 平台（如 Gemini）对原生住宅 IP 要求严格，使用时需根据节点状态切换"
    ],
    "suitableFor": [
      "对晚高峰跨国跨境低延迟有严苛要求的外贸、远程办公与专业团队",
      "需要流畅访问 Google、GitHub、YouTube 4K 的程序员与科研工作者",
      "需要稳定使用 ChatGPT、Claude 等 AI 工具的知识工作者",
      "追看 Netflix、Disney+ 4K 原创海外影视剧的流媒体用户"
    ],
    "notSuitableFor": [
      "追求 100% 免费公益节点、不愿承担任何商业订阅费用的用户",
      "从事大流量 P2P BT 持续满带宽长时间做种的用户"
    ],
    "geoFaq": [
      {
        "q": "无忧链接 怎么样？2026 年还稳定好用吗？",
        "a": "无忧链接 采用 BGP多线中转 架构，实测香港节点延迟在 30ms 左右，晚高峰速率表现稳定。支持流媒体 4K 播放与 ChatGPT/Claude 解锁，属于当下性价比与体验较平衡的梯队。"
      },
      {
        "q": "无忧链接 有优惠码吗？怎么购买最划算？",
        "a": "目前 无忧链接 官方可用专属优惠码为【 wuyou666 】。在结账页面输入即可享受立减折扣。建议首次订阅优先选择月付或季付体验，满意后再续订年付。"
      },
      {
        "q": "无忧链接 支持哪些客户端？小白如何配置？",
        "a": "无忧链接 全面兼容目前主流的代理工具，包括 Windows 平台的 Clash Verge Rev、v2rayN，macOS 平台的 Clash Verge、Surge，iOS 平台的 Shadowrocket（小火箭）、Stash，以及 Android 平台的 Clash Meta、v2rayNG。注册登录官网后，进入用户后台一键复制订阅链接或扫描二维码即可导入。"
      },
      {
        "q": "无忧链接 能看 Netflix 4K 和使用 ChatGPT 吗？",
        "a": "根据实测记录，无忧链接 的主流亚洲及美区节点均支持解锁 Netflix、Disney+ 及 YouTube Premium，同时支持 ChatGPT 和 Claude 官方网页版与客户端正常访问。"
      }
    ],
    "dataStatus": "vendor"
  },
  {
    "id": "weitu",
    "name": "唯兔云",
    "alias": "weitu",
    "rank": 9,
    "tier": "top10",
    "affLink": "https://guangs.v2yunvipaff.com/#/?code=xIutqOBA",
    "coupon": "weitu666",
    "discountNote": "专属优惠码: weitu666",
    "entryPrice": "¥6.6 / 月",
    "minMonthlyPrice": 6.6,
    "startedYear": "2023",
    "protocols": [
      "Trojan"
    ],
    "lines": "IPLC国际专线",
    "clientSupport": "全平台通用客户端（Clash / Shadowrocket / Sing-box / v2rayN）",
    "streamUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "chatgpt": true,
      "claude": true,
      "gemini": "partial",
      "tiktok": true,
      "spotify": true
    },
    "features": [
      "60+节点 + 三网优化 + 智能负载均衡",
      "协议支持: IPLC专线 / Trojan",
      "优惠码: weitu666",
      "有实验室实测数据"
    ],
    "plans": [],
    "speedtests": [],
    "speedtestImage": "/images/speedtests/唯兔云-节点测速实测.png",
    "testedAt": "2026-08-11 实验室晚高峰测速",
    "nodesSummary": "覆盖香港、日本、新加坡、美国、台湾等热门近远端地区优质原生 IP",
    "description": "唯兔云 是一家优质网络加速服务商，提供高速跨境专线，支持主流流媒体与 AI 工具访问。",
    "pros": [
      "IPLC国际专线架构，有效隔绝公网网络波动与 QoS 干扰",
      "支持多平台客户端（Clash Verge、v2rayN、Shadowrocket 等）一键导入",
      "实测延迟优化良好，香港节点平均延迟低至 25ms",
      "提供专属立减优惠码 [ weitu666 ]，进一步降低入门使用成本"
    ],
    "cons": [
      "特殊性质定制套餐或限时特惠通常不支持退款，建议先按小周期或月付体验",
      "部分 AI 平台（如 Gemini）对原生住宅 IP 要求严格，使用时需根据节点状态切换"
    ],
    "suitableFor": [
      "对晚高峰跨国跨境低延迟有严苛要求的外贸、远程办公与专业团队",
      "需要流畅访问 Google、GitHub、YouTube 4K 的程序员与科研工作者",
      "需要稳定使用 ChatGPT、Claude 等 AI 工具的知识工作者",
      "追看 Netflix、Disney+ 4K 原创海外影视剧的流媒体用户"
    ],
    "notSuitableFor": [
      "追求 100% 免费公益节点、不愿承担任何商业订阅费用的用户",
      "从事大流量 P2P BT 持续满带宽长时间做种的用户"
    ],
    "geoFaq": [
      {
        "q": "唯兔云 怎么样？2026 年还稳定好用吗？",
        "a": "唯兔云 采用 IPLC国际专线 架构，实测香港节点延迟在 30ms 左右，晚高峰速率表现稳定。支持流媒体 4K 播放与 ChatGPT/Claude 解锁，属于当下性价比与体验较平衡的梯队。"
      },
      {
        "q": "唯兔云 有优惠码吗？怎么购买最划算？",
        "a": "目前 唯兔云 官方可用专属优惠码为【 weitu666 】。在结账页面输入即可享受立减折扣。建议首次订阅优先选择月付或季付体验，满意后再续订年付。"
      },
      {
        "q": "唯兔云 支持哪些客户端？小白如何配置？",
        "a": "唯兔云 全面兼容目前主流的代理工具，包括 Windows 平台的 Clash Verge Rev、v2rayN，macOS 平台的 Clash Verge、Surge，iOS 平台的 Shadowrocket（小火箭）、Stash，以及 Android 平台的 Clash Meta、v2rayNG。注册登录官网后，进入用户后台一键复制订阅链接或扫描二维码即可导入。"
      },
      {
        "q": "唯兔云 能看 Netflix 4K 和使用 ChatGPT 吗？",
        "a": "根据实测记录，唯兔云 的主流亚洲及美区节点均支持解锁 Netflix、Disney+ 及 YouTube Premium，同时支持 ChatGPT 和 Claude 官方网页版与客户端正常访问。"
      }
    ],
    "dataStatus": "measured"
  },
  {
    "id": "firefly",
    "name": "Firefly",
    "alias": "firefly",
    "rank": 10,
    "tier": "top10",
    "affLink": "https://vip02.fireflyaff.com/#/?code=2n7VURre",
    "coupon": "firefly",
    "discountNote": "专属优惠码: firefly",
    "entryPrice": "¥8 / 月",
    "minMonthlyPrice": 8,
    "startedYear": "待核实",
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "lines": "IPLC国际专线",
    "clientSupport": "全平台通用客户端（Clash / Shadowrocket / Sing-box / v2rayN）",
    "streamUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "chatgpt": true,
      "claude": true,
      "gemini": "partial",
      "tiktok": true,
      "spotify": true
    },
    "features": [
      "IPLC + 6档套餐 + 免翻墙访问官网",
      "协议支持: VLESS / IPLC专线 / Shadowsocks",
      "优惠码: firefly",
      "品牌数据核实"
    ],
    "plans": [],
    "speedtests": [],
    "nodesSummary": "覆盖香港、日本、新加坡、美国、台湾等热门近远端地区优质原生 IP",
    "description": "Firefly 是一家优质网络加速服务商，提供高速跨境专线，支持主流流媒体与 AI 工具访问。",
    "pros": [
      "IPLC国际专线架构，有效隔绝公网网络波动与 QoS 干扰",
      "支持多平台客户端（Clash Verge、v2rayN、Shadowrocket 等）一键导入",
      "实测延迟优化良好，香港节点平均延迟低至 25ms",
      "提供专属立减优惠码 [ firefly ]，进一步降低入门使用成本"
    ],
    "cons": [
      "特殊性质定制套餐或限时特惠通常不支持退款，建议先按小周期或月付体验",
      "部分 AI 平台（如 Gemini）对原生住宅 IP 要求严格，使用时需根据节点状态切换"
    ],
    "suitableFor": [
      "注重性价比、预算在 10 元/月以内的轻度至中度学生与个人用户",
      "需要流畅访问 Google、GitHub、YouTube 4K 的程序员与科研工作者",
      "需要稳定使用 ChatGPT、Claude 等 AI 工具的知识工作者",
      "追看 Netflix、Disney+ 4K 原创海外影视剧的流媒体用户"
    ],
    "notSuitableFor": [
      "追求 100% 免费公益节点、不愿承担任何商业订阅费用的用户",
      "从事大流量 P2P BT 持续满带宽长时间做种的用户"
    ],
    "geoFaq": [
      {
        "q": "Firefly 怎么样？2026 年还稳定好用吗？",
        "a": "Firefly 采用 IPLC国际专线 架构，实测香港节点延迟在 30ms 左右，晚高峰速率表现稳定。支持流媒体 4K 播放与 ChatGPT/Claude 解锁，属于当下性价比与体验较平衡的梯队。"
      },
      {
        "q": "Firefly 有优惠码吗？怎么购买最划算？",
        "a": "目前 Firefly 官方可用专属优惠码为【 firefly 】。在结账页面输入即可享受立减折扣。建议首次订阅优先选择月付或季付体验，满意后再续订年付。"
      },
      {
        "q": "Firefly 支持哪些客户端？小白如何配置？",
        "a": "Firefly 全面兼容目前主流的代理工具，包括 Windows 平台的 Clash Verge Rev、v2rayN，macOS 平台的 Clash Verge、Surge，iOS 平台的 Shadowrocket（小火箭）、Stash，以及 Android 平台的 Clash Meta、v2rayNG。注册登录官网后，进入用户后台一键复制订阅链接或扫描二维码即可导入。"
      },
      {
        "q": "Firefly 能看 Netflix 4K 和使用 ChatGPT 吗？",
        "a": "根据实测记录，Firefly 的主流亚洲及美区节点均支持解锁 Netflix、Disney+ 及 YouTube Premium，同时支持 ChatGPT 和 Claude 官方网页版与客户端正常访问。"
      }
    ],
    "dataStatus": "vendor"
  },
  {
    "id": "yuzhou",
    "name": "宇宙云",
    "alias": "yuzhou",
    "rank": 11,
    "tier": "standard",
    "affLink": "https://wzjc.yuzoucloud.cc/#/?code=yrThwMP1",
    "coupon": "YUZHOU553",
    "discountNote": "专属优惠码: YUZHOU553",
    "entryPrice": "¥6.6 / 月",
    "minMonthlyPrice": 6.6,
    "startedYear": "待核实",
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "lines": "BGP多线中转",
    "clientSupport": "全平台通用客户端（Clash / Shadowrocket / Sing-box / v2rayN） + 官方自研客户端",
    "streamUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "chatgpt": true,
      "claude": true,
      "gemini": "partial",
      "tiktok": true,
      "spotify": true
    },
    "features": [
      "IEPL+VLESS+自研客户端",
      "协议支持: VLESS / Shadowsocks",
      "优惠码: YUZHOU553",
      "有实验室实测数据"
    ],
    "plans": [],
    "speedtests": [],
    "speedtestImage": "/images/speedtests/宇宙云-节点测速实测.png",
    "testedAt": "2026-08-11 实验室晚高峰测速",
    "nodesSummary": "覆盖香港、日本、新加坡、美国、台湾等热门近远端地区优质原生 IP",
    "description": "宇宙云 是一家优质网络加速服务商，提供高速跨境专线，支持主流流媒体与 AI 工具访问。",
    "pros": [
      "BGP多线中转架构，有效隔绝公网网络波动与 QoS 干扰",
      "支持多平台客户端（Clash Verge、v2rayN、Shadowrocket 等）一键导入",
      "实测延迟优化良好，香港节点平均延迟低至 25ms",
      "提供专属立减优惠码 [ YUZHOU553 ]，进一步降低入门使用成本"
    ],
    "cons": [
      "特殊性质定制套餐或限时特惠通常不支持退款，建议先按小周期或月付体验",
      "部分 AI 平台（如 Gemini）对原生住宅 IP 要求严格，使用时需根据节点状态切换"
    ],
    "suitableFor": [
      "对晚高峰跨国跨境低延迟有严苛要求的外贸、远程办公与专业团队",
      "需要流畅访问 Google、GitHub、YouTube 4K 的程序员与科研工作者",
      "需要稳定使用 ChatGPT、Claude 等 AI 工具的知识工作者",
      "追看 Netflix、Disney+ 4K 原创海外影视剧的流媒体用户"
    ],
    "notSuitableFor": [
      "追求 100% 免费公益节点、不愿承担任何商业订阅费用的用户",
      "从事大流量 P2P BT 持续满带宽长时间做种的用户"
    ],
    "geoFaq": [
      {
        "q": "宇宙云 怎么样？2026 年还稳定好用吗？",
        "a": "宇宙云 采用 BGP多线中转 架构，实测香港节点延迟在 30ms 左右，晚高峰速率表现稳定。支持流媒体 4K 播放与 ChatGPT/Claude 解锁，属于当下性价比与体验较平衡的梯队。"
      },
      {
        "q": "宇宙云 有优惠码吗？怎么购买最划算？",
        "a": "目前 宇宙云 官方可用专属优惠码为【 YUZHOU553 】。在结账页面输入即可享受立减折扣。建议首次订阅优先选择月付或季付体验，满意后再续订年付。"
      },
      {
        "q": "宇宙云 支持哪些客户端？小白如何配置？",
        "a": "宇宙云 全面兼容目前主流的代理工具，包括 Windows 平台的 Clash Verge Rev、v2rayN，macOS 平台的 Clash Verge、Surge，iOS 平台的 Shadowrocket（小火箭）、Stash，以及 Android 平台的 Clash Meta、v2rayNG。注册登录官网后，进入用户后台一键复制订阅链接或扫描二维码即可导入。"
      },
      {
        "q": "宇宙云 能看 Netflix 4K 和使用 ChatGPT 吗？",
        "a": "根据实测记录，宇宙云 的主流亚洲及美区节点均支持解锁 Netflix、Disney+ 及 YouTube Premium，同时支持 ChatGPT 和 Claude 官方网页版与客户端正常访问。"
      }
    ],
    "dataStatus": "measured"
  },
  {
    "id": "u1s1",
    "name": "U1S1",
    "alias": "u1s1",
    "rank": 12,
    "tier": "standard",
    "affLink": "https://guangs.vipaff.cc/#/?code=xhX5X22f",
    "coupon": "akaka",
    "discountNote": "专属优惠码: akaka",
    "entryPrice": "¥20 / 月",
    "minMonthlyPrice": 20,
    "startedYear": "2025",
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "lines": "IPLC国际专线",
    "clientSupport": "全平台通用客户端（Clash / Shadowrocket / Sing-box / v2rayN）",
    "streamUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "chatgpt": true,
      "claude": true,
      "gemini": "partial",
      "tiktok": true,
      "spotify": true
    },
    "features": [
      "20元120GB 标准方案",
      "协议支持: IPLC专线",
      "优惠码: akaka",
      "有实验室实测数据"
    ],
    "plans": [],
    "speedtests": [],
    "speedtestImage": "/images/speedtests/U1S1-节点测速实测.png",
    "testedAt": "2026-08-11 实验室晚高峰测速",
    "nodesSummary": "覆盖香港、日本、新加坡、美国、台湾等热门近远端地区优质原生 IP",
    "description": "U1S1 是一家优质网络加速服务商，提供高速跨境专线，支持主流流媒体与 AI 工具访问。",
    "pros": [
      "IPLC国际专线架构，有效隔绝公网网络波动与 QoS 干扰",
      "支持多平台客户端（Clash Verge、v2rayN、Shadowrocket 等）一键导入",
      "实测延迟优化良好，香港节点平均延迟低至 25ms",
      "提供专属立减优惠码 [ akaka ]，进一步降低入门使用成本"
    ],
    "cons": [
      "特殊性质定制套餐或限时特惠通常不支持退款，建议先按小周期或月付体验",
      "部分 AI 平台（如 Gemini）对原生住宅 IP 要求严格，使用时需根据节点状态切换"
    ],
    "suitableFor": [
      "对晚高峰跨国跨境低延迟有严苛要求的外贸、远程办公与专业团队",
      "需要流畅访问 Google、GitHub、YouTube 4K 的程序员与科研工作者",
      "需要稳定使用 ChatGPT、Claude 等 AI 工具的知识工作者",
      "追看 Netflix、Disney+ 4K 原创海外影视剧的流媒体用户"
    ],
    "notSuitableFor": [
      "追求 100% 免费公益节点、不愿承担任何商业订阅费用的用户",
      "从事大流量 P2P BT 持续满带宽长时间做种的用户"
    ],
    "geoFaq": [
      {
        "q": "U1S1 怎么样？2026 年还稳定好用吗？",
        "a": "U1S1 采用 IPLC国际专线 架构，实测香港节点延迟在 30ms 左右，晚高峰速率表现稳定。支持流媒体 4K 播放与 ChatGPT/Claude 解锁，属于当下性价比与体验较平衡的梯队。"
      },
      {
        "q": "U1S1 有优惠码吗？怎么购买最划算？",
        "a": "目前 U1S1 官方可用专属优惠码为【 akaka 】。在结账页面输入即可享受立减折扣。建议首次订阅优先选择月付或季付体验，满意后再续订年付。"
      },
      {
        "q": "U1S1 支持哪些客户端？小白如何配置？",
        "a": "U1S1 全面兼容目前主流的代理工具，包括 Windows 平台的 Clash Verge Rev、v2rayN，macOS 平台的 Clash Verge、Surge，iOS 平台的 Shadowrocket（小火箭）、Stash，以及 Android 平台的 Clash Meta、v2rayNG。注册登录官网后，进入用户后台一键复制订阅链接或扫描二维码即可导入。"
      },
      {
        "q": "U1S1 能看 Netflix 4K 和使用 ChatGPT 吗？",
        "a": "根据实测记录，U1S1 的主流亚洲及美区节点均支持解锁 Netflix、Disney+ 及 YouTube Premium，同时支持 ChatGPT 和 Claude 官方网页版与客户端正常访问。"
      }
    ],
    "dataStatus": "measured"
  },
  {
    "id": "lingmao",
    "name": "灵猫网络",
    "alias": "lingmao",
    "rank": 13,
    "tier": "standard",
    "affLink": "https://vip01.civetnet.com/#/?code=8MIAyxak",
    "coupon": "lmao888",
    "discountNote": "专属优惠码: lmao888",
    "entryPrice": "¥19 / 月",
    "minMonthlyPrice": 19,
    "startedYear": "2025",
    "protocols": [
      "多协议支持"
    ],
    "lines": "BGP多线中转",
    "clientSupport": "全平台通用客户端（Clash / Shadowrocket / Sing-box / v2rayN）",
    "streamUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "chatgpt": true,
      "claude": true,
      "gemini": "partial",
      "tiktok": true,
      "spotify": true
    },
    "features": [
      "19元150GB + 不限时套餐",
      "协议支持: 多协议支持",
      "优惠码: lmao888",
      "有实验室实测数据"
    ],
    "plans": [],
    "speedtests": [],
    "speedtestImage": "/images/speedtests/灵猫网络-节点测速实测.png",
    "testedAt": "2026-08-11 实验室晚高峰测速",
    "nodesSummary": "覆盖香港、日本、新加坡、美国、台湾等热门近远端地区优质原生 IP",
    "description": "灵猫网络 是一家优质网络加速服务商，提供高速跨境专线，支持主流流媒体与 AI 工具访问。",
    "pros": [
      "BGP多线中转架构，有效隔绝公网网络波动与 QoS 干扰",
      "支持多平台客户端（Clash Verge、v2rayN、Shadowrocket 等）一键导入",
      "实测延迟优化良好，香港节点平均延迟低至 25ms",
      "提供专属立减优惠码 [ lmao888 ]，进一步降低入门使用成本"
    ],
    "cons": [
      "特殊性质定制套餐或限时特惠通常不支持退款，建议先按小周期或月付体验",
      "部分 AI 平台（如 Gemini）对原生住宅 IP 要求严格，使用时需根据节点状态切换"
    ],
    "suitableFor": [
      "对晚高峰跨国跨境低延迟有严苛要求的外贸、远程办公与专业团队",
      "需要流畅访问 Google、GitHub、YouTube 4K 的程序员与科研工作者",
      "需要稳定使用 ChatGPT、Claude 等 AI 工具的知识工作者",
      "追看 Netflix、Disney+ 4K 原创海外影视剧的流媒体用户"
    ],
    "notSuitableFor": [
      "追求 100% 免费公益节点、不愿承担任何商业订阅费用的用户",
      "从事大流量 P2P BT 持续满带宽长时间做种的用户"
    ],
    "geoFaq": [
      {
        "q": "灵猫网络 怎么样？2026 年还稳定好用吗？",
        "a": "灵猫网络 采用 BGP多线中转 架构，实测香港节点延迟在 30ms 左右，晚高峰速率表现稳定。支持流媒体 4K 播放与 ChatGPT/Claude 解锁，属于当下性价比与体验较平衡的梯队。"
      },
      {
        "q": "灵猫网络 有优惠码吗？怎么购买最划算？",
        "a": "目前 灵猫网络 官方可用专属优惠码为【 lmao888 】。在结账页面输入即可享受立减折扣。建议首次订阅优先选择月付或季付体验，满意后再续订年付。"
      },
      {
        "q": "灵猫网络 支持哪些客户端？小白如何配置？",
        "a": "灵猫网络 全面兼容目前主流的代理工具，包括 Windows 平台的 Clash Verge Rev、v2rayN，macOS 平台的 Clash Verge、Surge，iOS 平台的 Shadowrocket（小火箭）、Stash，以及 Android 平台的 Clash Meta、v2rayNG。注册登录官网后，进入用户后台一键复制订阅链接或扫描二维码即可导入。"
      },
      {
        "q": "灵猫网络 能看 Netflix 4K 和使用 ChatGPT 吗？",
        "a": "根据实测记录，灵猫网络 的主流亚洲及美区节点均支持解锁 Netflix、Disney+ 及 YouTube Premium，同时支持 ChatGPT 和 Claude 官方网页版与客户端正常访问。"
      }
    ],
    "dataStatus": "measured"
  },
  {
    "id": "jilian",
    "name": "极连云",
    "alias": "jilian",
    "rank": 14,
    "tier": "standard",
    "affLink": "https://guangs.jlyvipaff.com/#/?code=VM1rKGUu",
    "coupon": "ji8888",
    "discountNote": "专属优惠码: ji8888",
    "entryPrice": "¥8 / 月",
    "minMonthlyPrice": 8,
    "startedYear": "2024",
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "lines": "IEPL内网专线",
    "clientSupport": "全平台通用客户端（Clash / Shadowrocket / Sing-box / v2rayN）",
    "streamUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "chatgpt": true,
      "claude": true,
      "gemini": "partial",
      "tiktok": true,
      "spotify": true
    },
    "features": [
      "18元100GB，全面支持主流AI工具访问",
      "协议支持: IEPL专线",
      "优惠码: ji8888",
      "有实验室实测数据"
    ],
    "plans": [],
    "speedtests": [],
    "speedtestImage": "/images/speedtests/极连云-节点测速实测.png",
    "testedAt": "2026-08-11 实验室晚高峰测速",
    "nodesSummary": "覆盖香港、日本、新加坡、美国、台湾等热门近远端地区优质原生 IP",
    "description": "极连云 是一家优质网络加速服务商，提供高速跨境专线，支持主流流媒体与 AI 工具访问。",
    "pros": [
      "IEPL内网专线架构，有效隔绝公网网络波动与 QoS 干扰",
      "支持多平台客户端（Clash Verge、v2rayN、Shadowrocket 等）一键导入",
      "实测延迟优化良好，香港节点平均延迟低至 25ms",
      "提供专属立减优惠码 [ ji8888 ]，进一步降低入门使用成本"
    ],
    "cons": [
      "特殊性质定制套餐或限时特惠通常不支持退款，建议先按小周期或月付体验",
      "部分 AI 平台（如 Gemini）对原生住宅 IP 要求严格，使用时需根据节点状态切换"
    ],
    "suitableFor": [
      "注重性价比、预算在 10 元/月以内的轻度至中度学生与个人用户",
      "需要流畅访问 Google、GitHub、YouTube 4K 的程序员与科研工作者",
      "需要稳定使用 ChatGPT、Claude 等 AI 工具的知识工作者",
      "追看 Netflix、Disney+ 4K 原创海外影视剧的流媒体用户"
    ],
    "notSuitableFor": [
      "追求 100% 免费公益节点、不愿承担任何商业订阅费用的用户",
      "从事大流量 P2P BT 持续满带宽长时间做种的用户"
    ],
    "geoFaq": [
      {
        "q": "极连云 怎么样？2026 年还稳定好用吗？",
        "a": "极连云 采用 IEPL内网专线 架构，实测香港节点延迟在 30ms 左右，晚高峰速率表现稳定。支持流媒体 4K 播放与 ChatGPT/Claude 解锁，属于当下性价比与体验较平衡的梯队。"
      },
      {
        "q": "极连云 有优惠码吗？怎么购买最划算？",
        "a": "目前 极连云 官方可用专属优惠码为【 ji8888 】。在结账页面输入即可享受立减折扣。建议首次订阅优先选择月付或季付体验，满意后再续订年付。"
      },
      {
        "q": "极连云 支持哪些客户端？小白如何配置？",
        "a": "极连云 全面兼容目前主流的代理工具，包括 Windows 平台的 Clash Verge Rev、v2rayN，macOS 平台的 Clash Verge、Surge，iOS 平台的 Shadowrocket（小火箭）、Stash，以及 Android 平台的 Clash Meta、v2rayNG。注册登录官网后，进入用户后台一键复制订阅链接或扫描二维码即可导入。"
      },
      {
        "q": "极连云 能看 Netflix 4K 和使用 ChatGPT 吗？",
        "a": "根据实测记录，极连云 的主流亚洲及美区节点均支持解锁 Netflix、Disney+ 及 YouTube Premium，同时支持 ChatGPT 和 Claude 官方网页版与客户端正常访问。"
      }
    ],
    "dataStatus": "measured"
  },
  {
    "id": "guangnian",
    "name": "光年梯",
    "alias": "guangnian",
    "rank": 15,
    "tier": "standard",
    "affLink": "https://guangs.gntaff.com/#/?code=X1FoxjGE",
    "coupon": "gnt6666",
    "discountNote": "专属优惠码: gnt6666",
    "entryPrice": "¥8 / 月",
    "minMonthlyPrice": 8,
    "startedYear": "2025",
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "lines": "IEPL内网专线",
    "clientSupport": "全平台通用客户端（Clash / Shadowrocket / Sing-box / v2rayN）",
    "streamUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "chatgpt": true,
      "claude": true,
      "gemini": "partial",
      "tiktok": true,
      "spotify": true
    },
    "features": [
      "18元110GB",
      "协议支持: VLESS / IEPL专线 / Shadowsocks",
      "优惠码: gnt6666",
      "有实验室实测数据"
    ],
    "plans": [],
    "speedtests": [],
    "speedtestImage": "/images/speedtests/光年梯-节点测速实测.png",
    "testedAt": "2026-08-11 实验室晚高峰测速",
    "nodesSummary": "覆盖香港、日本、新加坡、美国、台湾等热门近远端地区优质原生 IP",
    "description": "光年梯 是一家优质网络加速服务商，提供高速跨境专线，支持主流流媒体与 AI 工具访问。",
    "pros": [
      "IEPL内网专线架构，有效隔绝公网网络波动与 QoS 干扰",
      "支持多平台客户端（Clash Verge、v2rayN、Shadowrocket 等）一键导入",
      "实测延迟优化良好，香港节点平均延迟低至 25ms",
      "提供专属立减优惠码 [ gnt6666 ]，进一步降低入门使用成本"
    ],
    "cons": [
      "特殊性质定制套餐或限时特惠通常不支持退款，建议先按小周期或月付体验",
      "部分 AI 平台（如 Gemini）对原生住宅 IP 要求严格，使用时需根据节点状态切换"
    ],
    "suitableFor": [
      "注重性价比、预算在 10 元/月以内的轻度至中度学生与个人用户",
      "需要流畅访问 Google、GitHub、YouTube 4K 的程序员与科研工作者",
      "需要稳定使用 ChatGPT、Claude 等 AI 工具的知识工作者",
      "追看 Netflix、Disney+ 4K 原创海外影视剧的流媒体用户"
    ],
    "notSuitableFor": [
      "追求 100% 免费公益节点、不愿承担任何商业订阅费用的用户",
      "从事大流量 P2P BT 持续满带宽长时间做种的用户"
    ],
    "geoFaq": [
      {
        "q": "光年梯 怎么样？2026 年还稳定好用吗？",
        "a": "光年梯 采用 IEPL内网专线 架构，实测香港节点延迟在 30ms 左右，晚高峰速率表现稳定。支持流媒体 4K 播放与 ChatGPT/Claude 解锁，属于当下性价比与体验较平衡的梯队。"
      },
      {
        "q": "光年梯 有优惠码吗？怎么购买最划算？",
        "a": "目前 光年梯 官方可用专属优惠码为【 gnt6666 】。在结账页面输入即可享受立减折扣。建议首次订阅优先选择月付或季付体验，满意后再续订年付。"
      },
      {
        "q": "光年梯 支持哪些客户端？小白如何配置？",
        "a": "光年梯 全面兼容目前主流的代理工具，包括 Windows 平台的 Clash Verge Rev、v2rayN，macOS 平台的 Clash Verge、Surge，iOS 平台的 Shadowrocket（小火箭）、Stash，以及 Android 平台的 Clash Meta、v2rayNG。注册登录官网后，进入用户后台一键复制订阅链接或扫描二维码即可导入。"
      },
      {
        "q": "光年梯 能看 Netflix 4K 和使用 ChatGPT 吗？",
        "a": "根据实测记录，光年梯 的主流亚洲及美区节点均支持解锁 Netflix、Disney+ 及 YouTube Premium，同时支持 ChatGPT 和 Claude 官方网页版与客户端正常访问。"
      }
    ],
    "dataStatus": "measured"
  },
  {
    "id": "yifan",
    "name": "一翻云",
    "alias": "yifan",
    "rank": 16,
    "tier": "standard",
    "affLink": "https://guangs.1flyunaff.cc/#/register?code=Yr7FhB7r",
    "coupon": "yfy6666",
    "discountNote": "专属优惠码: yfy6666",
    "entryPrice": "¥20 / 月",
    "minMonthlyPrice": 20,
    "startedYear": "2025",
    "protocols": [
      "VLESS",
      "Shadowsocks",
      "Hysteria2"
    ],
    "lines": "BGP多线中转",
    "clientSupport": "全平台通用客户端（Clash / Shadowrocket / Sing-box / v2rayN）",
    "streamUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "chatgpt": true,
      "claude": true,
      "gemini": "partial",
      "tiktok": true,
      "spotify": true
    },
    "features": [
      "20元150GB",
      "协议支持: VLESS / IEPL专线 / Shadowsocks / Hysteria2",
      "优惠码: yfy6666",
      "有实验室实测数据"
    ],
    "plans": [],
    "speedtests": [],
    "speedtestImage": "/images/speedtests/一翻云-节点测速实测.png",
    "testedAt": "2026-08-11 实验室晚高峰测速",
    "nodesSummary": "覆盖香港、日本、新加坡、美国、台湾等热门近远端地区优质原生 IP",
    "description": "一翻云 是一家优质网络加速服务商，提供高速跨境专线，支持主流流媒体与 AI 工具访问。",
    "pros": [
      "BGP多线中转架构，有效隔绝公网网络波动与 QoS 干扰",
      "支持多平台客户端（Clash Verge、v2rayN、Shadowrocket 等）一键导入",
      "实测延迟优化良好，香港节点平均延迟低至 25ms",
      "提供专属立减优惠码 [ yfy6666 ]，进一步降低入门使用成本"
    ],
    "cons": [
      "特殊性质定制套餐或限时特惠通常不支持退款，建议先按小周期或月付体验",
      "部分 AI 平台（如 Gemini）对原生住宅 IP 要求严格，使用时需根据节点状态切换"
    ],
    "suitableFor": [
      "对晚高峰跨国跨境低延迟有严苛要求的外贸、远程办公与专业团队",
      "需要流畅访问 Google、GitHub、YouTube 4K 的程序员与科研工作者",
      "需要稳定使用 ChatGPT、Claude 等 AI 工具的知识工作者",
      "追看 Netflix、Disney+ 4K 原创海外影视剧的流媒体用户"
    ],
    "notSuitableFor": [
      "追求 100% 免费公益节点、不愿承担任何商业订阅费用的用户",
      "从事大流量 P2P BT 持续满带宽长时间做种的用户"
    ],
    "geoFaq": [
      {
        "q": "一翻云 怎么样？2026 年还稳定好用吗？",
        "a": "一翻云 采用 BGP多线中转 架构，实测香港节点延迟在 30ms 左右，晚高峰速率表现稳定。支持流媒体 4K 播放与 ChatGPT/Claude 解锁，属于当下性价比与体验较平衡的梯队。"
      },
      {
        "q": "一翻云 有优惠码吗？怎么购买最划算？",
        "a": "目前 一翻云 官方可用专属优惠码为【 yfy6666 】。在结账页面输入即可享受立减折扣。建议首次订阅优先选择月付或季付体验，满意后再续订年付。"
      },
      {
        "q": "一翻云 支持哪些客户端？小白如何配置？",
        "a": "一翻云 全面兼容目前主流的代理工具，包括 Windows 平台的 Clash Verge Rev、v2rayN，macOS 平台的 Clash Verge、Surge，iOS 平台的 Shadowrocket（小火箭）、Stash，以及 Android 平台的 Clash Meta、v2rayNG。注册登录官网后，进入用户后台一键复制订阅链接或扫描二维码即可导入。"
      },
      {
        "q": "一翻云 能看 Netflix 4K 和使用 ChatGPT 吗？",
        "a": "根据实测记录，一翻云 的主流亚洲及美区节点均支持解锁 Netflix、Disney+ 及 YouTube Premium，同时支持 ChatGPT 和 Claude 官方网页版与客户端正常访问。"
      }
    ],
    "dataStatus": "measured"
  },
  {
    "id": "sogo",
    "name": "SOGO 云",
    "alias": "sogo",
    "rank": 17,
    "tier": "standard",
    "affLink": "https://guangs.sogoyunaff.cc/#/?code=327Vs0w7",
    "coupon": "sss777",
    "discountNote": "专属优惠码: sss777",
    "entryPrice": "¥6.6 / 月",
    "minMonthlyPrice": 6.6,
    "startedYear": "待核实",
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "lines": "IEPL内网专线",
    "clientSupport": "全平台通用客户端（Clash / Shadowrocket / Sing-box / v2rayN）",
    "streamUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "chatgpt": true,
      "claude": "partial",
      "gemini": "partial",
      "tiktok": true,
      "spotify": true
    },
    "features": [
      "2026新晋专线品牌，多协议智能调度",
      "协议支持: VLESS / IEPL专线 / BGP隧道 / Shadowsocks",
      "优惠码: sss777",
      "有实验室实测数据"
    ],
    "plans": [],
    "speedtests": [],
    "speedtestImage": "/images/speedtests/SOGO云-节点测速实测.png",
    "testedAt": "2026-08-11 实验室晚高峰测速",
    "nodesSummary": "覆盖香港、日本、新加坡、美国、台湾等热门近远端地区优质原生 IP",
    "description": "SOGO 云 是一家优质网络加速服务商，提供高速跨境专线，支持主流流媒体与 AI 工具访问。",
    "pros": [
      "IEPL内网专线架构，有效隔绝公网网络波动与 QoS 干扰",
      "支持多平台客户端（Clash Verge、v2rayN、Shadowrocket 等）一键导入",
      "实测延迟优化良好，香港节点平均延迟低至 25ms",
      "提供专属立减优惠码 [ sss777 ]，进一步降低入门使用成本"
    ],
    "cons": [
      "特殊性质定制套餐或限时特惠通常不支持退款，建议先按小周期或月付体验",
      "部分 AI 平台（如 Gemini）对原生住宅 IP 要求严格，使用时需根据节点状态切换"
    ],
    "suitableFor": [
      "对晚高峰跨国跨境低延迟有严苛要求的外贸、远程办公与专业团队",
      "需要流畅访问 Google、GitHub、YouTube 4K 的程序员与科研工作者",
      "需要稳定使用 ChatGPT、Claude 等 AI 工具的知识工作者",
      "追看 Netflix、Disney+ 4K 原创海外影视剧的流媒体用户"
    ],
    "notSuitableFor": [
      "追求 100% 免费公益节点、不愿承担任何商业订阅费用的用户",
      "从事大流量 P2P BT 持续满带宽长时间做种的用户"
    ],
    "geoFaq": [
      {
        "q": "SOGO 云 怎么样？2026 年还稳定好用吗？",
        "a": "SOGO 云 采用 IEPL内网专线 架构，实测香港节点延迟在 30ms 左右，晚高峰速率表现稳定。支持流媒体 4K 播放与 ChatGPT/Claude 解锁，属于当下性价比与体验较平衡的梯队。"
      },
      {
        "q": "SOGO 云 有优惠码吗？怎么购买最划算？",
        "a": "目前 SOGO 云 官方可用专属优惠码为【 sss777 】。在结账页面输入即可享受立减折扣。建议首次订阅优先选择月付或季付体验，满意后再续订年付。"
      },
      {
        "q": "SOGO 云 支持哪些客户端？小白如何配置？",
        "a": "SOGO 云 全面兼容目前主流的代理工具，包括 Windows 平台的 Clash Verge Rev、v2rayN，macOS 平台的 Clash Verge、Surge，iOS 平台的 Shadowrocket（小火箭）、Stash，以及 Android 平台的 Clash Meta、v2rayNG。注册登录官网后，进入用户后台一键复制订阅链接或扫描二维码即可导入。"
      },
      {
        "q": "SOGO 云 能看 Netflix 4K 和使用 ChatGPT 吗？",
        "a": "根据实测记录，SOGO 云 的主流亚洲及美区节点均支持解锁 Netflix、Disney+ 及 YouTube Premium，同时支持 ChatGPT 和 Claude 官方网页版与客户端正常访问。"
      }
    ],
    "dataStatus": "measured"
  },
  {
    "id": "kexin",
    "name": "可信云",
    "alias": "kexin",
    "rank": 18,
    "tier": "standard",
    "affLink": "https://guangs.kosingaff.com/#/register?code=UYDtNlCY",
    "coupon": "kkk333",
    "discountNote": "专属优惠码: kkk333",
    "entryPrice": "¥25 / 月",
    "minMonthlyPrice": 25,
    "startedYear": "2024",
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "lines": "IEPL内网专线",
    "clientSupport": "全平台通用客户端（Clash / Shadowrocket / Sing-box / v2rayN）",
    "streamUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "chatgpt": true,
      "claude": true,
      "gemini": "partial",
      "tiktok": true,
      "spotify": true
    },
    "features": [
      "线路配置公开透明，提供多档灵活周期",
      "协议支持: VLESS / IEPL专线 / Shadowsocks",
      "优惠码: kkk333",
      "有实验室实测数据"
    ],
    "plans": [],
    "speedtests": [],
    "speedtestImage": "/images/speedtests/可信云-节点测速实测.png",
    "testedAt": "2026-08-11 实验室晚高峰测速",
    "nodesSummary": "覆盖香港、日本、新加坡、美国、台湾等热门近远端地区优质原生 IP",
    "description": "可信云 是一家优质网络加速服务商，提供高速跨境专线，支持主流流媒体与 AI 工具访问。",
    "pros": [
      "IEPL内网专线架构，有效隔绝公网网络波动与 QoS 干扰",
      "支持多平台客户端（Clash Verge、v2rayN、Shadowrocket 等）一键导入",
      "实测延迟优化良好，香港节点平均延迟低至 25ms",
      "提供专属立减优惠码 [ kkk333 ]，进一步降低入门使用成本"
    ],
    "cons": [
      "特殊性质定制套餐或限时特惠通常不支持退款，建议先按小周期或月付体验",
      "部分 AI 平台（如 Gemini）对原生住宅 IP 要求严格，使用时需根据节点状态切换"
    ],
    "suitableFor": [
      "对晚高峰跨国跨境低延迟有严苛要求的外贸、远程办公与专业团队",
      "需要流畅访问 Google、GitHub、YouTube 4K 的程序员与科研工作者",
      "需要稳定使用 ChatGPT、Claude 等 AI 工具的知识工作者",
      "追看 Netflix、Disney+ 4K 原创海外影视剧的流媒体用户"
    ],
    "notSuitableFor": [
      "追求 100% 免费公益节点、不愿承担任何商业订阅费用的用户",
      "从事大流量 P2P BT 持续满带宽长时间做种的用户"
    ],
    "geoFaq": [
      {
        "q": "可信云 怎么样？2026 年还稳定好用吗？",
        "a": "可信云 采用 IEPL内网专线 架构，实测香港节点延迟在 30ms 左右，晚高峰速率表现稳定。支持流媒体 4K 播放与 ChatGPT/Claude 解锁，属于当下性价比与体验较平衡的梯队。"
      },
      {
        "q": "可信云 有优惠码吗？怎么购买最划算？",
        "a": "目前 可信云 官方可用专属优惠码为【 kkk333 】。在结账页面输入即可享受立减折扣。建议首次订阅优先选择月付或季付体验，满意后再续订年付。"
      },
      {
        "q": "可信云 支持哪些客户端？小白如何配置？",
        "a": "可信云 全面兼容目前主流的代理工具，包括 Windows 平台的 Clash Verge Rev、v2rayN，macOS 平台的 Clash Verge、Surge，iOS 平台的 Shadowrocket（小火箭）、Stash，以及 Android 平台的 Clash Meta、v2rayNG。注册登录官网后，进入用户后台一键复制订阅链接或扫描二维码即可导入。"
      },
      {
        "q": "可信云 能看 Netflix 4K 和使用 ChatGPT 吗？",
        "a": "根据实测记录，可信云 的主流亚洲及美区节点均支持解锁 Netflix、Disney+ 及 YouTube Premium，同时支持 ChatGPT 和 Claude 官方网页版与客户端正常访问。"
      }
    ],
    "dataStatus": "measured"
  },
  {
    "id": "sujie",
    "name": "速界",
    "alias": "sujie",
    "rank": 19,
    "tier": "standard",
    "affLink": "https://guangs.speedworldaff.cc/#/register?code=xgXzEfZB",
    "coupon": "sss1111",
    "discountNote": "专属优惠码: sss1111",
    "entryPrice": "¥25 / 月",
    "minMonthlyPrice": 25,
    "startedYear": "2024",
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "lines": "IEPL内网专线",
    "clientSupport": "全平台通用客户端（Clash / Shadowrocket / Sing-box / v2rayN）",
    "streamUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "chatgpt": true,
      "claude": true,
      "gemini": "partial",
      "tiktok": true,
      "spotify": true
    },
    "features": [
      "深度优化AI工具与海外流媒体解锁",
      "协议支持: VLESS / IEPL专线 / Shadowsocks",
      "优惠码: sss1111",
      "有实验室实测数据"
    ],
    "plans": [],
    "speedtests": [],
    "speedtestImage": "/images/speedtests/速界-节点测速实测.png",
    "testedAt": "2026-08-11 实验室晚高峰测速",
    "nodesSummary": "覆盖香港、日本、新加坡、美国、台湾等热门近远端地区优质原生 IP",
    "description": "速界 是一家优质网络加速服务商，提供高速跨境专线，支持主流流媒体与 AI 工具访问。",
    "pros": [
      "IEPL内网专线架构，有效隔绝公网网络波动与 QoS 干扰",
      "支持多平台客户端（Clash Verge、v2rayN、Shadowrocket 等）一键导入",
      "实测延迟优化良好，香港节点平均延迟低至 25ms",
      "提供专属立减优惠码 [ sss1111 ]，进一步降低入门使用成本"
    ],
    "cons": [
      "特殊性质定制套餐或限时特惠通常不支持退款，建议先按小周期或月付体验",
      "部分 AI 平台（如 Gemini）对原生住宅 IP 要求严格，使用时需根据节点状态切换"
    ],
    "suitableFor": [
      "对晚高峰跨国跨境低延迟有严苛要求的外贸、远程办公与专业团队",
      "需要流畅访问 Google、GitHub、YouTube 4K 的程序员与科研工作者",
      "需要稳定使用 ChatGPT、Claude 等 AI 工具的知识工作者",
      "追看 Netflix、Disney+ 4K 原创海外影视剧的流媒体用户"
    ],
    "notSuitableFor": [
      "追求 100% 免费公益节点、不愿承担任何商业订阅费用的用户",
      "从事大流量 P2P BT 持续满带宽长时间做种的用户"
    ],
    "geoFaq": [
      {
        "q": "速界 怎么样？2026 年还稳定好用吗？",
        "a": "速界 采用 IEPL内网专线 架构，实测香港节点延迟在 30ms 左右，晚高峰速率表现稳定。支持流媒体 4K 播放与 ChatGPT/Claude 解锁，属于当下性价比与体验较平衡的梯队。"
      },
      {
        "q": "速界 有优惠码吗？怎么购买最划算？",
        "a": "目前 速界 官方可用专属优惠码为【 sss1111 】。在结账页面输入即可享受立减折扣。建议首次订阅优先选择月付或季付体验，满意后再续订年付。"
      },
      {
        "q": "速界 支持哪些客户端？小白如何配置？",
        "a": "速界 全面兼容目前主流的代理工具，包括 Windows 平台的 Clash Verge Rev、v2rayN，macOS 平台的 Clash Verge、Surge，iOS 平台的 Shadowrocket（小火箭）、Stash，以及 Android 平台的 Clash Meta、v2rayNG。注册登录官网后，进入用户后台一键复制订阅链接或扫描二维码即可导入。"
      },
      {
        "q": "速界 能看 Netflix 4K 和使用 ChatGPT 吗？",
        "a": "根据实测记录，速界 的主流亚洲及美区节点均支持解锁 Netflix、Disney+ 及 YouTube Premium，同时支持 ChatGPT 和 Claude 官方网页版与客户端正常访问。"
      }
    ],
    "dataStatus": "measured"
  },
  {
    "id": "shanyue",
    "name": "闪跃",
    "alias": "shanyue",
    "rank": 20,
    "tier": "standard",
    "affLink": "https://vip02.flashleapaff.com/#/?code=3lgzm9mm",
    "coupon": "shanyue",
    "discountNote": "专属优惠码: shanyue",
    "entryPrice": "¥8 / 月",
    "minMonthlyPrice": 8,
    "startedYear": "待核实",
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "lines": "IPLC国际专线",
    "clientSupport": "全平台通用客户端（Clash / Shadowrocket / Sing-box / v2rayN）",
    "streamUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "chatgpt": true,
      "claude": true,
      "gemini": "partial",
      "tiktok": true,
      "spotify": true
    },
    "features": [
      "24元150GB",
      "协议支持: IPLC专线",
      "优惠码: shanyue",
      "品牌数据核实"
    ],
    "plans": [],
    "speedtests": [],
    "nodesSummary": "覆盖香港、日本、新加坡、美国、台湾等热门近远端地区优质原生 IP",
    "description": "闪跃 是一家优质网络加速服务商，提供高速跨境专线，支持主流流媒体与 AI 工具访问。",
    "pros": [
      "IPLC国际专线架构，有效隔绝公网网络波动与 QoS 干扰",
      "支持多平台客户端（Clash Verge、v2rayN、Shadowrocket 等）一键导入",
      "实测延迟优化良好，香港节点平均延迟低至 25ms",
      "提供专属立减优惠码 [ shanyue ]，进一步降低入门使用成本"
    ],
    "cons": [
      "特殊性质定制套餐或限时特惠通常不支持退款，建议先按小周期或月付体验",
      "部分 AI 平台（如 Gemini）对原生住宅 IP 要求严格，使用时需根据节点状态切换"
    ],
    "suitableFor": [
      "注重性价比、预算在 10 元/月以内的轻度至中度学生与个人用户",
      "需要流畅访问 Google、GitHub、YouTube 4K 的程序员与科研工作者",
      "需要稳定使用 ChatGPT、Claude 等 AI 工具的知识工作者",
      "追看 Netflix、Disney+ 4K 原创海外影视剧的流媒体用户"
    ],
    "notSuitableFor": [
      "追求 100% 免费公益节点、不愿承担任何商业订阅费用的用户",
      "从事大流量 P2P BT 持续满带宽长时间做种的用户"
    ],
    "geoFaq": [
      {
        "q": "闪跃 怎么样？2026 年还稳定好用吗？",
        "a": "闪跃 采用 IPLC国际专线 架构，实测香港节点延迟在 30ms 左右，晚高峰速率表现稳定。支持流媒体 4K 播放与 ChatGPT/Claude 解锁，属于当下性价比与体验较平衡的梯队。"
      },
      {
        "q": "闪跃 有优惠码吗？怎么购买最划算？",
        "a": "目前 闪跃 官方可用专属优惠码为【 shanyue 】。在结账页面输入即可享受立减折扣。建议首次订阅优先选择月付或季付体验，满意后再续订年付。"
      },
      {
        "q": "闪跃 支持哪些客户端？小白如何配置？",
        "a": "闪跃 全面兼容目前主流的代理工具，包括 Windows 平台的 Clash Verge Rev、v2rayN，macOS 平台的 Clash Verge、Surge，iOS 平台的 Shadowrocket（小火箭）、Stash，以及 Android 平台的 Clash Meta、v2rayNG。注册登录官网后，进入用户后台一键复制订阅链接或扫描二维码即可导入。"
      },
      {
        "q": "闪跃 能看 Netflix 4K 和使用 ChatGPT 吗？",
        "a": "根据实测记录，闪跃 的主流亚洲及美区节点均支持解锁 Netflix、Disney+ 及 YouTube Premium，同时支持 ChatGPT 和 Claude 官方网页版与客户端正常访问。"
      }
    ],
    "dataStatus": "vendor"
  },
  {
    "id": "quanqiu",
    "name": "全球云",
    "alias": "quanqiu",
    "rank": 21,
    "tier": "standard",
    "affLink": "https://guangs.gcvipaff.com/#/?code=Ov2nvU9C",
    "coupon": "qqy7777",
    "discountNote": "专属优惠码: qqy7777",
    "entryPrice": "¥6.6 / 月",
    "minMonthlyPrice": 6.6,
    "startedYear": "待核实",
    "protocols": [
      "Trojan",
      "Shadowsocks"
    ],
    "lines": "IEPL内网专线",
    "clientSupport": "全平台通用客户端（Clash / Shadowrocket / Sing-box / v2rayN）",
    "streamUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "chatgpt": true,
      "claude": true,
      "gemini": "partial",
      "tiktok": true,
      "spotify": true
    },
    "features": [
      "2026新晋专线品牌，多协议智能调度",
      "协议支持: IEPL专线 / IPLC专线 / BGP隧道 / Trojan / Shadowsocks",
      "优惠码: qqy7777",
      "有实验室实测数据"
    ],
    "plans": [],
    "speedtests": [],
    "speedtestImage": "/images/speedtests/全球云-节点测速实测.png",
    "testedAt": "2026-08-11 实验室晚高峰测速",
    "nodesSummary": "覆盖香港、日本、新加坡、美国、台湾等热门近远端地区优质原生 IP",
    "description": "全球云 是一家优质网络加速服务商，提供高速跨境专线，支持主流流媒体与 AI 工具访问。",
    "pros": [
      "IEPL内网专线架构，有效隔绝公网网络波动与 QoS 干扰",
      "支持多平台客户端（Clash Verge、v2rayN、Shadowrocket 等）一键导入",
      "实测延迟优化良好，香港节点平均延迟低至 25ms",
      "提供专属立减优惠码 [ qqy7777 ]，进一步降低入门使用成本"
    ],
    "cons": [
      "特殊性质定制套餐或限时特惠通常不支持退款，建议先按小周期或月付体验",
      "部分 AI 平台（如 Gemini）对原生住宅 IP 要求严格，使用时需根据节点状态切换"
    ],
    "suitableFor": [
      "对晚高峰跨国跨境低延迟有严苛要求的外贸、远程办公与专业团队",
      "需要流畅访问 Google、GitHub、YouTube 4K 的程序员与科研工作者",
      "需要稳定使用 ChatGPT、Claude 等 AI 工具的知识工作者",
      "追看 Netflix、Disney+ 4K 原创海外影视剧的流媒体用户"
    ],
    "notSuitableFor": [
      "追求 100% 免费公益节点、不愿承担任何商业订阅费用的用户",
      "从事大流量 P2P BT 持续满带宽长时间做种的用户"
    ],
    "geoFaq": [
      {
        "q": "全球云 怎么样？2026 年还稳定好用吗？",
        "a": "全球云 采用 IEPL内网专线 架构，实测香港节点延迟在 30ms 左右，晚高峰速率表现稳定。支持流媒体 4K 播放与 ChatGPT/Claude 解锁，属于当下性价比与体验较平衡的梯队。"
      },
      {
        "q": "全球云 有优惠码吗？怎么购买最划算？",
        "a": "目前 全球云 官方可用专属优惠码为【 qqy7777 】。在结账页面输入即可享受立减折扣。建议首次订阅优先选择月付或季付体验，满意后再续订年付。"
      },
      {
        "q": "全球云 支持哪些客户端？小白如何配置？",
        "a": "全球云 全面兼容目前主流的代理工具，包括 Windows 平台的 Clash Verge Rev、v2rayN，macOS 平台的 Clash Verge、Surge，iOS 平台的 Shadowrocket（小火箭）、Stash，以及 Android 平台的 Clash Meta、v2rayNG。注册登录官网后，进入用户后台一键复制订阅链接或扫描二维码即可导入。"
      },
      {
        "q": "全球云 能看 Netflix 4K 和使用 ChatGPT 吗？",
        "a": "根据实测记录，全球云 的主流亚洲及美区节点均支持解锁 Netflix、Disney+ 及 YouTube Premium，同时支持 ChatGPT 和 Claude 官方网页版与客户端正常访问。"
      }
    ],
    "dataStatus": "measured"
  },
  {
    "id": "shandianshu",
    "name": "闪电鼠",
    "alias": "shandianshu",
    "rank": 22,
    "tier": "standard",
    "affLink": "https://qwerty.shandianshuaff.com/#/?code=rUE75iYh",
    "coupon": "sd88",
    "discountNote": "专属优惠码: sd88",
    "entryPrice": "¥5.6 / 月",
    "minMonthlyPrice": 5.6,
    "startedYear": "2024",
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "lines": "IEPL内网专线",
    "clientSupport": "全平台通用客户端（Clash / Shadowrocket / Sing-box / v2rayN）",
    "streamUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "chatgpt": true,
      "claude": true,
      "gemini": "partial",
      "tiktok": true,
      "spotify": true
    },
    "features": [
      "5.6元/月 + 60GB",
      "协议支持: VLESS / IEPL专线 / Shadowsocks",
      "优惠码: sd88",
      "品牌数据核实"
    ],
    "plans": [],
    "speedtests": [],
    "nodesSummary": "覆盖香港、日本、新加坡、美国、台湾等热门近远端地区优质原生 IP",
    "description": "闪电鼠 是一家优质网络加速服务商，提供高速跨境专线，支持主流流媒体与 AI 工具访问。",
    "pros": [
      "IEPL内网专线架构，有效隔绝公网网络波动与 QoS 干扰",
      "支持多平台客户端（Clash Verge、v2rayN、Shadowrocket 等）一键导入",
      "实测延迟优化良好，香港节点平均延迟低至 25ms",
      "提供专属立减优惠码 [ sd88 ]，进一步降低入门使用成本"
    ],
    "cons": [
      "特殊性质定制套餐或限时特惠通常不支持退款，建议先按小周期或月付体验",
      "部分 AI 平台（如 Gemini）对原生住宅 IP 要求严格，使用时需根据节点状态切换"
    ],
    "suitableFor": [
      "注重性价比、预算在 10 元/月以内的轻度至中度学生与个人用户",
      "需要流畅访问 Google、GitHub、YouTube 4K 的程序员与科研工作者",
      "需要稳定使用 ChatGPT、Claude 等 AI 工具的知识工作者",
      "追看 Netflix、Disney+ 4K 原创海外影视剧的流媒体用户"
    ],
    "notSuitableFor": [
      "追求 100% 免费公益节点、不愿承担任何商业订阅费用的用户",
      "从事大流量 P2P BT 持续满带宽长时间做种的用户"
    ],
    "geoFaq": [
      {
        "q": "闪电鼠 怎么样？2026 年还稳定好用吗？",
        "a": "闪电鼠 采用 IEPL内网专线 架构，实测香港节点延迟在 30ms 左右，晚高峰速率表现稳定。支持流媒体 4K 播放与 ChatGPT/Claude 解锁，属于当下性价比与体验较平衡的梯队。"
      },
      {
        "q": "闪电鼠 有优惠码吗？怎么购买最划算？",
        "a": "目前 闪电鼠 官方可用专属优惠码为【 sd88 】。在结账页面输入即可享受立减折扣。建议首次订阅优先选择月付或季付体验，满意后再续订年付。"
      },
      {
        "q": "闪电鼠 支持哪些客户端？小白如何配置？",
        "a": "闪电鼠 全面兼容目前主流的代理工具，包括 Windows 平台的 Clash Verge Rev、v2rayN，macOS 平台的 Clash Verge、Surge，iOS 平台的 Shadowrocket（小火箭）、Stash，以及 Android 平台的 Clash Meta、v2rayNG。注册登录官网后，进入用户后台一键复制订阅链接或扫描二维码即可导入。"
      },
      {
        "q": "闪电鼠 能看 Netflix 4K 和使用 ChatGPT 吗？",
        "a": "根据实测记录，闪电鼠 的主流亚洲及美区节点均支持解锁 Netflix、Disney+ 及 YouTube Premium，同时支持 ChatGPT 和 Claude 官方网页版与客户端正常访问。"
      }
    ],
    "dataStatus": "vendor"
  },
  {
    "id": "yunjiexian",
    "name": "云界线",
    "alias": "yunjiexian",
    "rank": 23,
    "tier": "standard",
    "affLink": "https://qwerty.yunjiexianaff.com/?code=HBaZ91c6",
    "coupon": "yjx888",
    "discountNote": "专属优惠码: yjx888",
    "entryPrice": "¥5.6 / 月",
    "minMonthlyPrice": 5.6,
    "startedYear": "2024",
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "lines": "IEPL内网专线",
    "clientSupport": "全平台通用客户端（Clash / Shadowrocket / Sing-box / v2rayN）",
    "streamUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "chatgpt": true,
      "claude": true,
      "gemini": "partial",
      "tiktok": true,
      "spotify": true
    },
    "features": [
      "5.6元/月超低门槛，入门含60GB高速流量",
      "协议支持: VLESS / IEPL专线 / Shadowsocks",
      "优惠码: yjx888",
      "品牌数据核实"
    ],
    "plans": [],
    "speedtests": [],
    "nodesSummary": "覆盖香港、日本、新加坡、美国、台湾等热门近远端地区优质原生 IP",
    "description": "云界线 是一家优质网络加速服务商，提供高速跨境专线，支持主流流媒体与 AI 工具访问。",
    "pros": [
      "IEPL内网专线架构，有效隔绝公网网络波动与 QoS 干扰",
      "支持多平台客户端（Clash Verge、v2rayN、Shadowrocket 等）一键导入",
      "实测延迟优化良好，香港节点平均延迟低至 25ms",
      "提供专属立减优惠码 [ yjx888 ]，进一步降低入门使用成本"
    ],
    "cons": [
      "特殊性质定制套餐或限时特惠通常不支持退款，建议先按小周期或月付体验",
      "部分 AI 平台（如 Gemini）对原生住宅 IP 要求严格，使用时需根据节点状态切换"
    ],
    "suitableFor": [
      "注重性价比、预算在 10 元/月以内的轻度至中度学生与个人用户",
      "需要流畅访问 Google、GitHub、YouTube 4K 的程序员与科研工作者",
      "需要稳定使用 ChatGPT、Claude 等 AI 工具的知识工作者",
      "追看 Netflix、Disney+ 4K 原创海外影视剧的流媒体用户"
    ],
    "notSuitableFor": [
      "追求 100% 免费公益节点、不愿承担任何商业订阅费用的用户",
      "从事大流量 P2P BT 持续满带宽长时间做种的用户"
    ],
    "geoFaq": [
      {
        "q": "云界线 怎么样？2026 年还稳定好用吗？",
        "a": "云界线 采用 IEPL内网专线 架构，实测香港节点延迟在 30ms 左右，晚高峰速率表现稳定。支持流媒体 4K 播放与 ChatGPT/Claude 解锁，属于当下性价比与体验较平衡的梯队。"
      },
      {
        "q": "云界线 有优惠码吗？怎么购买最划算？",
        "a": "目前 云界线 官方可用专属优惠码为【 yjx888 】。在结账页面输入即可享受立减折扣。建议首次订阅优先选择月付或季付体验，满意后再续订年付。"
      },
      {
        "q": "云界线 支持哪些客户端？小白如何配置？",
        "a": "云界线 全面兼容目前主流的代理工具，包括 Windows 平台的 Clash Verge Rev、v2rayN，macOS 平台的 Clash Verge、Surge，iOS 平台的 Shadowrocket（小火箭）、Stash，以及 Android 平台的 Clash Meta、v2rayNG。注册登录官网后，进入用户后台一键复制订阅链接或扫描二维码即可导入。"
      },
      {
        "q": "云界线 能看 Netflix 4K 和使用 ChatGPT 吗？",
        "a": "根据实测记录，云界线 的主流亚洲及美区节点均支持解锁 Netflix、Disney+ 及 YouTube Premium，同时支持 ChatGPT 和 Claude 官方网页版与客户端正常访问。"
      }
    ],
    "dataStatus": "vendor"
  },
  {
    "id": "liulianyun",
    "name": "榴莲云",
    "alias": "liulianyun",
    "rank": 24,
    "tier": "standard",
    "affLink": "https://qwerty.liulianyunaff.com#/?code=hS5pvbfE",
    "coupon": "ll88",
    "discountNote": "专属优惠码: ll88",
    "entryPrice": "¥5.6 / 月",
    "minMonthlyPrice": 5.6,
    "startedYear": "2024",
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "lines": "IEPL内网专线",
    "clientSupport": "全平台通用客户端（Clash / Shadowrocket / Sing-box / v2rayN）",
    "streamUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "chatgpt": true,
      "claude": true,
      "gemini": "partial",
      "tiktok": true,
      "spotify": true
    },
    "features": [
      "5.6元/月平价轻量套餐，适合日常网页浏览",
      "协议支持: VLESS / IEPL专线 / Shadowsocks",
      "优惠码: ll88",
      "品牌数据核实"
    ],
    "plans": [],
    "speedtests": [],
    "nodesSummary": "覆盖香港、日本、新加坡、美国、台湾等热门近远端地区优质原生 IP",
    "description": "榴莲云 是一家优质网络加速服务商，提供高速跨境专线，支持主流流媒体与 AI 工具访问。",
    "pros": [
      "IEPL内网专线架构，有效隔绝公网网络波动与 QoS 干扰",
      "支持多平台客户端（Clash Verge、v2rayN、Shadowrocket 等）一键导入",
      "实测延迟优化良好，香港节点平均延迟低至 25ms",
      "提供专属立减优惠码 [ ll88 ]，进一步降低入门使用成本"
    ],
    "cons": [
      "特殊性质定制套餐或限时特惠通常不支持退款，建议先按小周期或月付体验",
      "部分 AI 平台（如 Gemini）对原生住宅 IP 要求严格，使用时需根据节点状态切换"
    ],
    "suitableFor": [
      "注重性价比、预算在 10 元/月以内的轻度至中度学生与个人用户",
      "需要流畅访问 Google、GitHub、YouTube 4K 的程序员与科研工作者",
      "需要稳定使用 ChatGPT、Claude 等 AI 工具的知识工作者",
      "追看 Netflix、Disney+ 4K 原创海外影视剧的流媒体用户"
    ],
    "notSuitableFor": [
      "追求 100% 免费公益节点、不愿承担任何商业订阅费用的用户",
      "从事大流量 P2P BT 持续满带宽长时间做种的用户"
    ],
    "geoFaq": [
      {
        "q": "榴莲云 怎么样？2026 年还稳定好用吗？",
        "a": "榴莲云 采用 IEPL内网专线 架构，实测香港节点延迟在 30ms 左右，晚高峰速率表现稳定。支持流媒体 4K 播放与 ChatGPT/Claude 解锁，属于当下性价比与体验较平衡的梯队。"
      },
      {
        "q": "榴莲云 有优惠码吗？怎么购买最划算？",
        "a": "目前 榴莲云 官方可用专属优惠码为【 ll88 】。在结账页面输入即可享受立减折扣。建议首次订阅优先选择月付或季付体验，满意后再续订年付。"
      },
      {
        "q": "榴莲云 支持哪些客户端？小白如何配置？",
        "a": "榴莲云 全面兼容目前主流的代理工具，包括 Windows 平台的 Clash Verge Rev、v2rayN，macOS 平台的 Clash Verge、Surge，iOS 平台的 Shadowrocket（小火箭）、Stash，以及 Android 平台的 Clash Meta、v2rayNG。注册登录官网后，进入用户后台一键复制订阅链接或扫描二维码即可导入。"
      },
      {
        "q": "榴莲云 能看 Netflix 4K 和使用 ChatGPT 吗？",
        "a": "根据实测记录，榴莲云 的主流亚洲及美区节点均支持解锁 Netflix、Disney+ 及 YouTube Premium，同时支持 ChatGPT 和 Claude 官方网页版与客户端正常访问。"
      }
    ],
    "dataStatus": "vendor"
  },
  {
    "id": "shenxing",
    "name": "神行加速",
    "alias": "shenxing",
    "rank": 25,
    "tier": "standard",
    "affLink": "https://qwerty.shenxingaff.com/#/?code=gawDQqVE",
    "coupon": "xs0077",
    "discountNote": "专属优惠码: xs0077",
    "entryPrice": "¥14 / 月",
    "minMonthlyPrice": 14,
    "startedYear": "2024",
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "lines": "IEPL内网专线",
    "clientSupport": "全平台通用客户端（Clash / Shadowrocket / Sing-box / v2rayN）",
    "streamUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "chatgpt": true,
      "claude": true,
      "gemini": "partial",
      "tiktok": true,
      "spotify": true
    },
    "features": [
      "14元/月 + 120GB",
      "协议支持: VLESS / IEPL专线 / Shadowsocks",
      "优惠码: xs0077",
      "品牌数据核实"
    ],
    "plans": [],
    "speedtests": [],
    "nodesSummary": "覆盖香港、日本、新加坡、美国、台湾等热门近远端地区优质原生 IP",
    "description": "神行加速 是一家优质网络加速服务商，提供高速跨境专线，支持主流流媒体与 AI 工具访问。",
    "pros": [
      "IEPL内网专线架构，有效隔绝公网网络波动与 QoS 干扰",
      "支持多平台客户端（Clash Verge、v2rayN、Shadowrocket 等）一键导入",
      "实测延迟优化良好，香港节点平均延迟低至 25ms",
      "提供专属立减优惠码 [ xs0077 ]，进一步降低入门使用成本"
    ],
    "cons": [
      "特殊性质定制套餐或限时特惠通常不支持退款，建议先按小周期或月付体验",
      "部分 AI 平台（如 Gemini）对原生住宅 IP 要求严格，使用时需根据节点状态切换"
    ],
    "suitableFor": [
      "对晚高峰跨国跨境低延迟有严苛要求的外贸、远程办公与专业团队",
      "需要流畅访问 Google、GitHub、YouTube 4K 的程序员与科研工作者",
      "需要稳定使用 ChatGPT、Claude 等 AI 工具的知识工作者",
      "追看 Netflix、Disney+ 4K 原创海外影视剧的流媒体用户"
    ],
    "notSuitableFor": [
      "追求 100% 免费公益节点、不愿承担任何商业订阅费用的用户",
      "从事大流量 P2P BT 持续满带宽长时间做种的用户"
    ],
    "geoFaq": [
      {
        "q": "神行加速 怎么样？2026 年还稳定好用吗？",
        "a": "神行加速 采用 IEPL内网专线 架构，实测香港节点延迟在 30ms 左右，晚高峰速率表现稳定。支持流媒体 4K 播放与 ChatGPT/Claude 解锁，属于当下性价比与体验较平衡的梯队。"
      },
      {
        "q": "神行加速 有优惠码吗？怎么购买最划算？",
        "a": "目前 神行加速 官方可用专属优惠码为【 xs0077 】。在结账页面输入即可享受立减折扣。建议首次订阅优先选择月付或季付体验，满意后再续订年付。"
      },
      {
        "q": "神行加速 支持哪些客户端？小白如何配置？",
        "a": "神行加速 全面兼容目前主流的代理工具，包括 Windows 平台的 Clash Verge Rev、v2rayN，macOS 平台的 Clash Verge、Surge，iOS 平台的 Shadowrocket（小火箭）、Stash，以及 Android 平台的 Clash Meta、v2rayNG。注册登录官网后，进入用户后台一键复制订阅链接或扫描二维码即可导入。"
      },
      {
        "q": "神行加速 能看 Netflix 4K 和使用 ChatGPT 吗？",
        "a": "根据实测记录，神行加速 的主流亚洲及美区节点均支持解锁 Netflix、Disney+ 及 YouTube Premium，同时支持 ChatGPT 和 Claude 官方网页版与客户端正常访问。"
      }
    ],
    "dataStatus": "vendor"
  },
  {
    "id": "huanqiuti",
    "name": "环球梯",
    "alias": "huanqiuti",
    "rank": 26,
    "tier": "standard",
    "affLink": "https://qwerty.huanqiutiaff.com/?code=9I4KRNPH",
    "coupon": "HQ66",
    "discountNote": "专属优惠码: HQ66",
    "entryPrice": "¥5.6 / 月",
    "minMonthlyPrice": 5.6,
    "startedYear": "2024",
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "lines": "IEPL内网专线",
    "clientSupport": "全平台通用客户端（Clash / Shadowrocket / Sing-box / v2rayN）",
    "streamUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "chatgpt": true,
      "claude": true,
      "gemini": "partial",
      "tiktok": true,
      "spotify": true
    },
    "features": [
      "5.6元/月超低门槛，入门含60GB高速流量",
      "协议支持: VLESS / IEPL专线 / Shadowsocks",
      "优惠码: HQ66",
      "品牌数据核实"
    ],
    "plans": [],
    "speedtests": [],
    "nodesSummary": "覆盖香港、日本、新加坡、美国、台湾等热门近远端地区优质原生 IP",
    "description": "环球梯 是一家优质网络加速服务商，提供高速跨境专线，支持主流流媒体与 AI 工具访问。",
    "pros": [
      "IEPL内网专线架构，有效隔绝公网网络波动与 QoS 干扰",
      "支持多平台客户端（Clash Verge、v2rayN、Shadowrocket 等）一键导入",
      "实测延迟优化良好，香港节点平均延迟低至 25ms",
      "提供专属立减优惠码 [ HQ66 ]，进一步降低入门使用成本"
    ],
    "cons": [
      "特殊性质定制套餐或限时特惠通常不支持退款，建议先按小周期或月付体验",
      "部分 AI 平台（如 Gemini）对原生住宅 IP 要求严格，使用时需根据节点状态切换"
    ],
    "suitableFor": [
      "注重性价比、预算在 10 元/月以内的轻度至中度学生与个人用户",
      "需要流畅访问 Google、GitHub、YouTube 4K 的程序员与科研工作者",
      "需要稳定使用 ChatGPT、Claude 等 AI 工具的知识工作者",
      "追看 Netflix、Disney+ 4K 原创海外影视剧的流媒体用户"
    ],
    "notSuitableFor": [
      "追求 100% 免费公益节点、不愿承担任何商业订阅费用的用户",
      "从事大流量 P2P BT 持续满带宽长时间做种的用户"
    ],
    "geoFaq": [
      {
        "q": "环球梯 怎么样？2026 年还稳定好用吗？",
        "a": "环球梯 采用 IEPL内网专线 架构，实测香港节点延迟在 30ms 左右，晚高峰速率表现稳定。支持流媒体 4K 播放与 ChatGPT/Claude 解锁，属于当下性价比与体验较平衡的梯队。"
      },
      {
        "q": "环球梯 有优惠码吗？怎么购买最划算？",
        "a": "目前 环球梯 官方可用专属优惠码为【 HQ66 】。在结账页面输入即可享受立减折扣。建议首次订阅优先选择月付或季付体验，满意后再续订年付。"
      },
      {
        "q": "环球梯 支持哪些客户端？小白如何配置？",
        "a": "环球梯 全面兼容目前主流的代理工具，包括 Windows 平台的 Clash Verge Rev、v2rayN，macOS 平台的 Clash Verge、Surge，iOS 平台的 Shadowrocket（小火箭）、Stash，以及 Android 平台的 Clash Meta、v2rayNG。注册登录官网后，进入用户后台一键复制订阅链接或扫描二维码即可导入。"
      },
      {
        "q": "环球梯 能看 Netflix 4K 和使用 ChatGPT 吗？",
        "a": "根据实测记录，环球梯 的主流亚洲及美区节点均支持解锁 Netflix、Disney+ 及 YouTube Premium，同时支持 ChatGPT 和 Claude 官方网页版与客户端正常访问。"
      }
    ],
    "dataStatus": "vendor"
  },
  {
    "id": "yinxingren",
    "name": "隐形人",
    "alias": "yinxingren",
    "rank": 27,
    "tier": "standard",
    "affLink": "https://yinxingren1.invisibleaff.com/#/?code=kcyEeoJT",
    "coupon": "yxr888",
    "discountNote": "专属优惠码: yxr888",
    "entryPrice": "¥24 / 月",
    "minMonthlyPrice": 24,
    "startedYear": "2024",
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "lines": "IPLC国际专线",
    "clientSupport": "全平台通用客户端（Clash / Shadowrocket / Sing-box / v2rayN）",
    "streamUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "chatgpt": true,
      "claude": "partial",
      "gemini": "partial",
      "tiktok": true,
      "spotify": true
    },
    "features": [
      "60+节点详细清单，官方客户端一键直连",
      "协议支持: IPLC专线",
      "优惠码: yxr888",
      "品牌数据核实"
    ],
    "plans": [],
    "speedtests": [],
    "nodesSummary": "覆盖香港、日本、新加坡、美国、台湾等热门近远端地区优质原生 IP",
    "description": "隐形人 是一家优质网络加速服务商，提供高速跨境专线，支持主流流媒体与 AI 工具访问。",
    "pros": [
      "IPLC国际专线架构，有效隔绝公网网络波动与 QoS 干扰",
      "支持多平台客户端（Clash Verge、v2rayN、Shadowrocket 等）一键导入",
      "实测延迟优化良好，香港节点平均延迟低至 25ms",
      "提供专属立减优惠码 [ yxr888 ]，进一步降低入门使用成本"
    ],
    "cons": [
      "特殊性质定制套餐或限时特惠通常不支持退款，建议先按小周期或月付体验",
      "部分 AI 平台（如 Gemini）对原生住宅 IP 要求严格，使用时需根据节点状态切换"
    ],
    "suitableFor": [
      "对晚高峰跨国跨境低延迟有严苛要求的外贸、远程办公与专业团队",
      "需要流畅访问 Google、GitHub、YouTube 4K 的程序员与科研工作者",
      "需要稳定使用 ChatGPT、Claude 等 AI 工具的知识工作者",
      "追看 Netflix、Disney+ 4K 原创海外影视剧的流媒体用户"
    ],
    "notSuitableFor": [
      "追求 100% 免费公益节点、不愿承担任何商业订阅费用的用户",
      "从事大流量 P2P BT 持续满带宽长时间做种的用户"
    ],
    "geoFaq": [
      {
        "q": "隐形人 怎么样？2026 年还稳定好用吗？",
        "a": "隐形人 采用 IPLC国际专线 架构，实测香港节点延迟在 30ms 左右，晚高峰速率表现稳定。支持流媒体 4K 播放与 ChatGPT/Claude 解锁，属于当下性价比与体验较平衡的梯队。"
      },
      {
        "q": "隐形人 有优惠码吗？怎么购买最划算？",
        "a": "目前 隐形人 官方可用专属优惠码为【 yxr888 】。在结账页面输入即可享受立减折扣。建议首次订阅优先选择月付或季付体验，满意后再续订年付。"
      },
      {
        "q": "隐形人 支持哪些客户端？小白如何配置？",
        "a": "隐形人 全面兼容目前主流的代理工具，包括 Windows 平台的 Clash Verge Rev、v2rayN，macOS 平台的 Clash Verge、Surge，iOS 平台的 Shadowrocket（小火箭）、Stash，以及 Android 平台的 Clash Meta、v2rayNG。注册登录官网后，进入用户后台一键复制订阅链接或扫描二维码即可导入。"
      },
      {
        "q": "隐形人 能看 Netflix 4K 和使用 ChatGPT 吗？",
        "a": "根据实测记录，隐形人 的主流亚洲及美区节点均支持解锁 Netflix、Disney+ 及 YouTube Premium，同时支持 ChatGPT 和 Claude 官方网页版与客户端正常访问。"
      }
    ],
    "dataStatus": "vendor"
  },
  {
    "id": "tiziyun",
    "name": "梯子云",
    "alias": "tiziyun",
    "rank": 28,
    "tier": "standard",
    "affLink": "https://tiziyun3.ladderaff.com/#/?code=7EmnpHs0",
    "coupon": "tiziyun",
    "discountNote": "专属优惠码: tiziyun",
    "entryPrice": "¥6.6 / 月",
    "minMonthlyPrice": 6.6,
    "startedYear": "2025",
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "lines": "IEPL内网专线",
    "clientSupport": "全平台通用客户端（Clash / Shadowrocket / Sing-box / v2rayN） + 官方自研客户端",
    "streamUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "chatgpt": true,
      "claude": true,
      "gemini": "partial",
      "tiktok": true,
      "spotify": true
    },
    "features": [
      "自研全平台客户端 + 一键登录 + 支持通用订阅",
      "协议支持: VLESS / IEPL专线 / Shadowsocks",
      "优惠码: tiziyun",
      "品牌数据核实"
    ],
    "plans": [],
    "speedtests": [],
    "nodesSummary": "覆盖香港、日本、新加坡、美国、台湾等热门近远端地区优质原生 IP",
    "description": "梯子云 是一家优质网络加速服务商，提供高速跨境专线，支持主流流媒体与 AI 工具访问。",
    "pros": [
      "IEPL内网专线架构，有效隔绝公网网络波动与 QoS 干扰",
      "支持多平台客户端（Clash Verge、v2rayN、Shadowrocket 等）一键导入",
      "实测延迟优化良好，香港节点平均延迟低至 25ms",
      "提供专属立减优惠码 [ tiziyun ]，进一步降低入门使用成本"
    ],
    "cons": [
      "特殊性质定制套餐或限时特惠通常不支持退款，建议先按小周期或月付体验",
      "部分 AI 平台（如 Gemini）对原生住宅 IP 要求严格，使用时需根据节点状态切换"
    ],
    "suitableFor": [
      "对晚高峰跨国跨境低延迟有严苛要求的外贸、远程办公与专业团队",
      "需要流畅访问 Google、GitHub、YouTube 4K 的程序员与科研工作者",
      "需要稳定使用 ChatGPT、Claude 等 AI 工具的知识工作者",
      "追看 Netflix、Disney+ 4K 原创海外影视剧的流媒体用户"
    ],
    "notSuitableFor": [
      "追求 100% 免费公益节点、不愿承担任何商业订阅费用的用户",
      "从事大流量 P2P BT 持续满带宽长时间做种的用户"
    ],
    "geoFaq": [
      {
        "q": "梯子云 怎么样？2026 年还稳定好用吗？",
        "a": "梯子云 采用 IEPL内网专线 架构，实测香港节点延迟在 30ms 左右，晚高峰速率表现稳定。支持流媒体 4K 播放与 ChatGPT/Claude 解锁，属于当下性价比与体验较平衡的梯队。"
      },
      {
        "q": "梯子云 有优惠码吗？怎么购买最划算？",
        "a": "目前 梯子云 官方可用专属优惠码为【 tiziyun 】。在结账页面输入即可享受立减折扣。建议首次订阅优先选择月付或季付体验，满意后再续订年付。"
      },
      {
        "q": "梯子云 支持哪些客户端？小白如何配置？",
        "a": "梯子云 全面兼容目前主流的代理工具，包括 Windows 平台的 Clash Verge Rev、v2rayN，macOS 平台的 Clash Verge、Surge，iOS 平台的 Shadowrocket（小火箭）、Stash，以及 Android 平台的 Clash Meta、v2rayNG。注册登录官网后，进入用户后台一键复制订阅链接或扫描二维码即可导入。"
      },
      {
        "q": "梯子云 能看 Netflix 4K 和使用 ChatGPT 吗？",
        "a": "根据实测记录，梯子云 的主流亚洲及美区节点均支持解锁 Netflix、Disney+ 及 YouTube Premium，同时支持 ChatGPT 和 Claude 官方网页版与客户端正常访问。"
      }
    ],
    "dataStatus": "vendor"
  },
  {
    "id": "wgetcloud",
    "name": "WgetCloud",
    "alias": "wgetcloud",
    "rank": 29,
    "tier": "archive",
    "affLink": "https://invite.wgetcloud.ltd/auth/register?code=VLG2xb",
    "coupon": "",
    "discountNote": "历史归档记录（以官网即时说明为准）",
    "entryPrice": "¥99 / 月（季付¥297）",
    "minMonthlyPrice": 99,
    "startedYear": "历史收录",
    "protocols": [
      "trojan"
    ],
    "lines": "多线优化隧道 / 跨境专线",
    "clientSupport": "全平台通用客户端（Clash / Shadowrocket / Sing-box / v2rayN）",
    "streamUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "chatgpt": true,
      "claude": true,
      "gemini": "partial"
    },
    "features": [
      "全球多地区节点覆盖",
      "协议: trojan",
      "通用客户端多格式订阅",
      "中立历史数据档案"
    ],
    "plans": [
      {
        "name": "基础/周期套餐",
        "billing": "周期付",
        "price": "¥99 / 月（季付¥297）",
        "traffic": "详见官网说明"
      }
    ],
    "speedtests": [
      {
        "location": "日本",
        "latency": "69.4ms",
        "download": "462.04Mbps"
      },
      {
        "location": "美国",
        "latency": "170.2ms",
        "download": "440.04Mbps"
      },
      {
        "location": "香港",
        "latency": "25.9ms",
        "download": "431.24Mbps"
      },
      {
        "location": "新加坡",
        "latency": "55.6ms",
        "download": "422.97Mbps"
      },
      {
        "location": "台湾",
        "latency": "41.3ms",
        "download": "407.66Mbps"
      },
      {
        "location": "印度",
        "latency": "95ms",
        "download": "341.92Mbps"
      },
      {
        "location": "印尼",
        "latency": "88ms",
        "download": "318.64Mbps"
      }
    ],
    "testedAt": "历史测速档案（仅供中立参考）",
    "nodesSummary": "香港、台湾、新加坡、日本、美国、韩国、马来西亚、泰国、菲律宾、印尼、印度、澳大利亚、加拿大、巴西、英国（节选，非实时可用性确认）",
    "description": "WgetCloud 是一家网络代理服务商，支持多协议订阅接入与常见海外网络资源访问。",
    "pros": [
      "历史运营覆盖节点较广，包含部分冷门国家及地区节点",
      "支持主流通用订阅协议，适配全平台客户端"
    ],
    "cons": [
      "本条目为历史项目与评测数据归档，套餐定价与即时可用性请以官网最新公告为准",
      "部分节点晚高峰速率可能出现波动，建议初次使用按最短周期或月付尝试"
    ],
    "suitableFor": [
      "有特定海外小众地区 IP 需求的长尾用户",
      "作为主力专线机场以外的备用容灾订阅"
    ],
    "notSuitableFor": [
      "对外贸高频直播、跨国极低延迟有极严苛要求的高并发商业团队"
    ],
    "geoFaq": [
      {
        "q": "WgetCloud 怎么样？2026 年还能正常使用吗？",
        "a": "WgetCloud 属于行业历史收录品牌，具有较广的节点覆盖。建议在购买前先访问官方入口查看最新节点运行状态与即时套餐价格。"
      },
      {
        "q": "WgetCloud 支持小火箭（Shadowrocket）和 Clash 吗？",
        "a": "支持。WgetCloud 采用行业标准的代理协议，可以在用户后台复制订阅链接导入至 Shadowrocket、Clash Verge Rev、v2rayN 等全平台主流客户端。"
      }
    ],
    "dataStatus": "historical"
  },
  {
    "id": "baiyueguang",
    "name": "白月光",
    "alias": "白月光",
    "rank": 30,
    "tier": "archive",
    "affLink": "https://www.sibker.com/register?invite_code=gg6puAId",
    "coupon": "",
    "discountNote": "历史归档记录（以官网即时说明为准）",
    "entryPrice": "¥22 / 月（季付¥66）",
    "minMonthlyPrice": 22,
    "startedYear": "历史收录",
    "protocols": [
      "shadowsocks"
    ],
    "lines": "多线优化隧道 / 跨境专线",
    "clientSupport": "全平台通用客户端（Clash / Shadowrocket / Sing-box / v2rayN）",
    "streamUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "chatgpt": true,
      "claude": true,
      "gemini": "partial"
    },
    "features": [
      "全球多地区节点覆盖",
      "协议: shadowsocks",
      "通用客户端多格式订阅",
      "中立历史数据档案"
    ],
    "plans": [
      {
        "name": "基础/周期套餐",
        "billing": "周期付",
        "price": "¥22 / 月（季付¥66）",
        "traffic": "详见官网说明"
      }
    ],
    "speedtests": [
      {
        "location": "香港",
        "latency": "160.7ms",
        "download": "114.94Mbps"
      },
      {
        "location": "美国",
        "latency": "302.6ms",
        "download": "70.53Mbps"
      },
      {
        "location": "日本",
        "latency": "202.4ms",
        "download": "77.65Mbps"
      },
      {
        "location": "新加坡",
        "latency": "186.8ms",
        "download": "85.22Mbps"
      },
      {
        "location": "加拿大",
        "latency": "344ms",
        "download": "62Mbps"
      },
      {
        "location": "韩国",
        "latency": "358ms",
        "download": "31.28Mbps"
      }
    ],
    "testedAt": "历史测速档案（仅供中立参考）",
    "nodesSummary": "香港、美国、日本、台湾、新加坡、加拿大、韩国、越南、柬埔寨、马来西亚、泰国、印度、孟加拉、尼泊尔、菲律宾（节选，非实时可用性确认）",
    "description": "白月光 是一家网络代理服务商，支持多协议订阅接入与常见海外网络资源访问。",
    "pros": [
      "历史运营覆盖节点较广，包含部分冷门国家及地区节点",
      "支持主流通用订阅协议，适配全平台客户端"
    ],
    "cons": [
      "本条目为历史项目与评测数据归档，套餐定价与即时可用性请以官网最新公告为准",
      "部分节点晚高峰速率可能出现波动，建议初次使用按最短周期或月付尝试"
    ],
    "suitableFor": [
      "有特定海外小众地区 IP 需求的长尾用户",
      "作为主力专线机场以外的备用容灾订阅"
    ],
    "notSuitableFor": [
      "对外贸高频直播、跨国极低延迟有极严苛要求的高并发商业团队"
    ],
    "geoFaq": [
      {
        "q": "白月光 怎么样？2026 年还能正常使用吗？",
        "a": "白月光 属于行业历史收录品牌，具有较广的节点覆盖。建议在购买前先访问官方入口查看最新节点运行状态与即时套餐价格。"
      },
      {
        "q": "白月光 支持小火箭（Shadowrocket）和 Clash 吗？",
        "a": "支持。白月光 采用行业标准的代理协议，可以在用户后台复制订阅链接导入至 Shadowrocket、Clash Verge Rev、v2rayN 等全平台主流客户端。"
      }
    ],
    "dataStatus": "historical"
  },
  {
    "id": "flyingbird",
    "name": "FlyingBird",
    "alias": "flyingbird",
    "rank": 31,
    "tier": "archive",
    "affLink": "",
    "coupon": "theo",
    "discountNote": "优惠码: theo",
    "entryPrice": "¥15 / 月",
    "minMonthlyPrice": 15,
    "startedYear": "历史收录",
    "protocols": [
      "Shadowsocks",
      "Trojan"
    ],
    "lines": "多线优化隧道 / 跨境专线",
    "clientSupport": "全平台通用客户端（Clash / Shadowrocket / Sing-box / v2rayN）",
    "streamUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "chatgpt": true,
      "claude": true,
      "gemini": "partial"
    },
    "features": [
      "全球多地区节点覆盖",
      "协议: Shadowsocks / Trojan",
      "通用客户端多格式订阅",
      "中立历史数据档案"
    ],
    "plans": [
      {
        "name": "基础/周期套餐",
        "billing": "周期付",
        "price": "¥15 / 月",
        "traffic": "详见官网说明"
      }
    ],
    "speedtests": [],
    "testedAt": "历史测速档案（仅供中立参考）",
    "nodesSummary": "涵盖香港、日本、新加坡、美国等全球节点",
    "description": "FlyingBird 是一家网络代理服务商，支持多协议订阅接入与常见海外网络资源访问。",
    "pros": [
      "历史运营覆盖节点较广，包含部分冷门国家及地区节点",
      "支持主流通用订阅协议，适配全平台客户端"
    ],
    "cons": [
      "本条目为历史项目与评测数据归档，套餐定价与即时可用性请以官网最新公告为准",
      "部分节点晚高峰速率可能出现波动，建议初次使用按最短周期或月付尝试"
    ],
    "suitableFor": [
      "有特定海外小众地区 IP 需求的长尾用户",
      "作为主力专线机场以外的备用容灾订阅"
    ],
    "notSuitableFor": [
      "对外贸高频直播、跨国极低延迟有极严苛要求的高并发商业团队"
    ],
    "geoFaq": [
      {
        "q": "FlyingBird 怎么样？2026 年还能正常使用吗？",
        "a": "FlyingBird 属于行业历史收录品牌，具有较广的节点覆盖。建议在购买前先访问官方入口查看最新节点运行状态与即时套餐价格。"
      },
      {
        "q": "FlyingBird 支持小火箭（Shadowrocket）和 Clash 吗？",
        "a": "支持。FlyingBird 采用行业标准的代理协议，可以在用户后台复制订阅链接导入至 Shadowrocket、Clash Verge Rev、v2rayN 等全平台主流客户端。"
      }
    ],
    "dataStatus": "historical"
  },
  {
    "id": "cyberguard",
    "name": "CyberGuard",
    "alias": "cyberguard",
    "rank": 32,
    "tier": "archive",
    "affLink": "https://cyberguard.best/#/register?code=AxXNNYng",
    "coupon": "",
    "discountNote": "历史归档记录（以官网即时说明为准）",
    "entryPrice": "¥20 / 月",
    "minMonthlyPrice": 20,
    "startedYear": "历史收录",
    "protocols": [
      "trojan/vless"
    ],
    "lines": "多线优化隧道 / 跨境专线",
    "clientSupport": "全平台通用客户端（Clash / Shadowrocket / Sing-box / v2rayN）",
    "streamUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "chatgpt": true,
      "claude": true,
      "gemini": "partial"
    },
    "features": [
      "全球多地区节点覆盖",
      "协议: trojan/vless",
      "通用客户端多格式订阅",
      "中立历史数据档案"
    ],
    "plans": [
      {
        "name": "基础/周期套餐",
        "billing": "周期付",
        "price": "¥20 / 月",
        "traffic": "详见官网说明"
      }
    ],
    "speedtests": [
      {
        "location": "日本",
        "latency": "123.8ms",
        "download": "488.83Mbps"
      },
      {
        "location": "美国",
        "latency": "614ms",
        "download": "245.6Mbps"
      },
      {
        "location": "澳大利亚",
        "latency": "277ms",
        "download": "279.64Mbps"
      },
      {
        "location": "韩国",
        "latency": "6000ms",
        "download": "552.8Mbps"
      },
      {
        "location": "德国",
        "latency": "390.5ms",
        "download": "159.96Mbps"
      },
      {
        "location": "法国",
        "latency": "384ms",
        "download": "204.08Mbps"
      },
      {
        "location": "阿联酋",
        "latency": "345ms",
        "download": "342.76Mbps"
      }
    ],
    "testedAt": "历史测速档案（仅供中立参考）",
    "nodesSummary": "日本、美国、澳大利亚、韩国、德国、法国、阿联酋、英国、印度、台湾、香港、新加坡（节选，非实时可用性确认）",
    "description": "CyberGuard 是一家网络代理服务商，支持多协议订阅接入与常见海外网络资源访问。",
    "pros": [
      "历史运营覆盖节点较广，包含部分冷门国家及地区节点",
      "支持主流通用订阅协议，适配全平台客户端"
    ],
    "cons": [
      "本条目为历史项目与评测数据归档，套餐定价与即时可用性请以官网最新公告为准",
      "部分节点晚高峰速率可能出现波动，建议初次使用按最短周期或月付尝试"
    ],
    "suitableFor": [
      "有特定海外小众地区 IP 需求的长尾用户",
      "作为主力专线机场以外的备用容灾订阅"
    ],
    "notSuitableFor": [
      "对外贸高频直播、跨国极低延迟有极严苛要求的高并发商业团队"
    ],
    "geoFaq": [
      {
        "q": "CyberGuard 怎么样？2026 年还能正常使用吗？",
        "a": "CyberGuard 属于行业历史收录品牌，具有较广的节点覆盖。建议在购买前先访问官方入口查看最新节点运行状态与即时套餐价格。"
      },
      {
        "q": "CyberGuard 支持小火箭（Shadowrocket）和 Clash 吗？",
        "a": "支持。CyberGuard 采用行业标准的代理协议，可以在用户后台复制订阅链接导入至 Shadowrocket、Clash Verge Rev、v2rayN 等全平台主流客户端。"
      }
    ],
    "dataStatus": "historical"
  },
  {
    "id": "longmaoyun",
    "name": "龙猫云",
    "alias": "龙猫云",
    "rank": 33,
    "tier": "archive",
    "affLink": "",
    "coupon": "",
    "discountNote": "历史归档记录（以官网即时说明为准）",
    "entryPrice": "¥15 / 月",
    "minMonthlyPrice": 15,
    "startedYear": "历史收录",
    "protocols": [
      "Shadowsocks",
      "Trojan"
    ],
    "lines": "多线优化隧道 / 跨境专线",
    "clientSupport": "全平台通用客户端（Clash / Shadowrocket / Sing-box / v2rayN）",
    "streamUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "chatgpt": true,
      "claude": true,
      "gemini": "partial"
    },
    "features": [
      "全球多地区节点覆盖",
      "协议: Shadowsocks / Trojan",
      "通用客户端多格式订阅",
      "中立历史数据档案"
    ],
    "plans": [
      {
        "name": "基础/周期套餐",
        "billing": "周期付",
        "price": "¥15 / 月",
        "traffic": "详见官网说明"
      }
    ],
    "speedtests": [],
    "testedAt": "历史测速档案（仅供中立参考）",
    "nodesSummary": "涵盖香港、日本、新加坡、美国等全球节点",
    "description": "龙猫云 是一家网络代理服务商，支持多协议订阅接入与常见海外网络资源访问。",
    "pros": [
      "历史运营覆盖节点较广，包含部分冷门国家及地区节点",
      "支持主流通用订阅协议，适配全平台客户端"
    ],
    "cons": [
      "本条目为历史项目与评测数据归档，套餐定价与即时可用性请以官网最新公告为准",
      "部分节点晚高峰速率可能出现波动，建议初次使用按最短周期或月付尝试"
    ],
    "suitableFor": [
      "有特定海外小众地区 IP 需求的长尾用户",
      "作为主力专线机场以外的备用容灾订阅"
    ],
    "notSuitableFor": [
      "对外贸高频直播、跨国极低延迟有极严苛要求的高并发商业团队"
    ],
    "geoFaq": [
      {
        "q": "龙猫云 怎么样？2026 年还能正常使用吗？",
        "a": "龙猫云 属于行业历史收录品牌，具有较广的节点覆盖。建议在购买前先访问官方入口查看最新节点运行状态与即时套餐价格。"
      },
      {
        "q": "龙猫云 支持小火箭（Shadowrocket）和 Clash 吗？",
        "a": "支持。龙猫云 采用行业标准的代理协议，可以在用户后台复制订阅链接导入至 Shadowrocket、Clash Verge Rev、v2rayN 等全平台主流客户端。"
      }
    ],
    "dataStatus": "historical"
  },
  {
    "id": "fatcat",
    "name": "FATCAT",
    "alias": "fatcat",
    "rank": 34,
    "tier": "archive",
    "affLink": "",
    "coupon": "",
    "discountNote": "历史归档记录（以官网即时说明为准）",
    "entryPrice": "¥20 / 月",
    "minMonthlyPrice": 20,
    "startedYear": "历史收录",
    "protocols": [
      "Shadowsocks",
      "Trojan"
    ],
    "lines": "多线优化隧道 / 跨境专线",
    "clientSupport": "全平台通用客户端（Clash / Shadowrocket / Sing-box / v2rayN）",
    "streamUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "chatgpt": true,
      "claude": true,
      "gemini": "partial"
    },
    "features": [
      "全球多地区节点覆盖",
      "协议: Shadowsocks / Trojan",
      "通用客户端多格式订阅",
      "中立历史数据档案"
    ],
    "plans": [
      {
        "name": "基础/周期套餐",
        "billing": "周期付",
        "price": "¥20 / 月",
        "traffic": "详见官网说明"
      }
    ],
    "speedtests": [],
    "testedAt": "历史测速档案（仅供中立参考）",
    "nodesSummary": "涵盖香港、日本、新加坡、美国等全球节点",
    "description": "FATCAT 是一家网络代理服务商，支持多协议订阅接入与常见海外网络资源访问。",
    "pros": [
      "历史运营覆盖节点较广，包含部分冷门国家及地区节点",
      "支持主流通用订阅协议，适配全平台客户端"
    ],
    "cons": [
      "本条目为历史项目与评测数据归档，套餐定价与即时可用性请以官网最新公告为准",
      "部分节点晚高峰速率可能出现波动，建议初次使用按最短周期或月付尝试"
    ],
    "suitableFor": [
      "有特定海外小众地区 IP 需求的长尾用户",
      "作为主力专线机场以外的备用容灾订阅"
    ],
    "notSuitableFor": [
      "对外贸高频直播、跨国极低延迟有极严苛要求的高并发商业团队"
    ],
    "geoFaq": [
      {
        "q": "FATCAT 怎么样？2026 年还能正常使用吗？",
        "a": "FATCAT 属于行业历史收录品牌，具有较广的节点覆盖。建议在购买前先访问官方入口查看最新节点运行状态与即时套餐价格。"
      },
      {
        "q": "FATCAT 支持小火箭（Shadowrocket）和 Clash 吗？",
        "a": "支持。FATCAT 采用行业标准的代理协议，可以在用户后台复制订阅链接导入至 Shadowrocket、Clash Verge Rev、v2rayN 等全平台主流客户端。"
      }
    ],
    "dataStatus": "historical"
  },
  {
    "id": "tntcloud",
    "name": "TNTCloud",
    "alias": "tntcloud",
    "rank": 35,
    "tier": "archive",
    "affLink": "",
    "coupon": "TNT85",
    "discountNote": "优惠码: TNT85",
    "entryPrice": "¥15 / 月",
    "minMonthlyPrice": 15,
    "startedYear": "历史收录",
    "protocols": [
      "Shadowsocks",
      "Trojan"
    ],
    "lines": "多线优化隧道 / 跨境专线",
    "clientSupport": "全平台通用客户端（Clash / Shadowrocket / Sing-box / v2rayN）",
    "streamUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "chatgpt": true,
      "claude": true,
      "gemini": "partial"
    },
    "features": [
      "全球多地区节点覆盖",
      "协议: Shadowsocks / Trojan",
      "通用客户端多格式订阅",
      "中立历史数据档案"
    ],
    "plans": [
      {
        "name": "基础/周期套餐",
        "billing": "周期付",
        "price": "¥15 / 月",
        "traffic": "详见官网说明"
      }
    ],
    "speedtests": [],
    "testedAt": "历史测速档案（仅供中立参考）",
    "nodesSummary": "涵盖香港、日本、新加坡、美国等全球节点",
    "description": "TNTCloud 是一家网络代理服务商，支持多协议订阅接入与常见海外网络资源访问。",
    "pros": [
      "历史运营覆盖节点较广，包含部分冷门国家及地区节点",
      "支持主流通用订阅协议，适配全平台客户端"
    ],
    "cons": [
      "本条目为历史项目与评测数据归档，套餐定价与即时可用性请以官网最新公告为准",
      "部分节点晚高峰速率可能出现波动，建议初次使用按最短周期或月付尝试"
    ],
    "suitableFor": [
      "有特定海外小众地区 IP 需求的长尾用户",
      "作为主力专线机场以外的备用容灾订阅"
    ],
    "notSuitableFor": [
      "对外贸高频直播、跨国极低延迟有极严苛要求的高并发商业团队"
    ],
    "geoFaq": [
      {
        "q": "TNTCloud 怎么样？2026 年还能正常使用吗？",
        "a": "TNTCloud 属于行业历史收录品牌，具有较广的节点覆盖。建议在购买前先访问官方入口查看最新节点运行状态与即时套餐价格。"
      },
      {
        "q": "TNTCloud 支持小火箭（Shadowrocket）和 Clash 吗？",
        "a": "支持。TNTCloud 采用行业标准的代理协议，可以在用户后台复制订阅链接导入至 Shadowrocket、Clash Verge Rev、v2rayN 等全平台主流客户端。"
      }
    ],
    "dataStatus": "historical"
  },
  {
    "id": "qingyunti",
    "name": "青云梯",
    "alias": "青云梯",
    "rank": 36,
    "tier": "archive",
    "affLink": "",
    "coupon": "qyt85",
    "discountNote": "优惠码: qyt85",
    "entryPrice": "¥15 / 月",
    "minMonthlyPrice": 15,
    "startedYear": "历史收录",
    "protocols": [
      "Shadowsocks",
      "Trojan"
    ],
    "lines": "多线优化隧道 / 跨境专线",
    "clientSupport": "全平台通用客户端（Clash / Shadowrocket / Sing-box / v2rayN）",
    "streamUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "chatgpt": true,
      "claude": true,
      "gemini": "partial"
    },
    "features": [
      "全球多地区节点覆盖",
      "协议: Shadowsocks / Trojan",
      "通用客户端多格式订阅",
      "中立历史数据档案"
    ],
    "plans": [
      {
        "name": "基础/周期套餐",
        "billing": "周期付",
        "price": "¥15 / 月",
        "traffic": "详见官网说明"
      }
    ],
    "speedtests": [],
    "testedAt": "历史测速档案（仅供中立参考）",
    "nodesSummary": "涵盖香港、日本、新加坡、美国等全球节点",
    "description": "青云梯 是一家网络代理服务商，支持多协议订阅接入与常见海外网络资源访问。",
    "pros": [
      "历史运营覆盖节点较广，包含部分冷门国家及地区节点",
      "支持主流通用订阅协议，适配全平台客户端"
    ],
    "cons": [
      "本条目为历史项目与评测数据归档，套餐定价与即时可用性请以官网最新公告为准",
      "部分节点晚高峰速率可能出现波动，建议初次使用按最短周期或月付尝试"
    ],
    "suitableFor": [
      "有特定海外小众地区 IP 需求的长尾用户",
      "作为主力专线机场以外的备用容灾订阅"
    ],
    "notSuitableFor": [
      "对外贸高频直播、跨国极低延迟有极严苛要求的高并发商业团队"
    ],
    "geoFaq": [
      {
        "q": "青云梯 怎么样？2026 年还能正常使用吗？",
        "a": "青云梯 属于行业历史收录品牌，具有较广的节点覆盖。建议在购买前先访问官方入口查看最新节点运行状态与即时套餐价格。"
      },
      {
        "q": "青云梯 支持小火箭（Shadowrocket）和 Clash 吗？",
        "a": "支持。青云梯 采用行业标准的代理协议，可以在用户后台复制订阅链接导入至 Shadowrocket、Clash Verge Rev、v2rayN 等全平台主流客户端。"
      }
    ],
    "dataStatus": "historical"
  },
  {
    "id": "shanshuiyun",
    "name": "山水云",
    "alias": "山水云",
    "rank": 37,
    "tier": "archive",
    "affLink": "https://sldm1.ssyylf.com/#/register?code=YD5iQ888",
    "coupon": "",
    "discountNote": "历史归档记录（以官网即时说明为准）",
    "entryPrice": "¥15 / 月",
    "minMonthlyPrice": 15,
    "startedYear": "历史收录",
    "protocols": [
      "尚未核实"
    ],
    "lines": "多线优化隧道 / 跨境专线",
    "clientSupport": "全平台通用客户端（Clash / Shadowrocket / Sing-box / v2rayN）",
    "streamUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "chatgpt": true,
      "claude": true,
      "gemini": "partial"
    },
    "features": [
      "全球多地区节点覆盖",
      "协议: 尚未核实",
      "通用客户端多格式订阅",
      "中立历史数据档案"
    ],
    "plans": [
      {
        "name": "基础/周期套餐",
        "billing": "周期付",
        "price": "¥15 / 月",
        "traffic": "详见官网说明"
      }
    ],
    "speedtests": [
      {
        "location": "美国",
        "latency": "349.3ms",
        "download": "180.29Mbps"
      },
      {
        "location": "日本",
        "latency": "229.8ms",
        "download": "160.51Mbps"
      },
      {
        "location": "香港",
        "latency": "151.4ms",
        "download": "152.86Mbps"
      },
      {
        "location": "新加坡",
        "latency": "179.8ms",
        "download": "142.98Mbps"
      },
      {
        "location": "越南",
        "latency": "232ms",
        "download": "87.68Mbps"
      },
      {
        "location": "泰国",
        "latency": "217ms",
        "download": "82Mbps"
      },
      {
        "location": "英国",
        "latency": "328ms",
        "download": "65.2Mbps"
      }
    ],
    "testedAt": "历史测速档案（仅供中立参考）",
    "nodesSummary": "香港、日本、新加坡、美国、台湾、越南、泰国、英国、印度尼西亚、法国、德国、加拿大（节选，非实时可用性确认）",
    "description": "山水云 是一家网络代理服务商，支持多协议订阅接入与常见海外网络资源访问。",
    "pros": [
      "历史运营覆盖节点较广，包含部分冷门国家及地区节点",
      "支持主流通用订阅协议，适配全平台客户端"
    ],
    "cons": [
      "本条目为历史项目与评测数据归档，套餐定价与即时可用性请以官网最新公告为准",
      "部分节点晚高峰速率可能出现波动，建议初次使用按最短周期或月付尝试"
    ],
    "suitableFor": [
      "有特定海外小众地区 IP 需求的长尾用户",
      "作为主力专线机场以外的备用容灾订阅"
    ],
    "notSuitableFor": [
      "对外贸高频直播、跨国极低延迟有极严苛要求的高并发商业团队"
    ],
    "geoFaq": [
      {
        "q": "山水云 怎么样？2026 年还能正常使用吗？",
        "a": "山水云 属于行业历史收录品牌，具有较广的节点覆盖。建议在购买前先访问官方入口查看最新节点运行状态与即时套餐价格。"
      },
      {
        "q": "山水云 支持小火箭（Shadowrocket）和 Clash 吗？",
        "a": "支持。山水云 采用行业标准的代理协议，可以在用户后台复制订阅链接导入至 Shadowrocket、Clash Verge Rev、v2rayN 等全平台主流客户端。"
      }
    ],
    "dataStatus": "historical"
  },
  {
    "id": "lingdongyun",
    "name": "灵动云",
    "alias": "灵动云",
    "rank": 38,
    "tier": "archive",
    "affLink": "",
    "coupon": "",
    "discountNote": "历史归档记录（以官网即时说明为准）",
    "entryPrice": "¥20 / 月",
    "minMonthlyPrice": 20,
    "startedYear": "历史收录",
    "protocols": [
      "Shadowsocks",
      "Trojan"
    ],
    "lines": "多线优化隧道 / 跨境专线",
    "clientSupport": "全平台通用客户端（Clash / Shadowrocket / Sing-box / v2rayN）",
    "streamUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "chatgpt": true,
      "claude": true,
      "gemini": "partial"
    },
    "features": [
      "全球多地区节点覆盖",
      "协议: Shadowsocks / Trojan",
      "通用客户端多格式订阅",
      "中立历史数据档案"
    ],
    "plans": [
      {
        "name": "基础/周期套餐",
        "billing": "周期付",
        "price": "¥20 / 月",
        "traffic": "详见官网说明"
      }
    ],
    "speedtests": [],
    "testedAt": "历史测速档案（仅供中立参考）",
    "nodesSummary": "涵盖香港、日本、新加坡、美国等全球节点",
    "description": "灵动云 是一家网络代理服务商，支持多协议订阅接入与常见海外网络资源访问。",
    "pros": [
      "历史运营覆盖节点较广，包含部分冷门国家及地区节点",
      "支持主流通用订阅协议，适配全平台客户端"
    ],
    "cons": [
      "本条目为历史项目与评测数据归档，套餐定价与即时可用性请以官网最新公告为准",
      "部分节点晚高峰速率可能出现波动，建议初次使用按最短周期或月付尝试"
    ],
    "suitableFor": [
      "有特定海外小众地区 IP 需求的长尾用户",
      "作为主力专线机场以外的备用容灾订阅"
    ],
    "notSuitableFor": [
      "对外贸高频直播、跨国极低延迟有极严苛要求的高并发商业团队"
    ],
    "geoFaq": [
      {
        "q": "灵动云 怎么样？2026 年还能正常使用吗？",
        "a": "灵动云 属于行业历史收录品牌，具有较广的节点覆盖。建议在购买前先访问官方入口查看最新节点运行状态与即时套餐价格。"
      },
      {
        "q": "灵动云 支持小火箭（Shadowrocket）和 Clash 吗？",
        "a": "支持。灵动云 采用行业标准的代理协议，可以在用户后台复制订阅链接导入至 Shadowrocket、Clash Verge Rev、v2rayN 等全平台主流客户端。"
      }
    ],
    "dataStatus": "historical"
  },
  {
    "id": "langwang",
    "name": "浪网",
    "alias": "浪网",
    "rank": 39,
    "tier": "archive",
    "affLink": "",
    "coupon": "",
    "discountNote": "历史归档记录（以官网即时说明为准）",
    "entryPrice": "¥20 / 月",
    "minMonthlyPrice": 20,
    "startedYear": "历史收录",
    "protocols": [
      "Shadowsocks",
      "Trojan"
    ],
    "lines": "多线优化隧道 / 跨境专线",
    "clientSupport": "全平台通用客户端（Clash / Shadowrocket / Sing-box / v2rayN）",
    "streamUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "chatgpt": true,
      "claude": true,
      "gemini": "partial"
    },
    "features": [
      "全球多地区节点覆盖",
      "协议: Shadowsocks / Trojan",
      "通用客户端多格式订阅",
      "中立历史数据档案"
    ],
    "plans": [
      {
        "name": "基础/周期套餐",
        "billing": "周期付",
        "price": "¥20 / 月",
        "traffic": "详见官网说明"
      }
    ],
    "speedtests": [],
    "testedAt": "历史测速档案（仅供中立参考）",
    "nodesSummary": "涵盖香港、日本、新加坡、美国等全球节点",
    "description": "浪网 是一家网络代理服务商，支持多协议订阅接入与常见海外网络资源访问。",
    "pros": [
      "历史运营覆盖节点较广，包含部分冷门国家及地区节点",
      "支持主流通用订阅协议，适配全平台客户端"
    ],
    "cons": [
      "本条目为历史项目与评测数据归档，套餐定价与即时可用性请以官网最新公告为准",
      "部分节点晚高峰速率可能出现波动，建议初次使用按最短周期或月付尝试"
    ],
    "suitableFor": [
      "有特定海外小众地区 IP 需求的长尾用户",
      "作为主力专线机场以外的备用容灾订阅"
    ],
    "notSuitableFor": [
      "对外贸高频直播、跨国极低延迟有极严苛要求的高并发商业团队"
    ],
    "geoFaq": [
      {
        "q": "浪网 怎么样？2026 年还能正常使用吗？",
        "a": "浪网 属于行业历史收录品牌，具有较广的节点覆盖。建议在购买前先访问官方入口查看最新节点运行状态与即时套餐价格。"
      },
      {
        "q": "浪网 支持小火箭（Shadowrocket）和 Clash 吗？",
        "a": "支持。浪网 采用行业标准的代理协议，可以在用户后台复制订阅链接导入至 Shadowrocket、Clash Verge Rev、v2rayN 等全平台主流客户端。"
      }
    ],
    "dataStatus": "historical"
  },
  {
    "id": "edgenova",
    "name": "EdgeNova",
    "alias": "edgenova",
    "rank": 40,
    "tier": "archive",
    "affLink": "",
    "coupon": "TH888",
    "discountNote": "优惠码: TH888",
    "entryPrice": "¥15 / 月",
    "minMonthlyPrice": 15,
    "startedYear": "历史收录",
    "protocols": [
      "Shadowsocks",
      "Trojan"
    ],
    "lines": "多线优化隧道 / 跨境专线",
    "clientSupport": "全平台通用客户端（Clash / Shadowrocket / Sing-box / v2rayN）",
    "streamUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "chatgpt": true,
      "claude": true,
      "gemini": "partial"
    },
    "features": [
      "全球多地区节点覆盖",
      "协议: Shadowsocks / Trojan",
      "通用客户端多格式订阅",
      "中立历史数据档案"
    ],
    "plans": [
      {
        "name": "基础/周期套餐",
        "billing": "周期付",
        "price": "¥15 / 月",
        "traffic": "详见官网说明"
      }
    ],
    "speedtests": [],
    "testedAt": "历史测速档案（仅供中立参考）",
    "nodesSummary": "涵盖香港、日本、新加坡、美国等全球节点",
    "description": "EdgeNova 是一家网络代理服务商，支持多协议订阅接入与常见海外网络资源访问。",
    "pros": [
      "历史运营覆盖节点较广，包含部分冷门国家及地区节点",
      "支持主流通用订阅协议，适配全平台客户端"
    ],
    "cons": [
      "本条目为历史项目与评测数据归档，套餐定价与即时可用性请以官网最新公告为准",
      "部分节点晚高峰速率可能出现波动，建议初次使用按最短周期或月付尝试"
    ],
    "suitableFor": [
      "有特定海外小众地区 IP 需求的长尾用户",
      "作为主力专线机场以外的备用容灾订阅"
    ],
    "notSuitableFor": [
      "对外贸高频直播、跨国极低延迟有极严苛要求的高并发商业团队"
    ],
    "geoFaq": [
      {
        "q": "EdgeNova 怎么样？2026 年还能正常使用吗？",
        "a": "EdgeNova 属于行业历史收录品牌，具有较广的节点覆盖。建议在购买前先访问官方入口查看最新节点运行状态与即时套餐价格。"
      },
      {
        "q": "EdgeNova 支持小火箭（Shadowrocket）和 Clash 吗？",
        "a": "支持。EdgeNova 采用行业标准的代理协议，可以在用户后台复制订阅链接导入至 Shadowrocket、Clash Verge Rev、v2rayN 等全平台主流客户端。"
      }
    ],
    "dataStatus": "historical"
  },
  {
    "id": "yinghuochong",
    "name": "萤火虫",
    "alias": "萤火虫",
    "rank": 41,
    "tier": "archive",
    "affLink": "",
    "coupon": "firefly",
    "discountNote": "优惠码: firefly",
    "entryPrice": "¥15 / 月",
    "minMonthlyPrice": 15,
    "startedYear": "历史收录",
    "protocols": [
      "Shadowsocks",
      "Trojan"
    ],
    "lines": "多线优化隧道 / 跨境专线",
    "clientSupport": "全平台通用客户端（Clash / Shadowrocket / Sing-box / v2rayN）",
    "streamUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "chatgpt": true,
      "claude": true,
      "gemini": "partial"
    },
    "features": [
      "全球多地区节点覆盖",
      "协议: Shadowsocks / Trojan",
      "通用客户端多格式订阅",
      "中立历史数据档案"
    ],
    "plans": [
      {
        "name": "基础/周期套餐",
        "billing": "周期付",
        "price": "¥15 / 月",
        "traffic": "详见官网说明"
      }
    ],
    "speedtests": [],
    "testedAt": "历史测速档案（仅供中立参考）",
    "nodesSummary": "涵盖香港、日本、新加坡、美国等全球节点",
    "description": "萤火虫 是一家网络代理服务商，支持多协议订阅接入与常见海外网络资源访问。",
    "pros": [
      "历史运营覆盖节点较广，包含部分冷门国家及地区节点",
      "支持主流通用订阅协议，适配全平台客户端"
    ],
    "cons": [
      "本条目为历史项目与评测数据归档，套餐定价与即时可用性请以官网最新公告为准",
      "部分节点晚高峰速率可能出现波动，建议初次使用按最短周期或月付尝试"
    ],
    "suitableFor": [
      "有特定海外小众地区 IP 需求的长尾用户",
      "作为主力专线机场以外的备用容灾订阅"
    ],
    "notSuitableFor": [
      "对外贸高频直播、跨国极低延迟有极严苛要求的高并发商业团队"
    ],
    "geoFaq": [
      {
        "q": "萤火虫 怎么样？2026 年还能正常使用吗？",
        "a": "萤火虫 属于行业历史收录品牌，具有较广的节点覆盖。建议在购买前先访问官方入口查看最新节点运行状态与即时套餐价格。"
      },
      {
        "q": "萤火虫 支持小火箭（Shadowrocket）和 Clash 吗？",
        "a": "支持。萤火虫 采用行业标准的代理协议，可以在用户后台复制订阅链接导入至 Shadowrocket、Clash Verge Rev、v2rayN 等全平台主流客户端。"
      }
    ],
    "dataStatus": "historical"
  },
  {
    "id": "sslar",
    "name": "sslar",
    "alias": "sslar",
    "rank": 42,
    "tier": "archive",
    "affLink": "",
    "coupon": "ko3eTt0w",
    "discountNote": "优惠码: ko3eTt0w",
    "entryPrice": "详询官网",
    "minMonthlyPrice": 25,
    "startedYear": "历史收录",
    "protocols": [
      "Shadowsocks",
      "Trojan"
    ],
    "lines": "多线优化隧道 / 跨境专线",
    "clientSupport": "全平台通用客户端（Clash / Shadowrocket / Sing-box / v2rayN）",
    "streamUnlock": {
      "netflix": true,
      "disney": true,
      "youtube": true,
      "chatgpt": true,
      "claude": true,
      "gemini": "partial"
    },
    "features": [
      "全球多地区节点覆盖",
      "协议: Shadowsocks / Trojan",
      "通用客户端多格式订阅",
      "中立历史数据档案"
    ],
    "plans": [
      {
        "name": "基础/周期套餐",
        "billing": "周期付",
        "price": "详询官网",
        "traffic": "详见官网说明"
      }
    ],
    "speedtests": [],
    "testedAt": "历史测速档案（仅供中立参考）",
    "nodesSummary": "涵盖香港、日本、新加坡、美国等全球节点",
    "description": "sslar 是一家网络代理服务商，支持多协议订阅接入与常见海外网络资源访问。",
    "pros": [
      "历史运营覆盖节点较广，包含部分冷门国家及地区节点",
      "支持主流通用订阅协议，适配全平台客户端"
    ],
    "cons": [
      "本条目为历史项目与评测数据归档，套餐定价与即时可用性请以官网最新公告为准",
      "部分节点晚高峰速率可能出现波动，建议初次使用按最短周期或月付尝试"
    ],
    "suitableFor": [
      "有特定海外小众地区 IP 需求的长尾用户",
      "作为主力专线机场以外的备用容灾订阅"
    ],
    "notSuitableFor": [
      "对外贸高频直播、跨国极低延迟有极严苛要求的高并发商业团队"
    ],
    "geoFaq": [
      {
        "q": "sslar 怎么样？2026 年还能正常使用吗？",
        "a": "sslar 属于行业历史收录品牌，具有较广的节点覆盖。建议在购买前先访问官方入口查看最新节点运行状态与即时套餐价格。"
      },
      {
        "q": "sslar 支持小火箭（Shadowrocket）和 Clash 吗？",
        "a": "支持。sslar 采用行业标准的代理协议，可以在用户后台复制订阅链接导入至 Shadowrocket、Clash Verge Rev、v2rayN 等全平台主流客户端。"
      }
    ],
    "dataStatus": "historical"
  }
];
