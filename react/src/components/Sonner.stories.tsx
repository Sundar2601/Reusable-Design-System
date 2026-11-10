import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from './Button'
import { Toaster, toast } from './Sonner'

const meta = {
  title: 'Components/Sonner',
  component: Toaster,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <>
        <Story />
        <Toaster />
      </>
    ),
  ],
  render: () => (
    <Button variant="outline" onClick={() => toast('Event has been created', { description: 'Sunday, December 03, 2023 at 9:00 AM' })}>
      Show toast
    </Button>
  ),
} satisfies Meta<typeof Toaster>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Types: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Button variant="outline" onClick={() => toast.success('Saved')}>Success</Button>
      <Button variant="outline" onClick={() => toast.info('Be aware')}>Info</Button>
      <Button variant="outline" onClick={() => toast.warning('Careful')}>Warning</Button>
      <Button variant="outline" onClick={() => toast.error('Something went wrong')}>Error</Button>
    </div>
  ),
}
export const WithAction: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() => toast('Event has been created', { action: { label: 'Undo', onClick: () => undefined } })}
    >
      Show toast with action
    </Button>
  ),
}
