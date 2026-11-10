import * as React from 'react'
import { Switch as SwitchPrimitive } from 'radix-ui'
import { cn } from '@/lib/utils'

/**
 * Switch. Figma component "Switch".
 * - Figma `Data state` On / Off -> `checked` (or `defaultChecked`) + `onCheckedChange`
 * - Figma `Size` -> `size` (sm | default)
 * - Figma `Interaction=Disabled` -> `disabled`; `Invalid` -> `aria-invalid`. Focus is CSS.
 */
function Switch({
  className,
  size = 'default',
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root> & { size?: 'sm' | 'default' }) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      data-size={size}
      className={cn(
        'group/switch peer inline-flex shrink-0 cursor-pointer items-center rounded-full bg-input outline-none transition-all',
        'data-[size=default]:h-[18px] data-[size=default]:w-8 data-[size=sm]:h-3.5 data-[size=sm]:w-6',
        'focus-visible:inset-ring-1 focus-visible:inset-ring-ring focus-visible:shadow-focus-ring',
        'aria-invalid:inset-ring-1 aria-invalid:inset-ring-text-destructive aria-invalid:shadow-destructive-ring',
        'data-[state=checked]:bg-primary',
        'disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          'pointer-events-none block rounded-full bg-background transition-transform',
          'group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:size-3',
          'data-[state=unchecked]:translate-x-px',
          'group-data-[size=default]/switch:data-[state=checked]:translate-x-[15px] group-data-[size=sm]/switch:data-[state=checked]:translate-x-[11px]',
        )}
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
