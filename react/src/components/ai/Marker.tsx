import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

/**
 * Marker. Figma "Marker": a quiet inline annotation inside a thread, such as
 * "Today", "Conversation compacted" or "Model switched to GPT".
 * - `variant` default | border (underline rule) | separator (rule on both sides)
 * - `icon` optional leading icon
 */
const markerVariants = cva('group/marker relative flex min-h-4 w-full items-center gap-2 text-start text-sm text-muted-foreground', {
  variants: {
    variant: {
      default: '',
      border: 'border-b border-border pb-2',
      separator:
        "before:me-1 before:h-px before:min-w-0 before:flex-1 before:bg-border before:content-[''] after:ms-1 after:h-px after:min-w-0 after:flex-1 after:bg-border after:content-['']",
    },
  },
  defaultVariants: { variant: 'default' },
})

export interface MarkerProps extends React.ComponentProps<'div'>, VariantProps<typeof markerVariants> {
  /** Icon shown before the text. */
  icon?: React.ReactNode
}

function Marker({ className, variant, icon, children, ...props }: MarkerProps) {
  return (
    <div data-slot="marker" data-variant={variant ?? 'default'} role="separator" className={cn(markerVariants({ variant }), className)} {...props}>
      {icon ? (
        <span data-slot="marker-icon" aria-hidden="true" className="inline-flex shrink-0 [&_svg:not([class*='size-'])]:size-4">
          {icon}
        </span>
      ) : null}
      <span
        data-slot="marker-content"
        className="min-w-0 wrap-break-word group-data-[variant=separator]/marker:flex-none group-data-[variant=separator]/marker:text-center"
      >
        {children}
      </span>
    </div>
  )
}

export { Marker, markerVariants }
