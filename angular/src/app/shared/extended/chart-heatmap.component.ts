import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core'

export interface ChartHeatmapData {
  rows: string[]
  cols: string[]
  values: number[][]
}

/** Heatmap. CSS grid, cell intensity maps to --chart-1. Mirrors the React ChartHeatmap (hand-built). */
@Component({
  selector: 'ui-chart-heatmap',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block w-full text-xs text-muted-foreground', '[attr.data-slot]': '"chart-heatmap"' },
  template: `
    <div class="grid gap-1" role="img" aria-label="Heatmap" [style.grid-template-columns]="'auto repeat(' + data().cols.length + ', minmax(0, 1fr))'">
      <div></div>
      @for (c of data().cols; track c) {
        <div class="text-center">{{ c }}</div>
      }
      @for (r of data().rows; track r; let ri = $index) {
        <div class="flex items-center pr-2">{{ r }}</div>
        @for (c of data().cols; track c; let ci = $index) {
          <div
            class="flex aspect-[4/3] items-center justify-center rounded-sm text-[10px] text-foreground"
            [title]="r + ' ' + c + ': ' + cell(ri, ci)"
            [style.background]="bg(ri, ci)"
          >{{ cell(ri, ci) }}</div>
        }
      }
    </div>
  `,
})
export class ChartHeatmapComponent {
  readonly data = input<ChartHeatmapData>({
    rows: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    cols: ['9a', '11a', '1p', '3p', '5p', '7p'],
    values: [[2, 5, 8, 6, 3, 1], [3, 7, 9, 8, 4, 2], [1, 6, 10, 9, 5, 2], [4, 8, 7, 6, 6, 3], [2, 4, 5, 3, 2, 1]],
  })
  private readonly range = computed(() => {
    const all = this.data().values.flat()
    return { min: Math.min(...all), max: Math.max(...all) }
  })
  protected cell(r: number, c: number) {
    return this.data().values[r]?.[c] ?? 0
  }
  protected bg(r: number, c: number) {
    const { min, max } = this.range()
    const t = max === min ? 1 : (this.cell(r, c) - min) / (max - min)
    return `color-mix(in oklab, var(--chart-1) ${Math.round(12 + t * 88)}%, transparent)`
  }
}
