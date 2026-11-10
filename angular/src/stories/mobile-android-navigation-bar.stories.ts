import type { Meta, StoryObj } from '@storybook/angular'
import { AndroidNavigationBarComponent, type AndroidNavigationItem } from '@/shared/extended/android-navigation-bar.component'

const icon = (d: string) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`
const items: AndroidNavigationItem[] = [
  { value: 'home', label: 'Home', icon: icon('<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />') },
  { value: 'search', label: 'Search', icon: icon('<circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />') },
  { value: 'mail', label: 'Mail', icon: icon('<rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" />'), badge: 3 },
  { value: 'profile', label: 'Profile', icon: icon('<circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" />'), badge: true },
]

const meta: Meta<AndroidNavigationBarComponent> = {
  title: 'Mobile/Android/Navigation Bar',
  component: AndroidNavigationBarComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: { description: { component: 'Android Navigation Bar (extended, hand-built). Same API as the React AndroidNavigationBar: `items` (value, label, icon SVG markup, badge) and two-way `value`.' } },
  },
  args: { items },
  render: (args) => ({ props: args, template: `<div class="w-[360px] overflow-hidden rounded-lg border border-border"><android-navigation-bar [items]="items" /></div>` }),
}
export default meta
type Story = StoryObj<AndroidNavigationBarComponent>

export const Default: Story = {}
export const ThreeDestinations: Story = { args: { items: items.slice(0, 3) } }
