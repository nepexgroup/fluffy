import { cva, type VariantProps } from 'class-variance-authority'

export const avatarVariants = cva(
  'relative inline-flex shrink-0 items-center justify-center overflow-hidden bg-surface-gray-3 text-ink-gray-6 font-medium uppercase',
  {
    variants: {
      size: {
        xs: 'h-4 w-4 text-2xs',
        sm: 'h-5 w-5 text-2xs',
        md: 'h-6 w-6 text-xs',
        lg: 'h-7 w-7 text-xs',
        xl: 'h-8 w-8 text-sm',
        '2xl': 'h-10 w-10 text-base',
        '3xl': 'h-12 w-12 text-lg',
      },
      shape: {
        circle: 'rounded-full',
        square: 'rounded',
      },
    },
    defaultVariants: {
      size: 'md',
      shape: 'circle',
    },
  },
)

export type AvatarVariantProps = VariantProps<typeof avatarVariants>

export const avatarImageClass = 'h-full w-full object-cover'

/** Presence indicator dot, bottom-right. */
export const avatarIndicatorClass = cva(
  'absolute bottom-0 right-0 block rounded-full ring-2 ring-surface-white',
  {
    variants: {
      color: {
        gray: 'bg-surface-gray-5',
        green: 'bg-green-500',
        red: 'bg-red-500',
        amber: 'bg-amber-500',
        blue: 'bg-blue-500',
      },
      size: {
        xs: 'h-1 w-1',
        sm: 'h-1 w-1',
        md: 'h-1.5 w-1.5',
        lg: 'h-1.5 w-1.5',
        xl: 'h-2 w-2',
        '2xl': 'h-2.5 w-2.5',
        '3xl': 'h-3 w-3',
      },
    },
    defaultVariants: { color: 'gray', size: 'md' },
  },
)
