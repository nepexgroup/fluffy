import {
  Popover as HPopover,
  PopoverButton,
  PopoverPanel,
} from '@headlessui/react'
import {
  cx,
  formatDate,
  inputVariants,
  parseISODate,
  popoverPanelClass,
  toISODate,
  type InputVariantProps,
} from '@fluffy/core'
import { Calendar as CalendarIcon } from 'lucide-react'
import { Calendar } from './Calendar'

export interface DatePickerProps {
  /** YYYY-MM-DD */
  value?: string
  onChange: (value: string) => void
  placeholder?: string
  variant?: NonNullable<InputVariantProps['variant']>
  size?: NonNullable<InputVariantProps['size']>
  disabled?: boolean
  error?: boolean
  className?: string
}

export function DatePicker({
  value = '',
  onChange,
  placeholder = 'Select date',
  variant = 'subtle',
  size = 'md',
  disabled = false,
  error = false,
  className,
}: DatePickerProps) {
  const parsed = parseISODate(value)
  const displayValue = parsed ? formatDate(parsed) : ''

  return (
    <HPopover className={cx('relative inline-block w-full', className)}>
      <PopoverButton className="w-full text-left" disabled={disabled}>
        <span className="relative block">
          <input
            readOnly
            tabIndex={-1}
            className={cx(
              inputVariants({ variant, size, state: error ? 'error' : 'normal' }),
              'pointer-events-none cursor-pointer pr-8',
            )}
            value={displayValue}
            placeholder={placeholder}
            disabled={disabled}
          />
          <CalendarIcon className="pointer-events-none absolute inset-y-0 right-2.5 my-auto h-4 w-4 text-ink-gray-5" />
        </span>
      </PopoverButton>
      <PopoverPanel
        transition
        anchor="bottom start"
        className={cx(
          popoverPanelClass,
          '[--anchor-gap:6px] origin-top transition duration-100 ease-out data-[closed]:scale-95 data-[closed]:opacity-0',
        )}
      >
        {({ close }) => (
          <>
            <Calendar
              value={value}
              onChange={(next) => {
                onChange(next)
                close()
              }}
            />
            <div className="mt-2 flex justify-between border-t border-outline-gray-1 pt-2">
              <button
                type="button"
                className="rounded px-1.5 py-0.5 text-sm text-ink-gray-6 hover:bg-surface-gray-2"
                onClick={() => {
                  onChange(toISODate(new Date()))
                  close()
                }}
              >
                Today
              </button>
              <button
                type="button"
                className="rounded px-1.5 py-0.5 text-sm text-ink-gray-6 hover:bg-surface-gray-2"
                onClick={() => {
                  onChange('')
                  close()
                }}
              >
                Clear
              </button>
            </div>
          </>
        )}
      </PopoverPanel>
    </HPopover>
  )
}
