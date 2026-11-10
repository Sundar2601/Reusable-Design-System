import * as React from 'react'
import { cn } from '@/lib/utils'

/**
 * Timeline. Extended component (beyond shadcn): vertical list of events.
 * - `items` -> events with title, optional description, time and icon
 * - item `status` -> complete | current | upcoming (colors the marker)
 */
export interface TimelineItem {
  title: string
  description?: string
  time?: string
  icon?: React.ReactNode
  status?: 'complete' | 'current' | 'upcoming'
}

export interface TimelineProps extends Omit<React.ComponentProps<'ol'>, 'children'> {
  items: TimelineItem[]
}

function Timeline({ className, items, ...props }: TimelineProps) {
  return (
    <ol data-slot="timeline" className={cn('flex flex-col text-sm', className)} {...props}>
      {items.map((item, i) => {
        const status = item.status ?? 'complete'
        const last = i === items.length - 1
        return (
          <li key={i} data-slot="timeline-item" data-status={status} className="flex gap-3">
            <div className="flex flex-col items-center">
              <span
                data-slot="timeline-marker"
                className={cn(
                  'flex size-6 shrink-0 items-center justify-center rounded-full [&_svg]:size-3.5',
                  status === 'complete' && 'bg-primary text-primary-foreground',
                  status === 'current' && 'bg-background text-foreground inset-ring-2 inset-ring-primary',
                  status === 'upcoming' && 'bg-muted text-muted-foreground',
                )}
              >
                {item.icon ?? <span className="size-1.5 rounded-full bg-current" />}
              </span>
              {!last && <span data-slot="timeline-connector" className="my-1 w-px flex-1 bg-border" />}
            </div>
            <div className={cn('flex flex-1 flex-col gap-0.5 pt-0.5', !last && 'pb-6')}>
              <div className="flex items-baseline justify-between gap-4">
                <span className={cn('font-medium', status === 'upcoming' ? 'text-muted-foreground' : 'text-foreground')}>
                  {item.title}
                </span>
                {item.time && <span className="shrink-0 text-xs text-muted-foreground">{item.time}</span>}
              </div>
              {item.description && <span className="text-muted-foreground">{item.description}</span>}
            </div>
          </li>
        )
      })}
    </ol>
  )
}

export { Timeline }
