<template>
  <span :class="cx(badgeVariants({ variant, theme, size }), $attrs.class as string)">
    <slot name="prefix" />
    <slot>{{ label }}</slot>
    <slot name="suffix" />
  </span>
</template>

<script setup lang="ts">
import { badgeVariants, cx, type BadgeVariantProps } from '@fluffy/core'

defineOptions({ name: 'FBadge', inheritAttrs: false })

withDefaults(
  defineProps<{
    theme?: NonNullable<BadgeVariantProps['theme']>
    variant?: NonNullable<BadgeVariantProps['variant']>
    size?: NonNullable<BadgeVariantProps['size']>
    label?: string
  }>(),
  { theme: 'gray', variant: 'subtle', size: 'md', label: '' },
)
</script>
