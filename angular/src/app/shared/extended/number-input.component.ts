import { ChangeDetectionStrategy, Component, input, model } from '@angular/core'

/** Number Input. Numeric input with decrement / increment buttons. Mirrors the React NumberInput. */
@Component({
  selector: 'ui-number-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class:
      'flex h-8 w-32 items-center overflow-hidden rounded-lg bg-background text-sm text-foreground inset-ring-1 inset-ring-border transition-[color,box-shadow] focus-within:inset-ring-ring focus-within:shadow-focus-ring',
    '[class.pointer-events-none]': 'disabled()',
    '[class.opacity-50]': 'disabled()',
    '[class.inset-ring-text-destructive]': 'invalid()',
    '[class.shadow-destructive-ring]': 'invalid()',
    '[attr.aria-invalid]': 'invalid() ? "true" : null',
    '[attr.data-slot]': '"number-input"',
  },
  template: `
    <button
      type="button"
      aria-label="Decrease"
      class="flex h-full w-8 shrink-0 cursor-pointer items-center justify-center text-muted-foreground outline-none hover:bg-muted focus-visible:shadow-focus-ring disabled:pointer-events-none disabled:opacity-50"
      [disabled]="disabled() || value() <= min()"
      (click)="set(value() - step())"
    >
      <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14" /></svg>
    </button>
    <input
      data-slot="number-input-field"
      type="text"
      inputmode="decimal"
      role="spinbutton"
      class="h-full min-w-0 flex-1 bg-transparent text-center outline-none"
      [value]="value()"
      [disabled]="disabled()"
      [attr.aria-valuenow]="value()"
      (input)="onInput($event)"
      (keydown.arrowup)="$event.preventDefault(); set(value() + step())"
      (keydown.arrowdown)="$event.preventDefault(); set(value() - step())"
    />
    <button
      type="button"
      aria-label="Increase"
      class="flex h-full w-8 shrink-0 cursor-pointer items-center justify-center text-muted-foreground outline-none hover:bg-muted focus-visible:shadow-focus-ring disabled:pointer-events-none disabled:opacity-50"
      [disabled]="disabled() || value() >= max()"
      (click)="set(value() + step())"
    >
      <svg class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
    </button>
  `,
})
export class NumberInputComponent {
  readonly value = model(0)
  readonly min = input(-Infinity)
  readonly max = input(Infinity)
  readonly step = input(1)
  readonly disabled = input(false)
  readonly invalid = input(false)

  protected set(n: number) {
    this.value.set(Math.min(this.max(), Math.max(this.min(), n)))
  }
  protected onInput(e: Event) {
    const raw = (e.target as HTMLInputElement).value
    const n = Number(raw)
    if (raw !== '' && !Number.isNaN(n)) this.set(n)
  }
}
