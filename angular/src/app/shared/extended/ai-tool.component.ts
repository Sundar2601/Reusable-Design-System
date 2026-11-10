import { ChangeDetectionStrategy, Component, computed, input, model } from '@angular/core'
import { ZardBadgeComponent } from '@/shared/components/badge'
import { ZardSpinnerComponent } from '@/shared/components/spinner'

export type AiToolState = 'input-streaming' | 'input-available' | 'output-available' | 'output-error'

/**
 * AI Tool. Hand-built to mirror the React Tool. Collapsible tool-call card: name, status badge,
 * parameters and result / error.
 */
@Component({
  selector: 'ai-tool',
  imports: [ZardBadgeComponent, ZardSpinnerComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block w-full rounded-lg bg-card text-card-foreground inset-ring-1 inset-ring-border', 'data-slot': 'tool' },
  template: `
    <button
      type="button"
      data-slot="tool-header"
      class="flex w-full cursor-pointer items-center justify-between gap-4 rounded-lg p-3 outline-none focus-visible:inset-ring-1 focus-visible:inset-ring-ring"
      [attr.aria-expanded]="open()"
      (click)="open.set(!open())"
    >
      <span class="flex items-center gap-2 text-sm font-medium">
        <svg class="size-4 text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>
        {{ name() }}
        <z-badge [zType]="badgeType()">
          @if (state() === 'input-available') { <z-spinner class="size-3" /> }
          {{ label() }}
        </z-badge>
      </span>
      <svg class="size-4 transition-transform" [class.rotate-180]="open()" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>
    </button>
    @if (open()) {
      <div data-slot="tool-content" class="flex flex-col gap-4 border-t border-border p-3">
        <div class="flex flex-col gap-2">
          <h4 class="text-xs font-medium tracking-wide text-muted-foreground uppercase">Parameters</h4>
          <pre class="overflow-x-auto rounded-md bg-muted p-3 font-mono text-xs">{{ inputText() }}</pre>
        </div>
        @if (outputText() || errorText()) {
          <div class="flex flex-col gap-2">
            <h4 class="text-xs font-medium tracking-wide text-muted-foreground uppercase">{{ errorText() ? 'Error' : 'Result' }}</h4>
            <pre class="overflow-x-auto rounded-md p-3 font-mono text-xs" [class]="errorText() ? 'bg-destructive-subtle text-text-destructive' : 'bg-muted'">{{ errorText() || outputText() }}</pre>
          </div>
        }
      </div>
    }
  `,
})
export class AiToolComponent {
  readonly name = input.required<string>()
  readonly state = input<AiToolState>('input-streaming')
  /** Tool input; shown as JSON. */
  readonly toolInput = input<unknown>({})
  readonly output = input<unknown>(undefined)
  readonly errorText = input('')
  readonly open = model(false)

  protected readonly label = computed(
    () => ({ 'input-streaming': 'Pending', 'input-available': 'Running', 'output-available': 'Completed', 'output-error': 'Error' })[this.state()],
  )
  protected readonly badgeType = computed(() => {
    const s = this.state()
    return s === 'output-error' ? 'destructive' : s === 'output-available' ? 'outline' : 'secondary'
  })
  protected readonly inputText = computed(() => JSON.stringify(this.toolInput(), null, 2))
  protected readonly outputText = computed(() => {
    const o = this.output()
    return o === undefined ? '' : typeof o === 'string' ? o : JSON.stringify(o, null, 2)
  })
}
