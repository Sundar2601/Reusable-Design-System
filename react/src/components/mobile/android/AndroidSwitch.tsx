import * as React from 'react'
import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * Android switch (Material 3). Figma "Switch".
 * 52x32 track, thumb grows from 16 to 24 when selected and shows a check mark.
 */
export interface AndroidSwitchProps extends Omit<React.ComponentProps<'button'>, 'onChange'> {
  checked?: boolean
  defaultChecked?: boolean
  onCheckedChange?: (checked: boolean) => void
  /** Show the check icon in the selected thumb. */
  withIcon?: boolean
}

function AndroidSwitch({ checked, defaultChecked = false, onCheckedChange, withIcon = true, disabled, className, ...props }: AndroidSwitchProps) {
  const [inner, setInner] = React.useState(defaultChecked)
  const on = checked ?? inner
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      disabled={disabled}
      data-slot="android-switch"
      data-state={on ? 'checked' : 'unchecked'}
      onClick={() => {
        setInner(!on)
        onCheckedChange?.(!on)
      }}
      className={cn(
        'relative inline-flex h-8 w-13 shrink-0 cursor-pointer items-center rounded-full outline-none transition-colors focus-visible:shadow-focus-ring disabled:pointer-events-none disabled:opacity-40',
        on ? 'bg-primary' : 'bg-muted inset-ring-2 inset-ring-muted-foreground',
        className,
      )}
      {...props}
    >
      <span
        data-slot="android-switch-thumb"
        className={cn(
          'pointer-events-none flex items-center justify-center rounded-full transition-all',
          on ? 'ml-6.5 size-6 bg-primary-foreground text-primary' : 'ml-2 size-4 bg-muted-foreground',
        )}
      >
        {on && withIcon && <Check className="size-4" />}
      </span>
    </button>
  )
}

export { AndroidSwitch }
