import { forwardRef, type SelectHTMLAttributes } from 'react'
import {
  cx,
  inputVariants,
  selectChevronClass,
  selectVariants,
  type InputVariantProps,
  type SelectOption,
} from '@fluffy/core'
import { ChevronDown } from 'lucide-react'

export interface SelectProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  options?: (SelectOption | string)[]
  variant?: NonNullable<InputVariantProps['variant']>
  size?: NonNullable<InputVariantProps['size']>
  placeholder?: string
  error?: boolean
  wrapperClassName?: string
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  {
    options = [],
    variant = 'subtle',
    size = 'md',
    placeholder,
    error = false,
    value,
    className,
    wrapperClassName,
    ...rest
  },
  ref,
) {
  const normalized: SelectOption[] = options.map((option) =>
    typeof option === 'string' ? { label: option, value: option } : option,
  )
  return (
    <div className={cx('relative', wrapperClassName)}>
      <select
        ref={ref}
        value={value}
        className={cx(
          inputVariants({ variant, size, state: error ? 'error' : 'normal' }),
          selectVariants(),
          !value && placeholder && 'text-ink-gray-4',
          className,
        )}
        {...rest}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {normalized.map((option) => (
          <option key={option.value} value={option.value} disabled={option.disabled}>
            {option.label}
          </option>
        ))}
      </select>
      <ChevronDown className={selectChevronClass} />
    </div>
  )
})
