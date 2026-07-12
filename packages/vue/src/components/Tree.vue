<template>
  <div :class="cx(treeClass, $attrs.class as string)" role="tree">
    <TreeNode
      v-for="node in nodes"
      :key="node.value"
      :node="node"
      :selected="modelValue"
      :expanded-values="expandedValues"
      @select="$emit('update:modelValue', $event)"
      @toggle="toggle"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { cx, treeClass, type TreeNode as TreeNodeData } from '@fluffy/core'
import TreeNode from './TreeNode.vue'

defineOptions({ name: 'FTree', inheritAttrs: false })

const props = withDefaults(
  defineProps<{
    nodes: TreeNodeData[]
    modelValue?: string
    defaultExpanded?: string[]
  }>(),
  { modelValue: '', defaultExpanded: () => [] },
)

defineEmits<{ 'update:modelValue': [value: string] }>()

const expandedValues = ref<string[]>([...props.defaultExpanded])

function toggle(value: string) {
  expandedValues.value = expandedValues.value.includes(value)
    ? expandedValues.value.filter((expanded) => expanded !== value)
    : [...expandedValues.value, value]
}
</script>
