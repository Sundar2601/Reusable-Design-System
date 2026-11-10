import type { Meta, StoryObj } from '@storybook/react-vite'
import { LayoutGrid, List } from 'lucide-react'
import { SegmentedControl } from './SegmentedControl'

const meta = {
  title: 'Components/Segmented Control',
  component: SegmentedControl,
  tags: ['autodocs'],
  argTypes: { size: { control: 'inline-radio', options: ['sm', 'default'] } },
  args: {
    defaultValue: 'week',
    options: [
      { value: 'day', label: 'Day' },
      { value: 'week', label: 'Week' },
      { value: 'month', label: 'Month' },
    ],
  },
} satisfies Meta<typeof SegmentedControl>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Small: Story = { args: { size: 'sm' } }
export const WithIcons: Story = {
  args: {
    defaultValue: 'grid',
    options: [
      { value: 'grid', label: 'Grid', icon: <LayoutGrid /> },
      { value: 'list', label: 'List', icon: <List /> },
    ],
  },
}
export const WithDisabledOption: Story = {
  args: {
    options: [
      { value: 'day', label: 'Day' },
      { value: 'week', label: 'Week' },
      { value: 'month', label: 'Month', disabled: true },
    ],
  },
}
