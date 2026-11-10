import * as React from 'react'
import { Bot, CheckCircle2, Circle, XCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Badge } from '../Badge'
import { Spinner } from '../Spinner'

export type SubagentStatus = 'pending' | 'running' | 'completed' | 'failed'
export interface SubagentStep {
  label: string
  status: SubagentStatus
}

export interface SubagentProps extends Omit<React.ComponentProps<'div'>, 'children'> {
  name: string
  task: string
  status: SubagentStatus
  steps?: SubagentStep[]
}

const badge: Record<SubagentStatus, { label: string; variant: 'secondary' | 'default' | 'destructive' | 'outline' }> = {
  pending: { label: 'Pending', variant: 'outline' },
  running: { label: 'Running', variant: 'default' },
  completed: { label: 'Completed', variant: 'secondary' },
  failed: { label: 'Failed', variant: 'destructive' },
}

function StepIcon({ status }: { status: SubagentStatus }) {
  if (status === 'running') return <Spinner className="size-4" />
  if (status === 'completed') return <CheckCircle2 className="size-4 text-green-600" />
  if (status === 'failed') return <XCircle className="size-4 text-text-destructive" />
  return <Circle className="size-4 text-muted-foreground" />
}

/** Subagent. Task card showing a delegated agent, its status and steps. */
function Subagent({ name, task, status, steps, className, ...props }: SubagentProps) {
  const b = badge[status]
  return (
    <div data-slot="ai-subagent" data-status={status} className={cn('flex w-96 flex-col gap-3 rounded-lg bg-card p-4 text-card-foreground inset-ring-1 inset-ring-border', className)} {...props}>
      <div className="flex items-center gap-2">
        <Bot className="size-4 text-muted-foreground" />
        <span className="flex-1 text-sm font-medium">{name}</span>
        <Badge variant={b.variant}>{b.label}</Badge>
      </div>
      <p className="text-sm text-muted-foreground">{task}</p>
      {steps && steps.length > 0 && (
        <ol className="flex flex-col gap-1.5 border-t border-border pt-3">
          {steps.map((s) => (
            <li key={s.label} className={cn('flex items-center gap-2 text-sm', s.status === 'pending' && 'text-muted-foreground')}>
              <StepIcon status={s.status} />
              {s.label}
            </li>
          ))}
        </ol>
      )}
    </div>
  )
}

export { Subagent }
