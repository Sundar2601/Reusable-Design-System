import * as React from 'react'
import { cn } from '@/lib/utils'

/**
 * Skeleton. Figma component "Skeleton". Size and shape come from `className`
 * (for example `h-4 w-48` or `size-10 rounded-full`).
 */
function Skeleton({ className, ...props }: React.ComponentProps<'div'>) {
  return <div data-slot="skeleton" className={cn('animate-pulse rounded-lg bg-muted', className)} {...props} />
}

export { Skeleton }
