import type { Meta, StoryObj } from '@storybook/react-vite'
import { Plus } from 'lucide-react'
import { Button } from './Button'
import { PageHeader } from './PageHeader'

const meta = {
  title: 'Components/Page Header',
  component: PageHeader,
  tags: ['autodocs'],
  args: { title: 'Projects', description: 'Manage and track all of your team projects.' },
  decorators: [(Story) => <div className="w-[720px]"><Story /></div>],
} satisfies Meta<typeof PageHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const WithActions: Story = {
  args: {
    actions: (
      <>
        <Button variant="outline">Export</Button>
        <Button leftIcon={<Plus />}>New project</Button>
      </>
    ),
  },
}
export const WithBreadcrumb: Story = {
  args: { breadcrumb: <span>Home / Workspace / Projects</span>, actions: <Button>New project</Button> },
}
