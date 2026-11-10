import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { CircleAlert, CircleCheck, Info, TriangleAlert, X } from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * Banner. Extended component (beyond shadcn): full-width message strip for page-level notices.
 * - `variant` -> info | success | warning | destructive
 * - `title` / `children` (description), `action` (e.g. a Button), `onDismiss` shows a close button
 */
const bannerVariants = cva('flex w-full items-center gap-3 px-4 py-2.5 text-sm [&_svg]:shrink-0', {
  variants: {
    variant: {
      info: 'bg-muted text-foreground',
      success: 'bg-green-100 text-green-900',
      warning: 'bg-amber-100 text-amber-900',
      destructive: 'bg-destructive-subtle text-text-destructive',
    },
  },
  defaultVariants: { variant: 'info' },
})

const icons = {
  info: Info,
  success: CircleCheck,
  warning: TriangleAlert,
  destructive: CircleAlert,
} as const

export interface BannerProps
  extends Omit<React.ComponentProps<'div'>, 'title'>,
    VariantProps<typeof bannerVariants> {
  title?: React.ReactNode
  /** Element shown on the right, for example a Button. */
  action?: React.ReactNode
  /** When set, a close button is shown and calls this on click. */
  onDismiss?: () => void
}

function Banner({ className, variant, title, children, action, onDismiss, ...props }: BannerProps) {
  const Icon = icons[variant ?? 'info']
  return (
    <div
      data-slot="banner"
      data-variant={variant ?? 'info'}
      role={variant === 'destructive' || variant === 'warning' ? 'alert' : 'status'}
      className={cn(bannerVariants({ variant }), className)}
      {...props}
    >
      <Icon className="size-4" />
      <div className="flex min-w-0 flex-1 flex-wrap items-baseline gap-x-2">
        {title && <span className="font-medium">{title}</span>}
        {children && <span className="opacity-80">{children}</span>}
      </div>
      {action}
      {onDismiss && (
        <button
          type="button"
          aria-label="Dismiss"
          onClick={onDismiss}
          className="cursor-pointer rounded-sm outline-none hover:opacity-70 focus-visible:shadow-focus-ring"
        >
          <X className="size-4" />
        </button>
      )}
    </div>
  )
}

export { Banner, bannerVariants }
