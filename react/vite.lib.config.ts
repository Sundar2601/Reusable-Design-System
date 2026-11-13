/**
 * Library build for `@bounteous/ui` (npm run build:lib). Separate from the app and Storybook builds.
 * Output: dist-lib/index.js (ESM). Type declarations come from tsconfig.lib.json (see the build:lib script). CSS is not bundled; consumers import
 * `@bounteous/ui/theme.css` (see docs/MIGRATION.md).
 */
import path from 'node:path'
import { readFileSync } from 'node:fs'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const pkg = JSON.parse(readFileSync(new URL('./package.json', import.meta.url), 'utf8'))
// Everything the package depends on stays external; the consumer installs it through our `dependencies`.
const externals = [...Object.keys(pkg.dependencies ?? {}), ...Object.keys(pkg.peerDependencies ?? {}), 'react/jsx-runtime']
const isExternal = (id: string) => externals.some((dep) => id === dep || id.startsWith(dep + '/'))

export default defineConfig({
  plugins: [
    react(),
  ],
  resolve: { alias: { '@': path.resolve(import.meta.dirname, './src') } },
  build: {
    outDir: 'dist-lib',
    emptyOutDir: true,
    sourcemap: true,
    lib: { entry: path.resolve(import.meta.dirname, 'src/index.ts'), formats: ['es'], fileName: 'index' },
    rollupOptions: { external: isExternal, output: { preserveModules: false } },
  },
})
