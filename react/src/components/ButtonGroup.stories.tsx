import type { Meta, StoryObj } from '@storybook/react-vite'
import { ChevronDown, Minus, Plus } from 'lucide-react'
import { Button } from './Button'
import { ButtonGroup, ButtonGroupSeparator, ButtonGroupText } from './ButtonGroup'
import { Input } from './Input'

const meta = {
  title: 'Components/Button Group',
  component: ButtonGroup,
  tags: ['autodocs'],
  args: { orientation: 'horizontal' },
  argTypes: { orientation: { control: 'inline-radio', options: ['horizontal', 'vertical'] } },
  render: (args) => (
    <ButtonGroup {...args}>
      <Button variant="outline">Archive</Button>
      <Button variant="outline">Report</Button>
      <Button variant="outline">Snooze</Button>
    </ButtonGroup>
  ),
} satisfies Meta<typeof ButtonGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Vertical: Story = { args: { orientation: 'vertical' } }
export const WithSeparator: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="secondary">Copy</Button>
      <ButtonGroupSeparator />
      <Button variant="secondary">Paste</Button>
      <ButtonGroupSeparator />
      <Button variant="secondary" aria-label="More">
        <ChevronDown />
      </Button>
    </ButtonGroup>
  ),
}
export const WithInput: Story = {
  render: () => (
    <ButtonGroup>
      <Input placeholder="Search..." className="w-48 rounded-e-none" />
      <Button variant="outline">Go</Button>
    </ButtonGroup>
  ),
}
export const WithText: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="outline" aria-label="Decrease">
        <Minus />
      </Button>
      <ButtonGroupText>3</ButtonGroupText>
      <Button variant="outline" aria-label="Increase">
        <Plus />
      </Button>
    </ButtonGroup>
  ),
}
