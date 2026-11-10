import type { Meta, StoryObj } from '@storybook/angular'
import { IosSwitchComponent } from '@/shared/extended/ios-switch.component'

const meta: Meta<IosSwitchComponent> = {
  title: 'Mobile/iOS/Switch',
  component: IosSwitchComponent,
  tags: ['autodocs'],
  parameters: { layout: 'centered', docs: { description: { component: 'iOS Switch (extended, hand-built). Same as the React IosSwitch: two-way `checked`, `disabled`.' } } },
  args: { checked: false, disabled: false },
  render: (args) => ({ props: args, template: `<ios-switch [(checked)]="checked" [disabled]="disabled" ariaLabel="Airplane mode" />` }),
}
export default meta
type Story = StoryObj<IosSwitchComponent>

export const Off: Story = {}
export const On: Story = { args: { checked: true } }
export const Disabled: Story = { args: { checked: true, disabled: true } }
