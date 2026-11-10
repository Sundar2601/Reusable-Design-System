import * as React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import type { DateRange } from 'react-day-picker'
import { Calendar } from './Calendar'

const meta = {
  title: 'Components/Calendar',
  component: Calendar,
  tags: ['autodocs'],
} satisfies Meta<typeof Calendar>

export default meta
type Story = StoryObj<typeof meta>

export const Single: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date())
    return <Calendar mode="single" selected={date} onSelect={setDate} />
  },
}

export const Range: Story = {
  render: () => {
    const [range, setRange] = React.useState<DateRange | undefined>({
      from: new Date(new Date().getFullYear(), new Date().getMonth(), 8),
      to: new Date(new Date().getFullYear(), new Date().getMonth(), 14),
    })
    return <Calendar mode="range" selected={range} onSelect={setRange} />
  },
}

export const Multiple: Story = {
  render: () => {
    const [dates, setDates] = React.useState<Date[] | undefined>([])
    return <Calendar mode="multiple" selected={dates} onSelect={setDates} />
  },
}

export const TwoMonths: Story = {
  render: () => <Calendar mode="single" numberOfMonths={2} />,
}
