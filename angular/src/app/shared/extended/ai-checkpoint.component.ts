import { ChangeDetectionStrategy, Component, input, output } from '@angular/core'
import { ZardButtonComponent } from '@/shared/components/button/button.component'

/** AI Checkpoint. Conversation divider with a restore action. Mirrors the React Checkpoint. */
@Component({
  selector: 'ui-ai-checkpoint',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ZardButtonComponent],
  host: { class: 'flex w-full items-center gap-3 text-muted-foreground', '[attr.data-slot]': '"ai-checkpoint"' },
  template: `
    <svg class="size-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" /></svg>
    <span class="text-xs font-medium whitespace-nowrap">{{ label() }}</span>
    @if (description()) {
      <span class="text-xs whitespace-nowrap opacity-70">{{ description() }}</span>
    }
    <span class="h-px flex-1 bg-border"></span>
    @if (showRestore()) {
      <button z-button zType="ghost" zSize="xs" type="button" (click)="restore.emit()">Restore</button>
    }
  `,
})
export class AiCheckpointComponent {
  readonly label = input('Checkpoint')
  readonly description = input('')
  readonly showRestore = input(true)
  readonly restore = output<void>()
}
