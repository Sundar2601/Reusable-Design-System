import * as React from 'react'
import { Checkbox as CheckboxPrimitive } from 'radix-ui'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * Checkbox. Figma components "Checkbox" (control) and "Checkbox" (field with label).
 * - Figma `Data state` Checked / Unchecked -> `checked` (or `defaultChecked`) + `onCheckedChange`
 * - Figma `Interaction=Disabled`           -> `disabled`
 * - Figma `Invalid` states                 -> `aria-invalid`
 * - Figma `Interaction=Focus` is CSS, not a prop.
 * - The field's label and description -> `label` and `description` (optional).
 */
export interface CheckboxProps extends Omit<React.ComponentProps<typeof CheckboxPrimitive.Root>, 'children'> {
  /** Text next to the box. */
  label?: React.ReactNode
  /** Smaller text under the label. */
  description?: React.ReactNode
}

function Checkbox({ className, label, description, id, ...props }: CheckboxProps) {
  const autoId = React.useId()
  const checkboxId = id ?? autoId

  const control = (
    <CheckboxPrimitive.Root
      id={checkboxId}
      data-slot="checkbox"
      className={cn(
        // Figma: 16px box, radius 4, 1px border drawn inside
        'size-4 shrink-0 cursor-pointer rounded-[4px] bg-background inset-ring-1 inset-ring-border outline-none transition-shadow',
        'focus-visible:inset-ring-ring focus-visible:shadow-focus-ring',
        'aria-invalid:inset-ring-text-destructive aria-invalid:shadow-destructive-ring',
        'data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:inset-ring-primary',
        'data-[state=checked]:focus-visible:inset-ring-ring',
        'disabled:cursor-not-allowed disabled:opacity-50',
        !label && !description && className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator className="flex items-center justify-center text-current">
        <Check className="size-3.5" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )

  if (!label && !description) return control

  return (
    <div
      data-slot="checkbox-field"
      data-disabled={props.disabled || undefined}
      className={cn('grid grid-cols-[1rem_1fr] items-center gap-x-2 gap-y-0.5 data-[disabled]:opacity-50', className)}
    >
      {control}
      {label ? (
        <label htmlFor={checkboxId} className="text-sm font-medium text-foreground">
          {label}
        </label>
      ) : null}
      {description ? <p className="col-start-2 text-sm text-muted-foreground">{description}</p> : null}
    </div>
  )
}

export { Checkbox }
