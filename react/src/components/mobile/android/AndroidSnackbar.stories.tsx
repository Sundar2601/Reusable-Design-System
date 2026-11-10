import type { Meta, StoryObj } from '@storybook/react-vite'
import { AndroidSnackbar } from './AndroidSnackbar'

const meta = {
  title: 'Mobile/Android/Snackbar',
  component: AndroidSnackbar,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  args: { message: 'Message archived' },
} satisfies Meta<typeof AndroidSnackbar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const WithAction: Story = { args: { action: 'Undo' } }
export const WithActionAndClose: Story = { args: { action: 'Undo', onClose: () => {} } }
export const LongMessage: Story = { args: { message: 'Your changes were saved to the cloud and will sync to your other devices shortly.', action: 'View' } }
