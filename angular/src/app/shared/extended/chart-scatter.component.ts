import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core'

export interface ChartScatterPoint {
  x: number
  y: number
  z?: number
}

/** Scatter chart. Two numeric axes, point size encodes `z`. Mirrors the React ChartScatter (hand-built SVG). */
@Component({
  selector: 'ui-chart-scatter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block w-full text-muted-foreground', '[attr.data-slot]': '"chart-scatter"' },
  template: `
    <svg viewBox="0 0 400 240" role="img" aria-label="Scatter chart" class="h-64 w-full">
      @for (t of yTicks(); track t.v) {
        <line x1="36" [attr.x2]="392" [attr.y1]="t.p" [attr.y2]="t.p" stroke="var(--border)" />
        <text x="30" [attr.y]="t.p + 4" text-anchor="end" font-size="11" fill="currentColor">{{ t.v }}</text>
      }
      @for (t of xTicks(); track t.v) {
        <line [attr.x1]="t.p" [attr.x2]="t.p" y1="8" y2="212" stroke="var(--border)" />
        <text [attr.x]="t.p" y="228" text-anchor="middle" font-size="11" fill="currentColor">{{ t.v }}</text>
      }
      @for (p of points(); track $index) {
        <circle [attr.cx]="p.cx" [attr.cy]="p.cy" [attr.r]="p.r" fill="var(--chart-1)" fill-opacity="0.7">
          <title>x {{ p.x }}, y {{ p.y }}</title>
        </circle>
      }
    </svg>
  `,
})
export class ChartScatterComponent {
  readonly data = input<ChartScatterPoint[]>([
    { x: 100, y: 200, z: 200 }, { x: 120, y: 100, z: 260 }, { x: 170, y: 300, z: 400 }, { x: 140, y: 250, z: 280 },
    { x: 150, y: 400, z: 500 }, { x: 110, y: 280, z: 200 }, { x: 190, y: 180, z: 350 }, { x: 90, y: 320, z: 240 },
  ])
  private readonly b = computed(() => {
    const d = this.data()
    const xs = d.map((p) => p.x)
    const ys = d.map((p) => p.y)
    return { x0: Math.min(...xs), x1: Math.max(...xs), y0: Math.min(...ys), y1: Math.max(...ys) }
  })
  private px(v: number) {
    const { x0, x1 } = this.b()
    return 48 + ((v - x0) / (x1 - x0 || 1)) * 332
  }
  private py(v: number) {
    const { y0, y1 } = this.b()
    return 204 - ((v - y0) / (y1 - y0 || 1)) * 188
  }
  protected readonly points = computed(() => {
    const zs = this.data().map((p) => p.z ?? 1)
    const zmax = Math.max(...zs)
    return this.data().map((p) => ({ ...p, cx: this.px(p.x), cy: this.py(p.y), r: 4 + ((p.z ?? 1) / zmax) * 8 }))
  })
  protected readonly xTicks = computed(() => {
    const { x0, x1 } = this.b()
    return [0, 1, 2, 3].map((i) => { const v = Math.round(x0 + ((x1 - x0) * i) / 3); return { v, p: this.px(v) } })
  })
  protected readonly yTicks = computed(() => {
    const { y0, y1 } = this.b()
    return [0, 1, 2, 3].map((i) => { const v = Math.round(y0 + ((y1 - y0) * i) / 3); return { v, p: this.py(v) } })
  })
}
