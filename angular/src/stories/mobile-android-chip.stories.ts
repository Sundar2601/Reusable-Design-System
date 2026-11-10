import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { AndroidChipComponent, AndroidChipGroupComponent } from '@/shared/extended/android-chip.component'

const cal = '<svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>'

const meta: Meta<AndroidChipComponent> = {
  title: 'Mobile/Android/Chips',
  component: AndroidChipComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: { description: { component: 'Android Chips (extended, hand-built). Same API as the React AndroidChip / AndroidChipGroup: `variant` assist / filter / input / suggestion, two-way `selected`, `removed` output, leading icon via `[slot=icon]`.' } },
  },
  argTypes: { variant: { control: 'inline-radio', options: ['assist', 'filter', 'input', 'suggestion'] }, selected: { control: 'boolean' } },
  decorators: [moduleMetadata({ imports: [AndroidChipGroupComponent] })],
  args: { variant: 'assist', selected: false },
  render: (args) => ({ props: args, template: `<android-chip [variant]="variant" [(selected)]="selected">Chip</android-chip>` }),
}
export default meta
type Story = StoryObj<AndroidChipComponent>

export const Assist: Story = { render: () => ({ template: `<android-chip variant="assist" [hasIcon]="true">${cal}Add to calendar</android-chip>` }) }
export const Filter: Story = { args: { variant: 'filter', selected: true } }
export const Input: Story = { args: { variant: 'input' } }
export const Suggestion: Story = { args: { variant: 'suggestion' } }
export const FilterGroup: Story = {
  render: () => ({
    template: `<android-chip-group class="w-80"><android-chip variant="filter" [selected]="true">Open</android-chip><android-chip variant="filter">Favorites</android-chip><android-chip variant="filter">Nearby</android-chip><android-chip variant="filter">Top rated</android-chip></android-chip-group>`,
  }),
}
