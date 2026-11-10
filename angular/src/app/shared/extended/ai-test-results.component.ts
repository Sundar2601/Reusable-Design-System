import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core'
import { ZardBadgeComponent } from '@/shared/components/badge/badge.component'

export type AiTestStatus = 'passed' | 'failed' | 'skipped'
export interface AiTestCase {
  name: string
  status: AiTestStatus
  duration?: number
  error?: string
}
export interface AiTestSuite {
  name: string
  tests: AiTestCase[]
}

/** AI Test Results. Suite / test list with pass, fail and skip summary. Mirrors the React TestResults. */
@Component({
  selector: 'ui-ai-test-results',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ZardBadgeComponent],
  host: { class: 'block w-full overflow-hidden rounded-lg bg-card inset-ring-1 inset-ring-border', '[attr.data-slot]': '"ai-test-results"' },
  template: `
    <div class="flex items-center gap-2 border-b border-border px-3 py-2 text-sm">
      <span class="flex-1 font-medium">Test results</span>
      <z-badge zType="secondary">{{ count('passed') }} passed</z-badge>
      @if (count('failed') > 0) {
        <z-badge zType="destructive">{{ count('failed') }} failed</z-badge>
      }
      @if (count('skipped') > 0) {
        <z-badge zType="outline">{{ count('skipped') }} skipped</z-badge>
      }
    </div>
    @for (suite of suites(); track suite.name) {
      <div class="border-b border-border last:border-0">
        <div class="bg-muted px-3 py-1.5 text-xs font-medium text-muted-foreground">{{ suite.name }}</div>
        <ul>
          @for (t of suite.tests; track t.name) {
            <li class="flex flex-col gap-1 px-3 py-1.5 text-sm" [attr.data-status]="t.status">
              <div class="flex items-center gap-2">
                <span class="w-4 text-center font-bold" [class]="icons[t.status].cls">{{ icons[t.status].ch }}</span>
                <span class="flex-1">{{ t.name }}</span>
                @if (t.duration != null) {
                  <span class="text-xs text-muted-foreground tabular-nums">{{ t.duration }}ms</span>
                }
              </div>
              @if (t.error) {
                <p class="pl-6 font-mono text-xs text-destructive">{{ t.error }}</p>
              }
            </li>
          }
        </ul>
      </div>
    }
  `,
})
export class AiTestResultsComponent {
  readonly suites = input<AiTestSuite[]>([])
  private readonly all = computed(() => this.suites().flatMap((s) => s.tests))
  protected readonly icons: Record<AiTestStatus, { ch: string; cls: string }> = {
    passed: { ch: '✓', cls: 'text-green-600' },
    failed: { ch: '✕', cls: 'text-destructive' },
    skipped: { ch: '–', cls: 'text-muted-foreground' },
  }
  protected count(s: AiTestStatus) {
    return this.all().filter((t) => t.status === s).length
  }
}
