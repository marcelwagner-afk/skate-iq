/**
 * Standalone builder: produces a single double-clickable HTML file (works via
 * file:// where module-chunk loading is blocked). Builds with inlined dynamic
 * imports, then inlines the one JS chunk + CSS into index.html.
 * Usage: node scripts/make-standalone.mjs [--real] <output.html>
 */
import { execSync } from 'node:child_process';
import { readFileSync, readdirSync, writeFileSync, rmSync } from 'node:fs';
import { join } from 'node:path';

const real = process.argv.includes('--real');
const out = process.argv.filter(a => a.endsWith('.html'))[0];
if (!out) { console.error('usage: node scripts/make-standalone.mjs [--real] <output.html>'); process.exit(1); }

const outDir = '.tmp/standalone-dist';
rmSync(outDir, { recursive: true, force: true });
execSync(`npx vite build --outDir ${outDir}`, {
  stdio: 'inherit',
  env: {
    ...process.env,
    ...(real ? { VITE_REAL: '1' } : {}),
    VITE_INLINE: '1',
  },
});

const assets = join(outDir, 'assets');
let html = readFileSync(join(outDir, 'index.html'), 'utf8');
for (const f of readdirSync(assets)) {
  const content = readFileSync(join(assets, f), 'utf8');
  if (f.endsWith('.css')) {
    html = html.replace(new RegExp(`<link rel="stylesheet"[^>]*${f.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[^>]*>`),
      () => `<style>${content}</style>`);
  } else if (f.endsWith('.js')) {
    html = html.replace(new RegExp(`<script type="module"[^>]*${f.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[^>]*></script>`),
      () => `<script type="module">${content.replace(/<\/script>/g, '<\\/script>')}</script>`);
  }
}
// favicon: drop external ref (optional nicety)
html = html.replace(/<link rel="icon"[^>]*>/, '');
writeFileSync(out, html);
console.log(`standalone written: ${out} (${(html.length / 1024 / 1024).toFixed(2)} MB, real=${real})`);
