import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from './Button'
import { Input } from './Input'
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from './Sheet'

const meta = {
  title: 'Components/Sheet',
  component: Sheet,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Sheet>

export default meta
type Story = StoryObj<typeof meta>

function SheetExample({ side }: { side: 'top' | 'right' | 'bottom' | 'left' }) {
  return (
    <Sheet>
      <SheetTrigger asChild><Button variant="outline">Open {side}</Button></SheetTrigger>
      <SheetContent side={side}>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>Make changes to your profile here. Click save when you are done.</SheetDescription>
        </SheetHeader>
        <div className="grid gap-3 px-4">
          <label htmlFor={`sheet-name-${side}`} className="text-sm font-medium">Name</label>
          <Input id={`sheet-name-${side}`} defaultValue="Pedro Duarte" className="w-full" />
        </div>
        <SheetFooter>
          <SheetClose asChild><Button>Save changes</Button></SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export const Right: Story = { render: () => <SheetExample side="right" /> }
export const Left: Story = { render: () => <SheetExample side="left" /> }
export const Top: Story = { render: () => <SheetExample side="top" /> }
export const Bottom: Story = { render: () => <SheetExample side="bottom" /> }
