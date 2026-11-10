import type { Meta, StoryObj } from '@storybook/angular'
import { AndroidListItemComponent } from '@/shared/extended/android-list-item.component'

const mail = '<svg slot="leading" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></svg>'
const chevron = '<svg slot="trailing" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>'

const meta: Meta<AndroidListItemComponent> = {
  title: 'Mobile/Android/List Item',
  component: AndroidListItemComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: { description: { component: 'Android List Item (extended, hand-built). Same API as the React AndroidListItem: `headline`, `supportingText`, `overline`, `lines` 1 / 2 / 3, `divider`, `selected`, `interactive`. Slots `[slot=leading]` and `[slot=trailing]`.' } },
  },
  args: { headline: 'List item', supportingText: undefined, overline: undefined, lines: undefined, divider: false, selected: false, interactive: false },
  render: (args) => ({
    props: args,
    template: `<android-list-item class="w-[360px]" [headline]="headline" [supportingText]="supportingText" [overline]="overline" [lines]="lines" [divider]="divider" [selected]="selected" [interactive]="interactive">${mail}${chevron}</android-list-item>`,
  }),
}
export default meta
type Story = StoryObj<AndroidListItemComponent>

export const OneLine: Story = { args: { divider: true } }
export const TwoLines: Story = { args: { supportingText: 'Supporting line text' } }
export const ThreeLines: Story = { args: { overline: 'Overline', supportingText: 'Supporting text that can wrap onto a second line when it is long enough.', lines: 3 } }
export const Selected: Story = { args: { selected: true, supportingText: 'Selected state' } }
export const List: Story = {
  render: () => ({
    template: `<div class="w-[360px]">${['Inbox', 'Starred', 'Sent'].map((h) => `<android-list-item headline="${h}" supportingText="3 new messages" [divider]="true" [interactive]="true">${mail}${chevron}</android-list-item>`).join('')}</div>`,
  }),
}
