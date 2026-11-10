import type { Meta, StoryObj } from '@storybook/react-vite'
import { Checkbox } from './Checkbox'

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  args: { disabled: false },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Unchecked: Story = {}
export const Checked: Story = { args: { defaultChecked: true } }
export const Invalid: Story = { args: { 'aria-invalid': true } }
export const Disabled: Story = { args: { disabled: true } }
export const WithLabelAndDescription: Story = {
  args: { label: 'Accept terms', description: 'You agree to our terms and privacy policy.', defaultChecked: true },
}

export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Checkbox label="Unchecked" />
      <Checkbox label="Checked" defaultChecked />
      <Checkbox label="Invalid" aria-invalid />
      <Checkbox label="Invalid, checked" aria-invalid defaultChecked />
      <Checkbox label="Disabled" disabled />
      <Checkbox label="Disabled, checked" disabled defaultChecked />
    </div>
  ),
}
