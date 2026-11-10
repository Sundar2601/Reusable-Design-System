import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { Slot } from 'radix-ui'
import { cn } from '@/lib/utils'

/**
 * Button Group. Figma component "Button Group": buttons, inputs and selects joined into one control.
 * - `orientation` horizontal | vertical. Children lose their inner radius and shared borders.
 * - ButtonGroupText: static text block; ButtonGroupSeparator: divider between buttons.
 */
const buttonGroupVariants = cva(
  [
    'flex w-fit items-stretch *:focus-visible:relative *:focus-visible:z-10 has-[>[data-slot=button-group]]:gap-2',
    '[&>input]:flex-1',
  ],
  {
    variants: {
      orientation: {
        horizontal:
          '*:data-[slot]:rounded-s-none *:data-[slot]:rounded-e-none first:*:data-[slot]:rounded-s-lg last:*:data-[slot]:rounded-e-lg [&>*:not(:first-child)]:rounded-s-none [&>*:not(:last-child)]:rounded-e-none [&>[data-slot]:not(:first-child)]:-ms-px',
        vertical:
          'flex-col [&>*:not(:first-child)]:rounded-t-none [&>*:not(:last-child)]:rounded-b-none [&>[data-slot]:not(:first-child)]:-mt-px',
      },
    },
    defaultVariants: { orientation: 'horizontal' },
  },
)

export interface ButtonGroupProps extends React.ComponentProps<'div'>, VariantProps<typeof buttonGroupVariants> {}

function ButtonGroup({ className, orientation, ...props }: ButtonGroupProps) {
  return (
    <div
      role="group"
      data-slot="button-group"
      data-orientation={orientation ?? 'horizontal'}
      className={cn(buttonGroupVariants({ orientation }), className)}
      {...props}
    />
  )
}

function ButtonGroupText({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<'div'> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : 'div'
  return (
    <Comp
      data-slot="button-group-text"
      className={cn(
        'flex items-center gap-2 rounded-lg bg-muted px-2.5 text-sm font-medium text-foreground inset-ring-1 inset-ring-border',
        "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    />
  )
}

function ButtonGroupSeparator({
  className,
  orientation = 'vertical',
  ...props
}: { className?: string; orientation?: 'horizontal' | 'vertical' } & React.ComponentProps<'div'>) {
  return (
    <div
      role="separator"
      aria-orientation={orientation}
      data-slot="button-group-separator"
      data-orientation={orientation}
      className={cn(
        'relative m-0 shrink-0 self-stretch bg-border data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-auto data-[orientation=vertical]:w-px',
        className,
      )}
      {...props}
    />
  )
}

export { ButtonGroup, ButtonGroupSeparator, ButtonGroupText, buttonGroupVariants }
