<template>
  <nav :class="$attrs.class as string" aria-label="Breadcrumb">
    <ol :class="breadcrumbsListClass">
      <li
        v-for="(item, index) in items"
        :key="index"
        class="flex items-center gap-1"
      >
        <ChevronRight v-if="index > 0" class="h-3.5 w-3.5" :class="breadcrumbSeparatorClass" />
        <component
          :is="item.href && index !== items.length - 1 ? 'a' : 'span'"
          :href="item.href"
          :class="breadcrumbItemVariants({ current: index === items.length - 1 })"
          :aria-current="index === items.length - 1 ? 'page' : undefined"
        >
          {{ item.label }}
        </component>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
import {
  breadcrumbItemVariants,
  breadcrumbSeparatorClass,
  breadcrumbsListClass,
  type BreadcrumbItem,
} from '@fluffy/core'
import { ChevronRight } from 'lucide-vue-next'

defineOptions({ name: 'FBreadcrumbs', inheritAttrs: false })

defineProps<{ items: BreadcrumbItem[] }>()
</script>
