import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { AndroidGestureBarComponent, AndroidStatusBarComponent } from '@/shared/extended/android-status-bar.component'

const meta: Meta<AndroidStatusBarComponent> = {
  title: 'Mobile/Android/Status Bar',
  component: AndroidStatusBarComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: { description: { component: 'Android Status Bar (extended, hand-built). Same API as the React AndroidStatusBar: `time`. Includes `android-gesture-bar` for the bottom gesture pill.' } },
  },
  decorators: [moduleMetadata({ imports: [AndroidGestureBarComponent] })],
  args: { time: '9:30' },
  render: (args) => ({ props: args, template: `<div class="w-[360px] overflow-hidden rounded-lg border border-border"><android-status-bar [time]="time" /></div>` }),
}
export default meta
type Story = StoryObj<AndroidStatusBarComponent>

export const Default: Story = {}
export const GestureBar: Story = {
  render: () => ({ template: `<div class="w-[360px] overflow-hidden rounded-lg border border-border"><android-gesture-bar /></div>` }),
}
