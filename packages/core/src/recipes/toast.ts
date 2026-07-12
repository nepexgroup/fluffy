import { cva, type VariantProps } from 'class-variance-authority'
import type { ToastPosition } from '../types'

export const toastRegionClass: Record<ToastPosition, string> = {
  'top-left': 'fixed top-4 left-4 z-[60] flex flex-col gap-2',
  'top-center': 'fixed top-4 left-1/2 z-[60] flex -translate-x-1/2 flex-col gap-2',
  'top-right': 'fixed top-4 right-4 z-[60] flex flex-col gap-2',
  'bottom-left': 'fixed bottom-4 left-4 z-[60] flex flex-col-reverse gap-2',
  'bottom-center':
    'fixed bottom-4 left-1/2 z-[60] flex -translate-x-1/2 flex-col-reverse gap-2',
  'bottom-right': 'fixed bottom-4 right-4 z-[60] flex flex-col-reverse gap-2',
}

export const toastPanelClass =
  'pointer-events-auto flex w-80 items-start gap-2.5 rounded-lg border border-outline-gray-1 bg-surface-modal p-3 shadow-modal'

export const toastIconVariants = cva('mt-0.5 h-4 w-4 shrink-0', {
  variants: {
    type: {
      info: 'text-ink-blue-2',
      success: 'text-ink-green-2',
      warning: 'text-ink-amber-2',
      error: 'text-ink-red-2',
    },
  },
  defaultVariants: { type: 'info' },
})

export const toastTitleClass = 'text-base font-medium text-ink-gray-9'
export const toastMessageClass = 'mt-0.5 text-sm text-ink-gray-6'
export const toastCloseClass =
  'ml-auto rounded p-0.5 text-ink-gray-4 transition-colors hover:bg-surface-gray-2 hover:text-ink-gray-7'

export type ToastIconVariantProps = VariantProps<typeof toastIconVariants>
