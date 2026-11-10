import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { ZardInputComponent } from '@/shared/components/input'
import { ZardTextareaComponent } from '@/shared/components/textarea'
import { ZardFieldImports } from '@/shared/components/field/field.imports'
import { ZardFieldComponent } from '@/shared/components/field/field.component'

const meta: Meta<ZardFieldComponent> = {
  title: 'Form Field',
  component: ZardFieldComponent,
  tags: ['autodocs'],
  decorators: [moduleMetadata({ imports: [...ZardFieldImports, ZardInputComponent, ZardTextareaComponent] })],
  parameters: { docs: { description: { component: 'Form Field, built from the ZardUI Field: label, control, description and an error message. The React FormField wires ids and aria for you; in Angular set `for` / `id` and `aria-invalid` yourself.' } } },
  render: () => ({
    template: `<z-field class="w-80">
      <label z-field-label for="ff-email">Email</label>
      <input z-input id="ff-email" placeholder="you@example.com" aria-describedby="ff-email-d" />
      <p z-field-description id="ff-email-d">We never share it.</p>
    </z-field>`,
  }),
}
export default meta
type Story = StoryObj<ZardFieldComponent>

export const Default: Story = {}
export const Required: Story = {
  render: () => ({
    template: `<z-field class="w-80">
      <label z-field-label for="ff-req">Email <span class="text-text-destructive">*</span></label>
      <input z-input id="ff-req" placeholder="you@example.com" required />
    </z-field>`,
  }),
}
export const WithError: Story = {
  render: () => ({
    template: `<z-field class="w-80">
      <label z-field-label for="ff-err">Email</label>
      <input z-input id="ff-err" aria-invalid="true" aria-describedby="ff-err-d" value="not-an-email" />
      <p id="ff-err-d" role="alert" class="text-sm text-text-destructive">Enter a valid email address.</p>
    </z-field>`,
  }),
}
export const Disabled: Story = {
  render: () => ({
    template: `<z-field class="w-80 opacity-50">
      <label z-field-label for="ff-dis">Email</label>
      <input z-input id="ff-dis" disabled />
    </z-field>`,
  }),
}
export const WithTextarea: Story = {
  render: () => ({
    template: `<z-field class="w-80">
      <label z-field-label for="ff-msg">Message</label>
      <textarea z-textarea id="ff-msg"></textarea>
      <p z-field-description>Up to 500 characters.</p>
    </z-field>`,
  }),
}
