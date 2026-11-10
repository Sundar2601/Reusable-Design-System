import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { ZardNativeSelectDirective } from '@/shared/components/native-select'

const meta: Meta<ZardNativeSelectDirective> = {
  title: 'Native Select',
  component: ZardNativeSelectDirective,
  tags: ['autodocs'],
  decorators: [moduleMetadata({ imports: [ZardNativeSelectDirective] })],
  parameters: { docs: { description: { component: 'Native Select (ZardUI). `<select z-native-select>` with `zSize` sm / default; the browser picker in the Input style, like the React NativeSelect.' } } },
  argTypes: { zSize: { name: 'size', control: 'inline-radio', options: ['sm', 'default'] } },
  args: { zSize: 'default' },
  render: (args) => ({
    props: args,
    template: `<select z-native-select class="w-56" [zSize]="zSize">
      <option value="">Select status</option>
      <option value="todo">Todo</option>
      <option value="in-progress">In progress</option>
      <option value="done">Done</option>
    </select>`,
  }),
}
export default meta
type Story = StoryObj<ZardNativeSelectDirective>

export const Default: Story = {}
export const Small: Story = { args: { zSize: 'sm' } }
export const Invalid: Story = {
  render: () => ({ template: `<select z-native-select class="w-56" aria-invalid="true"><option>Select status</option></select>` }),
}
export const Disabled: Story = {
  render: () => ({ template: `<select z-native-select class="w-56" disabled><option>Select status</option></select>` }),
}
export const Grouped: Story = {
  render: () => ({
    template: `<select z-native-select class="w-56">
      <option value="">Select department</option>
      <optgroup label="Engineering"><option>Frontend</option><option>Backend</option></optgroup>
      <optgroup label="Design"><option>Product</option></optgroup>
    </select>`,
  }),
}
