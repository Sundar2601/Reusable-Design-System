import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { AndroidButtonComponent } from '@/shared/extended/android-button.component'
import { AndroidDialogComponent } from '@/shared/extended/android-dialog.component'

const actions = `<android-button slot="actions" variant="text">Cancel</android-button><android-button slot="actions" variant="text">Discard</android-button>`
const trash = '<svg slot="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6" /></svg>'

const meta: Meta<AndroidDialogComponent> = {
  title: 'Mobile/Android/Dialog',
  component: AndroidDialogComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: { description: { component: 'Android Dialog panel (extended, hand-built). Same API as the React AndroidDialog: `title`, `description`, `centered`. Slots `[slot=icon]` and `[slot=actions]`.' } },
  },
  decorators: [moduleMetadata({ imports: [AndroidButtonComponent] })],
  args: { title: 'Discard draft?', description: 'Your draft will be permanently deleted. This cannot be undone.', centered: false },
  render: (args) => ({ props: args, template: `<android-dialog [title]="title" [description]="description" [centered]="centered">${actions}</android-dialog>` }),
}
export default meta
type Story = StoryObj<AndroidDialogComponent>

export const Basic: Story = {}
export const WithIcon: Story = {
  args: { title: 'Delete item?', centered: true },
  render: (args) => ({ props: args, template: `<android-dialog [title]="title" [description]="description" [centered]="centered">${trash}${actions}</android-dialog>` }),
}
