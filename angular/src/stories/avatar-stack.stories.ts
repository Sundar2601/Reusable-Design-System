import type { Meta, StoryObj } from '@storybook/angular'
import { AvatarStackComponent } from '@/shared/extended/avatar-stack.component'

const people = [
  { name: 'Ada Lovelace' },
  { name: 'Grace Hopper' },
  { name: 'Alan Turing' },
  { name: 'Linus Torvalds' },
  { name: 'Margaret Hamilton' },
  { name: 'Dennis Ritchie' },
]

const meta: Meta<AvatarStackComponent> = {
  title: 'Avatar Group',
  component: AvatarStackComponent,
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Avatar Group (extended, composed from ZardUI Avatar). Same API as the React AvatarStack: `items`, `max` before the "+N" overflow, `size` sm / default / lg.' } } },
  argTypes: { size: { control: 'inline-radio', options: ['sm', 'default', 'lg'] }, max: { control: { type: 'number', min: 1 } } },
  args: { items: people, max: 4, size: 'default' },
  render: (args) => ({ props: args, template: `<ui-avatar-stack [items]="items" [max]="max" [size]="size" />` }),
}
export default meta
type Story = StoryObj<AvatarStackComponent>

export const Default: Story = {}
export const NoOverflow: Story = { args: { max: 10 } }
export const Sizes: Story = {
  render: (args) => ({
    props: args,
    template: `<div class="flex flex-col gap-4">
      <ui-avatar-stack [items]="items" [max]="max" size="sm" />
      <ui-avatar-stack [items]="items" [max]="max" />
      <ui-avatar-stack [items]="items" [max]="max" size="lg" />
    </div>`,
  }),
}
