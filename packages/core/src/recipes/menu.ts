import { cva, type VariantProps } from 'class-variance-authority'

/** Floating panel shared by Dropdown, Autocomplete, Combobox, CommandPalette results. */
export const menuPanelClass =
  'z-50 min-w-40 rounded-lg border border-outline-gray-1 bg-surface-modal p-1 shadow-popover focus:outline-none'

export const menuGroupLabelClass =
  'px-2 pb-1 pt-2 text-xs font-medium uppercase tracking-wide text-ink-gray-5'

export const menuItemVariants = cva(
  [
    'flex w-full cursor-pointer select-none items-center gap-2 rounded px-2 py-1.5 text-base',
    'transition-colors duration-75',
  ],
  {
    variants: {
      active: {
        true: '',
        false: '',
      },
      danger: {
        true: 'text-ink-red-2',
        false: 'text-ink-gray-7',
      },
      disabled: {
        true: 'cursor-not-allowed text-ink-gray-4',
        false: '',
      },
      selected: {
        true: 'bg-surface-gray-2 font-medium text-ink-gray-9',
        false: '',
      },
    },
    compoundVariants: [
      { active: true, danger: false, disabled: false, class: 'bg-surface-gray-3 text-ink-gray-9' },
      { active: true, danger: true, disabled: false, class: 'bg-surface-red-1' },
    ],
    defaultVariants: { active: false, danger: false, disabled: false, selected: false },
  },
)

export const menuItemIconClass = 'h-4 w-4 shrink-0 text-ink-gray-6'
export const menuSeparatorClass = 'my-1 h-px bg-outline-gray-1'
export const menuEmptyClass = 'px-2 py-6 text-center text-sm text-ink-gray-5'

export type MenuItemVariantProps = VariantProps<typeof menuItemVariants>
