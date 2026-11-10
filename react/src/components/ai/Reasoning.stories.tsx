import type { Meta, StoryObj } from '@storybook/react-vite'
import { Reasoning } from './Reasoning'

const meta = {
  title: 'AI Elements/Reasoning',
  component: Reasoning,
  tags: ['autodocs'],
  render: (args) => (
    <Reasoning {...args} className="w-96">
      The user wants a summary of the quarterly report. I should list the three biggest changes first, then keep the tone neutral
      and avoid speculating about causes that the report does not state.
    </Reasoning>
  ),
} satisfies Meta<typeof Reasoning>

export default meta
type Story = StoryObj<typeof meta>

export const Streaming: Story = { args: { isStreaming: true } }
export const Finished: Story = { args: { duration: 8 } }
export const FinishedOpen: Story = { args: { duration: 8, defaultOpen: true } }
