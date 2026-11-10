import { ChangeDetectionStrategy, Component, input, output } from '@angular/core'
import { ZardButtonComponent } from '@/shared/components/button'

export type AiConfirmationState = 'requested' | 'accepted' | 'rejected'

/**
 * AI Confirmation. Hand-built to mirror the React Confirmation. Approval request for a tool call;
 * `state` switches between the request with actions and the accepted / rejected result.
 */
@Component({
  selector: 'ai-confirmation',
  imports: [ZardButtonComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex w-full flex-col gap-3 rounded-lg bg-card p-4 text-sm text-card-foreground inset-ring-1 inset-ring-border',
    role: 'alert',
    'data-slot': 'confirmation',
    '[attr.data-state]': 'state()',
  },
  template: `
    <div class="flex items-start gap-2">
      <svg class="mt-0.5 size-4 shrink-0 text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /><path d="M12 8v4" /><path d="M12 16h.01" /></svg>
      <div class="flex flex-col gap-1">
        <div data-slot="confirmation-title" class="font-medium">{{ heading() }}</div>
        @switch (state()) {
          @case ('requested') { @if (description()) { <div class="text-muted-foreground">{{ description() }}</div> } }
          @case ('accepted') { <div class="text-muted-foreground">You approved this request.</div> }
          @case ('rejected') { <div class="text-text-destructive">You rejected this request.</div> }
        }
      </div>
    </div>
    @if (state() === 'requested') {
      <div data-slot="confirmation-actions" class="flex justify-end gap-2">
        <button z-button zType="outline" zSize="sm" (click)="rejected.emit()">{{ rejectLabel() }}</button>
        <button z-button zSize="sm" (click)="approved.emit()">{{ approveLabel() }}</button>
      </div>
    }
  `,
})
export class AiConfirmationComponent {
  readonly state = input<AiConfirmationState>('requested')
  readonly heading = input.required<string>()
  readonly description = input('')
  readonly approveLabel = input('Approve')
  readonly rejectLabel = input('Reject')
  readonly approved = output<void>()
  readonly rejected = output<void>()
}
