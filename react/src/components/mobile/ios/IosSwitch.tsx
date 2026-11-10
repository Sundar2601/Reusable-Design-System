import * as React from 'react'
import { cn } from '@/lib/utils'

/** iOS Switch: 51x31 track, 27px thumb. Green when on. */
export interface IosSwitchProps extends Omit<React.ComponentProps<'button'>, 'onChange' | 'defaultValue'> {
  checked?: boolean
  defaultChecked?: boolean
  onCheckedChange?: (checked: boolean) => void
}

function IosSwitch({ className, checked, defaultChecked = false, onCheckedChange, disabled, ...props }: IosSwitchProps) {
  const [inner, setInner] = React.useState(defaultChecked)
  const on = checked ?? inner
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      data-slot="ios-switch"
      data-state={on ? 'checked' : 'unchecked'}
      disabled={disabled}
      onClick={() => {
        setInner(!on)
        onCheckedChange?.(!on)
      }}
      className={cn(
        'relative inline-flex h-[31px] w-[51px] shrink-0 cursor-pointer items-center rounded-full p-0.5 outline-none transition-colors disabled:pointer-events-none disabled:opacity-40',
        on ? 'bg-[#34c759]' : 'bg-muted-foreground/30',
        className,
      )}
      {...props}
    >
      <span
        data-slot="ios-switch-thumb"
        className={cn('block size-[27px] rounded-full bg-white shadow-[0_3px_8px_rgb(0_0_0/0.15),0_3px_1px_rgb(0_0_0/0.06)] transition-transform', on ? 'translate-x-5' : 'translate-x-0')}
      />
    </button>
  )
}

export { IosSwitch }
