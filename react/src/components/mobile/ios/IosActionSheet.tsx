import * as React from 'react'
import { cn } from '@/lib/utils'

export interface IosActionSheetAction {
  label: string
  destructive?: boolean
  onClick?: () => void
}

/** iOS Action Sheet: grouped actions card (14px radius) with a separate bold Cancel button. */
export interface IosActionSheetProps extends Omit<React.ComponentProps<'div'>, 'title'> {
  title?: string
  message?: string
  actions: IosActionSheetAction[]
  cancelLabel?: string
  onCancel?: () => void
}

function IosActionSheet({ className, title, message, actions, cancelLabel = 'Cancel', onCancel, ...props }: IosActionSheetProps) {
  return (
    <div data-slot="ios-action-sheet" className={cn('flex w-full flex-col gap-2 px-2 font-[system-ui,-apple-system,sans-serif]', className)} {...props}>
      <div className="overflow-hidden rounded-[14px] bg-popover/90 text-popover-foreground backdrop-blur-xl">
        {(title || message) && (
          <div className="px-4 py-3.5 text-center">
            {title && <div className="text-[13px] leading-[18px] font-semibold text-muted-foreground">{title}</div>}
            {message && <div className="text-[13px] leading-[18px] text-muted-foreground">{message}</div>}
          </div>
        )}
        {actions.map((a) => (
          <button
            key={a.label}
            type="button"
            data-slot="ios-action-sheet-action"
            onClick={a.onClick}
            className={cn(
              'block h-14 w-full cursor-pointer border-t border-border text-[20px] outline-none active:bg-muted',
              a.destructive ? 'text-[color:var(--ios-destructive,#ff3b30)]' : 'text-[color:var(--ios-tint,#007aff)]',
            )}
          >
            {a.label}
          </button>
        ))}
      </div>
      <button
        type="button"
        data-slot="ios-action-sheet-cancel"
        onClick={onCancel}
        className="h-14 w-full cursor-pointer rounded-[14px] bg-popover text-[20px] font-semibold text-[color:var(--ios-tint,#007aff)] outline-none active:bg-muted"
      >
        {cancelLabel}
      </button>
    </div>
  )
}

export { IosActionSheet }
