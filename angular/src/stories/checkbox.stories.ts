import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { FormsModule } from '@angular/forms'
import { ZardCheckboxComponent } from '@/shared/components/checkbox'

const meta: Meta<ZardCheckboxComponent & { label: string }> = {
  title: 'Checkbox',
  component: ZardCheckboxComponent,
  tags: ['autodocs'],
  decorators: [moduleMetadata({ imports: [ZardCheckboxComponent, FormsModule] })],
  args: { zDisabled: false, zInvalid: false, label: 'Accept terms and conditions' },
  render: ({ label, ...args }) => ({
    props: args,
    template: `<z-checkbox [zDisabled]="zDisabled" [zInvalid]="zInvalid">${label}</z-checkbox>`,
  }),
}
export default meta
type Story = StoryObj<ZardCheckboxComponent & { label: string }>

export const Unchecked: Story = {}
export const Checked: Story = {
  render: ({ label, ...args }) => ({ props: args, template: `<z-checkbox [zDisabled]="zDisabled" [zInvalid]="zInvalid" [ngModel]="true">${label}</z-checkbox>` }),
}
export const WithLabelAndDescription: Story = {
  render: () => ({ template: `<div class="flex flex-col gap-0.5"><z-checkbox>Accept terms</z-checkbox><p class="ps-6 text-sm text-muted-foreground">You agree to our terms and privacy policy.</p></div>` }),
}
export const Invalid: Story = { args: { zInvalid: true } }
export const Disabled: Story = { args: { zDisabled: true } }
