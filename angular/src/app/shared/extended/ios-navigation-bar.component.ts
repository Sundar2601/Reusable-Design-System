import { ChangeDetectionStrategy, Component, input, output } from '@angular/core'

/** iOS Navigation Bar. Inline or large title, translucent. Mirrors the React IosNavigationBar. Trailing actions go in `<span slot-trailing>` via content projection. */
@Component({
  selector: 'ios-navigation-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block w-full border-b border-border/60 bg-background/80 font-[system-ui,-apple-system,sans-serif] backdrop-blur-xl',
    '[attr.data-slot]': '"ios-navigation-bar"',
    '[attr.data-large-title]': 'largeTitle()',
  },
  template: `
    <div class="grid h-11 grid-cols-[1fr_auto_1fr] items-center px-2">
      <div class="flex justify-start">
        @if (backLabel() !== undefined) {
          <button type="button" class="flex h-11 min-w-11 cursor-pointer items-center text-[17px] text-[color:var(--ios-tint,#007aff)] outline-none" (click)="back.emit()">
            <svg class="size-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            <span class="-ml-1">{{ backLabel() }}</span>
          </button>
        }
      </div>
      <h1 class="text-[17px] font-semibold text-foreground" [class.opacity-0]="largeTitle()">{{ title() }}</h1>
      <div class="flex justify-end gap-3 px-2 text-[17px] text-[color:var(--ios-tint,#007aff)]"><ng-content /></div>
    </div>
    @if (largeTitle()) {
      <h2 class="px-4 pt-1 pb-2 text-[34px] leading-[41px] font-bold tracking-[0.37px] text-foreground">{{ title() }}</h2>
    }
  `,
})
export class IosNavigationBarComponent {
  readonly title = input.required<string>()
  readonly largeTitle = input(false)
  readonly backLabel = input<string | undefined>(undefined)
  readonly back = output<void>()
}
