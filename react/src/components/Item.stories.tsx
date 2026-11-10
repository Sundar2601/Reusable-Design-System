import type { Meta, StoryObj } from '@storybook/react-vite'
import { BadgeCheck, ChevronRight } from 'lucide-react'
import { Button } from './Button'
import { Item, ItemActions, ItemContent, ItemDescription, ItemGroup, ItemMedia, ItemSeparator, ItemTitle } from './Item'

const meta = {
  title: 'Components/Item',
  component: Item,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'inline-radio', options: ['default', 'outline', 'muted'] },
    size: { control: 'inline-radio', options: ['default', 'sm', 'xs'] },
  },
  decorators: [(Story) => <div className="w-96"><Story /></div>],
} satisfies Meta<typeof Item>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { variant: 'outline' },
  render: (args) => (
    <Item {...args}>
      <ItemContent>
        <ItemTitle>Basic Item</ItemTitle>
        <ItemDescription>A simple item with title and description.</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button variant="outline" size="sm">Action</Button>
      </ItemActions>
    </Item>
  ),
}

export const WithIcon: Story = {
  args: { variant: 'outline' },
  render: (args) => (
    <Item {...args}>
      <ItemMedia variant="icon">
        <BadgeCheck />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Your profile has been verified.</ItemTitle>
      </ItemContent>
      <ItemActions>
        <ChevronRight className="size-4" />
      </ItemActions>
    </Item>
  ),
}

export const Muted: Story = { ...Default, args: { variant: 'muted' } }

export const Group: Story = {
  render: () => (
    <ItemGroup>
      {['Ada Lovelace', 'Grace Hopper'].map((name, i) => (
        <div key={name}>
          <Item>
            <ItemContent>
              <ItemTitle>{name}</ItemTitle>
              <ItemDescription>{name.toLowerCase().replace(' ', '.')}@example.com</ItemDescription>
            </ItemContent>
          </Item>
          {i === 0 ? <ItemSeparator /> : null}
        </div>
      ))}
    </ItemGroup>
  ),
}
