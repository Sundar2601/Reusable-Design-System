import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { ZardCalendarImports } from '@/shared/components/calendar/calendar.imports'
import { ZardCalendarComponent } from '@/shared/components/calendar/calendar.component'

const meta: Meta<ZardCalendarComponent> = {
  title: 'Calendar',
  component: ZardCalendarComponent,
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Calendar (ZardUI). `zMode` single / multiple / range, `zNumberOfMonths`, bind the selection with `[(value)]`.' } } },
  decorators: [moduleMetadata({ imports: [...ZardCalendarImports] })],
}
export default meta
type Story = StoryObj<ZardCalendarComponent>

export const Single: Story = {
  render: () => ({ props: { date: new Date() }, template: `<z-calendar zMode="single" [value]="date" />` }),
}

export const Range: Story = {
  render: () => {
    const y = new Date().getFullYear()
    const m = new Date().getMonth()
    return { props: { range: [new Date(y, m, 8), new Date(y, m, 14)] }, template: `<z-calendar zMode="range" [value]="range" />` }
  },
}

export const Multiple: Story = {
  render: () => ({ template: `<z-calendar zMode="multiple" />` }),
}

export const TwoMonths: Story = {
  render: () => ({ template: `<z-calendar zMode="single" [zNumberOfMonths]="2" />` }),
}
