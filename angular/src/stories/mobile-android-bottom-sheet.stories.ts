import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { AndroidBottomSheetComponent } from '@/shared/extended/android-bottom-sheet.component'
import { AndroidListItemComponent } from '@/shared/extended/android-list-item.component'

const svg = (d: string) => `<svg slot="leading" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`
const rows = `
  <android-list-item headline="Copy link" [interactive]="true">${svg('<path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1" />')}</android-list-item>
  <android-list-item headline="Share to..." [interactive]="true">${svg('<circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4" />')}</android-list-item>
  <android-list-item headline="Add to favorites" [interactive]="true">${svg('<path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z" />')}</android-list-item>`

const meta: Meta<AndroidBottomSheetComponent> = {
  title: 'Mobile/Android/Bottom Sheet',
  component: AndroidBottomSheetComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: { description: { component: 'Android Bottom Sheet (extended, hand-built). Same API as the React AndroidBottomSheet: `title`, `handle`, `variant` modal / standard. Content is projected.' } },
  },
  argTypes: { variant: { control: 'inline-radio', options: ['modal', 'standard'] }, handle: { control: 'boolean' } },
  decorators: [moduleMetadata({ imports: [AndroidListItemComponent] })],
  args: { title: 'Share', handle: true, variant: 'modal' },
  render: (args) => ({ props: args, template: `<android-bottom-sheet class="w-[360px]" [title]="title" [handle]="handle" [variant]="variant">${rows}</android-bottom-sheet>` }),
}
export default meta
type Story = StoryObj<AndroidBottomSheetComponent>

export const Modal: Story = {}
export const Standard: Story = { args: { variant: 'standard' } }
export const NoHandle: Story = { args: { handle: false } }
