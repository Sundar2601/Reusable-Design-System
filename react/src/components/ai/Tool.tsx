import * as React from 'react'
import { CheckCircle2, ChevronDown, Circle, Clock, Wrench, XCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Badge } from '../Badge'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../Collapsible'
import { Spinner } from '../Spinner'

/**
 * Tool. Figma component "Tool". A collapsible card for a tool call: name, status badge,
 * input parameters and output / error.
 */
export type ToolState = 'input-streaming' | 'input-available' | 'output-available' | 'output-error'

const stateMeta: Record<ToolState, { label: string; variant: 'secondary' | 'outline' | 'destructive'; icon: React.ReactNode }> = {
  'input-streaming': { label: 'Pending', variant: 'secondary', icon: <Circle /> },
  'input-available': { label: 'Running', variant: 'secondary', icon: <Clock /> },
  'output-available': { label: 'Completed', variant: 'outline', icon: <CheckCircle2 /> },
  'output-error': { label: 'Error', variant: 'destructive', icon: <XCircle /> },
}

function Tool({ className, ...props }: React.ComponentProps<typeof Collapsible>) {
  return (
    <Collapsible
      data-slot="tool"
      className={cn('group/tool w-full rounded-lg bg-card text-card-foreground inset-ring-1 inset-ring-border', className)}
      {...props}
    />
  )
}

function ToolHeader({
  className,
  name,
  state = 'input-streaming',
  ...props
}: Omit<React.ComponentProps<typeof CollapsibleTrigger>, 'children'> & { name: string; state?: ToolState }) {
  const meta = stateMeta[state]
  return (
    <CollapsibleTrigger
      data-slot="tool-header"
      className={cn(
        'flex w-full cursor-pointer items-center justify-between gap-4 rounded-lg p-3 outline-none focus-visible:inset-ring-1 focus-visible:inset-ring-ring',
        className,
      )}
      {...props}
    >
      <span className="flex items-center gap-2 text-sm font-medium">
        <Wrench className="size-4 text-muted-foreground" />
        {name}
        <Badge variant={meta.variant}>
          {state === 'input-available' ? <Spinner /> : meta.icon}
          {meta.label}
        </Badge>
      </span>
      <ChevronDown className="size-4 text-muted-foreground transition-transform group-data-[state=open]/tool:rotate-180" />
    </CollapsibleTrigger>
  )
}

function ToolContent({ className, ...props }: React.ComponentProps<typeof CollapsibleContent>) {
  return <CollapsibleContent data-slot="tool-content" className={cn('flex flex-col gap-4 border-t border-border p-3', className)} {...props} />
}

function ToolInput({ className, input }: { className?: string; input: unknown }) {
  return (
    <div data-slot="tool-input" className={cn('flex flex-col gap-2', className)}>
      <h4 className="text-xs font-medium tracking-wide text-muted-foreground uppercase">Parameters</h4>
      <pre className="overflow-x-auto rounded-md bg-muted p-3 font-mono text-xs">{JSON.stringify(input, null, 2)}</pre>
    </div>
  )
}

function ToolOutput({ className, output, errorText }: { className?: string; output?: unknown; errorText?: string }) {
  if (output === undefined && !errorText) return null
  return (
    <div data-slot="tool-output" className={cn('flex flex-col gap-2', className)}>
      <h4 className="text-xs font-medium tracking-wide text-muted-foreground uppercase">{errorText ? 'Error' : 'Result'}</h4>
      <pre
        className={cn(
          'overflow-x-auto rounded-md p-3 font-mono text-xs',
          errorText ? 'bg-destructive-subtle text-text-destructive' : 'bg-muted',
        )}
      >
        {errorText ?? (typeof output === 'string' ? output : JSON.stringify(output, null, 2))}
      </pre>
    </div>
  )
}

export { Tool, ToolHeader, ToolContent, ToolInput, ToolOutput }
