import type { Meta, StoryObj } from '@storybook/angular'
import { applicationConfig, moduleMetadata } from '@storybook/angular'
import { ZardChartImports } from '@/shared/components/chart/chart.imports'
import { provideZardCharts } from '@/shared/components/chart/chart-echarts.provider'
import { ChartSparklineComponent } from '@/shared/extended/chart-sparkline.component'
import { ChartScatterComponent } from '@/shared/extended/chart-scatter.component'
import { ChartFunnelComponent } from '@/shared/extended/chart-funnel.component'
import { ChartHeatmapComponent } from '@/shared/extended/chart-heatmap.component'
import { ChartTreemapComponent } from '@/shared/extended/chart-treemap.component'
import { ChartSankeyComponent } from '@/shared/extended/chart-sankey.component'

// Storybook allows one default export per file, so all charts share "Charts/Advanced".
const meta: Meta = {
  title: 'Charts/Advanced',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Advanced charts. Radar, Radial, Combo and Gauge use the ZardUI chart (`z-chart`, ECharts). Scatter, Sparkline, Funnel, Heatmap, Treemap and Sankey are hand-built standalone components with inline SVG (`src/app/shared/extended/chart-*.component.ts`). Same data as the React charts.',
      },
    },
  },
  decorators: [
    applicationConfig({ providers: [provideZardCharts()] }),
    moduleMetadata({
      imports: [
        ...ZardChartImports,
        ChartSparklineComponent,
        ChartScatterComponent,
        ChartFunnelComponent,
        ChartHeatmapComponent,
        ChartTreemapComponent,
        ChartSankeyComponent,
      ],
    }),
  ],
}
export default meta
type Story = StoryObj

/** A card shell matching the React stories. */
const card = (title: string, description: string, body: string) => `
  <div class="relative flex w-96 flex-col gap-4 overflow-hidden rounded-xl bg-card py-4 text-sm text-card-foreground ring-1 ring-border">
    <div class="px-4"><div class="font-medium">${title}</div><div class="text-muted-foreground">${description}</div></div>
    <div class="px-4">${body}</div>
  </div>`

export const Radar: Story = {
  render: () => ({
    props: {
      config: { desktop: { label: 'desktop', color: 'var(--chart-1)' }, mobile: { label: 'mobile', color: 'var(--chart-2)' } },
      data: [
        { axis: 'Speed', desktop: 86, mobile: 62 }, { axis: 'Reliability', desktop: 72, mobile: 80 },
        { axis: 'Comfort', desktop: 65, mobile: 90 }, { axis: 'Safety', desktop: 90, mobile: 70 },
        { axis: 'Efficiency', desktop: 78, mobile: 55 }, { axis: 'Design', desktop: 60, mobile: 84 },
      ],
    },
    template: card('Radar chart', 'Compare several series across shared axes.',
      `<z-chart class="h-64 !aspect-auto" zType="radar" [zConfig]="config" [zData]="data" zXAxisKey="axis" [zSeries]="['desktop', 'mobile']"><z-chart-legend /></z-chart>`),
  }),
}

export const Radial: Story = {
  render: () => ({
    props: {
      config: {
        Chrome: { label: 'Chrome', color: 'var(--chart-1)' }, Safari: { label: 'Safari', color: 'var(--chart-2)' },
        Firefox: { label: 'Firefox', color: 'var(--chart-3)' }, Edge: { label: 'Edge', color: 'var(--chart-4)' },
        Other: { label: 'Other', color: 'var(--chart-5)' },
      },
      data: [
        { name: 'Chrome', value: 275 }, { name: 'Safari', value: 200 }, { name: 'Firefox', value: 187 },
        { name: 'Edge', value: 173 }, { name: 'Other', value: 90 },
      ],
    },
    template: card('Radial chart', 'Radial bars, one ring per category.',
      `<z-chart class="h-64 !aspect-auto" zType="radial" [zConfig]="config" [zData]="data" zNameKey="name" [zSeries]="['value']"><z-chart-legend /></z-chart>`),
  }),
}

export const Combo: Story = {
  render: () => ({
    props: {
      config: { bar: { label: 'Revenue', color: 'var(--chart-1)' }, line: { label: 'Growth', color: 'var(--chart-2)' } },
      series: [{ dataKey: 'bar', type: 'bar', radius: 4 }, { dataKey: 'line', type: 'line', smooth: true }],
      data: [
        { label: 'Jan', bar: 186, line: 80 }, { label: 'Feb', bar: 305, line: 200 }, { label: 'Mar', bar: 237, line: 120 },
        { label: 'Apr', bar: 273, line: 190 }, { label: 'May', bar: 209, line: 130 }, { label: 'Jun', bar: 314, line: 240 },
      ],
    },
    template: card('Combo chart (bar + line)', 'Bars for volume with a line for a rate.',
      `<z-chart class="h-64 !aspect-auto" zType="bar" [zConfig]="config" [zData]="data" zXAxisKey="label" [zSeries]="series"><z-chart-legend /></z-chart>`),
  }),
}

export const Scatter: Story = {
  render: () => ({ template: card('Scatter chart', 'Two numeric axes, point size encodes a third value.', `<ui-chart-scatter />`) }),
}

export const Sparkline: Story = {
  render: () => ({ template: card('Sparkline', 'A tiny trend line with no axes, for stat cards.', `<ui-chart-sparkline />`) }),
}

export const Gauge: Story = {
  render: () => ({
    props: { config: { value: { label: 'Score', color: 'var(--chart-1)' } }, data: [{ name: 'value', value: 72 }] },
    template: card('Gauge', 'One value in a range (ZardUI radial gauge).',
      `<z-chart class="h-64 !aspect-auto" zType="radial" zRadialVariant="gauge" [zConfig]="config" [zData]="data" zNameKey="name" [zSeries]="['value']" zStartAngle="180" zEndAngle="0" zCenterValue="72" zCenterLabel="Score" />`),
  }),
}

export const Funnel: Story = {
  render: () => ({ template: card('Funnel chart', 'Conversion stages from first to last.', `<ui-chart-funnel />`) }),
}

export const Heatmap: Story = {
  render: () => ({ template: card('Heatmap', 'Grid, cell color encodes intensity.', `<ui-chart-heatmap />`) }),
}

export const Treemap: Story = {
  render: () => ({ template: card('Treemap', 'Nested rectangles sized by value.', `<ui-chart-treemap />`) }),
}

export const Sankey: Story = {
  render: () => ({ template: card('Sankey diagram', 'Flow between nodes, link width encodes value.', `<ui-chart-sankey />`) }),
}
