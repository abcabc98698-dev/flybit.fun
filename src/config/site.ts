/**
 * Granular Feature Flags ("Complete by default, minimalist on demand")
 *
 * All flags default to `true` when omitted.
 * Minimalist or purist technical writers can set any flag to `false`
 * to completely eliminate markup, styles, and scripts during SSG build.
 */
export interface SiteFeatures {
  /** Full-text search modal + Ctrl/Cmd+K shortcuts + header triggers */
  search?: boolean;
  /** Sticky sidebar table of contents in blog posts */
  tableOfContents?: boolean;
  /** "X min read" badge in post headers */
  readingTime?: boolean;
  /** Accessible text-to-speech audio reader in blog posts and project details */
  audioPlayer?: boolean;
  /** Tag badges in post headers, article cards, and tag clouds */
  tags?: boolean;
  /** Notion-style share modal and trigger bar in blog posts */
  socialShare?: boolean;
  /** Theme toggle dropdown (White, Cream, Slate, Midnight) */
  themeSwitcher?: boolean;
  /** Floating smooth-scroll back-to-top button */
  backToTop?: boolean;
  /** Medium-style smooth image zoom modal on click */
  imageZoom?: boolean;
  /** Interactive blog comments or discussion trigger */
  comments?: boolean;
}

export interface SiteConfig {
  title: string;
  tagline: string;
  description: string;
  author: string;
  siteUrl: string;
  defaultTheme: 'white' | 'cream' | 'slate' | 'midnight';
  features?: SiteFeatures;
  socialLinks: {
    github?: string;
    twitter?: string;
    linkedin?: string;
    email?: string;
    telegram?: string;
  };
  navLinks: {
    title: string;
    href: string;
  }[];
  verifications?: {
    google?: string;
    bing?: string;
    baidu?: string;
    shenma?: string;
  };
  comments?: {
    enabled: boolean;
    provider?: string;
    repo?: string;
  };
}

export const siteConfig: SiteConfig = {
  title: 'Flybit 测评实验室',
  tagline: '42家主流机场实测监控、测速解锁与深度选购指南',
  description: 'Flybit 网络实测实验室（flybit.fun）专注于 2026 主流机场专线节点实测、4K流媒体与 ChatGPT/Claude 解锁监控、优惠码整理与全平台客户端配置指南。中立硬核，拒绝云测评。',
  author: 'Flybit 实验室',
  siteUrl: (typeof process !== 'undefined' && process.env?.SITE_URL) || (import.meta as any).env?.SITE_URL || 'https://flybit.fun',
  defaultTheme: 'slate',
  // Granular Feature Flags
  features: {
    search: true,
    tableOfContents: true,
    readingTime: true,
    audioPlayer: false,
    tags: true,
    socialShare: true,
    themeSwitcher: true,
    backToTop: true,
    imageZoom: true,
    comments: false
  },
  socialLinks: {
    github: 'https://github.com',
    telegram: 'https://t.me',
    email: 'contact@flybit.fun'
  },
  navLinks: [
    { title: '首页', href: '/' },
    { title: '机场推荐', href: '/jichang' },
    { title: 'VPN加速', href: '/vpn' },
    { title: '梯子推荐', href: '/tizi' },
    { title: 'Clash专题', href: '/clash' },
    { title: '节点线路', href: '/nodes' },
    { title: '使用教程', href: '/tutorial' },
    { title: '免费试用', href: '/free' },
    { title: '品牌库', href: '/brands' }
  ],
  verifications: {
    // 留空待站长填入正式密钥，构建时自动编译输出标准静态 HTML meta 标签，禁止客户端 JS 伪造插入
    google: (typeof process !== 'undefined' && process.env?.GOOGLE_SITE_VERIFICATION) || '',
    bing: (typeof process !== 'undefined' && process.env?.BING_SITE_VERIFICATION) || '',
    baidu: (typeof process !== 'undefined' && process.env?.BAIDU_SITE_VERIFICATION) || '',
    shenma: (typeof process !== 'undefined' && process.env?.SHENMA_SITE_VERIFICATION) || ''
  },
  comments: {
    enabled: false,
    provider: 'local'
  }
};
