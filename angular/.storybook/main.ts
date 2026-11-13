import type { StorybookConfig } from '@storybook/angular'

const config: StorybookConfig = {
  stories: ['../src/docs/**/*.mdx', '../src/stories/**/*.stories.ts'],
  addons: ['@storybook/addon-docs', '@storybook/addon-a11y'],
  framework: '@storybook/angular',
  features: { sidebarOnboardingChecklist: false },
}
export default config
