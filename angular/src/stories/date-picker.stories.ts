import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { ZardDatePickerComponent } from '@/shared/components/date-picker'

const meta: Meta<ZardDatePickerComponent> = {
  title: 'Date Picker',
  component: ZardDatePickerComponent,
  tags: ['autodocs'],
  decorators: [moduleMetadata({ imports: [ZardDatePickerComponent] })],
  parameters: { docs: { description: { component: 'Date Picker (ZardUI). Trigger button plus calendar popover: `zPlaceholder`, `zFormat` (date-fns pattern), `zSize`, `zDisabledDates`.' } } },
  argTypes: {
    zPlaceholder: { name: 'placeholder', control: 'text' },
    zFormat: { name: 'format', control: 'text' },
    zSize: { name: 'size', control: 'inline-radio', options: ['xs', 'sm', 'default', 'lg'] },
  },
  args: { zPlaceholder: 'Pick a date', zFormat: 'MMMM d, yyyy', zSize: 'default' },
  render: (args) => ({
    props: args,
    template: `<z-date-picker class="w-64" [zPlaceholder]="zPlaceholder" [zFormat]="zFormat" [zSize]="zSize" />`,
  }),
}
export default meta
type Story = StoryObj<ZardDatePickerComponent>

export const Default: Story = {}
export const CustomFormat: Story = { args: { zFormat: 'dd/MM/yyyy' } }
export const Small: Story = { args: { zSize: 'sm' } }
