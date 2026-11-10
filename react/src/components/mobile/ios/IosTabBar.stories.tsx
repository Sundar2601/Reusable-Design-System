import type { Meta, StoryObj } from '@storybook/react-vite'
import { Heart, House, Search, User } from 'lucide-react'
import { IosTabBar } from './IosTabBar'

const items = [
  { value: 'home', label: 'Home', icon: <House /> },
  { value: 'search', label: 'Search', icon: <Search /> },
  { value: 'favorites', label: 'Favorites', icon: <Heart /> },
  { value: 'profile', label: 'Profile', icon: <User /> },
]

const meta = {
  title: 'Mobile/iOS/Tab Bar',
  component: IosTabBar,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [(Story) => <div className="w-[390px] bg-background">{Story()}</div>],
  args: { items, defaultValue: 'home' },
} satisfies Meta<typeof IosTabBar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const ThreeTabs: Story = { args: { items: items.slice(0, 3), defaultValue: 'search' } }
