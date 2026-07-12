<template>
  <div
    v-if="$slots.default || label"
    :class="cx(dividerWithLabelClass, $attrs.class as string)"
    role="separator"
  >
    <slot>{{ label }}</slot>
  </div>
  <div
    v-else
    :class="cx(dividerVariants({ orientation, variant }), $attrs.class as string)"
    role="separator"
    :aria-orientation="orientation"
  />
</template>

<script setup lang="ts">
import {
  cx,
  dividerVariants,
  dividerWithLabelClass,
  type DividerVariantProps,
} from '@fluffy/core'

defineOptions({ name: 'FDivider', inheritAttrs: false })

withDefaults(
  defineProps<{
    orientation?: NonNullable<DividerVariantProps['orientation']>
    variant?: NonNullable<DividerVariantProps['variant']>
    label?: string
  }>(),
  { orientation: 'horizontal', variant: 'solid', label: '' },
)
</script>
