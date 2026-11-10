import type { Meta, StoryObj } from '@storybook/react-vite'
import { ChevronsUpDown } from 'lucide-react'
import { Button } from './Button'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './Collapsible'

const meta = {
  title: 'Components/Collapsible',
  component: Collapsible,
  tags: ['autodocs'],
  render: (args) => (
    <Collapsible {...args} className="flex w-80 flex-col gap-2">
      <div className="flex items-center justify-between gap-4">
        <h4 className="text-sm font-semibold">@peduarte starred 3 repositories</h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" aria-label="Toggle">
            <ChevronsUpDown />
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-lg px-4 py-2 font-mono text-sm inset-ring-1 inset-ring-border">@radix-ui/primitives</div>
      <CollapsibleContent className="flex flex-col gap-2">
        <div className="rounded-lg px-4 py-2 font-mono text-sm inset-ring-1 inset-ring-border">@radix-ui/colors</div>
        <div className="rounded-lg px-4 py-2 font-mono text-sm inset-ring-1 inset-ring-border">@stitches/react</div>
      </CollapsibleContent>
    </Collapsible>
  ),
} satisfies Meta<typeof Collapsible>

export default meta
type Story = StoryObj<typeof meta>

export const Closed: Story = {}
export const Open: Story = { args: { defaultOpen: true } }
export const Disabled: Story = { args: { disabled: true } }
