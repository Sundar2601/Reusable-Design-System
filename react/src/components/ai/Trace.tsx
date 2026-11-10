import * as React from 'react'
import { Check, ChevronDown, CircleAlert, Circle, LoaderCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * Trace. Figma "Trace": the collapsible list of steps (thinking, tool calls) an assistant took.
 *   <Trace defaultOpen title="Thought for 4s">
 *     <TraceStep status="done" title="Searched the web" description="3 results" />
 *     <TraceStep status="running" title="Reading page" />
 *   </Trace>
 * - Step `status` pending | running | done | error. Open state is uncontrolled, or controlled with `open` / `onOpenChange`.
 */
export interface TraceProps extends Omit<React.ComponentProps<'div'>, 'title'> {
  title?: React.ReactNode
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
}

function Trace({ className, title = 'Trace', open, defaultOpen = false, onOpenChange, children, ...props }: TraceProps) {
  const [inner, setInner] = React.useState(defaultOpen)
  const isOpen = open ?? inner
  const contentId = React.useId()
  return (
    <div data-slot="trace" data-state={isOpen ? 'open' : 'closed'} className={cn('flex w-full flex-col gap-2 text-sm', className)} {...props}>
      <button
        type="button"
        data-slot="trace-trigger"
        aria-expanded={isOpen}
        aria-controls={contentId}
        onClick={() => {
          setInner(!isOpen)
          onOpenChange?.(!isOpen)
        }}
        className="inline-flex w-fit cursor-pointer items-center gap-1 rounded-sm text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:inset-ring-1 focus-visible:inset-ring-ring"
      >
        {title}
        <ChevronDown className={cn('size-4 transition-transform', isOpen && 'rotate-180')} aria-hidden="true" />
      </button>
      {isOpen ? (
        <ol id={contentId} data-slot="trace-content" className="flex flex-col gap-3 ps-1">
          {children}
        </ol>
      ) : null}
    </div>
  )
}

export type TraceStepStatus = 'pending' | 'running' | 'done' | 'error'

export interface TraceStepProps extends Omit<React.ComponentProps<'li'>, 'title'> {
  status?: TraceStepStatus
  title: React.ReactNode
  description?: React.ReactNode
  /** Replaces the status icon. */
  icon?: React.ReactNode
}

const statusIcon: Record<TraceStepStatus, React.ReactNode> = {
  pending: <Circle className="text-muted-foreground" />,
  running: <LoaderCircle className="animate-spin text-foreground" />,
  done: <Check className="text-muted-foreground" />,
  error: <CircleAlert className="text-text-destructive" />,
}

function TraceStep({ className, status = 'done', title, description, icon, children, ...props }: TraceStepProps) {
  return (
    <li data-slot="trace-step" data-status={status} className={cn('relative flex gap-2', className)} {...props}>
      <span aria-hidden="true" className="mt-0.5 flex size-4 shrink-0 items-center justify-center [&_svg]:size-4">
        {icon ?? statusIcon[status]}
      </span>
      <div className="flex min-w-0 flex-col gap-0.5">
        <span className={cn('font-medium', status === 'pending' && 'text-muted-foreground', status === 'error' && 'text-text-destructive')}>{title}</span>
        {description ? <span className="text-xs text-muted-foreground">{description}</span> : null}
        {children}
      </div>
    </li>
  )
}

export { Trace, TraceStep }
