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
    { title: '机场品牌库', href: '/brands' },
    { title: '实测实验室', href: '/speedtest' },
    { title: '客户端教程', href: '/clients' },
    { title: '专题指南', href: '/blog' },
    { title: '评测准则', href: '/about' }
  ],
  comments: {
    enabled: false,
    provider: 'local'
  }
};
