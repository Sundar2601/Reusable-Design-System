import * as React from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { useForm as useRhf } from 'react-hook-form'
import { useForm as useTanstackForm } from '@tanstack/react-form'
import { Field as FormischField, Form as FormischForm, useForm as useFormisch } from '@formisch/react'
import * as v from 'valibot'
import { Button } from '../Button'
import { Field, FieldDescription, FieldLabel } from '../Field'
import { Input } from '../Input'

/**
 * The design-system Field, FieldLabel, Input and FieldDescription work with any form library.
 * Wire the library's error state to `aria-invalid` on the Input and show the message in a
 * FieldDescription. Each story below is the same sign-up form on a different library.
 */
const meta = {
  title: 'Forms/Libraries',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'The same sign-up form built with React Hook Form, TanStack Form and Formisch. The components are unchanged: errors go to `aria-invalid` and a message under the field.',
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

function Result({ value }: { value: unknown }) {
  if (!value) return null
  return <pre className="rounded-md bg-muted p-3 text-xs" role="status">{JSON.stringify(value, null, 2)}</pre>
}

const emailError = (value: string) => (!value ? 'Email is required.' : !/^\S+@\S+\.\S+$/.test(value) ? 'Enter a valid email.' : undefined)
const passwordError = (value: string) => (!value ? 'Password is required.' : value.length < 8 ? 'Use at least 8 characters.' : undefined)

function FieldRow({ id, label, type, error, hint, inputProps }: {
  id: string
  label: string
  type?: string
  error?: string
  hint: string
  inputProps: React.ComponentProps<typeof Input>
}) {
  return (
    <Field>
      <FieldLabel htmlFor={id} required>{label}</FieldLabel>
      <Input id={id} type={type} aria-invalid={!!error} aria-describedby={`${id}-desc`} {...inputProps} />
      <FieldDescription id={`${id}-desc`} className={error ? 'text-text-destructive' : undefined}>{error ?? hint}</FieldDescription>
    </Field>
  )
}

function RhfForm() {
  const [result, setResult] = React.useState<unknown>()
  const { register, handleSubmit, formState: { errors } } = useRhf<{ email: string; password: string }>({ defaultValues: { email: '', password: '' } })
  return (
    <form noValidate onSubmit={handleSubmit((data) => setResult(data))} className="flex w-80 flex-col gap-4">
      <FieldRow id="rhf-email" label="Email" type="email" hint="We never share it." error={errors.email?.message} inputProps={register('email', { validate: (x) => emailError(x) ?? true })} />
      <FieldRow id="rhf-password" label="Password" type="password" hint="At least 8 characters." error={errors.password?.message} inputProps={register('password', { validate: (x) => passwordError(x) ?? true })} />
      <Button type="submit">Create account</Button>
      <Result value={result} />
    </form>
  )
}

function TanstackFormExample() {
  const [result, setResult] = React.useState<unknown>()
  const form = useTanstackForm({
    defaultValues: { email: '', password: '' },
    onSubmit: ({ value }) => setResult(value),
  })
  return (
    <form
      noValidate
      onSubmit={(e) => {
        e.preventDefault()
        void form.handleSubmit()
      }}
      className="flex w-80 flex-col gap-4"
    >
      <form.Field name="email" validators={{ onBlur: ({ value }) => emailError(value), onSubmit: ({ value }) => emailError(value) }}>
        {(field) => (
          <FieldRow id="tsf-email" label="Email" type="email" hint="We never share it." error={field.state.meta.errors[0] as string | undefined}
            inputProps={{ name: field.name, value: field.state.value, onBlur: field.handleBlur, onChange: (e) => field.handleChange(e.target.value) }} />
        )}
      </form.Field>
      <form.Field name="password" validators={{ onBlur: ({ value }) => passwordError(value), onSubmit: ({ value }) => passwordError(value) }}>
        {(field) => (
          <FieldRow id="tsf-password" label="Password" type="password" hint="At least 8 characters." error={field.state.meta.errors[0] as string | undefined}
            inputProps={{ name: field.name, value: field.state.value, onBlur: field.handleBlur, onChange: (e) => field.handleChange(e.target.value) }} />
        )}
      </form.Field>
      <Button type="submit">Create account</Button>
      <Result value={result} />
    </form>
  )
}

const schema = v.object({
  email: v.pipe(v.string(), v.nonEmpty('Email is required.'), v.email('Enter a valid email.')),
  password: v.pipe(v.string(), v.nonEmpty('Password is required.'), v.minLength(8, 'Use at least 8 characters.')),
})

function FormischExample() {
  const [result, setResult] = React.useState<unknown>()
  const form = useFormisch({ schema })
  return (
    <FormischForm of={form} onSubmit={(output) => setResult(output)} className="flex w-80 flex-col gap-4">
      <FormischField of={form} path={['email']}>
        {(field) => (
          <FieldRow id="fm-email" label="Email" type="email" hint="We never share it." error={field.errors?.[0]}
            inputProps={{ ...field.props, value: field.input ?? '' }} />
        )}
      </FormischField>
      <FormischField of={form} path={['password']}>
        {(field) => (
          <FieldRow id="fm-password" label="Password" type="password" hint="At least 8 characters." error={field.errors?.[0]}
            inputProps={{ ...field.props, value: field.input ?? '' }} />
        )}
      </FormischField>
      <Button type="submit">Create account</Button>
      <Result value={result} />
    </FormischForm>
  )
}

export const ReactHookForm: Story = { name: 'React Hook Form', render: () => <RhfForm /> }
export const TanStackForm: Story = { name: 'TanStack Form', render: () => <TanstackFormExample /> }
export const Formisch: Story = { render: () => <FormischExample /> }
