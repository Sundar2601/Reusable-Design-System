import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { Checkpoint } from './Checkpoint'

const meta = {
  title: 'AI Elements/Checkpoint',
  component: Checkpoint,
  tags: ['autodocs'],
  args: { label: 'Checkpoint 3', description: '2 min ago', onRestore: fn() },
  decorators: [(Story) => <div className="w-[520px]"><Story /></div>],
} satisfies Meta<typeof Checkpoint>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const WithoutRestore: Story = { args: { onRestore: undefined } }
