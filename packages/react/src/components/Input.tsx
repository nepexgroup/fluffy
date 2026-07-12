import { forwardRef, type InputHTMLAttributes, type ReactNode } from 'react'
import { cx, inputVariants, type InputVariantProps } from '@fluffy/core'

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'> {
  variant?: NonNullable<InputVariantProps['variant']>
  size?: NonNullable<InputVariantProps['size']>
  error?: boolean
  iconLeft?: ReactNode
  iconRight?: ReactNode
  wrapperClassName?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    variant = 'subtle',
    size = 'md',
    error = false,
    iconLeft,
    iconRight,
    className,
    wrapperClassName,
    ...rest
  },
  ref,
) {
  return (
    <div className={cx('relative', wrapperClassName)}>
      {iconLeft && (
        <span className="pointer-events-none absolute inset-y-0 left-2.5 flex items-center text-ink-gray-5 [&>svg]:h-4 [&>svg]:w-4">
          {iconLeft}
        </span>
      )}
      <input
        ref={ref}
        className={cx(
          inputVariants({ variant, size, state: error ? 'error' : 'normal' }),
          iconLeft && 'pl-8',
          iconRight && 'pr-8',
          className,
        )}
        {...rest}
      />
      {iconRight && (
        <span className="pointer-events-none absolute inset-y-0 right-2.5 flex items-center text-ink-gray-5 [&>svg]:h-4 [&>svg]:w-4">
          {iconRight}
        </span>
      )}
    </div>
  )
})
