import type { HTMLAttributes } from 'react'
import {
  cx,
  dividerVariants,
  dividerWithLabelClass,
  type DividerVariantProps,
} from '@fluffy/core'

export interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  orientation?: NonNullable<DividerVariantProps['orientation']>
  variant?: NonNullable<DividerVariantProps['variant']>
  label?: string
}

export function Divider({
  orientation = 'horizontal',
  variant = 'solid',
  label,
  className,
  children,
  ...rest
}: DividerProps) {
  const content = children ?? label
  if (content) {
    return (
      <div
        className={cx(dividerWithLabelClass, className)}
        role="separator"
        {...rest}
      >
        {content}
      </div>
    )
  }
  return (
    <div
      className={cx(dividerVariants({ orientation, variant }), className)}
      role="separator"
      aria-orientation={orientation}
      {...rest}
    />
  )
}
