import type { Meta, StoryObj } from '@storybook/react-vite'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './Card'
import {
  ChartArea,
  ChartAreaStacked,
  ChartBar,
  ChartBarHorizontal,
  ChartBarStacked,
  ChartDonut,
  ChartDonutText,
  ChartLine,
  ChartPie,
  type ChartConfig,
} from './ChartsBasic'

const monthly = [
  { month: 'January', desktop: 186, mobile: 80 },
  { month: 'February', desktop: 305, mobile: 200 },
  { month: 'March', desktop: 237, mobile: 120 },
  { month: 'April', desktop: 73, mobile: 190 },
  { month: 'May', desktop: 209, mobile: 130 },
  { month: 'June', desktop: 214, mobile: 140 },
]
const monthlySingle = monthly.map(({ month, desktop }) => ({ month, desktop }))
const config: ChartConfig = {
  desktop: { label: 'Desktop', color: 'var(--chart-1)' },
  mobile: { label: 'Mobile', color: 'var(--chart-2)' },
}
const singleConfig: ChartConfig = { desktop: config.desktop }

const browsers = [
  { browser: 'chrome', visitors: 275 },
  { browser: 'safari', visitors: 200 },
  { browser: 'firefox', visitors: 187 },
  { browser: 'edge', visitors: 173 },
  { browser: 'other', visitors: 90 },
]
const pieConfig: ChartConfig = {
  chrome: { label: 'Chrome', color: 'var(--chart-1)' },
  safari: { label: 'Safari', color: 'var(--chart-2)' },
  firefox: { label: 'Firefox', color: 'var(--chart-3)' },
  edge: { label: 'Edge', color: 'var(--chart-4)' },
  other: { label: 'Other', color: 'var(--chart-5)' },
}

const meta = {
  title: 'Components/Charts/Basic',
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

function Wrap({ title, description, children }: { title: string; description: string; children: React.ReactNode }) {
  return (
    <Card className="w-[28rem]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  )
}

export const BarChart: Story = {
  name: 'Bar Chart',
  render: () => (
    <Wrap title="Bar Chart" description="January - June 2025">
      <ChartBar data={monthlySingle} config={singleConfig} />
    </Wrap>
  ),
}
export const BarChartStacked: Story = {
  name: 'Bar Chart - Stacked',
  render: () => (
    <Wrap title="Bar Chart - Stacked" description="January - June 2025">
      <ChartBarStacked data={monthly} config={config} />
    </Wrap>
  ),
}
export const BarChartHorizontal: Story = {
  name: 'Bar Chart - Horizontal',
  render: () => (
    <Wrap title="Bar Chart - Horizontal" description="January - June 2025">
      <ChartBarHorizontal data={monthlySingle} config={singleConfig} />
    </Wrap>
  ),
}
export const LineChart: Story = {
  name: 'Line Chart',
  render: () => (
    <Wrap title="Line Chart" description="January - June 2025">
      <ChartLine data={monthlySingle} config={singleConfig} />
    </Wrap>
  ),
}
export const AreaChart: Story = {
  name: 'Area Chart',
  render: () => (
    <Wrap title="Area Chart" description="Showing total visitors for the last 6 months">
      <ChartArea data={monthlySingle} config={singleConfig} />
    </Wrap>
  ),
}
export const AreaChartStacked: Story = {
  name: 'Area Chart - Stacked',
  render: () => (
    <Wrap title="Area Chart - Stacked" description="Showing total visitors for the last 6 months">
      <ChartAreaStacked data={monthly} config={config} />
    </Wrap>
  ),
}
export const PieChart: Story = {
  name: 'Pie Chart',
  render: () => (
    <Wrap title="Pie Chart" description="January - June 2025">
      <ChartPie data={browsers} config={pieConfig} />
    </Wrap>
  ),
}
export const PieChartDonut: Story = {
  name: 'Pie Chart - Donut',
  render: () => (
    <Wrap title="Pie Chart - Donut" description="January - June 2025">
      <ChartDonut data={browsers} config={pieConfig} />
    </Wrap>
  ),
}
export const PieChartDonutWithText: Story = {
  name: 'Pie Chart - Donut with text',
  render: () => (
    <Wrap title="Pie Chart - Donut with text" description="January - June 2025">
      <ChartDonutText data={browsers} config={pieConfig} label="Visitors" />
    </Wrap>
  ),
}
