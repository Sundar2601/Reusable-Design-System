import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { Terminal } from './Terminal'

const output = `$ npm run build
> app@1.0.0 build
> vite build

vite v6.0.0 building for production...
✓ 42 modules transformed.
dist/index.html          0.45 kB
dist/assets/index.js   143.20 kB
✓ built in 1.24s`

const meta = {
  title: 'AI Elements/Terminal',
  component: Terminal,
  tags: ['autodocs'],
  args: { output, onClear: fn() },
  decorators: [(Story) => <div className="w-[560px]"><Story /></div>],
} satisfies Meta<typeof Terminal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Streaming: Story = { args: { streaming: true, output: '$ npm test\n> running...' } }
export const Empty: Story = { args: { output: '' } }
