import * as React from 'react'
import { Label as LabelPrimitive } from 'radix-ui'
import { cn } from '@/lib/utils'

/**
 * Label. Figma component "Label". Renders an accessible <label>; pair it with a control via `htmlFor`.
 * Dims itself when its control (peer) or its group is disabled. `required` adds a red asterisk.
 */
export interface LabelProps extends React.ComponentProps<typeof LabelPrimitive.Root> {
  /** Shows a red asterisk after the text. */
  required?: boolean
}

function Label({ className, required = false, children, ...props }: LabelProps) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        'flex items-center gap-2 text-sm leading-none font-medium text-foreground select-none',
        'group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50',
        'peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
        className,
      )}
      {...props}
    >
      {children}
      {required ? (
        <span aria-hidden="true" className="text-text-destructive">
          *
        </span>
      ) : null}
    </LabelPrimitive.Root>
  )
}

export { Label }
