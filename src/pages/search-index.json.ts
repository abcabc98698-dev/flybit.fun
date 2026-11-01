import { getCollection } from 'astro:content';
import { airportsData } from '../data/airports';

export async function GET() {
  const posts = (await getCollection('blog', ({ data }) => !data.draft))
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  // Aggregate unique tags with counts
  const tagsMap = new Map<string, number>();
  for (const post of posts) {
    for (const tag of post.data.tags || []) {
      tagsMap.set(tag, (tagsMap.get(tag) ?? 0) + 1);
    }
  }
  for (const airport of airportsData) {
    for (const tag of [airport.lines, ...airport.protocols]) {
      tagsMap.set(tag, (tagsMap.get(tag) ?? 0) + 1);
    }
  }

  const tags = [...tagsMap.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([name, count]) => ({
      name,
      count,
      url: `/tags/${name}`,
    }));

  const items = {
    posts: posts.map((p) => ({
      id: p.id,
      type: 'post' as const,
      title: p.data.title,
      description: p.data.description,
      url: `/blog/${p.id}`,
      date: p.data.pubDate.toLocaleDateString('zh-CN', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      }),
      tags: p.data.tags || [],
    })),
    brands: airportsData.map((b) => ({
      id: b.id,
      type: 'brand' as const,
      title: `${b.name}${b.alias ? ` (${b.alias})` : ''}`,
      description: `${b.lines} · 入门约 ${b.entryPrice} · ${b.nodesSummary}`,
      url: `/brands/${b.id}`,
      date: b.startedYear ? `${b.startedYear} 运营` : '评测实验室收录',
      tags: [b.lines, ...b.protocols.slice(0, 3)],
      category: b.lines,
      emoji: '🏢',
      rank: b.rank,
    })),
    projects: [],
    tags,
  };

  return new Response(JSON.stringify(items), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
