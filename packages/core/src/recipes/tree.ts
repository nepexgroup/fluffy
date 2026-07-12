import { cva, type VariantProps } from 'class-variance-authority'

export const treeClass = 'text-base'

export const treeNodeRowVariants = cva(
  [
    'flex w-full cursor-pointer select-none items-center gap-1.5 rounded px-1.5 py-1 text-left',
    'transition-colors duration-75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-outline-gray-3',
  ],
  {
    variants: {
      selected: {
        true: 'bg-surface-gray-3 font-medium text-ink-gray-9',
        false: 'text-ink-gray-7 hover:bg-surface-gray-2',
      },
      disabled: {
        true: 'cursor-not-allowed text-ink-gray-4 hover:bg-transparent',
        false: '',
      },
    },
    defaultVariants: { selected: false, disabled: false },
  },
)

export const treeToggleVariants = cva(
  'flex h-4 w-4 shrink-0 items-center justify-center text-ink-gray-5 transition-transform duration-100',
  {
    variants: {
      expanded: {
        true: 'rotate-90',
        false: '',
      },
      leaf: {
        true: 'invisible',
        false: '',
      },
    },
    defaultVariants: { expanded: false, leaf: false },
  },
)

export const treeChildrenClass = 'ml-3 border-l border-outline-gray-1 pl-2'

export type TreeNodeRowVariantProps = VariantProps<typeof treeNodeRowVariants>
