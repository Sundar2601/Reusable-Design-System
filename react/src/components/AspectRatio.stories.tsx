import type { Meta, StoryObj } from '@storybook/react-vite'
import { AspectRatio } from './AspectRatio'

const meta = {
  title: 'Components/Aspect Ratio',
  component: AspectRatio,
  tags: ['autodocs'],
  argTypes: { ratio: { control: 'number' } },
  args: { ratio: 16 / 9 },
  render: (args) => (
    <div className="w-72">
      <AspectRatio {...args} className="flex items-center justify-center rounded-lg bg-muted text-sm text-muted-foreground">
        {args.ratio?.toFixed(2)}
      </AspectRatio>
    </div>
  ),
} satisfies Meta<typeof AspectRatio>

export default meta
type Story = StoryObj<typeof meta>

export const Widescreen: Story = {}
export const Square: Story = { args: { ratio: 1 } }
export const Classic: Story = { args: { ratio: 4 / 3 } }
