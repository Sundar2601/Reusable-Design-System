import type { Meta, StoryObj } from '@storybook/react-vite'
import { Bold, Italic } from 'lucide-react'
import { Toggle } from './Toggle'

const meta = {
  title: 'Components/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  args: { variant: 'default', size: 'default', disabled: false, 'aria-label': 'Toggle bold' },
  argTypes: {
    variant: { control: 'inline-radio', options: ['default', 'outline'] },
    size: { control: 'inline-radio', options: ['sm', 'default', 'lg'] },
    disabled: { control: 'boolean' },
  },
  render: (args) => (
    <Toggle {...args}>
      <Bold />
    </Toggle>
  ),
} satisfies Meta<typeof Toggle>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Outline: Story = { args: { variant: 'outline' } }
export const On: Story = { args: { defaultPressed: true } }
export const Disabled: Story = { args: { disabled: true } }
export const WithText: Story = {
  render: (args) => (
    <Toggle {...args} aria-label="Toggle italic">
      <Italic /> Italic
    </Toggle>
  ),
}
export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      {(['sm', 'default', 'lg'] as const).map((size) => (
        <Toggle key={size} size={size} variant="outline" aria-label={`Bold ${size}`}>
          <Bold />
        </Toggle>
      ))}
    </div>
  ),
}
