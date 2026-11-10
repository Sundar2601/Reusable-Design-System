import type { Meta, StoryObj } from '@storybook/react-vite'
import { IosHomeIndicator, IosStatusBar } from './IosStatusBar'

const meta = {
  title: 'Mobile/iOS/Status Bar & Home Indicator',
  component: IosStatusBar,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [(Story) => <div className="w-[390px] bg-background">{Story()}</div>],
  args: { time: '9:41' },
} satisfies Meta<typeof IosStatusBar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const HomeIndicator: Story = { render: () => <IosHomeIndicator /> }
export const Screen: Story = {
  render: () => (
    <div className="flex h-[300px] flex-col justify-between">
      <IosStatusBar />
      <IosHomeIndicator />
    </div>
  ),
}
