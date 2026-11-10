import { ChangeDetectionStrategy, Component, input, model } from '@angular/core'
import { ZardSpinnerComponent } from '@/shared/components/spinner'

/**
 * AI Reasoning. Hand-built to mirror the React Reasoning. Collapsible block showing model thinking:
 * "Thinking..." with a spinner while streaming, "Thought for N seconds" afterwards. Project the text as content.
 */
@Component({
  selector: 'ai-reasoning',
  imports: [ZardSpinnerComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'flex w-full flex-col gap-2', 'data-slot': 'reasoning' },
  template: `
    <button
      type="button"
      class="flex w-fit cursor-pointer items-center gap-2 rounded-sm text-sm text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:inset-ring-1 focus-visible:inset-ring-ring"
      [attr.aria-expanded]="open()"
      (click)="open.set(!open())"
    >
      <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" /><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" /><path d="M12 5v13" /></svg>
      @if (isStreaming()) {
        <span class="flex items-center gap-2">Thinking... <z-spinner class="size-3" /></span>
      } @else {
        <span>{{ duration() === undefined ? 'Thought for a few seconds' : 'Thought for ' + duration() + ' seconds' }}</span>
      }
      <svg class="size-4 transition-transform" [class.rotate-180]="open()" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>
    </button>
    @if (open()) {
      <div data-slot="reasoning-content" class="border-l-2 border-border pl-3 text-sm leading-relaxed text-muted-foreground">
        <ng-content />
      </div>
    }
  `,
})
export class AiReasoningComponent {
  readonly isStreaming = input(false)
  /** Seconds the model thought for. */
  readonly duration = input<number | undefined>(undefined)
  readonly open = model(false)
}
