import * as React from 'react'
import { cn } from '@/lib/utils'

/**
 * Android text field (Material 3). Figma "Text Field".
 * - `variant`: filled (56dp, bottom indicator) | outlined (1px border, 4dp radius)
 * The label floats above the value once the field is focused or filled.
 */
export interface AndroidTextFieldProps extends Omit<React.ComponentProps<'input'>, 'size'> {
  variant?: 'filled' | 'outlined'
  label: string
  supportingText?: string
  error?: boolean
  leadingIcon?: React.ReactNode
  trailingIcon?: React.ReactNode
}

function AndroidTextField({ variant = 'filled', label, supportingText, error, leadingIcon, trailingIcon, className, disabled, id, ...props }: AndroidTextFieldProps) {
  const autoId = React.useId()
  const fieldId = id ?? autoId
  const outlined = variant === 'outlined'
  return (
    <div data-slot="android-text-field" data-variant={variant} data-invalid={error || undefined} className={cn('flex w-full flex-col gap-1', disabled && 'opacity-40', className)}>
      <div
        className={cn(
          'group relative flex h-14 items-center gap-3 px-4 text-foreground transition-colors',
          outlined
            ? 'rounded-sm inset-ring-1 inset-ring-border focus-within:inset-ring-2 focus-within:inset-ring-primary'
            : 'rounded-t-sm border-b border-muted-foreground bg-muted focus-within:border-b-2 focus-within:border-primary',
          error && (outlined ? 'inset-ring-destructive focus-within:inset-ring-destructive' : 'border-destructive focus-within:border-destructive'),
        )}
      >
        {leadingIcon && <span className="text-muted-foreground [&_svg]:size-6">{leadingIcon}</span>}
        <div className="relative h-full flex-1">
          <input
            id={fieldId}
            disabled={disabled}
            aria-invalid={error || undefined}
            placeholder=" "
            className={cn('peer h-full w-full bg-transparent text-base outline-none', outlined ? 'pt-0' : 'pt-4')}
            {...props}
          />
          <label
            htmlFor={fieldId}
            className={cn(
              'pointer-events-none absolute left-0 origin-left text-muted-foreground transition-all',
              'top-1/2 -translate-y-1/2 text-base',
              'peer-focus:text-xs peer-not-placeholder-shown:text-xs',
              outlined
                ? 'peer-focus:top-0 peer-not-placeholder-shown:top-0 peer-focus:-translate-y-[calc(50%+14px)] peer-not-placeholder-shown:-translate-y-[calc(50%+14px)] peer-focus:bg-background peer-not-placeholder-shown:bg-background peer-focus:px-1 peer-not-placeholder-shown:px-1 peer-focus:-ml-1 peer-not-placeholder-shown:-ml-1'
                : 'peer-focus:top-3 peer-not-placeholder-shown:top-3 peer-focus:translate-y-0 peer-not-placeholder-shown:translate-y-0',
              'peer-focus:text-primary',
              error && 'text-destructive peer-focus:text-destructive',
            )}
          >
            {label}
          </label>
        </div>
        {trailingIcon && <span className={cn('text-muted-foreground [&_svg]:size-6', error && 'text-destructive')}>{trailingIcon}</span>}
      </div>
      {supportingText && <p className={cn('px-4 text-xs leading-4', error ? 'text-destructive' : 'text-muted-foreground')}>{supportingText}</p>}
    </div>
  )
}

export { AndroidTextField }
