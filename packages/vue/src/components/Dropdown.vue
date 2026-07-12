<template>
  <Menu as="div" :class="cx('relative inline-block', $attrs.class as string)" v-slot="{ open }">
    <MenuButton as="template">
      <slot name="trigger" :open="open">
        <Button :label="label" :theme="theme" :variant="variant" :size="size">
          <template #suffix>
            <ChevronDown class="h-4 w-4" />
          </template>
        </Button>
      </slot>
    </MenuButton>
    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="scale-95 opacity-0"
      enter-to-class="scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="scale-100 opacity-100"
      leave-to-class="scale-95 opacity-0"
    >
      <MenuItems
        :class="[
          menuPanelClass,
          'absolute mt-1.5 origin-top-left',
          placement === 'right' ? 'right-0 origin-top-right' : 'left-0',
        ]"
      >
        <template v-for="(group, groupIndex) in groups" :key="groupIndex">
          <div v-if="groupIndex > 0" :class="menuSeparatorClass" />
          <div v-if="group.label" :class="menuGroupLabelClass">{{ group.label }}</div>
          <MenuItem
            v-for="item in group.items"
            :key="item.label"
            v-slot="{ active }"
            :disabled="item.disabled"
          >
            <button
              type="button"
              :class="
                menuItemVariants({
                  active,
                  danger: !!item.danger,
                  disabled: !!item.disabled,
                })
              "
              @click="item.onClick?.()"
            >
              <component v-if="item.icon" :is="item.icon" :class="menuItemIconClass" />
              {{ item.label }}
            </button>
          </MenuItem>
        </template>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script setup lang="ts">
import { computed, type Component } from 'vue'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import {
  cx,
  menuGroupLabelClass,
  menuItemIconClass,
  menuItemVariants,
  menuPanelClass,
  menuSeparatorClass,
  type ButtonVariantProps,
} from '@fluffy/core'
import { ChevronDown } from 'lucide-vue-next'
import Button from './Button.vue'

export interface DropdownItem {
  label: string
  icon?: Component
  onClick?: () => void
  danger?: boolean
  disabled?: boolean
}

export interface DropdownGroup {
  label?: string
  items: DropdownItem[]
}

defineOptions({ name: 'FDropdown', inheritAttrs: false })

const props = withDefaults(
  defineProps<{
    options: DropdownItem[] | DropdownGroup[]
    label?: string
    theme?: NonNullable<ButtonVariantProps['theme']>
    variant?: NonNullable<ButtonVariantProps['variant']>
    size?: NonNullable<ButtonVariantProps['size']>
    placement?: 'left' | 'right'
  }>(),
  {
    label: 'Options',
    theme: 'gray',
    variant: 'subtle',
    size: 'md',
    placement: 'left',
  },
)

const groups = computed<DropdownGroup[]>(() => {
  if (!props.options.length) return []
  if ('items' in props.options[0]) return props.options as DropdownGroup[]
  return [{ items: props.options as DropdownItem[] }]
})
</script>
