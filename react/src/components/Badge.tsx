import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { Slot } from 'radix-ui'
import { cn } from '@/lib/utils'

/**
 * Badge. Figma component "Badge".
 * - Figma `Variant` -> `variant` (default | secondary | destructive | outline | ghost | link)
 * - Icons: pass an svg as a child; it is sized to 12px.
 * - `asChild` renders the child (for example a link) instead of a <span>.
 */
const badgeVariants = cva(
  [
    'inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-full px-2 text-xs font-medium whitespace-nowrap transition-colors',
    'outline-none focus-visible:inset-ring-1 focus-visible:inset-ring-ring focus-visible:shadow-focus-ring',
    'aria-invalid:inset-ring-text-destructive aria-invalid:shadow-destructive-ring',
    '[&>svg]:pointer-events-none [&>svg]:size-3',
  ],
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground [a&]:hover:opacity-80',
        secondary: 'bg-secondary text-secondary-foreground [a&]:hover:opacity-80',
        destructive: 'bg-destructive-subtle text-text-destructive [a&]:hover:opacity-80',
        outline: 'bg-background text-foreground inset-ring-1 inset-ring-border [a&]:hover:bg-muted',
        ghost: 'bg-transparent text-foreground [a&]:hover:bg-muted',
        link: 'bg-transparent text-foreground [a&]:hover:underline',
      },
    },
    defaultVariants: { variant: 'default' },
  },
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<'span'> & VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : 'span'
  return (
    <Comp
      data-slot="badge"
      data-variant={variant ?? 'default'}
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
