import { applicationConfig, componentWrapperDecorator, type Preview } from '@storybook/angular'
import { provideZard } from '../src/app/shared/core/provider/providezard'

const preview: Preview = {
  decorators: [
    applicationConfig({ providers: [provideZard()] }),
    // Padding around every story, also in the docs page, to match the React catalog.
    componentWrapperDecorator((story) => `<div class="p-6">${story}</div>`),
    (story, context) => {
      document.documentElement.classList.toggle('dark', context.globals['theme'] === 'dark')
      document.body.classList.add('bg-background', 'text-foreground', 'font-sans')
      return story()
    },
  ],
  globalTypes: {
    theme: {
      description: 'Theme',
      toolbar: { title: 'Theme', icon: 'circlehollow', items: [{ value: 'light', title: 'Light' }, { value: 'dark', title: 'Dark' }], dynamicTitle: true },
    },
  },
  initialGlobals: { theme: 'light' },
  parameters: { layout: 'fullscreen', a11y: { test: 'todo' } },
}
export default preview
