import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { Button } from './Button'
import { Input } from './Input'
import { Textarea } from './Textarea'

/**
 * Input Group. Figma component "Input Group": an Input / Textarea with addons (icons, text, buttons) inside one box.
 * Compose: InputGroup > InputGroupInput + InputGroupAddon (align inline-start | inline-end | block-start | block-end).
 * The group owns the border, focus ring and invalid ring: put `aria-invalid` and `data-disabled` on InputGroup.
 */
function InputGroup({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="input-group"
      role="group"
      className={cn(
        'group/input-group relative flex h-8 w-80 min-w-0 items-center rounded-lg bg-background text-sm text-foreground',
        'inset-ring-1 inset-ring-control-border outline-none transition-[color,box-shadow]',
        'has-[textarea]:h-auto',
        'has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col',
        'has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col',
        'has-[[data-slot=input-group-control]:focus-visible]:inset-ring-ring has-[[data-slot=input-group-control]:focus-visible]:shadow-focus-ring',
        'has-[[data-slot][aria-invalid=true]]:inset-ring-text-destructive has-[[data-slot][aria-invalid=true]]:shadow-destructive-ring',
        'data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50',
        className,
      )}
      {...props}
    />
  )
}

const inputGroupAddonVariants = cva(
  "flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium text-muted-foreground select-none [&>svg:not([class*='size-'])]:size-4 group-data-[disabled=true]/input-group:opacity-50",
  {
    variants: {
      align: {
        'inline-start': 'order-first ps-2.5 has-[>button]:-ms-1',
        'inline-end': 'order-last pe-2.5 has-[>button]:-me-1',
        'block-start': 'order-first w-full justify-start px-2.5 pt-2.5 group-has-[>input]/input-group:pt-2.5',
        'block-end': 'order-last w-full justify-start px-2.5 pb-2.5 group-has-[>input]/input-group:pb-2.5',
      },
    },
    defaultVariants: { align: 'inline-start' },
  },
)

function InputGroupAddon({
  className,
  align = 'inline-start',
  onClick,
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof inputGroupAddonVariants>) {
  return (
    <div
      role="group"
      data-slot="input-group-addon"
      data-align={align}
      className={cn(inputGroupAddonVariants({ align }), className)}
      onClick={(e) => {
        onClick?.(e)
        if ((e.target as HTMLElement).closest('button')) return
        e.currentTarget.parentElement?.querySelector<HTMLElement>('input, textarea')?.focus()
      }}
      {...props}
    />
  )
}

const inputGroupButtonSizes = {
  xs: 'h-6 gap-1 rounded-md px-1.5 [&>svg:not([class*=size-])]:size-3.5',
  sm: 'h-7 gap-1 rounded-md px-2',
  'icon-xs': 'size-6 rounded-md p-0',
  'icon-sm': 'size-7 rounded-md p-0',
} as const

function InputGroupButton({
  className,
  type = 'button',
  variant = 'ghost',
  size = 'xs',
  ...props
}: Omit<React.ComponentProps<typeof Button>, 'size'> & { size?: keyof typeof inputGroupButtonSizes }) {
  return (
    <Button
      type={type}
      data-size={size}
      variant={variant}
      className={cn('flex items-center gap-2 text-sm shadow-none', inputGroupButtonSizes[size], className)}
      {...props}
    />
  )
}

function InputGroupText({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span
      className={cn(
        "flex items-center gap-2 text-sm text-muted-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    />
  )
}

function InputGroupInput({ className, ...props }: React.ComponentProps<'input'>) {
  return (
    <Input
      data-slot="input-group-control"
      className={cn(
        'h-full w-auto flex-1 rounded-none bg-transparent px-2.5 inset-ring-0 shadow-none focus-visible:inset-ring-0 focus-visible:shadow-none aria-invalid:inset-ring-0 aria-invalid:shadow-none',
        className,
      )}
      {...props}
    />
  )
}

function InputGroupTextarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return (
    <Textarea
      data-slot="input-group-control"
      className={cn(
        'w-auto flex-1 resize-none rounded-none bg-transparent py-2 inset-ring-0 shadow-none focus-visible:inset-ring-0 focus-visible:shadow-none aria-invalid:inset-ring-0 aria-invalid:shadow-none',
        className,
      )}
      {...props}
    />
  )
}

export { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput, InputGroupText, InputGroupTextarea }
