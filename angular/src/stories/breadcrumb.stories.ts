import type { Meta, StoryObj } from '@storybook/angular'
import { applicationConfig, moduleMetadata } from '@storybook/angular'
import { provideRouter } from '@angular/router'
import { ZardBreadcrumbComponent, ZardBreadcrumbImports } from '@/shared/components/breadcrumb'

const meta: Meta<ZardBreadcrumbComponent> = {
  title: 'Breadcrumb',
  component: ZardBreadcrumbComponent,
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Breadcrumb (ZardUI). `z-breadcrumb` with `z-breadcrumb-item` children; the last item becomes the current page. `zSeparator` sets a custom separator, `z-breadcrumb-ellipsis` stands in for collapsed levels.' } } },
  decorators: [applicationConfig({ providers: [provideRouter([])] }), moduleMetadata({ imports: [...ZardBreadcrumbImports] })],
  argTypes: { zSize: { control: 'inline-radio', options: ['sm', 'md', 'lg'] } },
  args: { zSize: 'md' },
}
export default meta
type Story = StoryObj<ZardBreadcrumbComponent>

export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `<z-breadcrumb [zSize]="zSize">
      <z-breadcrumb-item [routerLink]="['/']">Home</z-breadcrumb-item>
      <z-breadcrumb-item [routerLink]="['/components']">Components</z-breadcrumb-item>
      <z-breadcrumb-item>Breadcrumb</z-breadcrumb-item>
    </z-breadcrumb>`,
  }),
}
export const CustomSeparator: Story = {
  render: () => ({
    template: `<z-breadcrumb zSeparator="/">
      <z-breadcrumb-item [routerLink]="['/']">Home</z-breadcrumb-item>
      <z-breadcrumb-item [routerLink]="['/components']">Components</z-breadcrumb-item>
      <z-breadcrumb-item>Breadcrumb</z-breadcrumb-item>
    </z-breadcrumb>`,
  }),
}
export const Collapsed: Story = {
  render: () => ({
    template: `<z-breadcrumb>
      <z-breadcrumb-item [routerLink]="['/']">Home</z-breadcrumb-item>
      <z-breadcrumb-item><z-breadcrumb-ellipsis /></z-breadcrumb-item>
      <z-breadcrumb-item [routerLink]="['/components']">Components</z-breadcrumb-item>
      <z-breadcrumb-item>Breadcrumb</z-breadcrumb-item>
    </z-breadcrumb>`,
  }),
}
