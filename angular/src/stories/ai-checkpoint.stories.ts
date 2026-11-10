import type { Meta, StoryObj } from '@storybook/angular'
import { AiCheckpointComponent } from '@/shared/extended/ai-checkpoint.component'

const meta: Meta<AiCheckpointComponent> = {
  title: 'AI Elements/Checkpoint',
  component: AiCheckpointComponent,
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Checkpoint (extended, hand-built from ZardUI parts). Same API as the React Checkpoint: label, description, restore event.' } } },
}
export default meta
type Story = StoryObj<AiCheckpointComponent>

export const Default: Story = {
  args: { label: 'Checkpoint 3', description: '2 min ago', showRestore: true },
  render: (args) => ({ props: args, template: `<div class="w-[520px]"><ui-ai-checkpoint [label]="label" [description]="description" [showRestore]="showRestore" /></div>` }),
}
export const WithoutRestore: Story = {
  render: () => ({ template: `<div class="w-[520px]"><ui-ai-checkpoint label="Checkpoint 3" [showRestore]="false" /></div>` }),
}
