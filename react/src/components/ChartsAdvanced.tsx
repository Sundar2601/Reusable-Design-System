import * as React from 'react'
import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Funnel,
  FunnelChart,
  LabelList,
  Legend,
  Line,
  LineChart,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
  Sankey,
  Scatter,
  ScatterChart,
  Tooltip,
  Treemap,
  XAxis,
  YAxis,
  ZAxis,
} from 'recharts'
import { cn } from '@/lib/utils'

/**
 * Advanced charts. Figma components "Chart / Radar", "Chart / Radial", "Chart / Combo",
 * "Chart / Scatter", "Chart / Sparkline", "Chart / Gauge", "Chart / Funnel",
 * "Chart / Heatmap", "Chart / Treemap" and "Chart / Sankey".
 * All colors come from the theme tokens var(--chart-1) .. var(--chart-5).
 * Gauge and Heatmap are hand-built (SVG / divs), the rest use recharts.
 */
const CHART_COLORS = [1, 2, 3, 4, 5].map((i) => `var(--chart-${i})`)
const color = (i: number) => CHART_COLORS[i % CHART_COLORS.length]

const AXIS_TICK = { fill: 'var(--muted-foreground)', fontSize: 12 }
const TOOLTIP_STYLE: React.CSSProperties = {
  background: 'var(--card)',
  border: '1px solid var(--border)',
  borderRadius: 8,
  color: 'var(--card-foreground)',
  fontSize: 12,
}

type FrameProps = React.ComponentProps<'div'> & { height?: number }

function Frame({ className, height = 256, style, children, ...props }: FrameProps) {
  return (
    <div
      data-slot="chart"
      className={cn('w-full text-xs text-muted-foreground', className)}
      style={{ height, ...style }}
      {...props}
    >
      {children}
    </div>
  )
}

type ChartProps<T> = Omit<React.ComponentProps<'div'>, 'children'> & { data?: T; height?: number }

/* ------------------------------------------------------------------ Radar */

export type RadarDatum = { axis: string; [series: string]: string | number }

const radarDefault: RadarDatum[] = [
  { axis: 'Speed', desktop: 86, mobile: 62 },
  { axis: 'Reliability', desktop: 72, mobile: 80 },
  { axis: 'Comfort', desktop: 65, mobile: 90 },
  { axis: 'Safety', desktop: 90, mobile: 70 },
  { axis: 'Efficiency', desktop: 78, mobile: 55 },
  { axis: 'Design', desktop: 60, mobile: 84 },
]

function ChartRadar({ data = radarDefault, height, ...props }: ChartProps<RadarDatum[]>) {
  const keys = Object.keys(data[0] ?? {}).filter((k) => k !== 'axis')
  return (
    <Frame height={height} {...props}>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={data} outerRadius="75%">
          <PolarGrid stroke="var(--border)" />
          <PolarAngleAxis dataKey="axis" tick={AXIS_TICK} />
          <PolarRadiusAxis tick={false} axisLine={false} />
          <Tooltip contentStyle={TOOLTIP_STYLE} />
          <Legend iconType="circle" />
          {keys.map((k, i) => (
            <Radar
              key={k}
              name={k}
              dataKey={k}
              stroke={color(i)}
              fill={color(i)}
              fillOpacity={0.25}
              strokeWidth={2}
            />
          ))}
        </RadarChart>
      </ResponsiveContainer>
    </Frame>
  )
}

/* ----------------------------------------------------------------- Radial */

export type RadialDatum = { name: string; value: number; fill?: string }

const radialDefault: RadialDatum[] = [
  { name: 'Chrome', value: 275 },
  { name: 'Safari', value: 200 },
  { name: 'Firefox', value: 187 },
  { name: 'Edge', value: 173 },
  { name: 'Other', value: 90 },
]

function ChartRadial({ data = radialDefault, height, ...props }: ChartProps<RadialDatum[]>) {
  const rows = data.map((d, i) => ({ ...d, fill: d.fill ?? color(i) }))
  return (
    <Frame height={height} {...props}>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart data={rows} innerRadius="25%" outerRadius="100%" startAngle={90} endAngle={-270}>
          <Tooltip contentStyle={TOOLTIP_STYLE} />
          <RadialBar dataKey="value" background={{ fill: 'var(--muted)' }} cornerRadius={6} />
          <Legend iconType="circle" />
        </RadialBarChart>
      </ResponsiveContainer>
    </Frame>
  )
}

/* ------------------------------------------------------------------ Combo */

export type ComboDatum = { label: string; bar: number; line: number }

const comboDefault: ComboDatum[] = [
  { label: 'Jan', bar: 186, line: 80 },
  { label: 'Feb', bar: 305, line: 200 },
  { label: 'Mar', bar: 237, line: 120 },
  { label: 'Apr', bar: 273, line: 190 },
  { label: 'May', bar: 209, line: 130 },
  { label: 'Jun', bar: 314, line: 240 },
]

function ChartCombo({ data = comboDefault, height, ...props }: ChartProps<ComboDatum[]>) {
  return (
    <Frame height={height} {...props}>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={data} margin={{ left: 0, right: 8, top: 8 }}>
          <CartesianGrid vertical={false} stroke="var(--border)" />
          <XAxis dataKey="label" tickLine={false} axisLine={false} tick={AXIS_TICK} />
          <YAxis tickLine={false} axisLine={false} tick={AXIS_TICK} width={32} />
          <Tooltip contentStyle={TOOLTIP_STYLE} cursor={{ fill: 'var(--muted)', opacity: 0.5 }} />
          <Legend iconType="circle" />
          <Bar dataKey="bar" name="Revenue" fill={color(0)} radius={[4, 4, 0, 0]} />
          <Line
            dataKey="line"
            name="Growth"
            type="monotone"
            stroke={color(1)}
            strokeWidth={2}
            dot={{ r: 3, fill: color(1) }}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </Frame>
  )
}

/* ---------------------------------------------------------------- Scatter */

export type ScatterDatum = { x: number; y: number; z?: number }

const scatterDefault: ScatterDatum[] = [
  { x: 100, y: 200, z: 200 },
  { x: 120, y: 100, z: 260 },
  { x: 170, y: 300, z: 400 },
  { x: 140, y: 250, z: 280 },
  { x: 150, y: 400, z: 500 },
  { x: 110, y: 280, z: 200 },
  { x: 190, y: 180, z: 350 },
  { x: 90, y: 320, z: 240 },
]

function ChartScatter({ data = scatterDefault, height, ...props }: ChartProps<ScatterDatum[]>) {
  return (
    <Frame height={height} {...props}>
      <ResponsiveContainer width="100%" height="100%">
        <ScatterChart margin={{ left: 0, right: 8, top: 8 }}>
          <CartesianGrid stroke="var(--border)" />
          <XAxis type="number" dataKey="x" name="Weight" tickLine={false} axisLine={false} tick={AXIS_TICK} />
          <YAxis type="number" dataKey="y" name="Height" tickLine={false} axisLine={false} tick={AXIS_TICK} width={32} />
          <ZAxis type="number" dataKey="z" range={[60, 400]} />
          <Tooltip contentStyle={TOOLTIP_STYLE} cursor={{ strokeDasharray: '3 3', stroke: 'var(--border)' }} />
          <Scatter data={data} fill={color(0)} fillOpacity={0.7} />
        </ScatterChart>
      </ResponsiveContainer>
    </Frame>
  )
}

/* -------------------------------------------------------------- Sparkline */

const sparklineDefault = [12, 18, 14, 22, 19, 28, 24, 32, 29, 38, 35, 44]

function ChartSparkline({ data = sparklineDefault, height = 48, ...props }: ChartProps<number[]>) {
  const rows = data.map((v, i) => ({ i, v }))
  return (
    <Frame height={height} {...props}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={rows} margin={{ top: 4, bottom: 4, left: 2, right: 2 }}>
          <Line dataKey="v" type="monotone" stroke={color(0)} strokeWidth={2} dot={false} isAnimationActive={false} />
        </LineChart>
      </ResponsiveContainer>
    </Frame>
  )
}

/* ------------------------------------------------------------------ Gauge */

export type GaugeData = { value: number; min?: number; max?: number; label?: string }

/** Hand-built semicircle gauge (SVG). */
function ChartGauge({
  data = { value: 72, min: 0, max: 100, label: 'Score' },
  className,
  ...props
}: Omit<React.ComponentProps<'div'>, 'children'> & { data?: GaugeData }) {
  const { value, min = 0, max = 100, label } = data
  const pct = Math.min(1, Math.max(0, (value - min) / (max - min || 1)))
  const r = 80
  const cx = 100
  const cy = 100
  const arc = Math.PI * r
  const d = `M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`
  return (
    <div data-slot="chart-gauge" className={cn('relative mx-auto w-full max-w-64', className)} {...props}>
      <svg viewBox="0 0 200 110" role="img" aria-label={`${label ?? 'Value'} ${value} of ${max}`} className="w-full">
        <path d={d} fill="none" stroke="var(--muted)" strokeWidth={16} strokeLinecap="round" />
        <path
          d={d}
          fill="none"
          stroke={color(0)}
          strokeWidth={16}
          strokeLinecap="round"
          strokeDasharray={`${arc * pct} ${arc}`}
        />
      </svg>
      <div className="absolute inset-x-0 bottom-0 flex flex-col items-center leading-tight">
        <span className="text-2xl font-semibold text-foreground">{value}</span>
        {label && <span className="text-xs text-muted-foreground">{label}</span>}
      </div>
    </div>
  )
}

/* ----------------------------------------------------------------- Funnel */

export type FunnelDatum = { name: string; value: number; fill?: string }

const funnelDefault: FunnelDatum[] = [
  { name: 'Visitors', value: 5000 },
  { name: 'Sign ups', value: 3200 },
  { name: 'Trials', value: 1800 },
  { name: 'Paid', value: 900 },
  { name: 'Retained', value: 450 },
]

function ChartFunnel({ data = funnelDefault, height, ...props }: ChartProps<FunnelDatum[]>) {
  const rows = data.map((d, i) => ({ ...d, fill: d.fill ?? color(i) }))
  return (
    <Frame height={height} {...props}>
      <ResponsiveContainer width="100%" height="100%">
        <FunnelChart>
          <Tooltip contentStyle={TOOLTIP_STYLE} />
          <Funnel dataKey="value" nameKey="name" data={rows} isAnimationActive={false}>
            <LabelList position="right" dataKey="name" fill="var(--foreground)" stroke="none" fontSize={12} />
          </Funnel>
        </FunnelChart>
      </ResponsiveContainer>
    </Frame>
  )
}

/* ---------------------------------------------------------------- Heatmap */

export type HeatmapData = { rows: string[]; cols: string[]; values: number[][] }

const heatmapDefault: HeatmapData = {
  rows: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  cols: ['9a', '11a', '1p', '3p', '5p', '7p'],
  values: [
    [2, 5, 8, 6, 3, 1],
    [3, 7, 9, 8, 4, 2],
    [1, 6, 10, 9, 5, 2],
    [4, 8, 7, 6, 6, 3],
    [2, 4, 5, 3, 2, 1],
  ],
}

/** Hand-built heatmap (CSS grid). Cell intensity maps to --chart-1 opacity. */
function ChartHeatmap({
  data = heatmapDefault,
  className,
  ...props
}: Omit<React.ComponentProps<'div'>, 'children'> & { data?: HeatmapData }) {
  const all = data.values.flat()
  const min = Math.min(...all)
  const max = Math.max(...all)
  return (
    <div
      data-slot="chart-heatmap"
      role="img"
      aria-label="Heatmap"
      className={cn('grid w-full gap-1 text-xs text-muted-foreground', className)}
      style={{ gridTemplateColumns: `auto repeat(${data.cols.length}, minmax(0, 1fr))` }}
      {...props}
    >
      <div />
      {data.cols.map((c) => (
        <div key={c} className="text-center">
          {c}
        </div>
      ))}
      {data.rows.map((r, ri) => (
        <React.Fragment key={r}>
          <div className="flex items-center pr-2">{r}</div>
          {data.cols.map((c, ci) => {
            const v = data.values[ri]?.[ci] ?? 0
            const t = max === min ? 1 : (v - min) / (max - min)
            return (
              <div
                key={c}
                title={`${r} ${c}: ${v}`}
                className="flex aspect-[4/3] items-center justify-center rounded-sm text-[10px] text-foreground"
                style={{ background: `color-mix(in oklab, var(--chart-1) ${Math.round(12 + t * 88)}%, transparent)` }}
              >
                {v}
              </div>
            )
          })}
        </React.Fragment>
      ))}
    </div>
  )
}

/* ---------------------------------------------------------------- Treemap */

export type TreemapNode = { name: string; size?: number; children?: TreemapNode[] }

const treemapDefault: TreemapNode[] = [
  { name: 'Frontend', children: [{ name: 'React', size: 420 }, { name: 'Angular', size: 260 }, { name: 'Vue', size: 140 }] },
  { name: 'Backend', children: [{ name: 'Node', size: 340 }, { name: 'Go', size: 180 }, { name: 'Java', size: 220 }] },
  { name: 'Data', children: [{ name: 'SQL', size: 300 }, { name: 'Python', size: 200 }] },
]

type TreemapCellProps = {
  x?: number
  y?: number
  width?: number
  height?: number
  depth?: number
  index?: number
  name?: string
  root?: { children?: unknown[] }
}

function ChartTreemap({ data = treemapDefault, height, ...props }: ChartProps<TreemapNode[]>) {
  // Children inherit the group color through a per-leaf fill.
  const rows = data.map((g, gi) => ({
    ...g,
    children: g.children?.map((c) => ({ ...c, fill: color(gi) })),
  }))
  return (
    <Frame height={height} {...props}>
      <ResponsiveContainer width="100%" height="100%">
        <Treemap
          data={rows}
          dataKey="size"
          nameKey="name"
          stroke="var(--card)"
          isAnimationActive={false}
          content={<LeafCell />}
        >
          <Tooltip contentStyle={TOOLTIP_STYLE} />
        </Treemap>
      </ResponsiveContainer>
    </Frame>
  )
}

function LeafCell(props: TreemapCellProps & { fill?: string }) {
  const { x = 0, y = 0, width = 0, height = 0, depth = 0, name, fill } = props
  if (depth < 2) return null
  return (
    <g>
      <rect x={x} y={y} width={width} height={height} rx={4} fill={fill} fillOpacity={0.85} stroke="var(--card)" strokeWidth={2} />
      {width > 44 && height > 20 && (
        <text x={x + 8} y={y + 16} fill="var(--card)" fontSize={12}>
          {name}
        </text>
      )}
    </g>
  )
}
/* ----------------------------------------------------------------- Sankey */

export type SankeyData = {
  nodes: { name: string }[]
  links: { source: number; target: number; value: number }[]
}

const sankeyDefault: SankeyData = {
  nodes: [
    { name: 'Organic' },
    { name: 'Paid' },
    { name: 'Referral' },
    { name: 'Landing' },
    { name: 'Sign up' },
    { name: 'Bounce' },
  ],
  links: [
    { source: 0, target: 3, value: 40 },
    { source: 1, target: 3, value: 30 },
    { source: 2, target: 3, value: 15 },
    { source: 3, target: 4, value: 50 },
    { source: 3, target: 5, value: 35 },
  ],
}

type SankeyNodeProps = {
  x?: number
  y?: number
  width?: number
  height?: number
  index?: number
  payload?: { name?: string }
  containerWidth?: number
}

function SankeyNode({ x = 0, y = 0, width = 0, height = 0, index = 0, payload, containerWidth = 0 }: SankeyNodeProps) {
  const left = x + width + 6 < containerWidth / 2
  return (
    <g>
      <rect x={x} y={y} width={width} height={height} rx={2} fill={color(index)} />
      <text
        x={left ? x + width + 6 : x - 6}
        y={y + height / 2}
        textAnchor={left ? 'start' : 'end'}
        dominantBaseline="middle"
        fill="var(--foreground)"
        fontSize={12}
      >
        {payload?.name}
      </text>
    </g>
  )
}

function ChartSankey({ data = sankeyDefault, height, ...props }: ChartProps<SankeyData>) {
  return (
    <Frame height={height} {...props}>
      <ResponsiveContainer width="100%" height="100%">
        <Sankey
          data={data}
          nodePadding={24}
          nodeWidth={10}
          margin={{ top: 8, bottom: 8, left: 8, right: 64 }}
          link={{ stroke: 'var(--chart-2)', strokeOpacity: 0.3 }}
          node={<SankeyNode />}
        >
          <Tooltip contentStyle={TOOLTIP_STYLE} />
        </Sankey>
      </ResponsiveContainer>
    </Frame>
  )
}

export {
  ChartRadar,
  ChartRadial,
  ChartCombo,
  ChartScatter,
  ChartSparkline,
  ChartGauge,
  ChartFunnel,
  ChartHeatmap,
  ChartTreemap,
  ChartSankey,
}
