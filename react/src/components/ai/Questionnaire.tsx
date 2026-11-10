import * as React from 'react'
import { cn } from '@/lib/utils'
import { Button } from '../Button'

/**
 * Questionnaire. Figma "Questionnaire": a short multi-step form an assistant shows to gather answers.
 *   <Questionnaire
 *     items={[{ name: 'tone', title: 'Which tone?', choices: [{ value: 'formal', label: 'Formal' }] }]}
 *     onSubmit={(answers) => ...}
 *   />
 * - Item `multiple` renders checkboxes (answer is `string[]`), otherwise radios (answer is `string`).
 * - Item `allowCustom` adds a free text "Other" field. `required` blocks Next until answered.
 * - Controlled `active` / `onActiveChange` for the step, or uncontrolled.
 */
export type QuestionnaireAnswer = string | string[]
export type QuestionnaireAnswers = Record<string, QuestionnaireAnswer>

export interface QuestionnaireChoice {
  value: string
  label?: React.ReactNode
  description?: React.ReactNode
  disabled?: boolean
}

export interface QuestionnaireItem {
  name: string
  title: React.ReactNode
  description?: React.ReactNode
  choices?: QuestionnaireChoice[]
  multiple?: boolean
  required?: boolean
  /** Adds a free text field. */
  allowCustom?: boolean
}

export interface QuestionnaireProps extends Omit<React.ComponentProps<'form'>, 'onSubmit' | 'title'> {
  items: QuestionnaireItem[]
  active?: string
  onActiveChange?: (name: string) => void
  /** Show 1-9 / A-Z shortcut hints next to the choices. */
  shortcuts?: 'none' | 'numbers' | 'letters'
  submitLabel?: string
  onSubmit?: (answers: QuestionnaireAnswers) => void
}

function Questionnaire({
  className,
  items,
  active,
  onActiveChange,
  shortcuts = 'none',
  submitLabel = 'Submit',
  onSubmit,
  ...props
}: QuestionnaireProps) {
  const [innerActive, setInnerActive] = React.useState(items[0]?.name)
  const [answers, setAnswers] = React.useState<QuestionnaireAnswers>({})
  const currentName = active ?? innerActive
  const index = Math.max(0, items.findIndex((i) => i.name === currentName))
  const item = items[index]
  if (!item) return null
  const isLast = index === items.length - 1
  const answer = answers[item.name]
  const answered = Array.isArray(answer) ? answer.length > 0 : !!answer
  const goTo = (i: number) => {
    const name = items[i]?.name
    if (!name) return
    setInnerActive(name)
    onActiveChange?.(name)
  }
  const setAnswer = (value: QuestionnaireAnswer) => setAnswers((a) => ({ ...a, [item.name]: value }))
  const shortcut = (i: number) => (shortcuts === 'numbers' ? String(i + 1) : shortcuts === 'letters' ? String.fromCharCode(65 + i) : null)

  return (
    <form
      data-slot="questionnaire"
      onSubmit={(event) => {
        event.preventDefault()
        if (isLast) onSubmit?.(answers)
        else goTo(index + 1)
      }}
      className={cn('flex w-full max-w-md flex-col gap-4 rounded-2xl bg-card p-4 text-sm text-card-foreground inset-ring-1 inset-ring-border', className)}
      {...props}
    >
      <fieldset data-slot="questionnaire-item" className="flex min-w-0 flex-col gap-3 border-0 p-0">
        <div className="flex items-baseline justify-between gap-2">
          <legend data-slot="questionnaire-title" className="font-medium text-foreground">
            {item.title}
          </legend>
          <span data-slot="questionnaire-progress" role="progressbar" aria-valuemin={1} aria-valuemax={items.length} aria-valuenow={index + 1} className="shrink-0 text-xs text-muted-foreground">
            {index + 1} of {items.length}
          </span>
        </div>
        {item.description ? <p data-slot="questionnaire-description" className="text-muted-foreground">{item.description}</p> : null}
        <div data-slot="questionnaire-choices" className="flex flex-col gap-1.5">
          {(item.choices ?? []).map((choice, i) => {
            const checked = Array.isArray(answer) ? answer.includes(choice.value) : answer === choice.value
            return (
              <label
                key={choice.value}
                data-slot="questionnaire-choice"
                data-checked={checked || undefined}
                data-disabled={choice.disabled || undefined}
                className="group/choice flex cursor-pointer items-start gap-2.5 rounded-lg px-2.5 py-2 inset-ring-1 inset-ring-border transition-colors hover:bg-muted has-[:focus-visible]:inset-ring-ring data-[checked]:bg-muted data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
              >
                <input
                  type={item.multiple ? 'checkbox' : 'radio'}
                  name={item.name}
                  value={choice.value}
                  checked={checked}
                  disabled={choice.disabled}
                  onChange={() => {
                    if (item.multiple) {
                      const list = Array.isArray(answer) ? answer : []
                      setAnswer(checked ? list.filter((v) => v !== choice.value) : [...list, choice.value])
                    } else setAnswer(choice.value)
                  }}
                  className="mt-0.5 size-4 shrink-0 accent-primary"
                />
                <span className="flex min-w-0 flex-1 flex-col">
                  <span className="text-foreground">{choice.label ?? choice.value}</span>
                  {choice.description ? <span className="text-xs text-muted-foreground">{choice.description}</span> : null}
                </span>
                {shortcut(i) ? <kbd aria-hidden="true" className="rounded-sm bg-muted px-1.5 text-xs text-muted-foreground">{shortcut(i)}</kbd> : null}
              </label>
            )
          })}
          {item.allowCustom ? (
            <input
              data-slot="questionnaire-input"
              type="text"
              aria-label="Other"
              placeholder="Other"
              onChange={(event) => setAnswer(item.multiple ? [event.target.value].filter(Boolean) : event.target.value)}
              className="h-8 rounded-lg bg-background px-2.5 text-sm inset-ring-1 inset-ring-border outline-none placeholder:text-muted-foreground focus-visible:inset-ring-ring focus-visible:shadow-focus-ring"
            />
          ) : null}
        </div>
      </fieldset>
      <div data-slot="questionnaire-actions" className="flex items-center justify-between gap-2">
        <Button type="button" variant="ghost" size="sm" disabled={index === 0} onClick={() => goTo(index - 1)}>
          Back
        </Button>
        <div className="flex items-center gap-2">
          {!item.required && !isLast ? (
            <Button type="button" variant="ghost" size="sm" onClick={() => goTo(index + 1)}>
              Skip
            </Button>
          ) : null}
          <Button type="submit" size="sm" disabled={item.required && !answered}>
            {isLast ? submitLabel : 'Next'}
          </Button>
        </div>
      </div>
    </form>
  )
}

export { Questionnaire }
