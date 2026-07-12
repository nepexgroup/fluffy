import { fileURLToPath } from 'node:url'
import type { StorybookConfig } from '@storybook/vue3-vite'
import vue from '@vitejs/plugin-vue'

const config: StorybookConfig = {
  framework: '@storybook/vue3-vite',
  stories: ['../stories/**/*.stories.@(ts|js)'],
  addons: ['@storybook/addon-essentials'],
  async viteFinal(viteConfig) {
    const plugins = (viteConfig.plugins ?? []).flat()
    const hasVuePlugin = plugins.some(
      (plugin) =>
        plugin && typeof plugin === 'object' && 'name' in plugin && plugin.name === 'vite:vue',
    )
    if (!hasVuePlugin) {
      viteConfig.plugins = [...plugins, vue()]
    }
    viteConfig.resolve ??= {}
    viteConfig.resolve.alias = {
      ...viteConfig.resolve.alias,
      // Point at package sources so Storybook dev needs no package build
      '@fluffy/vue': fileURLToPath(
        new URL('../../../packages/vue/src/index.ts', import.meta.url),
      ),
      '@fluffy/core': fileURLToPath(
        new URL('../../../packages/core/src/index.ts', import.meta.url),
      ),
    }
    return viteConfig
  },
}

export default config
