import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { ZardResizableImports } from '@/shared/components/resizable/resizable.imports'
import { ZardResizableComponent } from '@/shared/components/resizable/resizable.component'

const meta: Meta<ZardResizableComponent> = {
  title: 'Resizable',
  component: ZardResizableComponent,
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Resizable (ZardUI). Panels separated by draggable handles; `zLayout` horizontal / vertical, `zWithHandle` shows the grip. Same layouts as the React Resizable.' } } },
  decorators: [moduleMetadata({ imports: [...ZardResizableImports] })],
}
export default meta
type Story = StoryObj<ZardResizableComponent>

const box = (label: string) => `<div class="flex h-full items-center justify-center p-4 text-sm font-medium">${label}</div>`

export const Horizontal: Story = {
  render: () => ({
    template: `<z-resizable zLayout="horizontal" class="h-[200px] max-w-md rounded-lg inset-ring-1 inset-ring-border">
      <z-resizable-panel [zDefaultSize]="50">${box('One')}</z-resizable-panel>
      <z-resizable-handle />
      <z-resizable-panel [zDefaultSize]="50">${box('Two')}</z-resizable-panel>
    </z-resizable>`,
  }),
}

export const Vertical: Story = {
  render: () => ({
    template: `<z-resizable zLayout="vertical" class="h-[240px] max-w-md rounded-lg inset-ring-1 inset-ring-border">
      <z-resizable-panel [zDefaultSize]="30">${box('Header')}</z-resizable-panel>
      <z-resizable-handle />
      <z-resizable-panel [zDefaultSize]="70">${box('Content')}</z-resizable-panel>
    </z-resizable>`,
  }),
}

export const WithHandle: Story = {
  render: () => ({
    template: `<z-resizable zLayout="horizontal" class="h-[200px] max-w-md rounded-lg inset-ring-1 inset-ring-border">
      <z-resizable-panel [zDefaultSize]="25">${box('Sidebar')}</z-resizable-panel>
      <z-resizable-handle zWithHandle />
      <z-resizable-panel [zDefaultSize]="75">${box('Content')}</z-resizable-panel>
    </z-resizable>`,
  }),
}
