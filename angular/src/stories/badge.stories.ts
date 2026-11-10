import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { ZardBadgeComponent } from '@/shared/components/badge'

const meta: Meta<ZardBadgeComponent & { label: string }> = {
  title: 'Badge',
  component: ZardBadgeComponent,
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Badge (ZardUI). Same variants as the React Badge: `zType` default / secondary / destructive / outline / ghost / link.' } } },
  decorators: [moduleMetadata({ imports: [ZardBadgeComponent] })],
  argTypes: { zType: { name: 'type', control: 'select', options: ['default', 'secondary', 'destructive', 'outline', 'ghost', 'link'] } },
  args: { zType: 'default', label: 'Badge' },
  render: ({ label, ...args }) => ({
    props: args,
    template: `<z-badge [zType]="zType">${label}</z-badge>`,
  }),
}
export default meta
type Story = StoryObj<ZardBadgeComponent & { label: string }>

export const Default: Story = {}
export const Secondary: Story = { args: { zType: 'secondary' } }
export const Destructive: Story = { args: { zType: 'destructive' } }
export const Outline: Story = { args: { zType: 'outline' } }
export const Ghost: Story = { args: { zType: 'ghost' } }
export const Link: Story = { args: { zType: 'link' } }
