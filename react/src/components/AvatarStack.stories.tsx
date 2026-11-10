import type { Meta, StoryObj } from '@storybook/react-vite'
import { AvatarStack } from './AvatarStack'

const people = [
  { name: 'Ada Lovelace' },
  { name: 'Grace Hopper' },
  { name: 'Alan Turing' },
  { name: 'Linus Torvalds' },
  { name: 'Margaret Hamilton' },
  { name: 'Dennis Ritchie' },
]

const meta = {
  title: 'Components/Avatar Group',
  component: AvatarStack,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'inline-radio', options: ['sm', 'default', 'lg'] },
    max: { control: { type: 'number', min: 1 } },
  },
  args: { items: people, max: 4, size: 'default' },
} satisfies Meta<typeof AvatarStack>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const NoOverflow: Story = { args: { max: 10 } }
export const Sizes: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      <AvatarStack {...args} size="sm" />
      <AvatarStack {...args} />
      <AvatarStack {...args} size="lg" />
    </div>
  ),
}
