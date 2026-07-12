import { cva, type VariantProps } from 'class-variance-authority'

export const ratingStarVariants = cva(
  'cursor-pointer transition-colors duration-75',
  {
    variants: {
      size: {
        sm: 'h-4 w-4',
        md: 'h-5 w-5',
        lg: 'h-6 w-6',
        xl: 'h-7 w-7',
      },
      filled: {
        true: 'fill-amber-400 text-amber-400',
        false: 'fill-surface-gray-3 text-surface-gray-3 hover:text-surface-gray-4 hover:fill-surface-gray-4',
      },
      readonly: {
        true: 'cursor-default',
        false: '',
      },
    },
    defaultVariants: { size: 'md', filled: false, readonly: false },
  },
)

export const ratingGroupClass = 'inline-flex items-center gap-0.5'

export type RatingStarVariantProps = VariantProps<typeof ratingStarVariants>
