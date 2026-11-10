import * as React from 'react'
import { Brain, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../Collapsible'
import { Spinner } from '../Spinner'

/**
 * Reasoning. Figma component "Reasoning". A collapsible block that shows the model's thinking.
 * While `isStreaming` it shows "Thinking..." with a spinner; afterwards "Thought for N seconds".
 */
export interface ReasoningProps extends Omit<React.ComponentProps<typeof Collapsible>, 'children'> {
  /** True while the model is still producing reasoning. */
  isStreaming?: boolean
  /** Seconds the model thought for. Shown once streaming has finished. */
  duration?: number
  /** Reasoning text. */
  children?: React.ReactNode
}

function Reasoning({ className, isStreaming = false, duration, defaultOpen, children, ...props }: ReasoningProps) {
  return (
    <Collapsible
      data-slot="reasoning"
      data-streaming={isStreaming || undefined}
      defaultOpen={defaultOpen ?? isStreaming}
      className={cn('group/reasoning not-prose flex w-full flex-col gap-2', className)}
      {...props}
    >
      <CollapsibleTrigger className="flex w-fit cursor-pointer items-center gap-2 rounded-sm text-sm text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:inset-ring-1 focus-visible:inset-ring-ring">
        <Brain className="size-4" />
        {isStreaming ? (
          <span className="flex items-center gap-2">
            Thinking... <Spinner className="size-3" />
          </span>
        ) : (
          <span>{duration === undefined ? 'Thought for a few seconds' : `Thought for ${duration} seconds`}</span>
        )}
        <ChevronDown className="size-4 transition-transform group-data-[state=open]/reasoning:rotate-180" />
      </CollapsibleTrigger>
      <CollapsibleContent
        data-slot="reasoning-content"
        className="border-l-2 border-border pl-3 text-sm leading-relaxed text-muted-foreground"
      >
        {children}
      </CollapsibleContent>
    </Collapsible>
  )
}

export { Reasoning }
