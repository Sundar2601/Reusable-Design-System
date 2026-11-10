import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { ZardAlertDialogComponent, ZardAlertDialogImports } from '@/shared/components/alert-dialog'
import { ZardButtonComponent } from '@/shared/components/button'

const meta: Meta<ZardAlertDialogComponent> = {
  title: 'Alert Dialog',
  component: ZardAlertDialogComponent,
  tags: ['autodocs'],
  parameters: { layout: 'centered', docs: { description: { component: 'Alert Dialog (ZardUI). `z-alert-dialog` with `[(zVisible)]`. It cannot be dismissed by clicking outside unless `zMaskClosable` is set. Use `z-alert-dialog-close` on the Cancel button.' } } },
  decorators: [moduleMetadata({ imports: [...ZardAlertDialogImports, ZardButtonComponent] })],
}
export default meta
type Story = StoryObj<ZardAlertDialogComponent>

export const Default: Story = {
  render: () => ({
    props: { open: false },
    template: `<button z-button zType="outline" (click)="open = true">Show dialog</button>
    <z-alert-dialog [(zVisible)]="open">
      <z-alert-dialog-header>
        <z-alert-dialog-title>Are you absolutely sure?</z-alert-dialog-title>
        <z-alert-dialog-description>This action cannot be undone. This will permanently delete your account and remove your data from our servers.</z-alert-dialog-description>
      </z-alert-dialog-header>
      <z-alert-dialog-footer>
        <button z-button zType="outline" z-alert-dialog-close>Cancel</button>
        <button z-button z-alert-dialog-close>Continue</button>
      </z-alert-dialog-footer>
    </z-alert-dialog>`,
  }),
}

export const Destructive: Story = {
  render: () => ({
    props: { open: false },
    template: `<button z-button zType="destructive" (click)="open = true">Delete chat</button>
    <z-alert-dialog [(zVisible)]="open">
      <z-alert-dialog-header>
        <z-alert-dialog-title>Delete chat?</z-alert-dialog-title>
        <z-alert-dialog-description>This will permanently delete this chat conversation.</z-alert-dialog-description>
      </z-alert-dialog-header>
      <z-alert-dialog-footer>
        <button z-button zType="outline" z-alert-dialog-close>Cancel</button>
        <button z-button zType="destructive" z-alert-dialog-close>Delete</button>
      </z-alert-dialog-footer>
    </z-alert-dialog>`,
  }),
}
