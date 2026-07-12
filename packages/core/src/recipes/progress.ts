import { cva, type VariantProps } from 'class-variance-authority'

export const progressTrackVariants = cva(
  'w-full overflow-hidden rounded-full bg-surface-gray-3',
  {
    variants: {
      size: {
        sm: 'h-1',
        md: 'h-1.5',
        lg: 'h-2',
        xl: 'h-3',
      },
    },
    defaultVariants: { size: 'md' },
  },
)

export const progressBarVariants = cva(
  'h-full rounded-full transition-[width] duration-300 ease-out',
  {
    variants: {
      theme: {
        gray: 'bg-surface-gray-7',
        blue: 'bg-blue-500',
        green: 'bg-green-600',
        red: 'bg-red-500',
        amber: 'bg-amber-500',
      },
    },
    defaultVariants: { theme: 'gray' },
  },
)

export const progressLabelClass = 'mb-1.5 flex items-baseline justify-between text-sm text-ink-gray-7'

export type ProgressTrackVariantProps = VariantProps<typeof progressTrackVariants>
export type ProgressBarVariantProps = VariantProps<typeof progressBarVariants>
