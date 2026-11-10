import type { Meta, StoryObj } from '@storybook/react-vite'
import { ChevronRight, Mail } from 'lucide-react'
import { AndroidListItem } from './AndroidListItem'

const meta = {
  title: 'Mobile/Android/List Item',
  component: AndroidListItem,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  args: { headline: 'List item', className: 'w-[360px]' },
} satisfies Meta<typeof AndroidListItem>

export default meta
type Story = StoryObj<typeof meta>

export const OneLine: Story = { args: { leading: <Mail />, trailing: <ChevronRight />, divider: true } }
export const TwoLines: Story = { args: { leading: <Mail />, supportingText: 'Supporting line text', trailing: '10:24' } }
export const ThreeLines: Story = {
  args: { leading: <Mail />, overline: 'Overline', supportingText: 'Supporting text that can wrap onto a second line when it is long enough.', trailing: '10:24', lines: 3 },
}
export const Selected: Story = { args: { selected: true, leading: <Mail />, supportingText: 'Selected state' } }
export const List: Story = {
  render: () => (
    <div className="w-[360px]">
      {['Inbox', 'Starred', 'Sent'].map((h) => (
        <AndroidListItem key={h} headline={h} supportingText="3 new messages" leading={<Mail />} trailing={<ChevronRight />} divider onClick={() => {}} />
      ))}
    </div>
  ),
}
