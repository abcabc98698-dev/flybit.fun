---
title: "Project Map & Content Customization: Where to Edit Every Section in Flybit"
description: "A developer roadmap showing the exact files to edit for your hero banner, about page, footer, social links, and metadata, followed by instant continuous deployment."
pubDate: 2026-09-16
tags: ["architecture", "guide", "git", "workflow", "configuration"]
draft: false
---

When maintaining a personal website, you shouldn't have to hunt through dozens of deeply nested configuration files just to update your bio, social media profiles, or hero headline.

Flybit was engineered with clean separation of concerns: global site settings live in a central configuration module, while individual page layouts are declared transparently in their respective Astro files.

Here is the exact **file-by-file directory map** showing where each section of your website lives, how to edit it, and how to deploy your updates in under a minute.

---

## 1. Global Metadata & Social Links: `src/config/site.ts`

This is the primary file you calibrate when you first set up your publication:

```text
src/config/site.ts
```

In this single file, you configure:
* **Site Identity**: `title`, `tagline`, and default meta `description`.
* **Author Details**: `author` name (your canonical URL is set separately with `SITE_URL`, see below).
* **Social Links**: Your LinkedIn profile, GitHub organization, and contact email.
* **Default Theme**: Initial color mode (`slate`, `white`, `cream`, or `midnight`).
* **Feature Flags**: Toggle search, reading time, table of contents, and audio player on or off.

```typescript
// Example from src/config/site.ts
export const siteConfig: SiteConfig = {
  title: 'Flybit',
  tagline: 'High-performance engineering notes and system architecture.',
  description: 'Minimalist, typography-first static knowledge hub.',
  author: 'Flybit Team',
  defaultTheme: 'slate',
  socialLinks: {
    github: 'https://github.com/flybit',
    linkedin: 'https://www.linkedin.com/company/flybit/',
    email: 'contact@flybit.fun'
  }
};
```

> [!IMPORTANT]
> **Set your production URL with `SITE_URL`.** Your canonical URL drives the sitemap, RSS feed, canonical tags, and `llms.txt`. Set the `SITE_URL` environment variable in your host's project settings (Cloudflare Pages, Vercel, or Netlify), for example `SITE_URL=https://flybit.fun`. For local builds, put it in a `.env` file (see `.env.example`). If you leave it unset, Flybit defaults to `https://flybit.fun`.

---

## 2. Homepage Hero & Actions: `src/pages/index.astro`

To update your homepage headline, call-to-action buttons, or layout structure:

```text
src/pages/index.astro
```

* **Hero Title & Subtitle**: Lines 31-36. Change the primary value proposition.
* **Call-to-Action Buttons**: Lines 37-41. Customize the links pointing to `/blog`, `/projects`, or `/about`.
* **Featured Projects**: Highlights are automatically filtered by `featured: true` in your project frontmatter.

---

## 3. About Page & Architecture: `src/pages/about.astro`

Your biography, technical principles, and engineering manifesto live in:

```text
src/pages/about.astro
```

Everything inside `<div class="about-content">` is written in semantic HTML. You can add your professional history, company mission, team members, or technical stack overview.

---

## 4. Articles & Knowledge Notes: `src/content/blog/`

To write a new blog post, create a folder inside `src/content/blog/`:

```text
src/content/blog/
└── my-new-post/
    └── index.md
```

Set your frontmatter:
```markdown
---
title: "My Article Title"
description: "A summary for SEO cards and article previews."
pubDate: 2026-10-01
tags: ["engineering", "architecture"]
draft: false
---
```

---

## 5. Instant Publishing via Git

Because Flybit requires zero runtime databases, publishing updates is as simple as pushing a Git commit:

```bash
git add .
git commit -m "feat: publish new architecture notes"
git push
```

Your connected host (Cloudflare Pages, Vercel, or Netlify) detects the push, compiles your static bundle, and distributes it globally in seconds.
