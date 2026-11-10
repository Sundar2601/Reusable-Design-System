import type { Meta, StoryObj } from '@storybook/react-vite'
import { Separator } from './Separator'

const meta = {
  title: 'Components/Separator',
  component: Separator,
  tags: ['autodocs'],
  argTypes: { orientation: { control: 'inline-radio', options: ['horizontal', 'vertical'] } },
} satisfies Meta<typeof Separator>

export default meta
type Story = StoryObj<typeof meta>

export const Horizontal: Story = {
  render: (args) => (
    <div className="w-64">
      <div className="text-sm font-medium">Design system</div>
      <div className="text-sm text-muted-foreground">An open-source UI component library.</div>
      <Separator {...args} className="my-4" />
      <div className="text-sm">Docs</div>
    </div>
  ),
}

export const Vertical: Story = {
  render: (args) => (
    <div className="flex h-5 items-center gap-4 text-sm">
      <div>Blog</div>
      <Separator {...args} orientation="vertical" />
      <div>Docs</div>
      <Separator {...args} orientation="vertical" />
      <div>Source</div>
    </div>
  ),
}
