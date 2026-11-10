import * as React from 'react'
import { Checkbox as CheckboxPrimitive } from 'radix-ui'
import { cn } from '@/lib/utils'

/**
 * Checkbox. Figma component "Checkbox" (Checked / State / Label).
 * - Figma `Checked`        -> `checked` (or `defaultChecked`), with `onCheckedChange`
 * - Figma `State=Disabled` -> `disabled`
 * - Figma `Label`          -> `label`
 */
export interface CheckboxProps extends Omit<React.ComponentProps<typeof CheckboxPrimitive.Root>, 'children'> {
  /** Text shown next to the box. */
  label?: string
}

function Checkbox({ className, label, id, ...props }: CheckboxProps) {
  const autoId = React.useId()
  const checkboxId = id ?? autoId

  return (
    <div data-slot="checkbox" className={cn('inline-flex items-center gap-sm', className)}>
      <CheckboxPrimitive.Root
        id={checkboxId}
        className={cn(
          // Figma: 20px box, 1.5px border, radius/sm
          'flex size-5 shrink-0 cursor-pointer items-center justify-center rounded-sm border-[1.5px] border-input bg-card transition-colors',
          'outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring',
          'data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-brand-on-brand',
          'disabled:cursor-not-allowed disabled:border-border disabled:bg-bg-disabled disabled:text-text-disabled',
          // Disabled wins over checked (Figma: gray box, gray check)
          'disabled:data-[state=checked]:border-border disabled:data-[state=checked]:bg-bg-disabled disabled:data-[state=checked]:text-text-disabled',
        )}
        {...props}
      >
        <CheckboxPrimitive.Indicator>
          <svg width="10" height="7" viewBox="0 0 10 7" fill="none" aria-hidden="true">
            <path
              d="M1 3.5L3.8 6L9 1"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      {label ? (
        <label
          htmlFor={checkboxId}
          className={cn(
            'text-body-medium text-foreground',
            props.disabled && 'cursor-not-allowed text-text-disabled',
          )}
        >
          {label}
        </label>
      ) : null}
    </div>
  )
}

export { Checkbox }
