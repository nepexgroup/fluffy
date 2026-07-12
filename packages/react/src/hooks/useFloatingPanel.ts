import { useCallback, useEffect, useRef, useState } from 'react'
import {
  autoUpdate,
  computePosition,
  flip,
  offset,
  shift,
  type Placement,
} from '@floating-ui/dom'

/**
 * Position a floating element relative to a reference element.
 * Keeps the position in sync while `open` is true.
 */
export function useFloatingPanel(options: {
  placement?: Placement
  gap?: number
  open: boolean
}) {
  const { placement = 'bottom-start', gap = 6, open } = options
  const referenceRef = useRef<HTMLElement | null>(null)
  const floatingRef = useRef<HTMLElement | null>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const update = useCallback(async () => {
    if (!referenceRef.current || !floatingRef.current) return
    const pos = await computePosition(referenceRef.current, floatingRef.current, {
      placement,
      strategy: 'fixed',
      middleware: [offset(gap), flip(), shift({ padding: 8 })],
    })
    setPosition({ x: pos.x, y: pos.y })
  }, [placement, gap])

  useEffect(() => {
    if (!open || !referenceRef.current || !floatingRef.current) return
    return autoUpdate(referenceRef.current, floatingRef.current, update)
  }, [open, update])

  return { referenceRef, floatingRef, ...position }
}
