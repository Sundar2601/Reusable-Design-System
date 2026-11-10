import * as React from 'react'
import { AlertTriangle, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../Collapsible'

export interface StackFrame {
  fn: string
  file: string
  line: number
  column?: number
  /** Dim frames from node_modules or internals. */
  internal?: boolean
}

export interface StackTraceProps extends Omit<React.ComponentProps<'div'>, 'children'> {
  /** Error name, for example "TypeError". */
  name: string
  message: string
  frames: StackFrame[]
  defaultOpen?: boolean
}

/** Stack Trace. Collapsible error with frames and highlighted file:line. */
function StackTrace({ name, message, frames, defaultOpen = true, className, ...props }: StackTraceProps) {
  return (
    <Collapsible defaultOpen={defaultOpen} asChild>
      <div data-slot="ai-stack-trace" className={cn('w-full overflow-hidden rounded-lg bg-card inset-ring-1 inset-ring-border', className)} {...props}>
        <CollapsibleTrigger className="group flex w-full cursor-pointer items-start gap-2 px-3 py-2 text-left text-sm outline-none">
          <AlertTriangle className="mt-0.5 size-4 shrink-0 text-text-destructive" />
          <span className="flex-1">
            <span className="font-medium text-text-destructive">{name}</span>
            <span className="text-foreground">: {message}</span>
          </span>
          <ChevronDown className="mt-0.5 size-4 shrink-0 text-muted-foreground transition-transform group-data-[state=open]:rotate-180" />
        </CollapsibleTrigger>
        <CollapsibleContent>
          <ol className="border-t border-border bg-muted py-1 font-mono text-xs">
            {frames.map((f, i) => (
              <li key={i} className={cn('flex gap-2 px-3 py-0.5', f.internal && 'opacity-50')}>
                <span className="text-muted-foreground">at</span>
                <span className="text-foreground">{f.fn}</span>
                <span className="text-muted-foreground">
                  (<span className="text-primary underline-offset-2">{f.file}</span>
                  <span className="rounded-sm bg-card px-1 text-text-destructive">
                    :{f.line}
                    {f.column != null && `:${f.column}`}
                  </span>
                  )
                </span>
              </li>
            ))}
          </ol>
        </CollapsibleContent>
      </div>
    </Collapsible>
  )
}

export { StackTrace }
