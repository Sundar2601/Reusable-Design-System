import type { Meta, StoryObj } from '@storybook/angular'
import { AndroidSwitchComponent } from '@/shared/extended/android-switch.component'

const meta: Meta<AndroidSwitchComponent> = {
  title: 'Mobile/Android/Switch',
  component: AndroidSwitchComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: { description: { component: 'Android Switch (extended, hand-built). Same API as the React AndroidSwitch: two-way `checked`, `disabled`, `withIcon`.' } },
  },
  argTypes: { checked: { control: 'boolean' }, disabled: { control: 'boolean' }, withIcon: { control: 'boolean' } },
  args: { checked: false, disabled: false, withIcon: true, ariaLabel: 'Wi-Fi' },
  render: (args) => ({ props: args, template: `<android-switch [(checked)]="checked" [disabled]="disabled" [withIcon]="withIcon" [ariaLabel]="ariaLabel" />` }),
}
export default meta
type Story = StoryObj<AndroidSwitchComponent>

export const Off: Story = {}
export const On: Story = { args: { checked: true } }
export const WithoutIcon: Story = { args: { checked: true, withIcon: false } }
export const Disabled: Story = { args: { checked: true, disabled: true } }
