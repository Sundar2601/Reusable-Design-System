import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core'
import { ZardProgressComponent } from '@/shared/components/progress/progress.component'

export interface AiContextBreakdownItem {
  label: string
  tokens: number
  /** Tailwind background class for the legend dot. */
  color?: string
}

/** AI Context. Token / context-window usage meter with breakdown. Mirrors the React Context. */
@Component({
  selector: 'ui-ai-context',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ZardProgressComponent],
  host: { class: 'flex w-80 flex-col gap-3 rounded-lg bg-card p-4 text-card-foreground inset-ring-1 inset-ring-border', '[attr.data-slot]': '"ai-context"' },
  template: `
    <div class="flex items-center justify-between text-sm">
      <span class="font-medium">{{ model() || 'Context window' }}</span>
      <span class="tabular-nums" [class.text-destructive]="pct() >= 90">{{ pct() }}%</span>
    </div>
    <z-progress [value]="pct()" />
    <div class="flex justify-between text-xs text-muted-foreground tabular-nums">
      <span>{{ fmt(used()) }} used</span>
      <span>{{ fmt(max()) }} total</span>
    </div>
    @if (breakdown().length) {
      <ul class="flex flex-col gap-1.5 border-t border-border pt-3 text-xs">
        @for (b of breakdown(); track b.label) {
          <li class="flex items-center gap-2">
            <span class="size-2 rounded-full {{ b.color || 'bg-muted-foreground' }}"></span>
            <span class="flex-1 text-muted-foreground">{{ b.label }}</span>
            <span class="tabular-nums">{{ fmt(b.tokens) }}</span>
          </li>
        }
      </ul>
    }
  `,
})
export class AiContextComponent {
  readonly used = input(0)
  readonly max = input(200000)
  readonly model = input('')
  readonly breakdown = input<AiContextBreakdownItem[]>([])
  protected readonly pct = computed(() => Math.min(100, Math.round((this.used() / Math.max(this.max(), 1)) * 100)))
  protected fmt(n: number) {
    return n >= 1000 ? `${(n / 1000).toFixed(n >= 100000 ? 0 : 1)}K` : String(n)
  }
}
