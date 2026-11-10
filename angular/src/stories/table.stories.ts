import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { ZardTableImports } from '@/shared/components/table/table.imports'
import { ZardTableComponent } from '@/shared/components/table/table.component'

const meta: Meta<ZardTableComponent> = {
  title: 'Table',
  component: ZardTableComponent,
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Table (ZardUI). Header, body, footer, caption, row, head and cell parts, like the React Table. `zType` default / striped / bordered, `zSize` default / compact / comfortable.' } } },
  decorators: [moduleMetadata({ imports: [...ZardTableImports] })],
  argTypes: {
    zType: { control: 'inline-radio', options: ['default', 'striped', 'bordered'] },
    zSize: { control: 'inline-radio', options: ['default', 'compact', 'comfortable'] },
  },
  args: { zType: 'default', zSize: 'default' },
}
export default meta
type Story = StoryObj<ZardTableComponent>

const rows = `
  <tr z-table-row><td z-table-cell class="font-medium">INV001</td><td z-table-cell>Paid</td><td z-table-cell>Credit Card</td><td z-table-cell class="text-right">$250.00</td></tr>
  <tr z-table-row><td z-table-cell class="font-medium">INV002</td><td z-table-cell>Pending</td><td z-table-cell>PayPal</td><td z-table-cell class="text-right">$150.00</td></tr>
  <tr z-table-row><td z-table-cell class="font-medium">INV003</td><td z-table-cell>Unpaid</td><td z-table-cell>Bank Transfer</td><td z-table-cell class="text-right">$350.00</td></tr>`
const head = `<thead z-table-header><tr z-table-row><th z-table-head>Invoice</th><th z-table-head>Status</th><th z-table-head>Method</th><th z-table-head class="text-right">Amount</th></tr></thead>`

export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `<div class="w-[560px]"><table z-table [zType]="zType" [zSize]="zSize">
      <caption z-table-caption>A list of your recent invoices.</caption>
      ${head}<tbody z-table-body>${rows}</tbody></table></div>`,
  }),
}

export const WithFooter: Story = {
  render: (args) => ({
    props: args,
    template: `<div class="w-[560px]"><table z-table [zType]="zType" [zSize]="zSize">
      ${head}<tbody z-table-body>${rows}</tbody>
      <tfoot z-table-footer><tr z-table-row><td z-table-cell colspan="3">Total</td><td z-table-cell class="text-right">$750.00</td></tr></tfoot></table></div>`,
  }),
}

export const SelectedRow: Story = {
  render: (args) => ({
    props: args,
    template: `<div class="w-[560px]"><table z-table [zType]="zType" [zSize]="zSize">
      <thead z-table-header><tr z-table-row><th z-table-head>Invoice</th><th z-table-head>Status</th></tr></thead>
      <tbody z-table-body>
        <tr z-table-row data-state="selected"><td z-table-cell>INV001</td><td z-table-cell>Paid</td></tr>
        <tr z-table-row><td z-table-cell>INV002</td><td z-table-cell>Pending</td></tr>
      </tbody></table></div>`,
  }),
}
