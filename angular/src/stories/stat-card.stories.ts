import type { Meta, StoryObj } from '@storybook/angular'
import { StatCardComponent } from '@/shared/extended/stat-card.component'

const meta: Meta<StatCardComponent> = {
  title: 'Stat Card',
  component: StatCardComponent,
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Stat Card (extended, hand-built). Same API as the React StatCard: `label`, `value`, `delta`, `trend` up / down / neutral, `description`, and an `icon` slot.' } } },
  argTypes: { trend: { control: 'inline-radio', options: ['up', 'down', 'neutral'] } },
  args: { label: 'Total revenue', value: '$45,231', delta: '+20.1%', trend: 'up', description: 'from last month' },
  render: (args) => ({
    props: args,
    template: `<ui-stat-card [label]="label" [value]="value" [delta]="delta" [trend]="trend" [description]="description" />`,
  }),
}
export default meta
type Story = StoryObj<StatCardComponent>

export const Up: Story = {}
export const Down: Story = { args: { label: 'Churn', value: '2.4%', delta: '-0.8%', trend: 'down' } }
export const Neutral: Story = { args: { label: 'Active users', value: '1,204', delta: '0%', trend: 'neutral' } }
export const Minimal: Story = { args: { delta: '', description: '' } }
