import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '../Button'
import { Progress } from '../Progress'
import { Skeleton } from '../Skeleton'
import { Spinner } from '../Spinner'

const meta = {
  title: 'Patterns/Loading',
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Loading pattern. Use skeletons for content with a known shape, a spinner for short actions, and progress when the amount done is known.' } } },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const SkeletonList: Story = {
  render: () => (
    <div className="flex w-96 flex-col gap-4" aria-busy="true">
      {[0, 1, 2].map((i) => (
        <div key={i} className="flex items-center gap-4">
          <Skeleton className="size-12 rounded-full" />
          <div className="flex flex-col gap-2">
            <Skeleton className="h-4 w-64" />
            <Skeleton className="h-4 w-44" />
          </div>
        </div>
      ))}
    </div>
  ),
}

export const SpinnerButton: Story = {
  render: () => (
    <Button disabled>
      <Spinner /> Saving
    </Button>
  ),
}

export const ProgressBar: Story = {
  render: () => (
    <div className="flex w-72 flex-col gap-2">
      <div className="flex justify-between text-sm"><span>Uploading report.pdf</span><span>60%</span></div>
      <Progress value={60} />
    </div>
  ),
}
