import { readFile, writeFile } from 'node:fs/promises'
import { createServer, loadEnv } from 'vite'

const env = loadEnv('production', process.cwd(), '')
const siteUrl = process.env.VITE_SITE_URL || env.VITE_SITE_URL || ''
if (siteUrl) {
  const url = new URL(siteUrl)
  if (
    !['http:', 'https:'].includes(url.protocol) ||
    url.pathname !== '/' ||
    url.search ||
    url.hash
  ) {
    throw new Error(
      'VITE_SITE_URL must be a website origin, such as https://example.com',
    )
  }
}
const template = await readFile('dist/index.html', 'utf8')
const vite = await createServer({
  server: { middlewareMode: true, hmr: false, ws: false },
  appType: 'custom',
})
const routes = ['/', '/about']
try {
  const { render } = await vite.ssrLoadModule('/src/entry-server.tsx')
  for (const route of [...routes, '/404']) {
    const markup = render(route, siteUrl)
    const head = []
    const body = markup.replace(
      /<title\b[^>]*>[\s\S]*?<\/title>|<meta\b[^>]*>|<link\b[^>]*>/g,
      (tag) => {
        head.push(tag)
        return ''
      },
    )
    const output =
      route === '/'
        ? 'dist/index.html'
        : route === '/404'
          ? 'dist/404.html'
          : `dist${route}.html`
    await writeFile(
      output,
      template
        .replace('<!--page-head-->', head.join('\n'))
        .replace('<!--page-html-->', body),
    )
    console.log(`Prerendered ${route} → ${output}`)
  }
  const xmlEscape = (value) =>
    value
      .replaceAll('&', '&amp;')
      .replaceAll('"', '&quot;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
  if (siteUrl) {
    await writeFile(
      'dist/sitemap.xml',
      `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${routes.map((route) => `<url><loc>${xmlEscape(new URL(route, siteUrl).href)}</loc></url>`).join('')}</urlset>`,
    )
  } else {
    console.log(
      'Set VITE_SITE_URL for production canonical URLs and sitemap.xml.',
    )
  }
  await writeFile(
    'dist/robots.txt',
    `User-agent: *\nAllow: /\n${siteUrl ? `Sitemap: ${new URL('/sitemap.xml', siteUrl).href}\n` : ''}`,
  )
} finally {
  await vite.close()
}
