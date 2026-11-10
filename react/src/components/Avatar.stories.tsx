import type { Meta, StoryObj } from '@storybook/react-vite'
import { Plus } from 'lucide-react'
import { Avatar, AvatarBadge, AvatarFallback, AvatarGroup, AvatarGroupCount, AvatarImage } from './Avatar'

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: { size: { control: 'inline-radio', options: ['sm', 'default', 'lg'] } },
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Fallback: Story = {
  render: (args) => (
    <Avatar {...args}>
      <AvatarFallback>AB</AvatarFallback>
    </Avatar>
  ),
}

export const WithBadge: Story = {
  render: (args) => (
    <Avatar {...args}>
      <AvatarFallback>AB</AvatarFallback>
      <AvatarBadge />
    </Avatar>
  ),
}

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      {(['sm', 'default', 'lg'] as const).map((size) => (
        <Avatar key={size} size={size}>
          <AvatarImage src="" alt="" />
          <AvatarFallback>+3</AvatarFallback>
          <AvatarBadge />
        </Avatar>
      ))}
      {(['sm', 'default', 'lg'] as const).map((size) => (
        <Avatar key={'i' + size} size={size}>
          <AvatarFallback>
            <Plus />
          </AvatarFallback>
        </Avatar>
      ))}
    </div>
  ),
}

export const Group: Story = {
  render: () => (
    <AvatarGroup>
      <Avatar>
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>CD</AvatarFallback>
      </Avatar>
      <AvatarGroupCount>+3</AvatarGroupCount>
    </AvatarGroup>
  ),
}
