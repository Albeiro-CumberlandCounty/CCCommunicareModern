// Lightweight static output QA. This checks structural basics and local targets;
// it is not a browser accessibility assessment or a substitute for axe/manual WCAG review.
import { readdir, readFile, access } from 'node:fs/promises';
import { join, extname } from 'node:path';

const root = 'dist';
const errors = [];
let pageCount = 0;
let linkCount = 0;

async function exists(path) {
  try { await access(path); return true; }
  catch { return false; }
}

async function visit(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const file = join(dir, entry.name);
    if (entry.isDirectory()) { await visit(file); continue; }
    if (extname(file) !== '.html') continue;
    pageCount++;
    const html = await readFile(file, 'utf8');
    const h1s = [...html.matchAll(/<h1(?:\s|>)/gi)].length;
    if (h1s !== 1) errors.push(`${file}: expected exactly one h1, found ${h1s}`);
    if (!/<html[^>]*lang="en"/i.test(html)) errors.push(`${file}: missing document language`);
    if (!/<main[^>]*id="main-content"/i.test(html)) errors.push(`${file}: missing main landmark`);
    if (!/href="#main-content"/.test(html)) errors.push(`${file}: missing skip link`);

    // Only root-relative same-origin paths and fragments; external links are not checked.
    for (const match of html.matchAll(/(?:href|src)=["'](\/(?!\/)[^"']*)["']/gi)) {
      const value = match[1];
      const [pathname, fragment] = value.split('#');
      const relative = pathname.split('?')[0].replace(/^\/+/, '');
      const target = relative.length === 0 ? join(root, 'index.html') :
        pathname.endsWith('/') ? join(root, relative, 'index.html') : join(root, relative);
      linkCount++;
      if (!(await exists(target))) {
        errors.push(`${file}: missing local target ${value}`);
        continue;
      }
      if (fragment && target.endsWith('.html')) {
        const targetHtml = target === file ? html : await readFile(target, 'utf8');
        if (!targetHtml.includes(`id="${fragment}"`)) {
          errors.push(`${file}: missing fragment target ${value}`);
        }
      }
    }
  }
}

await visit(root);
if (pageCount < 8) errors.push(`Expected at least eight built pages; found ${pageCount}`);
if (errors.length) {
  for (const error of errors) process.stderr.write(`FAIL: ${error}\n`);
  process.exitCode = 1;
} else {
  console.log(`Static site QA passed: ${pageCount} HTML pages, ${linkCount} local references examined.`);
}
