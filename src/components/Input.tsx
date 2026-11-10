import * as React from 'react'
import { cn } from '@/lib/utils'

/**
 * Input. Figma component "Input" (State / Label / Placeholder / Helper text).
 * - Figma `Label`       -> `label`
 * - Figma `Placeholder` -> `placeholder` (native)
 * - Figma `Helper text` -> `helperText`
 * - Figma `State=Error`    -> `error`
 * - Figma `State=Disabled` -> `disabled` (native)
 * - Figma `State=Focus` is CSS (:focus-visible), not a prop.
 */
export interface InputProps extends Omit<React.ComponentProps<'input'>, 'size'> {
  /** Visible label above the field. */
  label?: string
  /** Hint under the field. Turns red when `error` is set. */
  helperText?: string
  /** Shows the error style and marks the field invalid. */
  error?: boolean
}

function Input({ className, label, helperText, error = false, disabled, id, ...props }: InputProps) {
  const autoId = React.useId()
  const inputId = id ?? autoId
  const helperId = `${inputId}-helper`

  return (
    <div data-slot="input" className={cn('flex w-80 flex-col gap-xs', className)}>
      {label ? (
        <label
          htmlFor={inputId}
          className={cn('text-label', disabled ? 'text-text-disabled' : 'text-foreground')}
        >
          {label}
        </label>
      ) : null}
      <input
        id={inputId}
        disabled={disabled}
        aria-invalid={error || undefined}
        aria-describedby={helperText ? helperId : undefined}
        className={cn(
          'h-11 w-full rounded-md border border-input bg-card px-md text-body-medium text-foreground',
          'placeholder:text-text-tertiary',
          'outline-none transition-colors',
          'focus-visible:border-ring focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-inset',
          'aria-invalid:border-destructive aria-invalid:ring-1 aria-invalid:ring-destructive aria-invalid:ring-inset',
          'disabled:cursor-not-allowed disabled:border-border disabled:bg-bg-disabled disabled:text-text-disabled disabled:placeholder:text-text-disabled',
        )}
        {...props}
      />
      {helperText ? (
        <p
          id={helperId}
          className={cn(
            'text-caption',
            disabled ? 'text-text-disabled' : error ? 'text-danger-text' : 'text-muted-foreground',
          )}
        >
          {helperText}
        </p>
      ) : null}
    </div>
  )
}

export { Input }
