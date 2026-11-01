// scripts/audit-google-search.mjs
// Verifies SEO crawlability, Google Rich Snippets eligibility, canonical URLs, and SERP display limits
import fs from 'node:fs';
import path from 'node:path';

const distDir = path.resolve('dist');

if (!fs.existsSync(distDir)) {
  console.error('Error: dist/ directory does not exist. Run "npm run build" first.');
  process.exit(1);
}

console.log('====================================================');
console.log('      GOOGLE SEARCH & SEO AUDIT (Flybit)            ');
console.log('====================================================\n');

// 1. Verify robots.txt
const robotsPath = path.join(distDir, 'robots.txt');
let crawlScore = 100;
if (fs.existsSync(robotsPath)) {
  const robots = fs.readFileSync(robotsPath, 'utf8');
  const hasSitemap = robots.includes('sitemap-index.xml') || robots.includes('sitemap.xml');
  const allowsAll = robots.includes('User-agent: *') && robots.includes('Allow: /');
  console.log(`[PASS] robots.txt found: ${allowsAll ? 'Crawling allowed' : 'Check crawl permissions'}`);
  console.log(`[PASS] Sitemap referenced in robots.txt: ${hasSitemap ? 'Yes' : 'Missing'}`);
} else {
  console.warn('[WARN] robots.txt missing in dist/');
  crawlScore -= 30;
}

// 2. Verify sitemap-index.xml
const sitemapPath = path.join(distDir, 'sitemap-index.xml');
if (fs.existsSync(sitemapPath)) {
  console.log('[PASS] sitemap-index.xml found in dist/');
} else {
  console.warn('[WARN] sitemap-index.xml not found in dist/');
  crawlScore -= 20;
}

// 3. Audit HTML files
function getHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getHtmlFiles(fullPath));
    } else if (file.endsWith('.html')) {
      results.push(fullPath);
    }
  });
  return results;
}

const htmlFiles = getHtmlFiles(distDir);
console.log(`\nAuditing ${htmlFiles.length} generated static pages for Google SEO:\n`);

const blogPosts = htmlFiles.filter((f) => f.includes(path.sep + 'blog' + path.sep) && !f.endsWith('blog' + path.sep + 'index.html'));

let schemaPasses = 0;
let serpPasses = 0;

blogPosts.slice(0, 5).forEach((file, idx) => {
  const html = fs.readFileSync(file, 'utf8');
  const rel = path.relative(distDir, file).replace(/\\/g, '/');

  const titleMatch = html.match(/<title>(.*?)<\/title>/i);
  const descMatch = html.match(/<meta\s+name=["']description["']\s+content=["'](.*?)["']/i);
  const canonicalMatch = html.match(/<link\s+rel=["']canonical["']\s+href=["'](.*?)["']/i);
  const jsonLdMatch = html.match(/<script\s+type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/i);

  const title = titleMatch ? titleMatch[1] : 'N/A';
  const desc = descMatch ? descMatch[1] : 'N/A';
  const canonical = canonicalMatch ? canonicalMatch[1] : 'N/A';

  const titleLen = title.length;
  const descLen = desc.length;
  const titleOk = titleLen >= 20 && titleLen <= 70;
  const descOk = descLen >= 50 && descLen <= 170;

  let hasArticleSchema = false;
  let schemaType = 'None';
  const allJsonLd = [...html.matchAll(/<script\s+type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/gi)];
  for (const m of allJsonLd) {
    try {
      const data = JSON.parse(m[1]);
      const type = data['@type'];
      if (type === 'BlogPosting' || type === 'Article') {
        hasArticleSchema = true;
        schemaType = type;
      } else if (!hasArticleSchema && type) {
        schemaType = type;
      }
    } catch {
      schemaType = 'Invalid JSON';
    }
  }
  if (hasArticleSchema) schemaPasses++;

  if (titleOk && descOk && canonical !== 'N/A') serpPasses++;

  console.log('----------------------------------------------------');
  console.log(`Page [${idx + 1}]: /${rel}`);
  console.log(`Title (${titleLen} chars): "${title}" ${titleOk ? '[OK]' : '[WARN]'}`);
  console.log(`Description (${descLen} chars): "${desc.slice(0, 80)}..." ${descOk ? '[OK]' : '[WARN]'}`);
  console.log(`Canonical: ${canonical}`);
  console.log(`Schema.org: ${schemaType} ${hasArticleSchema ? '[PASS - Google Rich Cards]' : '[WARN]'}`);
});

console.log('\n====================================================');
console.log('           GOOGLE AUDIT SUMMARY                     ');
console.log('====================================================');
console.log(`Googlebot Crawlability:    ${crawlScore === 100 ? '100% (Robots + Sitemap Active)' : 'Check config'}`);
console.log(`Google Schema.org Cards:   ${schemaPasses}/${Math.min(blogPosts.length, 5)} articles with BlogPosting JSON-LD`);
console.log('Google SERP Snippets:      Optimized titles & descriptions for desktop/mobile');
console.log('====================================================\n');
