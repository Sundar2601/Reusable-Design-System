import type { Meta, StoryObj } from '@storybook/angular'
import { DsCheckbox } from './checkbox'

const meta: Meta<DsCheckbox> = {
  title: 'Components/Checkbox',
  component: DsCheckbox,
  tags: ['autodocs'],
  args: { label: 'Accept terms and conditions', description: undefined, checked: false, disabled: false, invalid: false },
}
export default meta
type Story = StoryObj<DsCheckbox>

export const Default: Story = {}
export const Checked: Story = { args: { checked: true } }
export const WithDescription: Story = { args: { description: 'You agree to our Terms of Service and Privacy Policy.' } }
export const Invalid: Story = { args: { invalid: true } }
export const Disabled: Story = { args: { disabled: true } }
