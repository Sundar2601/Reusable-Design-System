import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { ZardButtonComponent } from '@/shared/components/button'
import { ZardCardImports } from '@/shared/components/card/card.imports'
import { ZardCardComponent } from '@/shared/components/card/card.component'

const meta: Meta<ZardCardComponent> = {
  title: 'Card',
  component: ZardCardComponent,
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Card (ZardUI). Header with title, description and action, content, and footer, like the React Card.' } } },
  decorators: [moduleMetadata({ imports: [...ZardCardImports, ZardButtonComponent] })],
  render: () => ({
    template: `<z-card class="w-96">
      <z-card-header>
        <z-card-title>Create project</z-card-title>
        <z-card-description>Deploy your new project in one click.</z-card-description>
        <z-card-action><button z-button zSize="sm">Sign up</button></z-card-action>
      </z-card-header>
      <z-card-content>Card content goes here.</z-card-content>
      <z-card-footer class="gap-2">
        <button z-button>Deploy</button>
        <button z-button zType="outline">Cancel</button>
      </z-card-footer>
    </z-card>`,
  }),
}
export default meta
type Story = StoryObj<ZardCardComponent>

export const Default: Story = {}
