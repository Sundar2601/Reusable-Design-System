import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { AiToolComponent } from '@/shared/extended/ai-tool.component'

const meta: Meta<AiToolComponent> = {
  title: 'AI Elements/Tool',
  component: AiToolComponent,
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'AI Tool (hand-built, mirrors the React Tool). Tool-call card with a status badge (`state`), parameters (`toolInput`) and `output` / `errorText`.' } } },
  decorators: [moduleMetadata({ imports: [AiToolComponent] })],
}
export default meta
type Story = StoryObj<AiToolComponent>

const input = { query: 'quarterly revenue', region: 'EMEA', limit: 5 }
const tpl = (extra: string) => ({ props: { input, out: { total: 3, top: 'Q3 EMEA revenue report' } }, template: `<ai-tool class="w-96" name="search_reports" [toolInput]="input" [open]="true" ${extra} />` })
export const Pending: Story = { render: () => tpl(`state="input-streaming"`) }
export const Running: Story = { render: () => tpl(`state="input-available"`) }
export const Completed: Story = { render: () => tpl(`state="output-available" [output]="out"`) }
export const Error: Story = { render: () => tpl(`state="output-error" errorText="Request timed out after 30s"`) }
