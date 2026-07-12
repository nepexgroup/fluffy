import { cva, type VariantProps } from 'class-variance-authority'

export const badgeVariants = cva(
  'inline-flex items-center justify-center gap-1 rounded-full font-medium whitespace-nowrap',
  {
    variants: {
      variant: {
        solid: '',
        subtle: '',
        outline: 'border bg-surface-white',
      },
      theme: {
        gray: '',
        blue: '',
        green: '',
        red: '',
        amber: '',
      },
      size: {
        sm: 'h-4 px-1.5 text-2xs',
        md: 'h-5 px-2 text-xs',
        lg: 'h-6 px-2.5 text-sm',
      },
    },
    compoundVariants: [
      { theme: 'gray', variant: 'solid', class: 'bg-surface-gray-7 text-ink-white' },
      { theme: 'gray', variant: 'subtle', class: 'bg-surface-gray-2 text-ink-gray-7' },
      { theme: 'gray', variant: 'outline', class: 'border-outline-gray-2 text-ink-gray-7' },
      { theme: 'blue', variant: 'solid', class: 'bg-blue-500 text-white' },
      { theme: 'blue', variant: 'subtle', class: 'bg-surface-blue-1 text-ink-blue-1' },
      { theme: 'blue', variant: 'outline', class: 'border-outline-blue text-ink-blue-2' },
      { theme: 'green', variant: 'solid', class: 'bg-green-600 text-white' },
      { theme: 'green', variant: 'subtle', class: 'bg-surface-green-1 text-ink-green-1' },
      { theme: 'green', variant: 'outline', class: 'border-outline-green text-ink-green-2' },
      { theme: 'red', variant: 'solid', class: 'bg-red-500 text-white' },
      { theme: 'red', variant: 'subtle', class: 'bg-surface-red-1 text-ink-red-1' },
      { theme: 'red', variant: 'outline', class: 'border-outline-red text-ink-red-2' },
      { theme: 'amber', variant: 'solid', class: 'bg-amber-500 text-white' },
      { theme: 'amber', variant: 'subtle', class: 'bg-surface-amber-1 text-ink-amber-1' },
      { theme: 'amber', variant: 'outline', class: 'border-outline-amber text-ink-amber-2' },
    ],
    defaultVariants: {
      variant: 'subtle',
      theme: 'gray',
      size: 'md',
    },
  },
)

export type BadgeVariantProps = VariantProps<typeof badgeVariants>
