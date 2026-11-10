import type { Meta, StoryObj } from '@storybook/react-vite'
import { Inbox } from 'lucide-react'
import { Button } from './Button'
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from './Empty'

const meta = {
  title: 'Components/Empty',
  component: Empty,
  tags: ['autodocs'],
} satisfies Meta<typeof Empty>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Empty {...args}>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Inbox />
        </EmptyMedia>
        <EmptyTitle>No messages</EmptyTitle>
        <EmptyDescription>You have no messages yet. Start a conversation to see it here.</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>Compose</Button>
      </EmptyContent>
    </Empty>
  ),
}

export const Outline: Story = {
  render: (args) => (
    <Empty {...args} className="border">
      <EmptyHeader>
        <EmptyTitle>Nothing here</EmptyTitle>
        <EmptyDescription>There is no data to display.</EmptyDescription>
      </EmptyHeader>
    </Empty>
  ),
}
