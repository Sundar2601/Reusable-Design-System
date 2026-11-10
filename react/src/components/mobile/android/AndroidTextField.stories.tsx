import type { Meta, StoryObj } from '@storybook/react-vite'
import { Search, X } from 'lucide-react'
import { AndroidTextField } from './AndroidTextField'

const meta = {
  title: 'Mobile/Android/Text Field',
  component: AndroidTextField,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: { variant: { control: 'inline-radio', options: ['filled', 'outlined'] }, error: { control: 'boolean' }, disabled: { control: 'boolean' } },
  args: { label: 'Label', variant: 'filled', className: 'w-72' },
} satisfies Meta<typeof AndroidTextField>

export default meta
type Story = StoryObj<typeof meta>

export const Filled: Story = { args: { supportingText: 'Supporting text' } }
export const Outlined: Story = { args: { variant: 'outlined', supportingText: 'Supporting text' } }
export const WithIcons: Story = { args: { leadingIcon: <Search />, trailingIcon: <X />, defaultValue: 'Hello' } }
export const Error: Story = { args: { error: true, defaultValue: 'abc', supportingText: 'Enter a valid email' } }
export const Disabled: Story = { args: { disabled: true } }
