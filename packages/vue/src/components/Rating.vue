<template>
  <div
    :class="cx(ratingGroupClass, $attrs.class as string)"
    role="radiogroup"
    aria-label="Rating"
    @mouseleave="hovered = 0"
  >
    <button
      v-for="star in max"
      :key="star"
      type="button"
      role="radio"
      :aria-checked="star === modelValue"
      :aria-label="`${star} star${star > 1 ? 's' : ''}`"
      :disabled="readonly"
      class="focus-visible:outline-none"
      @mouseenter="!readonly && (hovered = star)"
      @click="!readonly && $emit('update:modelValue', star === modelValue ? 0 : star)"
    >
      <Star
        :class="
          ratingStarVariants({
            size,
            filled: star <= (hovered || modelValue),
            readonly,
          })
        "
      />
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  cx,
  ratingGroupClass,
  ratingStarVariants,
  type RatingStarVariantProps,
} from '@fluffy/core'
import { Star } from 'lucide-vue-next'

defineOptions({ name: 'FRating', inheritAttrs: false })

withDefaults(
  defineProps<{
    modelValue?: number
    max?: number
    size?: NonNullable<RatingStarVariantProps['size']>
    readonly?: boolean
  }>(),
  { modelValue: 0, max: 5, size: 'md', readonly: false },
)

defineEmits<{ 'update:modelValue': [value: number] }>()

const hovered = ref(0)
</script>
