import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { toast } from 'ngx-sonner'
import { ZardButtonComponent } from '@/shared/components/button'
import { ZardSonnerComponent } from '@/shared/components/sonner'

const meta: Meta<ZardSonnerComponent> = {
  title: 'Sonner',
  component: ZardSonnerComponent,
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Sonner toast (ZardUI, wraps ngx-sonner). Place `<z-sonner />` once, then call toast (or `ZardSonnerService`) from anywhere.' } } },
  decorators: [moduleMetadata({ imports: [ZardSonnerComponent, ZardButtonComponent] })],
  render: () => ({
    props: { show: () => toast('Event has been created', { description: 'Sunday, December 03, 2023 at 9:00 AM' }) },
    template: `<z-sonner /><button z-button zType="outline" (click)="show()">Show toast</button>`,
  }),
}
export default meta
type Story = StoryObj<ZardSonnerComponent>

export const Default: Story = {}
export const Types: Story = {
  render: () => ({
    props: {
      success: () => toast.success('Saved'),
      info: () => toast.info('Be aware'),
      warning: () => toast.warning('Careful'),
      error: () => toast.error('Something went wrong'),
    },
    template: `<z-sonner />
    <div class="flex flex-wrap gap-2">
      <button z-button zType="outline" (click)="success()">Success</button>
      <button z-button zType="outline" (click)="info()">Info</button>
      <button z-button zType="outline" (click)="warning()">Warning</button>
      <button z-button zType="outline" (click)="error()">Error</button>
    </div>`,
  }),
}
export const WithAction: Story = {
  render: () => ({
    props: { show: () => toast('Event has been created', { action: { label: 'Undo', onClick: () => undefined } }) },
    template: `<z-sonner /><button z-button zType="outline" (click)="show()">Show toast with action</button>`,
  }),
}
