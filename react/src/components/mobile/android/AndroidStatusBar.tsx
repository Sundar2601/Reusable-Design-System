import * as React from 'react'
import { Battery, Signal, Wifi } from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * Android status bar. Figma "Status Bar & Gesture Bar" (Android frame).
 * 24dp tall, time on the left, system icons on the right.
 */
export interface AndroidStatusBarProps extends React.ComponentProps<'div'> {
  /** Time shown on the left. */
  time?: string
}

function AndroidStatusBar({ time = '9:30', className, ...props }: AndroidStatusBarProps) {
  return (
    <div
      data-slot="android-status-bar"
      className={cn('flex h-6 w-full items-center justify-between bg-background px-6 text-xs font-medium text-foreground', className)}
      {...props}
    >
      <span>{time}</span>
      <span className="flex items-center gap-1" aria-hidden="true">
        <Wifi className="size-3.5" />
        <Signal className="size-3.5" />
        <Battery className="size-4" />
      </span>
    </div>
  )
}

/** Android gesture navigation bar: the 108x4 pill at the bottom of the screen. */
function AndroidGestureBar({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div data-slot="android-gesture-bar" className={cn('flex h-6 w-full items-center justify-center bg-background', className)} {...props}>
      <span className="h-1 w-27 rounded-full bg-foreground" />
    </div>
  )
}

export { AndroidStatusBar, AndroidGestureBar }
