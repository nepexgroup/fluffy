<template>
  <p v-if="message" :class="cx(formErrorClass, $attrs.class as string)">
    {{ message }}
  </p>
</template>

<script setup lang="ts">
import { cx, formErrorClass } from '@fluffy/core'

defineOptions({ name: 'FErrorMessage', inheritAttrs: false })

withDefaults(defineProps<{ message?: string }>(), { message: '' })
</script>
