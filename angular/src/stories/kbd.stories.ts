import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { ZardKbdImports } from '@/shared/components/kbd/kbd.imports'
import { ZardKbdComponent } from '@/shared/components/kbd/kbd.component'
import { ZardButtonComponent } from '@/shared/components/button'

const meta: Meta<ZardKbdComponent> = {
  title: 'Kbd',
  component: ZardKbdComponent,
  tags: ['autodocs'],
  decorators: [moduleMetadata({ imports: [...ZardKbdImports, ZardButtonComponent] })],
  parameters: { docs: { description: { component: 'Kbd (ZardUI). `z-kbd` for a key and `z-kbd-group` for a combination, like the React Kbd / KbdGroup.' } } },
  render: () => ({ template: `<z-kbd>K</z-kbd>` }),
}
export default meta
type Story = StoryObj<ZardKbdComponent>

export const Default: Story = {}
export const Modifiers: Story = {
  render: () => ({ template: `<z-kbd-group><z-kbd>⌘</z-kbd><z-kbd>⇧</z-kbd><z-kbd>K</z-kbd></z-kbd-group>` }),
}
export const Combination: Story = {
  render: () => ({
    template: `<z-kbd-group><z-kbd>Ctrl</z-kbd><span class="text-sm text-muted-foreground">+</span><z-kbd>B</z-kbd></z-kbd-group>`,
  }),
}
export const InButton: Story = {
  render: () => ({ template: `<button z-button zType="outline">Search <z-kbd>⌘K</z-kbd></button>` }),
}
