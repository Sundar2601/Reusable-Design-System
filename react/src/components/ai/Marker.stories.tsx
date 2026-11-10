import type { Meta, StoryObj } from '@storybook/react-vite'
import { Sparkles } from 'lucide-react'
import { Marker } from './Marker'

const meta = {
  title: 'AI Elements/Marker',
  component: Marker,
  tags: ['autodocs'],
  argTypes: { variant: { control: 'inline-radio', options: ['default', 'border', 'separator'] } },
  args: { children: 'Today' },
  decorators: [(Story) => <div className="w-96"><Story /></div>],
} satisfies Meta<typeof Marker>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Separator: Story = { args: { variant: 'separator' } }
export const Border: Story = { args: { variant: 'border', children: 'Conversation compacted' } }
export const WithIcon: Story = { args: { icon: <Sparkles />, children: 'Switched to a faster model' } }
