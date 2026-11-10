import type { Meta, StoryObj } from '@storybook/react-vite'
import { Home, Mail, Search, User } from 'lucide-react'
import { AndroidNavigationBar } from './AndroidNavigationBar'

const items = [
  { value: 'home', label: 'Home', icon: <Home /> },
  { value: 'search', label: 'Search', icon: <Search /> },
  { value: 'mail', label: 'Mail', icon: <Mail />, badge: 3 },
  { value: 'profile', label: 'Profile', icon: <User />, badge: true },
]

const meta = {
  title: 'Mobile/Android/Navigation Bar',
  component: AndroidNavigationBar,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  args: { items, defaultValue: 'home' },
  decorators: [(Story) => <div className="w-[360px] overflow-hidden rounded-lg border border-border"><Story /></div>],
} satisfies Meta<typeof AndroidNavigationBar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const ThreeDestinations: Story = { args: { items: items.slice(0, 3) } }
