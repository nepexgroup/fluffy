import type { HTMLAttributes, ReactNode } from 'react'
import {
  alertBodyClass,
  alertIconVariants,
  alertTitleClass,
  alertVariants,
  cx,
  type AlertVariantProps,
} from '@fluffy/core'
import {
  CircleCheck,
  CircleX,
  Info,
  Megaphone,
  TriangleAlert,
  X,
} from 'lucide-react'

const icons = {
  gray: Megaphone,
  info: Info,
  success: CircleCheck,
  warning: TriangleAlert,
  danger: CircleX,
}

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  theme?: NonNullable<AlertVariantProps['theme']>
  title?: string
  icon?: ReactNode
  actions?: ReactNode
  dismissible?: boolean
  onDismiss?: () => void
}

export function Alert({
  theme = 'gray',
  title,
  icon,
  actions,
  dismissible = false,
  onDismiss,
  className,
  children,
  ...rest
}: AlertProps) {
  const DefaultIcon = icons[theme]
  return (
    <div
      className={cx(alertVariants({ theme }), className)}
      role="alert"
      {...rest}
    >
      {icon ?? <DefaultIcon className={alertIconVariants({ theme })} />}
      <div className="min-w-0 flex-1">
        {title && <div className={alertTitleClass}>{title}</div>}
        {children && <div className={title ? alertBodyClass : ''}>{children}</div>}
      </div>
      {actions}
      {dismissible && (
        <button
          type="button"
          className="ml-1 shrink-0 rounded p-0.5 opacity-60 transition-opacity hover:opacity-100"
          aria-label="Dismiss"
          onClick={onDismiss}
        >
          <X className="h-3.5 w-3.5" />
        </button>
      )}
    </div>
  )
}
