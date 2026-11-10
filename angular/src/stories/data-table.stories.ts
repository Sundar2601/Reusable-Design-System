import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { AppDataTableComponent, SAMPLE_PAYMENTS } from '@/shared/extended/data-table.component'

const meta: Meta<AppDataTableComponent> = {
  title: 'Data Table',
  component: AppDataTableComponent,
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Data Table. ZardUI has no data table, so this is a small hand-built component (src/app/shared/extended/data-table.component.ts) using the ZardUI table with signals for sorting and row selection. The React version uses TanStack Table.' } } },
  decorators: [moduleMetadata({ imports: [AppDataTableComponent] })],
}
export default meta
type Story = StoryObj<AppDataTableComponent>

export const Default: Story = { args: { data: SAMPLE_PAYMENTS } }
export const FewRows: Story = { args: { data: SAMPLE_PAYMENTS.slice(0, 2) } }
