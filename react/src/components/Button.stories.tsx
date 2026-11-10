import type { Meta, StoryObj } from '@storybook/react-vite'
import { ArrowRight, Plus } from 'lucide-react'
import { Button } from './Button'

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  args: { children: 'Button', variant: 'default', size: 'default', disabled: false, rounded: false },
  argTypes: {
    variant: { control: 'select', options: ['default', 'outline', 'secondary', 'ghost', 'destructive', 'link'] },
    size: { control: 'inline-radio', options: ['xs', 'sm', 'default', 'lg'] },
    disabled: { control: 'boolean' },
    rounded: { control: 'boolean' },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Outline: Story = { args: { variant: 'outline' } }
export const Secondary: Story = { args: { variant: 'secondary' } }
export const Ghost: Story = { args: { variant: 'ghost' } }
export const Destructive: Story = { args: { variant: 'destructive' } }
export const Link: Story = { args: { variant: 'link' } }
export const Rounded: Story = { args: { rounded: true } }
export const Disabled: Story = { args: { disabled: true } }
export const WithIcons: Story = {
  args: { leftIcon: <Plus />, rightIcon: <ArrowRight />, kbd: <kbd className="text-xs text-muted-foreground">⌘K</kbd> },
}

/** Every Variant x Size from Figma. Use the toolbar to flip light/dark. */
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      {(['default', 'outline', 'secondary', 'ghost', 'destructive', 'link'] as const).map((variant) => (
        <div key={variant} className="flex items-center gap-4">
          {(['xs', 'sm', 'default', 'lg'] as const).map((size) => (
            <Button key={size} variant={variant} size={size}>
              Button
            </Button>
          ))}
        </div>
      ))}
    </div>
  ),
}
