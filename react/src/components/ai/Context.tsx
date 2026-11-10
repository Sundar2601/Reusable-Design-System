import * as React from 'react'
import { cn } from '@/lib/utils'
import { Progress } from '../Progress'

export interface ContextBreakdownItem {
  label: string
  tokens: number
  /** Tailwind background class for the legend dot, for example "bg-primary". */
  color?: string
}

export interface ContextProps extends Omit<React.ComponentProps<'div'>, 'children'> {
  /** Tokens currently used. */
  used: number
  /** Context window size in tokens. */
  max: number
  /** Model name shown in the header. */
  model?: string
  /** Optional usage breakdown rows. */
  breakdown?: ContextBreakdownItem[]
}

const fmt = (n: number) => (n >= 1000 ? `${(n / 1000).toFixed(n >= 100000 ? 0 : 1)}K` : String(n))

/**
 * Context. Token / context-window usage meter with an optional breakdown.
 * Pure presentational: pass `used`, `max` and `breakdown`.
 */
function Context({ used, max, model, breakdown, className, ...props }: ContextProps) {
  const pct = Math.min(100, Math.round((used / Math.max(max, 1)) * 100))
  const tone = pct >= 90 ? 'text-text-destructive' : 'text-foreground'
  return (
    <div
      data-slot="ai-context"
      className={cn('flex w-80 flex-col gap-3 rounded-lg bg-card p-4 text-card-foreground inset-ring-1 inset-ring-border', className)}
      {...props}
    >
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium">{model ?? 'Context window'}</span>
        <span className={cn('tabular-nums', tone)}>{pct}%</span>
      </div>
      <Progress value={pct} aria-label="Context usage" />
      <div className="flex justify-between text-xs text-muted-foreground tabular-nums">
        <span>{fmt(used)} used</span>
        <span>{fmt(max)} total</span>
      </div>
      {breakdown && breakdown.length > 0 && (
        <ul data-slot="ai-context-breakdown" className="flex flex-col gap-1.5 border-t border-border pt-3 text-xs">
          {breakdown.map((b) => (
            <li key={b.label} className="flex items-center gap-2">
              <span className={cn('size-2 rounded-full', b.color ?? 'bg-muted-foreground')} />
              <span className="flex-1 text-muted-foreground">{b.label}</span>
              <span className="tabular-nums">{fmt(b.tokens)}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export { Context }
