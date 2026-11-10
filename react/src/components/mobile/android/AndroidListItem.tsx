import * as React from 'react'
import { cn } from '@/lib/utils'

/**
 * Android list item (Material 3). Figma "List Item".
 * One, two or three line rows (56 / 72 / 88dp) with leading and trailing slots.
 */
export interface AndroidListItemProps extends Omit<React.ComponentProps<'div'>, 'title'> {
  headline: React.ReactNode
  supportingText?: React.ReactNode
  overline?: React.ReactNode
  /** Leading icon, avatar or checkbox. */
  leading?: React.ReactNode
  /** Trailing text, icon or switch. */
  trailing?: React.ReactNode
  /** Draws a bottom divider. */
  divider?: boolean
  selected?: boolean
  /** Number of supporting-text lines (3 allows wrapping to two lines). */
  lines?: 1 | 2 | 3
}

function AndroidListItem({ headline, supportingText, overline, leading, trailing, divider, selected, lines, onClick, className, ...props }: AndroidListItemProps) {
  const count = lines ?? (supportingText ? 2 : 1)
  return (
    <div
      data-slot="android-list-item"
      data-state={selected ? 'selected' : undefined}
      data-lines={count}
      onClick={onClick}
      className={cn(
        'flex w-full items-center gap-4 px-4 py-2 text-foreground transition-colors',
        count === 1 && 'min-h-14',
        count === 2 && 'min-h-18',
        count === 3 && 'min-h-22 items-start py-3',
        onClick && 'cursor-pointer hover:bg-foreground/8 active:bg-foreground/12',
        selected && 'bg-primary/10',
        divider && 'border-b border-border',
        className,
      )}
      {...props}
    >
      {leading && <span className="flex shrink-0 items-center text-muted-foreground [&_svg]:size-6">{leading}</span>}
      <span className="flex min-w-0 flex-1 flex-col">
        {overline && <span className="text-[11px] leading-4 font-medium tracking-wide text-muted-foreground">{overline}</span>}
        <span className="truncate text-base leading-6">{headline}</span>
        {supportingText && <span className={cn('text-sm leading-5 text-muted-foreground', count === 3 ? 'line-clamp-2' : 'truncate')}>{supportingText}</span>}
      </span>
      {trailing && <span className="flex shrink-0 items-center text-xs text-muted-foreground [&_svg]:size-6">{trailing}</span>}
    </div>
  )
}

export { AndroidListItem }
