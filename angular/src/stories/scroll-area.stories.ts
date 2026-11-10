import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { AppScrollAreaComponent } from '@/shared/extended/scroll-area.component'

const meta: Meta<AppScrollAreaComponent> = {
  title: 'Scroll Area',
  component: AppScrollAreaComponent,
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Scroll Area. ZardUI has no scroll area, so this is a small hand-built component (src/app/shared/extended/scroll-area.component.ts): native scrolling with thin token-colored scrollbars.' } } },
  decorators: [moduleMetadata({ imports: [AppScrollAreaComponent] })],
}
export default meta
type Story = StoryObj<AppScrollAreaComponent>

const tags = Array.from({ length: 40 }, (_, i) => `v1.2.0-beta.${40 - i}`)

export const Vertical: Story = {
  render: () => ({
    props: { tags },
    template: `<app-scroll-area class="h-72 w-48 rounded-lg inset-ring-1 inset-ring-border"><div class="p-4">
      <h4 class="mb-4 text-sm font-medium">Tags</h4>
      @for (t of tags; track t) { <div class="border-b border-border py-2 text-sm">{{ t }}</div> }
    </div></app-scroll-area>`,
  }),
}

export const Horizontal: Story = {
  render: () => ({
    props: { items: Array.from({ length: 10 }, (_, i) => i + 1) },
    template: `<app-scroll-area zOrientation="horizontal" class="w-96 whitespace-nowrap rounded-lg inset-ring-1 inset-ring-border"><div class="flex w-max gap-4 p-4">
      @for (i of items; track i) { <div class="flex h-24 w-32 items-center justify-center rounded-lg bg-muted text-sm">Item {{ i }}</div> }
    </div></app-scroll-area>`,
  }),
}
