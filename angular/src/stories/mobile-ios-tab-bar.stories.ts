import type { Meta, StoryObj } from '@storybook/angular'
import { IosTabBarComponent } from '@/shared/extended/ios-tab-bar.component'

const items = [
  { value: 'home', label: 'Home', icon: '<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1Z"/>' },
  { value: 'search', label: 'Search', icon: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>' },
  { value: 'favorites', label: 'Favorites', icon: '<path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7Z"/>' },
  { value: 'profile', label: 'Profile', icon: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>' },
]

const meta: Meta<IosTabBarComponent> = {
  title: 'Mobile/iOS/Tab Bar',
  component: IosTabBarComponent,
  tags: ['autodocs'],
  parameters: { layout: 'centered', docs: { description: { component: 'iOS Tab Bar (extended, hand-built). Same as the React IosTabBar: `items` (value, label, icon as inner SVG markup) and two-way `value`.' } } },
  args: { items, value: 'home' },
  render: (args) => ({ props: args, template: `<div class="w-[390px] bg-background"><ios-tab-bar [items]="items" [(value)]="value" /></div>` }),
}
export default meta
type Story = StoryObj<IosTabBarComponent>

export const Default: Story = {}
export const ThreeTabs: Story = { args: { items: items.slice(0, 3), value: 'search' } }
