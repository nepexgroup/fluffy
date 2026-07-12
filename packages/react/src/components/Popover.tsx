import { Fragment, type ReactNode } from 'react'
import {
  Popover as HPopover,
  PopoverButton,
  PopoverPanel,
} from '@headlessui/react'
import { cx, popoverPanelClass } from '@fluffy/core'
import { Button } from './Button'

export interface PopoverProps {
  label?: string
  placement?: 'left' | 'right'
  trigger?: ReactNode
  children?: ReactNode | ((props: { close: () => void }) => ReactNode)
  className?: string
}

export function Popover({
  label = 'Open',
  placement = 'left',
  trigger,
  children,
  className,
}: PopoverProps) {
  return (
    <HPopover className={cx('relative inline-block', className)}>
      <PopoverButton as={Fragment}>
        {trigger ?? <Button label={label} />}
      </PopoverButton>
      <PopoverPanel
        transition
        anchor={placement === 'right' ? 'bottom end' : 'bottom start'}
        className={cx(
          popoverPanelClass,
          '[--anchor-gap:6px] origin-top transition duration-100 ease-out data-[closed]:scale-95 data-[closed]:opacity-0',
        )}
      >
        {({ close }) => (
          <>
            {typeof children === 'function'
              ? children({ close: () => close() })
              : children}
          </>
        )}
      </PopoverPanel>
    </HPopover>
  )
}
