import type { Meta, StoryObj } from '@storybook/angular'
import { IosSegmentedControlComponent } from '@/shared/extended/ios-segmented-control.component'

const options = [
  { value: 'day', label: 'Day' },
  { value: 'week', label: 'Week' },
  { value: 'month', label: 'Month' },
  { value: 'year', label: 'Year' },
]

const meta: Meta<IosSegmentedControlComponent> = {
  title: 'Mobile/iOS/Segmented Control',
  component: IosSegmentedControlComponent,
  tags: ['autodocs'],
  parameters: { layout: 'centered', docs: { description: { component: 'iOS Segmented Control (extended, hand-built). Same as the React IosSegmentedControl: `options` and two-way `value`.' } } },
  args: { options, value: 'week' },
  render: (args) => ({ props: args, template: `<div class="w-[358px]"><ios-segmented-control [options]="options" [(value)]="value" /></div>` }),
}
export default meta
type Story = StoryObj<IosSegmentedControlComponent>

export const Default: Story = {}
export const TwoSegments: Story = { args: { options: options.slice(0, 2), value: 'day' } }
