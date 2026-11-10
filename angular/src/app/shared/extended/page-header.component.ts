import { ChangeDetectionStrategy, Component, input } from '@angular/core'

/**
 * Page Header. Title row for the top of a page. Mirrors the React PageHeader.
 * Project a breadcrumb with the `breadcrumb` attribute and buttons with the `actions` attribute.
 */
@Component({
  selector: 'ui-page-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'flex w-full flex-col gap-3 border-b border-border pb-4', '[attr.data-slot]': '"page-header"' },
  template: `
    <div data-slot="page-header-breadcrumb" class="text-sm text-muted-foreground empty:hidden"><ng-content select="[breadcrumb]" /></div>
    <div class="flex items-start justify-between gap-4">
      <div class="flex min-w-0 flex-col gap-1">
        <h1 data-slot="page-header-title" class="text-2xl font-semibold tracking-tight text-foreground">{{ heading() }}</h1>
        @if (description()) {
          <p data-slot="page-header-description" class="text-sm text-muted-foreground">{{ description() }}</p>
        }
      </div>
      <div data-slot="page-header-actions" class="flex shrink-0 items-center gap-2 empty:hidden"><ng-content select="[actions]" /></div>
    </div>
  `,
})
export class PageHeaderComponent {
  readonly heading = input('')
  readonly description = input('')
}
