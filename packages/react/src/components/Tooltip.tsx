import { useRef, useState, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import type { Placement } from '@floating-ui/dom'
import { tooltipContentClass } from '@fluffy/core'
import { useFloatingPanel } from '../hooks/useFloatingPanel'

export interface TooltipProps {
  text: string
  placement?: Placement
  delay?: number
  children: ReactNode
}

export function Tooltip({
  text,
  placement = 'top',
  delay = 300,
  children,
}: TooltipProps) {
  const [open, setOpen] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const { referenceRef, floatingRef, x, y } = useFloatingPanel({
    placement,
    gap: 6,
    open,
  })

  function show() {
    if (timer.current) clearTimeout(timer.current)
    timer.current = setTimeout(() => setOpen(true), delay)
  }

  function hide() {
    if (timer.current) clearTimeout(timer.current)
    setOpen(false)
  }

  return (
    <>
      <span
        ref={(node) => {
          referenceRef.current = node
        }}
        className="inline-flex"
        onMouseEnter={show}
        onMouseLeave={hide}
        onFocus={show}
        onBlur={hide}
      >
        {children}
      </span>
      {open &&
        createPortal(
          <div
            ref={(node) => {
              floatingRef.current = node
            }}
            className={tooltipContentClass}
            style={{ position: 'fixed', left: x, top: y }}
            role="tooltip"
          >
            {text}
          </div>,
          document.body,
        )}
    </>
  )
}
