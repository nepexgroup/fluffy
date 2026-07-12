import { cva, type VariantProps } from 'class-variance-authority'

export const dropzoneVariants = cva(
  [
    'flex w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border border-dashed p-6 text-center',
    'transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-outline-gray-3',
  ],
  {
    variants: {
      active: {
        true: 'border-outline-gray-4 bg-surface-gray-2',
        false: 'border-outline-gray-2 bg-surface-gray-1 hover:border-outline-gray-3',
      },
      disabled: {
        true: 'cursor-not-allowed opacity-50',
        false: '',
      },
    },
    defaultVariants: { active: false, disabled: false },
  },
)

export const dropzoneIconClass = 'h-6 w-6 text-ink-gray-4'
export const dropzoneTitleClass = 'text-base font-medium text-ink-gray-8'
export const dropzoneHintClass = 'text-sm text-ink-gray-5'

export const fileRowClass =
  'flex items-center gap-2.5 rounded-md border border-outline-gray-1 bg-surface-white p-2.5'
export const fileRowIconClass = 'h-4 w-4 shrink-0 text-ink-gray-5'
export const fileRowNameClass = 'truncate text-base text-ink-gray-8'
export const fileRowSizeClass = 'shrink-0 text-sm text-ink-gray-5'
export const fileRowRemoveClass =
  'ml-auto shrink-0 rounded p-1 text-ink-gray-4 transition-colors hover:bg-surface-gray-2 hover:text-ink-red-2'

export type DropzoneVariantProps = VariantProps<typeof dropzoneVariants>
