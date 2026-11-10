import type { Meta, StoryObj } from '@storybook/react-vite'
import { ModelSelector } from './ModelSelector'

const meta = {
  title: 'AI Elements/Model Selector',
  component: ModelSelector,
  tags: ['autodocs'],
  args: {
    defaultValue: 'sonnet',
    models: [
      { id: 'opus', name: 'Claude Opus', provider: 'Anthropic', badge: 'Most capable' },
      { id: 'sonnet', name: 'Claude Sonnet', provider: 'Anthropic' },
      { id: 'haiku', name: 'Claude Haiku', provider: 'Anthropic', badge: 'Fast' },
      { id: 'gpt', name: 'GPT-5', provider: 'OpenAI', badge: 'New' },
      { id: 'gemini', name: 'Gemini Pro', provider: 'Google' },
    ],
  },
} satisfies Meta<typeof ModelSelector>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const NoSelection: Story = { args: { defaultValue: undefined } }
