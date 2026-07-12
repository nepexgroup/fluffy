import type { HTMLAttributes } from 'react'
import {
  breadcrumbItemVariants,
  breadcrumbSeparatorClass,
  breadcrumbsListClass,
  cx,
  type BreadcrumbItem,
} from '@fluffy/core'
import { ChevronRight } from 'lucide-react'

export interface BreadcrumbsProps extends HTMLAttributes<HTMLElement> {
  items: BreadcrumbItem[]
}

export function Breadcrumbs({ items, className, ...rest }: BreadcrumbsProps) {
  return (
    <nav className={cx(className)} aria-label="Breadcrumb" {...rest}>
      <ol className={breadcrumbsListClass}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          const itemClass = breadcrumbItemVariants({ current: isLast })
          return (
            <li key={index} className="flex items-center gap-1">
              {index > 0 && (
                <ChevronRight className={cx('h-3.5 w-3.5', breadcrumbSeparatorClass)} />
              )}
              {item.href && !isLast ? (
                <a href={item.href} className={itemClass}>
                  {item.label}
                </a>
              ) : (
                <span className={itemClass} aria-current={isLast ? 'page' : undefined}>
                  {item.label}
                </span>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
