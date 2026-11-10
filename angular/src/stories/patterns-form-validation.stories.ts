import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { ZardAlertComponent } from '@/shared/components/alert'
import { ZardButtonComponent } from '@/shared/components/button'
import { ZardInputComponent } from '@/shared/components/input'
import { ZardFieldImports } from '@/shared/components/field/field.imports'

const meta: Meta = {
  title: 'Patterns/Form validation',
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Form validation pattern (ZardUI): field + input with inline errors, an optional summary alert, and a success state.' } } },
  decorators: [moduleMetadata({ imports: [...ZardFieldImports, ZardInputComponent, ZardAlertComponent, ZardButtonComponent] })],
}
export default meta
type Story = StoryObj

export const InlineErrors: Story = {
  render: () => ({
    template: `<form class="flex w-80 flex-col gap-4">
      <z-field>
        <label z-field-label for="e1">Email <span class="text-text-destructive">*</span></label>
        <input z-input id="e1" type="email" value="ada@" aria-invalid="true" aria-describedby="e1-err" />
        <p id="e1-err" role="alert" class="text-sm text-text-destructive">Enter a valid email address.</p>
      </z-field>
      <z-field>
        <label z-field-label for="p1">Password <span class="text-text-destructive">*</span></label>
        <input z-input id="p1" type="password" value="abc" aria-invalid="true" aria-describedby="p1-err" />
        <p id="p1-err" role="alert" class="text-sm text-text-destructive">Password is too short.</p>
      </z-field>
      <button z-button type="button">Create account</button>
    </form>`,
  }),
}
export const SummaryAlert: Story = {
  render: () => ({
    template: `<form class="flex w-96 flex-col gap-4">
      <z-alert zType="destructive" zTitle="There are 2 problems with your submission" zDescription="Fix the highlighted fields and try again." />
      <z-field>
        <label z-field-label for="n2">Full name <span class="text-text-destructive">*</span></label>
        <input z-input id="n2" aria-invalid="true" />
        <p role="alert" class="text-sm text-text-destructive">Name is required.</p>
      </z-field>
      <z-field>
        <label z-field-label for="e2">Email <span class="text-text-destructive">*</span></label>
        <input z-input id="e2" value="ada@" aria-invalid="true" />
        <p role="alert" class="text-sm text-text-destructive">Enter a valid email address.</p>
      </z-field>
      <button z-button type="button">Submit</button>
    </form>`,
  }),
}
export const SuccessState: Story = {
  render: () => ({
    template: `<form class="flex w-96 flex-col gap-4">
      <z-alert zTitle="Profile saved" zDescription="Your changes have been applied." />
      <z-field><label z-field-label for="n3">Full name</label><input z-input id="n3" value="Ada Lovelace" /></z-field>
      <z-field><label z-field-label for="e3">Email</label><input z-input id="e3" value="ada@example.com" /></z-field>
      <button z-button type="button">Save changes</button>
    </form>`,
  }),
}
