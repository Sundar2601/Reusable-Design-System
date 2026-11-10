import * as React from 'react'
import { cn } from '@/lib/utils'

/**
 * SegmentedControl. Extended component (beyond shadcn): single-select group of buttons.
 * - `options` -> { value, label, icon?, disabled? }
 * - `value` / `defaultValue` / `onValueChange` -> controlled or uncontrolled
 * - `size` -> sm | default
 */
export interface SegmentedControlOption {
  value: string
  label?: React.ReactNode
  icon?: React.ReactNode
  disabled?: boolean
}

export interface SegmentedControlProps extends Omit<React.ComponentProps<'div'>, 'defaultValue' | 'onChange'> {
  options: SegmentedControlOption[]
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  size?: 'sm' | 'default'
}

function SegmentedControl({
  className,
  options,
  value,
  defaultValue,
  onValueChange,
  size = 'default',
  ...props
}: SegmentedControlProps) {
  const [inner, setInner] = React.useState(defaultValue ?? options[0]?.value)
  const current = value ?? inner
  const set = (v: string) => {
    if (value === undefined) setInner(v)
    onValueChange?.(v)
  }
  return (
    <div
      data-slot="segmented-control"
      data-size={size}
      role="radiogroup"
      className={cn('inline-flex items-center gap-0.5 rounded-lg bg-muted p-0.5', className)}
      {...props}
    >
      {options.map((o) => {
        const selected = o.value === current
        return (
          <button
            key={o.value}
            type="button"
            role="radio"
            aria-checked={selected}
            disabled={o.disabled}
            data-slot="segmented-control-item"
            data-state={selected ? 'on' : 'off'}
            onClick={() => set(o.value)}
            className={cn(
              'inline-flex cursor-pointer items-center justify-center gap-1 rounded-md font-medium whitespace-nowrap outline-none transition-all',
              'focus-visible:shadow-focus-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0',
              size === 'sm' ? 'h-6 px-2 text-xs' : 'h-7 px-3 text-sm',
              selected ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground',
            )}
          >
            {o.icon}
            {o.label}
          </button>
        )
      })}
    </div>
  )
}

export { SegmentedControl }
