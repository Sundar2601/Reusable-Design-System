import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from './Button'
import { Input } from './Input'
import { Popover, PopoverContent, PopoverDescription, PopoverHeader, PopoverTitle, PopoverTrigger } from './Popover'

const meta = {
  title: 'Components/Popover',
  component: Popover,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Popover>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Popover {...args}>
      <PopoverTrigger asChild><Button variant="outline">Open popover</Button></PopoverTrigger>
      <PopoverContent>
        <PopoverHeader>
          <PopoverTitle>Dimensions</PopoverTitle>
          <PopoverDescription>Set the dimensions for the layer.</PopoverDescription>
        </PopoverHeader>
        <div className="grid grid-cols-3 items-center gap-2">
          <label htmlFor="popover-width" className="text-sm">Width</label>
          <Input id="popover-width" defaultValue="100%" className="col-span-2 w-full" />
          <label htmlFor="popover-height" className="text-sm">Height</label>
          <Input id="popover-height" defaultValue="25px" className="col-span-2 w-full" />
        </div>
      </PopoverContent>
    </Popover>
  ),
}

export const Sides: Story = {
  render: (args) => (
    <div className="flex gap-3">
      {(['top', 'right', 'bottom', 'left'] as const).map((side) => (
        <Popover key={side} {...args}>
          <PopoverTrigger asChild><Button variant="outline" className="capitalize">{side}</Button></PopoverTrigger>
          <PopoverContent side={side} className="w-48">Opens on the {side}.</PopoverContent>
        </Popover>
      ))}
    </div>
  ),
}
