import * as React from 'react'
import { TrendingDown, TrendingUp } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Card } from './Card'

/**
 * StatCard. Extended component (beyond shadcn): a single metric on a Card.
 * - `label`, `value` -> the metric
 * - `delta` + `trend` (up | down | neutral) -> change indicator
 * - `icon` -> optional icon in the top right; `description` -> small caption below
 */
export interface StatCardProps extends Omit<React.ComponentProps<typeof Card>, 'children'> {
  label: string
  value: React.ReactNode
  delta?: string
  trend?: 'up' | 'down' | 'neutral'
  description?: string
  icon?: React.ReactNode
}

function StatCard({ className, label, value, delta, trend = 'neutral', description, icon, ...props }: StatCardProps) {
  const TrendIcon = trend === 'down' ? TrendingDown : TrendingUp
  return (
    <Card data-slot="stat-card" className={cn('w-64 gap-2 px-4', className)} {...props}>
      <div className="flex items-center justify-between gap-2">
        <span className="text-sm text-muted-foreground">{label}</span>
        {icon && <span className="text-muted-foreground [&_svg]:size-4">{icon}</span>}
      </div>
      <div data-slot="stat-card-value" className="text-2xl font-semibold tracking-tight">{value}</div>
      {(delta || description) && (
        <div className="flex items-center gap-2 text-xs">
          {delta && (
            <span
              data-trend={trend}
              className={cn(
                'inline-flex items-center gap-1 font-medium',
                trend === 'up' && 'text-green-600',
                trend === 'down' && 'text-text-destructive',
                trend === 'neutral' && 'text-muted-foreground',
              )}
            >
              {trend !== 'neutral' && <TrendIcon className="size-3.5" />}
              {delta}
            </span>
          )}
          {description && <span className="text-muted-foreground">{description}</span>}
        </div>
      )}
    </Card>
  )
}

export { StatCard }
