<template>
  <HSwitchGroup as="div" :class="cx('flex items-center gap-2', $attrs.class as string)">
    <HSwitch
      :model-value="modelValue"
      :disabled="disabled"
      :class="switchTrackVariants({ size, checked: modelValue })"
      @update:model-value="$emit('update:modelValue', $event)"
    >
      <span :class="switchThumbVariants({ size, checked: modelValue })" />
    </HSwitch>
    <HSwitchLabel
      v-if="label || $slots.default"
      :class="checkboxLabelVariants({ size: size === 'lg' ? 'lg' : 'md' })"
    >
      <slot>{{ label }}</slot>
    </HSwitchLabel>
  </HSwitchGroup>
</template>

<script setup lang="ts">
import {
  Switch as HSwitch,
  SwitchGroup as HSwitchGroup,
  SwitchLabel as HSwitchLabel,
} from '@headlessui/vue'
import {
  checkboxLabelVariants,
  cx,
  switchThumbVariants,
  switchTrackVariants,
  type SwitchTrackVariantProps,
} from '@fluffy/core'

defineOptions({ name: 'FSwitch', inheritAttrs: false })

withDefaults(
  defineProps<{
    modelValue?: boolean
    label?: string
    size?: NonNullable<SwitchTrackVariantProps['size']>
    disabled?: boolean
  }>(),
  { modelValue: false, label: '', size: 'md', disabled: false },
)

defineEmits<{ 'update:modelValue': [value: boolean] }>()
</script>
