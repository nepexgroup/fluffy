<template>
  <textarea
    :id="id"
    :class="
      cx(
        textareaVariants({ variant, size, state: error ? 'error' : 'normal' }),
        $attrs.class as string,
      )
    "
    :value="modelValue"
    :placeholder="placeholder"
    :disabled="disabled"
    :rows="rows"
    v-bind="attrsWithoutClass"
    @input="$emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
  />
</template>

<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import { cx, textareaVariants, type TextareaVariantProps } from '@fluffy/core'

defineOptions({ name: 'FTextarea', inheritAttrs: false })

withDefaults(
  defineProps<{
    modelValue?: string
    id?: string
    variant?: NonNullable<TextareaVariantProps['variant']>
    size?: NonNullable<TextareaVariantProps['size']>
    placeholder?: string
    disabled?: boolean
    error?: boolean
    rows?: number
  }>(),
  {
    modelValue: '',
    id: undefined,
    variant: 'subtle',
    size: 'md',
    placeholder: '',
    disabled: false,
    error: false,
    rows: 3,
  },
)

defineEmits<{ 'update:modelValue': [value: string] }>()

const attrs = useAttrs()
const attrsWithoutClass = computed(() => {
  const { class: _class, ...rest } = attrs
  return rest
})
</script>
