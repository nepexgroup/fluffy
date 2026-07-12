import { cva, type VariantProps } from 'class-variance-authority'

export const buttonVariants = cva(
  [
    'inline-flex items-center justify-center gap-2 rounded font-medium',
    'whitespace-nowrap transition-colors duration-100 select-none',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-outline-gray-3 focus-visible:ring-offset-1',
    'disabled:cursor-not-allowed',
  ],
  {
    variants: {
      variant: {
        solid: 'disabled:bg-surface-gray-3 disabled:text-ink-gray-4',
        subtle: 'disabled:bg-surface-gray-2 disabled:text-ink-gray-4',
        outline:
          'border bg-surface-white disabled:border-outline-gray-1 disabled:text-ink-gray-4',
        ghost: 'disabled:text-ink-gray-4 disabled:hover:bg-transparent',
      },
      theme: {
        gray: '',
        blue: '',
        green: '',
        red: '',
      },
      size: {
        sm: 'h-7 px-2 text-sm',
        md: 'h-8 px-2.5 text-base',
        lg: 'h-10 px-3 text-lg rounded-md',
        xl: 'h-11 px-3.5 text-xl rounded-md',
        '2xl': 'h-12 px-4 text-2xl rounded-md',
      },
      iconOnly: {
        true: 'px-0 aspect-square',
        false: '',
      },
      block: {
        true: 'w-full',
        false: '',
      },
    },
    compoundVariants: [
      // gray — frappe-ui's near-black primary
      {
        theme: 'gray',
        variant: 'solid',
        class:
          'bg-surface-gray-7 text-ink-white enabled:hover:bg-surface-gray-6 enabled:active:bg-surface-gray-5',
      },
      {
        theme: 'gray',
        variant: 'subtle',
        class:
          'bg-surface-gray-2 text-ink-gray-8 enabled:hover:bg-surface-gray-3 enabled:active:bg-surface-gray-4',
      },
      {
        theme: 'gray',
        variant: 'outline',
        class:
          'border-outline-gray-2 text-ink-gray-8 enabled:hover:border-outline-gray-3 enabled:active:bg-surface-gray-2',
      },
      {
        theme: 'gray',
        variant: 'ghost',
        class:
          'text-ink-gray-8 enabled:hover:bg-surface-gray-2 enabled:active:bg-surface-gray-3',
      },
      // blue
      {
        theme: 'blue',
        variant: 'solid',
        class:
          'bg-blue-500 text-white enabled:hover:bg-blue-600 enabled:active:bg-blue-700',
      },
      {
        theme: 'blue',
        variant: 'subtle',
        class:
          'bg-surface-blue-1 text-ink-blue-1 enabled:hover:bg-surface-blue-2',
      },
      {
        theme: 'blue',
        variant: 'outline',
        class:
          'border-outline-blue text-ink-blue-2 enabled:hover:bg-surface-blue-1',
      },
      {
        theme: 'blue',
        variant: 'ghost',
        class: 'text-ink-blue-2 enabled:hover:bg-surface-blue-1',
      },
      // green
      {
        theme: 'green',
        variant: 'solid',
        class:
          'bg-green-600 text-white enabled:hover:bg-green-700 enabled:active:bg-green-800',
      },
      {
        theme: 'green',
        variant: 'subtle',
        class:
          'bg-surface-green-1 text-ink-green-1 enabled:hover:bg-surface-green-2',
      },
      {
        theme: 'green',
        variant: 'outline',
        class:
          'border-outline-green text-ink-green-2 enabled:hover:bg-surface-green-1',
      },
      {
        theme: 'green',
        variant: 'ghost',
        class: 'text-ink-green-2 enabled:hover:bg-surface-green-1',
      },
      // red
      {
        theme: 'red',
        variant: 'solid',
        class:
          'bg-red-500 text-white enabled:hover:bg-red-600 enabled:active:bg-red-700',
      },
      {
        theme: 'red',
        variant: 'subtle',
        class:
          'bg-surface-red-1 text-ink-red-1 enabled:hover:bg-surface-red-2',
      },
      {
        theme: 'red',
        variant: 'outline',
        class:
          'border-outline-red text-ink-red-2 enabled:hover:bg-surface-red-1',
      },
      {
        theme: 'red',
        variant: 'ghost',
        class: 'text-ink-red-2 enabled:hover:bg-surface-red-1',
      },
      // icon-only square widths per size
      { iconOnly: true, size: 'sm', class: 'w-7' },
      { iconOnly: true, size: 'md', class: 'w-8' },
      { iconOnly: true, size: 'lg', class: 'w-10' },
      { iconOnly: true, size: 'xl', class: 'w-11' },
      { iconOnly: true, size: '2xl', class: 'w-12' },
    ],
    defaultVariants: {
      variant: 'subtle',
      theme: 'gray',
      size: 'md',
      iconOnly: false,
      block: false,
    },
  },
)

export type ButtonVariantProps = VariantProps<typeof buttonVariants>

/** Icon size inside buttons, per button size. */
export const buttonIconClass: Record<string, string> = {
  sm: 'h-3.5 w-3.5',
  md: 'h-4 w-4',
  lg: 'h-4 w-4',
  xl: 'h-5 w-5',
  '2xl': 'h-5 w-5',
}
