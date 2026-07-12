import { cva, type VariantProps } from 'class-variance-authority'

export const spinnerVariants = cva('animate-spin text-ink-gray-5', {
  variants: {
    size: {
      xs: 'h-3 w-3',
      sm: 'h-4 w-4',
      md: 'h-5 w-5',
      lg: 'h-6 w-6',
      xl: 'h-8 w-8',
    },
  },
  defaultVariants: { size: 'md' },
})

export type SpinnerVariantProps = VariantProps<typeof spinnerVariants>
