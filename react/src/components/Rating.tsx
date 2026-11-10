import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * Rating. Extended component (beyond shadcn): star rating input.
 * - `value` / `defaultValue` / `onValueChange` -> controlled or uncontrolled
 * - `max` -> number of stars (default 5)
 * - `size` -> sm | default | lg
 * - `readOnly` -> display only; `disabled` -> dimmed and not interactive
 */
const starVariants = cva('shrink-0 transition-colors', {
  variants: { size: { sm: 'size-4', default: 'size-5', lg: 'size-6' } },
  defaultVariants: { size: 'default' },
})

export interface RatingProps
  extends Omit<React.ComponentProps<'div'>, 'defaultValue' | 'onChange'>,
    VariantProps<typeof starVariants> {
  value?: number
  defaultValue?: number
  onValueChange?: (value: number) => void
  max?: number
  readOnly?: boolean
  disabled?: boolean
}

function Rating({
  className,
  value,
  defaultValue = 0,
  onValueChange,
  max = 5,
  size,
  readOnly = false,
  disabled = false,
  ...props
}: RatingProps) {
  const [inner, setInner] = React.useState(defaultValue)
  const [hover, setHover] = React.useState<number | null>(null)
  const current = value ?? inner
  const shown = hover ?? current
  const interactive = !readOnly && !disabled

  const set = (v: number) => {
    if (value === undefined) setInner(v)
    onValueChange?.(v)
  }

  return (
    <div
      data-slot="rating"
      role={interactive ? 'radiogroup' : 'img'}
      aria-label={interactive ? 'Rating' : `Rated ${current} out of ${max}`}
      className={cn('inline-flex items-center gap-0.5', disabled && 'opacity-50', className)}
      onMouseLeave={() => setHover(null)}
      {...props}
    >
      {Array.from({ length: max }, (_, i) => {
        const n = i + 1
        const filled = n <= shown
        const star = (
          <Star className={cn(starVariants({ size }), filled ? 'fill-current text-primary' : 'text-muted-foreground')} />
        )
        if (!interactive) {
          return <span key={n} data-slot="rating-star" data-filled={filled}>{star}</span>
        }
        return (
          <button
            key={n}
            type="button"
            role="radio"
            aria-checked={n === current}
            aria-label={`${n} star${n > 1 ? 's' : ''}`}
            data-slot="rating-star"
            data-filled={filled}
            onMouseEnter={() => setHover(n)}
            onClick={() => set(n === current ? 0 : n)}
            className="cursor-pointer rounded-sm outline-none focus-visible:shadow-focus-ring"
          >
            {star}
          </button>
        )
      })}
    </div>
  )
}

export { Rating }
