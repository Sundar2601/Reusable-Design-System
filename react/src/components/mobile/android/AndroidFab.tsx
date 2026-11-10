import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

/**
 * Android floating action button (Material 3). Figma "FAB".
 * - `size`: small 40dp, default 56dp, large 96dp. Passing `label` makes it an extended FAB.
 */
const fabVariants = cva(
  'inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 font-medium shadow-md outline-none transition-all hover:shadow-lg focus-visible:shadow-focus-ring active:shadow-md disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-primary-foreground',
        secondary: 'bg-secondary text-secondary-foreground',
        surface: 'bg-muted text-foreground',
      },
      size: {
        small: 'size-10 rounded-xl [&_svg]:size-6',
        default: 'size-14 rounded-2xl [&_svg]:size-6',
        large: 'size-24 rounded-[28px] [&_svg]:size-9',
      },
    },
    defaultVariants: { variant: 'primary', size: 'default' },
  },
)

export interface AndroidFabProps extends Omit<React.ComponentProps<'button'>, 'children'>, VariantProps<typeof fabVariants> {
  icon: React.ReactNode
  /** When set, renders an extended FAB with a text label. */
  label?: string
}

function AndroidFab({ variant, size, icon, label, className, ...props }: AndroidFabProps) {
  return (
    <button
      type="button"
      data-slot="android-fab"
      aria-label={label ? undefined : (props['aria-label'] ?? 'Action')}
      className={cn(fabVariants({ variant, size }), label && 'h-14 w-auto rounded-2xl px-4 text-sm', className)}
      {...props}
    >
      {icon}
      {label}
    </button>
  )
}

export { AndroidFab, fabVariants as androidFabVariants }
