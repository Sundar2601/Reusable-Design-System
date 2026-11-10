import { ChangeDetectionStrategy, Component, input, model } from '@angular/core'

export interface AndroidSegment {
  value: string
  label?: string
  disabled?: boolean
}

/** Android Segmented Button (Material 3). Single or multiple selection; selected segments show a check. */
@Component({
  selector: 'android-segmented-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'inline-flex h-10 overflow-hidden rounded-full inset-ring-1 inset-ring-border',
    '[attr.role]': 'multiple() ? "group" : "radiogroup"',
    '[attr.data-slot]': '"android-segmented-button"',
  },
  template: `
    @for (o of options(); track o.value; let i = $index) {
      <button
        type="button"
        data-slot="android-segment"
        class="inline-flex min-w-12 flex-1 cursor-pointer items-center justify-center gap-2 px-3 text-sm font-medium whitespace-nowrap outline-none transition-colors focus-visible:shadow-focus-ring disabled:pointer-events-none disabled:opacity-40 [&_svg]:size-4.5"
        [class]="(i > 0 ? 'border-l border-border ' : '') + (isOn(o.value) ? 'bg-secondary text-secondary-foreground' : 'text-foreground hover:bg-foreground/8')"
        [attr.role]="multiple() ? 'checkbox' : 'radio'"
        [attr.aria-checked]="isOn(o.value)"
        [attr.data-state]="isOn(o.value) ? 'on' : 'off'"
        [disabled]="o.disabled"
        (click)="toggle(o.value)"
      >
        @if (isOn(o.value)) {
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
        }
        {{ o.label }}
      </button>
    }
  `,
})
export class AndroidSegmentedButtonComponent {
  readonly options = input<AndroidSegment[]>([])
  readonly multiple = input(false)
  readonly value = model<string[] | undefined>(undefined)
  protected current() {
    return this.value() ?? (this.options()[0] ? [this.options()[0].value] : [])
  }
  protected isOn(v: string) {
    return this.current().includes(v)
  }
  protected toggle(v: string) {
    const cur = this.current()
    this.value.set(this.multiple() ? (cur.includes(v) ? cur.filter((x) => x !== v) : [...cur, v]) : [v])
  }
}
