import { ChangeDetectionStrategy, Component, input, model } from '@angular/core'

export type AiTraceStatus = 'pending' | 'running' | 'done' | 'error'

export interface AiTraceStep {
  title: string
  description?: string
  status?: AiTraceStatus
}

/** Trace (AI Elements). Collapsible list of assistant steps. Mirrors the React Trace / TraceStep. */
@Component({
  selector: 'ui-ai-trace',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'flex w-full flex-col gap-2 text-sm', 'data-slot': 'trace', '[attr.data-state]': 'open() ? "open" : "closed"' },
  template: `
    <button
      type="button"
      data-slot="trace-trigger"
      class="inline-flex w-fit cursor-pointer items-center gap-1 rounded-sm text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:ring-1 focus-visible:ring-ring"
      [attr.aria-expanded]="open()"
      (click)="open.set(!open())"
    >
      {{ title() }}
      <svg class="size-4 transition-transform" [class.rotate-180]="open()" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>
    </button>
    @if (open()) {
      <ol data-slot="trace-content" class="flex flex-col gap-3 ps-1">
        @for (step of steps(); track step.title) {
          <li data-slot="trace-step" [attr.data-status]="step.status ?? 'done'" class="flex gap-2">
            <span aria-hidden="true" class="mt-0.5 flex size-4 shrink-0 items-center justify-center">
              @switch (step.status ?? 'done') {
                @case ('running') {
                  <svg class="size-4 animate-spin text-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M21 12a9 9 0 1 1-6.219-8.56" /></svg>
                }
                @case ('pending') {
                  <svg class="size-4 text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10" /></svg>
                }
                @case ('error') {
                  <svg class="size-4 text-destructive" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10" /><path d="M12 8v4M12 16h.01" /></svg>
                }
                @default {
                  <svg class="size-4 text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                }
              }
            </span>
            <div class="flex min-w-0 flex-col gap-0.5">
              <span class="font-medium" [class.text-muted-foreground]="step.status === 'pending'" [class.text-destructive]="step.status === 'error'">{{ step.title }}</span>
              @if (step.description) {
                <span class="text-xs text-muted-foreground">{{ step.description }}</span>
              }
            </div>
          </li>
        }
      </ol>
    }
  `,
})
export class AiTraceComponent {
  readonly title = input('Trace')
  readonly steps = input<AiTraceStep[]>([])
  readonly open = model(false)
}
