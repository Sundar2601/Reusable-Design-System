import type { Meta, StoryObj } from '@storybook/react-vite'
import { IosActionSheet } from './IosActionSheet'

const meta = {
  title: 'Mobile/iOS/Action Sheet',
  component: IosActionSheet,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [(Story) => <div className="w-[390px] bg-black/40 p-2">{Story()}</div>],
  args: { actions: [{ label: 'Take Photo' }, { label: 'Choose from Library' }] },
} satisfies Meta<typeof IosActionSheet>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const WithTitle: Story = { args: { title: 'Profile Photo', message: 'Choose how to update your photo.' } }
export const Destructive: Story = {
  args: { title: 'Delete this conversation?', actions: [{ label: 'Delete Conversation', destructive: true }] },
}
