import { forwardRef, type TextareaHTMLAttributes } from 'react'
import { cx, textareaVariants, type TextareaVariantProps } from '@fluffy/core'

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: NonNullable<TextareaVariantProps['variant']>
  size?: NonNullable<TextareaVariantProps['size']>
  error?: boolean
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  function Textarea(
    { variant = 'subtle', size = 'md', error = false, rows = 3, className, ...rest },
    ref,
  ) {
    return (
      <textarea
        ref={ref}
        rows={rows}
        className={cx(
          textareaVariants({ variant, size, state: error ? 'error' : 'normal' }),
          className,
        )}
        {...rest}
      />
    )
  },
)
