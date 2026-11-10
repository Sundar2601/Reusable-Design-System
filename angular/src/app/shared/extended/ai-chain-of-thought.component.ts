import { ChangeDetectionStrategy, Component, input, model } from '@angular/core'

export type AiCotStatus = 'complete' | 'active' | 'pending'
export interface AiCotStep {
  label: string
  description?: string
  status: AiCotStatus
  /** Badges shown under the step, for example search results. */
  results?: string[]
}

/**
 * AI Chain of Thought. Hand-built to mirror the React ChainOfThought. Collapsible list of reasoning steps
 * with status icons, a connector line and optional result badges.
 */
@Component({
  selector: 'ai-chain-of-thought',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'flex w-full flex-col gap-3', 'data-slot': 'chain-of-thought' },
  template: `
    <button
      type="button"
      class="flex w-fit cursor-pointer items-center gap-2 rounded-sm text-sm text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:inset-ring-1 focus-visible:inset-ring-ring"
      [attr.aria-expanded]="open()"
      (click)="open.set(!open())"
    >
      <span class="font-medium">{{ header() }}</span>
      <svg class="size-4 transition-transform" [class.rotate-180]="open()" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>
    </button>
    @if (open()) {
      <div class="flex flex-col">
        @for (step of steps(); track step.label; let last = $last) {
          <div
            data-slot="chain-of-thought-step"
            class="flex gap-3 text-sm"
            [class]="step.status === 'pending' ? 'text-muted-foreground/60' : 'text-foreground'"
            [attr.data-status]="step.status"
          >
            <div class="flex flex-col items-center">
              <span
                class="flex size-5 shrink-0 items-center justify-center rounded-full inset-ring-1 inset-ring-border"
                [class]="step.status === 'complete' ? 'bg-primary text-primary-foreground inset-ring-primary' : 'bg-background text-muted-foreground'"
              >
                <svg class="size-3" [class.animate-spin]="step.status === 'active'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  @switch (step.status) {
                    @case ('complete') { <path d="M20 6 9 17l-5-5" /> }
                    @case ('active') { <path d="M21 12a9 9 0 1 1-6.219-8.56" /> }
                    @default { <circle cx="12" cy="12" r="10" /> }
                  }
                </svg>
              </span>
              @if (!last) { <span class="my-1 w-px flex-1 bg-border"></span> }
            </div>
            <div class="flex min-w-0 flex-1 flex-col gap-1.5" [class.pb-4]="!last">
              <div class="font-medium leading-5">{{ step.label }}</div>
              @if (step.description) { <div class="text-muted-foreground">{{ step.description }}</div> }
              @if (step.results?.length) {
                <div class="flex flex-wrap gap-1.5">
                  @for (r of step.results; track r) {
                    <span class="inline-flex h-5 items-center rounded-full bg-secondary px-2 text-xs text-secondary-foreground">{{ r }}</span>
                  }
                </div>
              }
            </div>
          </div>
        }
      </div>
    }
  `,
})
export class AiChainOfThoughtComponent {
  readonly header = input('Chain of Thought')
  readonly steps = input<AiCotStep[]>([])
  readonly open = model(true)
}
