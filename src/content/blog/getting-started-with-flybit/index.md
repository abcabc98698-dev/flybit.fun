---
title: "Getting Started with Flybit"
description: "Everything you need to know to launch your technical blog, write articles in Obsidian, and deploy globally with zero bloat."
pubDate: 2026-09-17
tags: ["flybit", "astro", "quickstart", "obsidian"]
audio: true
---

Welcome to **Flybit**! This static architecture was engineered from the ground up for technical writers, software architects, and engineering teams who want a frictionless publishing pipeline.

Whether you are an experienced software engineer or a technical writer, Flybit makes local writing and static web publishing simple, fast, and completely sovereign.

---

## ⚡ Instant Setup: From Zero to Localhost

Flybit follows a **batteries-included** philosophy: everything you need to run the site and write notes is ready out of the box.

### Prerequisites
- **Node.js**: Version `22.12.0` or higher.
- **Obsidian**: (Optional, but recommended) for local editing.

### 1. Clone Your Repository & Install

```bash
# 1. Clone the repository
git clone https://github.com/flybit/flybit.fun.git
cd flybit.fun

# 2. Install dependencies
npm install

# 3. Launch the local development server
npm run dev
```

Visit `http://localhost:4321` in your browser. You will see your live Flybit site with instant Hot Module Replacement (HMR).

---

## ✍️ Writing Articles in Obsidian

Flybit comes with a **pre-configured Obsidian vault** located right inside `src/content/`. You do not need to install complex extensions or configure frontmatter parsers manually.

1. Open **Obsidian**.
2. Click **Open folder as vault**.
3. Select the **`src/content`** folder inside your Flybit project.

### The Page Bundle Pattern
Every article lives in its own directory inside `src/content/blog/`:

```text
src/content/blog/
└── my-new-article/
    ├── index.md           # Your article text & frontmatter
    └── diagram.svg        # Images and vector diagrams
```

When you paste an image (`Ctrl + V`) inside Obsidian, it is saved directly into the post's folder. When published, Flybit's Astro engine compiles this into clean canonical routes:

`https://flybit.fun/blog/my-new-article/`

---

## 🚀 Global Continuous Deployment

Because Flybit produces 100% static HTML, you can deploy it to any modern edge hosting platform (Cloudflare Pages, Vercel, Netlify, or GitHub Pages) at zero cost.

1. Push your code to your Git provider (GitHub, GitLab, or Gitea).
2. Connect your repository to your edge host.
3. Configure build settings:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Environment Variable**: `SITE_URL=https://flybit.fun`

Your host will automatically build and distribute your static assets across hundreds of edge locations worldwide.

---

## 🎨 Handcrafted Color Themes

Flybit includes four hand-tuned color palettes accessible from the switcher in the header:
- **Clean White**: High-contrast, minimal editorial light mode.
- **Warm Paper (Cream)**: Soft, warm palette reminiscent of printed paper.
- **Slate Navy**: Modern slate-blue dark theme for code and engineering focus.
- **Midnight OLED**: Pure black dark theme optimized for OLED displays.

👉 **[Read the Full Guide: Connecting Your Obsidian Vault to Flybit →](/blog/obsidian-vault-guide/)**
