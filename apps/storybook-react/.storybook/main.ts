import { fileURLToPath } from 'node:url'
import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  framework: '@storybook/react-vite',
  stories: ['../stories/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-essentials'],
  // Composition: this Storybook is the host; the Vue Storybook shows up
  // alongside under "Fluffy Vue".
  refs: {
    'fluffy-vue': {
      title: 'Fluffy Vue',
      url: 'http://localhost:6006',
    },
  },
  async viteFinal(viteConfig) {
    viteConfig.resolve ??= {}
    viteConfig.resolve.alias = {
      ...viteConfig.resolve.alias,
      // Point at package sources so Storybook dev needs no package build
      '@fluffy/react': fileURLToPath(
        new URL('../../../packages/react/src/index.ts', import.meta.url),
      ),
      '@fluffy/core': fileURLToPath(
        new URL('../../../packages/core/src/index.ts', import.meta.url),
      ),
    }
    return viteConfig
  },
}

export default config
