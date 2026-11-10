import type { Meta, StoryObj } from '@storybook/react-vite'
import { IosSegmentedControl } from './IosSegmentedControl'

const options = [
  { value: 'day', label: 'Day' },
  { value: 'week', label: 'Week' },
  { value: 'month', label: 'Month' },
  { value: 'year', label: 'Year' },
]

const meta = {
  title: 'Mobile/iOS/Segmented Control',
  component: IosSegmentedControl,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [(Story) => <div className="w-[358px]">{Story()}</div>],
  args: { options, defaultValue: 'week' },
} satisfies Meta<typeof IosSegmentedControl>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const TwoSegments: Story = { args: { options: options.slice(0, 2), defaultValue: 'day' } }
