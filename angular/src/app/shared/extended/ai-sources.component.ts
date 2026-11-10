import { ChangeDetectionStrategy, Component, input, model } from '@angular/core'

export interface AiSource {
  href: string
  title: string
}

/**
 * AI Sources. Hand-built to mirror the React Sources. Collapsible "Used N sources" list of links.
 */
@Component({
  selector: 'ai-sources',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'flex w-full flex-col gap-2 text-sm', 'data-slot': 'sources' },
  template: `
    <button
      type="button"
      data-slot="sources-trigger"
      class="flex w-fit cursor-pointer items-center gap-2 rounded-sm font-medium text-primary outline-none focus-visible:inset-ring-1 focus-visible:inset-ring-ring"
      [attr.aria-expanded]="open()"
      (click)="open.set(!open())"
    >
      <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></svg>
      <span>Used {{ sources().length }} sources</span>
      <svg class="size-4 transition-transform" [class.rotate-180]="open()" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>
    </button>
    @if (open()) {
      <div data-slot="sources-content" class="flex flex-col gap-2">
        @for (s of sources(); track s.href) {
          <a data-slot="source" class="flex items-center gap-2 rounded-sm text-foreground outline-none hover:underline focus-visible:inset-ring-1 focus-visible:inset-ring-ring" [href]="s.href" target="_blank" rel="noreferrer">
            <span class="truncate">{{ s.title }}</span>
          </a>
        }
      </div>
    }
  `,
})
export class AiSourcesComponent {
  readonly sources = input<AiSource[]>([])
  readonly open = model(false)
}
