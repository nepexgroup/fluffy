import { cva, type VariantProps } from 'class-variance-authority'

export const listViewClass =
  'w-full overflow-hidden rounded-lg border border-outline-gray-1 bg-surface-white'
export const listViewTableClass = 'w-full border-collapse text-left'
export const listViewHeadClass = 'border-b border-outline-gray-1 bg-surface-gray-1'
export const listViewHeaderCellClass =
  'px-3 py-2 text-sm font-medium text-ink-gray-5'

export const listViewRowVariants = cva(
  'border-b border-outline-gray-1 transition-colors duration-75 last:border-b-0',
  {
    variants: {
      selected: {
        true: 'bg-surface-gray-2',
        false: 'hover:bg-surface-gray-1',
      },
      clickable: {
        true: 'cursor-pointer',
        false: '',
      },
    },
    defaultVariants: { selected: false, clickable: false },
  },
)

export const listViewCellClass = 'px-3 py-2 text-base text-ink-gray-7'
export const listViewCheckboxCellClass = 'w-10 px-3 py-2'
export const listViewEmptyClass =
  'flex flex-col items-center justify-center gap-1 py-12 text-center text-sm text-ink-gray-5'
export const listViewSelectionBarClass =
  'flex items-center gap-3 border-b border-outline-gray-1 bg-surface-menu-bar px-3 py-2 text-sm text-ink-gray-7'

export type ListViewRowVariantProps = VariantProps<typeof listViewRowVariants>
