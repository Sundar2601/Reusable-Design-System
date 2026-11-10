import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { AiConfirmationComponent } from '@/shared/extended/ai-confirmation.component'

const meta: Meta<AiConfirmationComponent> = {
  title: 'AI Elements/Confirmation',
  component: AiConfirmationComponent,
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'AI Confirmation (hand-built, mirrors the React Confirmation). `state` is requested, accepted or rejected; emits `approved` and `rejected`.' } } },
  decorators: [moduleMetadata({ imports: [AiConfirmationComponent] })],
}
export default meta
type Story = StoryObj<AiConfirmationComponent>

const tpl = (state: string) => ({
  template: `<ai-confirmation class="w-96" state="${state}" heading="Allow the assistant to delete 3 files?" description="This runs rm on the selected files in your workspace and cannot be undone." />`,
})
export const Requested: Story = { render: () => tpl('requested') }
export const Accepted: Story = { render: () => tpl('accepted') }
export const Rejected: Story = { render: () => tpl('rejected') }
