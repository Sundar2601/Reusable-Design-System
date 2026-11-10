import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from './Button'
import { Tooltip, TooltipContent, TooltipTrigger } from './Tooltip'

const meta = {
  title: 'Components/Tooltip',
  component: TooltipContent,
  tags: ['autodocs'],
  argTypes: { side: { control: 'inline-radio', options: ['top', 'right', 'bottom', 'left'] } },
  args: { side: 'top', children: 'Add to library' },
  render: (args) => (
    <div className="p-16">
      <Tooltip open>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover</Button>
        </TooltipTrigger>
        <TooltipContent {...args} />
      </Tooltip>
    </div>
  ),
} satisfies Meta<typeof TooltipContent>

export default meta
type Story = StoryObj<typeof meta>

export const Top: Story = {}
export const Right: Story = { args: { side: 'right' } }
export const Bottom: Story = { args: { side: 'bottom' } }
export const Left: Story = { args: { side: 'left' } }
