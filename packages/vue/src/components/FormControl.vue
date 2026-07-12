<template>
  <div :class="cx('space-y-1.5', $attrs.class as string)">
    <label v-if="label" :class="formLabelVariants({ size })" :for="controlId">
      {{ label }}
      <span v-if="required" :class="requiredMarkClass">*</span>
    </label>
    <slot :id="controlId" :error="!!error" />
    <p v-if="description && !error" :class="formDescriptionClass">
      {{ description }}
    </p>
    <p v-if="error" :class="formErrorClass">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
import {
  cx,
  formDescriptionClass,
  formErrorClass,
  formLabelVariants,
  requiredMarkClass,
  uid,
  type FormLabelVariantProps,
} from '@fluffy/core'

defineOptions({ name: 'FFormControl', inheritAttrs: false })

const props = withDefaults(
  defineProps<{
    label?: string
    description?: string
    error?: string
    required?: boolean
    size?: NonNullable<FormLabelVariantProps['size']>
    id?: string
  }>(),
  {
    label: '',
    description: '',
    error: '',
    required: false,
    size: 'md',
    id: undefined,
  },
)

const controlId = props.id ?? uid('field')
</script>
