import { ChangeDetectionStrategy, Component, input } from '@angular/core'

export interface TimelineItem {
  title: string
  description?: string
  time?: string
  status?: 'complete' | 'current' | 'upcoming'
}

/** Timeline. Vertical list of events. Mirrors the React Timeline. */
@Component({
  selector: 'ui-timeline',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block', '[attr.data-slot]': '"timeline"' },
  template: `
    <ol class="flex flex-col text-sm">
      @for (item of items(); track $index; let last = $last) {
        <li data-slot="timeline-item" class="flex gap-3" [attr.data-status]="status(item)">
          <div class="flex flex-col items-center">
            <span
              data-slot="timeline-marker"
              class="flex size-6 shrink-0 items-center justify-center rounded-full"
              [class]="markerClass(item)"
            >
              <span class="size-1.5 rounded-full bg-current"></span>
            </span>
            @if (!last) {
              <span data-slot="timeline-connector" class="my-1 w-px flex-1 bg-border"></span>
            }
          </div>
          <div class="flex flex-1 flex-col gap-0.5 pt-0.5" [class]="last ? '' : 'pb-6'">
            <div class="flex items-baseline justify-between gap-4">
              <span class="font-medium" [class]="status(item) === 'upcoming' ? 'text-muted-foreground' : 'text-foreground'">{{ item.title }}</span>
              @if (item.time) {
                <span class="shrink-0 text-xs text-muted-foreground">{{ item.time }}</span>
              }
            </div>
            @if (item.description) {
              <span class="text-muted-foreground">{{ item.description }}</span>
            }
          </div>
        </li>
      }
    </ol>
  `,
})
export class TimelineComponent {
  readonly items = input<TimelineItem[]>([])

  protected status(item: TimelineItem) {
    return item.status ?? 'complete'
  }
  protected markerClass(item: TimelineItem) {
    const s = this.status(item)
    return s === 'complete'
      ? 'bg-primary text-primary-foreground'
      : s === 'current'
        ? 'bg-background text-foreground inset-ring-2 inset-ring-primary'
        : 'bg-muted text-muted-foreground'
  }
}
