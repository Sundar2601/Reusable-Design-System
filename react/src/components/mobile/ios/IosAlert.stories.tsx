import type { Meta, StoryObj } from '@storybook/react-vite'
import { IosAlert } from './IosAlert'

const meta = {
  title: 'Mobile/iOS/Alert',
  component: IosAlert,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  args: { title: 'Allow "Maps" to use your location?', message: 'Your location is used to show nearby places.' },
} satisfies Meta<typeof IosAlert>

export default meta
type Story = StoryObj<typeof meta>

export const SingleAction: Story = { args: { title: 'Update Complete', message: 'Your device is up to date.', actions: [{ label: 'OK', style: 'cancel' }] } }
export const TwoActions: Story = { args: { actions: [{ label: "Don't Allow" }, { label: 'Allow', style: 'cancel' }] } }
export const Stacked: Story = {
  args: { actions: [{ label: 'Allow Once' }, { label: 'Allow While Using App' }, { label: "Don't Allow", style: 'cancel' }] },
}
export const Destructive: Story = {
  args: { title: 'Delete Photo?', message: 'This cannot be undone.', actions: [{ label: 'Cancel', style: 'cancel' }, { label: 'Delete', style: 'destructive' }] },
}
export const WithBackdrop: Story = {
  args: { backdrop: true, actions: [{ label: "Don't Allow" }, { label: 'Allow', style: 'cancel' }] },
  decorators: [(Story) => <div className="w-[390px]">{Story()}</div>],
}
