import { useId, type HTMLAttributes, type ReactNode } from 'react'
import {
  cx,
  formDescriptionClass,
  formErrorClass,
  formLabelVariants,
  requiredMarkClass,
  type FormLabelVariantProps,
} from '@fluffy/core'

export interface FormControlProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  label?: string
  description?: string
  error?: string
  required?: boolean
  size?: NonNullable<FormLabelVariantProps['size']>
  htmlFor?: string
  children: ReactNode | ((props: { id: string; error: boolean }) => ReactNode)
}

export function FormControl({
  label,
  description,
  error,
  required = false,
  size = 'md',
  htmlFor,
  className,
  children,
  ...rest
}: FormControlProps) {
  const autoId = useId()
  const controlId = htmlFor ?? autoId
  return (
    <div className={cx('space-y-1.5', className)} {...rest}>
      {label && (
        <label className={formLabelVariants({ size })} htmlFor={controlId}>
          {label}
          {required && <span className={requiredMarkClass}> *</span>}
        </label>
      )}
      {typeof children === 'function'
        ? children({ id: controlId, error: !!error })
        : children}
      {description && !error && (
        <p className={formDescriptionClass}>{description}</p>
      )}
      {error && <p className={formErrorClass}>{error}</p>}
    </div>
  )
}
