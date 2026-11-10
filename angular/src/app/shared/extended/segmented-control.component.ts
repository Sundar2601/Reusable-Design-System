import { ChangeDetectionStrategy, Component, input, model } from '@angular/core'

export interface SegmentedControlOption {
  value: string
  label: string
  disabled?: boolean
}

/** Segmented Control. Single-select group of buttons. Mirrors the React SegmentedControl. */
@Component({
  selector: 'ui-segmented-control',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'inline-flex items-center gap-0.5 rounded-lg bg-muted p-0.5',
    role: 'radiogroup',
    '[attr.data-slot]': '"segmented-control"',
    '[attr.data-size]': 'size()',
  },
  template: `
    @for (o of options(); track o.value) {
      <button
        type="button"
        role="radio"
        data-slot="segmented-control-item"
        class="inline-flex cursor-pointer items-center justify-center gap-1 rounded-md font-medium whitespace-nowrap outline-none transition-all focus-visible:shadow-focus-ring disabled:pointer-events-none disabled:opacity-50"
        [class]="(size() === 'sm' ? 'h-6 px-2 text-xs' : 'h-7 px-3 text-sm') + ' ' + (o.value === current() ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground')"
        [attr.aria-checked]="o.value === current()"
        [attr.data-state]="o.value === current() ? 'on' : 'off'"
        [disabled]="o.disabled"
        (click)="value.set(o.value)"
      >
        {{ o.label }}
      </button>
    }
  `,
})
export class SegmentedControlComponent {
  readonly options = input<SegmentedControlOption[]>([])
  readonly value = model<string | undefined>(undefined)
  readonly size = input<'sm' | 'default'>('default')
  protected current() {
    return this.value() ?? this.options()[0]?.value
  }
}
