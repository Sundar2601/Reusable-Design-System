import type { Meta, StoryObj } from '@storybook/react-vite'
import { Context } from './Context'

const meta = {
  title: 'AI Elements/Context',
  component: Context,
  tags: ['autodocs'],
  args: { used: 48200, max: 200000, model: 'Claude Sonnet' },
} satisfies Meta<typeof Context>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const WithBreakdown: Story = {
  args: {
    breakdown: [
      { label: 'System prompt', tokens: 4200, color: 'bg-primary' },
      { label: 'Messages', tokens: 31000, color: 'bg-muted-foreground' },
      { label: 'Tool results', tokens: 13000, color: 'bg-border' },
    ],
  },
}
export const NearLimit: Story = { args: { used: 188000 } }
