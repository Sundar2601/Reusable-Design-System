import type { Meta, StoryObj } from '@storybook/react-vite'
import { FormField } from './FormField'
import { Input } from './Input'
import { Textarea } from './Textarea'

const meta = {
  title: 'Components/Form Field',
  component: FormField,
  tags: ['autodocs'],
  args: { label: 'Email', description: 'We never share it.', required: false, disabled: false },
  argTypes: { required: { control: 'boolean' }, disabled: { control: 'boolean' }, error: { control: 'text' } },
  render: (args) => <FormField {...args}>{(control) => <Input placeholder="you@example.com" {...control} />}</FormField>,
} as Meta<typeof FormField>

export default meta
type Story = StoryObj<typeof FormField>

export const Default: Story = {}
export const Required: Story = { args: { required: true } }
export const WithError: Story = { args: { error: 'Enter a valid email address.' } }
export const Disabled: Story = { args: { disabled: true } }
export const WithTextarea: Story = {
  args: { label: 'Message', description: 'Up to 500 characters.' },
  render: (args) => <FormField {...args}>{(control) => <Textarea {...control} />}</FormField>,
}
