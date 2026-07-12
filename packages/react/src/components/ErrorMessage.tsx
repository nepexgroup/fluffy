import type { HTMLAttributes } from 'react'
import { cx, formErrorClass } from '@fluffy/core'

export interface ErrorMessageProps extends HTMLAttributes<HTMLParagraphElement> {
  message?: string
}

export function ErrorMessage({ message, className, ...rest }: ErrorMessageProps) {
  if (!message) return null
  return (
    <p className={cx(formErrorClass, className)} {...rest}>
      {message}
    </p>
  )
}
