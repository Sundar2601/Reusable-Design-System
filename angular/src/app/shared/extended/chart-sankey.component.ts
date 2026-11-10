import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core'

export interface ChartSankeyData {
  nodes: { name: string }[]
  links: { source: number; target: number; value: number }[]
}

/** Sankey diagram. Columns by depth, link width encodes value. Mirrors the React ChartSankey (hand-built SVG). */
@Component({
  selector: 'ui-chart-sankey',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block w-full', '[attr.data-slot]': '"chart-sankey"' },
  template: `
    <svg viewBox="0 0 400 240" role="img" aria-label="Sankey diagram" class="h-64 w-full">
      @for (l of layout().links; track $index) {
        <path [attr.d]="l.d" fill="none" stroke="var(--chart-2)" stroke-opacity="0.3" [attr.stroke-width]="l.w">
          <title>{{ l.label }}</title>
        </path>
      }
      @for (n of layout().nodes; track n.name) {
        <rect [attr.x]="n.x" [attr.y]="n.y" width="10" [attr.height]="n.h" rx="2" [attr.fill]="n.fill" />
        <text [attr.x]="n.left ? n.x + 16 : n.x - 6" [attr.y]="n.y + n.h / 2" [attr.text-anchor]="n.left ? 'start' : 'end'" dominant-baseline="middle" font-size="12" fill="var(--foreground)">{{ n.name }}</text>
      }
    </svg>
  `,
})
export class ChartSankeyComponent {
  readonly data = input<ChartSankeyData>({
    nodes: [{ name: 'Organic' }, { name: 'Paid' }, { name: 'Referral' }, { name: 'Landing' }, { name: 'Sign up' }, { name: 'Bounce' }],
    links: [
      { source: 0, target: 3, value: 40 }, { source: 1, target: 3, value: 30 }, { source: 2, target: 3, value: 15 },
      { source: 3, target: 4, value: 50 }, { source: 3, target: 5, value: 35 },
    ],
  })
  protected readonly layout = computed(() => {
    const { nodes, links } = this.data()
    const depth = nodes.map(() => 0)
    for (let pass = 0; pass < nodes.length; pass++) for (const l of links) depth[l.target] = Math.max(depth[l.target], depth[l.source] + 1)
    const cols = Math.max(...depth) + 1
    const throughput = nodes.map((_, i) =>
      Math.max(links.filter((l) => l.source === i).reduce((a, l) => a + l.value, 0), links.filter((l) => l.target === i).reduce((a, l) => a + l.value, 0)),
    )
    const colTotal = Array.from({ length: cols }, (_, c) => nodes.reduce((a, _n, i) => a + (depth[i] === c ? throughput[i] : 0), 0))
    const scale = Math.min(...colTotal.map((t, c) => (224 - 12 * (nodes.filter((_n, i) => depth[i] === c).length - 1)) / (t || 1)))
    const cursor = Array(cols).fill(8)
    const pos = nodes.map((n, i) => {
      const x = cols > 1 ? 8 + (depth[i] / (cols - 1)) * 300 : 8
      const h = throughput[i] * scale
      const y = cursor[depth[i]]
      cursor[depth[i]] += h + 12
      return { ...n, x, y, h, fill: `var(--chart-${(i % 5) + 1})`, left: depth[i] < cols / 2 }
    })
    const outY = pos.map((p) => p.y)
    const inY = pos.map((p) => p.y)
    const paths = links.map((l) => {
      const w = l.value * scale
      const s = pos[l.source]
      const t = pos[l.target]
      const y0 = outY[l.source] + w / 2
      const y1 = inY[l.target] + w / 2
      outY[l.source] += w
      inY[l.target] += w
      const x0 = s.x + 10
      const x1 = t.x
      const mx = (x0 + x1) / 2
      return { d: `M${x0} ${y0} C${mx} ${y0} ${mx} ${y1} ${x1} ${y1}`, w, label: `${s.name} to ${t.name}: ${l.value}` }
    })
    return { nodes: pos, links: paths }
  })
}
