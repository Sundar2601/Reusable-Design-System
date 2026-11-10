import * as React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { DayPicker } from 'react-day-picker'
import { cn } from '@/lib/utils'

/**
 * Calendar. react-day-picker styled with this repo's tokens.
 * Pass `mode="single" | "multiple" | "range"` with `selected` / `onSelect` as in react-day-picker.
 */
type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({ className, classNames, showOutsideDays = true, ...props }: CalendarProps) {
  const navButton =
    'inline-flex size-7 cursor-pointer items-center justify-center rounded-sm bg-transparent text-foreground outline-none transition-all hover:bg-muted focus-visible:inset-ring-1 focus-visible:inset-ring-ring aria-disabled:opacity-50'
  return (
    <DayPicker
      data-slot="calendar"
      showOutsideDays={showOutsideDays}
      className={cn('w-fit rounded-lg bg-background p-3 text-foreground inset-ring-1 inset-ring-border', className)}
      classNames={{
        root: 'w-fit',
        months: 'relative flex flex-col gap-4 sm:flex-row',
        month: 'flex w-full flex-col gap-3',
        nav: 'absolute inset-x-0 top-0 flex w-full items-center justify-between',
        button_previous: navButton,
        button_next: navButton,
        month_caption: 'flex h-7 items-center justify-center',
        caption_label: 'text-sm font-medium',
        month_grid: 'w-full border-collapse',
        weekdays: 'flex',
        weekday: 'w-8 flex-1 text-center text-xs font-normal text-muted-foreground',
        week: 'mt-1 flex w-full',
        day: 'relative p-0 text-center text-sm',
        day_button:
          'inline-flex size-8 cursor-pointer items-center justify-center rounded-lg font-normal outline-none transition-colors hover:bg-muted focus-visible:inset-ring-1 focus-visible:inset-ring-ring',
        selected: '[&>button]:bg-primary [&>button]:text-primary-foreground [&>button:hover]:bg-primary',
        today: '[&>button]:bg-muted [&>button]:font-medium',
        outside: 'text-muted-foreground opacity-60',
        disabled: 'pointer-events-none opacity-50',
        range_start: 'rounded-l-lg bg-muted',
        range_middle: 'bg-muted [&>button]:bg-transparent [&>button]:text-foreground',
        range_end: 'rounded-r-lg bg-muted',
        hidden: 'invisible',
        ...classNames,
      }}
      components={{
        Chevron: ({ orientation, className: c }) =>
          orientation === 'left' ? (
            <ChevronLeft className={cn('size-4', c)} />
          ) : (
            <ChevronRight className={cn('size-4', c)} />
          ),
      }}
      {...props}
    />
  )
}

export { Calendar }
export type { CalendarProps }
