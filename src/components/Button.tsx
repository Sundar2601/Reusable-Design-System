import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { Slot } from 'radix-ui'
import { cn } from '@/lib/utils'

/**
 * Button. Figma component "Button" (Variant / Size / State / Roundness + toggles).
 * - Figma `Variant`  -> `variant` (default | outline | secondary | ghost | destructive | link)
 * - Figma `Size`     -> `size` (xs 24px | sm 28px | default 32px | lg 36px)
 * - Figma `State=Disabled` -> `disabled`. Hover and focus are CSS states.
 * - Figma `Roundness=Rounded` (spelled "Roudness" in Figma) -> `rounded`
 * - Figma `Left icon` / `Right icon` toggles -> `leftIcon` / `rightIcon` (any element)
 * - Figma `Kbd` toggle -> `kbd` (keyboard hint element)
 */
const buttonVariants = cva(
  [
    'inline-flex shrink-0 cursor-pointer items-center justify-center gap-1 whitespace-nowrap font-medium transition-all',
    // Figma draws strokes inside the box, so outlines are inset shadows, not CSS borders.
    'outline-none',
    'focus-visible:inset-ring-1 focus-visible:inset-ring-ring focus-visible:shadow-focus-ring',
    'disabled:pointer-events-none disabled:opacity-50',
    'aria-disabled:pointer-events-none aria-disabled:opacity-50',
    "[&_svg]:pointer-events-none [&_svg]:shrink-0",
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
        xs: "h-6 rounded-sm px-2 text-xs [&_svg:not([class*='size-'])]:size-3",
        sm: "h-7 rounded-sm px-2.5 text-xs [&_svg:not([class*='size-'])]:size-4",
        default: "h-8 rounded-lg px-2.5 text-sm [&_svg:not([class*='size-'])]:size-4",
        lg: "h-9 rounded-lg px-2.5 text-sm [&_svg:not([class*='size-'])]:size-4",
      },
      rounded: { true: 'rounded-full', false: '' },
    },
    defaultVariants: { variant: 'default', size: 'default', rounded: false },
  },
)

export interface ButtonProps
  extends Omit<React.ComponentProps<'button'>, 'children'>,
    Omit<VariantProps<typeof buttonVariants>, 'rounded'> {
  /** The label. */
  children?: React.ReactNode
  /** Fully rounded (pill) corners. */
  rounded?: boolean
  /** Icon shown before the label. */
  leftIcon?: React.ReactNode
  /** Icon shown after the label. */
  rightIcon?: React.ReactNode
  /** Keyboard shortcut hint shown after the label, for example <kbd>⌘K</kbd>. */
  kbd?: React.ReactNode
  /** Render as the child element (for example a link) instead of a <button>. */
  asChild?: boolean
}

function Button({
  className,
  variant,
  size,
  rounded = false,
  leftIcon,
  rightIcon,
  kbd,
  asChild = false,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size, rounded }), className)
  const common = {
    'data-slot': 'button',
    'data-variant': variant ?? 'default',
    'data-size': size ?? 'default',
    className: classes,
    ...props,
  }

  if (asChild) {
    return <Slot.Root {...common}>{children}</Slot.Root>
  }
  return (
    <button {...common}>
      {leftIcon}
      {children}
      {rightIcon}
      {kbd}
    </button>
  )
}

export { Button, buttonVariants }
