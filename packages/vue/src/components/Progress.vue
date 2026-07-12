<template>
  <div :class="$attrs.class as string">
    <div v-if="label || showValue" :class="progressLabelClass">
      <span>{{ label }}</span>
      <span v-if="showValue" class="text-xs text-ink-gray-5">{{ clamped }}%</span>
    </div>
    <div
      :class="progressTrackVariants({ size })"
      role="progressbar"
      :aria-valuenow="clamped"
      aria-valuemin="0"
      aria-valuemax="100"
      :aria-label="label || 'Progress'"
    >
      <div
        :class="progressBarVariants({ theme })"
        :style="{ width: `${clamped}%` }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import {
  clamp,
  progressBarVariants,
  progressLabelClass,
  progressTrackVariants,
  type ProgressBarVariantProps,
  type ProgressTrackVariantProps,
} from '@fluffy/core'

defineOptions({ name: 'FProgress', inheritAttrs: false })

const props = withDefaults(
  defineProps<{
    value: number
    size?: NonNullable<ProgressTrackVariantProps['size']>
    theme?: NonNullable<ProgressBarVariantProps['theme']>
    label?: string
    showValue?: boolean
  }>(),
  { size: 'md', theme: 'gray', label: '', showValue: false },
)

const clamped = computed(() => Math.round(clamp(props.value, 0, 100)))
</script>
