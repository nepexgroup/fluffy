import { preset } from '@fluffy/theme'

/** @type {import('tailwindcss').Config} */
export default {
  presets: [preset],
  content: [
    './stories/**/*.{ts,js,vue}',
    '../../packages/vue/src/**/*.{vue,ts}',
    '../../packages/core/src/**/*.ts',
  ],
}
