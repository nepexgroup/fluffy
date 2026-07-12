<template>
  <div :class="cx(alertVariants({ theme }), $attrs.class as string)" role="alert">
    <slot name="icon">
      <component :is="defaultIcon" :class="alertIconVariants({ theme })" />
    </slot>
    <div class="min-w-0 flex-1">
      <div v-if="title" :class="alertTitleClass">{{ title }}</div>
      <div v-if="$slots.default" :class="title ? alertBodyClass : ''">
        <slot />
      </div>
    </div>
    <slot name="actions" />
    <button
      v-if="dismissible"
      type="button"
      class="ml-1 shrink-0 rounded p-0.5 opacity-60 transition-opacity hover:opacity-100"
      aria-label="Dismiss"
      @click="$emit('dismiss')"
    >
      <X class="h-3.5 w-3.5" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import {
  alertBodyClass,
  alertIconVariants,
  alertTitleClass,
  alertVariants,
  cx,
  type AlertVariantProps,
} from '@fluffy/core'
import { CircleCheck, CircleX, Info, Megaphone, TriangleAlert, X } from 'lucide-vue-next'

defineOptions({ name: 'FAlert', inheritAttrs: false })

const props = withDefaults(
  defineProps<{
    theme?: NonNullable<AlertVariantProps['theme']>
    title?: string
    dismissible?: boolean
  }>(),
  { theme: 'gray', title: '', dismissible: false },
)

defineEmits<{ dismiss: [] }>()

const icons = {
  gray: Megaphone,
  info: Info,
  success: CircleCheck,
  warning: TriangleAlert,
  danger: CircleX,
}

const defaultIcon = computed(() => icons[props.theme])
</script>
