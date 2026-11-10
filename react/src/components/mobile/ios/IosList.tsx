import * as React from 'react'
import { ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

/** iOS List (inset grouped): uppercase 13px header, rounded 10px group, hairline separators, optional footer. */
export interface IosListProps extends Omit<React.ComponentProps<'div'>, 'title'> {
  /** Section header (rendered uppercase). */
  header?: string
  /** Section footer note. */
  footer?: string
}

function IosList({ className, header, footer, children, ...props }: IosListProps) {
  return (
    <div data-slot="ios-list" className={cn('w-full font-[system-ui,-apple-system,sans-serif]', className)} {...props}>
      {header && <div className="px-4 pb-1.5 text-[13px] text-muted-foreground uppercase">{header}</div>}
      <ul className="overflow-hidden rounded-[10px] bg-card text-card-foreground [&>li:not(:last-child)]:after:absolute [&>li:not(:last-child)]:after:right-0 [&>li:not(:last-child)]:after:bottom-0 [&>li:not(:last-child)]:after:left-4 [&>li:not(:last-child)]:after:h-px [&>li:not(:last-child)]:after:bg-border">
        {children}
      </ul>
      {footer && <div className="px-4 pt-1.5 text-[13px] text-muted-foreground">{footer}</div>}
    </div>
  )
}

/** iOS List Row: min 44px, leading slot, title + subtitle, trailing value, chevron or custom accessory. */
export interface IosListRowProps extends Omit<React.ComponentProps<'li'>, 'title' | 'value'> {
  title: React.ReactNode
  subtitle?: React.ReactNode
  /** Leading icon or avatar. */
  leading?: React.ReactNode
  /** Trailing secondary text. */
  value?: React.ReactNode
  /** Show a disclosure chevron. */
  chevron?: boolean
  /** Custom trailing accessory (for example an IosSwitch). */
  accessory?: React.ReactNode
  destructive?: boolean
}

function IosListRow({ className, title, subtitle, leading, value, chevron = false, accessory, destructive = false, onClick, ...props }: IosListRowProps) {
  return (
    <li
      data-slot="ios-list-row"
      onClick={onClick}
      className={cn(
        'relative flex min-h-11 items-center gap-3 px-4 py-2',
        onClick && 'cursor-pointer active:bg-muted',
        className,
      )}
      {...props}
    >
      {leading && <span className="flex shrink-0 items-center [&_svg]:size-7">{leading}</span>}
      <span className="flex min-w-0 flex-1 flex-col">
        <span className={cn('truncate text-[17px] leading-[22px]', destructive ? 'text-[color:var(--ios-destructive,#ff3b30)]' : 'text-foreground')}>{title}</span>
        {subtitle && <span className="truncate text-[15px] leading-5 text-muted-foreground">{subtitle}</span>}
      </span>
      {value && <span className="shrink-0 text-[17px] text-muted-foreground">{value}</span>}
      {accessory}
      {chevron && <ChevronRight className="size-5 shrink-0 text-muted-foreground/60" strokeWidth={2.5} />}
    </li>
  )
}

export { IosList, IosListRow }
