import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { ZardButtonComponent } from '@/shared/components/button'
import { ZardItemImports } from '@/shared/components/item/item.imports'
import { ZardItemComponent } from '@/shared/components/item/item.component'

const meta: Meta<ZardItemComponent> = {
  title: 'Item',
  component: ZardItemComponent,
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Item (ZardUI). Same as the React Item: `zVariant` default / outline / muted, `zSize` default / sm / xs, with media, content, title, description and actions parts.' } } },
  decorators: [moduleMetadata({ imports: [...ZardItemImports, ZardButtonComponent] })],
  argTypes: {
    zVariant: { name: 'variant', control: 'inline-radio', options: ['default', 'outline', 'muted'] },
    zSize: { name: 'size', control: 'inline-radio', options: ['default', 'sm', 'xs'] },
  },
  args: { zVariant: 'outline', zSize: 'default' },
  render: (args) => ({
    props: args,
    template: `<div class="w-96"><z-item [zVariant]="zVariant" [zSize]="zSize">
      <z-item-content>
        <z-item-title>Basic Item</z-item-title>
        <p z-item-description>A simple item with title and description.</p>
      </z-item-content>
      <z-item-actions><button z-button zType="outline" zSize="sm">Action</button></z-item-actions>
    </z-item></div>`,
  }),
}
export default meta
type Story = StoryObj<ZardItemComponent>

export const Default: Story = {}
export const Muted: Story = { args: { zVariant: 'muted' } }
export const Group: Story = {
  render: () => ({
    template: `<z-item-group class="w-96">
      <z-item><z-item-content><z-item-title>Ada Lovelace</z-item-title><p z-item-description>ada.lovelace@example.com</p></z-item-content></z-item>
      <z-item-separator />
      <z-item><z-item-content><z-item-title>Grace Hopper</z-item-title><p z-item-description>grace.hopper@example.com</p></z-item-content></z-item>
    </z-item-group>`,
  }),
}
