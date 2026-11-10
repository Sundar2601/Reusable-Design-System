import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from './Button'
import { Banner } from './Banner'

const meta = {
  title: 'Components/Banner',
  component: Banner,
  tags: ['autodocs'],
  argTypes: { variant: { control: 'select', options: ['info', 'success', 'warning', 'destructive'] } },
  args: { variant: 'info', title: 'Scheduled maintenance', children: 'The service will be unavailable on Sunday at 2 AM.' },
} satisfies Meta<typeof Banner>

export default meta
type Story = StoryObj<typeof meta>

export const Info: Story = {}
export const Success: Story = { args: { variant: 'success', title: 'Saved', children: 'Your changes were published.' } }
export const Warning: Story = { args: { variant: 'warning', title: 'Storage almost full', children: '92% of 10 GB used.' } }
export const Destructive: Story = { args: { variant: 'destructive', title: 'Payment failed', children: 'Update your card to continue.' } }
export const WithActionAndDismiss: Story = {
  args: { action: <Button size="sm" variant="outline">Learn more</Button>, onDismiss: () => {} },
}
