import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { ZardTextareaComponent } from '@/shared/components/textarea'

const meta: Meta<ZardTextareaComponent> = {
  title: 'Textarea',
  component: ZardTextareaComponent,
  tags: ['autodocs'],
  decorators: [moduleMetadata({ imports: [ZardTextareaComponent] })],
  parameters: { docs: { description: { component: 'Textarea (ZardUI). `<textarea z-textarea>`; use native `disabled` and `aria-invalid` like the React Textarea.' } } },
  render: () => ({ template: `<textarea z-textarea class="w-80" placeholder="Type your message here."></textarea>` }),
}
export default meta
type Story = StoryObj<ZardTextareaComponent>

export const Default: Story = {}
export const WithValue: Story = {
  render: () => ({ template: `<textarea z-textarea class="w-80">Design systems keep teams consistent.</textarea>` }),
}
export const Invalid: Story = {
  render: () => ({ template: `<textarea z-textarea class="w-80" aria-invalid="true">Too short</textarea>` }),
}
export const Disabled: Story = {
  render: () => ({ template: `<textarea z-textarea class="w-80" disabled placeholder="Type your message here."></textarea>` }),
}
