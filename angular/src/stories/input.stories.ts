import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { ZardInputComponent } from '@/shared/components/input'

const meta: Meta<{ placeholder: string; disabled: boolean }> = {
  title: 'Input',
  component: ZardInputComponent,
  tags: ['autodocs'],
  decorators: [moduleMetadata({ imports: [ZardInputComponent] })],
  args: { placeholder: 'Placeholder', disabled: false },
  render: (args) => ({
    props: args,
    template: `<input z-input [placeholder]="placeholder" [disabled]="disabled" class="w-80" />`,
  }),
}
export default meta
type Story = StoryObj<{ placeholder: string; disabled: boolean }>

export const Default: Story = {}
export const WithValue: Story = {
  render: () => ({ template: `<input z-input value="Hello" class="w-80" />` }),
}
export const Rounded: Story = {
  render: (args) => ({ props: args, template: `<input z-input [placeholder]="placeholder" class="w-80 rounded-full" />` }),
}
export const Disabled: Story = { args: { disabled: true } }
export const Invalid: Story = {
  render: (args) => ({ props: args, template: `<input z-input aria-invalid="true" placeholder="Email" class="w-80" />` }),
}
