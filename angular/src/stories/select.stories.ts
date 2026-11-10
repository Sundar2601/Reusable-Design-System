import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { ZardSelectImports } from '@/shared/components/select/select.imports'
import { ZardSelectComponent } from '@/shared/components/select/select.component'

const meta: Meta<ZardSelectComponent> = {
  title: 'Select',
  component: ZardSelectComponent,
  tags: ['autodocs'],
  decorators: [moduleMetadata({ imports: [...ZardSelectImports] })],
  parameters: { docs: { description: { component: 'Select (ZardUI). Same composition as the React Select: `z-select` with `z-select-item` children, optional `z-select-group`, `z-select-label` and `z-select-separator`. `zInvalid`, `zDisabled`, `zPlaceholder`.' } } },
  argTypes: {
    zPlaceholder: { name: 'placeholder', control: 'text' },
    zDisabled: { name: 'disabled', control: 'boolean' },
    zInvalid: { name: 'invalid', control: 'boolean' },
  },
  args: { zPlaceholder: 'Select a fruit', zDisabled: false, zInvalid: false },
  render: (args) => ({
    props: args,
    template: `<z-select class="w-48" [zPlaceholder]="zPlaceholder" [zDisabled]="zDisabled" [zInvalid]="zInvalid">
      <z-select-item zValue="apple">Apple</z-select-item>
      <z-select-item zValue="banana">Banana</z-select-item>
      <z-select-item zValue="blueberry">Blueberry</z-select-item>
      <z-select-item zValue="grapes" zDisabled>Grapes</z-select-item>
    </z-select>`,
  }),
}
export default meta
type Story = StoryObj<ZardSelectComponent>

export const Default: Story = {}
export const Invalid: Story = { args: { zInvalid: true } }
export const Disabled: Story = { args: { zDisabled: true } }
export const Grouped: Story = {
  render: () => ({
    template: `<z-select class="w-56" zPlaceholder="Select a timezone">
      <z-select-group>
        <z-select-label>North America</z-select-label>
        <z-select-item zValue="est">Eastern (EST)</z-select-item>
        <z-select-item zValue="pst">Pacific (PST)</z-select-item>
      </z-select-group>
      <z-select-separator />
      <z-select-group>
        <z-select-label>Europe</z-select-label>
        <z-select-item zValue="gmt">Greenwich (GMT)</z-select-item>
        <z-select-item zValue="cet">Central European (CET)</z-select-item>
      </z-select-group>
    </z-select>`,
  }),
}
