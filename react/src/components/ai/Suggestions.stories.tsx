import type { Meta, StoryObj } from '@storybook/react-vite'
import { Suggestion, Suggestions } from './Suggestions'

const prompts = ['Summarize this document', 'Draft a reply', 'Explain like I am five', 'Find action items', 'Translate to French']

const meta = {
  title: 'AI Elements/Suggestions',
  component: Suggestions,
  tags: ['autodocs'],
  argTypes: { layout: { control: 'inline-radio', options: ['wrap', 'scroll'] } },
} satisfies Meta<typeof Suggestions>

export default meta
type Story = StoryObj<typeof meta>

export const Wrap: Story = {
  render: (args) => (
    <Suggestions {...args} className="w-96">
      {prompts.map((p) => <Suggestion key={p} suggestion={p} />)}
    </Suggestions>
  ),
}

export const Scroll: Story = {
  args: { layout: 'scroll' },
  render: (args) => (
    <Suggestions {...args} className="w-96">
      {prompts.map((p) => <Suggestion key={p} suggestion={p} />)}
    </Suggestions>
  ),
}

export const Square: Story = {
  render: (args) => (
    <Suggestions {...args} className="w-96">
      {prompts.slice(0, 3).map((p) => <Suggestion key={p} suggestion={p} rounded={false} variant="secondary" />)}
    </Suggestions>
  ),
}
