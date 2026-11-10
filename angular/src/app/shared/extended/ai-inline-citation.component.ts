import { ChangeDetectionStrategy, Component, input } from '@angular/core'
import { ZardBadgeComponent } from '@/shared/components/badge'
import { ZardHoverCardDirective } from '@/shared/components/hover-card/hover-card.component'

/**
 * AI Inline Citation. Hand-built to mirror the React InlineCitation. Project the cited text as content;
 * a numbered chip follows it and opens a hover card with the source details.
 */
@Component({
  selector: 'ai-inline-citation',
  imports: [ZardBadgeComponent, ZardHoverCardDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'inline-flex items-center gap-1', 'data-slot': 'inline-citation' },
  template: `
    <span data-slot="inline-citation-text" class="transition-colors hover:bg-muted"><ng-content /></span>
    <z-badge class="ml-0.5 cursor-pointer tabular-nums" zType="secondary" tabindex="0" [zHoverCard]="card" [zOpenDelay]="0" [zCloseDelay]="0">{{ index() }}</z-badge>
    <ng-template #card>
      <div data-slot="inline-citation-source" class="flex w-72 flex-col gap-1">
        <h4 class="truncate text-sm font-medium">{{ title() }}</h4>
        @if (url()) { <p class="truncate text-xs break-all text-muted-foreground">{{ url() }}</p> }
        @if (description()) { <p class="line-clamp-3 text-xs text-muted-foreground">{{ description() }}</p> }
      </div>
    </ng-template>
  `,
})
export class AiInlineCitationComponent {
  readonly index = input.required<number | string>()
  readonly title = input.required<string>()
  readonly url = input('')
  readonly description = input('')
}
