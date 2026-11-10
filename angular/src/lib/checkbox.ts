import { ChangeDetectionStrategy, Component, input, model } from '@angular/core'

const CHECK =
  "after:content-[''] checked:after:block after:hidden after:mx-auto after:mt-[2px] after:h-2 after:w-1 after:rotate-45 after:border-b-2 after:border-r-2 after:border-current"

/** Usage: `<ds-checkbox label="Accept terms" description="..." [(checked)]="value" />` */
@Component({
  selector: 'ds-checkbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'data-slot': 'checkbox-field', '[attr.data-disabled]': 'disabled() || null', class: 'grid grid-cols-[1rem_1fr] items-center gap-x-2 gap-y-0.5 data-[disabled]:opacity-50' },
  template: `
    <input
      type="checkbox"
      data-slot="checkbox"
      [id]="id"
      [checked]="checked()"
      [disabled]="disabled()"
      [attr.aria-invalid]="invalid() || null"
      (change)="checked.set($any($event.target).checked)"
      class="size-4 shrink-0 cursor-pointer appearance-none rounded-[4px] bg-background text-primary-foreground inset-ring-1 inset-ring-border outline-none transition-shadow focus-visible:inset-ring-ring focus-visible:shadow-focus-ring aria-invalid:inset-ring-text-destructive aria-invalid:shadow-destructive-ring checked:bg-primary checked:inset-ring-primary disabled:cursor-not-allowed ${CHECK}"
    />
    @if (label()) {
      <label [for]="id" class="text-sm font-medium text-foreground">{{ label() }}</label>
    }
    @if (description()) {
      <p class="col-start-2 text-sm text-muted-foreground">{{ description() }}</p>
    }
  `,
})
export class DsCheckbox {
  private static next = 0
  protected readonly id = `ds-checkbox-${DsCheckbox.next++}`
  readonly checked = model(false)
  readonly disabled = input(false)
  readonly invalid = input(false)
  readonly label = input<string>()
  readonly description = input<string>()
}
