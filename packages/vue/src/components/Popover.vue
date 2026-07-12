<template>
  <HPopover :class="cx('relative inline-block', $attrs.class as string)" v-slot="{ open }">
    <HPopoverButton as="template">
      <slot name="trigger" :open="open">
        <Button :label="label" />
      </slot>
    </HPopoverButton>
    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="scale-95 opacity-0"
      enter-to-class="scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="scale-100 opacity-100"
      leave-to-class="scale-95 opacity-0"
    >
      <HPopoverPanel
        v-slot="{ close }"
        :class="[
          popoverPanelClass,
          'absolute mt-1.5',
          placement === 'right' ? 'right-0' : 'left-0',
        ]"
      >
        <slot :close="close" />
      </HPopoverPanel>
    </transition>
  </HPopover>
</template>

<script setup lang="ts">
import {
  Popover as HPopover,
  PopoverButton as HPopoverButton,
  PopoverPanel as HPopoverPanel,
} from '@headlessui/vue'
import { cx, popoverPanelClass } from '@fluffy/core'
import Button from './Button.vue'

defineOptions({ name: 'FPopover', inheritAttrs: false })

withDefaults(
  defineProps<{
    label?: string
    placement?: 'left' | 'right'
  }>(),
  { label: 'Open', placement: 'left' },
)
</script>
