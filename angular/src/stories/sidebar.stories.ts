import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { ZardButtonComponent } from '@/shared/components/button'
import { ZardSidebarComponent, ZardSidebarImports } from '@/shared/components/sidebar'

const meta: Meta<ZardSidebarComponent> = {
  title: 'Sidebar',
  component: ZardSidebarComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: 'Sidebar (ZardUI). `z-sidebar-provider` holds the open state; `z-sidebar` takes `zSide`, `zVariant` (sidebar / floating / inset) and `zCollapsible` (offcanvas / icon / none). Toggle with `z-sidebar-trigger`, the rail, or Cmd/Ctrl + B.' }, story: { inline: false, height: '420px' } },
  },
  decorators: [moduleMetadata({ imports: [...ZardSidebarImports, ZardButtonComponent] })],
  argTypes: {
    zSide: { control: 'inline-radio', options: ['left', 'right'] },
    zVariant: { control: 'inline-radio', options: ['sidebar', 'floating', 'inset'] },
    zCollapsible: { control: 'inline-radio', options: ['offcanvas', 'icon', 'none'] },
  },
  args: { zSide: 'left', zVariant: 'sidebar', zCollapsible: 'icon' },
  render: (args) => ({
    props: args,
    template: `<z-sidebar-provider>
      <z-sidebar [zSide]="zSide" [zVariant]="zVariant" [zCollapsible]="zCollapsible">
        <z-sidebar-header><div class="px-2 py-1 text-sm font-medium">Acme Inc</div></z-sidebar-header>
        <z-sidebar-content>
          <z-sidebar-group>
            <z-sidebar-group-label>Application</z-sidebar-group-label>
            <z-sidebar-group-content>
              <ul z-sidebar-menu>
                <li z-sidebar-menu-item><button z-sidebar-menu-button [zActive]="true"><span>Home</span></button></li>
                <li z-sidebar-menu-item><button z-sidebar-menu-button><span>Inbox</span></button><z-sidebar-menu-badge>12</z-sidebar-menu-badge></li>
                <li z-sidebar-menu-item><button z-sidebar-menu-button><span>Calendar</span></button></li>
                <li z-sidebar-menu-item><button z-sidebar-menu-button><span>Settings</span></button></li>
              </ul>
            </z-sidebar-group-content>
          </z-sidebar-group>
        </z-sidebar-content>
        <z-sidebar-footer><div class="px-2 py-1 text-xs text-muted-foreground">v1.0.0</div></z-sidebar-footer>
        <button z-sidebar-rail></button>
      </z-sidebar>
      <z-sidebar-inset>
        <header class="flex h-12 items-center gap-2 border-b border-border px-3">
          <button z-sidebar-trigger></button>
          <span class="text-sm font-medium">Dashboard</span>
        </header>
        <div class="p-4 text-sm text-muted-foreground">Page content. Press Cmd/Ctrl + B to toggle.</div>
      </z-sidebar-inset>
    </z-sidebar-provider>`,
  }),
}
export default meta
type Story = StoryObj<ZardSidebarComponent>

export const Default: Story = {}
export const Offcanvas: Story = { args: { zCollapsible: 'offcanvas' } }
export const Floating: Story = { args: { zVariant: 'floating' } }
