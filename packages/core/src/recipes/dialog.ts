import { cva, type VariantProps } from 'class-variance-authority'

export const dialogOverlayClass =
  'fixed inset-0 z-40 bg-black/40 backdrop-blur-[1px] transition-opacity'

export const dialogWrapperClass =
  'fixed inset-0 z-50 flex items-start justify-center overflow-y-auto p-4 pt-[10vh]'

export const dialogPanelVariants = cva(
  [
    'w-full rounded-xl border border-outline-modal bg-surface-modal shadow-modal',
    'flex flex-col overflow-hidden',
  ],
  {
    variants: {
      size: {
        sm: 'max-w-sm',
        md: 'max-w-md',
        lg: 'max-w-lg',
        xl: 'max-w-xl',
        '2xl': 'max-w-2xl',
        '3xl': 'max-w-3xl',
        full: 'max-w-[calc(100vw-2rem)] h-[calc(100vh-2rem)]',
      },
    },
    defaultVariants: { size: 'lg' },
  },
)

export const dialogHeaderClass = 'flex items-start justify-between gap-4 px-4 pt-4 pb-0'
export const dialogTitleClass = 'text-xl font-semibold text-ink-gray-9'
export const dialogBodyClass = 'px-4 py-4 text-base text-ink-gray-7'
export const dialogActionsClass = 'flex justify-end gap-2 px-4 pb-4'
export const dialogCloseButtonClass =
  'rounded p-1 text-ink-gray-5 transition-colors hover:bg-surface-gray-2 hover:text-ink-gray-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-outline-gray-3'

export type DialogPanelVariantProps = VariantProps<typeof dialogPanelVariants>
