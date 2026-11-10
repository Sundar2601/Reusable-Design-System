import { ChangeDetectionStrategy, Component, computed, input, output, signal } from '@angular/core'

/**
 * Banner. Full-width message strip. Mirrors the React Banner.
 * Project the description as content and an action (for example a button) with the `action` attribute.
 */
@Component({
  selector: 'ui-banner',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex w-full items-center gap-3 px-4 py-2.5 text-sm',
    '[class]': 'variantClass()',
    '[class.hidden]': 'hidden()',
    '[attr.data-slot]': '"banner"',
    '[attr.data-variant]': 'variant()',
    '[attr.role]': 'variant() === "destructive" || variant() === "warning" ? "alert" : "status"',
  },
  template: `
    <svg class="size-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      @switch (variant()) {
        @case ('success') { <circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /> }
        @case ('warning') { <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" /><path d="M12 9v4" /><path d="M12 17h.01" /> }
        @case ('destructive') { <circle cx="12" cy="12" r="10" /><path d="M12 8v4" /><path d="M12 16h.01" /> }
        @default { <circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /> }
      }
    </svg>
    <div class="flex min-w-0 flex-1 flex-wrap items-baseline gap-x-2">
      @if (heading()) {
        <span class="font-medium">{{ heading() }}</span>
      }
      <span class="opacity-80"><ng-content /></span>
    </div>
    <ng-content select="[action]" />
    @if (dismissible()) {
      <button
        type="button"
        aria-label="Dismiss"
        class="cursor-pointer rounded-sm outline-none hover:opacity-70 focus-visible:shadow-focus-ring"
        (click)="hidden.set(true); dismissed.emit()"
      >
        <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
      </button>
    }
  `,
})
export class BannerComponent {
  readonly variant = input<'info' | 'success' | 'warning' | 'destructive'>('info')
  readonly heading = input('')
  readonly dismissible = input(false)
  readonly dismissed = output<void>()
  protected readonly hidden = signal(false)
  protected readonly variantClass = computed(
    () =>
      ({
        info: 'bg-muted text-foreground',
        success: 'bg-green-100 text-green-900',
        warning: 'bg-amber-100 text-amber-900',
        destructive: 'bg-destructive-subtle text-text-destructive',
      })[this.variant()],
  )
}
