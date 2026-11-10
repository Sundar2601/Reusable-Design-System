import type { Meta, StoryObj } from '@storybook/react-vite'
import { DatePicker } from './DatePicker'

const meta = {
  title: 'Components/Date Picker',
  component: DatePicker,
  tags: ['autodocs'],
  args: { placeholder: 'Pick a date', disabled: false },
  argTypes: { disabled: { control: 'boolean' }, format: { control: 'text' } },
} satisfies Meta<typeof DatePicker>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const WithValue: Story = { args: { defaultValue: new Date(2026, 5, 15) } }
export const CustomFormat: Story = { args: { defaultValue: new Date(2026, 5, 15), format: 'dd/MM/yyyy' } }
export const Invalid: Story = { args: { 'aria-invalid': true } }
export const Disabled: Story = { args: { disabled: true } }
