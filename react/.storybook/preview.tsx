import type { Decorator, Preview } from '@storybook/react-vite'
import '../src/index.css'

/** Light is the default. "Dark" adds the .dark class, same as in apps. */
const withTheme: Decorator = (Story, context) => {
  const theme = context.globals.theme as 'light' | 'dark'
  document.documentElement.classList.toggle('dark', theme === 'dark')
  return (
    <div className="bg-background text-foreground p-6 font-sans">
      <Story />
    </div>
  )
}

const preview: Preview = {
  decorators: [withTheme],
  globalTypes: {
    theme: {
      description: 'Theme',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: { theme: 'light' },
  parameters: {
    layout: 'fullscreen',
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    a11y: { test: 'todo' },
  },
}

export default preview
