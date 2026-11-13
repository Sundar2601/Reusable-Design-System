import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { JsonPipe } from '@angular/common'
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { ZardButtonComponent } from '@/shared/components/button'
import { ZardInputComponent } from '@/shared/components/input'

/**
 * Angular forms. The React stories show React Hook Form, TanStack Form and Formisch; in Angular the
 * built-in Reactive Forms play that role. Bind `aria-invalid` to the control's state and show the
 * message under the field.
 */
const meta: Meta = {
  title: 'Forms/Reactive Forms',
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'The same sign-up form as the React library stories, on Angular Reactive Forms.' } } },
  decorators: [moduleMetadata({ imports: [JsonPipe, ReactiveFormsModule, ZardButtonComponent, ZardInputComponent] })],
}
export default meta
type Story = StoryObj

export const SignUp: Story = {
  render: () => ({
    props: {
      form: new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      }),
      result: null as unknown,
      submit(this: { form: FormGroup; result: unknown }) {
        this.form.markAllAsTouched()
        this.result = this.form.valid ? this.form.value : null
      },
    },
    template: `
      <form [formGroup]="form" (ngSubmit)="submit()" novalidate class="flex w-80 flex-col gap-4">
        <div class="flex flex-col gap-2">
          <label for="rf-email" class="text-sm font-medium">Email <span aria-hidden="true" class="text-text-destructive">*</span></label>
          <input z-input id="rf-email" type="email" formControlName="email" aria-describedby="rf-email-desc"
                 [attr.aria-invalid]="form.controls['email'].touched && form.controls['email'].invalid" />
          <p id="rf-email-desc" class="text-sm" [class.text-text-destructive]="form.controls['email'].touched && form.controls['email'].invalid"
             [class.text-muted-foreground]="!(form.controls['email'].touched && form.controls['email'].invalid)">
            {{ form.controls['email'].touched && form.controls['email'].errors?.['required'] ? 'Email is required.' : form.controls['email'].touched && form.controls['email'].invalid ? 'Enter a valid email.' : 'We never share it.' }}
          </p>
        </div>
        <div class="flex flex-col gap-2">
          <label for="rf-password" class="text-sm font-medium">Password <span aria-hidden="true" class="text-text-destructive">*</span></label>
          <input z-input id="rf-password" type="password" formControlName="password" aria-describedby="rf-password-desc"
                 [attr.aria-invalid]="form.controls['password'].touched && form.controls['password'].invalid" />
          <p id="rf-password-desc" class="text-sm" [class.text-text-destructive]="form.controls['password'].touched && form.controls['password'].invalid"
             [class.text-muted-foreground]="!(form.controls['password'].touched && form.controls['password'].invalid)">
            {{ form.controls['password'].touched && form.controls['password'].errors?.['required'] ? 'Password is required.' : form.controls['password'].touched && form.controls['password'].invalid ? 'Use at least 8 characters.' : 'At least 8 characters.' }}
          </p>
        </div>
        <button z-button type="submit">Create account</button>
        @if (result) { <pre class="rounded-md bg-muted p-3 text-xs" role="status">{{ result | json }}</pre> }
      </form>`,
  }),
}
