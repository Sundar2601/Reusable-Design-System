import type { Meta, StoryObj } from '@storybook/react-vite'
import { AndroidSegmentedButton } from './AndroidSegmentedButton'

const options = [
  { value: 'day', label: 'Day' },
  { value: 'week', label: 'Week' },
  { value: 'month', label: 'Month' },
]

const meta = {
  title: 'Mobile/Android/Segmented Button',
  component: AndroidSegmentedButton,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: { multiple: { control: 'boolean' } },
  args: { options, defaultValue: ['week'] },
} satisfies Meta<typeof AndroidSegmentedButton>

export default meta
type Story = StoryObj<typeof meta>

export const Single: Story = {}
export const Multiple: Story = { args: { multiple: true, defaultValue: ['day', 'month'] } }
export const WithDisabled: Story = { args: { options: [...options.slice(0, 2), { value: 'month', label: 'Month', disabled: true }] } }
