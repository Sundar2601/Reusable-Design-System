import type { Meta, StoryObj } from '@storybook/react-vite'
import { AndroidGestureBar, AndroidStatusBar } from './AndroidStatusBar'

const meta = {
  title: 'Mobile/Android/Status Bar',
  component: AndroidStatusBar,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: { time: { control: 'text' } },
  args: { time: '9:30' },
  decorators: [(Story) => <div className="w-[360px] overflow-hidden rounded-lg border border-border"><Story /></div>],
} satisfies Meta<typeof AndroidStatusBar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const GestureBar: Story = { render: () => <AndroidGestureBar /> }
