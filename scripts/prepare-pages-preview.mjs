import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join, extname } from 'node:path';

const output = 'dist';
const base = '/CCCommunicareModern';
const previewOrigin = 'https://albeiro-cumberlandcounty.github.io';
const productionOrigin = 'https://cccommunicare.org';

async function walk(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) {
      await walk(path);
    } else if (extname(path) === '.html') {
      let html = await readFile(path, 'utf8');

      // Rebase absolute same-site links/assets to the GitHub Pages project path.
      // External https://, mailto:, tel:, fragment and relative links are preserved.
      html = html.replace(/(\b(?:href|src)=["'])\/(?!\/)/g, `$1${base}/`);

      // Do not advertise the production site as the canonical URL for previews.
      html = html.replaceAll(productionOrigin + '/', previewOrigin + base + '/');

      // Preview is public but is not an approved or indexable production release.
      html = html.replace('</head>', '    <meta name="robots" content="noindex, nofollow" />\n  </head>');
      await writeFile(path, html);
    }
  }
}

await walk(output);
await writeFile(join(output, 'robots.txt'), 'User-agent: *\nDisallow: /\n');
console.log('Prepared project-path preview with noindex metadata.');
