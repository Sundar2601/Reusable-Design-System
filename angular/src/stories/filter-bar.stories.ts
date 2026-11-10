import type { Meta, StoryObj } from '@storybook/angular'
import { FilterBarComponent } from '@/shared/extended/filter-bar.component'

const filters = [
  { key: 'status', label: 'Status', options: [{ value: 'active', label: 'Active' }, { value: 'paused', label: 'Paused' }, { value: 'archived', label: 'Archived' }] },
  { key: 'owner', label: 'Owner', options: [{ value: 'me', label: 'Me' }, { value: 'team', label: 'My team' }] },
]

const meta: Meta<FilterBarComponent> = {
  title: 'Filter Bar',
  component: FilterBarComponent,
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Filter Bar (extended, hand-built). Same API as the React FilterBar: `filters`, two-way `value` (selected option per key), two-way `search`, `searchPlaceholder`. A Clear button appears when anything is active.' } } },
  args: { filters, value: {}, search: '', searchPlaceholder: 'Search' },
  render: (args) => ({
    props: args,
    template: `<ui-filter-bar [filters]="filters" [(value)]="value" [(search)]="search" [searchPlaceholder]="searchPlaceholder" />`,
  }),
}
export default meta
type Story = StoryObj<FilterBarComponent>

export const Default: Story = {}
export const WithActiveFilters: Story = { args: { value: { status: 'active' } } }
export const SearchOnly: Story = { args: { filters: [], searchPlaceholder: 'Search projects' } }
