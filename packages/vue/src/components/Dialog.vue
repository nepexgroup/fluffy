<template>
  <TransitionRoot :show="modelValue" as="template">
    <HDialog class="relative" @close="close">
      <TransitionChild
        as="template"
        enter="duration-150 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-100 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div :class="dialogOverlayClass" aria-hidden="true" />
      </TransitionChild>
      <div :class="dialogWrapperClass">
        <TransitionChild
          as="template"
          enter="duration-150 ease-out"
          enter-from="scale-95 opacity-0"
          enter-to="scale-100 opacity-100"
          leave="duration-100 ease-in"
          leave-from="scale-100 opacity-100"
          leave-to="scale-95 opacity-0"
        >
          <HDialogPanel :class="dialogPanelVariants({ size })">
            <div v-if="title || $slots.title" :class="dialogHeaderClass">
              <HDialogTitle :class="dialogTitleClass">
                <slot name="title">{{ title }}</slot>
              </HDialogTitle>
              <button
                v-if="dismissable"
                type="button"
                :class="dialogCloseButtonClass"
                aria-label="Close"
                @click="close"
              >
                <X class="h-4 w-4" />
              </button>
            </div>
            <div :class="dialogBodyClass">
              <slot />
            </div>
            <div v-if="$slots.actions" :class="dialogActionsClass">
              <slot name="actions" :close="close" />
            </div>
          </HDialogPanel>
        </TransitionChild>
      </div>
    </HDialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import {
  Dialog as HDialog,
  DialogPanel as HDialogPanel,
  DialogTitle as HDialogTitle,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import {
  dialogActionsClass,
  dialogBodyClass,
  dialogCloseButtonClass,
  dialogHeaderClass,
  dialogOverlayClass,
  dialogPanelVariants,
  dialogTitleClass,
  dialogWrapperClass,
  type DialogPanelVariantProps,
} from '@fluffy/core'
import { X } from 'lucide-vue-next'

defineOptions({ name: 'FDialog' })

const props = withDefaults(
  defineProps<{
    modelValue: boolean
    title?: string
    size?: NonNullable<DialogPanelVariantProps['size']>
    dismissable?: boolean
  }>(),
  { title: '', size: 'lg', dismissable: true },
)

const emit = defineEmits<{ 'update:modelValue': [value: boolean] }>()

function close() {
  if (props.dismissable) emit('update:modelValue', false)
}
</script>
