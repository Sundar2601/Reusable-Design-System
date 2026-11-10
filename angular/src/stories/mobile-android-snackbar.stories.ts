import type { Meta, StoryObj } from '@storybook/angular'
import { AndroidSnackbarComponent } from '@/shared/extended/android-snackbar.component'

const meta: Meta<AndroidSnackbarComponent> = {
  title: 'Mobile/Android/Snackbar',
  component: AndroidSnackbarComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: { description: { component: 'Android Snackbar (extended, hand-built). Same API as the React AndroidSnackbar: `message`, `action`, `closable`, outputs `actionClick` and `closed`.' } },
  },
  args: { message: 'Message archived', action: undefined, closable: false },
  render: (args) => ({ props: args, template: `<android-snackbar [message]="message" [action]="action" [closable]="closable" />` }),
}
export default meta
type Story = StoryObj<AndroidSnackbarComponent>

export const Default: Story = {}
export const WithAction: Story = { args: { action: 'Undo' } }
export const WithActionAndClose: Story = { args: { action: 'Undo', closable: true } }
export const LongMessage: Story = { args: { message: 'Your changes were saved to the cloud and will sync to your other devices shortly.', action: 'View' } }
