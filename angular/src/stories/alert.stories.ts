import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { ZardAlertComponent } from '@/shared/components/alert'

const meta: Meta<ZardAlertComponent> = {
  title: 'Alert',
  component: ZardAlertComponent,
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Alert (ZardUI). Same variants as the React Alert: `zType` default / destructive, with `zTitle` and `zDescription`. A default icon is shown.' } } },
  decorators: [moduleMetadata({ imports: [ZardAlertComponent] })],
  argTypes: { zType: { name: 'type', control: 'inline-radio', options: ['default', 'destructive'] } },
  args: { zType: 'default', zTitle: 'Heads up!', zDescription: 'You can add components to your app using the cli.' },
  render: (args) => ({
    props: args,
    template: `<z-alert class="w-[28rem]" [zType]="zType" [zTitle]="zTitle" [zDescription]="zDescription" />`,
  }),
}
export default meta
type Story = StoryObj<ZardAlertComponent>

export const Default: Story = {}
export const Destructive: Story = {
  args: { zType: 'destructive', zTitle: 'Unable to process your payment.', zDescription: 'Please verify your billing information and try again.' },
}
export const WithoutIcon: Story = {
  render: () => ({
    template: `<z-alert class="w-[28rem]" zTitle="Update available" zDescription="A new version is ready to install." />`,
  }),
}
