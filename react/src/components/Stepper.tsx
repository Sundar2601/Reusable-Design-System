import * as React from 'react'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * Stepper. Extended component (beyond shadcn): shows progress through a multi-step flow.
 * - `steps` -> the list of steps (title + optional description)
 * - `current` -> zero-based index of the active step; earlier steps are complete
 * - `orientation` -> horizontal (default) or vertical
 */
export interface StepperStep {
  title: string
  description?: string
}

export interface StepperProps extends Omit<React.ComponentProps<'ol'>, 'children'> {
  steps: StepperStep[]
  /** Zero-based index of the active step. */
  current?: number
  orientation?: 'horizontal' | 'vertical'
}

function Stepper({ className, steps, current = 0, orientation = 'horizontal', ...props }: StepperProps) {
  const horizontal = orientation === 'horizontal'
  return (
    <ol
      data-slot="stepper"
      data-orientation={orientation}
      className={cn('flex text-sm', horizontal ? 'w-full items-start' : 'flex-col', className)}
      {...props}
    >
      {steps.map((step, i) => {
        const state = i < current ? 'complete' : i === current ? 'current' : 'upcoming'
        const last = i === steps.length - 1
        const circle = (
          <span
            data-slot="stepper-indicator"
            className={cn(
              'flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-medium transition-colors',
              state === 'complete' && 'bg-primary text-primary-foreground',
              state === 'current' && 'bg-background text-foreground inset-ring-2 inset-ring-primary',
              state === 'upcoming' && 'bg-muted text-muted-foreground',
            )}
          >
            {state === 'complete' ? <Check className="size-3.5" /> : i + 1}
          </span>
        )
        const connector = !last && (
          <span
            data-slot="stepper-connector"
            className={cn(horizontal ? 'h-px flex-1' : 'min-h-6 w-px flex-1', i < current ? 'bg-primary' : 'bg-border')}
          />
        )
        const text = (
          <div data-slot="stepper-text" className={cn('flex flex-col gap-0.5', !horizontal && 'pt-0.5 pb-6')}>
            <span className={cn('font-medium', state === 'upcoming' ? 'text-muted-foreground' : 'text-foreground')}>
              {step.title}
            </span>
            {step.description && <span className="text-xs text-muted-foreground">{step.description}</span>}
          </div>
        )
        return (
          <li
            key={i}
            data-slot="stepper-item"
            data-state={state}
            aria-current={state === 'current' ? 'step' : undefined}
            className={cn('flex', horizontal ? 'flex-1 flex-col gap-2 last:flex-none' : 'gap-3')}
          >
            {horizontal ? (
              <>
                <div className="flex items-center gap-2 pr-2">
                  {circle}
                  {connector}
                </div>
                {text}
              </>
            ) : (
              <>
                <div className="flex flex-col items-center gap-1">
                  {circle}
                  {connector}
                </div>
                {text}
              </>
            )}
          </li>
        )
      })}
    </ol>
  )
}

export { Stepper }
