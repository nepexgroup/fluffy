<template>
  <svg
    :class="cx(spinnerVariants({ size }), $attrs.class as string)"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <circle
      class="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      stroke-width="3"
    />
    <path
      class="opacity-90"
      d="M12 2a10 10 0 0 1 10 10"
      stroke="currentColor"
      stroke-width="3"
      stroke-linecap="round"
    />
  </svg>
</template>

<script setup lang="ts">
import { cx, spinnerVariants, type SpinnerVariantProps } from '@fluffy/core'

defineOptions({ name: 'FSpinner', inheritAttrs: false })

withDefaults(
  defineProps<{
    size?: NonNullable<SpinnerVariantProps['size']>
  }>(),
  { size: 'md' },
)
</script>
