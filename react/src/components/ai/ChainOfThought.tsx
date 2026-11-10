import * as React from 'react'
import { Check, ChevronDown, Circle, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Badge } from '../Badge'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../Collapsible'

/**
 * Chain of Thought. Figma component "Chain of Thought". A collapsible list of reasoning steps,
 * each with a status (`complete` | `active` | `pending`), an optional description, and search-result badges.
 */
export type ChainOfThoughtStatus = 'complete' | 'active' | 'pending'

function ChainOfThought({
  className,
  header = 'Chain of Thought',
  defaultOpen = true,
  children,
  ...props
}: Omit<React.ComponentProps<typeof Collapsible>, 'children'> & { header?: React.ReactNode; children?: React.ReactNode }) {
  return (
    <Collapsible
      data-slot="chain-of-thought"
      defaultOpen={defaultOpen}
      className={cn('group/cot flex w-full flex-col gap-3', className)}
      {...props}
    >
      <CollapsibleTrigger className="flex w-fit cursor-pointer items-center gap-2 rounded-sm text-sm text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:inset-ring-1 focus-visible:inset-ring-ring">
        <span className="font-medium">{header}</span>
        <ChevronDown className="size-4 transition-transform group-data-[state=open]/cot:rotate-180" />
      </CollapsibleTrigger>
      <CollapsibleContent data-slot="chain-of-thought-content" className="flex flex-col">
        {children}
      </CollapsibleContent>
    </Collapsible>
  )
}

function ChainOfThoughtStep({
  className,
  label,
  description,
  status = 'complete',
  icon,
  last,
  children,
  ...props
}: Omit<React.ComponentProps<'div'>, 'children'> & {
  label: React.ReactNode
  description?: React.ReactNode
  status?: ChainOfThoughtStatus
  /** Replaces the default status icon. */
  icon?: React.ReactNode
  /** Hides the connector line below the step. */
  last?: boolean
  children?: React.ReactNode
}) {
  return (
    <div
      data-slot="chain-of-thought-step"
      data-status={status}
      className={cn('flex gap-3 text-sm', status === 'pending' ? 'text-muted-foreground/60' : 'text-foreground', className)}
      {...props}
    >
      <div className="flex flex-col items-center">
        <span
          className={cn(
            'flex size-5 shrink-0 items-center justify-center rounded-full inset-ring-1 inset-ring-border [&_svg]:size-3',
            status === 'complete' && 'bg-primary text-primary-foreground inset-ring-primary',
            status === 'active' && 'bg-background text-foreground',
            status === 'pending' && 'bg-background text-muted-foreground',
          )}
        >
          {icon ??
            (status === 'complete' ? <Check /> : status === 'active' ? <Loader2 className="animate-spin" /> : <Circle />)}
        </span>
        {!last && <span className="my-1 w-px flex-1 bg-border" />}
      </div>
      <div className={cn('flex min-w-0 flex-1 flex-col gap-1.5', !last && 'pb-4')}>
        <div className="font-medium leading-5">{label}</div>
        {description && <div className="text-muted-foreground">{description}</div>}
        {children}
      </div>
    </div>
  )
}

function ChainOfThoughtSearchResults({ className, ...props }: React.ComponentProps<'div'>) {
  return <div data-slot="chain-of-thought-search-results" className={cn('flex flex-wrap gap-1.5', className)} {...props} />
}

function ChainOfThoughtSearchResult({ className, ...props }: React.ComponentProps<typeof Badge>) {
  return <Badge variant="secondary" className={cn('font-normal', className)} {...props} />
}

export { ChainOfThought, ChainOfThoughtStep, ChainOfThoughtSearchResults, ChainOfThoughtSearchResult }
