import * as React from 'react'
import themeCss from '../../theme/theme.css?raw'
import { Avatar, AvatarFallback, AvatarBadge } from '@/components/Avatar'
import { Skeleton } from '@/components/Skeleton'

/* ---------- theme.css parsing ---------- */

function parseBlock(selector: string): Record<string, string> {
  const start = themeCss.indexOf(selector + ' {')
  if (start < 0) return {}
  const end = themeCss.indexOf('\n}', start)
  const body = themeCss.slice(start, end)
  const out: Record<string, string> = {}
  for (const m of body.matchAll(/(--[\w-]+):\s*([^;]+);/g)) out[m[1]] = m[2].trim()
  return out
}

const LIGHT = parseBlock(':root')
const DARK = parseBlock('.dark')

export type ColorToken = { name: string; light: string; dark: string }

export function colorTokens(prefixes?: string[]): ColorToken[] {
  return Object.keys(LIGHT)
    .filter((k) => !prefixes || prefixes.some((p) => k === p || k.startsWith(p)))
    .map((k) => ({ name: k, light: LIGHT[k], dark: DARK[k] ?? LIGHT[k] }))
}

/* ---------- Layout ---------- */

export function Section({ title, description, children }: { title: string; description?: string; children: React.ReactNode }) {
  return (
    <section className="not-prose my-8 text-foreground">
      <h3 className="text-lg font-semibold">{title}</h3>
      {description && <p className="mt-1 mb-4 text-sm text-muted-foreground">{description}</p>}
      {children}
    </section>
  )
}

export function Page({ children }: { children: React.ReactNode }) {
  return <div className="bg-background p-4 text-foreground">{children}</div>
}

export function Mono({ children }: { children: React.ReactNode }) {
  return <code className="rounded-xs bg-muted px-1 py-0.5 font-mono text-xs text-foreground">{children}</code>
}

export function DocTable({ head, rows }: { head: string[]; rows: React.ReactNode[][] }) {
  return (
    <div className="overflow-hidden rounded-lg border border-border">
      <table className="w-full border-collapse text-left text-sm">
        <thead className="bg-muted text-muted-foreground">
          <tr>
            {head.map((h) => (
              <th key={h} className="px-3 py-2 font-medium">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-t border-border">
              {r.map((c, j) => (
                <td key={j} className="px-3 py-2 align-top">{c}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

/* ---------- Colors ---------- */

export function Swatch({ token }: { token: ColorToken }) {
  return (
    <div className="overflow-hidden rounded-lg border border-border bg-card text-card-foreground">
      <div className="h-16 border-b border-border" style={{ background: `var(${token.name})` }} />
      <div className="space-y-1 p-3">
        <div className="text-sm font-medium">{token.name.slice(2)}</div>
        <div className="font-mono text-xs text-muted-foreground">var({token.name})</div>
        <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
          <span className="inline-block size-3 rounded-xs border border-border" style={{ background: token.light }} />
          Light {token.light}
        </div>
        <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
          <span className="inline-block size-3 rounded-xs border border-border" style={{ background: token.dark }} />
          Dark {token.dark}
        </div>
      </div>
    </div>
  )
}

export function SwatchGrid({ prefixes }: { prefixes?: string[] }) {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
      {colorTokens(prefixes).map((t) => (
        <Swatch key={t.name} token={t} />
      ))}
    </div>
  )
}

/* ---------- Typography ---------- */

export type TypeStyle = { name: string; size: number; line: number; weight: number; sample?: string }

export function TypeRow({ s, mono }: { s: TypeStyle; mono?: boolean }) {
  return (
    <div className="flex items-baseline gap-6 border-b border-border py-3">
      <div className="w-40 shrink-0 text-xs text-muted-foreground">
        <div className="font-medium text-foreground">{s.name}</div>
        <div className="font-mono">{s.size}/{s.line} / {s.weight}</div>
      </div>
      <div
        className={mono ? 'font-mono' : 'font-sans'}
        style={{ fontSize: s.size, lineHeight: `${s.line}px`, fontWeight: s.weight }}
      >
        {s.sample ?? 'The quick brown fox jumps over the lazy dog'}
      </div>
    </div>
  )
}

/* ---------- Spacing / radius / elevation ---------- */

export function SpaceRow({ px }: { px: number }) {
  return (
    <div className="flex items-center gap-4 py-1">
      <div className="w-24 shrink-0 font-mono text-xs text-muted-foreground">{px}px / {px / 4}</div>
      <div className="h-4 rounded-xs bg-primary" style={{ width: px }} />
    </div>
  )
}

export function RadiusSample({ name, value }: { name: string; value: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="size-20 border-2 border-primary bg-muted" style={{ borderRadius: value }} />
      <div className="text-sm font-medium">{name}</div>
      <div className="font-mono text-xs text-muted-foreground">{value}</div>
    </div>
  )
}

export function ShadowSample({ name, value }: { name: string; value: string }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="size-24 rounded-lg border border-border bg-card" style={{ boxShadow: value }} />
      <div className="text-sm font-medium">{name}</div>
      <div className="max-w-44 text-center font-mono text-[10px] text-muted-foreground">{value}</div>
    </div>
  )
}

/* ---------- Motion ---------- */

export function MotionDemo({ duration, easing }: { duration: number; easing: string }) {
  const [on, setOn] = React.useState(false)
  return (
    <button
      type="button"
      onClick={() => setOn((v) => !v)}
      className="relative h-6 w-40 cursor-pointer rounded-full bg-muted"
      aria-label={`Play ${duration}ms demo`}
    >
      <span
        className="absolute top-1 left-1 size-4 rounded-full bg-primary"
        style={{
          transform: on ? 'translateX(136px)' : 'translateX(0)',
          transition: `transform ${duration}ms ${easing}`,
        }}
      />
    </button>
  )
}

/* ---------- Grids ---------- */

export type GridSpec = { name: string; w: number; h: number; cols: number; margin: number; gutter: number }

export function GridOverlay({ g, scale }: { g: GridSpec; scale: number }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-sm font-medium">{g.name}</div>
      <div className="font-mono text-xs text-muted-foreground">
        {g.w}x{g.h} / {g.cols} columns / margin {g.margin} / gutter {g.gutter}
      </div>
      <div
        className="relative overflow-hidden rounded-xs border border-border bg-card"
        style={{ width: g.w * scale, height: g.h * scale }}
      >
        <div
          className="absolute inset-y-0 flex"
          style={{ left: g.margin * scale, right: g.margin * scale, columnGap: g.gutter * scale }}
        >
          {Array.from({ length: g.cols }).map((_, i) => (
            <div key={i} className="flex-1 bg-destructive-subtle" />
          ))}
        </div>
      </div>
    </div>
  )
}

/* ---------- Imagery ---------- */

export function RatioBox({ label, w, h }: { label: string; w: number; h: number }) {
  return (
    <div className="flex flex-col gap-2">
      <div
        className="flex items-center justify-center rounded-lg border border-border bg-muted text-sm text-muted-foreground"
        style={{ width: 120, aspectRatio: `${w} / ${h}` }}
      >
        {label}
      </div>
      <div className="font-mono text-xs text-muted-foreground">{w}:{h}</div>
    </div>
  )
}

export function ImageStates() {
  const Frame = ({ children, label }: { children: React.ReactNode; label: string }) => (
    <div className="flex flex-col gap-2">
      <div className="h-24 w-40 overflow-hidden rounded-lg border border-border">{children}</div>
      <div className="text-sm">{label}</div>
    </div>
  )
  return (
    <div className="flex flex-wrap gap-6">
      <Frame label="Loading"><Skeleton className="size-full rounded-none" /></Frame>
      <Frame label="Placeholder">
        <div className="flex size-full items-center justify-center bg-muted text-muted-foreground">Image</div>
      </Frame>
      <Frame label="Error">
        <div className="flex size-full items-center justify-center bg-destructive-subtle text-xs text-text-destructive">Failed to load</div>
      </Frame>
      <Frame label="Loaded">
        <div className="size-full" style={{ background: 'linear-gradient(135deg, var(--chart-1), var(--chart-5))' }} />
      </Frame>
    </div>
  )
}

export function AvatarSizes() {
  return (
    <div className="flex items-end gap-8">
      {([['sm', 24], ['default', 32], ['lg', 40]] as const).map(([size, px]) => (
        <div key={size} className="flex flex-col items-center gap-2">
          <Avatar size={size}>
            <AvatarFallback>AB</AvatarFallback>
            <AvatarBadge />
          </Avatar>
          <div className="text-sm">{size}</div>
          <div className="font-mono text-xs text-muted-foreground">{px}px</div>
        </div>
      ))}
    </div>
  )
}
