import * as React from 'react'
import { cn } from '@/lib/utils'
import { Avatar, AvatarFallback, AvatarImage } from './Avatar'

/**
 * NotificationItem. Extended component (beyond shadcn): one row of a notification list.
 * - `title`, `description`, `time` -> content
 * - `unread` -> shows a dot and highlights the row
 * - `avatarSrc` / `avatarFallback` -> leading Avatar; `actions` -> elements shown under the text
 */
export interface NotificationItemProps extends Omit<React.ComponentProps<'div'>, 'title'> {
  title: React.ReactNode
  description?: React.ReactNode
  time?: string
  unread?: boolean
  avatarSrc?: string
  avatarFallback?: string
  /** Elements shown under the text, for example Buttons. */
  actions?: React.ReactNode
}

function NotificationItem({
  className,
  title,
  description,
  time,
  unread = false,
  avatarSrc,
  avatarFallback = '?',
  actions,
  ...props
}: NotificationItemProps) {
  return (
    <div
      data-slot="notification-item"
      data-unread={unread}
      className={cn(
        'flex w-96 items-start gap-3 rounded-lg p-3 text-sm transition-colors hover:bg-muted data-[unread=true]:bg-muted/50',
        className,
      )}
      {...props}
    >
      <Avatar>
        {avatarSrc && <AvatarImage src={avatarSrc} alt="" />}
        <AvatarFallback>{avatarFallback}</AvatarFallback>
      </Avatar>
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <div className="flex items-baseline justify-between gap-2">
          <span className="font-medium text-foreground">{title}</span>
          {time && <span className="shrink-0 text-xs text-muted-foreground">{time}</span>}
        </div>
        {description && <span className="text-muted-foreground">{description}</span>}
        {actions && <div className="mt-1 flex items-center gap-2">{actions}</div>}
      </div>
      {unread && <span data-slot="notification-item-dot" aria-label="Unread" className="mt-1.5 size-2 shrink-0 rounded-full bg-primary" />}
    </div>
  )
}

export { NotificationItem }
