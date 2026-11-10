import type { Meta, StoryObj } from '@storybook/react-vite'
import { Tool, ToolContent, ToolHeader, ToolInput, ToolOutput, type ToolState } from './Tool'

const input = { query: 'quarterly revenue', region: 'EMEA', limit: 5 }

function Example({ state, output, errorText }: { state: ToolState; output?: unknown; errorText?: string }) {
  return (
    <Tool className="w-96" defaultOpen>
      <ToolHeader name="search_reports" state={state} />
      <ToolContent>
        <ToolInput input={input} />
        <ToolOutput output={output} errorText={errorText} />
      </ToolContent>
    </Tool>
  )
}

const meta = {
  title: 'AI Elements/Tool',
  component: Example,
  tags: ['autodocs'],
} satisfies Meta<typeof Example>

export default meta
type Story = StoryObj<typeof meta>

export const Pending: Story = { args: { state: 'input-streaming' } }
export const Running: Story = { args: { state: 'input-available' } }
export const Completed: Story = { args: { state: 'output-available', output: { total: 3, top: 'Q3 EMEA revenue report' } } }
export const Error: Story = { args: { state: 'output-error', errorText: 'Request timed out after 30s' } }
