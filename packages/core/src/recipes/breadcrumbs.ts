import { cva, type VariantProps } from 'class-variance-authority'

export const breadcrumbsListClass = 'flex flex-wrap items-center gap-1 text-base'

export const breadcrumbItemVariants = cva(
  'flex items-center gap-1 rounded px-1 py-0.5 transition-colors duration-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-outline-gray-3',
  {
    variants: {
      current: {
        true: 'font-medium text-ink-gray-9 cursor-default',
        false: 'text-ink-gray-5 hover:bg-surface-gray-2 hover:text-ink-gray-7',
      },
    },
    defaultVariants: { current: false },
  },
)

export const breadcrumbSeparatorClass = 'text-ink-gray-4 select-none'

export type BreadcrumbItemVariantProps = VariantProps<typeof breadcrumbItemVariants>
