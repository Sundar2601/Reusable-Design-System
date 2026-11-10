import { ChangeDetectionStrategy, Component, computed, input, model } from '@angular/core'

let nextId = 0

/** Android Text Field (Material 3): filled or outlined, floating label, supporting text, error. Icons via `[slot=leading]` / `[slot=trailing]`. */
@Component({
  selector: 'android-text-field',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': '"flex w-full flex-col gap-1 " + (disabled() ? "opacity-40" : "")',
    '[attr.data-slot]': '"android-text-field"',
    '[attr.data-variant]': 'variant()',
  },
  template: `
    <div class="relative flex h-14 items-center gap-3 px-4 text-foreground transition-colors" [class]="box()">
      <span class="text-muted-foreground empty:hidden [&_svg]:size-6"><ng-content select="[slot=leading]" /></span>
      <div class="relative h-full flex-1">
        <input
          [id]="id"
          [disabled]="disabled()"
          [value]="value()"
          [attr.type]="type()"
          [attr.aria-invalid]="error() || null"
          placeholder=" "
          class="peer h-full w-full bg-transparent text-base outline-none"
          [class]="variant() === 'outlined' ? 'pt-0' : 'pt-4'"
          (input)="value.set($any($event.target).value)"
        />
        <label [for]="id" class="pointer-events-none absolute left-0 origin-left text-base transition-all" [class]="labelCls()">{{ label() }}</label>
      </div>
      <span class="empty:hidden [&_svg]:size-6" [class]="error() ? 'text-destructive' : 'text-muted-foreground'"><ng-content select="[slot=trailing]" /></span>
    </div>
    @if (supportingText()) {
      <p class="px-4 text-xs leading-4" [class]="error() ? 'text-destructive' : 'text-muted-foreground'">{{ supportingText() }}</p>
    }
  `,
})
export class AndroidTextFieldComponent {
  protected readonly id = `android-text-field-${nextId++}`
  readonly variant = input<'filled' | 'outlined'>('filled')
  readonly label = input('Label')
  readonly supportingText = input<string | undefined>(undefined)
  readonly error = input(false)
  readonly disabled = input(false)
  readonly type = input('text')
  readonly value = model('')
  protected readonly box = computed(() => {
    const base =
      this.variant() === 'outlined'
        ? 'rounded-sm inset-ring-1 inset-ring-border focus-within:inset-ring-2 focus-within:inset-ring-primary'
        : 'rounded-t-sm border-b border-muted-foreground bg-muted focus-within:border-b-2 focus-within:border-primary'
    const err = this.error() ? (this.variant() === 'outlined' ? 'inset-ring-destructive focus-within:inset-ring-destructive' : 'border-destructive focus-within:border-destructive') : ''
    return `${base} ${err}`
  })
  protected readonly labelCls = computed(() => {
    const float = 'top-1/2 -translate-y-1/2 peer-focus:text-xs peer-not-placeholder-shown:text-xs peer-focus:text-primary'
    const pos =
      this.variant() === 'outlined'
        ? 'peer-focus:top-0 peer-not-placeholder-shown:top-0 peer-focus:-translate-y-[calc(50%+14px)] peer-not-placeholder-shown:-translate-y-[calc(50%+14px)] peer-focus:bg-background peer-not-placeholder-shown:bg-background peer-focus:px-1 peer-not-placeholder-shown:px-1 peer-focus:-ml-1 peer-not-placeholder-shown:-ml-1'
        : 'peer-focus:top-3 peer-not-placeholder-shown:top-3 peer-focus:translate-y-0 peer-not-placeholder-shown:translate-y-0'
    return `${float} ${pos} ${this.error() ? 'text-destructive peer-focus:text-destructive' : 'text-muted-foreground'}`
  })
}
