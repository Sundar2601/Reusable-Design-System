import type { Meta, StoryObj } from '@storybook/react-vite'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './Card'
import {
  ChartCombo,
  ChartFunnel,
  ChartGauge,
  ChartHeatmap,
  ChartRadar,
  ChartRadial,
  ChartSankey,
  ChartScatter,
  ChartSparkline,
  ChartTreemap,
} from './ChartsAdvanced'

// One story per chart. Storybook allows one default export per file, so the charts
// share the "Components/Charts/Advanced" group instead of one title each.
const meta = {
  title: 'Components/Charts/Advanced',
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

function Demo({ title, description, children }: { title: string; description: string; children: React.ReactNode }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  )
}

export const Radar: Story = {
  render: () => (
    <Demo title="Radar chart" description="Compare several series across shared axes.">
      <ChartRadar />
    </Demo>
  ),
}

export const Radial: Story = {
  render: () => (
    <Demo title="Radial chart" description="Radial bars, one ring per category.">
      <ChartRadial />
    </Demo>
  ),
}

export const Combo: Story = {
  render: () => (
    <Demo title="Combo chart (bar + line)" description="Bars for volume with a line for a rate.">
      <ChartCombo />
    </Demo>
  ),
}

export const Scatter: Story = {
  render: () => (
    <Demo title="Scatter chart" description="Two numeric axes, point size encodes a third value.">
      <ChartScatter />
    </Demo>
  ),
}

export const Sparkline: Story = {
  render: () => (
    <Demo title="Sparkline" description="A tiny trend line with no axes, for stat cards.">
      <ChartSparkline />
    </Demo>
  ),
}

export const Gauge: Story = {
  render: () => (
    <Demo title="Gauge" description="Hand-built SVG semicircle showing one value in a range.">
      <ChartGauge />
    </Demo>
  ),
}

export const Funnel: Story = {
  render: () => (
    <Demo title="Funnel chart" description="Conversion stages from first to last.">
      <ChartFunnel />
    </Demo>
  ),
}

export const Heatmap: Story = {
  render: () => (
    <Demo title="Heatmap" description="Hand-built grid, cell color encodes intensity.">
      <ChartHeatmap />
    </Demo>
  ),
}

export const Treemap: Story = {
  render: () => (
    <Demo title="Treemap" description="Nested rectangles sized by value.">
      <ChartTreemap />
    </Demo>
  ),
}

export const Sankey: Story = {
  render: () => (
    <Demo title="Sankey diagram" description="Flow between nodes, link width encodes value.">
      <ChartSankey />
    </Demo>
  ),
}
