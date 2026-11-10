import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core'

export interface ChartFunnelStage {
  name: string
  value: number
}

/** Funnel chart. Centered trapezoid stages. Mirrors the React ChartFunnel (hand-built SVG). */
@Component({
  selector: 'ui-chart-funnel',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block w-full', '[attr.data-slot]': '"chart-funnel"' },
  template: `
    <svg viewBox="0 0 400 240" role="img" aria-label="Funnel chart" class="h-64 w-full">
      @for (s of stages(); track s.name) {
        <polygon [attr.points]="s.points" [attr.fill]="s.fill" fill-opacity="0.9">
          <title>{{ s.name }}: {{ s.value }}</title>
        </polygon>
        <text x="200" [attr.y]="s.ty" text-anchor="middle" dominant-baseline="middle" font-size="12" fill="var(--card)">{{ s.name }}</text>
      }
    </svg>
  `,
})
export class ChartFunnelComponent {
  readonly data = input<ChartFunnelStage[]>([
    { name: 'Visitors', value: 5000 }, { name: 'Sign ups', value: 3200 }, { name: 'Trials', value: 1800 },
    { name: 'Paid', value: 900 }, { name: 'Retained', value: 450 },
  ])
  protected readonly stages = computed(() => {
    const d = this.data()
    const max = Math.max(...d.map((s) => s.value)) || 1
    const h = 240 / d.length
    return d.map((s, i) => {
      const next = d[i + 1]?.value ?? s.value * 0.7
      const w1 = (s.value / max) * 380
      const w2 = (next / max) * 380
      const y1 = i * h + 1
      const y2 = (i + 1) * h - 1
      return {
        ...s,
        fill: `var(--chart-${(i % 5) + 1})`,
        ty: y1 + h / 2,
        points: `${200 - w1 / 2},${y1} ${200 + w1 / 2},${y1} ${200 + w2 / 2},${y2} ${200 - w2 / 2},${y2}`,
      }
    })
  })
}
