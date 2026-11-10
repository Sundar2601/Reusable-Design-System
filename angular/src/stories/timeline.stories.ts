import type { Meta, StoryObj } from '@storybook/angular'
import { TimelineComponent } from '@/shared/extended/timeline.component'

const meta: Meta<TimelineComponent> = {
  title: 'Timeline',
  component: TimelineComponent,
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Timeline (extended, hand-built). Same API as the React Timeline: `items` with title, description, time and status (complete / current / upcoming).' } } },
  args: {
    items: [
      { title: 'Order placed', description: 'We received your order.', time: '9:41 AM', status: 'complete' },
      { title: 'Packed', description: 'Your items are packed.', time: '11:10 AM', status: 'complete' },
      { title: 'Out for delivery', description: 'Courier is on the way.', time: '1:05 PM', status: 'current' },
      { title: 'Delivered', status: 'upcoming' },
    ],
  },
  render: (args) => ({ props: args, template: `<div class="w-96"><ui-timeline [items]="items" /></div>` }),
}
export default meta
type Story = StoryObj<TimelineComponent>

export const Default: Story = {}
export const WithIcons: Story = {
  args: {
    items: [
      { title: 'Packed', time: 'Mon', status: 'complete' },
      { title: 'Shipped', time: 'Tue', status: 'current' },
      { title: 'Delivered', time: 'Wed', status: 'upcoming' },
    ],
  },
}
