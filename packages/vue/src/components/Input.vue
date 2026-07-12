<template>
  <div :class="cx('relative', $attrs.class as string)">
    <span
      v-if="$slots.prefix"
      class="pointer-events-none absolute inset-y-0 left-2.5 flex items-center text-ink-gray-5 [&>svg]:h-4 [&>svg]:w-4"
    >
      <slot name="prefix" />
    </span>
    <input
      :id="id"
      :class="
        cx(
          inputVariants({ variant, size, state: error ? 'error' : 'normal' }),
          $slots.prefix && 'pl-8',
          $slots.suffix && 'pr-8',
        )
      "
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      v-bind="attrsWithoutClass"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
    <span
      v-if="$slots.suffix"
      class="pointer-events-none absolute inset-y-0 right-2.5 flex items-center text-ink-gray-5 [&>svg]:h-4 [&>svg]:w-4"
    >
      <slot name="suffix" />
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import { cx, inputVariants, type InputVariantProps } from '@fluffy/core'

defineOptions({ name: 'FInput', inheritAttrs: false })

withDefaults(
  defineProps<{
    modelValue?: string | number
    type?: string
    id?: string
    variant?: NonNullable<InputVariantProps['variant']>
    size?: NonNullable<InputVariantProps['size']>
    placeholder?: string
    disabled?: boolean
    error?: boolean
  }>(),
  {
    modelValue: '',
    type: 'text',
    id: undefined,
    variant: 'subtle',
    size: 'md',
    placeholder: '',
    disabled: false,
    error: false,
  },
)

defineEmits<{ 'update:modelValue': [value: string] }>()

const attrs = useAttrs()
const attrsWithoutClass = computed(() => {
  const { class: _class, ...rest } = attrs
  return rest
})
</script>
