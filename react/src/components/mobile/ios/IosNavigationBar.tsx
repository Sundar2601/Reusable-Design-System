import * as React from 'react'
import { ChevronLeft } from 'lucide-react'
import { cn } from '@/lib/utils'

/** iOS Navigation Bar. Inline (44px) or large title. Translucent background. */
export interface IosNavigationBarProps extends Omit<React.ComponentProps<'header'>, 'title'> {
  /** Bar title. */
  title: string
  /** Show a large title below the bar (collapsed title is hidden). */
  largeTitle?: boolean
  /** Label next to the back chevron. Omit to hide the back button. */
  backLabel?: string
  onBack?: () => void
  /** Trailing actions, for example text buttons or icons. */
  trailing?: React.ReactNode
}

const tint = 'text-[color:var(--ios-tint,#007aff)]'

function IosNavigationBar({ className, title, largeTitle = false, backLabel, onBack, trailing, ...props }: IosNavigationBarProps) {
  return (
    <header
      data-slot="ios-navigation-bar"
      data-large-title={largeTitle}
      className={cn(
        'w-full border-b border-border/60 bg-background/80 font-[system-ui,-apple-system,sans-serif] backdrop-blur-xl',
        className,
      )}
      {...props}
    >
      <div className="grid h-11 grid-cols-[1fr_auto_1fr] items-center px-2">
        <div className="flex justify-start">
          {backLabel !== undefined && (
            <button type="button" onClick={onBack} className={cn('flex h-11 min-w-11 cursor-pointer items-center text-[17px] outline-none', tint)}>
              <ChevronLeft className="size-7" strokeWidth={2.5} />
              <span className="-ml-1">{backLabel}</span>
            </button>
          )}
        </div>
        <h1 className={cn('text-[17px] font-semibold text-foreground', largeTitle && 'opacity-0')}>{title}</h1>
        <div className={cn('flex justify-end gap-3 px-2 text-[17px]', tint)}>{trailing}</div>
      </div>
      {largeTitle && <h2 className="px-4 pt-1 pb-2 text-[34px] leading-[41px] font-bold tracking-[0.37px] text-foreground">{title}</h2>}
    </header>
  )
}

export { IosNavigationBar }
