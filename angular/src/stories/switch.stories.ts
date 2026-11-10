import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { ZardSwitchComponent } from '@/shared/components/switch'

const meta: Meta<ZardSwitchComponent> = {
  title: 'Switch',
  component: ZardSwitchComponent,
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Switch (ZardUI). Same as the React Switch: `zChecked`, `zSize` sm / default, `zDisabled`, `zInvalid`.' } } },
  decorators: [moduleMetadata({ imports: [ZardSwitchComponent] })],
  argTypes: {
    zSize: { name: 'size', control: 'inline-radio', options: ['sm', 'default'] },
    zChecked: { name: 'checked', control: 'boolean' },
    zDisabled: { name: 'disabled', control: 'boolean' },
    zInvalid: { name: 'invalid', control: 'boolean' },
  },
  args: { zSize: 'default', zChecked: false, zDisabled: false, zInvalid: false },
  render: (args) => ({
    props: args,
    template: `<z-switch [zChecked]="zChecked" [zSize]="zSize" [zDisabled]="zDisabled" [zInvalid]="zInvalid" />`,
  }),
}
export default meta
type Story = StoryObj<ZardSwitchComponent>

export const Default: Story = {}
export const Checked: Story = { args: { zChecked: true } }
export const Small: Story = { args: { zSize: 'sm', zChecked: true } }
export const Disabled: Story = { args: { zDisabled: true } }
export const DisabledChecked: Story = { args: { zDisabled: true, zChecked: true } }
export const Invalid: Story = { args: { zInvalid: true } }
export const WithLabel: Story = {
  render: () => ({
    template: `<div class="flex items-center gap-2"><z-switch zId="airplane" /><label for="airplane" class="text-sm font-medium">Airplane mode</label></div>`,
  }),
}
