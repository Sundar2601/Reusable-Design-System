import type { Meta, StoryObj } from '@storybook/react-vite'
import { NumberInput } from './NumberInput'

const meta = {
  title: 'Components/Number Input',
  component: NumberInput,
  tags: ['autodocs'],
  argTypes: {
    min: { control: 'number' },
    max: { control: 'number' },
    step: { control: 'number' },
    disabled: { control: 'boolean' },
  },
  args: { defaultValue: 1 },
} satisfies Meta<typeof NumberInput>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const WithLimits: Story = { args: { defaultValue: 5, min: 0, max: 10 } }
export const Step: Story = { args: { defaultValue: 0, step: 5 } }
export const Invalid: Story = { args: { defaultValue: 99, 'aria-invalid': true } }
export const Disabled: Story = { args: { disabled: true } }
