import type { Meta, StoryObj } from '@storybook/react-vite'
import { StackTrace } from './StackTrace'

const meta = {
  title: 'AI Elements/Stack Trace',
  component: StackTrace,
  tags: ['autodocs'],
  args: {
    name: 'TypeError',
    message: "Cannot read properties of undefined (reading 'map')",
    frames: [
      { fn: 'renderList', file: 'src/components/List.tsx', line: 24, column: 18 },
      { fn: 'App', file: 'src/App.tsx', line: 12, column: 5 },
      { fn: 'renderWithHooks', file: 'node_modules/react-dom/index.js', line: 1530, column: 22, internal: true },
    ],
  },
  decorators: [(Story) => <div className="w-[560px]"><Story /></div>],
} satisfies Meta<typeof StackTrace>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Collapsed: Story = { args: { defaultOpen: false } }
