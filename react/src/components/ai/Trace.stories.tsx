import type { Meta, StoryObj } from '@storybook/react-vite'
import { Trace, TraceStep } from './Trace'

const meta = {
  title: 'AI Elements/Trace',
  component: Trace,
  tags: ['autodocs'],
  args: { title: 'Thought for 4 seconds', defaultOpen: true },
  decorators: [(Story) => <div className="w-96"><Story /></div>],
} satisfies Meta<typeof Trace>

export default meta
type Story = StoryObj<typeof meta>

export const Done: Story = {
  render: (args) => (
    <Trace {...args}>
      <TraceStep title="Understood the question" />
      <TraceStep title="Searched the web" description="3 results from docs.example.com" />
      <TraceStep title="Wrote the answer" />
    </Trace>
  ),
}

export const Running: Story = {
  args: { title: 'Working...' },
  render: (args) => (
    <Trace {...args}>
      <TraceStep title="Searched the web" description="3 results" />
      <TraceStep status="running" title="Reading page" />
      <TraceStep status="pending" title="Writing the answer" />
    </Trace>
  ),
}

export const WithError: Story = {
  render: (args) => (
    <Trace {...args} title="Tool failed">
      <TraceStep title="Called get_weather" />
      <TraceStep status="error" title="Called book_flight" description="Request timed out" />
    </Trace>
  ),
}

export const Collapsed: Story = {
  args: { defaultOpen: false },
  render: Done.render,
}
