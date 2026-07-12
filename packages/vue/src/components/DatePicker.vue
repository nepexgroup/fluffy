<template>
  <HPopover :class="cx('relative inline-block w-full', $attrs.class as string)">
    <HPopoverButton class="w-full text-left" :disabled="disabled">
      <div class="relative">
        <input
          readonly
          :class="[
            inputVariants({ variant, size, state: error ? 'error' : 'normal' }),
            'cursor-pointer pr-8',
          ]"
          :value="displayValue"
          :placeholder="placeholder"
          :disabled="disabled"
        />
        <CalendarIcon
          class="pointer-events-none absolute inset-y-0 right-2.5 my-auto h-4 w-4 text-ink-gray-5"
        />
      </div>
    </HPopoverButton>
    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="scale-95 opacity-0"
      enter-to-class="scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="scale-100 opacity-100"
      leave-to-class="scale-95 opacity-0"
    >
      <HPopoverPanel v-slot="{ close }" :class="[popoverPanelClass, 'absolute z-50 mt-1.5']">
        <Calendar
          :model-value="modelValue"
          @update:model-value="
            (value: string) => {
              $emit('update:modelValue', value)
              close()
            }
          "
        />
        <div class="mt-2 flex justify-between border-t border-outline-gray-1 pt-2">
          <button
            type="button"
            class="rounded px-1.5 py-0.5 text-sm text-ink-gray-6 hover:bg-surface-gray-2"
            @click="
              () => {
                $emit('update:modelValue', toISODate(new Date()))
                close()
              }
            "
          >
            Today
          </button>
          <button
            type="button"
            class="rounded px-1.5 py-0.5 text-sm text-ink-gray-6 hover:bg-surface-gray-2"
            @click="
              () => {
                $emit('update:modelValue', '')
                close()
              }
            "
          >
            Clear
          </button>
        </div>
      </HPopoverPanel>
    </transition>
  </HPopover>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import {
  Popover as HPopover,
  PopoverButton as HPopoverButton,
  PopoverPanel as HPopoverPanel,
} from '@headlessui/vue'
import {
  cx,
  formatDate,
  inputVariants,
  parseISODate,
  popoverPanelClass,
  toISODate,
  type InputVariantProps,
} from '@fluffy/core'
import { Calendar as CalendarIcon } from 'lucide-vue-next'
import Calendar from './Calendar.vue'

defineOptions({ name: 'FDatePicker', inheritAttrs: false })

const props = withDefaults(
  defineProps<{
    /** YYYY-MM-DD */
    modelValue?: string
    placeholder?: string
    variant?: NonNullable<InputVariantProps['variant']>
    size?: NonNullable<InputVariantProps['size']>
    disabled?: boolean
    error?: boolean
  }>(),
  {
    modelValue: '',
    placeholder: 'Select date',
    variant: 'subtle',
    size: 'md',
    disabled: false,
    error: false,
  },
)

defineEmits<{ 'update:modelValue': [value: string] }>()

const displayValue = computed(() => {
  const date = parseISODate(props.modelValue)
  return date ? formatDate(date) : ''
})
</script>
