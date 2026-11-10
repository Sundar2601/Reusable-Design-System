import type { Meta, StoryObj } from '@storybook/react-vite'
import { CodeBlock } from './CodeBlock'

const meta = {
  title: 'Components/Code Block',
  component: CodeBlock,
  tags: ['autodocs'],
  args: {
    language: 'tsx',
    code: `import { Button } from '@bounteous/ui'

export function Example() {
  return <Button variant="outline">Click me</Button>
}`,
  },
} satisfies Meta<typeof CodeBlock>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const NoHeader: Story = { args: { language: undefined, copyable: false, code: 'npm install @bounteous/ui' } }

export const LongLines: Story = {
  args: {
    language: 'bash',
    className: 'max-w-md',
    code: 'npx shadcn@latest add button card input checkbox radio avatar table calendar carousel resizable scroll-area --overwrite',
  },
}
