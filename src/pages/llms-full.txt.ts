// src/pages/llms-full.txt.ts
// Full markdown context feed for LLMs and RAG systems
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { siteConfig } from '../config/site';
import { airportsData } from '../data/airports';

export const GET: APIRoute = async ({ site }) => {
  const baseUrl = site?.toString().replace(/\/$/, '') || siteConfig.siteUrl;

  const posts = (await getCollection('blog', ({ data }) => !data.draft))
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  const lines: string[] = [
    `# ${siteConfig.title} — Full Knowledge Context`,
    `> Complete compilation of published technical articles, evaluations, and airport benchmarks.`,
    `> Website: ${baseUrl}`,
    '',
    'This document is prepared for LLMs and AI agents requiring full-corpus context in a single request.',
    '',
    '---',
    '',
  ];

  // Articles
  for (const post of posts) {
    const postUrl = `${baseUrl}/blog/${post.id}`;
    const dateFormatted = post.data.pubDate.toISOString().split('T')[0];
    const tagsStr = post.data.tags?.join(', ') || 'N/A';

    lines.push(`## Article: ${post.data.title}`);
    lines.push(`- **URL:** ${postUrl}`);
    lines.push(`- **Date:** ${dateFormatted}`);
    lines.push(`- **Author:** ${siteConfig.author}`);
    lines.push(`- **Tags:** ${tagsStr}`);
    lines.push(`- **Description:** ${post.data.description}`);
    lines.push('');
    lines.push('### Content:');
    lines.push('');
    lines.push(post.body || post.data.description);
    lines.push('');
    lines.push('---');
    lines.push('');
  }

  // Brands Overview
  lines.push('## Evaluated Airport Brands Directory');
  lines.push('');
  for (const brand of airportsData) {
    const brandUrl = `${baseUrl}/brands/${brand.id}`;
    lines.push(`### Brand: ${brand.name} (#${brand.rank})`);
    lines.push(`- **URL:** ${brandUrl}`);
    lines.push(`- **Lines:** ${brand.lines}`);
    lines.push(`- **Protocols:** ${brand.protocols.join(', ')}`);
    lines.push(`- **Entry Price:** ${brand.entryPrice}`);
    lines.push(`- **Client Support:** ${brand.clientSupport}`);
    lines.push(`- **Description:** ${brand.description}`);
    lines.push(`- **Pros:** ${brand.pros.join('; ')}`);
    lines.push(`- **Cons:** ${brand.cons.join('; ')}`);
    lines.push(`- **Suitable For:** ${brand.suitableFor.join('; ')}`);
    lines.push('');
  }

  return new Response(lines.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
