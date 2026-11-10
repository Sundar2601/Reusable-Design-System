import type { Meta, StoryObj } from '@storybook/react-vite'
import { ArrowLeft, MoreVertical, Search } from 'lucide-react'
import { AndroidTopAppBar } from './AndroidTopAppBar'

const meta = {
  title: 'Mobile/Android/Top App Bar',
  component: AndroidTopAppBar,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: { variant: { control: 'inline-radio', options: ['small', 'center', 'medium', 'large'] }, scrolled: { control: 'boolean' } },
  args: {
    variant: 'small',
    title: 'Inbox',
    navigationIcon: <ArrowLeft />,
    actions: (
      <>
        <span className="flex size-12 items-center justify-center"><Search /></span>
        <span className="flex size-12 items-center justify-center"><MoreVertical /></span>
      </>
    ),
  },
  decorators: [(Story) => <div className="w-[360px] overflow-hidden rounded-lg border border-border"><Story /></div>],
} satisfies Meta<typeof AndroidTopAppBar>

export default meta
type Story = StoryObj<typeof meta>

export const Small: Story = {}
export const CenterAligned: Story = { args: { variant: 'center' } }
export const Medium: Story = { args: { variant: 'medium' } }
export const Large: Story = { args: { variant: 'large' } }
export const Scrolled: Story = { args: { scrolled: true } }
