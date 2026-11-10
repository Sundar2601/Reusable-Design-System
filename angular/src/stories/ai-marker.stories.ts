import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { ZardMarkerImports } from '@/shared/components/marker/marker.imports'
import { ZardMarkerComponent } from '@/shared/components/marker/marker.component'

const meta: Meta<ZardMarkerComponent> = {
  title: 'AI Elements/Marker',
  component: ZardMarkerComponent,
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Marker (ZardUI). Same as the React Marker: `zVariant` default / border / separator, optional leading icon.' } } },
  decorators: [moduleMetadata({ imports: [...ZardMarkerImports] })],
  argTypes: { zVariant: { control: 'inline-radio', options: ['default', 'border', 'separator'] } },
  args: { zVariant: 'default' },
  render: (args) => ({ props: args, template: `<div class="w-96"><z-marker [zVariant]="zVariant"><z-marker-content>Today</z-marker-content></z-marker></div>` }),
}
export default meta
type Story = StoryObj<ZardMarkerComponent>

export const Default: Story = {}
export const Separator: Story = { args: { zVariant: 'separator' } }
export const Border: Story = {
  args: { zVariant: 'border' },
  render: (args) => ({ props: args, template: `<div class="w-96"><z-marker [zVariant]="zVariant"><z-marker-content>Conversation compacted</z-marker-content></z-marker></div>` }),
}
