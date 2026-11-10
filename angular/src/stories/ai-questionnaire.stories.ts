import type { Meta, StoryObj } from '@storybook/angular'
import { moduleMetadata } from '@storybook/angular'
import { ZardQuestionnaireImports } from '@/shared/components/questionnaire/questionnaire.imports'
import { ZardQuestionnaireComponent } from '@/shared/components/questionnaire/questionnaire.component'

const body = `
  <z-questionnaire-item zName="tone" zRequired>
    <z-questionnaire-progress class="text-xs text-muted-foreground" />
    <z-questionnaire-title>Which tone should the answer use?</z-questionnaire-title>
    <z-questionnaire-description>Pick one.</z-questionnaire-description>
    <z-questionnaire-choices>
      <z-questionnaire-choice zValue="formal">Formal</z-questionnaire-choice>
      <z-questionnaire-choice zValue="friendly">Friendly</z-questionnaire-choice>
      <z-questionnaire-choice zValue="concise">Concise</z-questionnaire-choice>
    </z-questionnaire-choices>
  </z-questionnaire-item>
  <z-questionnaire-item zName="topics" zMultiple>
    <z-questionnaire-progress class="text-xs text-muted-foreground" />
    <z-questionnaire-title>Which topics should it cover?</z-questionnaire-title>
    <z-questionnaire-choices>
      <z-questionnaire-choice zValue="pricing">Pricing</z-questionnaire-choice>
      <z-questionnaire-choice zValue="security">Security</z-questionnaire-choice>
      <z-questionnaire-choice zValue="roadmap" zDisabled>Roadmap</z-questionnaire-choice>
    </z-questionnaire-choices>
  </z-questionnaire-item>
  <z-questionnaire-actions class="mt-4 flex justify-between gap-2">
    <button z-questionnaire-previous>Back</button>
    <span class="flex gap-2"><button z-questionnaire-skip>Skip</button><button z-questionnaire-next>Next</button><button z-questionnaire-submit>Submit</button></span>
  </z-questionnaire-actions>`

const meta: Meta<ZardQuestionnaireComponent> = {
  title: 'AI Elements/Questionnaire',
  component: ZardQuestionnaireComponent,
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Questionnaire (ZardUI). Same flow as the React Questionnaire: items with radio (single) or checkbox (`zMultiple`) choices, progress, Back / Skip / Next / Submit, `zShortcuts` none / letters / numbers.' } } },
  decorators: [moduleMetadata({ imports: [...ZardQuestionnaireImports] })],
  argTypes: { zShortcuts: { control: 'inline-radio', options: ['none', 'letters', 'numbers'] } },
  args: { zShortcuts: 'none' },
  render: (args) => ({
    props: args,
    template: `<z-questionnaire class="w-96 rounded-2xl border border-border bg-card p-4 text-sm" zActive="tone" [zShortcuts]="zShortcuts">${body}</z-questionnaire>`,
  }),
}
export default meta
type Story = StoryObj<ZardQuestionnaireComponent>

export const Default: Story = {}
export const WithShortcuts: Story = { args: { zShortcuts: 'numbers' } }
