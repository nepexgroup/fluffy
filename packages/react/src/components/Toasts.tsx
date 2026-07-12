import { useSyncExternalStore } from 'react'
import { createPortal } from 'react-dom'
import {
  toastCloseClass,
  toastIconVariants,
  toastMessageClass,
  toastPanelClass,
  toastRegionClass,
  toastTitleClass,
  type ToastPosition,
} from '@fluffy/core'
import { CircleCheck, CircleX, Info, TriangleAlert, X } from 'lucide-react'
import {
  dismissToast,
  getToasts,
  subscribeToasts,
  type ToastRecord,
} from '../toast'

const icons = {
  info: Info,
  success: CircleCheck,
  warning: TriangleAlert,
  error: CircleX,
}

export function Toasts() {
  const toasts = useSyncExternalStore(subscribeToasts, getToasts, getToasts)
  if (typeof document === 'undefined') return null

  const regions: Partial<Record<ToastPosition, ToastRecord[]>> = {}
  for (const item of toasts) {
    ;(regions[item.position] ??= []).push(item)
  }

  return createPortal(
    <>
      {(Object.entries(regions) as [ToastPosition, ToastRecord[]][]).map(
        ([position, regionToasts]) => (
          <div key={position} className={toastRegionClass[position]}>
            {regionToasts.map((item) => {
              const Icon = icons[item.type]
              return (
                <div key={item.id} className={toastPanelClass}>
                  <Icon className={toastIconVariants({ type: item.type })} />
                  <div className="min-w-0 flex-1">
                    {item.title && (
                      <div className={toastTitleClass}>{item.title}</div>
                    )}
                    {item.message && (
                      <div className={toastMessageClass}>{item.message}</div>
                    )}
                  </div>
                  <button
                    type="button"
                    className={toastCloseClass}
                    aria-label="Dismiss"
                    onClick={() => dismissToast(item.id)}
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                </div>
              )
            })}
          </div>
        ),
      )}
    </>,
    document.body,
  )
}
