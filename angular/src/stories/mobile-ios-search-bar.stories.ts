import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { IosSearchBarComponent, IosTextFieldComponent } from '@/shared/extended/ios-search-bar.component'

const meta: Meta<IosSearchBarComponent> = {
  title: 'Mobile/iOS/Search Bar & Text Field',
  component: IosSearchBarComponent,
  tags: ['autodocs'],
  parameters: { layout: 'centered', docs: { description: { component: 'iOS Search Bar and Text Field (extended, hand-built). Same as the React IosSearchBar / IosTextField: two-way `value`, `placeholder`, `showCancel`, `label`.' } } },
  decorators: [moduleMetadata({ imports: [IosTextFieldComponent] })],
  args: { value: '', placeholder: 'Search', showCancel: false },
  render: (args) => ({ props: args, template: `<div class="w-[358px]"><ios-search-bar [(value)]="value" [placeholder]="placeholder" [showCancel]="showCancel" /></div>` }),
}
export default meta
type Story = StoryObj<IosSearchBarComponent>

export const Default: Story = {}
export const WithCancel: Story = { args: { showCancel: true, value: 'Photos' } }
export const TextField: Story = { render: () => ({ template: `<div class="w-[358px]"><ios-text-field placeholder="Name" /></div>` }) }
export const TextFieldWithLabel: Story = {
  render: () => ({
    template: `<div class="flex w-[358px] flex-col gap-3"><ios-text-field label="Email" placeholder="name@example.com" /><ios-text-field label="Password" type="password" placeholder="Required" /></div>`,
  }),
}
