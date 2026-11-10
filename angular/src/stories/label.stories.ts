import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { ZardInputComponent } from '@/shared/components/input'
import { ZardLabelComponent } from '@/shared/extended/label.component'

const meta: Meta<ZardLabelComponent> = {
  title: 'Label',
  component: ZardLabelComponent,
  tags: ['autodocs'],
  decorators: [moduleMetadata({ imports: [ZardLabelComponent, ZardInputComponent] })],
  parameters: { docs: { description: { component: 'Label (hand-built, ZardUI has no standalone Label). Same look as the React Label: `<label z-label>` with an optional `zRequired` asterisk.' } } },
  argTypes: { zRequired: { name: 'required', control: 'boolean' } },
  args: { zRequired: false },
  render: (args) => ({ props: args, template: `<label z-label [zRequired]="zRequired">Email</label>` }),
}
export default meta
type Story = StoryObj<ZardLabelComponent>

export const Default: Story = {}
export const Required: Story = { args: { zRequired: true } }
export const WithInput: Story = {
  render: () => ({
    template: `<div class="flex w-80 flex-col gap-2">
      <label z-label for="label-email">Email</label>
      <input z-input id="label-email" placeholder="you@example.com" />
    </div>`,
  }),
}
