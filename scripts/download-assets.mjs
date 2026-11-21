// Downloads the original images from the live website into src/assets/<folder>/
// Usage: npm run assets
import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { manifest } from '../src/assets/manifest.js'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../src/assets')
let ok = 0, failed = 0

for (const [key, { remote, folder }] of Object.entries(manifest)) {
  const ext = path.extname(new URL(remote).pathname) || '.jpg'
  const dir = path.join(root, folder)
  await mkdir(dir, { recursive: true })
  try {
    const res = await fetch(remote, { headers: { 'user-agent': 'Mozilla/5.0' } })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    await writeFile(path.join(dir, key + ext), Buffer.from(await res.arrayBuffer()))
    console.log('OK  ', `${folder}/${key}${ext}`)
    ok++
  } catch (e) {
    console.warn('FAIL', key, '-', e.message, '(placeholder will be used)')
    failed++
  }
}
console.log(`\nDone: ${ok} downloaded, ${failed} failed.`)
