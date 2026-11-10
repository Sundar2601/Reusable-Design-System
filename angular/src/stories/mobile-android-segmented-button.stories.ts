import type { Meta, StoryObj } from '@storybook/angular'
import { AndroidSegmentedButtonComponent } from '@/shared/extended/android-segmented-button.component'

const options = [
  { value: 'day', label: 'Day' },
  { value: 'week', label: 'Week' },
  { value: 'month', label: 'Month' },
]

const meta: Meta<AndroidSegmentedButtonComponent> = {
  title: 'Mobile/Android/Segmented Button',
  component: AndroidSegmentedButtonComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: { description: { component: 'Android Segmented Button (extended, hand-built). Same API as the React AndroidSegmentedButton: `options`, `multiple`, two-way `value` (array of selected values).' } },
  },
  argTypes: { multiple: { control: 'boolean' } },
  args: { options, multiple: false, value: ['week'] },
  render: (args) => ({ props: args, template: `<android-segmented-button [options]="options" [multiple]="multiple" [(value)]="value" />` }),
}
export default meta
type Story = StoryObj<AndroidSegmentedButtonComponent>

export const Single: Story = {}
export const Multiple: Story = { args: { multiple: true, value: ['day', 'month'] } }
export const WithDisabled: Story = { args: { options: [...options.slice(0, 2), { value: 'month', label: 'Month', disabled: true }] } }
