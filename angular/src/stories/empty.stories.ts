import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { ZardButtonComponent } from '@/shared/components/button'
import { ZardEmptyComponent } from '@/shared/components/empty'

const meta: Meta<ZardEmptyComponent> = {
  title: 'Empty',
  component: ZardEmptyComponent,
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Empty (ZardUI). Same as the React Empty: `zTitle`, `zDescription`, and action templates via `zActions`.' } } },
  decorators: [moduleMetadata({ imports: [ZardEmptyComponent, ZardButtonComponent] })],
}
export default meta
type Story = StoryObj<ZardEmptyComponent>

export const Default: Story = {
  render: () => ({
    template: `<z-empty zTitle="No messages" zDescription="You have no messages yet. Start a conversation to see it here." [zActions]="[compose]" />
    <ng-template #compose><button z-button>Compose</button></ng-template>`,
  }),
}
export const Outline: Story = {
  render: () => ({
    template: `<z-empty class="border" zTitle="Nothing here" zDescription="There is no data to display." />`,
  }),
}
