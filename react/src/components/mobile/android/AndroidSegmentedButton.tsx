import * as React from 'react'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * Android segmented button (Material 3). Figma "Segmented Button".
 * 40dp tall, 2-5 segments. `multiple` allows several selected segments.
 */
export interface AndroidSegment {
  value: string
  label?: string
  icon?: React.ReactNode
  disabled?: boolean
}

export interface AndroidSegmentedButtonProps extends Omit<React.ComponentProps<'div'>, 'onChange' | 'defaultValue'> {
  options: AndroidSegment[]
  value?: string[]
  defaultValue?: string[]
  multiple?: boolean
  onValueChange?: (value: string[]) => void
}

function AndroidSegmentedButton({ options, value, defaultValue, multiple = false, onValueChange, className, ...props }: AndroidSegmentedButtonProps) {
  const [inner, setInner] = React.useState<string[]>(defaultValue ?? (options[0] ? [options[0].value] : []))
  const current = value ?? inner
  const toggle = (v: string) => {
    let next: string[]
    if (multiple) next = current.includes(v) ? current.filter((x) => x !== v) : [...current, v]
    else next = [v]
    setInner(next)
    onValueChange?.(next)
  }
  return (
    <div
      role={multiple ? 'group' : 'radiogroup'}
      data-slot="android-segmented-button"
      className={cn('inline-flex h-10 overflow-hidden rounded-full inset-ring-1 inset-ring-border', className)}
      {...props}
    >
      {options.map((o, i) => {
        const on = current.includes(o.value)
        return (
          <button
            key={o.value}
            type="button"
            role={multiple ? 'checkbox' : 'radio'}
            aria-checked={on}
            disabled={o.disabled}
            data-slot="android-segment"
            data-state={on ? 'on' : 'off'}
            onClick={() => toggle(o.value)}
            className={cn(
              'inline-flex min-w-12 flex-1 cursor-pointer items-center justify-center gap-2 px-3 text-sm font-medium whitespace-nowrap outline-none transition-colors focus-visible:shadow-focus-ring disabled:pointer-events-none disabled:opacity-40 [&_svg]:size-4.5',
              i > 0 && 'border-l border-border',
              on ? 'bg-secondary text-secondary-foreground' : 'text-foreground hover:bg-foreground/8',
            )}
          >
            {on ? <Check /> : o.icon}
            {o.label}
          </button>
        )
      })}
    </div>
  )
}

export { AndroidSegmentedButton }
