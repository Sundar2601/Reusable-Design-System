import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { ZardToggleComponent } from '@/shared/components/toggle'

const meta: Meta<ZardToggleComponent> = {
  title: 'Toggle',
  component: ZardToggleComponent,
  tags: ['autodocs'],
  decorators: [moduleMetadata({ imports: [ZardToggleComponent] })],
  parameters: { docs: { description: { component: 'Toggle (ZardUI). Same variants as the React Toggle: `zType` default / outline, `zSize` sm / default / lg, `zValue` for the pressed state, `zDisabled`.' } } },
  argTypes: {
    zType: { name: 'variant', control: 'inline-radio', options: ['default', 'outline'] },
    zSize: { name: 'size', control: 'inline-radio', options: ['sm', 'default', 'lg'] },
    zDisabled: { name: 'disabled', control: 'boolean' },
    zValue: { name: 'pressed', control: 'boolean' },
    zAriaLabel: { table: { disable: true } },
  },
  args: { zType: 'default', zSize: 'default', zDisabled: false, zValue: false, zAriaLabel: 'Toggle bold' },
  render: (args) => ({
    props: args,
    template: `<z-toggle [zType]="zType" [zSize]="zSize" [zDisabled]="zDisabled" [zValue]="zValue" zAriaLabel="Toggle bold">Bold</z-toggle>`,
  }),
}
export default meta
type Story = StoryObj<ZardToggleComponent>

export const Default: Story = {}
export const Outline: Story = { args: { zType: 'outline' } }
export const On: Story = { args: { zValue: true } }
export const Disabled: Story = { args: { zDisabled: true } }
export const Sizes: Story = {
  render: () => ({
    template: `<div class="flex items-center gap-3">
      <z-toggle zType="outline" zSize="sm" zAriaLabel="Small">Sm</z-toggle>
      <z-toggle zType="outline" zAriaLabel="Default">Default</z-toggle>
      <z-toggle zType="outline" zSize="lg" zAriaLabel="Large">Lg</z-toggle>
    </div>`,
  }),
}
