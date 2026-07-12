<template>
  <button
    :class="
      cx(
        buttonVariants({
          variant,
          theme,
          size,
          block,
          iconOnly: isIconOnly,
        }),
        $attrs.class as string,
      )
    "
    :type="type"
    :disabled="disabled || loading"
    v-bind="attrsWithoutClass"
  >
    <Spinner v-if="loading" :class="buttonIconClass[size]" />
    <slot v-else-if="$slots.prefix" name="prefix" />
    <template v-if="!isIconOnly">
      <slot>{{ label }}</slot>
    </template>
    <slot v-else-if="!loading" name="icon" />
    <slot v-if="$slots.suffix" name="suffix" />
  </button>
</template>

<script setup lang="ts">
import { computed, useAttrs, useSlots } from 'vue'
import {
  buttonIconClass,
  buttonVariants,
  cx,
  type ButtonVariantProps,
} from '@fluffy/core'
import Spinner from './Spinner.vue'

defineOptions({ name: 'FButton', inheritAttrs: false })

const props = withDefaults(
  defineProps<{
    theme?: NonNullable<ButtonVariantProps['theme']>
    variant?: NonNullable<ButtonVariantProps['variant']>
    size?: NonNullable<ButtonVariantProps['size']>
    label?: string
    block?: boolean
    loading?: boolean
    disabled?: boolean
    type?: 'button' | 'submit' | 'reset'
  }>(),
  {
    theme: 'gray',
    variant: 'subtle',
    size: 'md',
    label: '',
    block: false,
    loading: false,
    disabled: false,
    type: 'button',
  },
)

const slots = useSlots()
const attrs = useAttrs()

const isIconOnly = computed(
  () => !!slots.icon && !slots.default && !props.label,
)

const attrsWithoutClass = computed(() => {
  const { class: _class, ...rest } = attrs
  return rest
})
</script>
