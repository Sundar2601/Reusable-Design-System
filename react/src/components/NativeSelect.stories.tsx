import type { Meta, StoryObj } from '@storybook/react-vite'
import { NativeSelect, NativeSelectOptGroup, NativeSelectOption } from './NativeSelect'

const meta = {
  title: 'Components/Native Select',
  component: NativeSelect,
  tags: ['autodocs'],
  args: { size: 'default', disabled: false },
  argTypes: { size: { control: 'inline-radio', options: ['sm', 'default'] }, disabled: { control: 'boolean' } },
  render: (args) => (
    <NativeSelect {...args}>
      <NativeSelectOption value="">Select status</NativeSelectOption>
      <NativeSelectOption value="todo">Todo</NativeSelectOption>
      <NativeSelectOption value="in-progress">In progress</NativeSelectOption>
      <NativeSelectOption value="done">Done</NativeSelectOption>
    </NativeSelect>
  ),
} satisfies Meta<typeof NativeSelect>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Small: Story = { args: { size: 'sm' } }
export const Invalid: Story = { args: { 'aria-invalid': true } }
export const Disabled: Story = { args: { disabled: true } }
export const Grouped: Story = {
  render: () => (
    <NativeSelect>
      <NativeSelectOption value="">Select department</NativeSelectOption>
      <NativeSelectOptGroup label="Engineering">
        <NativeSelectOption value="frontend">Frontend</NativeSelectOption>
        <NativeSelectOption value="backend">Backend</NativeSelectOption>
      </NativeSelectOptGroup>
      <NativeSelectOptGroup label="Design">
        <NativeSelectOption value="product">Product</NativeSelectOption>
      </NativeSelectOptGroup>
    </NativeSelect>
  ),
}
