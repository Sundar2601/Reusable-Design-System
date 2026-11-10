import * as React from 'react'
import { cn } from '@/lib/utils'

/**
 * Android top app bar (Material 3). Figma "Top App Bar".
 * - `variant`: small (64dp), center-aligned (64dp), medium (112dp), large (152dp)
 */
export interface AndroidTopAppBarProps extends Omit<React.ComponentProps<'header'>, 'title'> {
  variant?: 'small' | 'center' | 'medium' | 'large'
  title: React.ReactNode
  /** Leading icon (usually a back arrow or menu). */
  navigationIcon?: React.ReactNode
  /** Trailing action icons. */
  actions?: React.ReactNode
  /** Tonal "scrolled" surface. */
  scrolled?: boolean
}

function AndroidTopAppBar({ variant = 'small', title, navigationIcon, actions, scrolled, className, ...props }: AndroidTopAppBarProps) {
  const collapsed = variant === 'small' || variant === 'center'
  return (
    <header
      data-slot="android-top-app-bar"
      data-variant={variant}
      className={cn(
        'flex w-full flex-col text-foreground transition-colors',
        scrolled ? 'bg-muted' : 'bg-background',
        variant === 'medium' && 'h-28',
        variant === 'large' && 'h-38',
        collapsed && 'h-16',
        className,
      )}
      {...props}
    >
      <div className="flex h-16 shrink-0 items-center gap-1 px-1 [&_svg]:size-6">
        {navigationIcon && <span className="flex size-12 items-center justify-center">{navigationIcon}</span>}
        {collapsed && (
          <h1 className={cn('flex-1 truncate text-[22px] leading-7', variant === 'center' ? 'text-center' : 'px-1')}>{title}</h1>
        )}
        {!collapsed && <span className="flex-1" />}
        <span className="flex items-center">{actions}</span>
      </div>
      {!collapsed && (
        <h1 className={cn('mt-auto truncate px-4 pb-6', variant === 'medium' ? 'text-2xl leading-8' : 'text-[32px] leading-10')}>{title}</h1>
      )}
    </header>
  )
}

export { AndroidTopAppBar }
