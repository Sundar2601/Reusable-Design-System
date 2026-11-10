import { ChangeDetectionStrategy, Component, input } from '@angular/core'

/** Android Status Bar. 24dp bar with time and system icons. Mirrors the React AndroidStatusBar. */
@Component({
  selector: 'android-status-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex h-6 w-full items-center justify-between bg-background px-6 text-xs font-medium text-foreground',
    '[attr.data-slot]': '"android-status-bar"',
  },
  template: `
    <span>{{ time() }}</span>
    <span class="flex items-center gap-1" aria-hidden="true">
      <svg class="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h.01M2 8.82a15 15 0 0 1 20 0M5 12.86a10 10 0 0 1 14 0M8.5 16.43a5 5 0 0 1 7 0" /></svg>
      <svg class="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M2 20h.01M7 20v-4M12 20v-8M17 20V8M22 4v16" /></svg>
      <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="16" height="10" rx="2" /><path d="M22 11v2" /></svg>
    </span>
  `,
})
export class AndroidStatusBarComponent {
  readonly time = input('9:30')
}

/** Android Gesture Bar: the 108x4 pill at the bottom of the screen. */
@Component({
  selector: 'android-gesture-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'flex h-6 w-full items-center justify-center bg-background', '[attr.data-slot]': '"android-gesture-bar"' },
  template: `<span class="h-1 w-27 rounded-full bg-foreground"></span>`,
})
export class AndroidGestureBarComponent {}
