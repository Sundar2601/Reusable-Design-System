import * as React from 'react'
import { cn } from '@/lib/utils'

/**
 * Field parts. Figma components "FieldLabel" and "FieldDescription".
 * Use them around an Input, Checkbox or Radio:
 *   <Field>
 *     <FieldLabel htmlFor="email" required>Email</FieldLabel>
 *     <Input id="email" aria-invalid={!!error} />
 *     <FieldDescription>We never share it.</FieldDescription>
 *   </Field>
 * - Figma `FieldLabel` State=Disabled -> `disabled`; the Asterisk toggle -> `required`
 * - Figma `FieldDescription` Alignment=Right -> `align="right"`
 */
function Field({ className, ...props }: React.ComponentProps<'div'>) {
  return <div data-slot="field" className={cn('flex flex-col gap-2', className)} {...props} />
}

export interface FieldLabelProps extends React.ComponentProps<'label'> {
  /** Shows a red asterisk after the label. */
  required?: boolean
  /** Dims the label, for a disabled field. */
  disabled?: boolean
}

function FieldLabel({ className, required = false, disabled = false, children, ...props }: FieldLabelProps) {
  return (
    <label
      data-slot="field-label"
      data-disabled={disabled || undefined}
      className={cn('flex items-center gap-2 text-sm font-medium text-foreground data-[disabled]:opacity-50', className)}
      {...props}
    >
      {children}
      {required ? (
        <span aria-hidden="true" className="text-text-destructive">
          *
        </span>
      ) : null}
    </label>
  )
}

export interface FieldDescriptionProps extends React.ComponentProps<'p'> {
  align?: 'left' | 'right'
}

function FieldDescription({ className, align = 'left', ...props }: FieldDescriptionProps) {
  return (
    <p
      data-slot="field-description"
      className={cn('text-sm text-muted-foreground', align === 'right' && 'text-right', className)}
      {...props}
    />
  )
}

export { Field, FieldLabel, FieldDescription }
