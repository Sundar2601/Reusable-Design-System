import * as React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Calendar } from 'lucide-react'
import { AndroidChip, AndroidChipGroup } from './AndroidChip'

const meta = {
  title: 'Mobile/Android/Chips',
  component: AndroidChip,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: { variant: { control: 'inline-radio', options: ['assist', 'filter', 'input', 'suggestion'] }, selected: { control: 'boolean' } },
  args: { children: 'Chip', variant: 'assist' },
} satisfies Meta<typeof AndroidChip>

export default meta
type Story = StoryObj<typeof meta>

export const Assist: Story = { args: { icon: <Calendar />, children: 'Add to calendar' } }
export const Filter: Story = { args: { variant: 'filter', selected: true, children: 'Favorites' } }
export const Input: Story = { args: { variant: 'input', children: 'Ada Lovelace' } }
export const Suggestion: Story = { args: { variant: 'suggestion', children: 'Nearby' } }

export const FilterGroup: Story = {
  render: () => {
    const [sel, setSel] = React.useState<string[]>(['Open'])
    return (
      <AndroidChipGroup className="w-80">
        {['Open', 'Favorites', 'Nearby', 'Top rated'].map((l) => (
          <AndroidChip key={l} variant="filter" selected={sel.includes(l)} onClick={() => setSel((s) => (s.includes(l) ? s.filter((x) => x !== l) : [...s, l]))}>
            {l}
          </AndroidChip>
        ))}
      </AndroidChipGroup>
    )
  },
}
