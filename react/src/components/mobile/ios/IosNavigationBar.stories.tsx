import type { Meta, StoryObj } from '@storybook/react-vite'
import { IosNavigationBar } from './IosNavigationBar'

const meta = {
  title: 'Mobile/iOS/Navigation Bar',
  component: IosNavigationBar,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [(Story) => <div className="w-[390px] bg-background">{Story()}</div>],
  args: { title: 'Settings' },
} satisfies Meta<typeof IosNavigationBar>

export default meta
type Story = StoryObj<typeof meta>

export const Inline: Story = {}
export const WithBackButton: Story = { args: { title: 'General', backLabel: 'Settings', trailing: <span>Edit</span> } }
export const LargeTitle: Story = { args: { title: 'Settings', largeTitle: true, trailing: <span>Edit</span> } }
