import type { HTMLAttributes, ReactNode } from 'react'
import { badgeVariants, cx, type BadgeVariantProps } from '@fluffy/core'

export interface BadgeProps
  extends Omit<HTMLAttributes<HTMLSpanElement>, 'prefix'> {
  theme?: NonNullable<BadgeVariantProps['theme']>
  variant?: NonNullable<BadgeVariantProps['variant']>
  size?: NonNullable<BadgeVariantProps['size']>
  label?: string
  iconLeft?: ReactNode
  iconRight?: ReactNode
}

export function Badge({
  theme = 'gray',
  variant = 'subtle',
  size = 'md',
  label,
  iconLeft,
  iconRight,
  className,
  children,
  ...rest
}: BadgeProps) {
  return (
    <span
      className={cx(badgeVariants({ variant, theme, size }), className)}
      {...rest}
    >
      {iconLeft}
      {children ?? label}
      {iconRight}
    </span>
  )
}
