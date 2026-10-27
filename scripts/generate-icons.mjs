import { copyFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const publicDir = join(publicDirPath(root), 'public');

function publicDirPath(r) {
  return r;
}

const sync = [
  ['favicon.ico', join(root, 'app', 'favicon.ico')],
  ['favicon.svg', join(root, 'app', 'icon.svg')],
  ['apple-touch-icon.png', join(root, 'app', 'apple-icon.png')],
  ['favicon-32x32.png', join(publicDir, 'favicon.png')],
];

for (const [name, dest] of sync) {
  const src = join(publicDir, name);
  if (!existsSync(src)) {
    console.warn(`Skip ${name}: missing in public/ (run scripts/fetch-uxdesigner-icons.mjs)`);
    continue;
  }
  copyFileSync(src, dest);
}

const icon512 = join(publicDir, 'icon-512.png');
if (existsSync(icon512)) {
  copyFileSync(icon512, join(publicDir, 'icon-maskable.png'));
}

console.log('Icons synced to app/ and public/');
