import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { FormControl, ReactiveFormsModule } from '@angular/forms'
import { ZardInputOtpImports } from '@/shared/components/input-otp/input-otp.imports'
import { ZardInputOtpComponent } from '@/shared/components/input-otp/input-otp.component'

const meta: Meta<ZardInputOtpComponent> = {
  title: 'Input OTP',
  component: ZardInputOtpComponent,
  tags: ['autodocs'],
  decorators: [moduleMetadata({ imports: [...ZardInputOtpImports, ReactiveFormsModule] })],
  parameters: { docs: { description: { component: 'Input OTP (ZardUI). `z-input-otp` with `z-input-otp-group`, `z-input-otp-slot [zIndex]` and `z-input-otp-separator`, like the React InputOTP. `zMaxLength`, `zInvalid`, `zPattern`.' } } },
  render: () => ({
    template: `<z-input-otp [zMaxLength]="6">
      <z-input-otp-group>
        <z-input-otp-slot [zIndex]="0" /><z-input-otp-slot [zIndex]="1" /><z-input-otp-slot [zIndex]="2" />
        <z-input-otp-slot [zIndex]="3" /><z-input-otp-slot [zIndex]="4" /><z-input-otp-slot [zIndex]="5" />
      </z-input-otp-group>
    </z-input-otp>`,
  }),
}
export default meta
type Story = StoryObj<ZardInputOtpComponent>

export const Default: Story = {}
export const WithSeparator: Story = {
  render: () => ({
    template: `<z-input-otp [zMaxLength]="6">
      <z-input-otp-group><z-input-otp-slot [zIndex]="0" /><z-input-otp-slot [zIndex]="1" /><z-input-otp-slot [zIndex]="2" /></z-input-otp-group>
      <z-input-otp-separator />
      <z-input-otp-group><z-input-otp-slot [zIndex]="3" /><z-input-otp-slot [zIndex]="4" /><z-input-otp-slot [zIndex]="5" /></z-input-otp-group>
    </z-input-otp>`,
  }),
}
export const Invalid: Story = {
  render: () => ({
    template: `<z-input-otp [zMaxLength]="4" zInvalid>
      <z-input-otp-group><z-input-otp-slot [zIndex]="0" /><z-input-otp-slot [zIndex]="1" /><z-input-otp-slot [zIndex]="2" /><z-input-otp-slot [zIndex]="3" /></z-input-otp-group>
    </z-input-otp>`,
  }),
}
export const Disabled: Story = {
  render: () => ({
    props: { control: new FormControl({ value: '', disabled: true }) },
    template: `<z-input-otp [zMaxLength]="4" [formControl]="control">
      <z-input-otp-group><z-input-otp-slot [zIndex]="0" /><z-input-otp-slot [zIndex]="1" /><z-input-otp-slot [zIndex]="2" /><z-input-otp-slot [zIndex]="3" /></z-input-otp-group>
    </z-input-otp>`,
  }),
}
