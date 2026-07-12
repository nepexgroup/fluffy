<template>
  <span :class="cx(avatarVariants({ size, shape }), $attrs.class as string)">
    <img
      v-if="image && !imageFailed"
      :class="avatarImageClass"
      :src="image"
      :alt="label"
      @error="imageFailed = true"
    />
    <template v-else>{{ initials(label) }}</template>
    <span
      v-if="indicator"
      :class="avatarIndicatorClass({ color: indicator, size })"
    />
  </span>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  avatarImageClass,
  avatarIndicatorClass,
  avatarVariants,
  cx,
  initials,
  type AvatarVariantProps,
} from '@fluffy/core'

defineOptions({ name: 'FAvatar', inheritAttrs: false })

withDefaults(
  defineProps<{
    image?: string
    label?: string
    size?: NonNullable<AvatarVariantProps['size']>
    shape?: NonNullable<AvatarVariantProps['shape']>
    indicator?: 'gray' | 'green' | 'red' | 'amber' | 'blue' | null
  }>(),
  { image: '', label: '', size: 'md', shape: 'circle', indicator: null },
)

const imageFailed = ref(false)
</script>
