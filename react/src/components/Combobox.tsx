import * as React from 'react'
import { Popover as PopoverPrimitive } from 'radix-ui'
import { Command as CommandPrimitive } from 'cmdk'
import { Check, ChevronsUpDown } from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * Combobox. Figma component "Combobox": a searchable select (trigger button + popover with filter input and list).
 * Built on a Popover and cmdk. Controlled with `value` / `onValueChange`, or uncontrolled with `defaultValue`.
 * - `aria-invalid` -> destructive ring; `disabled` -> dimmed. Options can be `disabled`.
 */
export interface ComboboxOption {
  value: string
  label: string
  disabled?: boolean
}

export interface ComboboxProps {
  options: ComboboxOption[]
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  /** Text on the trigger when nothing is selected. */
  placeholder?: string
  /** Placeholder of the filter input. */
  searchPlaceholder?: string
  /** Shown when the filter matches nothing. */
  emptyText?: string
  disabled?: boolean
  'aria-invalid'?: boolean
  id?: string
  className?: string
}

function Combobox({
  options,
  value: valueProp,
  defaultValue = '',
  onValueChange,
  placeholder = 'Select...',
  searchPlaceholder = 'Search...',
  emptyText = 'No results found.',
  disabled,
  id,
  className,
  ...props
}: ComboboxProps) {
  const [open, setOpen] = React.useState(false)
  const [inner, setInner] = React.useState(defaultValue)
  const value = valueProp ?? inner
  const selected = options.find((o) => o.value === value)

  return (
    <PopoverPrimitive.Root open={open} onOpenChange={setOpen}>
      <PopoverPrimitive.Trigger asChild>
        <button
          id={id}
          type="button"
          role="combobox"
          aria-expanded={open}
          aria-invalid={props['aria-invalid']}
          disabled={disabled}
          data-slot="combobox-trigger"
          data-placeholder={selected ? undefined : ''}
          className={cn(
            'flex h-8 w-64 cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-background ps-2.5 pe-2 text-sm text-foreground',
            'inset-ring-1 inset-ring-border outline-none transition-[color,box-shadow]',
            'data-[placeholder]:text-muted-foreground',
            'focus-visible:inset-ring-ring focus-visible:shadow-focus-ring',
            'aria-invalid:inset-ring-text-destructive aria-invalid:shadow-destructive-ring',
            'disabled:pointer-events-none disabled:opacity-50',
            className,
          )}
        >
          <span className="truncate">{selected ? selected.label : placeholder}</span>
          <ChevronsUpDown className="size-4 shrink-0 text-muted-foreground" />
        </button>
      </PopoverPrimitive.Trigger>
      <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content
          align="start"
          sideOffset={4}
          data-slot="combobox-content"
          className="z-50 w-(--radix-popover-trigger-width) min-w-48 overflow-hidden rounded-lg bg-popover p-0 text-popover-foreground shadow-md inset-ring-1 inset-ring-border outline-none"
        >
          <CommandPrimitive data-slot="combobox-command" className="flex flex-col">
            <CommandPrimitive.Input
              placeholder={searchPlaceholder}
              className="h-9 w-full border-b border-border bg-transparent px-2.5 text-sm outline-none placeholder:text-muted-foreground"
            />
            <CommandPrimitive.List className="max-h-60 overflow-x-hidden overflow-y-auto p-1">
              <CommandPrimitive.Empty className="py-6 text-center text-sm text-muted-foreground">
                {emptyText}
              </CommandPrimitive.Empty>
              {options.map((option) => (
                <CommandPrimitive.Item
                  key={option.value}
                  value={option.label}
                  disabled={option.disabled}
                  onSelect={() => {
                    const next = option.value === value ? '' : option.value
                    if (valueProp === undefined) setInner(next)
                    onValueChange?.(next)
                    setOpen(false)
                  }}
                  className="relative flex cursor-pointer items-center gap-2 rounded-md py-1.5 ps-2 pe-8 text-sm outline-none select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground"
                >
                  {option.label}
                  {option.value === value ? <Check className="absolute end-2 size-4" /> : null}
                </CommandPrimitive.Item>
              ))}
            </CommandPrimitive.List>
          </CommandPrimitive>
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Portal>
    </PopoverPrimitive.Root>
  )
}

export { Combobox }
