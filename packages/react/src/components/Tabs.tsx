import type { HTMLAttributes, ReactNode } from 'react'
import {
  cx,
  tabButtonVariants,
  tabListClass,
  tabPanelClass,
  tabPillListClass,
  tabPillVariants,
  type TabItem,
} from '@fluffy/core'

export interface TabsProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange' | 'children'> {
  tabs: TabItem[]
  value: string
  onChange: (value: string) => void
  variant?: 'underline' | 'pill'
  children?: ReactNode | ((value: string) => ReactNode)
}

export function Tabs({
  tabs,
  value,
  onChange,
  variant = 'underline',
  className,
  children,
  ...rest
}: TabsProps) {
  return (
    <div className={cx(className)} {...rest}>
      <div
        className={variant === 'pill' ? tabPillListClass : tabListClass}
        role="tablist"
      >
        {tabs.map((tab) => (
          <button
            key={tab.value}
            type="button"
            role="tab"
            aria-selected={tab.value === value}
            disabled={tab.disabled}
            className={
              variant === 'pill'
                ? tabPillVariants({ active: tab.value === value })
                : tabButtonVariants({ active: tab.value === value })
            }
            onClick={() => onChange(tab.value)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {children != null && (
        <div className={tabPanelClass} role="tabpanel">
          {typeof children === 'function' ? children(value) : children}
        </div>
      )}
    </div>
  )
}
