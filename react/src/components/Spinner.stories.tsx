import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from './Button'
import { Spinner } from './Spinner'

const meta = {
  title: 'Components/Spinner',
  component: Spinner,
  tags: ['autodocs'],
} satisfies Meta<typeof Spinner>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Spinner />
      <Spinner className="size-6" />
      <Spinner className="size-8" />
    </div>
  ),
}
export const InButton: Story = {
  render: () => (
    <Button disabled leftIcon={<Spinner />}>
      Please wait
    </Button>
  ),
}
