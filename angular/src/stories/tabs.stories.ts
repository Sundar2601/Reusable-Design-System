import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { ZardTabGroupComponent, ZardTabsImports } from '@/shared/components/tabs'

const meta: Meta<ZardTabGroupComponent> = {
  title: 'Tabs',
  component: ZardTabGroupComponent,
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Tabs (ZardUI). `z-tab-group` with `z-tab` children. `zVariant` default / line, `zOrientation` horizontal / vertical, `zDisabled` on the group or a tab. Same as the React Tabs.' } } },
  decorators: [moduleMetadata({ imports: [...ZardTabsImports] })],
  argTypes: {
    zVariant: { control: 'inline-radio', options: ['default', 'line'] },
    zOrientation: { control: 'inline-radio', options: ['horizontal', 'vertical'] },
  },
  args: { zVariant: 'default', zOrientation: 'horizontal' },
  render: (args) => ({
    props: args,
    template: `<z-tab-group class="w-96" [zVariant]="zVariant" [zOrientation]="zOrientation">
      <z-tab label="Account"><p class="text-sm text-muted-foreground">Make changes to your account here.</p></z-tab>
      <z-tab label="Password"><p class="text-sm text-muted-foreground">Change your password here.</p></z-tab>
      <z-tab label="Billing"><p class="text-sm text-muted-foreground">Manage your billing details.</p></z-tab>
    </z-tab-group>`,
  }),
}
export default meta
type Story = StoryObj<ZardTabGroupComponent>

export const Default: Story = {}
export const Line: Story = { args: { zVariant: 'line' } }
export const Vertical: Story = { args: { zOrientation: 'vertical' } }
export const Disabled: Story = {
  render: () => ({
    template: `<z-tab-group class="w-96">
      <z-tab label="Account"><p class="text-sm text-muted-foreground">Make changes to your account here.</p></z-tab>
      <z-tab label="Password"><p class="text-sm text-muted-foreground">Change your password here.</p></z-tab>
      <z-tab label="Billing" zDisabled><p class="text-sm text-muted-foreground">Manage your billing details.</p></z-tab>
    </z-tab-group>`,
  }),
}
