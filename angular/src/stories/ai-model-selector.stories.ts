import type { Meta, StoryObj } from '@storybook/angular'
import { AiModelSelectorComponent } from '@/shared/extended/ai-model-selector.component'

const meta: Meta<AiModelSelectorComponent> = {
  title: 'AI Elements/Model Selector',
  component: AiModelSelectorComponent,
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Model Selector (extended, hand-built from ZardUI parts). Same API as the React ModelSelector: models, two-way value, placeholder.' } } },
}
export default meta
type Story = StoryObj<AiModelSelectorComponent>

const models = [
  { id: 'opus', name: 'Claude Opus', provider: 'Anthropic', badge: 'Most capable' },
  { id: 'sonnet', name: 'Claude Sonnet', provider: 'Anthropic' },
  { id: 'haiku', name: 'Claude Haiku', provider: 'Anthropic', badge: 'Fast' },
  { id: 'gpt', name: 'GPT-5', provider: 'OpenAI', badge: 'New' },
  { id: 'gemini', name: 'Gemini Pro', provider: 'Google' },
]

export const Default: Story = {
  render: () => ({ props: { models, value: 'sonnet' }, template: `<div class="h-80"><ui-ai-model-selector [models]="models" [(value)]="value" /></div>` }),
}
export const NoSelection: Story = {
  render: () => ({ props: { models, value: undefined }, template: `<div class="h-80"><ui-ai-model-selector [models]="models" [(value)]="value" /></div>` }),
}
