import type { Meta, StoryObj } from '@storybook/angular'
import { TreeViewComponent } from '@/shared/extended/tree-view.component'

const nodes = [
  {
    id: 'src',
    label: 'src',
    children: [
      { id: 'components', label: 'components', children: [{ id: 'button', label: 'button.component.ts' }, { id: 'input', label: 'input.component.ts' }] },
      { id: 'lib', label: 'lib', children: [{ id: 'utils', label: 'utils.ts' }] },
      { id: 'main', label: 'main.ts' },
    ],
  },
  { id: 'public', label: 'public', children: [{ id: 'favicon', label: 'favicon.svg' }] },
  { id: 'pkg', label: 'package.json' },
]

const meta: Meta<TreeViewComponent> = {
  title: 'Tree View',
  component: TreeViewComponent,
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Tree View (extended, hand-built). Same API as the React TreeView: `nodes`, `defaultExpanded` ids, two-way `selected` id.' } } },
  args: { nodes },
  render: (args) => ({
    props: args,
    template: `<ui-tree-view [nodes]="nodes" [defaultExpanded]="defaultExpanded ?? []" [(selected)]="selected" />`,
  }),
}
export default meta
type Story = StoryObj<TreeViewComponent>

export const Default: Story = {}
export const Expanded: Story = { args: { defaultExpanded: ['src', 'components'] } }
export const WithSelection: Story = { args: { defaultExpanded: ['src', 'components'], selected: 'button' } }
