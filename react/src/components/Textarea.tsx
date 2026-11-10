import * as React from 'react'
import { cn } from '@/lib/utils'

/**
 * Textarea. Same states as Input.
 * - `aria-invalid` -> destructive ring; `disabled` -> dimmed. Focus is CSS (:focus-visible).
 */
export type TextareaProps = React.ComponentProps<'textarea'>

function Textarea({ className, ...props }: TextareaProps) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        'flex min-h-16 w-80 rounded-lg bg-background px-2.5 py-2 text-sm text-foreground',
        'inset-ring-1 inset-ring-border outline-none transition-[color,box-shadow] field-sizing-content',
        'placeholder:text-muted-foreground',
        'focus-visible:inset-ring-ring focus-visible:shadow-focus-ring',
        'aria-invalid:inset-ring-text-destructive aria-invalid:shadow-destructive-ring',
        'disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    />
  )
}

export { Textarea }
