import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from './Button'

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  args: { children: 'Button', variant: 'primary', size: 'lg', disabled: false },
  argTypes: {
    variant: { control: 'inline-radio', options: ['primary', 'secondary', 'ghost'] },
    size: { control: 'inline-radio', options: ['lg', 'md', 'sm'] },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
export const Secondary: Story = { args: { variant: 'secondary' } }
export const Ghost: Story = { args: { variant: 'ghost' } }
export const Disabled: Story = { args: { disabled: true } }

/** Every Type x Size from Figma, enabled and disabled. Use the toolbar to flip light/dark. */
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-xl">
      {[false, true].map((disabled) => (
        <div key={String(disabled)} className="flex flex-col gap-lg">
          <p className="text-body-small text-muted-foreground">{disabled ? 'Disabled' : 'Default'}</p>
          {(['primary', 'secondary', 'ghost'] as const).map((variant) => (
            <div key={variant} className="flex items-center gap-lg">
              {(['lg', 'md', 'sm'] as const).map((size) => (
                <Button key={size} variant={variant} size={size} disabled={disabled}>
                  Button
                </Button>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  ),
}
