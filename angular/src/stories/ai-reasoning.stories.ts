import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { AiReasoningComponent } from '@/shared/extended/ai-reasoning.component'

const meta: Meta<AiReasoningComponent> = {
  title: 'AI Elements/Reasoning',
  component: AiReasoningComponent,
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'AI Reasoning (hand-built, mirrors the React Reasoning). Collapsible thinking block; `isStreaming` shows a spinner, `duration` the seconds once finished.' } } },
  decorators: [moduleMetadata({ imports: [AiReasoningComponent] })],
}
export default meta
type Story = StoryObj<AiReasoningComponent>

const text = 'The user wants a summary of the quarterly report. I should list the three biggest changes first and keep the tone neutral.'
export const Streaming: Story = { render: () => ({ template: `<ai-reasoning class="w-96" [isStreaming]="true" [open]="true">${text}</ai-reasoning>` }) }
export const Finished: Story = { render: () => ({ template: `<ai-reasoning class="w-96" [duration]="8">${text}</ai-reasoning>` }) }
export const FinishedOpen: Story = { render: () => ({ template: `<ai-reasoning class="w-96" [duration]="8" [open]="true">${text}</ai-reasoning>` }) }
