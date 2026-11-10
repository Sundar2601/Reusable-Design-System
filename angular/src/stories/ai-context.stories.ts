import type { Meta, StoryObj } from '@storybook/angular'
import { AiContextComponent } from '@/shared/extended/ai-context.component'

const meta: Meta<AiContextComponent> = {
  title: 'AI Elements/Context',
  component: AiContextComponent,
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Context (extended, hand-built from ZardUI parts). Same API as the React Context: used, max, model, breakdown.' } } },
}
export default meta
type Story = StoryObj<AiContextComponent>

export const Default: Story = {
  args: { used: 48200, max: 200000, model: 'Claude Sonnet' },
}
export const WithBreakdown: Story = {
  args: {
    used: 48200,
    max: 200000,
    model: 'Claude Sonnet',
    breakdown: [
      { label: 'System prompt', tokens: 4200, color: 'bg-primary' },
      { label: 'Messages', tokens: 31000, color: 'bg-muted-foreground' },
      { label: 'Tool results', tokens: 13000, color: 'bg-border' },
    ],
  },
}
export const NearLimit: Story = { args: { used: 188000, max: 200000 } }
