import { ChangeDetectionStrategy, Component, inject, input, model } from '@angular/core'

/** Usage: `<ds-radio-group [(value)]="v"><ds-radio value="a" label="A" /></ds-radio-group>` */
@Component({
  selector: 'ds-radio-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'data-slot': 'radio-group', role: 'radiogroup', class: 'grid gap-3' },
  template: `<ng-content />`,
})
export class DsRadioGroup {
  readonly value = model<string>()
  readonly disabled = input(false)
}

@Component({
  selector: 'ds-radio',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'data-slot': 'radio-field', '[attr.data-disabled]': 'isDisabled() || null', class: 'grid grid-cols-[1rem_1fr] items-center gap-x-2 gap-y-0.5 data-[disabled]:opacity-50' },
  template: `
    <input
      type="radio"
      data-slot="radio"
      [id]="id"
      [value]="value()"
      [checked]="group.value() === value()"
      [disabled]="isDisabled()"
      [attr.aria-invalid]="invalid() || null"
      (change)="group.value.set(value())"
      class="size-4 shrink-0 cursor-pointer appearance-none rounded-full bg-background text-primary-foreground inset-ring-1 inset-ring-border outline-none transition-shadow focus-visible:inset-ring-ring focus-visible:shadow-focus-ring aria-invalid:inset-ring-text-destructive aria-invalid:shadow-destructive-ring checked:bg-primary checked:inset-ring-primary disabled:cursor-not-allowed after:hidden checked:after:block after:content-[''] after:mx-auto after:mt-1 after:size-2 after:rounded-full after:bg-primary-foreground"
    />
    @if (label()) {
      <label [for]="id" class="text-sm font-medium text-foreground">{{ label() }}</label>
    }
    @if (description()) {
      <p class="col-start-2 text-sm text-muted-foreground">{{ description() }}</p>
    }
  `,
})
export class DsRadio {
  private static next = 0
  protected readonly id = `ds-radio-${DsRadio.next++}`
  protected readonly group = inject(DsRadioGroup)
  readonly value = input.required<string>()
  readonly disabled = input(false)
  readonly invalid = input(false)
  readonly label = input<string>()
  readonly description = input<string>()
  protected isDisabled() {
    return this.disabled() || this.group.disabled()
  }
}
