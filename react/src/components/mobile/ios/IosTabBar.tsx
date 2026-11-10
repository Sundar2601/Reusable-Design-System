import * as React from 'react'
import { cn } from '@/lib/utils'

export interface IosTabBarItem {
  value: string
  label: string
  icon: React.ReactNode
}

/** iOS Tab Bar: 49px bar, icon over a 10px label, translucent. */
export interface IosTabBarProps extends Omit<React.ComponentProps<'nav'>, 'onChange'> {
  items: IosTabBarItem[]
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
}

function IosTabBar({ className, items, value, defaultValue, onValueChange, ...props }: IosTabBarProps) {
  const [inner, setInner] = React.useState(defaultValue ?? items[0]?.value)
  const current = value ?? inner
  return (
    <nav
      data-slot="ios-tab-bar"
      role="tablist"
      className={cn(
        'flex h-[83px] w-full items-start border-t border-border/60 bg-background/80 pt-1.5 font-[system-ui,-apple-system,sans-serif] backdrop-blur-xl',
        className,
      )}
      {...props}
    >
      {items.map((item) => {
        const active = item.value === current
        return (
          <button
            key={item.value}
            type="button"
            role="tab"
            aria-selected={active}
            data-slot="ios-tab-bar-item"
            data-state={active ? 'active' : 'inactive'}
            onClick={() => {
              setInner(item.value)
              onValueChange?.(item.value)
            }}
            className={cn(
              'flex h-[49px] flex-1 cursor-pointer flex-col items-center justify-center gap-0.5 outline-none [&_svg]:size-6',
              active ? 'text-[color:var(--ios-tint,#007aff)]' : 'text-muted-foreground',
            )}
          >
            {item.icon}
            <span className="text-[10px] leading-3 font-medium">{item.label}</span>
          </button>
        )
      })}
    </nav>
  )
}

export { IosTabBar }
