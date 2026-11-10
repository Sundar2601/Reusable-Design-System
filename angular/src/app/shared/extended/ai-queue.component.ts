import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core'

export type AiQueueItemStatus = 'pending' | 'in-progress' | 'completed' | 'failed'
export interface AiQueueItem {
  label: string
  description?: string
  status: AiQueueItemStatus
}
export interface AiQueueSection {
  label: string
  items: AiQueueItem[]
}

/**
 * AI Queue. Hand-built to mirror the React Queue. Task list grouped into collapsible sections
 * with a status icon per item.
 */
@Component({
  selector: 'ai-queue',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'flex w-full flex-col gap-2 rounded-xl bg-card p-2 text-card-foreground shadow-sm inset-ring-1 inset-ring-border', 'data-slot': 'queue' },
  template: `
    @for (section of sections(); track section.label) {
      <div data-slot="queue-section" class="flex flex-col">
        <button
          type="button"
          class="flex w-full cursor-pointer items-center justify-between gap-2 rounded-md px-2 py-1.5 text-sm font-medium text-muted-foreground outline-none hover:bg-muted focus-visible:inset-ring-1 focus-visible:inset-ring-ring"
          [attr.aria-expanded]="!isClosed(section.label)"
          (click)="toggle(section.label)"
        >
          <span>{{ section.label }} <span class="ml-1.5 font-normal">{{ section.items.length }}</span></span>
          <svg class="size-4 transition-transform" [class.rotate-180]="!isClosed(section.label)" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>
        </button>
        @if (!isClosed(section.label)) {
          <ul class="flex flex-col gap-0.5 pt-1">
            @for (item of section.items; track item.label) {
              <li data-slot="queue-item" class="flex items-start gap-2.5 rounded-md px-2 py-1.5 text-sm hover:bg-muted" [attr.data-status]="item.status">
                <span
                  class="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full"
                  [class]="item.status === 'completed' ? 'bg-primary text-primary-foreground' : item.status === 'failed' ? 'bg-destructive-subtle text-text-destructive' : 'text-muted-foreground'"
                >
                  <svg class="size-3" [class.animate-spin]="item.status === 'in-progress'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    @switch (item.status) {
                      @case ('completed') { <path d="M20 6 9 17l-5-5" /> }
                      @case ('failed') { <path d="M18 6 6 18" /><path d="m6 6 12 12" /> }
                      @case ('in-progress') { <path d="M21 12a9 9 0 1 1-6.219-8.56" /> }
                      @default { <circle cx="12" cy="12" r="10" /> }
                    }
                  </svg>
                </span>
                <span class="flex min-w-0 flex-col">
                  <span [class.line-through]="item.status === 'completed'" [class.text-muted-foreground]="item.status === 'completed'">{{ item.label }}</span>
                  @if (item.description) { <span class="text-xs text-muted-foreground">{{ item.description }}</span> }
                </span>
              </li>
            }
          </ul>
        }
      </div>
    }
  `,
})
export class AiQueueComponent {
  readonly sections = input<AiQueueSection[]>([])
  private readonly closed = signal<ReadonlySet<string>>(new Set())

  protected isClosed(label: string): boolean {
    return this.closed().has(label)
  }
  protected toggle(label: string): void {
    const next = new Set(this.closed())
    if (!next.delete(label)) next.add(label)
    this.closed.set(next)
  }
}
