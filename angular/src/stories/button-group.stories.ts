import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { ZardButtonComponent } from '@/shared/components/button'
import { ZardInputComponent } from '@/shared/components/input'
import { ZardButtonGroupImports } from '@/shared/components/button-group/button-group.imports'
import { ZardButtonGroupComponent } from '@/shared/components/button-group/button-group.component'

const meta: Meta<ZardButtonGroupComponent> = {
  title: 'Button Group',
  component: ZardButtonGroupComponent,
  tags: ['autodocs'],
  decorators: [moduleMetadata({ imports: [...ZardButtonGroupImports, ZardButtonComponent, ZardInputComponent] })],
  parameters: { docs: { description: { component: 'Button Group (ZardUI). `zOrientation` horizontal / vertical, plus `z-button-group-separator` and `[z-button-group-text]` like the React ButtonGroup.' } } },
  argTypes: { zOrientation: { name: 'orientation', control: 'inline-radio', options: ['horizontal', 'vertical'] } },
  args: { zOrientation: 'horizontal' },
  render: (args) => ({
    props: args,
    template: `<z-button-group [zOrientation]="zOrientation">
      <button z-button zType="outline">Archive</button>
      <button z-button zType="outline">Report</button>
      <button z-button zType="outline">Snooze</button>
    </z-button-group>`,
  }),
}
export default meta
type Story = StoryObj<ZardButtonGroupComponent>

export const Default: Story = {}
export const Vertical: Story = { args: { zOrientation: 'vertical' } }
export const WithSeparator: Story = {
  render: () => ({
    template: `<z-button-group>
      <button z-button zType="secondary">Copy</button>
      <z-button-group-separator />
      <button z-button zType="secondary">Paste</button>
    </z-button-group>`,
  }),
}
export const WithInput: Story = {
  render: () => ({
    template: `<z-button-group>
      <input z-input class="w-48" placeholder="Search..." />
      <button z-button zType="outline">Go</button>
    </z-button-group>`,
  }),
}
export const WithText: Story = {
  render: () => ({
    template: `<z-button-group>
      <button z-button zType="outline" aria-label="Decrease">-</button>
      <div z-button-group-text>3</div>
      <button z-button zType="outline" aria-label="Increase">+</button>
    </z-button-group>`,
  }),
}
