import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { IosHomeIndicatorComponent, IosStatusBarComponent } from '@/shared/extended/ios-status-bar.component'

const meta: Meta<IosStatusBarComponent> = {
  title: 'Mobile/iOS/Status Bar & Home Indicator',
  component: IosStatusBarComponent,
  tags: ['autodocs'],
  parameters: { layout: 'centered', docs: { description: { component: 'iOS Status Bar and Home Indicator (extended, hand-built). Same as the React IosStatusBar / IosHomeIndicator: `time` input.' } } },
  decorators: [moduleMetadata({ imports: [IosHomeIndicatorComponent] })],
  args: { time: '9:41' },
  render: (args) => ({ props: args, template: `<div class="w-[390px] bg-background"><ios-status-bar [time]="time" /></div>` }),
}
export default meta
type Story = StoryObj<IosStatusBarComponent>

export const Default: Story = {}
export const HomeIndicator: Story = { render: () => ({ template: `<div class="w-[390px] bg-background"><ios-home-indicator /></div>` }) }
export const Screen: Story = {
  render: () => ({ template: `<div class="flex h-[300px] w-[390px] flex-col justify-between bg-background"><ios-status-bar /><ios-home-indicator /></div>` }),
}
