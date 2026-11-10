import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { ZardButtonComponent } from '@/shared/components/button'
import { PageHeaderComponent } from '@/shared/extended/page-header.component'

const meta: Meta<PageHeaderComponent> = {
  title: 'Page Header',
  component: PageHeaderComponent,
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Page Header (extended, hand-built). Same API as the React PageHeader: `heading`, `description`, plus `breadcrumb` and `actions` slots.' } } },
  decorators: [moduleMetadata({ imports: [ZardButtonComponent] })],
  args: { heading: 'Projects', description: 'Manage and track all of your team projects.' },
  render: (args) => ({
    props: args,
    template: `<div class="w-[720px]"><ui-page-header [heading]="heading" [description]="description" /></div>`,
  }),
}
export default meta
type Story = StoryObj<PageHeaderComponent>

export const Default: Story = {}
export const WithActions: Story = {
  render: (args) => ({
    props: args,
    template: `<div class="w-[720px]"><ui-page-header [heading]="heading" [description]="description">
      <button actions z-button zType="outline">Export</button>
      <button actions z-button>New project</button>
    </ui-page-header></div>`,
  }),
}
export const WithBreadcrumb: Story = {
  render: (args) => ({
    props: args,
    template: `<div class="w-[720px]"><ui-page-header [heading]="heading" [description]="description">
      <span breadcrumb>Home / Workspace / Projects</span>
      <button actions z-button>New project</button>
    </ui-page-header></div>`,
  }),
}
