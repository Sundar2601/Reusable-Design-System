import { ChangeDetectionStrategy, Component, input } from '@angular/core'

/** iOS Status Bar: time left, signal / wifi / battery right. Mirrors the React IosStatusBar. */
@Component({
  selector: 'ios-status-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex h-[54px] w-full items-center justify-between px-8 pt-3 font-[system-ui,-apple-system,sans-serif] text-[17px] font-semibold text-foreground',
    '[attr.data-slot]': '"ios-status-bar"',
  },
  template: `
    <span data-slot="ios-status-bar-time">{{ time() }}</span>
    <span class="flex items-center gap-1.5" aria-hidden="true">
      <svg class="size-4" viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="16" width="3" height="5" rx="1"/><rect x="8" y="12" width="3" height="9" rx="1"/><rect x="14" y="8" width="3" height="13" rx="1"/><rect x="20" y="3" width="3" height="18" rx="1"/></svg>
      <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M2 9a15 15 0 0 1 20 0M5.5 12.5a10 10 0 0 1 13 0M9 16a5 5 0 0 1 6 0"/><circle cx="12" cy="19.5" r="1" fill="currentColor"/></svg>
      <svg class="h-4 w-6" viewBox="0 0 28 14" fill="none"><rect x="0.5" y="0.5" width="23" height="13" rx="4" stroke="currentColor" opacity="0.4"/><rect x="2" y="2" width="20" height="10" rx="2.5" fill="currentColor"/><path d="M25 5v4c1-.3 1.8-1.1 1.8-2S26 5.3 25 5Z" fill="currentColor" opacity="0.5"/></svg>
    </span>
  `,
})
export class IosStatusBarComponent {
  readonly time = input('9:41')
}

/** iOS Home Indicator: 134x5 pill at the bottom of the screen. */
@Component({
  selector: 'ios-home-indicator',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'flex h-[34px] w-full items-end justify-center pb-2', '[attr.data-slot]': '"ios-home-indicator"' },
  template: `<span class="h-[5px] w-[134px] rounded-full bg-foreground"></span>`,
})
export class IosHomeIndicatorComponent {}
