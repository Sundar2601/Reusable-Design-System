import type { Meta, StoryObj } from '@storybook/react-vite'
import { Field, FieldDescription, FieldLabel } from './Field'
import { Input } from './Input'

const meta = { title: 'Components/Field', component: Field, tags: ['autodocs'] } satisfies Meta<typeof Field>
export default meta
type Story = StoryObj<typeof meta>

export const LabelAndDescription: Story = {
  render: () => (
    <Field>
      <FieldLabel htmlFor="name">Name</FieldLabel>
      <Input id="name" placeholder="Ada Lovelace" />
      <FieldDescription>As it appears on your ID.</FieldDescription>
    </Field>
  ),
}

export const RequiredAndDisabled: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <Field>
        <FieldLabel htmlFor="r" required>Required</FieldLabel>
        <Input id="r" />
      </Field>
      <Field>
        <FieldLabel htmlFor="d" disabled>Disabled</FieldLabel>
        <Input id="d" disabled />
      </Field>
    </div>
  ),
}
