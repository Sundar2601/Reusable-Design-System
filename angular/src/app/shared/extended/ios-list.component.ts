import { ChangeDetectionStrategy, Component, input } from '@angular/core'

/** iOS List (inset grouped): uppercase header, rounded 10px group, hairline separators, optional footer. Mirrors the React IosList. */
@Component({
  selector: 'ios-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block w-full font-[system-ui,-apple-system,sans-serif]', '[attr.data-slot]': '"ios-list"' },
  template: `
    @if (header()) {
      <div class="px-4 pb-1.5 text-[13px] text-muted-foreground uppercase">{{ header() }}</div>
    }
    <div class="overflow-hidden rounded-[10px] bg-card text-card-foreground"><ng-content /></div>
    @if (footer()) {
      <div class="px-4 pt-1.5 text-[13px] text-muted-foreground">{{ footer() }}</div>
    }
  `,
})
export class IosListComponent {
  readonly header = input('')
  readonly footer = input('')
}

/** iOS List Row: min 44px, leading icon, title + subtitle, trailing value, chevron or projected accessory. Mirrors the React IosListRow. */
@Component({
  selector: 'ios-list-row',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class:
      'relative flex min-h-11 items-center gap-3 px-4 py-2 [&:not(:last-child)]:after:absolute [&:not(:last-child)]:after:right-0 [&:not(:last-child)]:after:bottom-0 [&:not(:last-child)]:after:left-4 [&:not(:last-child)]:after:h-px [&:not(:last-child)]:after:bg-border',
    '[attr.data-slot]': '"ios-list-row"',
  },
  template: `
    <span class="flex shrink-0 items-center empty:hidden [&_svg]:size-7"><ng-content select="[leading]" /></span>
    <span class="flex min-w-0 flex-1 flex-col">
      <span class="truncate text-[17px] leading-[22px]" [class]="destructive() ? 'text-[color:var(--ios-destructive,#ff3b30)]' : 'text-foreground'">{{ title() }}</span>
      @if (subtitle()) {
        <span class="truncate text-[15px] leading-5 text-muted-foreground">{{ subtitle() }}</span>
      }
    </span>
    @if (value()) {
      <span class="shrink-0 text-[17px] text-muted-foreground">{{ value() }}</span>
    }
    <ng-content select="[accessory]" />
    @if (chevron()) {
      <svg class="size-5 shrink-0 text-muted-foreground/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
    }
  `,
})
export class IosListRowComponent {
  readonly title = input.required<string>()
  readonly subtitle = input('')
  readonly value = input('')
  readonly chevron = input(false)
  readonly destructive = input(false)
}
