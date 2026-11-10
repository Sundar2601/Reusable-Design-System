import type { Meta, StoryObj } from '@storybook/angular'
import { SegmentedControlComponent } from '@/shared/extended/segmented-control.component'

const options = [
  { value: 'day', label: 'Day' },
  { value: 'week', label: 'Week' },
  { value: 'month', label: 'Month' },
]

const meta: Meta<SegmentedControlComponent> = {
  title: 'Segmented Control',
  component: SegmentedControlComponent,
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Segmented Control (extended, hand-built). Same API as the React SegmentedControl: `options`, two-way `value`, `size` sm / default.' } } },
  argTypes: { size: { control: 'inline-radio', options: ['sm', 'default'] } },
  args: { options, value: 'week', size: 'default' },
  render: (args) => ({ props: args, template: `<ui-segmented-control [options]="options" [(value)]="value" [size]="size" />` }),
}
export default meta
type Story = StoryObj<SegmentedControlComponent>

export const Default: Story = {}
export const Small: Story = { args: { size: 'sm' } }
export const WithIcons: Story = {
  args: { options: [{ value: 'grid', label: 'Grid' }, { value: 'list', label: 'List' }], value: 'grid' },
}
export const WithDisabledOption: Story = {
  args: { options: [{ value: 'day', label: 'Day' }, { value: 'week', label: 'Week' }, { value: 'month', label: 'Month', disabled: true }] },
}
