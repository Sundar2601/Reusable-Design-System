import * as React from 'react'
import { Check, X } from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * Android chip (Material 3). Figma "Chips".
 * - `variant`: assist | filter | input | suggestion. 32dp tall, 8dp radius.
 * - Filter chips toggle `selected` and show a check; input chips show a remove button.
 */
export interface AndroidChipProps extends Omit<React.ComponentProps<'button'>, 'onSelect'> {
  variant?: 'assist' | 'filter' | 'input' | 'suggestion'
  selected?: boolean
  /** Leading icon (hidden on selected filter chips, replaced by a check). */
  icon?: React.ReactNode
  /** Called when the trailing remove icon of an input chip is pressed. */
  onRemove?: () => void
}

function AndroidChip({ variant = 'assist', selected = false, icon, onRemove, className, children, ...props }: AndroidChipProps) {
  const showCheck = variant === 'filter' && selected
  return (
    <button
      type="button"
      data-slot="android-chip"
      data-variant={variant}
      data-state={selected ? 'selected' : 'unselected'}
      aria-pressed={variant === 'filter' ? selected : undefined}
      className={cn(
        'inline-flex h-8 shrink-0 cursor-pointer items-center gap-2 rounded-lg px-3 text-sm font-medium whitespace-nowrap outline-none transition-colors focus-visible:shadow-focus-ring disabled:pointer-events-none disabled:opacity-40 [&_svg]:size-4.5',
        selected ? 'bg-secondary text-secondary-foreground' : 'bg-transparent text-foreground inset-ring-1 inset-ring-border hover:bg-foreground/8',
        (showCheck || icon) && 'pl-2',
        className,
      )}
      {...props}
    >
      {showCheck ? <Check /> : icon}
      {children}
      {variant === 'input' && (
        <span
          role="button"
          aria-label="Remove"
          className="-mr-1 rounded-full hover:bg-foreground/12"
          onClick={(e) => {
            e.stopPropagation()
            onRemove?.()
          }}
        >
          <X />
        </span>
      )}
    </button>
  )
}

/** A wrapping row of chips. */
function AndroidChipGroup({ className, ...props }: React.ComponentProps<'div'>) {
  return <div data-slot="android-chip-group" role="group" className={cn('flex flex-wrap items-center gap-2', className)} {...props} />
}

export { AndroidChip, AndroidChipGroup }
