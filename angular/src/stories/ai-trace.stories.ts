import type { Meta, StoryObj } from '@storybook/angular'
import { AiTraceComponent } from '@/shared/extended/ai-trace.component'

const meta: Meta<AiTraceComponent> = {
  title: 'AI Elements/Trace',
  component: AiTraceComponent,
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Trace (extended, hand-built). Same as the React Trace: collapsible `title`, `open` (two-way), `steps` with status pending / running / done / error.' } } },
  args: {
    title: 'Thought for 4 seconds',
    open: true,
    steps: [
      { title: 'Understood the question' },
      { title: 'Searched the web', description: '3 results from docs.example.com' },
      { title: 'Wrote the answer' },
    ],
  },
  render: (args) => ({ props: args, template: `<div class="w-96"><ui-ai-trace [title]="title" [steps]="steps" [(open)]="open" /></div>` }),
}
export default meta
type Story = StoryObj<AiTraceComponent>

export const Done: Story = {}
export const Running: Story = {
  args: {
    title: 'Working...',
    steps: [{ title: 'Searched the web', description: '3 results' }, { title: 'Reading page', status: 'running' }, { title: 'Writing the answer', status: 'pending' }],
  },
}
export const WithError: Story = {
  args: { title: 'Tool failed', steps: [{ title: 'Called get_weather' }, { title: 'Called book_flight', description: 'Request timed out', status: 'error' }] },
}
export const Collapsed: Story = { args: { open: false } }
