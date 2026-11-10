import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { ZardNavigationMenuComponent, ZardNavigationMenuImports } from '@/shared/components/navigation-menu'

const meta: Meta<ZardNavigationMenuComponent> = {
  title: 'Navigation Menu',
  component: ZardNavigationMenuComponent,
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Navigation Menu (ZardUI). `z-navigation-menu` with triggers that open shared-viewport content. `zViewport` off makes each content open in its own popup. Same as the React Navigation Menu.' } } },
  decorators: [moduleMetadata({ imports: [...ZardNavigationMenuImports] })],
  argTypes: { zViewport: { control: 'boolean' } },
  args: { zViewport: true },
  render: (args) => ({
    props: args,
    template: `<z-navigation-menu [zViewport]="zViewport">
      <ul z-navigation-menu-list>
        <li z-navigation-menu-item>
          <button z-navigation-menu-trigger [zNavigationMenuTriggerFor]="start">Getting started</button>
        </li>
        <li z-navigation-menu-item>
          <button z-navigation-menu-trigger [zNavigationMenuTriggerFor]="components">Components</button>
        </li>
        <li z-navigation-menu-item>
          <a z-navigation-menu-link href="#">Docs</a>
        </li>
      </ul>
    </z-navigation-menu>
    <ng-template #start>
      <div z-navigation-menu-content class="grid w-96 gap-1">
        <a z-navigation-menu-link href="#"><div class="font-medium">Introduction</div><p class="text-muted-foreground">Re-usable components built with Tailwind.</p></a>
        <a z-navigation-menu-link href="#"><div class="font-medium">Installation</div><p class="text-muted-foreground">How to install dependencies.</p></a>
        <a z-navigation-menu-link href="#"><div class="font-medium">Typography</div><p class="text-muted-foreground">Styles for headings and paragraphs.</p></a>
      </div>
    </ng-template>
    <ng-template #components>
      <div z-navigation-menu-content class="grid w-72 gap-1">
        <a z-navigation-menu-link href="#">Alert Dialog</a>
        <a z-navigation-menu-link href="#">Hover Card</a>
        <a z-navigation-menu-link href="#">Progress</a>
      </div>
    </ng-template>`,
  }),
}
export default meta
type Story = StoryObj<ZardNavigationMenuComponent>

export const Default: Story = {}
export const WithoutViewport: Story = { args: { zViewport: false } }
