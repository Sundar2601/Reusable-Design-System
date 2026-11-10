import * as React from 'react'
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Label,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { cn } from '@/lib/utils'

/**
 * Basic charts (Figma page "Charts": Bar, Bar stacked, Bar horizontal, Line, Area,
 * Area stacked, Pie, Donut, Donut with text). Built on Recharts with the shadcn
 * chart pattern: a `config` maps every data key to a label and a color, and the
 * colors come from the theme tokens --chart-1 .. --chart-5.
 */
export type ChartConfig = Record<string, { label?: React.ReactNode; color?: string }>
export type ChartDatum = Record<string, string | number>

const defaultColor = (index: number) => `var(--chart-${(index % 5) + 1})`

const ChartContext = React.createContext<{ config: ChartConfig } | null>(null)

function useChart() {
  const ctx = React.useContext(ChartContext)
  if (!ctx) throw new Error('Chart helpers must be used inside <ChartContainer>')
  return ctx
}

/** Resolves a data key to its label and color from the chart config. */
function resolveItem(config: ChartConfig, key: string, index = 0) {
  const item = config[key]
  return { label: item?.label ?? key, color: item?.color ?? defaultColor(index) }
}

/** Wraps a Recharts chart, sets the --color-<key> CSS variables from `config` and makes it responsive. */
function ChartContainer({
  config,
  className,
  children,
  ...props
}: Omit<React.ComponentProps<'div'>, 'children'> & {
  config: ChartConfig
  children: React.ReactElement
}) {
  const style = Object.fromEntries(
    Object.keys(config).map((key, i) => [`--color-${key}`, resolveItem(config, key, i).color]),
  ) as React.CSSProperties
  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-slot="chart"
        style={{ ...style, ...props.style }}
        className={cn(
          'flex aspect-video w-full justify-center text-xs',
          '[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground',
          '[&_.recharts-cartesian-grid_line[stroke="#ccc"]]:stroke-border/50',
          '[&_.recharts-curve.recharts-tooltip-cursor]:stroke-border',
          '[&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted',
          '[&_.recharts-dot[stroke="#fff"]]:stroke-transparent [&_.recharts-layer]:outline-hidden',
          '[&_.recharts-polar-grid_[stroke="#ccc"]]:stroke-border [&_.recharts-sector]:outline-hidden',
          '[&_.recharts-sector[stroke="#fff"]]:stroke-transparent [&_.recharts-surface]:outline-hidden',
          className,
        )}
        {...props}
      >
        <ResponsiveContainer width="100%" height="100%">
          {children}
        </ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  )
}

interface TooltipPayloadItem {
  name?: string | number
  dataKey?: string | number
  value?: string | number | readonly (string | number)[]
  color?: string
  payload?: Record<string, unknown>
}

/** Tooltip body. Pass as `<Tooltip content={<ChartTooltipContent />} />`. */
function ChartTooltipContent({
  active,
  payload,
  label,
  className,
  hideLabel = false,
  hideIndicator = false,
  indicator = 'dot',
  nameKey,
}: {
  active?: boolean
  payload?: readonly TooltipPayloadItem[]
  label?: React.ReactNode
  className?: string
  hideLabel?: boolean
  hideIndicator?: boolean
  indicator?: 'dot' | 'line' | 'dashed'
  /** Data key holding the item name (pie charts use the slice name). */
  nameKey?: string
}) {
  const { config } = useChart()
  if (!active || !payload?.length) return null
  return (
    <div
      data-slot="chart-tooltip"
      className={cn(
        'grid min-w-32 items-start gap-1.5 rounded-lg border border-border bg-popover px-2.5 py-1.5 text-xs text-popover-foreground shadow-xl',
        className,
      )}
    >
      {!hideLabel && label != null && <div className="font-medium">{label}</div>}
      <div className="grid gap-1.5">
        {payload.map((item, i) => {
          const key = String(nameKey ? (item.payload?.[nameKey] ?? item.name) : (item.dataKey ?? item.name ?? 'value'))
          const { label: itemLabel, color } = resolveItem(config, key, i)
          const indicatorColor = (item.payload?.fill as string | undefined) ?? item.color ?? color
          return (
            <div key={key + i} className="flex w-full items-center gap-2">
              {!hideIndicator && (
                <span
                  className={cn(
                    'shrink-0 rounded-[2px]',
                    indicator === 'dot' && 'size-2.5',
                    indicator === 'line' && 'h-2.5 w-1',
                    indicator === 'dashed' && 'w-0 border-[1.5px] border-dashed bg-transparent',
                  )}
                  style={{ backgroundColor: indicatorColor, borderColor: indicatorColor }}
                />
              )}
              <span className="text-muted-foreground">{itemLabel}</span>
              <span className="ml-auto font-mono font-medium text-foreground tabular-nums">
                {typeof item.value === 'number' ? item.value.toLocaleString() : String(item.value ?? '')}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

interface LegendPayloadItem {
  value?: string | number
  dataKey?: unknown
  color?: string
  payload?: unknown
}

/** Legend body. Pass as `<Legend content={<ChartLegendContent />} />`. */
function ChartLegendContent({
  payload,
  className,
  nameKey,
}: {
  payload?: readonly LegendPayloadItem[]
  className?: string
  nameKey?: string
}) {
  const { config } = useChart()
  if (!payload?.length) return null
  return (
    <div data-slot="chart-legend" className={cn('flex flex-wrap items-center justify-center gap-4 pt-3', className)}>
      {payload.map((item, i) => {
        const key = String(nameKey ?? item.dataKey ?? item.value ?? '')
        const resolved = resolveItem(config, key, i)
        return (
          <div key={key + i} className="flex items-center gap-1.5 text-xs text-foreground">
            <span className="size-2 shrink-0 rounded-[2px]" style={{ backgroundColor: item.color ?? resolved.color }} />
            {resolved.label}
          </div>
        )
      })}
    </div>
  )
}

interface CartesianProps {
  /** Rows of data. */
  data: ChartDatum[]
  /** Maps data keys to label and color. The keys (except `xKey`) are the plotted series. */
  config: ChartConfig
  /** Data key used for the category axis. Defaults to `month`. */
  xKey?: string
  /** Show the legend. */
  legend?: boolean
  className?: string
}

function seriesKeys(config: ChartConfig, xKey: string) {
  return Object.keys(config).filter((k) => k !== xKey)
}

const axisProps = { tickLine: false, axisLine: false, tickMargin: 8 } as const
const tick = (v: unknown) => (typeof v === 'string' ? v.slice(0, 3) : String(v))

/** Figma "Chart / Bar Chart". */
function ChartBar({ data, config, xKey = 'month', legend, className }: CartesianProps) {
  const keys = seriesKeys(config, xKey)
  return (
    <ChartContainer config={config} className={className}>
      <BarChart data={data}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey={xKey} tickFormatter={tick} {...axisProps} />
        <Tooltip cursor={false} content={<ChartTooltipContent indicator="dashed" />} />
        {legend && <Legend content={<ChartLegendContent />} />}
        {keys.map((k) => (
          <Bar key={k} dataKey={k} fill={`var(--color-${k})`} radius={4} />
        ))}
      </BarChart>
    </ChartContainer>
  )
}

/** Figma "Chart / Bar Chart – Stacked". */
function ChartBarStacked({ data, config, xKey = 'month', legend = true, className }: CartesianProps) {
  const keys = seriesKeys(config, xKey)
  return (
    <ChartContainer config={config} className={className}>
      <BarChart data={data}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey={xKey} tickFormatter={tick} {...axisProps} />
        <Tooltip cursor={false} content={<ChartTooltipContent hideLabel={false} />} />
        {legend && <Legend content={<ChartLegendContent />} />}
        {keys.map((k, i) => (
          <Bar
            key={k}
            dataKey={k}
            stackId="a"
            fill={`var(--color-${k})`}
            radius={i === 0 ? [0, 0, 4, 4] : i === keys.length - 1 ? [4, 4, 0, 0] : 0}
          />
        ))}
      </BarChart>
    </ChartContainer>
  )
}

/** Figma "Chart / Bar Chart – Horizontal". The category axis is vertical. */
function ChartBarHorizontal({ data, config, xKey = 'month', legend, className }: CartesianProps) {
  const keys = seriesKeys(config, xKey)
  return (
    <ChartContainer config={config} className={className}>
      <BarChart data={data} layout="vertical" margin={{ left: -8 }}>
        <CartesianGrid horizontal={false} />
        <YAxis dataKey={xKey} type="category" tickFormatter={tick} {...axisProps} />
        <XAxis type="number" hide />
        <Tooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
        {legend && <Legend content={<ChartLegendContent />} />}
        {keys.map((k) => (
          <Bar key={k} dataKey={k} fill={`var(--color-${k})`} radius={5} />
        ))}
      </BarChart>
    </ChartContainer>
  )
}

/** Figma "Chart / Line Chart". */
function ChartLine({ data, config, xKey = 'month', legend, className }: CartesianProps) {
  const keys = seriesKeys(config, xKey)
  return (
    <ChartContainer config={config} className={className}>
      <LineChart data={data} margin={{ left: 12, right: 12 }}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey={xKey} tickFormatter={tick} {...axisProps} />
        <Tooltip cursor={false} content={<ChartTooltipContent />} />
        {legend && <Legend content={<ChartLegendContent />} />}
        {keys.map((k) => (
          <Line key={k} dataKey={k} type="natural" stroke={`var(--color-${k})`} strokeWidth={2} dot={false} />
        ))}
      </LineChart>
    </ChartContainer>
  )
}

function AreaBase({
  data,
  config,
  xKey = 'month',
  legend,
  className,
  stacked,
}: CartesianProps & { stacked?: boolean }) {
  const keys = seriesKeys(config, xKey)
  return (
    <ChartContainer config={config} className={className}>
      <AreaChart data={data} margin={{ left: 12, right: 12 }}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey={xKey} tickFormatter={tick} {...axisProps} />
        <Tooltip cursor={false} content={<ChartTooltipContent indicator="dot" />} />
        {legend && <Legend content={<ChartLegendContent />} />}
        {keys.map((k) => (
          <Area
            key={k}
            dataKey={k}
            type="natural"
            fill={`var(--color-${k})`}
            fillOpacity={0.4}
            stroke={`var(--color-${k})`}
            stackId={stacked ? 'a' : undefined}
          />
        ))}
      </AreaChart>
    </ChartContainer>
  )
}

/** Figma "Chart / Area Chart". */
function ChartArea(props: CartesianProps) {
  return <AreaBase {...props} />
}

/** Figma "Chart / Area Chart – Stacked". */
function ChartAreaStacked({ legend = true, ...props }: CartesianProps) {
  return <AreaBase {...props} legend={legend} stacked />
}

interface PieProps {
  /** One row per slice. */
  data: ChartDatum[]
  /** Maps slice names (the `nameKey` values) to label and color. */
  config: ChartConfig
  /** Data key with the numeric value. Defaults to `visitors`. */
  valueKey?: string
  /** Data key with the slice name. Defaults to `browser`. */
  nameKey?: string
  legend?: boolean
  className?: string
}

function PieBase({
  data,
  config,
  valueKey = 'visitors',
  nameKey = 'browser',
  legend,
  className,
  innerRadius = 0,
  centerLabel,
}: PieProps & { innerRadius?: number; centerLabel?: string }) {
  const rows: ChartDatum[] = data.map((d, i) => ({ ...d, fill: resolveItem(config, String(d[nameKey]), i).color }))
  const total = rows.reduce((sum, d) => sum + Number(d[valueKey] ?? 0), 0)
  return (
    <ChartContainer config={config} className={cn('aspect-square max-h-64', className)}>
      <PieChart>
        <Tooltip cursor={false} content={<ChartTooltipContent hideLabel nameKey={nameKey} />} />
        <Pie data={rows} dataKey={valueKey} nameKey={nameKey} innerRadius={innerRadius} strokeWidth={5}>
          {centerLabel && (
            <Label
              content={({ viewBox }) => {
                if (!viewBox || !('cx' in viewBox)) return null
                return (
                  <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle" dominantBaseline="middle">
                    <tspan x={viewBox.cx} y={viewBox.cy} className="fill-foreground text-3xl font-bold">
                      {total.toLocaleString()}
                    </tspan>
                    <tspan x={viewBox.cx} y={(viewBox.cy ?? 0) + 24} className="fill-muted-foreground">
                      {centerLabel}
                    </tspan>
                  </text>
                )
              }}
            />
          )}
        </Pie>
        {legend && <Legend content={<ChartLegendContent nameKey={nameKey} />} />}
      </PieChart>
    </ChartContainer>
  )
}

/** Figma "Chart / Pie Chart". */
function ChartPie(props: PieProps) {
  return <PieBase {...props} />
}

/** Figma "Chart / Pie Chart – Donut". */
function ChartDonut(props: PieProps) {
  return <PieBase {...props} innerRadius={60} />
}

/** Figma "Chart / Pie Chart – Donut with text". The total is drawn in the hole. */
function ChartDonutText({ label = 'Visitors', ...props }: PieProps & { label?: string }) {
  return <PieBase {...props} innerRadius={60} centerLabel={label} />
}

export {
  ChartContainer,
  ChartTooltipContent,
  ChartLegendContent,
  ChartBar,
  ChartBarStacked,
  ChartBarHorizontal,
  ChartLine,
  ChartArea,
  ChartAreaStacked,
  ChartPie,
  ChartDonut,
  ChartDonutText,
}
