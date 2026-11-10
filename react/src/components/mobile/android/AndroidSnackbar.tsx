import * as React from 'react'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * Android snackbar (Material 3). Figma "Snackbar".
 * Inverse surface, 48dp tall (single line) with an optional text action and close icon.
 */
export interface AndroidSnackbarProps extends React.ComponentProps<'div'> {
  message: React.ReactNode
  /** Action label, for example "Undo". */
  action?: string
  onAction?: () => void
  /** Shows a close icon. */
  onClose?: () => void
}

function AndroidSnackbar({ message, action, onAction, onClose, className, ...props }: AndroidSnackbarProps) {
  return (
    <div
      role="status"
      data-slot="android-snackbar"
      className={cn('flex min-h-12 w-[344px] max-w-full items-center gap-2 rounded-sm bg-foreground py-1 pr-2 pl-4 text-sm text-background shadow-lg', className)}
      {...props}
    >
      <span className="flex-1 py-2">{message}</span>
      {action && (
        <button type="button" onClick={onAction} className="h-10 cursor-pointer rounded-full px-3 text-sm font-medium text-background underline-offset-4 outline-none hover:bg-background/12 focus-visible:shadow-focus-ring">
          {action}
        </button>
      )}
      {onClose && (
        <button type="button" aria-label="Close" onClick={onClose} className="flex size-10 cursor-pointer items-center justify-center rounded-full outline-none hover:bg-background/12 focus-visible:shadow-focus-ring">
          <X className="size-6" />
        </button>
      )}
    </div>
  )
}

export { AndroidSnackbar }
