import { mkdirSync, writeFileSync, copyFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const publicDir = join(root, 'public');
const appDir = join(root, 'app');
const base = 'https://www.uxdesigner.london';

const paths = [
  '/logos/logo-variation-1.png',
  '/favicon.ico',
  '/favicon.svg',
  '/favicon-32x32.png',
  '/favicon-16x16.png',
  '/apple-touch-icon.png',
  '/mask-icon.svg',
  '/icon-192.png',
  '/icon-512.png',
];

mkdirSync(join(publicDir, 'logos'), { recursive: true });

for (const path of paths) {
  const url = `${base}${path}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed ${url}: ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  const out = join(publicDir, path.slice(1));
  writeFileSync(out, buf);
  console.log(`Wrote ${out} (${buf.length} bytes)`);
}

copyFileSync(join(publicDir, 'favicon.svg'), join(appDir, 'icon.svg'));
copyFileSync(join(publicDir, 'favicon.ico'), join(appDir, 'favicon.ico'));
copyFileSync(join(publicDir, 'apple-touch-icon.png'), join(appDir, 'apple-icon.png'));
copyFileSync(join(publicDir, 'icon-512.png'), join(publicDir, 'icon-maskable.png'));
copyFileSync(join(publicDir, 'favicon-32x32.png'), join(publicDir, 'favicon.png'));

console.log('Synced app/ metadata icons');
