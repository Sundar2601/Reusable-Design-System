import type { Meta, StoryObj } from '@storybook/react-vite'
import { FolderPlus, Lock, SearchX } from 'lucide-react'
import { Button } from '../Button'
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from '../Empty'

const meta = {
  title: 'Patterns/Empty states',
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Empty state pattern, composed from Empty and Button. Say what is missing, why, and what the user can do next.' } } },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const NoResults: Story = {
  render: () => (
    <Empty className="w-[28rem] border">
      <EmptyHeader>
        <EmptyMedia variant="icon"><SearchX /></EmptyMedia>
        <EmptyTitle>No results found</EmptyTitle>
        <EmptyDescription>We could not find anything matching "invoice 2031". Try a different term or clear your filters.</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline">Clear filters</Button>
      </EmptyContent>
    </Empty>
  ),
}

export const FirstUse: Story = {
  render: () => (
    <Empty className="w-[28rem] border">
      <EmptyHeader>
        <EmptyMedia variant="icon"><FolderPlus /></EmptyMedia>
        <EmptyTitle>No projects yet</EmptyTitle>
        <EmptyDescription>Projects group your work in one place. Create your first one to get started.</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>Create project</Button>
      </EmptyContent>
    </Empty>
  ),
}

export const NoPermission: Story = {
  render: () => (
    <Empty className="w-[28rem] border">
      <EmptyHeader>
        <EmptyMedia variant="icon"><Lock /></EmptyMedia>
        <EmptyTitle>You do not have access</EmptyTitle>
        <EmptyDescription>Ask a workspace admin to grant you access to this page.</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline">Request access</Button>
      </EmptyContent>
    </Empty>
  ),
}
