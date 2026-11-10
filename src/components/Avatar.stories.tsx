import type { Meta, StoryObj } from '@storybook/react-vite'
import { Avatar } from './Avatar'

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  args: { initials: 'AB', size: 'sm' },
  argTypes: { size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] } },
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Small: Story = {}
export const Medium: Story = { args: { size: 'md' } }
export const Large: Story = { args: { size: 'lg' } }

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-lg">
      <Avatar size="sm" initials="AB" />
      <Avatar size="md" initials="AB" />
      <Avatar size="lg" initials="AB" />
    </div>
  ),
}
