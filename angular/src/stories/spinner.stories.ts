import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { ZardButtonComponent } from '@/shared/components/button'
import { ZardSpinnerComponent } from '@/shared/components/spinner'

const meta: Meta<ZardSpinnerComponent> = {
  title: 'Spinner',
  component: ZardSpinnerComponent,
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Spinner (ZardUI). Same as the React Spinner. Size it with classes such as `size-6`.' } } },
  decorators: [moduleMetadata({ imports: [ZardSpinnerComponent, ZardButtonComponent] })],
  render: () => ({ template: `<z-spinner />` }),
}
export default meta
type Story = StoryObj<ZardSpinnerComponent>

export const Default: Story = {}
export const Sizes: Story = {
  render: () => ({
    template: `<div class="flex items-center gap-4"><z-spinner /><z-spinner class="size-6" /><z-spinner class="size-8" /></div>`,
  }),
}
export const InButton: Story = {
  render: () => ({ template: `<button z-button zDisabled><z-spinner /> Please wait</button>` }),
}
