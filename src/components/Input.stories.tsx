import type { Meta, StoryObj } from '@storybook/react-vite'
import { Field, FieldDescription, FieldLabel } from './Field'
import { Input } from './Input'

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  args: { placeholder: 'Placeholder', disabled: false, rounded: false },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const WithValue: Story = { args: { defaultValue: 'Hello' } }
export const Invalid: Story = { args: { 'aria-invalid': true } }
export const Disabled: Story = { args: { disabled: true } }
export const Rounded: Story = { args: { rounded: true } }

/** Focus is a CSS state: click or tab into the field. */
export const WithLabelAndDescription: Story = {
  render: (args) => (
    <Field>
      <FieldLabel htmlFor="email" required>
        Email
      </FieldLabel>
      <Input id="email" type="email" {...args} placeholder="you@example.com" />
      <FieldDescription>We never share your email.</FieldDescription>
    </Field>
  ),
}

export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Input placeholder="Default" />
      <Input defaultValue="With a value" />
      <Input placeholder="Invalid" aria-invalid />
      <Input placeholder="Disabled" disabled />
      <Input placeholder="Rounded" rounded />
    </div>
  ),
}
