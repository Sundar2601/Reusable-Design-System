import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { ZardContextMenuDirective, ZardContextMenuImports } from '@/shared/components/context-menu'

const meta: Meta<ZardContextMenuDirective> = {
  title: 'Context Menu',
  component: ZardContextMenuDirective,
  tags: ['autodocs'],
  parameters: { layout: 'centered', docs: { description: { component: 'Context Menu (ZardUI). Put `z-context-menu` on an element and bind `[zContextMenuTriggerFor]` to a `z-dropdown-menu-content`. It opens on right click, or with the ContextMenu key / Shift + F10.' } } },
  decorators: [moduleMetadata({ imports: [...ZardContextMenuImports] })],
}
export default meta
type Story = StoryObj<ZardContextMenuDirective>

export const Default: Story = {
  render: () => ({
    template: `<div z-context-menu [zContextMenuTriggerFor]="menu" class="flex h-36 w-72 items-center justify-center rounded-lg border border-dashed border-border text-sm text-muted-foreground">Right click here</div>
    <z-dropdown-menu-content #menu="zDropdownMenuContent" class="w-56">
      <z-dropdown-menu-item>Back <z-dropdown-menu-shortcut>⌘[</z-dropdown-menu-shortcut></z-dropdown-menu-item>
      <z-dropdown-menu-item [zDisabled]="true">Forward <z-dropdown-menu-shortcut>⌘]</z-dropdown-menu-shortcut></z-dropdown-menu-item>
      <z-dropdown-menu-item>Reload <z-dropdown-menu-shortcut>⌘R</z-dropdown-menu-shortcut></z-dropdown-menu-item>
      <z-dropdown-menu-separator />
      <z-dropdown-menu-checkbox-item [zChecked]="true">Show Bookmarks</z-dropdown-menu-checkbox-item>
      <z-dropdown-menu-separator />
      <z-dropdown-menu-label>People</z-dropdown-menu-label>
      <z-dropdown-menu-radio-group>
        <z-dropdown-menu-radio-item zValue="pedro">Pedro Duarte</z-dropdown-menu-radio-item>
        <z-dropdown-menu-radio-item zValue="colm">Colm Tuite</z-dropdown-menu-radio-item>
      </z-dropdown-menu-radio-group>
    </z-dropdown-menu-content>`,
  }),
}
