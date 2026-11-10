import type { Meta, StoryObj } from '@storybook/angular'
import { applicationConfig, moduleMetadata } from '@storybook/angular'
import { ZardCardImports } from '@/shared/components/card/card.imports'
import { ZardChartImports } from '@/shared/components/chart/chart.imports'
import { ZardChartComponent } from '@/shared/components/chart/chart.component'
import { provideZardCharts } from '@/shared/components/chart/chart-echarts.provider'
import type { ZardChartConfig } from '@/shared/components/chart/chart.types'

const monthly = [
  { month: 'January', desktop: 186, mobile: 80 },
  { month: 'February', desktop: 305, mobile: 200 },
  { month: 'March', desktop: 237, mobile: 120 },
  { month: 'April', desktop: 73, mobile: 190 },
  { month: 'May', desktop: 209, mobile: 130 },
  { month: 'June', desktop: 214, mobile: 140 },
]
const config: ZardChartConfig = {
  desktop: { label: 'Desktop', color: 'var(--chart-1)' },
  mobile: { label: 'Mobile', color: 'var(--chart-2)' },
}
const browsers = [
  { browser: 'chrome', visitors: 275 },
  { browser: 'safari', visitors: 200 },
  { browser: 'firefox', visitors: 187 },
  { browser: 'edge', visitors: 173 },
  { browser: 'other', visitors: 90 },
]
const pieConfig: ZardChartConfig = {
  chrome: { label: 'Chrome', color: 'var(--chart-1)' },
  safari: { label: 'Safari', color: 'var(--chart-2)' },
  firefox: { label: 'Firefox', color: 'var(--chart-3)' },
  edge: { label: 'Edge', color: 'var(--chart-4)' },
  other: { label: 'Other', color: 'var(--chart-5)' },
}

/** Wraps a chart in a card with title and description, like the React stories. */
const card = (title: string, description: string, chart: string) => `
  <z-card class="w-[28rem]">
    <z-card-header>
      <z-card-title>${title}</z-card-title>
      <z-card-description>${description}</z-card-description>
    </z-card-header>
    <z-card-content>${chart}</z-card-content>
  </z-card>`

const cartesian = (extra: string, legend = false) =>
  `<z-chart class="aspect-video w-full" [zData]="data" [zConfig]="config" ${extra}>
      <z-chart-tooltip />
      ${legend ? '<z-chart-legend />' : ''}
    </z-chart>`

const pie = (extra: string) =>
  `<z-chart class="mx-auto aspect-square max-h-64" [zData]="data" [zConfig]="config" zType="pie" zNameKey="browser" [zSeries]="['visitors']" ${extra}>
      <z-chart-tooltip zTrigger="item" zHideLabel />
    </z-chart>`

const meta: Meta<ZardChartComponent> = {
  title: 'Charts/Basic',
  component: ZardChartComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Basic charts (ZardUI `z-chart`, ECharts based): bar, stacked bar, horizontal bar, line, area, stacked area, pie, donut, donut with text. Same data and colors (`--chart-1..5`) as the React charts.',
      },
    },
  },
  decorators: [
    applicationConfig({ providers: [provideZardCharts()] }),
    moduleMetadata({ imports: [...ZardChartImports, ...ZardCardImports] }),
  ],
}
export default meta
type Story = StoryObj<ZardChartComponent>

const monthlyProps = { data: monthly, config }
const singleProps = { data: monthly.map(({ month, desktop }) => ({ month, desktop })), config: { desktop: config['desktop'] } }
const pieProps = { data: browsers, config: pieConfig }

export const BarChart: Story = {
  name: 'Bar Chart',
  render: () => ({
    props: singleProps,
    template: card('Bar Chart', 'January - June 2025', cartesian('zType="bar" zXAxisKey="month" [zSeries]="[\'desktop\']"')),
  }),
}
export const BarChartStacked: Story = {
  name: 'Bar Chart - Stacked',
  render: () => ({
    props: monthlyProps,
    template: card('Bar Chart - Stacked', 'January - June 2025', cartesian('zType="bar" zStacked zXAxisKey="month" [zSeries]="[\'desktop\', \'mobile\']"', true)),
  }),
}
export const BarChartHorizontal: Story = {
  name: 'Bar Chart - Horizontal',
  render: () => ({
    props: singleProps,
    template: card('Bar Chart - Horizontal', 'January - June 2025', cartesian('zType="bar" zHorizontal zGrid="vertical" zXAxisKey="month" [zSeries]="[\'desktop\']"')),
  }),
}
export const LineChart: Story = {
  name: 'Line Chart',
  render: () => ({
    props: singleProps,
    template: card('Line Chart', 'January - June 2025', cartesian('zType="line" zXAxisKey="month" [zSeries]="[\'desktop\']"')),
  }),
}
export const AreaChart: Story = {
  name: 'Area Chart',
  render: () => ({
    props: singleProps,
    template: card('Area Chart', 'Showing total visitors for the last 6 months', cartesian('zType="area" zXAxisKey="month" [zSeries]="[\'desktop\']"')),
  }),
}
export const AreaChartStacked: Story = {
  name: 'Area Chart - Stacked',
  render: () => ({
    props: monthlyProps,
    template: card('Area Chart - Stacked', 'Showing total visitors for the last 6 months', cartesian('zType="area" zStacked zXAxisKey="month" [zSeries]="[\'desktop\', \'mobile\']"', true)),
  }),
}
export const PieChart: Story = {
  name: 'Pie Chart',
  render: () => ({ props: pieProps, template: card('Pie Chart', 'January - June 2025', pie('')) }),
}
export const PieChartDonut: Story = {
  name: 'Pie Chart - Donut',
  render: () => ({ props: pieProps, template: card('Pie Chart - Donut', 'January - June 2025', pie('zInnerRadius="60%" zOuterRadius="80%"')) }),
}
export const PieChartDonutWithText: Story = {
  name: 'Pie Chart - Donut with text',
  render: () => ({
    props: pieProps,
    template: card('Pie Chart - Donut with text', 'January - June 2025', pie('zInnerRadius="60%" zOuterRadius="80%" zCenterValue="925" zCenterLabel="Visitors"')),
  }),
}
