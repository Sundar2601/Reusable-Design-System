import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { ZardToggleGroupComponent } from '@/shared/components/toggle-group'

const items = [
  { value: 'bold', label: 'Bold', ariaLabel: 'Bold' },
  { value: 'italic', label: 'Italic', ariaLabel: 'Italic' },
  { value: 'underline', label: 'Underline', ariaLabel: 'Underline' },
]

const meta: Meta<ZardToggleGroupComponent> = {
  title: 'Toggle Group',
  component: ZardToggleGroupComponent,
  tags: ['autodocs'],
  decorators: [moduleMetadata({ imports: [ZardToggleGroupComponent] })],
  parameters: { docs: { description: { component: 'Toggle Group (ZardUI). Like the React Toggle Group: `zMode` single / multiple, `zType` default / outline, `zSize`, `zSpacing` (0 joins the items) and `zItems`.' } } },
  argTypes: {
    zMode: { name: 'type', control: 'inline-radio', options: ['single', 'multiple'] },
    zType: { name: 'variant', control: 'inline-radio', options: ['default', 'outline'] },
    zSize: { name: 'size', control: 'inline-radio', options: ['sm', 'default', 'lg'] },
    zSpacing: { name: 'spacing', control: 'number' },
    zDisabled: { name: 'disabled', control: 'boolean' },
    zItems: { table: { disable: true } },
  },
  args: { zMode: 'multiple', zType: 'default', zSize: 'default', zSpacing: 0, zDisabled: false, zItems: items },
  render: (args) => ({
    props: args,
    template: `<z-toggle-group [zMode]="zMode" [zType]="zType" [zSize]="zSize" [zSpacing]="zSpacing" [zDisabled]="zDisabled" [zItems]="zItems" />`,
  }),
}
export default meta
type Story = StoryObj<ZardToggleGroupComponent>

export const Default: Story = {}
export const Outline: Story = { args: { zType: 'outline' } }
export const WithSpacing: Story = { args: { zType: 'outline', zSpacing: 2 } }
export const Single: Story = { args: { zType: 'outline', zMode: 'single', zDefaultValue: 'italic' } }
export const Disabled: Story = { args: { zDisabled: true } }
