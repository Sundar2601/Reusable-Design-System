import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from './Button'
import { Input } from './Input'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './Dialog'

const meta = {
  title: 'Components/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Dialog>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Dialog {...args}>
      <DialogTrigger asChild><Button variant="outline">Edit profile</Button></DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>Make changes to your profile here. Click save when you are done.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-3">
          <label htmlFor="dialog-name" className="text-sm font-medium">Name</label>
          <Input id="dialog-name" defaultValue="Pedro Duarte" className="w-full" />
          <label htmlFor="dialog-username" className="text-sm font-medium">Username</label>
          <Input id="dialog-username" defaultValue="@peduarte" className="w-full" />
        </div>
        <DialogFooter>
          <DialogClose asChild><Button variant="outline">Cancel</Button></DialogClose>
          <Button>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

export const NoCloseButton: Story = {
  render: (args) => (
    <Dialog {...args}>
      <DialogTrigger asChild><Button variant="outline">Open</Button></DialogTrigger>
      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>No close button</DialogTitle>
          <DialogDescription>Use the footer action to dismiss this dialog.</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild><Button>Got it</Button></DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}
