import type { Meta, StoryObj } from '@storybook/react-vite'
import { Rating } from './Rating'

const meta = {
  title: 'Components/Rating',
  component: Rating,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'inline-radio', options: ['sm', 'default', 'lg'] },
    max: { control: { type: 'number', min: 1, max: 10 } },
    readOnly: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  args: { defaultValue: 3, max: 5, size: 'default' },
} satisfies Meta<typeof Rating>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const ReadOnly: Story = { args: { value: 4, readOnly: true } }
export const Disabled: Story = { args: { disabled: true } }
export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Rating size="sm" defaultValue={2} />
      <Rating defaultValue={3} />
      <Rating size="lg" defaultValue={4} />
    </div>
  ),
}
