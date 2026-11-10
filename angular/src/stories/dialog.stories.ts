import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { ZardButtonComponent } from '@/shared/components/button'
import { ZardDialogComponent, ZardDialogImports } from '@/shared/components/dialog'
import { ZardInputComponent } from '@/shared/components/input'

const meta: Meta<ZardDialogComponent> = {
  title: 'Dialog',
  component: ZardDialogComponent,
  tags: ['autodocs'],
  parameters: { layout: 'centered', docs: { description: { component: 'Dialog (ZardUI). Compose `z-dialog` in the template and bind `[(zVisible)]`; use `z-dialog-close` on any button to dismiss. `ZardDialogService.create()` opens the same panel from code. `zClosable` toggles the corner X.' } } },
  decorators: [moduleMetadata({ imports: [...ZardDialogImports, ZardButtonComponent, ZardInputComponent] })],
}
export default meta
type Story = StoryObj<ZardDialogComponent>

export const Default: Story = {
  render: () => ({
    props: { open: false },
    template: `<button z-button zType="outline" (click)="open = true">Edit profile</button>
    <z-dialog [(zVisible)]="open" zWidth="448px">
      <z-dialog-header>
        <z-dialog-title>Edit profile</z-dialog-title>
        <z-dialog-description>Make changes to your profile here. Click save when you are done.</z-dialog-description>
      </z-dialog-header>
      <div class="grid gap-3">
        <label class="text-sm font-medium">Name</label>
        <input z-input value="Pedro Duarte" />
        <label class="text-sm font-medium">Username</label>
        <input z-input value="@peduarte" />
      </div>
      <z-dialog-footer>
        <button z-button zType="outline" z-dialog-close>Cancel</button>
        <button z-button z-dialog-close>Save changes</button>
      </z-dialog-footer>
    </z-dialog>`,
  }),
}

export const NoCloseButton: Story = {
  render: () => ({
    props: { open: false },
    template: `<button z-button zType="outline" (click)="open = true">Open</button>
    <z-dialog [(zVisible)]="open" [zClosable]="false">
      <z-dialog-header>
        <z-dialog-title>No close button</z-dialog-title>
        <z-dialog-description>Use the footer action to dismiss this dialog.</z-dialog-description>
      </z-dialog-header>
      <z-dialog-footer><button z-button z-dialog-close>Got it</button></z-dialog-footer>
    </z-dialog>`,
  }),
}
