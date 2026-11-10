import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { Slot } from 'radix-ui'
import { cn } from '@/lib/utils'

/**
 * Button. Figma component "Button" (Type / Size / State / Label).
 * - Figma `Type`  -> `variant` ("type" is already a native button attribute)
 * - Figma `Size`  -> `size`
 * - Figma `State=Disabled` -> `disabled`. Hover and focus are CSS states.
 * - Figma `Label` -> children
 */
const buttonVariants = cva(
  [
    'inline-flex shrink-0 items-center justify-center whitespace-nowrap',
    'cursor-pointer transition-colors',
    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring',
    'disabled:pointer-events-none disabled:text-text-disabled',
    'aria-disabled:pointer-events-none aria-disabled:text-text-disabled',
  ],
  {
    variants: {
      variant: {
        primary:
          'bg-primary text-brand-on-brand hover:bg-brand-hover active:bg-brand-pressed disabled:bg-bg-disabled aria-disabled:bg-bg-disabled',
        secondary:
          'border border-input bg-card text-foreground hover:bg-secondary disabled:border-border disabled:bg-bg-disabled aria-disabled:border-border aria-disabled:bg-bg-disabled',
        ghost:
          'bg-transparent text-primary hover:bg-accent disabled:bg-transparent aria-disabled:bg-transparent',
      },
      size: {
        lg: 'h-12 gap-sm rounded-md px-xl text-button-large',
        md: 'h-10 gap-sm rounded-md px-lg text-button-medium',
        sm: 'h-8 gap-xs rounded-sm px-md text-button-small',
      },
    },
    defaultVariants: { variant: 'primary', size: 'lg' },
  },
)

export interface ButtonProps
  extends React.ComponentProps<'button'>,
    VariantProps<typeof buttonVariants> {
  /** Render as the child element (for example a link) instead of a <button>. */
  asChild?: boolean
}

function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot.Root : 'button'
  return (
    <Comp
      data-slot="button"
      data-variant={variant ?? 'primary'}
      data-size={size ?? 'lg'}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
}

export { Button, buttonVariants }
