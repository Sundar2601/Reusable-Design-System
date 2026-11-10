import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { Confirmation } from './Confirmation'

const meta = {
  title: 'AI Elements/Confirmation',
  component: Confirmation,
  tags: ['autodocs'],
  args: {
    title: 'Allow the assistant to delete 3 files?',
    description: 'This runs `rm` on the selected files in your workspace and cannot be undone.',
    onApprove: fn(),
    onReject: fn(),
  },
  render: (args) => <Confirmation {...args} className="w-96" />,
} satisfies Meta<typeof Confirmation>

export default meta
type Story = StoryObj<typeof meta>

export const Requested: Story = {}
export const Accepted: Story = { args: { state: 'accepted' } }
export const Rejected: Story = { args: { state: 'rejected' } }
