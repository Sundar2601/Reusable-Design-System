import type { Meta, StoryObj } from '@storybook/react-vite'
import { Trash2 } from 'lucide-react'
import { AndroidButton } from './AndroidButton'
import { AndroidDialog } from './AndroidDialog'

const meta = {
  title: 'Mobile/Android/Dialog',
  component: AndroidDialog,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  args: {
    title: 'Discard draft?',
    description: 'Your draft will be permanently deleted. This cannot be undone.',
    actions: (
      <>
        <AndroidButton variant="text">Cancel</AndroidButton>
        <AndroidButton variant="text">Discard</AndroidButton>
      </>
    ),
  },
} satisfies Meta<typeof AndroidDialog>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}
export const WithIcon: Story = { args: { icon: <Trash2 />, title: 'Delete item?' } }
