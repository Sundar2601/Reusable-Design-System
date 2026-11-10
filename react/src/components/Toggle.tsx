import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { Toggle as TogglePrimitive } from 'radix-ui'
import { cn } from '@/lib/utils'

/**
 * Toggle. Figma component "Toggle" (Variant / Size / State).
 * - Figma `Variant` -> `variant` (default | outline); `Size` -> `size` (sm 28px | default 32px | lg 36px)
 * - Figma `State=On` -> `pressed` / `defaultPressed` + `onPressedChange`
 * - Figma `State=Disabled` -> `disabled`. Hover and focus are CSS states.
 */
const toggleVariants = cva(
  [
    'inline-flex shrink-0 cursor-pointer items-center justify-center gap-1 whitespace-nowrap rounded-lg text-sm font-medium transition-all',
    'outline-none hover:bg-muted hover:text-foreground',
    'focus-visible:inset-ring-1 focus-visible:inset-ring-ring focus-visible:shadow-focus-ring',
    'disabled:pointer-events-none disabled:opacity-50',
    'aria-invalid:inset-ring-text-destructive aria-invalid:shadow-destructive-ring',
    'data-[state=on]:bg-muted data-[state=on]:text-foreground',
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  ],
  {
    variants: {
      variant: {
        default: 'bg-transparent',
        outline: 'bg-transparent inset-ring-1 inset-ring-border',
      },
      size: {
        sm: 'h-7 min-w-7 px-2.5 text-xs',
        default: 'h-8 min-w-8 px-2.5',
        lg: 'h-9 min-w-9 px-2.5',
      },
    },
    defaultVariants: { variant: 'default', size: 'default' },
  },
)

export interface ToggleProps
  extends React.ComponentProps<typeof TogglePrimitive.Root>,
    VariantProps<typeof toggleVariants> {}

function Toggle({ className, variant, size, ...props }: ToggleProps) {
  return (
    <TogglePrimitive.Root
      data-slot="toggle"
      data-variant={variant ?? 'default'}
      data-size={size ?? 'default'}
      className={cn(toggleVariants({ variant, size }), className)}
      {...props}
    />
  )
}

export { Toggle, toggleVariants }
