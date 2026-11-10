import * as React from 'react'
import { cn } from '@/lib/utils'
import { Field, FieldDescription, FieldLabel } from './Field'

/**
 * Form Field. Figma component "Form Field": label + control + description + error message in one block.
 * Pass the control (Input, Select trigger, Textarea...) as `children`. The field wires `htmlFor`, `id`
 * and the aria attributes for you through `controlProps`:
 *   <FormField label="Email" description="We never share it." error={error}>
 *     {(control) => <Input {...control} />}
 *   </FormField>
 * A plain element child is also accepted; then give it the matching `id` yourself.
 */
export interface FormFieldControlProps {
  id: string
  'aria-invalid'?: true
  'aria-describedby'?: string
  disabled?: boolean
}

export interface FormFieldProps extends Omit<React.ComponentProps<'div'>, 'children'> {
  label: React.ReactNode
  /** Helper text under the control. */
  description?: React.ReactNode
  /** Error text. Also marks the control invalid. */
  error?: React.ReactNode
  required?: boolean
  disabled?: boolean
  /** The control, or a render function that receives the props to spread on it. */
  children: React.ReactNode | ((control: FormFieldControlProps) => React.ReactNode)
}

function FormField({ className, label, description, error, required, disabled, id, children, ...props }: FormFieldProps) {
  const autoId = React.useId()
  const controlId = id ?? autoId
  const descriptionId = description && !error ? `${controlId}-description` : undefined
  const errorId = error ? `${controlId}-error` : undefined
  const describedBy = [descriptionId, errorId].filter(Boolean).join(' ') || undefined

  const control: FormFieldControlProps = {
    id: controlId,
    'aria-invalid': error ? true : undefined,
    'aria-describedby': describedBy,
    disabled: disabled || undefined,
  }

  return (
    <Field data-slot="form-field" data-invalid={error ? true : undefined} className={cn('w-80', className)} {...props}>
      <FieldLabel htmlFor={controlId} required={required} disabled={disabled}>
        {label}
      </FieldLabel>
      {typeof children === 'function' ? children(control) : children}
      {description && !error ? <FieldDescription id={descriptionId}>{description}</FieldDescription> : null}
      {error ? (
        <p id={errorId} role="alert" className="text-sm text-text-destructive">
          {error}
        </p>
      ) : null}
    </Field>
  )
}

export { FormField }
