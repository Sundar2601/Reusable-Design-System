import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { ZardButtonComponent } from '@/shared/components/button'
import { ZardDropdownDirective, ZardDropdownImports } from '@/shared/components/dropdown'

const meta: Meta<ZardDropdownDirective> = {
  title: 'Dropdown Menu',
  component: ZardDropdownDirective,
  tags: ['autodocs'],
  parameters: { layout: 'centered', docs: { description: { component: 'Dropdown Menu (ZardUI). Put `z-dropdown` on a trigger and point `[zDropdownMenu]` at a `z-dropdown-menu-content`. Items, labels, separators, shortcuts, checkbox and radio items, and sub-menus are all `z-dropdown-menu-*` parts.' } } },
  decorators: [moduleMetadata({ imports: [...ZardDropdownImports, ZardButtonComponent] })],
}
export default meta
type Story = StoryObj<ZardDropdownDirective>

export const Default: Story = {
  render: () => ({
    template: `<button z-button zType="outline" z-dropdown [zDropdownMenu]="menu">Open</button>
    <z-dropdown-menu-content #menu="zDropdownMenuContent" class="w-56">
      <z-dropdown-menu-label>My Account</z-dropdown-menu-label>
      <z-dropdown-menu-item>Profile <z-dropdown-menu-shortcut>⇧⌘P</z-dropdown-menu-shortcut></z-dropdown-menu-item>
      <z-dropdown-menu-item>Billing <z-dropdown-menu-shortcut>⌘B</z-dropdown-menu-shortcut></z-dropdown-menu-item>
      <z-dropdown-menu-item>Settings <z-dropdown-menu-shortcut>⌘S</z-dropdown-menu-shortcut></z-dropdown-menu-item>
      <z-dropdown-menu-separator />
      <z-dropdown-menu-item [zDisabled]="true">API</z-dropdown-menu-item>
      <z-dropdown-menu-separator />
      <z-dropdown-menu-item zType="destructive">Log out <z-dropdown-menu-shortcut>⇧⌘Q</z-dropdown-menu-shortcut></z-dropdown-menu-item>
    </z-dropdown-menu-content>`,
  }),
}

export const Checkboxes: Story = {
  render: () => ({
    template: `<button z-button zType="outline" z-dropdown [zDropdownMenu]="menu">Appearance</button>
    <z-dropdown-menu-content #menu="zDropdownMenuContent" class="w-56">
      <z-dropdown-menu-label>Appearance</z-dropdown-menu-label>
      <z-dropdown-menu-separator />
      <z-dropdown-menu-checkbox-item [zChecked]="true">Status Bar</z-dropdown-menu-checkbox-item>
      <z-dropdown-menu-checkbox-item>Activity Bar</z-dropdown-menu-checkbox-item>
    </z-dropdown-menu-content>`,
  }),
}

export const RadioGroup: Story = {
  render: () => ({
    template: `<button z-button zType="outline" z-dropdown [zDropdownMenu]="menu">Panel position</button>
    <z-dropdown-menu-content #menu="zDropdownMenuContent" class="w-56">
      <z-dropdown-menu-label>Panel Position</z-dropdown-menu-label>
      <z-dropdown-menu-separator />
      <z-dropdown-menu-radio-group>
        <z-dropdown-menu-radio-item zValue="top">Top</z-dropdown-menu-radio-item>
        <z-dropdown-menu-radio-item zValue="bottom">Bottom</z-dropdown-menu-radio-item>
        <z-dropdown-menu-radio-item zValue="right">Right</z-dropdown-menu-radio-item>
      </z-dropdown-menu-radio-group>
    </z-dropdown-menu-content>`,
  }),
}
