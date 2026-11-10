import * as React from 'react'
import { cn } from '@/lib/utils'

export interface IosAlertAction {
  label: string
  /** default = tint, cancel = bold tint, destructive = red. */
  style?: 'default' | 'cancel' | 'destructive'
  onClick?: () => void
}

/** iOS Alert: 270px wide, 14px radius, centered title / message, hairline-separated actions (stacked when 3+). */
export interface IosAlertProps extends Omit<React.ComponentProps<'div'>, 'title'> {
  title: string
  message?: string
  actions?: IosAlertAction[]
  /** Render the dimmed full-size backdrop behind the alert. */
  backdrop?: boolean
}

function IosAlert({ className, title, message, actions = [{ label: 'OK', style: 'cancel' }], backdrop = false, ...props }: IosAlertProps) {
  const stacked = actions.length !== 2
  const card = (
    <div
      role="alertdialog"
      aria-label={title}
      data-slot="ios-alert"
      className={cn('w-[270px] overflow-hidden rounded-[14px] bg-popover/90 text-center font-[system-ui,-apple-system,sans-serif] text-popover-foreground backdrop-blur-xl', className)}
      {...props}
    >
      <div className="px-4 pt-5 pb-4">
        <div className="text-[17px] leading-[22px] font-semibold">{title}</div>
        {message && <div className="mt-0.5 text-[13px] leading-[18px]">{message}</div>}
      </div>
      <div className={cn('flex border-t border-border', stacked ? 'flex-col' : 'flex-row')}>
        {actions.map((a, i) => (
          <button
            key={a.label}
            type="button"
            data-slot="ios-alert-action"
            onClick={a.onClick}
            className={cn(
              'h-11 flex-1 cursor-pointer text-[17px] outline-none active:bg-muted',
              a.style === 'destructive' ? 'text-[color:var(--ios-destructive,#ff3b30)]' : 'text-[color:var(--ios-tint,#007aff)]',
              a.style === 'cancel' && 'font-semibold',
              i > 0 && (stacked ? 'border-t border-border' : 'border-l border-border'),
            )}
          >
            {a.label}
          </button>
        ))}
      </div>
    </div>
  )
  if (!backdrop) return card
  return <div className="flex h-full min-h-[320px] w-full items-center justify-center bg-black/40 p-4">{card}</div>
}

export { IosAlert }
