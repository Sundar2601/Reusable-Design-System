import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from './Button'
import { HoverCard, HoverCardContent, HoverCardTrigger } from './HoverCard'

const meta = {
  title: 'Components/Hover Card',
  component: HoverCard,
  tags: ['autodocs'],
  render: (args) => (
    <div className="p-4 pb-40">
      <HoverCard {...args}>
        <HoverCardTrigger asChild>
          <Button variant="link">@nextjs</Button>
        </HoverCardTrigger>
        <HoverCardContent>
          <div className="flex flex-col gap-1">
            <h4 className="text-sm font-semibold">@nextjs</h4>
            <p className="text-sm text-muted-foreground">The React Framework, created and maintained by @vercel.</p>
            <div className="text-xs text-muted-foreground">Joined December 2021</div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  ),
} satisfies Meta<typeof HoverCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Open: Story = { args: { open: true } }
