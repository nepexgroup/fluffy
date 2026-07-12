import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react'
import {
  buttonIconClass,
  buttonVariants,
  cx,
  type ButtonVariantProps,
} from '@fluffy/core'
import { Spinner } from './Spinner'

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'prefix'> {
  theme?: NonNullable<ButtonVariantProps['theme']>
  variant?: NonNullable<ButtonVariantProps['variant']>
  size?: NonNullable<ButtonVariantProps['size']>
  label?: string
  block?: boolean
  loading?: boolean
  iconLeft?: ReactNode
  iconRight?: ReactNode
  /** Icon-only button; renders a square button with just this icon. */
  icon?: ReactNode
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      theme = 'gray',
      variant = 'subtle',
      size = 'md',
      label,
      block = false,
      loading = false,
      iconLeft,
      iconRight,
      icon,
      disabled,
      className,
      children,
      type = 'button',
      ...rest
    },
    ref,
  ) {
    const isIconOnly = !!icon && !children && !label
    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled || loading}
        className={cx(
          buttonVariants({ variant, theme, size, block, iconOnly: isIconOnly }),
          className,
        )}
        {...rest}
      >
        {loading ? (
          <Spinner className={buttonIconClass[size]} />
        ) : (
          iconLeft ?? (isIconOnly ? icon : null)
        )}
        {!isIconOnly && (children ?? label)}
        {iconRight}
      </button>
    )
  },
)
