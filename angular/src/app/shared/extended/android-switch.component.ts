import { ChangeDetectionStrategy, Component, input, model } from '@angular/core'

/** Android Switch (Material 3). 52x32 track; thumb grows and shows a check when on. */
@Component({
  selector: 'android-switch',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button
      type="button"
      role="switch"
      data-slot="android-switch"
      [attr.aria-checked]="checked()"
      [attr.aria-label]="ariaLabel()"
      [attr.data-state]="checked() ? 'checked' : 'unchecked'"
      [disabled]="disabled()"
      class="relative inline-flex h-8 w-13 shrink-0 cursor-pointer items-center rounded-full outline-none transition-colors focus-visible:shadow-focus-ring disabled:pointer-events-none disabled:opacity-40"
      [class]="checked() ? 'bg-primary' : 'bg-muted inset-ring-2 inset-ring-muted-foreground'"
      (click)="checked.set(!checked())"
    >
      <span
        data-slot="android-switch-thumb"
        class="pointer-events-none flex items-center justify-center rounded-full transition-all"
        [class]="checked() ? 'ml-6.5 size-6 bg-primary-foreground text-primary' : 'ml-2 size-4 bg-muted-foreground'"
      >
        @if (checked() && withIcon()) {
          <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
        }
      </span>
    </button>
  `,
})
export class AndroidSwitchComponent {
  readonly checked = model(false)
  readonly disabled = input(false)
  readonly withIcon = input(true)
  readonly ariaLabel = input<string | undefined>(undefined)
}
