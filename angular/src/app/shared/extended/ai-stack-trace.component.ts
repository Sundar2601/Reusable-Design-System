import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core'

export interface AiStackFrame {
  fn: string
  file: string
  line: number
  column?: number
  internal?: boolean
}

/** AI Stack Trace. Collapsible error with frames and file:line highlighting. Mirrors the React StackTrace. */
@Component({
  selector: 'ui-ai-stack-trace',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block w-full overflow-hidden rounded-lg bg-card inset-ring-1 inset-ring-border', '[attr.data-slot]': '"ai-stack-trace"' },
  template: `
    <button type="button" class="flex w-full cursor-pointer items-start gap-2 px-3 py-2 text-left text-sm outline-none" [attr.aria-expanded]="open()" (click)="open.set(!open())">
      <span class="flex-1">
        <span class="font-medium text-destructive">{{ name() }}</span><span>: {{ message() }}</span>
      </span>
      <svg class="mt-0.5 size-4 shrink-0 text-muted-foreground transition-transform" [class.rotate-180]="open()" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6" /></svg>
    </button>
    @if (open()) {
      <ol class="border-t border-border bg-muted py-1 font-mono text-xs">
        @for (f of frames(); track $index) {
          <li class="flex gap-2 px-3 py-0.5" [class.opacity-50]="f.internal">
            <span class="text-muted-foreground">at</span>
            <span>{{ f.fn }}</span>
            <span class="text-muted-foreground">(<span class="text-primary">{{ f.file }}</span><span class="rounded-sm bg-card px-1 text-destructive">:{{ f.line }}@if (f.column != null) {:{{ f.column }}}</span>)</span>
          </li>
        }
      </ol>
    }
  `,
})
export class AiStackTraceComponent {
  readonly name = input('Error')
  readonly message = input('')
  readonly frames = input<AiStackFrame[]>([])
  readonly defaultOpen = input(true)
  protected readonly open = signal(true)
  constructor() {
    queueMicrotask(() => this.open.set(this.defaultOpen()))
  }
}
