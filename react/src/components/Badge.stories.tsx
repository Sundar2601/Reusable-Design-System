import type { Meta, StoryObj } from '@storybook/react-vite'
import { BadgeCheck } from 'lucide-react'
import { Badge } from './Badge'

const meta = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: { variant: { control: 'select', options: ['default', 'secondary', 'destructive', 'outline', 'ghost', 'link'] } },
  args: { children: 'Badge' },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Secondary: Story = { args: { variant: 'secondary' } }
export const Destructive: Story = { args: { variant: 'destructive' } }
export const Outline: Story = { args: { variant: 'outline' } }
export const Ghost: Story = { args: { variant: 'ghost' } }
export const Link: Story = { args: { variant: 'link' } }
export const WithIcon: Story = {
  render: (args) => (
    <Badge {...args} variant="secondary">
      <BadgeCheck />
      Verified
    </Badge>
  ),
}
