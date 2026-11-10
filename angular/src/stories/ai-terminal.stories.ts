import type { Meta, StoryObj } from '@storybook/angular'
import { AiTerminalComponent } from '@/shared/extended/ai-terminal.component'

const meta: Meta<AiTerminalComponent> = {
  title: 'AI Elements/Terminal',
  component: AiTerminalComponent,
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Terminal (extended, hand-built from ZardUI parts). Same API as the React Terminal: output, title, streaming, clear event.' } } },
}
export default meta
type Story = StoryObj<AiTerminalComponent>

const output = `$ npm run build
> app@1.0.0 build
> vite build

vite v6.0.0 building for production...
✓ 42 modules transformed.
✓ built in 1.24s`

export const Default: Story = {
  render: () => ({ props: { output }, template: `<div class="w-[560px]"><ui-ai-terminal [output]="output" /></div>` }),
}
export const Streaming: Story = {
  render: () => ({ template: `<div class="w-[560px]"><ui-ai-terminal [streaming]="true" output="$ npm test&#10;> running..." /></div>` }),
}
export const Empty: Story = {
  render: () => ({ template: `<div class="w-[560px]"><ui-ai-terminal output="" /></div>` }),
}
