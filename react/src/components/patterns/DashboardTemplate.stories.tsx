import type { Meta, StoryObj } from '@storybook/react-vite'
import { Calendar, Home, Inbox, LayoutDashboard, Menu, Settings, ShoppingCart, User } from 'lucide-react'
import { Avatar, AvatarFallback } from '../Avatar'
import { Badge } from '../Badge'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '../Breadcrumb'
import { Button } from '../Button'
import { ChartBar } from '../ChartsBasic'
import { Input } from '../Input'
import { NotificationItem } from '../NotificationItem'
import { PageHeader } from '../PageHeader'
import { StatCard } from '../StatCard'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../Table'
import { cn } from '@/lib/utils'

/**
 * Templates from the Figma "Templates" page: one Dashboard reference screen at the five
 * grid sizes (desktop 1440, tablet 834/1194, mobile 390/844). Composed only from library
 * components and token classes. Use the Storybook toolbar to flip light/dark.
 */
const meta = {
  title: 'Templates/Dashboard',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Dashboard reference screen at each Figma template size. Desktop: 1440×1024, 12 columns, 64px margin. Tablet portrait 834×1194 (8 cols), tablet landscape 1194×834 (12 cols). Mobile portrait 390×844 (4 cols), mobile landscape 844×390 (8 cols).',
      },
      story: { inline: false, height: '720px' },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

const nav = [
  { title: 'Dashboard', icon: LayoutDashboard, active: true },
  { title: 'Inbox', icon: Inbox },
  { title: 'Calendar', icon: Calendar },
  { title: 'Settings', icon: Settings },
]

const chartData = [
  { month: 'Jan', visitors: 186 },
  { month: 'Feb', visitors: 305 },
  { month: 'Mar', visitors: 237 },
  { month: 'Apr', visitors: 73 },
  { month: 'May', visitors: 209 },
  { month: 'Jun', visitors: 214 },
]

const orders = [
  { id: 'INV001', status: 'Paid', method: 'Credit Card', amount: '$250.00' },
  { id: 'INV002', status: 'Pending', method: 'PayPal', amount: '$150.00' },
  { id: 'INV003', status: 'Unpaid', method: 'Bank Transfer', amount: '$350.00' },
  { id: 'INV004', status: 'Paid', method: 'Credit Card', amount: '$450.00' },
]

const stats = [
  { label: 'Total revenue', value: '$45,231', delta: '12.5%', trend: 'up', description: 'Trending up this month' },
  { label: 'Orders', value: '2,350', delta: '12.5%', trend: 'up', description: 'Trending up this month' },
  { label: 'Active users', value: '12,234', delta: '4.3%', trend: 'down', description: 'Down 4.3% from last period' },
  { label: 'Conversion', value: '3.2%', delta: '12.5%', trend: 'up', description: 'Trending up this month' },
] as const

function SideNav() {
  return (
    <aside className="flex h-full w-56 shrink-0 flex-col gap-4 border-r border-border bg-card p-3">
      <div className="px-2 text-sm font-semibold">Acme Inc</div>
      <nav className="flex flex-col gap-1" aria-label="Platform">
        <span className="px-2 text-xs text-muted-foreground">Platform</span>
        {nav.map((item) => (
          <a
            key={item.title}
            href="#"
            aria-current={item.active ? 'page' : undefined}
            className={cn(
              'flex h-8 items-center gap-2 rounded-md px-2 text-sm hover:bg-accent focus-visible:shadow-focus-ring focus-visible:outline-none [&_svg]:size-4',
              item.active && 'bg-accent font-medium',
            )}
          >
            <item.icon />
            {item.title}
          </a>
        ))}
      </nav>
      <div className="mt-auto flex items-center gap-2 px-2 text-sm">
        <Avatar><AvatarFallback>SM</AvatarFallback></Avatar>
        <span className="text-xs text-muted-foreground">m@example.com</span>
      </div>
    </aside>
  )
}

function TabBar() {
  const items = [
    { title: 'Home', icon: Home },
    { title: 'Orders', icon: ShoppingCart },
    { title: 'Inbox', icon: Inbox },
    { title: 'Profile', icon: User },
  ]
  return (
    <nav aria-label="Primary" className="flex h-16 shrink-0 items-center justify-around border-t border-border bg-background">
      {items.map((item, i) => (
        <a key={item.title} href="#" className={cn('flex flex-col items-center gap-1 text-xs [&_svg]:size-5', i === 0 ? 'font-medium text-foreground' : 'text-muted-foreground')}>
          <item.icon />
          {item.title}
        </a>
      ))}
    </nav>
  )
}

function statusVariant(s: string) {
  return s === 'Unpaid' ? 'destructive' : s === 'Pending' ? 'secondary' : 'default'
}

interface ScreenProps {
  width: number
  height: number
  /** How many stat cards per row. */
  statCols: number
  /** Show the persistent sidebar (desktop and tablet landscape). */
  sidebar?: boolean
  /** Show the bottom tab bar (mobile). */
  tabBar?: boolean
  /** Show the slide-in menu (tablet portrait and mobile, menu open). */
  menuOpen?: boolean
  /** Put chart and activity side by side. */
  split?: boolean
  padding?: string
}

function Screen({ width, height, statCols, sidebar, tabBar, menuOpen, split, padding = 'p-6' }: ScreenProps) {
  return (
    <div style={{ width, height }} className="relative flex overflow-hidden rounded-lg border border-border bg-background text-foreground">
      {sidebar && <SideNav />}
      <div className="flex min-w-0 flex-1 flex-col">
        <main className={cn('flex min-h-0 flex-1 flex-col gap-6 overflow-auto', padding)}>
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              {!sidebar && (
                <Button variant="ghost" size="sm" aria-label="Open menu" leftIcon={<Menu />} />
              )}
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem><BreadcrumbLink href="#">Home</BreadcrumbLink></BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem><BreadcrumbPage>Dashboard</BreadcrumbPage></BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            <div className="flex items-center gap-3">
              {sidebar && <Input placeholder="Search..." aria-label="Search" className="w-48" />}
              <Avatar><AvatarFallback>SM</AvatarFallback></Avatar>
            </div>
          </div>
          <PageHeader
            className="border-b-0 pb-0"
            title="Dashboard"
            description="Overview of revenue, orders and customer activity."
            actions={<Button>New order</Button>}
          />
          {!sidebar && <Input placeholder="Search..." aria-label="Search" />}
          <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${statCols}, minmax(0, 1fr))` }}>
            {stats.slice(0, statCols === 1 ? 3 : 4).map((s) => (
              <StatCard key={s.label} className="w-auto" {...s} />
            ))}
          </div>
          <div className={cn('grid gap-6', split ? 'grid-cols-[1fr_1fr]' : 'grid-cols-1')}>
            <div className="flex flex-col gap-2 rounded-xl border border-border bg-card p-4">
              <div className="text-sm font-medium">Bar Chart</div>
              <div className="text-xs text-muted-foreground">January – June 2026</div>
              <ChartBar
                data={chartData}
                config={{ visitors: { label: 'Visitors', color: 'var(--chart-1)' } }}
                xKey="month"
                className="h-48 w-full"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-base font-semibold">Recent activity</h2>
              <NotificationItem title="New order received" time="2 minutes ago" avatarFallback="JD" unread />
              <NotificationItem title="Payment confirmed" time="2 minutes ago" avatarFallback="AK" unread />
              <NotificationItem title="Invoice sent to customer" time="2 minutes ago" avatarFallback="LM" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-base font-semibold">Recent orders</h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Invoice</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orders.map((o) => (
                  <TableRow key={o.id}>
                    <TableCell className="font-medium">{o.id}</TableCell>
                    <TableCell><Badge variant={statusVariant(o.status)}>{o.status}</Badge></TableCell>
                    <TableCell>{o.method}</TableCell>
                    <TableCell className="text-right">{o.amount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </main>
        {tabBar && <TabBar />}
      </div>
      {menuOpen && (
        <>
          <div className="absolute inset-0 bg-black/50" aria-hidden />
          <div className="absolute inset-y-0 left-0 shadow-lg"><SideNav /></div>
        </>
      )}
    </div>
  )
}

export const Desktop: Story = {
  render: () => <Screen width={1440} height={1024} statCols={4} sidebar split padding="px-16 py-8" />,
}

export const TabletLandscape: Story = {
  render: () => <Screen width={1194} height={834} statCols={4} sidebar split padding="px-8 py-6" />,
}

export const TabletPortrait: Story = {
  render: () => <Screen width={834} height={1194} statCols={2} padding="px-6 py-6" />,
}

export const TabletPortraitMenuOpen: Story = {
  render: () => <Screen width={834} height={1194} statCols={2} menuOpen padding="px-6 py-6" />,
}

export const MobilePortrait: Story = {
  render: () => <Screen width={390} height={844} statCols={1} tabBar padding="p-4" />,
}

export const MobilePortraitMenuOpen: Story = {
  render: () => <Screen width={390} height={844} statCols={1} tabBar menuOpen padding="p-4" />,
}

export const MobileLandscape: Story = {
  render: () => <Screen width={844} height={390} statCols={2} tabBar padding="px-12 py-4" />,
}
