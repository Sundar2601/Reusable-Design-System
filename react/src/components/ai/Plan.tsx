import * as React from 'react'
import { ChevronsUpDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '../Button'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../Collapsible'
import { Spinner } from '../Spinner'

/**
 * Plan. Figma component "Plan". A card with a title, description and a collapsible body for the steps of a plan.
 * While `isStreaming` the title and description show a loading shimmer state.
 */
function Plan({
  className,
  isStreaming = false,
  defaultOpen = true,
  ...props
}: React.ComponentProps<typeof Collapsible> & { isStreaming?: boolean }) {
  return (
    <Collapsible
      data-slot="plan"
      data-streaming={isStreaming || undefined}
      defaultOpen={defaultOpen}
      className={cn('w-full rounded-xl bg-card text-card-foreground shadow-sm inset-ring-1 inset-ring-border', className)}
      {...props}
    />
  )
}

function PlanHeader({
  className,
  title,
  description,
  isStreaming,
  ...props
}: Omit<React.ComponentProps<'div'>, 'title'> & { title: React.ReactNode; description?: React.ReactNode; isStreaming?: boolean }) {
  return (
    <div data-slot="plan-header" className={cn('flex items-start justify-between gap-4 p-4', className)} {...props}>
      <div className="flex min-w-0 flex-col gap-1">
        <h3 className="flex items-center gap-2 text-base font-semibold">
          {title}
          {isStreaming && <Spinner className="size-3.5 text-muted-foreground" />}
        </h3>
        {description && <p className="text-sm text-muted-foreground">{description}</p>}
      </div>
      <CollapsibleTrigger asChild>
        <Button variant="ghost" size="sm" aria-label="Toggle plan">
          <ChevronsUpDown />
        </Button>
      </CollapsibleTrigger>
    </div>
  )
}

function PlanContent({ className, ...props }: React.ComponentProps<typeof CollapsibleContent>) {
  return <CollapsibleContent data-slot="plan-content" className={cn('border-t border-border p-4 text-sm', className)} {...props} />
}

function PlanFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return <div data-slot="plan-footer" className={cn('flex items-center justify-end gap-2 border-t border-border p-3', className)} {...props} />
}

export { Plan, PlanHeader, PlanContent, PlanFooter }
