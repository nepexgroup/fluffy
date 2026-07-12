import type { ReactNode } from 'react'
import {
  Dialog as HDialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react'
import {
  cx,
  dialogActionsClass,
  dialogBodyClass,
  dialogCloseButtonClass,
  dialogHeaderClass,
  dialogOverlayClass,
  dialogPanelVariants,
  dialogTitleClass,
  dialogWrapperClass,
  type DialogPanelVariantProps,
} from '@fluffy/core'
import { X } from 'lucide-react'

export interface DialogProps {
  open: boolean
  onClose: (open: boolean) => void
  title?: ReactNode
  size?: NonNullable<DialogPanelVariantProps['size']>
  dismissable?: boolean
  actions?: ReactNode
  children?: ReactNode
}

export function Dialog({
  open,
  onClose,
  title,
  size = 'lg',
  dismissable = true,
  actions,
  children,
}: DialogProps) {
  function close() {
    if (dismissable) onClose(false)
  }
  return (
    <HDialog open={open} onClose={close} className="relative">
      <DialogBackdrop
        transition
        className={cx(
          dialogOverlayClass,
          'duration-150 ease-out data-[closed]:opacity-0',
        )}
      />
      <div className={dialogWrapperClass}>
        <DialogPanel
          transition
          className={cx(
            dialogPanelVariants({ size }),
            'duration-150 ease-out data-[closed]:scale-95 data-[closed]:opacity-0',
          )}
        >
          {title && (
            <div className={dialogHeaderClass}>
              <DialogTitle className={dialogTitleClass}>{title}</DialogTitle>
              {dismissable && (
                <button
                  type="button"
                  className={dialogCloseButtonClass}
                  aria-label="Close"
                  onClick={close}
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          )}
          <div className={dialogBodyClass}>{children}</div>
          {actions && <div className={dialogActionsClass}>{actions}</div>}
        </DialogPanel>
      </div>
    </HDialog>
  )
}
