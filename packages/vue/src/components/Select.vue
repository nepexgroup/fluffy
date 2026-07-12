<template>
  <div :class="cx('relative', $attrs.class as string)">
    <select
      :id="id"
      :class="
        cx(
          inputVariants({ variant, size, state: error ? 'error' : 'normal' }),
          selectVariants(),
          !modelValue && placeholder && 'text-ink-gray-4',
        )
      "
      :value="modelValue"
      :disabled="disabled"
      v-bind="attrsWithoutClass"
      @change="$emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
    >
      <option v-if="placeholder" value="" disabled>{{ placeholder }}</option>
      <option
        v-for="option in normalizedOptions"
        :key="option.value"
        :value="option.value"
        :disabled="option.disabled"
      >
        {{ option.label }}
      </option>
    </select>
    <ChevronDown :class="selectChevronClass" />
  </div>
</template>

<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import {
  cx,
  inputVariants,
  selectChevronClass,
  selectVariants,
  type InputVariantProps,
  type SelectOption,
} from '@fluffy/core'
import { ChevronDown } from 'lucide-vue-next'

defineOptions({ name: 'FSelect', inheritAttrs: false })

const props = withDefaults(
  defineProps<{
    modelValue?: string
    options?: (SelectOption | string)[]
    id?: string
    variant?: NonNullable<InputVariantProps['variant']>
    size?: NonNullable<InputVariantProps['size']>
    placeholder?: string
    disabled?: boolean
    error?: boolean
  }>(),
  {
    modelValue: '',
    options: () => [],
    id: undefined,
    variant: 'subtle',
    size: 'md',
    placeholder: '',
    disabled: false,
    error: false,
  },
)

defineEmits<{ 'update:modelValue': [value: string] }>()

const normalizedOptions = computed<SelectOption[]>(() =>
  props.options.map((option) =>
    typeof option === 'string' ? { label: option, value: option } : option,
  ),
)

const attrs = useAttrs()
const attrsWithoutClass = computed(() => {
  const { class: _class, ...rest } = attrs
  return rest
})
</script>
