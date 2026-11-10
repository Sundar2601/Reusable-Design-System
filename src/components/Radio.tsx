import * as React from 'react'
import { RadioGroup as RadioGroupPrimitive } from 'radix-ui'
import { cn } from '@/lib/utils'

/**
 * Radio. Figma component "Radio" (Selected / State / Label).
 * A Radio always sits inside a RadioGroup, which holds the selected value.
 * - Figma `Selected`       -> the group's `value` equals this Radio's `value`
 * - Figma `State=Disabled` -> `disabled` (on a Radio, or on the whole RadioGroup)
 * - Figma `Label`          -> `label`
 */
function RadioGroup({ className, ...props }: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return <RadioGroupPrimitive.Root data-slot="radio-group" className={cn('flex flex-col gap-md', className)} {...props} />
}

export interface RadioProps extends Omit<React.ComponentProps<typeof RadioGroupPrimitive.Item>, 'children'> {
  /** Text shown next to the circle. */
  label?: string
}

function Radio({ className, label, id, ...props }: RadioProps) {
  const autoId = React.useId()
  const radioId = id ?? autoId

  return (
    <div data-slot="radio" className={cn('inline-flex items-center gap-sm', className)}>
      <RadioGroupPrimitive.Item
        id={radioId}
        className={cn(
          // Figma: 20px circle, 1.5px border (2px when selected), radius/full
          'flex size-5 shrink-0 cursor-pointer items-center justify-center rounded-full border-[1.5px] border-input bg-card transition-colors',
          'outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring',
          'data-[state=checked]:border-2 data-[state=checked]:border-primary',
          'disabled:cursor-not-allowed disabled:border-border disabled:bg-bg-disabled disabled:text-text-disabled',
          // Disabled wins over selected (Figma: 1.5px gray border, gray dot)
          'disabled:data-[state=checked]:border-[1.5px] disabled:data-[state=checked]:border-border',
        )}
        {...props}
      >
        <RadioGroupPrimitive.Indicator className="size-2.5 rounded-full bg-primary data-[disabled]:bg-text-disabled" />
      </RadioGroupPrimitive.Item>
      {label ? (
        <label
          htmlFor={radioId}
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

export { Radio, RadioGroup }
