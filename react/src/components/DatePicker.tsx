import * as React from 'react'
import { Popover as PopoverPrimitive } from 'radix-ui'
import { DayPicker } from 'react-day-picker'
import { format } from 'date-fns'
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * Date Picker. Figma component "Date Picker": an outline trigger button that opens a calendar popover.
 * Controlled with `value` / `onValueChange`, or uncontrolled with `defaultValue`.
 * - `format` is a date-fns pattern. `aria-invalid` -> destructive ring; `disabled` -> dimmed.
 */
export interface DatePickerProps {
  value?: Date
  defaultValue?: Date
  onValueChange?: (date: Date | undefined) => void
  placeholder?: string
  /** date-fns format pattern for the trigger text. */
  format?: string
  /** Dates that cannot be picked. */
  disabledDates?: (date: Date) => boolean
  disabled?: boolean
  'aria-invalid'?: boolean
  id?: string
  className?: string
}

function DatePicker({
  value: valueProp,
  defaultValue,
  onValueChange,
  placeholder = 'Pick a date',
  format: pattern = 'PPP',
  disabledDates,
  disabled,
  id,
  className,
  ...props
}: DatePickerProps) {
  const [open, setOpen] = React.useState(false)
  const [inner, setInner] = React.useState<Date | undefined>(defaultValue)
  const value = valueProp !== undefined ? valueProp : inner

  return (
    <PopoverPrimitive.Root open={open} onOpenChange={setOpen}>
      <PopoverPrimitive.Trigger asChild>
        <button
          id={id}
          type="button"
          disabled={disabled}
          aria-invalid={props['aria-invalid']}
          data-slot="date-picker-trigger"
          data-empty={!value}
          className={cn(
            'flex h-8 w-64 cursor-pointer items-center justify-start gap-2 rounded-lg bg-background px-2.5 text-sm font-normal text-foreground',
            'inset-ring-1 inset-ring-control-border outline-none transition-[color,box-shadow]',
            'data-[empty=true]:text-muted-foreground hover:bg-muted',
            'focus-visible:inset-ring-ring focus-visible:shadow-focus-ring',
            'aria-invalid:inset-ring-text-destructive aria-invalid:shadow-destructive-ring',
            'disabled:pointer-events-none disabled:opacity-50',
            className,
          )}
        >
          <CalendarIcon className="size-4 shrink-0" />
          {value ? format(value, pattern) : <span>{placeholder}</span>}
        </button>
      </PopoverPrimitive.Trigger>
      <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content
          align="start"
          sideOffset={4}
          data-slot="date-picker-content"
          className="z-50 w-auto rounded-lg bg-popover p-2 text-popover-foreground shadow-md inset-ring-1 inset-ring-border outline-none"
        >
          <DayPicker
            mode="single"
            selected={value}
            defaultMonth={value}
            disabled={disabledDates}
            onSelect={(date) => {
              if (valueProp === undefined) setInner(date)
              onValueChange?.(date)
              setOpen(false)
            }}
            showOutsideDays
            components={{
              Chevron: ({ orientation, className: c }) =>
                orientation === 'left' ? (
                  <ChevronLeft className={cn('size-4', c)} />
                ) : (
                  <ChevronRight className={cn('size-4', c)} />
                ),
            }}
            classNames={{
              root: 'w-fit text-sm',
              months: 'relative flex flex-col gap-4',
              month: 'flex w-full flex-col gap-3',
              nav: 'absolute inset-x-0 top-0 flex w-full items-center justify-between',
              button_previous:
                'inline-flex size-7 items-center justify-center rounded-md hover:bg-muted [&_svg]:size-4 outline-none focus-visible:shadow-focus-ring',
              button_next:
                'inline-flex size-7 items-center justify-center rounded-md hover:bg-muted [&_svg]:size-4 outline-none focus-visible:shadow-focus-ring',
              month_caption: 'flex h-7 items-center justify-center text-sm font-medium',
              caption_label: 'text-sm font-medium',
              weekdays: 'flex',
              weekday: 'flex-1 text-center text-xs font-normal text-muted-foreground',
              week: 'mt-1 flex w-full',
              day: 'size-8 p-0 text-center text-sm',
              day_button:
                'inline-flex size-8 cursor-pointer items-center justify-center rounded-md outline-none hover:bg-muted focus-visible:shadow-focus-ring',
              selected: '[&>button]:bg-primary [&>button]:text-primary-foreground [&>button]:hover:bg-primary',
              today: '[&>button]:bg-muted',
              outside: 'text-muted-foreground opacity-60',
              disabled: 'opacity-40 [&>button]:pointer-events-none',
              hidden: 'invisible',
            }}
          />
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Portal>
    </PopoverPrimitive.Root>
  )
}

export { DatePicker }
