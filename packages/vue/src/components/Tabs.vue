<template>
  <div :class="$attrs.class as string">
    <div
      :class="variant === 'pill' ? tabPillListClass : tabListClass"
      role="tablist"
    >
      <button
        v-for="tab in tabs"
        :key="tab.value"
        type="button"
        role="tab"
        :aria-selected="tab.value === modelValue"
        :disabled="tab.disabled"
        :class="
          variant === 'pill'
            ? tabPillVariants({ active: tab.value === modelValue })
            : tabButtonVariants({ active: tab.value === modelValue })
        "
        @click="$emit('update:modelValue', tab.value)"
      >
        {{ tab.label }}
      </button>
    </div>
    <div v-if="$slots.default" :class="tabPanelClass" role="tabpanel">
      <slot :value="modelValue" />
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  tabButtonVariants,
  tabListClass,
  tabPanelClass,
  tabPillListClass,
  tabPillVariants,
  type TabItem,
} from '@fluffy/core'

defineOptions({ name: 'FTabs', inheritAttrs: false })

withDefaults(
  defineProps<{
    tabs: TabItem[]
    modelValue: string
    variant?: 'underline' | 'pill'
  }>(),
  { variant: 'underline' },
)

defineEmits<{ 'update:modelValue': [value: string] }>()
</script>
