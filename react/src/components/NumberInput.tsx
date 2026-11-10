import * as React from 'react'
import { Minus, Plus } from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * NumberInput. Extended component (beyond shadcn): numeric input with decrement / increment buttons.
 * - `value` / `defaultValue` / `onValueChange` -> controlled or uncontrolled
 * - `min` / `max` / `step` -> limits and increment size
 * - `disabled`, `aria-invalid` like Input
 */
export interface NumberInputProps extends Omit<React.ComponentProps<'div'>, 'defaultValue' | 'onChange'> {
  value?: number
  defaultValue?: number
  onValueChange?: (value: number) => void
  min?: number
  max?: number
  step?: number
  disabled?: boolean
  'aria-invalid'?: boolean
}

function NumberInput({
  className,
  value,
  defaultValue = 0,
  onValueChange,
  min = -Infinity,
  max = Infinity,
  step = 1,
  disabled = false,
  ...props
}: NumberInputProps) {
  const [inner, setInner] = React.useState(defaultValue)
  const current = value ?? inner
  const clamp = (n: number) => Math.min(max, Math.max(min, n))
  const set = (n: number) => {
    const next = clamp(n)
    if (value === undefined) setInner(next)
    onValueChange?.(next)
  }

  const stepBtn = 'flex h-full w-8 shrink-0 cursor-pointer items-center justify-center text-muted-foreground outline-none hover:bg-muted focus-visible:shadow-focus-ring disabled:pointer-events-none disabled:opacity-50'

  return (
    <div
      data-slot="number-input"
      className={cn(
        'flex h-8 w-32 items-center overflow-hidden rounded-lg bg-background text-sm text-foreground',
        'inset-ring-1 inset-ring-border transition-[color,box-shadow]',
        'focus-within:inset-ring-ring focus-within:shadow-focus-ring',
        'aria-invalid:inset-ring-text-destructive aria-invalid:shadow-destructive-ring',
        disabled && 'pointer-events-none opacity-50',
        className,
      )}
      {...props}
    >
      <button type="button" aria-label="Decrease" disabled={disabled || current <= min} onClick={() => set(current - step)} className={stepBtn}>
        <Minus className="size-4" />
      </button>
      <input
        data-slot="number-input-field"
        type="text"
        inputMode="decimal"
        role="spinbutton"
        aria-valuenow={current}
        aria-valuemin={Number.isFinite(min) ? min : undefined}
        aria-valuemax={Number.isFinite(max) ? max : undefined}
        value={current}
        disabled={disabled}
        onChange={(e) => {
          const n = Number(e.target.value)
          if (e.target.value !== '' && !Number.isNaN(n)) set(n)
        }}
        onKeyDown={(e) => {
          if (e.key === 'ArrowUp') {
            e.preventDefault()
            set(current + step)
          } else if (e.key === 'ArrowDown') {
            e.preventDefault()
            set(current - step)
          }
        }}
        className="h-full min-w-0 flex-1 bg-transparent text-center outline-none"
      />
      <button type="button" aria-label="Increase" disabled={disabled || current >= max} onClick={() => set(current + step)} className={stepBtn}>
        <Plus className="size-4" />
      </button>
    </div>
  )
}

export { NumberInput }
