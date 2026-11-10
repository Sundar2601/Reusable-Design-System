import { Directive, computed, input } from '@angular/core'
import { cn } from './cn'

/** Usage: `<input dsInput placeholder="Email" [invalid]="true" />` */
@Directive({
  selector: 'input[dsInput]',
  host: {
    'data-slot': 'input',
    '[attr.aria-invalid]': 'invalid() || null',
    '[class]': 'classes()',
  },
})
export class DsInput {
  readonly rounded = input(false)
  readonly invalid = input(false)
  protected readonly classes = computed(() =>
    cn(
      'h-8 w-80 min-w-0 rounded-lg bg-background px-2.5 py-1 text-sm text-foreground',
      'inset-ring-1 inset-ring-border outline-none transition-[color,box-shadow]',
      'placeholder:text-muted-foreground',
      'focus-visible:inset-ring-ring focus-visible:shadow-focus-ring',
      'aria-invalid:inset-ring-text-destructive aria-invalid:shadow-destructive-ring',
      'disabled:pointer-events-none disabled:opacity-50',
      this.rounded() && 'rounded-full',
    ),
  )
}
