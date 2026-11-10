import * as React from 'react'
import { type VariantProps } from 'class-variance-authority'
import { ToggleGroup as ToggleGroupPrimitive } from 'radix-ui'
import { cn } from '@/lib/utils'
import { toggleVariants } from './Toggle'

/**
 * Toggle Group. Figma component "Toggle Group".
 * - `type="single" | "multiple"` + `value` / `defaultValue` + `onValueChange`
 * - `variant` and `size` are shared by every item. `spacing` > 0 separates the items; 0 joins them.
 */
type ToggleGroupContextValue = VariantProps<typeof toggleVariants> & { spacing: number }

const ToggleGroupContext = React.createContext<ToggleGroupContextValue>({
  size: 'default',
  variant: 'default',
  spacing: 0,
})

export type ToggleGroupProps = React.ComponentProps<typeof ToggleGroupPrimitive.Root> &
  VariantProps<typeof toggleVariants> & {
    /** Gap between items in 4px steps. 0 joins them into one bar. */
    spacing?: number
  }

function ToggleGroup({ className, variant, size, spacing = 0, children, ...props }: ToggleGroupProps) {
  return (
    <ToggleGroupPrimitive.Root
      data-slot="toggle-group"
      data-variant={variant}
      data-size={size}
      data-spacing={spacing}
      style={{ gap: spacing * 4 }}
      className={cn(
        'group/toggle-group flex w-fit items-center rounded-lg',
        className,
      )}
      {...props}
    >
      <ToggleGroupContext.Provider value={{ variant, size, spacing }}>{children}</ToggleGroupContext.Provider>
    </ToggleGroupPrimitive.Root>
  )
}

function ToggleGroupItem({
  className,
  children,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof ToggleGroupPrimitive.Item> & VariantProps<typeof toggleVariants>) {
  const context = React.useContext(ToggleGroupContext)
  return (
    <ToggleGroupPrimitive.Item
      data-slot="toggle-group-item"
      data-variant={context.variant || variant}
      data-size={context.size || size}
      className={cn(
        toggleVariants({ variant: context.variant || variant, size: context.size || size }),
        'min-w-0 shrink-0 focus:z-10 focus-visible:z-10',
        'data-[state=on]:bg-muted',
        'group-data-[spacing=0]/toggle-group:rounded-none group-data-[spacing=0]/toggle-group:px-2',
        'group-data-[spacing=0]/toggle-group:first:rounded-s-lg group-data-[spacing=0]/toggle-group:last:rounded-e-lg',
        'group-data-[spacing=0]/toggle-group:data-[variant=outline]:border-s-0 group-data-[spacing=0]/toggle-group:data-[variant=outline]:first:border-s',
        className,
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  )
}

export { ToggleGroup, ToggleGroupItem }
