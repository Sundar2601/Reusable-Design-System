import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from './Button'
import { NotificationItem } from './NotificationItem'

const meta = {
  title: 'Components/Notification Item',
  component: NotificationItem,
  tags: ['autodocs'],
  argTypes: { unread: { control: 'boolean' } },
  args: {
    title: 'Ada Lovelace commented',
    description: 'Looks good to me, ready to merge.',
    time: '2m ago',
    avatarFallback: 'AL',
    unread: true,
  },
} satisfies Meta<typeof NotificationItem>

export default meta
type Story = StoryObj<typeof meta>

export const Unread: Story = {}
export const Read: Story = { args: { unread: false } }
export const WithActions: Story = {
  args: {
    title: 'Grace Hopper invited you',
    description: 'Join the Design System workspace.',
    avatarFallback: 'GH',
    actions: (
      <>
        <Button size="sm">Accept</Button>
        <Button size="sm" variant="outline">Decline</Button>
      </>
    ),
  },
}
export const List: Story = {
  render: () => (
    <div className="flex flex-col">
      <NotificationItem title="Build passed" description="main deployed to production." time="1h ago" avatarFallback="CI" unread />
      <NotificationItem title="New follower" description="Alan Turing followed you." time="3h ago" avatarFallback="AT" />
      <NotificationItem title="Weekly report" description="Your summary is ready." time="1d ago" avatarFallback="WR" />
    </div>
  ),
}
