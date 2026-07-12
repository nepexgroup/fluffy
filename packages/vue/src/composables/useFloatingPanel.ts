import { onBeforeUnmount, ref, watch, type Ref } from 'vue'
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
export function useFloatingPanel(
  reference: Ref<HTMLElement | null>,
  floating: Ref<HTMLElement | null>,
  options: { placement?: Placement; gap?: number; open?: Ref<boolean> } = {},
) {
  const { placement = 'bottom-start', gap = 6, open } = options
  const x = ref(0)
  const y = ref(0)
  let cleanup: (() => void) | null = null

  async function update() {
    if (!reference.value || !floating.value) return
    const pos = await computePosition(reference.value, floating.value, {
      placement,
      strategy: 'fixed',
      middleware: [offset(gap), flip(), shift({ padding: 8 })],
    })
    x.value = pos.x
    y.value = pos.y
  }

  function start() {
    stop()
    if (!reference.value || !floating.value) return
    cleanup = autoUpdate(reference.value, floating.value, update)
  }

  function stop() {
    cleanup?.()
    cleanup = null
  }

  if (open) {
    watch(open, (value) => {
      if (value) {
        // wait a tick so the panel is in the DOM
        requestAnimationFrame(start)
      } else {
        stop()
      }
    })
  }

  watch([reference, floating], () => {
    if (!open || open.value) start()
  })

  onBeforeUnmount(stop)

  return { x, y, update, start, stop }
}
