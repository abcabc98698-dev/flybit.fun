---
title: "Customizing Your Static Site: Personalization, Tokens, and Architecture"
description: "How to adapt Flybit's solid architecture into your own personal corner of the web using modern CSS tokens and clean configurations."
pubDate: 2026-09-16
tags: ["flybit", "configuration", "personalization", "design", "css"]
audio: true
---

When you work with **Flybit**, you are not just adopting a static template—you are working on an engineered architectural foundation.

The layout, typography, and contrast tokens were designed to give you an ultra-clean baseline. From here, adapting the look and feel to your personal brand or organization is straightforward.

---

## 🎨 Visual Tokens & Design Themes

Flybit uses clean, modular **CSS Custom Properties** (Variables). To customize primary colors, fonts, or margins, you do not need complex utility cascades. Open `src/styles/global.css`:

```css
:root {
  --font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-mono: ui-monospace, 'Cascadia Code', 'Source Code Pro', monospace;
  --measure: 68ch; /* Optimal line length for sustained reading */
}
```

### The Four Theme Palettes
Each theme (White, Cream, Slate, Midnight) is scoped cleanly under `[data-theme="..."]`:

- **`data-theme="white"`**: Minimalist paper white with slate ink.
- **`data-theme="cream"`**: Natural warm tones (`#faf8f5`) reducing eye strain.
- **`data-theme="slate"`**: Deep navy slate (`#0d1117`) ideal for technical coding.
- **`data-theme="midnight"`**: Pure OLED `#000000` with high-contrast text.

To set your default theme, simply update `defaultTheme` in `src/config/site.ts`:

```typescript
export const siteConfig: SiteConfig = {
  // Options: 'white' | 'cream' | 'slate' | 'midnight'
  defaultTheme: 'slate',
};
```

---

## ⚙️ Granular Feature Flags

Flybit follows a strict **"Complete by default, minimalist on demand"** principle. If you prefer a distraction-free layout with no audio player, no share bar, or no search modal, you can turn any feature off in `src/config/site.ts`:

```typescript
features: {
  search: true,          // Full-text search modal (Ctrl+K)
  tableOfContents: true, // Sticky sidebar in articles
  readingTime: true,     // "X min read" badge
  audioPlayer: true,     // Web Speech API text-to-speech reader
  tags: true,            // Tag badges and topic clouds
  socialShare: true,     // Share drawer with canonical link copy
  themeSwitcher: true,   // Palette dropdown in navigation bar
  backToTop: true,       // Floating scroll button
  imageZoom: true,       // Medium-style smooth image zoom
}
```

When a flag is set to `false`, Astro completely strips the corresponding markup, styles, and scripts during the static build, guaranteeing zero unused bytes.
