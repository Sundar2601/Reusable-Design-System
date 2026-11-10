import { ChangeDetectionStrategy, Component, input, model } from '@angular/core'

/** iOS Switch: 51x31 track, 27px thumb, green when on. Mirrors the React IosSwitch. */
@Component({
  selector: 'ios-switch',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'inline-flex', '[attr.data-slot]': '"ios-switch"' },
  template: `
    <button
      type="button"
      role="switch"
      class="relative inline-flex h-[31px] w-[51px] shrink-0 cursor-pointer items-center rounded-full p-0.5 outline-none transition-colors disabled:pointer-events-none disabled:opacity-40"
      [class]="checked() ? 'bg-[#34c759]' : 'bg-muted-foreground/30'"
      [attr.aria-checked]="checked()"
      [attr.aria-label]="ariaLabel()"
      [attr.data-state]="checked() ? 'checked' : 'unchecked'"
      [disabled]="disabled()"
      (click)="checked.set(!checked())"
    >
      <span
        data-slot="ios-switch-thumb"
        class="block size-[27px] rounded-full bg-white shadow-[0_3px_8px_rgb(0_0_0/0.15),0_3px_1px_rgb(0_0_0/0.06)] transition-transform"
        [class]="checked() ? 'translate-x-5' : 'translate-x-0'"
      ></span>
    </button>
  `,
})
export class IosSwitchComponent {
  readonly checked = model(false)
  readonly disabled = input(false)
  readonly ariaLabel = input<string | null>(null)
}
