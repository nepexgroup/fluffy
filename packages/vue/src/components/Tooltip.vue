<template>
  <span
    ref="reference"
    class="inline-flex"
    @mouseenter="show"
    @mouseleave="hide"
    @focusin="show"
    @focusout="hide"
  >
    <slot />
  </span>
  <Teleport to="body">
    <div
      v-if="open"
      ref="floating"
      :class="tooltipContentClass"
      :style="{ position: 'fixed', left: `${x}px`, top: `${y}px` }"
      role="tooltip"
    >
      {{ text }}
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Placement } from '@floating-ui/dom'
import { tooltipContentClass } from '@fluffy/core'
import { useFloatingPanel } from '../composables/useFloatingPanel'

defineOptions({ name: 'FTooltip' })

const props = withDefaults(
  defineProps<{
    text: string
    placement?: Placement
    delay?: number
  }>(),
  { placement: 'top', delay: 300 },
)

const reference = ref<HTMLElement | null>(null)
const floating = ref<HTMLElement | null>(null)
const open = ref(false)
let timer: ReturnType<typeof setTimeout> | null = null

const { x, y } = useFloatingPanel(reference, floating, {
  placement: props.placement,
  gap: 6,
  open,
})

function show() {
  if (timer) clearTimeout(timer)
  timer = setTimeout(() => {
    open.value = true
  }, props.delay)
}

function hide() {
  if (timer) clearTimeout(timer)
  open.value = false
}
</script>
