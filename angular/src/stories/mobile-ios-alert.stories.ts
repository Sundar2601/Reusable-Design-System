import type { Meta, StoryObj } from '@storybook/angular'
import { IosAlertComponent } from '@/shared/extended/ios-alert.component'

const meta: Meta<IosAlertComponent> = {
  title: 'Mobile/iOS/Alert',
  component: IosAlertComponent,
  tags: ['autodocs'],
  parameters: { layout: 'centered', docs: { description: { component: 'iOS Alert (extended, hand-built). Same as the React IosAlert: `title`, `message`, `actions` (label + style default / cancel / destructive), `backdrop`, `(actionClick)`.' } } },
  args: { title: 'Allow "Maps" to use your location?', message: 'Your location is used to show nearby places.', backdrop: false },
  render: (args) => ({ props: args, template: `<ios-alert [title]="title" [message]="message" [actions]="actions" [backdrop]="backdrop" />` }),
}
export default meta
type Story = StoryObj<IosAlertComponent>

export const SingleAction: Story = { args: { title: 'Update Complete', message: 'Your device is up to date.', actions: [{ label: 'OK', style: 'cancel' }] } }
export const TwoActions: Story = { args: { actions: [{ label: "Don't Allow" }, { label: 'Allow', style: 'cancel' }] } }
export const Stacked: Story = { args: { actions: [{ label: 'Allow Once' }, { label: 'Allow While Using App' }, { label: "Don't Allow", style: 'cancel' }] } }
export const Destructive: Story = {
  args: { title: 'Delete Photo?', message: 'This cannot be undone.', actions: [{ label: 'Cancel', style: 'cancel' }, { label: 'Delete', style: 'destructive' }] },
}
export const WithBackdrop: Story = {
  args: { backdrop: true, actions: [{ label: "Don't Allow" }, { label: 'Allow', style: 'cancel' }] },
  render: (args) => ({ props: args, template: `<div class="w-[390px]"><ios-alert [title]="title" [message]="message" [actions]="actions" [backdrop]="backdrop" /></div>` }),
}
