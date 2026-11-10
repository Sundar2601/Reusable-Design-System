import type { Meta, StoryObj } from '@storybook/react-vite'
import { Plus } from 'lucide-react'
import { AndroidButton } from './AndroidButton'

const meta = {
  title: 'Mobile/Android/Button',
  component: AndroidButton,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: { variant: { control: 'select', options: ['filled', 'tonal', 'outlined', 'elevated', 'text'] }, disabled: { control: 'boolean' } },
  args: { children: 'Button', variant: 'filled' },
} satisfies Meta<typeof AndroidButton>

export default meta
type Story = StoryObj<typeof meta>

export const Filled: Story = {}
export const Tonal: Story = { args: { variant: 'tonal' } }
export const Outlined: Story = { args: { variant: 'outlined' } }
export const Elevated: Story = { args: { variant: 'elevated' } }
export const Text: Story = { args: { variant: 'text' } }
export const WithIcon: Story = { args: { icon: <Plus /> } }
export const Disabled: Story = { args: { disabled: true } }
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      {(['filled', 'tonal', 'outlined', 'elevated', 'text'] as const).map((v) => (
        <AndroidButton key={v} variant={v}>{v}</AndroidButton>
      ))}
    </div>
  ),
}
