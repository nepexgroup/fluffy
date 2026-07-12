import { cva, type VariantProps } from 'class-variance-authority'

export const tabListClass =
  'flex items-center gap-5 border-b border-outline-gray-1 px-0.5'

export const tabButtonVariants = cva(
  [
    '-mb-px flex items-center gap-1.5 border-b border-transparent py-2.5 text-base transition-colors duration-150',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-outline-gray-3 rounded-t-sm',
    'disabled:cursor-not-allowed disabled:text-ink-gray-4',
  ],
  {
    variants: {
      active: {
        true: 'border-surface-gray-7 font-medium text-ink-gray-9',
        false: 'text-ink-gray-6 hover:border-outline-gray-3 hover:text-ink-gray-8',
      },
    },
    defaultVariants: { active: false },
  },
)

export const tabPanelClass =
  'pt-4 focus-visible:outline-none'

/** Pill-style segmented control (frappe-ui TabButtons). */
export const tabPillListClass =
  'inline-flex items-center gap-0.5 rounded-lg bg-surface-gray-2 p-0.5'

export const tabPillVariants = cva(
  'rounded-md px-2.5 py-1 text-base transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-outline-gray-3',
  {
    variants: {
      active: {
        true: 'bg-surface-white text-ink-gray-9 shadow-sm font-medium',
        false: 'text-ink-gray-6 hover:text-ink-gray-8',
      },
    },
    defaultVariants: { active: false },
  },
)

export type TabButtonVariantProps = VariantProps<typeof tabButtonVariants>
