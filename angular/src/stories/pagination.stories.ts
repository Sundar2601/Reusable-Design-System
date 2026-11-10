import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { ZardPaginationComponent, ZardPaginationImports } from '@/shared/components/pagination'

const meta: Meta<ZardPaginationComponent> = {
  title: 'Pagination',
  component: ZardPaginationComponent,
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Pagination (ZardUI). `z-pagination` with `zTotal` pages and a two-way `zPageIndex`. `zSimple` drops the previous/next buttons. Compose the parts yourself with `zContent` for ellipses.' } } },
  decorators: [moduleMetadata({ imports: [...ZardPaginationImports] })],
  argTypes: { zTotal: { control: 'number' }, zSimple: { control: 'boolean' }, zDisabled: { control: 'boolean' } },
  args: { zTotal: 10, zSimple: false, zDisabled: false },
  render: (args) => ({
    props: args,
    template: `<z-pagination [zTotal]="zTotal" [zSimple]="zSimple" [zDisabled]="zDisabled" />`,
  }),
}
export default meta
type Story = StoryObj<ZardPaginationComponent>

export const Default: Story = {}
export const Simple: Story = { args: { zSimple: true, zTotal: 5 } }
export const WithEllipsis: Story = {
  render: () => ({
    template: `<z-pagination [zContent]="content" />
    <ng-template #content>
      <ul z-pagination-content>
        <li z-pagination-item><z-pagination-previous /></li>
        <li z-pagination-item><button z-pagination-button type="button">1</button></li>
        <li z-pagination-item><button z-pagination-button type="button" [zActive]="true">2</button></li>
        <li z-pagination-item><button z-pagination-button type="button">3</button></li>
        <li z-pagination-item><z-pagination-ellipsis /></li>
        <li z-pagination-item><z-pagination-next /></li>
      </ul>
    </ng-template>`,
  }),
}
