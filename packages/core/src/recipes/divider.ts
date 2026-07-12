import { cva, type VariantProps } from 'class-variance-authority'

export const dividerVariants = cva('border-outline-gray-2', {
  variants: {
    orientation: {
      horizontal: 'w-full border-t',
      vertical: 'self-stretch border-l',
    },
    variant: {
      solid: '',
      dashed: 'border-dashed',
      dotted: 'border-dotted',
    },
  },
  defaultVariants: { orientation: 'horizontal', variant: 'solid' },
})

export const dividerWithLabelClass =
  'flex w-full items-center gap-3 text-xs text-ink-gray-5 before:h-px before:flex-1 before:bg-outline-gray-2 after:h-px after:flex-1 after:bg-outline-gray-2'

export type DividerVariantProps = VariantProps<typeof dividerVariants>
