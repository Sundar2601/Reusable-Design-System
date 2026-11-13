import type { Meta, StoryObj } from '@storybook/angular'
import { applicationConfig, moduleMetadata } from '@storybook/angular'
import { provideRouter } from '@angular/router'
import { ZardAvatarImports } from '@/shared/components/avatar/avatar.imports'
import { ZardBadgeComponent } from '@/shared/components/badge'
import { ZardBreadcrumbImports } from '@/shared/components/breadcrumb'
import { ZardButtonComponent } from '@/shared/components/button'
import { provideZardCharts } from '@/shared/components/chart/chart-echarts.provider'
import { ZardChartImports } from '@/shared/components/chart/chart.imports'
import type { ZardChartConfig } from '@/shared/components/chart/chart.types'
import { ZardInputComponent } from '@/shared/components/input'
import { ZardTableImports } from '@/shared/components/table/table.imports'
import { NotificationItemComponent } from '@/shared/extended/notification-item.component'
import { PageHeaderComponent } from '@/shared/extended/page-header.component'
import { StatCardComponent } from '@/shared/extended/stat-card.component'

/**
 * Templates from the Figma "Templates" page: one Dashboard reference screen at the five grid
 * sizes (desktop 1440, tablet 834/1194, mobile 390/844). Same layout as the React story.
 */
const meta: Meta = {
  title: 'Templates/Dashboard',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Dashboard reference screen at each Figma template size. Desktop 1440×1024 (12 cols, 64px margin). Tablet portrait 834×1194 (8 cols), tablet landscape 1194×834 (12 cols). Mobile portrait 390×844 (4 cols), mobile landscape 844×390 (8 cols).',
      },
      story: { inline: false, height: '720px' },
    },
  },
  decorators: [
    applicationConfig({ providers: [provideRouter([]), provideZardCharts()] }),
    moduleMetadata({
      imports: [
        ...ZardAvatarImports,
        ...ZardBreadcrumbImports,
        ...ZardChartImports,
        ...ZardTableImports,
        ZardBadgeComponent,
        ZardButtonComponent,
        ZardInputComponent,
        NotificationItemComponent,
        PageHeaderComponent,
        StatCardComponent,
      ],
    }),
  ],
}
export default meta
type Story = StoryObj

const data = [
  { month: 'Jan', visitors: 186 },
  { month: 'Feb', visitors: 305 },
  { month: 'Mar', visitors: 237 },
  { month: 'Apr', visitors: 73 },
  { month: 'May', visitors: 209 },
  { month: 'Jun', visitors: 214 },
]
const config: ZardChartConfig = { visitors: { label: 'Visitors', color: 'var(--chart-1)' } }

const navItems = ['Dashboard', 'Inbox', 'Calendar', 'Settings']
const tabItems = ['Home', 'Orders', 'Inbox', 'Profile']

const sideNav = `
  <aside class="flex h-full w-56 shrink-0 flex-col gap-4 border-r border-border bg-card p-3">
    <div class="px-2 text-sm font-semibold">Acme Inc</div>
    <nav class="flex flex-col gap-1" aria-label="Platform">
      <span class="px-2 text-xs text-muted-foreground">Platform</span>
      ${navItems
        .map(
          (n, i) =>
            `<a href="#" class="flex h-8 items-center rounded-md px-2 text-sm hover:bg-accent focus-visible:shadow-focus-ring focus-visible:outline-none ${i === 0 ? 'bg-accent font-medium' : ''}" ${i === 0 ? 'aria-current="page"' : ''}>${n}</a>`,
        )
        .join('')}
    </nav>
    <div class="mt-auto flex items-center gap-2 px-2 text-sm">
      <z-avatar zFallback="SM" /><span class="text-xs text-muted-foreground">m@example.com</span>
    </div>
  </aside>`

const tabBar = `
  <nav aria-label="Primary" class="flex h-16 shrink-0 items-center justify-around border-t border-border bg-background">
    ${tabItems
      .map(
        (t, i) =>
          `<a href="#" class="text-xs ${i === 0 ? 'font-medium text-foreground' : 'text-muted-foreground'}">${t}</a>`,
      )
      .join('')}
  </nav>`

const stats = [
  { label: 'Total revenue', value: '$45,231', delta: '12.5%', trend: 'up', description: 'Trending up this month' },
  { label: 'Orders', value: '2,350', delta: '12.5%', trend: 'up', description: 'Trending up this month' },
  { label: 'Active users', value: '12,234', delta: '4.3%', trend: 'down', description: 'Down 4.3% from last period' },
  { label: 'Conversion', value: '3.2%', delta: '12.5%', trend: 'up', description: 'Trending up this month' },
]

const orders = [
  ['INV001', 'Paid', 'default', 'Credit Card', '$250.00'],
  ['INV002', 'Pending', 'secondary', 'PayPal', '$150.00'],
  ['INV003', 'Unpaid', 'destructive', 'Bank Transfer', '$350.00'],
  ['INV004', 'Paid', 'default', 'Credit Card', '$450.00'],
]

interface ScreenOpts {
  width: number
  height: number
  statCols: number
  sidebar?: boolean
  tabBar?: boolean
  menuOpen?: boolean
  split?: boolean
  padding?: string
}

const screen = (o: ScreenOpts) => `
  <div style="width:${o.width}px;height:${o.height}px" class="relative flex overflow-hidden rounded-lg border border-border bg-background text-foreground">
    ${o.sidebar ? sideNav : ''}
    <div class="flex min-w-0 flex-1 flex-col">
      <main class="flex min-h-0 flex-1 flex-col gap-6 overflow-auto ${o.padding ?? 'p-6'}">
        <div class="flex items-center justify-between gap-3">
          <div class="flex items-center gap-2">
            ${o.sidebar ? '' : '<button z-button zType="ghost" zSize="sm" aria-label="Open menu">☰</button>'}
            <z-breadcrumb>
              <z-breadcrumb-item [routerLink]="['/']">Home</z-breadcrumb-item>
              <z-breadcrumb-item>Dashboard</z-breadcrumb-item>
            </z-breadcrumb>
          </div>
          <div class="flex items-center gap-3">
            ${o.sidebar ? '<input z-input placeholder="Search..." aria-label="Search" class="w-48" />' : ''}
            <z-avatar zFallback="SM" />
          </div>
        </div>
        <ui-page-header class="border-b-0!" heading="Dashboard" description="Overview of revenue, orders and customer activity.">
          <button actions z-button>New order</button>
        </ui-page-header>
        ${o.sidebar ? '' : '<input z-input placeholder="Search..." aria-label="Search" />'}
        <div class="grid gap-4" style="grid-template-columns: repeat(${o.statCols}, minmax(0, 1fr))">
          ${stats
            .slice(0, o.statCols === 1 ? 3 : 4)
            .map(
              (s) =>
                `<ui-stat-card class="w-auto!" label="${s.label}" value="${s.value}" delta="${s.delta}" trend="${s.trend}" description="${s.description}" />`,
            )
            .join('')}
        </div>
        <div class="grid gap-6 ${o.split ? 'grid-cols-2' : 'grid-cols-1'}">
          <div class="flex flex-col gap-2 rounded-xl border border-border bg-card p-4">
            <div class="text-sm font-medium">Bar Chart</div>
            <div class="text-xs text-muted-foreground">January – June 2026</div>
            <z-chart class="h-48 w-full" [zData]="data" [zConfig]="config" zType="bar" zXAxisKey="month" [zSeries]="['visitors']">
              <z-chart-tooltip />
            </z-chart>
          </div>
          <div class="flex flex-col gap-2">
            <h2 class="text-base font-semibold">Recent activity</h2>
            <ui-notification-item class="w-full!" heading="New order received" time="2 minutes ago" avatarFallback="JD" [unread]="true" />
            <ui-notification-item class="w-full!" heading="Payment confirmed" time="2 minutes ago" avatarFallback="AK" [unread]="true" />
            <ui-notification-item class="w-full!" heading="Invoice sent to customer" time="2 minutes ago" avatarFallback="LM" />
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h2 class="text-base font-semibold">Recent orders</h2>
          <table z-table>
            <thead z-table-header><tr z-table-row><th z-table-head>Invoice</th><th z-table-head>Status</th><th z-table-head>Method</th><th z-table-head class="text-right">Amount</th></tr></thead>
            <tbody z-table-body>
              ${orders
                .map(
                  ([id, status, type, method, amount]) =>
                    `<tr z-table-row><td z-table-cell class="font-medium">${id}</td><td z-table-cell><z-badge zType="${type}">${status}</z-badge></td><td z-table-cell>${method}</td><td z-table-cell class="text-right">${amount}</td></tr>`,
                )
                .join('')}
            </tbody>
          </table>
        </div>
      </main>
      ${o.tabBar ? tabBar : ''}
    </div>
    ${
      o.menuOpen
        ? `<div class="absolute inset-0 bg-black/50" aria-hidden="true"></div><div class="absolute inset-y-0 left-0 shadow-lg">${sideNav}</div>`
        : ''
    }
  </div>`

const story = (o: ScreenOpts): Story => ({
  render: () => ({ props: { data, config }, template: screen(o) }),
})

export const Desktop: Story = story({ width: 1440, height: 1024, statCols: 4, sidebar: true, split: true, padding: 'px-16 py-8' })
export const TabletLandscape: Story = story({ width: 1194, height: 834, statCols: 4, sidebar: true, split: true, padding: 'px-8 py-6' })
export const TabletPortrait: Story = story({ width: 834, height: 1194, statCols: 2, padding: 'px-6 py-6' })
export const TabletPortraitMenuOpen: Story = story({ width: 834, height: 1194, statCols: 2, menuOpen: true, padding: 'px-6 py-6' })
export const MobilePortrait: Story = story({ width: 390, height: 844, statCols: 1, tabBar: true, padding: 'p-4' })
export const MobilePortraitMenuOpen: Story = story({ width: 390, height: 844, statCols: 1, tabBar: true, menuOpen: true, padding: 'p-4' })
export const MobileLandscape: Story = story({ width: 844, height: 390, statCols: 2, tabBar: true, padding: 'px-12 py-4' })
