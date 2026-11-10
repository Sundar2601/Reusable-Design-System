import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { MenubarComponent, type MenubarMenu } from '@/shared/extended/menubar.component'

const menus: MenubarMenu[] = [
  {
    label: 'File',
    items: [
      { label: 'New Tab', shortcut: '⌘T' },
      { label: 'New Window', shortcut: '⌘N' },
      { label: 'New Incognito Window', disabled: true },
      { separator: true },
      { label: 'Print', shortcut: '⌘P' },
    ],
  },
  { label: 'Edit', items: [{ label: 'Undo', shortcut: '⌘Z' }, { label: 'Redo', shortcut: '⇧⌘Z' }] },
  { label: 'View', items: [{ label: 'Always Show Bookmarks Bar' }, { separator: true }, { label: 'Reload', shortcut: '⌘R' }] },
  { label: 'Profiles', items: [{ label: 'Andy' }, { label: 'Benoit' }, { separator: true }, { label: 'Remove profile', destructive: true }] },
]

const meta: Meta<MenubarComponent> = {
  title: 'Menubar',
  component: MenubarComponent,
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Menubar (hand-built, ZardUI has no Menubar). `ui-menubar` takes a `menus` array of `{ label, items }`; items support `shortcut`, `disabled`, `destructive` and `separator`. Styled with the same tokens as the React Menubar.' } } },
  decorators: [moduleMetadata({ imports: [MenubarComponent] })],
  args: { menus },
}
export default meta
type Story = StoryObj<MenubarComponent>

export const Default: Story = {}
