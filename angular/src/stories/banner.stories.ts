import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { ZardButtonComponent } from '@/shared/components/button'
import { BannerComponent } from '@/shared/extended/banner.component'

const meta: Meta<BannerComponent> = {
  title: 'Banner',
  component: BannerComponent,
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Banner (extended, hand-built). Same API as the React Banner: `variant` info / success / warning / destructive, `heading`, projected description, an `action` slot and `dismissible`.' } } },
  decorators: [moduleMetadata({ imports: [ZardButtonComponent] })],
  argTypes: { variant: { control: 'select', options: ['info', 'success', 'warning', 'destructive'] }, dismissible: { control: 'boolean' } },
  args: { variant: 'info', heading: 'Scheduled maintenance', dismissible: false },
  render: (args) => ({
    props: args,
    template: `<ui-banner [variant]="variant" [heading]="heading" [dismissible]="dismissible">The service will be unavailable on Sunday at 2 AM.</ui-banner>`,
  }),
}
export default meta
type Story = StoryObj<BannerComponent>

export const Info: Story = {}
export const Success: Story = {
  render: () => ({ template: `<ui-banner variant="success" heading="Saved">Your changes were published.</ui-banner>` }),
}
export const Warning: Story = {
  render: () => ({ template: `<ui-banner variant="warning" heading="Storage almost full">92% of 10 GB used.</ui-banner>` }),
}
export const Destructive: Story = {
  render: () => ({ template: `<ui-banner variant="destructive" heading="Payment failed">Update your card to continue.</ui-banner>` }),
}
export const WithActionAndDismiss: Story = {
  render: () => ({
    template: `<ui-banner heading="Scheduled maintenance" [dismissible]="true">The service will be unavailable on Sunday at 2 AM.
      <button action z-button zSize="sm" zType="outline">Learn more</button>
    </ui-banner>`,
  }),
}
