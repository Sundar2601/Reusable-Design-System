import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { IosListComponent, IosListRowComponent } from '@/shared/extended/ios-list.component'
import { IosSwitchComponent } from '@/shared/extended/ios-switch.component'

const meta: Meta<IosListComponent> = {
  title: 'Mobile/iOS/List',
  component: IosListComponent,
  tags: ['autodocs'],
  parameters: { layout: 'centered', docs: { description: { component: 'iOS List and List Row (extended, hand-built). Same as the React IosList / IosListRow: `header`, `footer`; rows take `title`, `subtitle`, `value`, `chevron`, `destructive`, with `[leading]` and `[accessory]` projected slots.' } } },
  decorators: [moduleMetadata({ imports: [IosListRowComponent, IosSwitchComponent] })],
}
export default meta
type Story = StoryObj<IosListComponent>

export const Default: Story = {
  render: () => ({
    template: `
      <div class="w-[390px] bg-muted p-4">
        <ios-list header="Settings">
          <ios-list-row title="Airplane Mode"><ios-switch accessory ariaLabel="Airplane Mode" /></ios-list-row>
          <ios-list-row title="Wi-Fi" value="Home" [chevron]="true" />
          <ios-list-row title="Notifications" [chevron]="true" />
        </ios-list>
      </div>`,
  }),
}
export const WithSubtitleAndFooter: Story = {
  render: () => ({
    template: `
      <div class="w-[390px] bg-muted p-4">
        <ios-list header="Account" footer="Changes sync across your devices.">
          <ios-list-row title="Apple ID" subtitle="name@example.com" [chevron]="true" />
          <ios-list-row title="Sign Out" [destructive]="true" />
        </ios-list>
      </div>`,
  }),
}
