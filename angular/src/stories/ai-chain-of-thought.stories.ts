import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { AiChainOfThoughtComponent } from '@/shared/extended/ai-chain-of-thought.component'

const meta: Meta<AiChainOfThoughtComponent> = {
  title: 'AI Elements/Chain of Thought',
  component: AiChainOfThoughtComponent,
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'AI Chain of Thought (hand-built, mirrors the React ChainOfThought). `steps` is a list of { label, description, status, results }.' } } },
  decorators: [moduleMetadata({ imports: [AiChainOfThoughtComponent] })],
}
export default meta
type Story = StoryObj<AiChainOfThoughtComponent>

const steps = [
  { label: 'Understand the question', description: 'The user asks how to migrate a form library.', status: 'complete' as const },
  { label: 'Search the docs', status: 'complete' as const, results: ['react-hook-form.com', 'zod.dev'] },
  { label: 'Compare migration paths', description: 'Weighing the incremental and the full rewrite approach.', status: 'active' as const },
  { label: 'Write the answer', status: 'pending' as const },
]
export const Default: Story = { render: () => ({ props: { steps }, template: `<ai-chain-of-thought class="w-96" [steps]="steps" />` }) }
export const Collapsed: Story = { render: () => ({ props: { steps }, template: `<ai-chain-of-thought class="w-96" [steps]="steps" [open]="false" />` }) }
