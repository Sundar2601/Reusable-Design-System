import type { Meta, StoryObj } from '@storybook/react-vite'
import { Textarea } from './Textarea'

const meta = {
  title: 'Components/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  args: { placeholder: 'Type your message here.', disabled: false },
  argTypes: { disabled: { control: 'boolean' } },
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const WithValue: Story = { args: { defaultValue: 'Design systems keep teams consistent.' } }
export const Invalid: Story = { args: { 'aria-invalid': true, defaultValue: 'Too short' } }
export const Disabled: Story = { args: { disabled: true } }
