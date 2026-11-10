import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { ZardProgressComponent } from '@/shared/components/progress'

const meta: Meta<ZardProgressComponent> = {
  title: 'Progress',
  component: ZardProgressComponent,
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Progress (ZardUI). Same as the React Progress: `value` from 0 to 100.' } } },
  decorators: [moduleMetadata({ imports: [ZardProgressComponent] })],
  argTypes: { value: { control: { type: 'range', min: 0, max: 100, step: 1 } } },
  args: { value: 60 },
  render: (args) => ({ props: args, template: `<div class="w-72"><z-progress [value]="value" /></div>` }),
}
export default meta
type Story = StoryObj<ZardProgressComponent>

export const Default: Story = {}
export const Empty: Story = { args: { value: 0 } }
export const Complete: Story = { args: { value: 100 } }
