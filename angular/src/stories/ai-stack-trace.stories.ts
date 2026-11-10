import type { Meta, StoryObj } from '@storybook/angular'
import { AiStackTraceComponent } from '@/shared/extended/ai-stack-trace.component'

const meta: Meta<AiStackTraceComponent> = {
  title: 'AI Elements/Stack Trace',
  component: AiStackTraceComponent,
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Stack Trace (extended, hand-built from ZardUI parts). Same API as the React StackTrace: name, message, frames, defaultOpen.' } } },
}
export default meta
type Story = StoryObj<AiStackTraceComponent>

const frames = [
  { fn: 'renderList', file: 'src/components/List.tsx', line: 24, column: 18 },
  { fn: 'App', file: 'src/App.tsx', line: 12, column: 5 },
  { fn: 'renderWithHooks', file: 'node_modules/react-dom/index.js', line: 1530, column: 22, internal: true },
]

export const Default: Story = {
  render: () => ({ props: { frames }, template: `<div class="w-[560px]"><ui-ai-stack-trace name="TypeError" message="Cannot read properties of undefined (reading 'map')" [frames]="frames" /></div>` }),
}
export const Collapsed: Story = {
  render: () => ({ props: { frames }, template: `<div class="w-[560px]"><ui-ai-stack-trace name="TypeError" message="Cannot read properties of undefined" [frames]="frames" [defaultOpen]="false" /></div>` }),
}
