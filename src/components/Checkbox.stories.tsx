import type { Meta, StoryObj } from '@storybook/react-vite'
import { Checkbox } from './Checkbox'

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  args: { label: 'Label', disabled: false },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Unchecked: Story = {}
export const Checked: Story = { args: { defaultChecked: true } }
export const Disabled: Story = { args: { disabled: true } }
export const DisabledChecked: Story = { args: { disabled: true, defaultChecked: true } }

export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-lg">
      <Checkbox label="Label" />
      <Checkbox label="Label" defaultChecked />
      <Checkbox label="Label" disabled />
      <Checkbox label="Label" disabled defaultChecked />
    </div>
  ),
}
