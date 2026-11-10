import { Directive, computed, input } from '@angular/core'
import { cva } from 'class-variance-authority'
import { cn } from './cn'

/** Same classes as the React Button, so both frameworks render the same pixels. */
export const buttonVariants = cva(
  [
    'inline-flex shrink-0 cursor-pointer items-center justify-center gap-1 whitespace-nowrap font-medium transition-all',
    'outline-none',
    'focus-visible:inset-ring-1 focus-visible:inset-ring-ring focus-visible:shadow-focus-ring',
    'disabled:pointer-events-none disabled:opacity-50',
    '[&_svg]:pointer-events-none [&_svg]:shrink-0',
  ],
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:opacity-80',
        outline: 'bg-background text-foreground inset-ring-1 inset-ring-border hover:bg-muted',
        secondary: 'bg-secondary text-secondary-foreground hover:opacity-80',
        ghost: 'bg-transparent text-foreground hover:bg-muted',
        destructive:
          'bg-destructive-subtle text-text-destructive hover:opacity-80 focus-visible:inset-ring-destructive-subtle focus-visible:shadow-destructive-ring',
        link: 'bg-transparent text-foreground hover:underline',
      },
      size: {
        xs: 'h-6 rounded-sm px-2 text-xs',
        sm: 'h-7 rounded-sm px-2.5 text-xs',
        default: 'h-8 rounded-lg px-2.5 text-sm',
        lg: 'h-9 rounded-lg px-2.5 text-sm',
      },
      rounded: { true: 'rounded-full', false: '' },
    },
    defaultVariants: { variant: 'default', size: 'default', rounded: false },
  },
)

export type ButtonVariant = 'default' | 'outline' | 'secondary' | 'ghost' | 'destructive' | 'link'
export type ButtonSize = 'xs' | 'sm' | 'default' | 'lg'

/** Usage: `<button dsButton variant="outline" size="sm">Label</button>` (also works on `<a>`). */
@Directive({
  selector: 'button[dsButton], a[dsButton]',
  host: { 'data-slot': 'button', '[class]': 'classes()' },
})
export class DsButton {
  readonly variant = input<ButtonVariant>('default')
  readonly size = input<ButtonSize>('default')
  readonly rounded = input(false)
  protected readonly classes = computed(() =>
    cn(buttonVariants({ variant: this.variant(), size: this.size(), rounded: this.rounded() })),
  )
}
