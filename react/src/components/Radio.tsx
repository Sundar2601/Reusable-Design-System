import * as React from 'react'
import { RadioGroup as RadioGroupPrimitive } from 'radix-ui'
import { cn } from '@/lib/utils'

/**
 * Radio. Figma components "Radio" (control) and "RadioGroup" (field with label).
 * A Radio always sits inside a RadioGroup, which holds the selected value.
 * - Figma `Data state` Checked / Unchecked -> the group's `value` equals this Radio's `value`
 * - Figma `Interaction=Disabled`           -> `disabled` (on a Radio, or on the whole RadioGroup)
 * - Figma `Error` / `Invalid` states       -> `aria-invalid`
 * - Figma `Interaction=Focus` is CSS, not a prop.
 * - The field's label and description -> `label` and `description` (optional).
 */
function RadioGroup({ className, ...props }: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return <RadioGroupPrimitive.Root data-slot="radio-group" className={cn('grid gap-3', className)} {...props} />
}

export interface RadioProps extends Omit<React.ComponentProps<typeof RadioGroupPrimitive.Item>, 'children'> {
  /** Text next to the circle. */
  label?: React.ReactNode
  /** Smaller text under the label. */
  description?: React.ReactNode
}

function Radio({ className, label, description, id, ...props }: RadioProps) {
  const autoId = React.useId()
  const radioId = id ?? autoId

  const control = (
    <RadioGroupPrimitive.Item
      id={radioId}
      data-slot="radio"
      className={cn(
        // Figma: 16px circle, 1px border drawn inside
        'flex size-4 shrink-0 cursor-pointer items-center justify-center rounded-full bg-background inset-ring-1 inset-ring-control-border outline-none transition-shadow',
        'focus-visible:inset-ring-ring focus-visible:shadow-focus-ring',
        'aria-invalid:inset-ring-text-destructive aria-invalid:shadow-destructive-ring',
        'data-[state=checked]:bg-primary data-[state=checked]:inset-ring-primary',
        'data-[state=checked]:focus-visible:inset-ring-ring',
        'disabled:cursor-not-allowed disabled:opacity-50',
        !label && !description && className,
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="size-2 rounded-full bg-primary-foreground" />
    </RadioGroupPrimitive.Item>
  )

  if (!label && !description) return control

  return (
    <div
      data-slot="radio-field"
      data-disabled={props.disabled || undefined}
      className={cn('grid grid-cols-[1rem_1fr] items-center gap-x-2 gap-y-0.5 data-[disabled]:opacity-50', className)}
    >
      {control}
      {label ? (
        <label htmlFor={radioId} className="text-sm font-medium text-foreground">
          {label}
        </label>
      ) : null}
      {description ? <p className="col-start-2 text-sm text-muted-foreground">{description}</p> : null}
    </div>
  )
}

export { Radio, RadioGroup }
