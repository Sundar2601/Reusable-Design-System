import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { ZardSeparatorComponent } from '@/shared/components/separator'

const meta: Meta<ZardSeparatorComponent> = {
  title: 'Separator',
  component: ZardSeparatorComponent,
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Separator (ZardUI). Same as the React Separator: `zOrientation` horizontal / vertical.' } } },
  decorators: [moduleMetadata({ imports: [ZardSeparatorComponent] })],
  argTypes: { zOrientation: { name: 'orientation', control: 'inline-radio', options: ['horizontal', 'vertical'] } },
}
export default meta
type Story = StoryObj<ZardSeparatorComponent>

export const Horizontal: Story = {
  render: () => ({
    template: `<div class="w-64">
      <div class="text-sm font-medium">Design system</div>
      <div class="text-sm text-muted-foreground">An open-source UI component library.</div>
      <z-separator class="my-4" />
      <div class="text-sm">Docs</div>
    </div>`,
  }),
}
export const Vertical: Story = {
  render: () => ({
    template: `<div class="flex h-5 items-center gap-4 text-sm">
      <div>Blog</div><z-separator zOrientation="vertical" /><div>Docs</div><z-separator zOrientation="vertical" /><div>Source</div>
    </div>`,
  }),
}
