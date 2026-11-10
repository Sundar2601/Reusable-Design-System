import type { Meta, StoryObj } from '@storybook/react-vite'
import { DollarSign, Users } from 'lucide-react'
import { StatCard } from './StatCard'

const meta = {
  title: 'Components/Stat Card',
  component: StatCard,
  tags: ['autodocs'],
  argTypes: { trend: { control: 'inline-radio', options: ['up', 'down', 'neutral'] } },
  args: { label: 'Total revenue', value: '$45,231', delta: '+20.1%', trend: 'up', description: 'from last month', icon: <DollarSign /> },
} satisfies Meta<typeof StatCard>

export default meta
type Story = StoryObj<typeof meta>

export const Up: Story = {}
export const Down: Story = { args: { label: 'Churn', value: '2.4%', delta: '-0.8%', trend: 'down', icon: <Users /> } }
export const Neutral: Story = { args: { label: 'Active users', value: '1,204', delta: '0%', trend: 'neutral', icon: <Users /> } }
export const Minimal: Story = { args: { delta: undefined, description: undefined, icon: undefined } }
