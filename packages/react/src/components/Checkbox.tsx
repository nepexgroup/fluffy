import { forwardRef, useId, type InputHTMLAttributes } from 'react'
import {
  checkboxLabelVariants,
  checkboxVariants,
  cx,
  type CheckboxVariantProps,
} from '@fluffy/core'

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  label?: string
  size?: NonNullable<CheckboxVariantProps['size']>
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  function Checkbox({ label, size = 'md', id, className, ...rest }, ref) {
    const autoId = useId()
    const inputId = id ?? autoId
    return (
      <label className={cx('inline-flex items-center gap-2', className)} htmlFor={inputId}>
        <input
          ref={ref}
          id={inputId}
          type="checkbox"
          className={checkboxVariants({ size })}
          {...rest}
        />
        {label && <span className={checkboxLabelVariants({ size })}>{label}</span>}
      </label>
    )
  },
)
