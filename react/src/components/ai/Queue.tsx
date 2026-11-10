import * as React from 'react'
import { Check, ChevronDown, Circle, Loader2, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../Collapsible'

/**
 * Queue. Figma component "Queue". A list of tasks grouped into collapsible sections
 * (for example "Todo" and "Completed"), each item with a status.
 */
export type QueueItemStatus = 'pending' | 'in-progress' | 'completed' | 'failed'

function Queue({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="queue"
      className={cn('flex w-full flex-col gap-2 rounded-xl bg-card p-2 text-card-foreground shadow-sm inset-ring-1 inset-ring-border', className)}
      {...props}
    />
  )
}

function QueueSection({
  className,
  label,
  count,
  defaultOpen = true,
  children,
  ...props
}: Omit<React.ComponentProps<typeof Collapsible>, 'children'> & { label: React.ReactNode; count?: number; children?: React.ReactNode }) {
  return (
    <Collapsible data-slot="queue-section" defaultOpen={defaultOpen} className={cn('group/queue flex flex-col', className)} {...props}>
      <CollapsibleTrigger className="flex w-full cursor-pointer items-center justify-between gap-2 rounded-md px-2 py-1.5 text-sm font-medium text-muted-foreground outline-none hover:bg-muted focus-visible:inset-ring-1 focus-visible:inset-ring-ring">
        <span>
          {label}
          {count !== undefined && <span className="ml-1.5 font-normal">{count}</span>}
        </span>
        <ChevronDown className="size-4 transition-transform group-data-[state=open]/queue:rotate-180" />
      </CollapsibleTrigger>
      <CollapsibleContent>
        <ul className="flex flex-col gap-0.5 pt-1">{children}</ul>
      </CollapsibleContent>
    </Collapsible>
  )
}

function QueueItem({
  className,
  status = 'pending',
  description,
  children,
  ...props
}: Omit<React.ComponentProps<'li'>, 'children'> & { status?: QueueItemStatus; description?: React.ReactNode; children?: React.ReactNode }) {
  return (
    <li data-slot="queue-item" data-status={status} className={cn('flex items-start gap-2.5 rounded-md px-2 py-1.5 text-sm hover:bg-muted', className)} {...props}>
      <span
        className={cn(
          'mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full [&_svg]:size-3',
          status === 'completed' && 'bg-primary text-primary-foreground',
          status === 'failed' && 'bg-destructive-subtle text-text-destructive',
          (status === 'pending' || status === 'in-progress') && 'text-muted-foreground',
        )}
      >
        {status === 'completed' ? <Check /> : status === 'failed' ? <X /> : status === 'in-progress' ? <Loader2 className="animate-spin" /> : <Circle />}
      </span>
      <span className="flex min-w-0 flex-col">
        <span className={cn(status === 'completed' && 'text-muted-foreground line-through')}>{children}</span>
        {description && <span className="text-xs text-muted-foreground">{description}</span>}
      </span>
    </li>
  )
}

export { Queue, QueueSection, QueueItem }
