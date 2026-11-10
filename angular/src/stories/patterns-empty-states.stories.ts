import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { ZardButtonComponent } from '@/shared/components/button'
import { ZardEmptyComponent } from '@/shared/components/empty'

const meta: Meta = {
  title: 'Patterns/Empty states',
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Empty state pattern (ZardUI): say what is missing, why, and what to do next, using z-empty with action buttons.' } } },
  decorators: [moduleMetadata({ imports: [ZardEmptyComponent, ZardButtonComponent] })],
}
export default meta
type Story = StoryObj

export const NoResults: Story = {
  render: () => ({
    template: `<z-empty class="w-[28rem] border" zTitle="No results found" zDescription="We could not find anything matching &quot;invoice 2031&quot;. Try a different term or clear your filters." [zActions]="[a]" />
    <ng-template #a><button z-button zType="outline">Clear filters</button></ng-template>`,
  }),
}
export const FirstUse: Story = {
  render: () => ({
    template: `<z-empty class="w-[28rem] border" zTitle="No projects yet" zDescription="Projects group your work in one place. Create your first one to get started." [zActions]="[a]" />
    <ng-template #a><button z-button>Create project</button></ng-template>`,
  }),
}
export const NoPermission: Story = {
  render: () => ({
    template: `<z-empty class="w-[28rem] border" zTitle="You do not have access" zDescription="Ask a workspace admin to grant you access to this page." [zActions]="[a]" />
    <ng-template #a><button z-button zType="outline">Request access</button></ng-template>`,
  }),
}
