import type { Meta, StoryObj } from '@storybook/angular'
import { IosActionSheetComponent } from '@/shared/extended/ios-action-sheet.component'

const meta: Meta<IosActionSheetComponent> = {
  title: 'Mobile/iOS/Action Sheet',
  component: IosActionSheetComponent,
  tags: ['autodocs'],
  parameters: { layout: 'centered', docs: { description: { component: 'iOS Action Sheet (extended, hand-built). Same as the React IosActionSheet: `title`, `message`, `actions` (label, destructive), `cancelLabel`, `(actionClick)`, `(cancel)`.' } } },
  args: { title: '', message: '', actions: [{ label: 'Take Photo' }, { label: 'Choose from Library' }], cancelLabel: 'Cancel' },
  render: (args) => ({
    props: args,
    template: `<div class="w-[390px] bg-black/40 p-2"><ios-action-sheet [title]="title" [message]="message" [actions]="actions" [cancelLabel]="cancelLabel" /></div>`,
  }),
}
export default meta
type Story = StoryObj<IosActionSheetComponent>

export const Default: Story = {}
export const WithTitle: Story = { args: { title: 'Profile Photo', message: 'Choose how to update your photo.' } }
export const Destructive: Story = { args: { title: 'Delete this conversation?', actions: [{ label: 'Delete Conversation', destructive: true }] } }
