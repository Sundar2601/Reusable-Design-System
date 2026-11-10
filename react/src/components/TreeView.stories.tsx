import type { Meta, StoryObj } from '@storybook/react-vite'
import { TreeView } from './TreeView'

const nodes = [
  {
    id: 'src',
    label: 'src',
    children: [
      { id: 'components', label: 'components', children: [{ id: 'button', label: 'Button.tsx' }, { id: 'input', label: 'Input.tsx' }] },
      { id: 'lib', label: 'lib', children: [{ id: 'utils', label: 'utils.ts' }] },
      { id: 'main', label: 'main.tsx' },
    ],
  },
  { id: 'public', label: 'public', children: [{ id: 'favicon', label: 'favicon.svg' }] },
  { id: 'pkg', label: 'package.json' },
]

const meta = {
  title: 'Components/Tree View',
  component: TreeView,
  tags: ['autodocs'],
  args: { nodes },
} satisfies Meta<typeof TreeView>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Expanded: Story = { args: { defaultExpanded: ['src', 'components'] } }
export const WithSelection: Story = { args: { defaultExpanded: ['src', 'components'], selected: 'button' } }
