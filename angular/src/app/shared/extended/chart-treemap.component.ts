import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core'

export interface ChartTreemapNode {
  name: string
  size?: number
  children?: ChartTreemapNode[]
}

/** Treemap. Groups split vertically, leaves split horizontally. Mirrors the React ChartTreemap (hand-built SVG). */
@Component({
  selector: 'ui-chart-treemap',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block w-full', '[attr.data-slot]': '"chart-treemap"' },
  template: `
    <svg viewBox="0 0 400 240" role="img" aria-label="Treemap" class="h-64 w-full">
      @for (c of cells(); track c.name) {
        <rect [attr.x]="c.x" [attr.y]="c.y" [attr.width]="c.w" [attr.height]="c.h" rx="4" [attr.fill]="c.fill" fill-opacity="0.85" stroke="var(--card)" stroke-width="2">
          <title>{{ c.name }}: {{ c.size }}</title>
        </rect>
        @if (c.w > 44 && c.h > 20) {
          <text [attr.x]="c.x + 8" [attr.y]="c.y + 16" font-size="12" fill="var(--card)">{{ c.name }}</text>
        }
      }
    </svg>
  `,
})
export class ChartTreemapComponent {
  readonly data = input<ChartTreemapNode[]>([
    { name: 'Frontend', children: [{ name: 'React', size: 420 }, { name: 'Angular', size: 260 }, { name: 'Vue', size: 140 }] },
    { name: 'Backend', children: [{ name: 'Node', size: 340 }, { name: 'Go', size: 180 }, { name: 'Java', size: 220 }] },
    { name: 'Data', children: [{ name: 'SQL', size: 300 }, { name: 'Python', size: 200 }] },
  ])
  protected readonly cells = computed(() => {
    const sum = (n: ChartTreemapNode): number => n.size ?? (n.children ?? []).reduce((a, c) => a + sum(c), 0)
    const groups = this.data()
    const total = groups.reduce((a, g) => a + sum(g), 0) || 1
    const out: { name: string; size: number; x: number; y: number; w: number; h: number; fill: string }[] = []
    let x = 0
    groups.forEach((g, gi) => {
      const gw = (sum(g) / total) * 400
      let y = 0
      const gs = sum(g) || 1
      for (const leaf of g.children ?? [{ ...g }]) {
        const lh = (sum(leaf) / gs) * 240
        out.push({ name: leaf.name, size: sum(leaf), x, y, w: gw, h: lh, fill: `var(--chart-${(gi % 5) + 1})` })
        y += lh
      }
      x += gw
    })
    return out
  })
}
