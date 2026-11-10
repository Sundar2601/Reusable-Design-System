import type { Meta, StoryObj } from '@storybook/react-vite'
import { Subagent } from './Subagent'

const steps = [
  { label: 'Read project files', status: 'completed' as const },
  { label: 'Search for usages', status: 'running' as const },
  { label: 'Write summary', status: 'pending' as const },
]

const meta = {
  title: 'AI Elements/Subagent',
  component: Subagent,
  tags: ['autodocs'],
  args: { name: 'Explorer', task: 'Find every usage of the legacy Button API across the repo.', status: 'running', steps },
} satisfies Meta<typeof Subagent>

export default meta
type Story = StoryObj<typeof meta>

export const Running: Story = {}
export const Completed: Story = { args: { status: 'completed', steps: steps.map((s) => ({ ...s, status: 'completed' as const })) } }
export const Failed: Story = { args: { status: 'failed', steps: [steps[0], { label: 'Search for usages', status: 'failed' }, steps[2]] } }
export const Pending: Story = { args: { status: 'pending', steps: steps.map((s) => ({ ...s, status: 'pending' as const })) } }
