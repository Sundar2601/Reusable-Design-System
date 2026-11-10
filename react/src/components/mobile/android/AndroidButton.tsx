import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

/**
 * Android button (Material 3). Figma "Button".
 * - `variant`: filled | tonal | outlined | elevated | text
 * 40dp tall pill with a state layer on hover / press.
 */
const androidButtonVariants = cva(
  'inline-flex h-10 shrink-0 cursor-pointer items-center justify-center gap-2 rounded-full px-6 text-sm font-medium whitespace-nowrap outline-none transition-all focus-visible:shadow-focus-ring disabled:pointer-events-none disabled:opacity-40 [&_svg]:size-4.5 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        filled: 'bg-primary text-primary-foreground hover:opacity-90 hover:shadow-sm active:opacity-80',
        tonal: 'bg-secondary text-secondary-foreground hover:opacity-90 active:opacity-80',
        outlined: 'bg-transparent text-foreground inset-ring-1 inset-ring-border hover:bg-foreground/8 active:bg-foreground/12',
        elevated: 'bg-muted text-foreground shadow-sm hover:shadow-md active:bg-foreground/12',
        text: 'bg-transparent px-3 text-foreground hover:bg-foreground/8 active:bg-foreground/12',
      },
    },
    defaultVariants: { variant: 'filled' },
  },
)

export interface AndroidButtonProps extends React.ComponentProps<'button'>, VariantProps<typeof androidButtonVariants> {
  /** Leading icon. */
  icon?: React.ReactNode
}

function AndroidButton({ variant, icon, className, children, ...props }: AndroidButtonProps) {
  return (
    <button
      type="button"
      data-slot="android-button"
      data-variant={variant ?? 'filled'}
      className={cn(androidButtonVariants({ variant }), icon && variant !== 'text' && 'pl-4', className)}
      {...props}
    >
      {icon}
      {children}
    </button>
  )
}

export { AndroidButton, androidButtonVariants }
