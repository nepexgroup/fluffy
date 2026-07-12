import { cva, type VariantProps } from 'class-variance-authority'

export const calendarClass = 'w-64 select-none text-base'
export const calendarHeaderClass = 'flex items-center justify-between gap-1 pb-2'
export const calendarMonthLabelClass = 'text-sm font-medium text-ink-gray-8'
export const calendarNavButtonClass =
  'rounded p-1 text-ink-gray-5 transition-colors hover:bg-surface-gray-2 hover:text-ink-gray-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-outline-gray-3'
export const calendarWeekdayClass =
  'flex h-7 w-8 items-center justify-center text-xs text-ink-gray-5'

export const calendarDayVariants = cva(
  [
    'flex h-8 w-8 items-center justify-center rounded text-sm transition-colors duration-75',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-outline-gray-3',
  ],
  {
    variants: {
      inMonth: {
        true: 'text-ink-gray-8',
        false: 'text-ink-gray-4',
      },
      today: {
        true: 'font-semibold text-ink-blue-2',
        false: '',
      },
      selected: {
        true: 'bg-surface-gray-7 text-ink-white font-medium hover:bg-surface-gray-6',
        false: 'hover:bg-surface-gray-2',
      },
      disabled: {
        true: 'cursor-not-allowed text-ink-gray-3 hover:bg-transparent',
        false: 'cursor-pointer',
      },
    },
    compoundVariants: [
      { selected: true, today: true, class: 'text-ink-white' },
    ],
    defaultVariants: { inMonth: true, today: false, selected: false, disabled: false },
  },
)

export type CalendarDayVariantProps = VariantProps<typeof calendarDayVariants>
