import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { ZardButtonComponent } from '@/shared/components/button'
import { NotificationItemComponent } from '@/shared/extended/notification-item.component'

const meta: Meta<NotificationItemComponent> = {
  title: 'Notification Item',
  component: NotificationItemComponent,
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Notification Item (extended, hand-built). Same API as the React NotificationItem: `heading`, `description`, `time`, `unread`, `avatarSrc` / `avatarFallback`, and an `actions` slot.' } } },
  decorators: [moduleMetadata({ imports: [ZardButtonComponent] })],
  argTypes: { unread: { control: 'boolean' } },
  args: { heading: 'Ada Lovelace commented', description: 'Looks good to me, ready to merge.', time: '2m ago', avatarFallback: 'AL', unread: true },
  render: (args) => ({
    props: args,
    template: `<ui-notification-item [heading]="heading" [description]="description" [time]="time" [avatarFallback]="avatarFallback" [unread]="unread" />`,
  }),
}
export default meta
type Story = StoryObj<NotificationItemComponent>

export const Unread: Story = {}
export const Read: Story = { args: { unread: false } }
export const WithActions: Story = {
  render: () => ({
    template: `<ui-notification-item heading="Grace Hopper invited you" description="Join the Design System workspace." avatarFallback="GH">
      <button actions z-button zSize="sm">Accept</button>
      <button actions z-button zSize="sm" zType="outline">Decline</button>
    </ui-notification-item>`,
  }),
}
export const List: Story = {
  render: () => ({
    template: `<div class="flex flex-col">
      <ui-notification-item heading="Build passed" description="main deployed to production." time="1h ago" avatarFallback="CI" [unread]="true" />
      <ui-notification-item heading="New follower" description="Alan Turing followed you." time="3h ago" avatarFallback="AT" />
      <ui-notification-item heading="Weekly report" description="Your summary is ready." time="1d ago" avatarFallback="WR" />
    </div>`,
  }),
}
