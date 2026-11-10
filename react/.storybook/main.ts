import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-vitest',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-mcp',
  ],
  framework: '@storybook/react-vite',
  // One catalog: React is the host, the Angular Storybook is composed in as a second source.
  // Dev: run `npm run storybook:all` (Angular on :6007, via a CORS proxy on :6008). Build: Angular is built into ./storybook-static/angular.
  refs: (_config, { configType }) => ({
    angular: {
      title: 'Angular',
      url: configType === 'DEVELOPMENT' ? 'http://localhost:6008' : './angular',
    },
  }),
}
export default config
