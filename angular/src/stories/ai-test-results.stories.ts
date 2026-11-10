import type { Meta, StoryObj } from '@storybook/angular'
import { AiTestResultsComponent } from '@/shared/extended/ai-test-results.component'

const meta: Meta<AiTestResultsComponent> = {
  title: 'AI Elements/Test Results',
  component: AiTestResultsComponent,
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Test Results (extended, hand-built from ZardUI parts). Same API as the React TestResults: suites with passed / failed / skipped tests.' } } },
}
export default meta
type Story = StoryObj<AiTestResultsComponent>

const suites = [
  { name: 'Button.test.tsx', tests: [
    { name: 'renders label', status: 'passed' as const, duration: 12 },
    { name: 'fires onClick', status: 'passed' as const, duration: 8 },
    { name: 'is disabled when loading', status: 'skipped' as const },
  ] },
  { name: 'Input.test.tsx', tests: [
    { name: 'accepts typed text', status: 'passed' as const, duration: 21 },
    { name: 'shows error state', status: 'failed' as const, duration: 15, error: 'Expected aria-invalid to be "true" but received "false"' },
  ] },
]

export const Default: Story = {
  render: () => ({ props: { suites }, template: `<div class="w-[520px]"><ui-ai-test-results [suites]="suites" /></div>` }),
}
export const AllPassing: Story = {
  render: () => ({
    props: { suites: [{ name: 'utils.test.ts', tests: [{ name: 'cn merges classes', status: 'passed' as const, duration: 3 }] }] },
    template: `<div class="w-[520px]"><ui-ai-test-results [suites]="suites" /></div>`,
  }),
}
