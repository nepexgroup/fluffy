import { preset } from '@fluffy/theme'

/** @type {import('tailwindcss').Config} */
export default {
  presets: [preset],
  content: [
    './stories/**/*.{ts,tsx}',
    '../../packages/react/src/**/*.{tsx,ts}',
    '../../packages/core/src/**/*.ts',
  ],
}
