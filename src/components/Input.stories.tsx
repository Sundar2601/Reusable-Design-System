import type { Meta, StoryObj } from '@storybook/react-vite'
import { Input } from './Input'

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  args: { label: 'Label', placeholder: 'Placeholder', helperText: 'Helper text', error: false, disabled: false },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const WithError: Story = { args: { error: true, helperText: 'This field is required' } }
export const Disabled: Story = { args: { disabled: true } }
/** Focus is a CSS state: click or tab into the field. */
export const NoHelperText: Story = { args: { helperText: undefined } }

export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-xl">
      <Input label="Label" placeholder="Default" helperText="Helper text" />
      <Input label="Label" placeholder="Error" helperText="Helper text" error />
      <Input label="Label" placeholder="Disabled" helperText="Helper text" disabled />
    </div>
  ),
}
