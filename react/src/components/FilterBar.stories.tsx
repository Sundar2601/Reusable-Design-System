import type { Meta, StoryObj } from '@storybook/react-vite'
import { FilterBar } from './FilterBar'

const filters = [
  { key: 'status', label: 'Status', options: [{ value: 'active', label: 'Active' }, { value: 'paused', label: 'Paused' }, { value: 'archived', label: 'Archived' }] },
  { key: 'owner', label: 'Owner', options: [{ value: 'me', label: 'Me' }, { value: 'team', label: 'My team' }] },
]

const meta = {
  title: 'Components/Filter Bar',
  component: FilterBar,
  tags: ['autodocs'],
  args: { filters },
} satisfies Meta<typeof FilterBar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const WithActiveFilters: Story = { args: { defaultValue: { status: 'active' } } }
export const SearchOnly: Story = { args: { filters: [], searchPlaceholder: 'Search projects' } }
