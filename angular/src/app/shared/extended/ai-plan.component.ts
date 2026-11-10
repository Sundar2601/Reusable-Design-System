import { ChangeDetectionStrategy, Component, input, model } from '@angular/core'
import { ZardButtonComponent } from '@/shared/components/button'
import { ZardSpinnerComponent } from '@/shared/components/spinner'

/**
 * AI Plan. Hand-built to mirror the React Plan. Card with title, description and a collapsible body.
 * Project the body as content and footer actions with the `footer` attribute.
 */
@Component({
  selector: 'ai-plan',
  imports: [ZardButtonComponent, ZardSpinnerComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block w-full rounded-xl bg-card text-card-foreground shadow-sm inset-ring-1 inset-ring-border', 'data-slot': 'plan' },
  template: `
    <div data-slot="plan-header" class="flex items-start justify-between gap-4 p-4">
      <div class="flex min-w-0 flex-col gap-1">
        <h3 class="flex items-center gap-2 text-base font-semibold">
          {{ heading() }}
          @if (isStreaming()) { <z-spinner class="size-3.5 text-muted-foreground" /> }
        </h3>
        @if (description()) { <p class="text-sm text-muted-foreground">{{ description() }}</p> }
      </div>
      <button z-button zType="ghost" zSize="sm" aria-label="Toggle plan" [attr.aria-expanded]="open()" (click)="open.set(!open())">
        <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m7 15 5 5 5-5" /><path d="m7 9 5-5 5 5" /></svg>
      </button>
    </div>
    @if (open()) {
      <div data-slot="plan-content" class="border-t border-border p-4 text-sm"><ng-content /></div>
      <div data-slot="plan-footer" class="flex items-center justify-end gap-2 border-t border-border p-3 empty:hidden"><ng-content select="[footer]" /></div>
    }
  `,
})
export class AiPlanComponent {
  readonly heading = input.required<string>()
  readonly description = input('')
  readonly isStreaming = input(false)
  readonly open = model(true)
}
