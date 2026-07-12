import type { Config } from 'tailwindcss'
import forms from '@tailwindcss/forms'

/**
 * Fluffy Tailwind preset (frappe-ui style).
 *
 * Adds semantic color groups backed by CSS variables from tokens.css:
 *   bg-surface-gray-2, text-ink-gray-8, border-outline-gray-2, ...
 * and a compact font scale (base = 14px) matching frappe-ui.
 */

const gray = {
  50: 'var(--f-gray-50)',
  100: 'var(--f-gray-100)',
  200: 'var(--f-gray-200)',
  300: 'var(--f-gray-300)',
  400: 'var(--f-gray-400)',
  500: 'var(--f-gray-500)',
  600: 'var(--f-gray-600)',
  700: 'var(--f-gray-700)',
  800: 'var(--f-gray-800)',
  900: 'var(--f-gray-900)',
}

const scale = (name: string) => ({
  50: `var(--f-${name}-50)`,
  100: `var(--f-${name}-100)`,
  200: `var(--f-${name}-200)`,
  300: `var(--f-${name}-300)`,
  400: `var(--f-${name}-400)`,
  500: `var(--f-${name}-500)`,
  600: `var(--f-${name}-600)`,
  700: `var(--f-${name}-700)`,
  800: `var(--f-${name}-800)`,
  900: `var(--f-${name}-900)`,
})

const surface = {
  white: 'var(--surface-white)',
  'gray-1': 'var(--surface-gray-1)',
  'gray-2': 'var(--surface-gray-2)',
  'gray-3': 'var(--surface-gray-3)',
  'gray-4': 'var(--surface-gray-4)',
  'gray-5': 'var(--surface-gray-5)',
  'gray-6': 'var(--surface-gray-6)',
  'gray-7': 'var(--surface-gray-7)',
  black: 'var(--surface-black)',
  modal: 'var(--surface-modal)',
  'menu-bar': 'var(--surface-menu-bar)',
  selected: 'var(--surface-selected)',
  'blue-1': 'var(--surface-blue-1)',
  'blue-2': 'var(--surface-blue-2)',
  'green-1': 'var(--surface-green-1)',
  'green-2': 'var(--surface-green-2)',
  'red-1': 'var(--surface-red-1)',
  'red-2': 'var(--surface-red-2)',
  'amber-1': 'var(--surface-amber-1)',
  'amber-2': 'var(--surface-amber-2)',
}

const ink = {
  white: 'var(--ink-white)',
  'gray-1': 'var(--ink-gray-1)',
  'gray-2': 'var(--ink-gray-2)',
  'gray-3': 'var(--ink-gray-3)',
  'gray-4': 'var(--ink-gray-4)',
  'gray-5': 'var(--ink-gray-5)',
  'gray-6': 'var(--ink-gray-6)',
  'gray-7': 'var(--ink-gray-7)',
  'gray-8': 'var(--ink-gray-8)',
  'gray-9': 'var(--ink-gray-9)',
  'blue-1': 'var(--ink-blue-1)',
  'blue-2': 'var(--ink-blue-2)',
  'blue-3': 'var(--ink-blue-3)',
  'green-1': 'var(--ink-green-1)',
  'green-2': 'var(--ink-green-2)',
  'red-1': 'var(--ink-red-1)',
  'red-2': 'var(--ink-red-2)',
  'amber-1': 'var(--ink-amber-1)',
  'amber-2': 'var(--ink-amber-2)',
}

const outline = {
  'gray-1': 'var(--outline-gray-1)',
  'gray-2': 'var(--outline-gray-2)',
  'gray-3': 'var(--outline-gray-3)',
  'gray-4': 'var(--outline-gray-4)',
  'gray-5': 'var(--outline-gray-5)',
  modal: 'var(--outline-modal)',
  blue: 'var(--outline-blue)',
  green: 'var(--outline-green)',
  red: 'var(--outline-red)',
  amber: 'var(--outline-amber)',
}

export const preset: Partial<Config> = {
  plugins: [forms({ strategy: 'class' })],
  theme: {
    fontSize: {
      '2xs': ['0.6875rem', { lineHeight: '1.35' }],
      xs: ['0.75rem', { lineHeight: '1.35' }],
      sm: ['0.8125rem', { lineHeight: '1.42' }],
      base: ['0.875rem', { lineHeight: '1.5' }],
      lg: ['1rem', { lineHeight: '1.5' }],
      xl: ['1.125rem', { lineHeight: '1.4' }],
      '2xl': ['1.25rem', { lineHeight: '1.35' }],
      '3xl': ['1.5rem', { lineHeight: '1.3' }],
      '4xl': ['1.875rem', { lineHeight: '1.25' }],
    },
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      colors: {
        gray,
        blue: scale('blue'),
        green: scale('green'),
        red: scale('red'),
        amber: scale('amber'),
        surface,
        ink,
        outline,
      },
      boxShadow: {
        modal:
          '0px 8px 24px rgba(0, 0, 0, 0.12), 0px 2px 6px rgba(0, 0, 0, 0.06)',
        popover:
          '0px 4px 12px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.06)',
      },
    },
  },
}

export default preset
