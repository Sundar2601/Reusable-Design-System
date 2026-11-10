import type { Meta, StoryObj } from '@storybook/react-vite'
import { ArrowUp, Command } from 'lucide-react'
import { Button } from './Button'
import { Kbd, KbdGroup } from './Kbd'

const meta = {
  title: 'Components/Kbd',
  component: Kbd,
  tags: ['autodocs'],
  args: { children: 'K' },
} satisfies Meta<typeof Kbd>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Modifiers: Story = {
  render: () => (
    <KbdGroup>
      <Kbd>
        <Command />
      </Kbd>
      <Kbd>
        <ArrowUp />
      </Kbd>
      <Kbd>K</Kbd>
    </KbdGroup>
  ),
}
export const Combination: Story = {
  render: () => (
    <KbdGroup>
      <Kbd>Ctrl</Kbd>
      <span className="text-sm text-muted-foreground">+</span>
      <Kbd>B</Kbd>
    </KbdGroup>
  ),
}
export const InButton: Story = {
  render: () => (
    <Button variant="outline" kbd={<Kbd>⌘K</Kbd>}>
      Search
    </Button>
  ),
}
