import { ChangeDetectionStrategy, Component, input, model } from '@angular/core'

export interface IosSegmentedControlOption {
  value: string
  label: string
}

/** iOS Segmented Control: 32px tall, 9px radius, raised selected segment. Mirrors the React IosSegmentedControl. */
@Component({
  selector: 'ios-segmented-control',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex h-8 w-full items-stretch gap-0.5 rounded-[9px] bg-muted p-0.5 font-[system-ui,-apple-system,sans-serif]',
    role: 'radiogroup',
    '[attr.data-slot]': '"ios-segmented-control"',
  },
  template: `
    @for (o of options(); track o.value) {
      <button
        type="button"
        role="radio"
        class="flex-1 cursor-pointer rounded-[7px] text-[13px] outline-none transition-all"
        [class]="o.value === current() ? 'bg-background font-semibold text-foreground shadow-[0_3px_8px_rgb(0_0_0/0.12),0_3px_1px_rgb(0_0_0/0.04)]' : 'font-medium text-foreground'"
        [attr.aria-checked]="o.value === current()"
        [attr.data-state]="o.value === current() ? 'on' : 'off'"
        (click)="value.set(o.value)"
      >
        {{ o.label }}
      </button>
    }
  `,
})
export class IosSegmentedControlComponent {
  readonly options = input<IosSegmentedControlOption[]>([])
  readonly value = model<string | undefined>(undefined)
  protected current() {
    return this.value() ?? this.options()[0]?.value
  }
}
