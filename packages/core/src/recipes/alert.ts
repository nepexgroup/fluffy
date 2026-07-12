import { cva, type VariantProps } from 'class-variance-authority'

export const alertVariants = cva('flex w-full gap-2.5 rounded-md p-3 text-base', {
  variants: {
    theme: {
      gray: 'bg-surface-gray-2 text-ink-gray-8',
      info: 'bg-surface-blue-1 text-ink-blue-1',
      success: 'bg-surface-green-1 text-ink-green-1',
      warning: 'bg-surface-amber-1 text-ink-amber-1',
      danger: 'bg-surface-red-1 text-ink-red-1',
    },
  },
  defaultVariants: { theme: 'gray' },
})

export const alertIconVariants = cva('mt-0.5 h-4 w-4 shrink-0', {
  variants: {
    theme: {
      gray: 'text-ink-gray-6',
      info: 'text-ink-blue-2',
      success: 'text-ink-green-2',
      warning: 'text-ink-amber-2',
      danger: 'text-ink-red-2',
    },
  },
  defaultVariants: { theme: 'gray' },
})

export const alertTitleClass = 'font-medium'
export const alertBodyClass = 'mt-0.5 text-sm opacity-90'

export type AlertVariantProps = VariantProps<typeof alertVariants>
