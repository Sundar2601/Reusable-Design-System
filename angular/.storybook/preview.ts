import type { Preview } from '@storybook/angular'

const preview: Preview = {
  decorators: [
    (story, context) => {
      document.documentElement.classList.toggle('dark', context.globals['theme'] === 'dark')
      document.body.classList.add('bg-background', 'text-foreground', 'font-sans')
      document.body.style.padding = '24px'
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
