<template>
  <Teleport to="body">
    <div
      v-for="(regionToasts, position) in regions"
      :key="position"
      :class="toastRegionClass[position as ToastPosition]"
    >
      <TransitionGroup
        enter-active-class="transition duration-150 ease-out"
        enter-from-class="translate-y-1 opacity-0"
        enter-to-class="translate-y-0 opacity-100"
        leave-active-class="transition duration-100 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div v-for="item in regionToasts" :key="item.id" :class="toastPanelClass">
          <component :is="icons[item.type]" :class="toastIconVariants({ type: item.type })" />
          <div class="min-w-0 flex-1">
            <div v-if="item.title" :class="toastTitleClass">{{ item.title }}</div>
            <div v-if="item.message" :class="toastMessageClass">{{ item.message }}</div>
          </div>
          <button
            type="button"
            :class="toastCloseClass"
            aria-label="Dismiss"
            @click="dismissToast(item.id)"
          >
            <X class="h-3.5 w-3.5" />
          </button>
        </div>
      </TransitionGroup>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import {
  toastCloseClass,
  toastIconVariants,
  toastMessageClass,
  toastPanelClass,
  toastRegionClass,
  toastTitleClass,
  type ToastPosition,
} from '@fluffy/core'
import { CircleCheck, CircleX, Info, TriangleAlert, X } from 'lucide-vue-next'
import { dismissToast, toastState, type ToastRecord } from '../toast'

defineOptions({ name: 'FToasts' })

const icons = {
  info: Info,
  success: CircleCheck,
  warning: TriangleAlert,
  error: CircleX,
}

const regions = computed(() => {
  const grouped: Partial<Record<ToastPosition, ToastRecord[]>> = {}
  for (const item of toastState.toasts) {
    ;(grouped[item.position] ??= []).push(item)
  }
  return grouped
})
</script>
