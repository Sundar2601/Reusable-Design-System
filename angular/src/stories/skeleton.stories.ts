import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { ZardSkeletonComponent } from '@/shared/components/skeleton'

const meta: Meta<ZardSkeletonComponent> = {
  title: 'Skeleton',
  component: ZardSkeletonComponent,
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Skeleton (ZardUI). Size and shape come from classes, like the React Skeleton.' } } },
  decorators: [moduleMetadata({ imports: [ZardSkeletonComponent] })],
  render: () => ({ template: `<z-skeleton class="h-4 w-48" />` }),
}
export default meta
type Story = StoryObj<ZardSkeletonComponent>

export const Default: Story = {}
export const Card: Story = {
  render: () => ({
    template: `<div class="flex items-center gap-4">
      <z-skeleton class="size-12 rounded-full" />
      <div class="flex flex-col gap-2"><z-skeleton class="h-4 w-64" /><z-skeleton class="h-4 w-52" /></div>
    </div>`,
  }),
}
