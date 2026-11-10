import type { Meta, StoryObj } from '@storybook/react-vite'
import { DataTable, samplePayments } from './DataTable'

const meta = {
  title: 'Components/Data Table',
  component: DataTable,
  tags: ['autodocs'],
  parameters: {
    docs: { description: { component: 'Table primitives driven by @tanstack/react-table: sortable headers and row selection.' } },
  },
} satisfies Meta<typeof DataTable>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const FewRows: Story = { args: { data: samplePayments.slice(0, 2) } }
