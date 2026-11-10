import * as React from 'react'
import { cn } from '@/lib/utils'

/**
 * Android bottom sheet (Material 3). Figma "Bottom Sheet".
 * 28dp top radius, 32x4 drag handle. This is the sheet surface itself; position it at the
 * bottom of your screen (and add an AndroidScrim for the modal variant).
 */
export interface AndroidBottomSheetProps extends Omit<React.ComponentProps<'div'>, 'title'> {
  title?: React.ReactNode
  /** Show the drag handle. */
  handle?: boolean
  /** Docked (standard) sheets use a lighter surface than modal sheets. */
  variant?: 'modal' | 'standard'
}

function AndroidBottomSheet({ title, handle = true, variant = 'modal', className, children, ...props }: AndroidBottomSheetProps) {
  return (
    <div
      data-slot="android-bottom-sheet"
      data-variant={variant}
      className={cn(
        'flex w-full flex-col rounded-t-[28px] bg-muted pb-6 text-foreground',
        variant === 'modal' ? 'shadow-lg' : 'shadow-sm',
        className,
      )}
      {...props}
    >
      {handle && (
        <div className="flex h-6 items-center justify-center" aria-hidden="true">
          <span className="h-1 w-8 rounded-full bg-muted-foreground/60" />
        </div>
      )}
      {title && <h2 className="px-6 pb-2 text-base font-medium">{title}</h2>}
      <div className="flex flex-col">{children}</div>
    </div>
  )
}

export { AndroidBottomSheet }
