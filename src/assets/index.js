// Resolves an asset key to a URL.
// A real downloaded file (src/assets/images|logo/<key>.<ext>) wins; otherwise the SVG placeholder is used.
const real = import.meta.glob('./{images,logo}/*.*', { eager: true, query: '?url', import: 'default' })
const fallback = import.meta.glob('./placeholders/*.svg', { eager: true, query: '?url', import: 'default' })

const byKey = {}
for (const [path, url] of Object.entries(real)) {
  byKey[path.split('/').pop().replace(/\.[^.]+$/, '')] = url
}

export const asset = (key) => byKey[key] ?? fallback[`./placeholders/${key}.svg`]

// Icons: each icon is its own .svg file in src/assets/icons/
const iconFiles = import.meta.glob('./icons/*.svg', { eager: true, query: '?url', import: 'default' })
export const icons = Object.fromEntries(
  Object.entries(iconFiles).map(([p, url]) => [p.split('/').pop().replace('.svg', ''), url])
)
