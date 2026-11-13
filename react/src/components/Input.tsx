import * as React from 'react'
import { cn } from '@/lib/utils'

/**
 * Input. Figma component "Input" (State / Text / Roudness).
 * - Figma `State=Destructive` -> `aria-invalid` (also announces the error to screen readers)
 * - Figma `State=Disabled`    -> `disabled`
 * - Figma `State=Focus/Active` is CSS (:focus-visible), not a prop.
 * - Figma `Text=Placeholder / Active` -> the `placeholder` and `value` props.
 * - Figma `Roudness=Rounded` (spelled "Roudness" in Figma) -> `rounded`
 * The label and description are separate components: see Field.tsx.
 */
export interface InputProps extends Omit<React.ComponentProps<'input'>, 'size'> {
  /** Fully rounded (pill) corners. */
  rounded?: boolean
}

function Input({ className, rounded = false, type = 'text', ...props }: InputProps) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        // Figma: 320 x 32, padding 10 / 4, radius lg, 1px border drawn inside the box
        'h-8 w-80 min-w-0 rounded-lg bg-background px-2.5 py-1 text-sm text-foreground',
        'inset-ring-1 inset-ring-control-border outline-none transition-[color,box-shadow]',
        'placeholder:text-muted-foreground',
        'focus-visible:inset-ring-ring focus-visible:shadow-focus-ring',
        'aria-invalid:inset-ring-text-destructive aria-invalid:shadow-destructive-ring',
        'disabled:pointer-events-none disabled:opacity-50',
        rounded && 'rounded-full',
        className,
      )}
      {...props}
    />
  )
}

export { Input }
