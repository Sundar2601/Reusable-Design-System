#!/usr/bin/env node
/**
 * Token drift check: compares tokens/figma-tokens.json (exported from Figma) with src/theme/theme.css.
 * Run: npm run tokens:check. Exits 1 if any token differs or is missing.
 *
 * Checked: Color (Light and Dark), Radius, Sizing, Typeset.
 * Not checked: Spacing, Layout, Motion, Mobile (they use Tailwind defaults or are not CSS variables).
 */
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const tokens = JSON.parse(readFileSync(join(root, 'tokens/figma-tokens.json'), 'utf8'))
const css = readFileSync(join(root, 'src/theme/theme.css'), 'utf8')

/** Variables declared in a block that starts with `selector {`. */
function block(selector) {
  const start = css.indexOf(selector + ' {')
  if (start === -1) throw new Error(`theme.css has no "${selector}" block`)
  const end = css.indexOf('\n}', start)
  const vars = {}
  for (const m of css.slice(start, end).matchAll(/--([\w-]+):\s*([^;]+);/g)) vars[m[1]] = m[2].trim()
  return vars
}
const light = block(':root')
const dark = { ...light, ...block('.dark') }
const themeInline = block('@theme inline')

/** Resolve `var(--x)` one level, then normalise a color to "r,g,b,a". */
function resolve(value, scope) {
  const ref = /^var\(--([\w-]+)\)$/.exec(value)
  return ref ? resolve(scope[ref[1]] ?? themeInline[ref[1]] ?? value, scope) : value
}
function rgba(value) {
  value = value.trim().toLowerCase()
  let m = /^#([0-9a-f]{6})([0-9a-f]{2})?$/.exec(value)
  if (m) {
    const n = parseInt(m[1], 16)
    const a = m[2] ? parseInt(m[2], 16) / 255 : 1
    return [n >> 16, (n >> 8) & 255, n & 255, +a.toFixed(2)].join(',')
  }
  m = /^rgba?\(\s*(\d+)[\s,]+(\d+)[\s,]+(\d+)(?:\s*[/,]\s*([\d.]+))?\s*\)$/.exec(value)
  if (m) return [m[1], m[2], m[3], +(m[4] === undefined ? 1 : +m[4]).toFixed(2)].join(',')
  return value
}
const px = (v) => (typeof v === 'string' ? parseFloat(v) : v)

const problems = []
let checked = 0
const expect = (what, want, got) => {
  checked++
  if (got === undefined) problems.push(`MISSING  ${what}: Figma has ${want}, theme.css has nothing`)
  else if (String(want) !== String(got)) problems.push(`DIFFERS  ${what}: Figma ${want}, theme.css ${got}`)
}

for (const [name, modes] of Object.entries(tokens.Color)) {
  for (const [mode, scope] of [['light', light], ['dark', dark]]) {
    const raw = scope[name]
    expect(`color ${name} (${mode})`, rgba(modes[mode]), raw === undefined ? undefined : rgba(resolve(raw, scope)))
  }
}
for (const [name, v] of Object.entries(tokens.Radius)) {
  const key = 'radius-' + name.split('/')[1]
  expect(`radius ${name}`, px(v), themeInline[key] === undefined ? undefined : px(themeInline[key]))
}
const sizing = (name) => 'size-' + name.replace('/', '-')
for (const [name, v] of Object.entries(tokens.Sizing)) {
  if (name.startsWith('opacity/')) expect(`sizing ${name}`, v / 100, light['opacity-' + name.split('/')[1]] === undefined ? undefined : +light['opacity-' + name.split('/')[1]])
  else expect(`sizing ${name}`, v, light[sizing(name)] === undefined ? undefined : px(light[sizing(name)]))
}
for (const [name, v] of Object.entries(tokens.Typeset)) {
  const [, preset, prop] = name.split('/')
  const key = `typeset-${preset}-${prop}`
  expect(`typeset ${name}`, v, light[key] === undefined ? undefined : px(light[key]))
}

if (problems.length) {
  console.error(`Token drift: ${problems.length} problem(s) in ${checked} checks\n` + problems.map((p) => '  ' + p).join('\n'))
  process.exit(1)
}
console.log(`Tokens match Figma: ${checked} checks passed.`)
