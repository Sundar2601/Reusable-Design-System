import type { Meta, StoryObj } from '@storybook/react-vite'
import { TestResults } from './TestResults'

const meta = {
  title: 'AI Elements/Test Results',
  component: TestResults,
  tags: ['autodocs'],
  args: {
    suites: [
      {
        name: 'Button.test.tsx',
        tests: [
          { name: 'renders label', status: 'passed', duration: 12 },
          { name: 'fires onClick', status: 'passed', duration: 8 },
          { name: 'is disabled when loading', status: 'skipped' },
        ],
      },
      {
        name: 'Input.test.tsx',
        tests: [
          { name: 'accepts typed text', status: 'passed', duration: 21 },
          { name: 'shows error state', status: 'failed', duration: 15, error: 'Expected aria-invalid to be "true" but received "false"' },
        ],
      },
    ],
  },
  decorators: [(Story) => <div className="w-[520px]"><Story /></div>],
} satisfies Meta<typeof TestResults>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const AllPassing: Story = {
  args: { suites: [{ name: 'utils.test.ts', tests: [{ name: 'cn merges classes', status: 'passed', duration: 3 }, { name: 'cn drops falsy', status: 'passed', duration: 2 }] }] },
}
