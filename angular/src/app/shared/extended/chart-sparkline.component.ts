import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core'

/** Sparkline. Tiny trend line with no axes. Mirrors the React ChartSparkline (hand-built SVG). */
@Component({
  selector: 'ui-chart-sparkline',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block w-full', '[attr.data-slot]': '"chart-sparkline"' },
  template: `
    <svg viewBox="0 0 120 40" preserveAspectRatio="none" role="img" aria-label="Trend" class="h-12 w-full overflow-visible">
      <path [attr.d]="path()" fill="none" stroke="var(--chart-1)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke" />
    </svg>
  `,
})
export class ChartSparklineComponent {
  readonly data = input<number[]>([12, 18, 14, 22, 19, 28, 24, 32, 29, 38, 35, 44])
  protected readonly path = computed(() => {
    const d = this.data()
    const min = Math.min(...d)
    const max = Math.max(...d)
    return d
      .map((v, i) => {
        const x = d.length > 1 ? (i / (d.length - 1)) * 120 : 0
        const y = 36 - (max === min ? 0.5 : (v - min) / (max - min)) * 32
        return `${i ? 'L' : 'M'}${x.toFixed(1)} ${y.toFixed(1)}`
      })
      .join(' ')
  })
}
