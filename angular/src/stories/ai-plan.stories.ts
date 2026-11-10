import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { AiPlanComponent } from '@/shared/extended/ai-plan.component'

const meta: Meta<AiPlanComponent> = {
  title: 'AI Elements/Plan',
  component: AiPlanComponent,
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'AI Plan (hand-built, mirrors the React Plan). Card with `heading`, `description`, collapsible body and an optional `footer` slot.' } } },
  decorators: [moduleMetadata({ imports: [AiPlanComponent] })],
}
export default meta
type Story = StoryObj<AiPlanComponent>

import { ZardButtonComponent } from '@/shared/components/button'

const body = `<ol class="list-decimal space-y-1 pl-5"><li>Audit the existing fields</li><li>Replace inputs with Field + Input</li><li>Port validation to the new schema</li><li>Update the tests</li></ol>
  <div footer class="contents"><button z-button zType="outline" zSize="sm">Edit</button><button z-button zSize="sm">Build</button></div>`
const tpl = (attrs: string) => ({
  moduleMetadata: { imports: [AiPlanComponent, ZardButtonComponent] },
  template: `<ai-plan class="w-96" heading="Migrate the checkout form" description="Move the form to the shared field components in four steps." ${attrs}>${body}</ai-plan>`,
})
export const Default: Story = { render: () => tpl('') }
export const Streaming: Story = { render: () => tpl('[isStreaming]="true"') }
export const Collapsed: Story = { render: () => tpl('[open]="false"') }
