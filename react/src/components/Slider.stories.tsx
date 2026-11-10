import type { Meta, StoryObj } from '@storybook/react-vite'
import { Slider } from './Slider'

const meta = {
  title: 'Components/Slider',
  component: Slider,
  tags: ['autodocs'],
  argTypes: { disabled: { control: 'boolean' }, step: { control: 'number' } },
  decorators: [(Story) => <div className="w-72"><Story /></div>],
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = { args: { defaultValue: [50], max: 100, step: 1 } }
export const Range: Story = { args: { defaultValue: [25, 75], max: 100, step: 1 } }
export const Disabled: Story = { args: { defaultValue: [50], disabled: true } }
export const Vertical: Story = {
  args: { defaultValue: [50], orientation: 'vertical' },
  decorators: [(Story) => <div className="h-40"><Story /></div>],
}
