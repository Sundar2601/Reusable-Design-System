import type { Meta, StoryObj } from '@storybook/react-vite'
import { Link, Share2, Star } from 'lucide-react'
import { AndroidBottomSheet } from './AndroidBottomSheet'
import { AndroidListItem } from './AndroidListItem'

const meta = {
  title: 'Mobile/Android/Bottom Sheet',
  component: AndroidBottomSheet,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: { variant: { control: 'inline-radio', options: ['modal', 'standard'] }, handle: { control: 'boolean' } },
  args: { title: 'Share', className: 'w-[360px]' },
  render: (args) => (
    <AndroidBottomSheet {...args}>
      <AndroidListItem headline="Copy link" leading={<Link />} onClick={() => {}} />
      <AndroidListItem headline="Share to..." leading={<Share2 />} onClick={() => {}} />
      <AndroidListItem headline="Add to favorites" leading={<Star />} onClick={() => {}} />
    </AndroidBottomSheet>
  ),
} satisfies Meta<typeof AndroidBottomSheet>

export default meta
type Story = StoryObj<typeof meta>

export const Modal: Story = {}
export const Standard: Story = { args: { variant: 'standard' } }
export const NoHandle: Story = { args: { handle: false } }
