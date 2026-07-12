<template>
  <label
    :class="cx('inline-flex items-center gap-2', $attrs.class as string)"
    :for="inputId"
  >
    <input
      :id="inputId"
      type="checkbox"
      :class="checkboxVariants({ size })"
      :checked="modelValue"
      :disabled="disabled"
      @change="$emit('update:modelValue', ($event.target as HTMLInputElement).checked)"
    />
    <span v-if="label || $slots.default" :class="checkboxLabelVariants({ size })">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<script setup lang="ts">
import {
  checkboxLabelVariants,
  checkboxVariants,
  cx,
  uid,
  type CheckboxVariantProps,
} from '@fluffy/core'

defineOptions({ name: 'FCheckbox', inheritAttrs: false })

const props = withDefaults(
  defineProps<{
    modelValue?: boolean
    label?: string
    size?: NonNullable<CheckboxVariantProps['size']>
    disabled?: boolean
    id?: string
  }>(),
  { modelValue: false, label: '', size: 'md', disabled: false, id: undefined },
)

defineEmits<{ 'update:modelValue': [value: boolean] }>()

const inputId = props.id ?? uid('checkbox')
</script>
