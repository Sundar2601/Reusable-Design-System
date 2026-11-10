import type { Meta, StoryObj } from '@storybook/react-vite'
import { ScrollArea, ScrollBar } from './ScrollArea'

const meta = {
  title: 'Components/Scroll Area',
  component: ScrollArea,
  tags: ['autodocs'],
} satisfies Meta<typeof ScrollArea>

export default meta
type Story = StoryObj<typeof meta>

const tags = Array.from({ length: 40 }, (_, i) => `v1.2.0-beta.${40 - i}`)

export const Vertical: Story = {
  render: () => (
    <ScrollArea className="h-72 w-48 rounded-lg inset-ring-1 inset-ring-border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium">Tags</h4>
        {tags.map((t) => (
          <div key={t} className="border-b border-border py-2 text-sm">
            {t}
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
}

export const Horizontal: Story = {
  render: () => (
    <ScrollArea className="w-96 whitespace-nowrap rounded-lg inset-ring-1 inset-ring-border">
      <div className="flex w-max gap-4 p-4">
        {Array.from({ length: 10 }, (_, i) => (
          <div key={i} className="flex h-24 w-32 items-center justify-center rounded-lg bg-muted text-sm">
            Item {i + 1}
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  ),
}
