import type { Meta, StoryObj } from '@storybook/react-vite'
import { Checkbox } from './Checkbox'
import { Input } from './Input'
import { Label } from './Label'

const meta = {
  title: 'Components/Label',
  component: Label,
  tags: ['autodocs'],
  args: { children: 'Email', required: false },
  argTypes: { required: { control: 'boolean' } },
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Required: Story = { args: { required: true } }
export const WithInput: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Label htmlFor="label-email">Email</Label>
      <Input id="label-email" placeholder="you@example.com" />
    </div>
  ),
}
export const DisabledControl: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Checkbox id="label-terms" disabled />
      <Label htmlFor="label-terms" className="peer-disabled:opacity-50 opacity-50">
        Accept terms
      </Label>
    </div>
  ),
}
