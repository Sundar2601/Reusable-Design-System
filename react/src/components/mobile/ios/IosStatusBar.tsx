import * as React from 'react'
import { BatteryFull, Signal, Wifi } from 'lucide-react'
import { cn } from '@/lib/utils'

/** iOS Status Bar: time on the left, signal / wifi / battery on the right. 54px tall (Dynamic Island devices). */
export interface IosStatusBarProps extends React.ComponentProps<'div'> {
  /** Time label. */
  time?: string
}

function IosStatusBar({ className, time = '9:41', ...props }: IosStatusBarProps) {
  return (
    <div
      data-slot="ios-status-bar"
      className={cn(
        'flex h-[54px] w-full items-center justify-between px-8 pt-3 font-[system-ui,-apple-system,sans-serif] text-[17px] font-semibold text-foreground',
        className,
      )}
      {...props}
    >
      <span data-slot="ios-status-bar-time">{time}</span>
      <span className="flex items-center gap-1.5" aria-hidden="true">
        <Signal className="size-4" />
        <Wifi className="size-4" />
        <BatteryFull className="size-5" />
      </span>
    </div>
  )
}

/** iOS Home Indicator: the 134x5 pill at the bottom of the screen. */
function IosHomeIndicator({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div data-slot="ios-home-indicator" className={cn('flex h-[34px] w-full items-end justify-center pb-2', className)} {...props}>
      <span className="h-[5px] w-[134px] rounded-full bg-foreground" />
    </div>
  )
}

export { IosStatusBar, IosHomeIndicator }
