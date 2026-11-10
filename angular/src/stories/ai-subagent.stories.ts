import type { Meta, StoryObj } from '@storybook/angular'
import { AiSubagentComponent } from '@/shared/extended/ai-subagent.component'

const meta: Meta<AiSubagentComponent> = {
  title: 'AI Elements/Subagent',
  component: AiSubagentComponent,
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Subagent (extended, hand-built from ZardUI parts). Same API as the React Subagent: name, task, status, steps.' } } },
}
export default meta
type Story = StoryObj<AiSubagentComponent>

const steps = [
  { label: 'Read project files', status: 'completed' as const },
  { label: 'Search for usages', status: 'running' as const },
  { label: 'Write summary', status: 'pending' as const },
]
const task = 'Find every usage of the legacy Button API across the repo.'

export const Running: Story = {
  render: () => ({ props: { steps, task }, template: `<ui-ai-subagent name="Explorer" [task]="task" status="running" [steps]="steps" />` }),
}
export const Completed: Story = {
  render: () => ({
    props: { task, steps: steps.map((s) => ({ ...s, status: 'completed' as const })) },
    template: `<ui-ai-subagent name="Explorer" [task]="task" status="completed" [steps]="steps" />`,
  }),
}
export const Failed: Story = {
  render: () => ({
    props: { task, steps: [steps[0], { label: 'Search for usages', status: 'failed' as const }, steps[2]] },
    template: `<ui-ai-subagent name="Explorer" [task]="task" status="failed" [steps]="steps" />`,
  }),
}
