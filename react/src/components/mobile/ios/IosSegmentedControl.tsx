import * as React from 'react'
import { cn } from '@/lib/utils'

export interface IosSegmentedControlOption {
  value: string
  label: string
}

/** iOS Segmented Control: 32px tall, 9px radius, raised selected segment. */
export interface IosSegmentedControlProps extends Omit<React.ComponentProps<'div'>, 'onChange' | 'defaultValue'> {
  options: IosSegmentedControlOption[]
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
}

function IosSegmentedControl({ className, options, value, defaultValue, onValueChange, ...props }: IosSegmentedControlProps) {
  const [inner, setInner] = React.useState(defaultValue ?? options[0]?.value)
  const current = value ?? inner
  return (
    <div
      role="radiogroup"
      data-slot="ios-segmented-control"
      className={cn('flex h-8 w-full items-stretch gap-0.5 rounded-[9px] bg-muted p-0.5 font-[system-ui,-apple-system,sans-serif]', className)}
      {...props}
    >
      {options.map((o) => {
        const active = o.value === current
        return (
          <button
            key={o.value}
            type="button"
            role="radio"
            aria-checked={active}
            data-state={active ? 'on' : 'off'}
            onClick={() => {
              setInner(o.value)
              onValueChange?.(o.value)
            }}
            className={cn(
              'flex-1 cursor-pointer rounded-[7px] text-[13px] outline-none transition-all',
              active ? 'bg-background font-semibold text-foreground shadow-[0_3px_8px_rgb(0_0_0/0.12),0_3px_1px_rgb(0_0_0/0.04)]' : 'font-medium text-foreground',
            )}
          >
            {o.label}
          </button>
        )
      })}
    </div>
  )
}

export { IosSegmentedControl }
