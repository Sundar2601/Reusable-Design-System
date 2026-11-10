import type { Meta, StoryObj } from '@storybook/react-vite'
import { Queue, QueueItem, QueueSection } from './Queue'

const meta = {
  title: 'AI Elements/Queue',
  component: Queue,
  tags: ['autodocs'],
  args: { className: 'w-80' },
  render: (args) => (
    <Queue {...args}>
      <QueueSection label="In progress" count={2}>
        <QueueItem status="in-progress" description="Step 2 of 4">Generate the API client</QueueItem>
        <QueueItem status="pending">Write unit tests</QueueItem>
      </QueueSection>
      <QueueSection label="Completed" count={2}>
        <QueueItem status="completed">Read the OpenAPI spec</QueueItem>
        <QueueItem status="failed" description="Network error">Fetch the staging schema</QueueItem>
      </QueueSection>
    </Queue>
  ),
} satisfies Meta<typeof Queue>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
