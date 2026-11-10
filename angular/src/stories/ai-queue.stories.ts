import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { AiQueueComponent } from '@/shared/extended/ai-queue.component'

const meta: Meta<AiQueueComponent> = {
  title: 'AI Elements/Queue',
  component: AiQueueComponent,
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'AI Queue (hand-built, mirrors the React Queue). `sections` is a list of { label, items[{ label, description, status }] }.' } } },
  decorators: [moduleMetadata({ imports: [AiQueueComponent] })],
}
export default meta
type Story = StoryObj<AiQueueComponent>

const sections = [
  { label: 'In progress', items: [{ label: 'Generate the API client', description: 'Step 2 of 4', status: 'in-progress' as const }, { label: 'Write unit tests', status: 'pending' as const }] },
  { label: 'Completed', items: [{ label: 'Read the OpenAPI spec', status: 'completed' as const }, { label: 'Fetch the staging schema', description: 'Network error', status: 'failed' as const }] },
]
export const Default: Story = { render: () => ({ props: { sections }, template: `<ai-queue class="w-80" [sections]="sections" />` }) }
