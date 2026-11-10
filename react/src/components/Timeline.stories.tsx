import type { Meta, StoryObj } from '@storybook/react-vite'
import { Package, Truck } from 'lucide-react'
import { Timeline } from './Timeline'

const meta = {
  title: 'Components/Timeline',
  component: Timeline,
  tags: ['autodocs'],
  args: {
    items: [
      { title: 'Order placed', description: 'We received your order.', time: '9:41 AM', status: 'complete' },
      { title: 'Packed', description: 'Your items are packed.', time: '11:10 AM', status: 'complete' },
      { title: 'Out for delivery', description: 'Courier is on the way.', time: '1:05 PM', status: 'current' },
      { title: 'Delivered', status: 'upcoming' },
    ],
  },
} satisfies Meta<typeof Timeline>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = { render: (args) => <div className="w-96"><Timeline {...args} /></div> }
export const WithIcons: Story = {
  render: () => (
    <div className="w-96">
      <Timeline
        items={[
          { title: 'Packed', time: 'Mon', icon: <Package />, status: 'complete' },
          { title: 'Shipped', time: 'Tue', icon: <Truck />, status: 'current' },
          { title: 'Delivered', time: 'Wed', status: 'upcoming' },
        ]}
      />
    </div>
  ),
}
