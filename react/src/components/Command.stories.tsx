import { useEffect, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Calendar, Smile, Calculator, User, CreditCard, Settings } from 'lucide-react'
import { Button } from './Button'
import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from './Command'

const meta = {
  title: 'Components/Command',
  component: Command,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Command>

export default meta
type Story = StoryObj<typeof meta>

const items = (
  <>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      <CommandItem><Calendar />Calendar</CommandItem>
      <CommandItem><Smile />Search Emoji</CommandItem>
      <CommandItem disabled><Calculator />Calculator</CommandItem>
    </CommandGroup>
    <CommandSeparator />
    <CommandGroup heading="Settings">
      <CommandItem><User />Profile<CommandShortcut>⌘P</CommandShortcut></CommandItem>
      <CommandItem><CreditCard />Billing<CommandShortcut>⌘B</CommandShortcut></CommandItem>
      <CommandItem><Settings />Settings<CommandShortcut>⌘S</CommandShortcut></CommandItem>
    </CommandGroup>
  </>
)

export const Default: Story = {
  render: (args) => (
    <Command {...args} className="w-96 rounded-lg ring-1 ring-border shadow-md">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>{items}</CommandList>
    </Command>
  ),
}

export const InDialog: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    useEffect(() => {
      const down = (e: KeyboardEvent) => {
        if (e.key === 'j' && (e.metaKey || e.ctrlKey)) {
          e.preventDefault()
          setOpen((o) => !o)
        }
      }
      document.addEventListener('keydown', down)
      return () => document.removeEventListener('keydown', down)
    }, [])
    return (
      <>
        <Button variant="outline" onClick={() => setOpen(true)} kbd={<kbd className="text-xs text-muted-foreground">⌘J</kbd>}>
          Open palette
        </Button>
        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>{items}</CommandList>
        </CommandDialog>
      </>
    )
  },
}
