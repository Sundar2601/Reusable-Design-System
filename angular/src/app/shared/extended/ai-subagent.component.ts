import { ChangeDetectionStrategy, Component, input } from '@angular/core'
import { ZardBadgeComponent } from '@/shared/components/badge/badge.component'
import { ZardSpinnerComponent } from '@/shared/components/spinner/spinner.component'

export type AiSubagentStatus = 'pending' | 'running' | 'completed' | 'failed'
export interface AiSubagentStep {
  label: string
  status: AiSubagentStatus
}

/** AI Subagent. Task card with status badge and steps. Mirrors the React Subagent. */
@Component({
  selector: 'ui-ai-subagent',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ZardBadgeComponent, ZardSpinnerComponent],
  host: { class: 'flex w-96 flex-col gap-3 rounded-lg bg-card p-4 text-card-foreground inset-ring-1 inset-ring-border', '[attr.data-slot]': '"ai-subagent"', '[attr.data-status]': 'status()' },
  template: `
    <div class="flex items-center gap-2">
      <span class="flex-1 text-sm font-medium">{{ name() }}</span>
      <z-badge [zType]="badge[status()].type">{{ badge[status()].label }}</z-badge>
    </div>
    <p class="text-sm text-muted-foreground">{{ task() }}</p>
    @if (steps().length) {
      <ol class="flex flex-col gap-1.5 border-t border-border pt-3">
        @for (s of steps(); track s.label) {
          <li class="flex items-center gap-2 text-sm" [class.text-muted-foreground]="s.status === 'pending'">
            @if (s.status === 'running') {
              <z-spinner class="size-4" />
            } @else {
              <span class="w-4 text-center font-bold" [class]="icons[s.status].cls">{{ icons[s.status].ch }}</span>
            }
            {{ s.label }}
          </li>
        }
      </ol>
    }
  `,
})
export class AiSubagentComponent {
  readonly name = input('Subagent')
  readonly task = input('')
  readonly status = input<AiSubagentStatus>('pending')
  readonly steps = input<AiSubagentStep[]>([])
  protected readonly badge: Record<AiSubagentStatus, { label: string; type: 'secondary' | 'default' | 'destructive' | 'outline' }> = {
    pending: { label: 'Pending', type: 'outline' },
    running: { label: 'Running', type: 'default' },
    completed: { label: 'Completed', type: 'secondary' },
    failed: { label: 'Failed', type: 'destructive' },
  }
  protected readonly icons: Record<AiSubagentStatus, { ch: string; cls: string }> = {
    pending: { ch: '○', cls: 'text-muted-foreground' },
    running: { ch: '', cls: '' },
    completed: { ch: '✓', cls: 'text-green-600' },
    failed: { ch: '✕', cls: 'text-destructive' },
  }
}
