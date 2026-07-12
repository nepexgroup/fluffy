import { cva, type VariantProps } from 'class-variance-authority'

/* ---------- Input / Select / Textarea ---------- */

export const inputVariants = cva(
  [
    'w-full rounded border transition-colors duration-100 placeholder:text-ink-gray-4',
    'text-ink-gray-8 focus:outline-none focus:ring-2 focus:ring-outline-gray-3 focus:border-outline-gray-4',
    'disabled:cursor-not-allowed disabled:bg-surface-gray-2 disabled:text-ink-gray-5',
  ],
  {
    variants: {
      variant: {
        subtle:
          'border-transparent bg-surface-gray-2 hover:border-outline-gray-2 focus:bg-surface-white',
        outline: 'border-outline-gray-2 bg-surface-white hover:border-outline-gray-3',
      },
      size: {
        sm: 'h-7 px-2 text-sm rounded',
        md: 'h-8 px-2.5 text-base',
        lg: 'h-10 px-3 text-lg rounded-md',
        xl: 'h-11 px-3.5 text-xl rounded-md',
      },
      state: {
        normal: '',
        error:
          'border-outline-red focus:ring-red-200 focus:border-red-400 hover:border-outline-red',
      },
    },
    defaultVariants: { variant: 'subtle', size: 'md', state: 'normal' },
  },
)

export const textareaVariants = cva(
  [
    'w-full rounded border transition-colors duration-100 placeholder:text-ink-gray-4',
    'text-ink-gray-8 focus:outline-none focus:ring-2 focus:ring-outline-gray-3 focus:border-outline-gray-4',
    'disabled:cursor-not-allowed disabled:bg-surface-gray-2 disabled:text-ink-gray-5',
  ],
  {
    variants: {
      variant: {
        subtle:
          'border-transparent bg-surface-gray-2 hover:border-outline-gray-2 focus:bg-surface-white',
        outline: 'border-outline-gray-2 bg-surface-white hover:border-outline-gray-3',
      },
      size: {
        sm: 'p-2 text-sm rounded',
        md: 'p-2.5 text-base',
        lg: 'p-3 text-lg rounded-md',
        xl: 'p-3.5 text-xl rounded-md',
      },
      state: {
        normal: '',
        error:
          'border-outline-red focus:ring-red-200 focus:border-red-400 hover:border-outline-red',
      },
    },
    defaultVariants: { variant: 'subtle', size: 'md', state: 'normal' },
  },
)

/** Select shares input frame; appearance-none + right padding for the chevron. */
export const selectVariants = cva('appearance-none truncate pr-8 cursor-pointer', {
  variants: {},
  defaultVariants: {},
})

export const selectChevronClass =
  'pointer-events-none absolute inset-y-0 right-2 my-auto h-4 w-4 text-ink-gray-5'

/* ---------- Checkbox ---------- */

export const checkboxVariants = cva(
  [
    'form-checkbox rounded-sm border-outline-gray-3 text-surface-gray-7 shadow-none',
    'focus:ring-2 focus:ring-outline-gray-3 focus:ring-offset-1',
    'disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer',
  ],
  {
    variants: {
      size: {
        sm: 'h-3.5 w-3.5',
        md: 'h-4 w-4',
        lg: 'h-5 w-5',
      },
    },
    defaultVariants: { size: 'md' },
  },
)

export const checkboxLabelVariants = cva(
  'select-none font-medium text-ink-gray-8 cursor-pointer',
  {
    variants: {
      size: {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
      },
    },
    defaultVariants: { size: 'md' },
  },
)

/* ---------- Switch ---------- */

export const switchTrackVariants = cva(
  [
    'relative inline-flex shrink-0 cursor-pointer items-center rounded-full',
    'transition-colors duration-150 ease-in-out',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-outline-gray-3 focus-visible:ring-offset-1',
    'disabled:cursor-not-allowed disabled:opacity-50',
  ],
  {
    variants: {
      size: {
        sm: 'h-4 w-7',
        md: 'h-5 w-9',
        lg: 'h-6 w-11',
      },
      checked: {
        true: 'bg-surface-gray-7',
        false: 'bg-surface-gray-4',
      },
    },
    defaultVariants: { size: 'md', checked: false },
  },
)

export const switchThumbVariants = cva(
  'pointer-events-none inline-block transform rounded-full bg-white shadow ring-0 transition duration-150 ease-in-out',
  {
    variants: {
      size: {
        sm: 'h-3 w-3',
        md: 'h-4 w-4',
        lg: 'h-5 w-5',
      },
      checked: {
        true: '',
        false: '',
      },
    },
    compoundVariants: [
      { size: 'sm', checked: false, class: 'translate-x-0.5' },
      { size: 'sm', checked: true, class: 'translate-x-3.5' },
      { size: 'md', checked: false, class: 'translate-x-0.5' },
      { size: 'md', checked: true, class: 'translate-x-[18px]' },
      { size: 'lg', checked: false, class: 'translate-x-0.5' },
      { size: 'lg', checked: true, class: 'translate-x-[22px]' },
    ],
    defaultVariants: { size: 'md', checked: false },
  },
)

/* ---------- FormControl bits ---------- */

export const formLabelVariants = cva('block font-medium text-ink-gray-7', {
  variants: {
    size: {
      sm: 'text-xs',
      md: 'text-sm',
      lg: 'text-base',
      xl: 'text-lg',
    },
  },
  defaultVariants: { size: 'md' },
})

export const formDescriptionClass = 'mt-1 text-xs text-ink-gray-5'
export const formErrorClass = 'mt-1 text-xs text-ink-red-2'
export const requiredMarkClass = 'text-ink-red-2'

export type InputVariantProps = VariantProps<typeof inputVariants>
export type TextareaVariantProps = VariantProps<typeof textareaVariants>
export type CheckboxVariantProps = VariantProps<typeof checkboxVariants>
export type SwitchTrackVariantProps = VariantProps<typeof switchTrackVariants>
export type FormLabelVariantProps = VariantProps<typeof formLabelVariants>
