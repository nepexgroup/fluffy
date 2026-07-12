<template>
  <div :class="cx(calendarClass, $attrs.class as string)">
    <div :class="calendarHeaderClass">
      <button type="button" :class="calendarNavButtonClass" aria-label="Previous month" @click="move(-1)">
        <ChevronLeft class="h-4 w-4" />
      </button>
      <span :class="calendarMonthLabelClass">
        {{ MONTH_NAMES[viewMonth] }} {{ viewYear }}
      </span>
      <button type="button" :class="calendarNavButtonClass" aria-label="Next month" @click="move(1)">
        <ChevronRight class="h-4 w-4" />
      </button>
    </div>
    <div class="grid grid-cols-7">
      <span v-for="day in WEEKDAYS_SHORT" :key="day" :class="calendarWeekdayClass">
        {{ day }}
      </span>
    </div>
    <div v-for="(week, weekIndex) in weeks" :key="weekIndex" class="grid grid-cols-7">
      <button
        v-for="day in week"
        :key="day.iso"
        type="button"
        :class="
          calendarDayVariants({
            inMonth: day.inMonth,
            today: day.isToday,
            selected: day.iso === modelValue,
          })
        "
        @click="select(day.iso)"
      >
        {{ day.dayOfMonth }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import {
  MONTH_NAMES,
  WEEKDAYS_SHORT,
  calendarClass,
  calendarDayVariants,
  calendarHeaderClass,
  calendarMonthLabelClass,
  calendarNavButtonClass,
  calendarWeekdayClass,
  cx,
  monthGrid,
  parseISODate,
} from '@fluffy/core'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'

defineOptions({ name: 'FCalendar', inheritAttrs: false })

const props = withDefaults(
  defineProps<{
    /** Selected date as YYYY-MM-DD */
    modelValue?: string
  }>(),
  { modelValue: '' },
)

const emit = defineEmits<{ 'update:modelValue': [value: string] }>()

const initial = parseISODate(props.modelValue) ?? new Date()
const viewYear = ref(initial.getFullYear())
const viewMonth = ref(initial.getMonth())

watch(
  () => props.modelValue,
  (value) => {
    const date = parseISODate(value)
    if (date) {
      viewYear.value = date.getFullYear()
      viewMonth.value = date.getMonth()
    }
  },
)

const weeks = computed(() => monthGrid(viewYear.value, viewMonth.value))

function move(delta: number) {
  const next = new Date(viewYear.value, viewMonth.value + delta, 1)
  viewYear.value = next.getFullYear()
  viewMonth.value = next.getMonth()
}

function select(iso: string) {
  emit('update:modelValue', iso)
}
</script>
