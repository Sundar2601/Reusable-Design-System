import * as React from 'react'
import { cn } from '@/lib/utils'

/**
 * Android navigation bar (Material 3). Figma "Navigation Bar".
 * 80dp tall, 3-5 destinations, active icon sits in a 64x32 pill indicator.
 */
export interface AndroidNavigationItem {
  value: string
  label: string
  icon: React.ReactNode
  /** Small badge count; `true` shows a dot. */
  badge?: number | boolean
}

export interface AndroidNavigationBarProps extends Omit<React.ComponentProps<'nav'>, 'onChange'> {
  items: AndroidNavigationItem[]
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
}

function AndroidNavigationBar({ items, value, defaultValue, onValueChange, className, ...props }: AndroidNavigationBarProps) {
  const [inner, setInner] = React.useState(defaultValue ?? items[0]?.value)
  const current = value ?? inner
  return (
    <nav
      data-slot="android-navigation-bar"
      className={cn('flex h-20 w-full items-start bg-muted px-2 pt-3 pb-4 text-foreground', className)}
      {...props}
    >
      {items.map((item) => {
        const active = item.value === current
        return (
          <button
            key={item.value}
            type="button"
            data-slot="android-navigation-item"
            data-state={active ? 'active' : 'inactive'}
            aria-current={active ? 'page' : undefined}
            onClick={() => {
              setInner(item.value)
              onValueChange?.(item.value)
            }}
            className="group flex flex-1 cursor-pointer flex-col items-center gap-1 outline-none"
          >
            <span
              className={cn(
                'relative flex h-8 w-16 items-center justify-center rounded-full transition-colors group-hover:bg-foreground/8 group-focus-visible:shadow-focus-ring [&_svg]:size-6',
                active ? 'bg-primary/15 text-foreground' : 'text-muted-foreground',
              )}
            >
              {item.icon}
              {item.badge !== undefined && item.badge !== false && (
                <span className="absolute top-0 left-9 flex h-4 min-w-4 items-center justify-center rounded-full bg-destructive px-1 text-xs leading-none text-white">
                  {typeof item.badge === 'number' ? item.badge : null}
                </span>
              )}
            </span>
            <span className={cn('text-xs leading-4', active ? 'font-semibold text-foreground' : 'font-medium text-muted-foreground')}>{item.label}</span>
          </button>
        )
      })}
    </nav>
  )
}

export { AndroidNavigationBar }
