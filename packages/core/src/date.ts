export interface CalendarDay {
  date: Date
  iso: string
  dayOfMonth: number
  inMonth: boolean
  isToday: boolean
}

export const WEEKDAYS_SHORT = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

export const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export function toISODate(date: Date): string {
  const y = date.getFullYear()
  const m = `${date.getMonth() + 1}`.padStart(2, '0')
  const d = `${date.getDate()}`.padStart(2, '0')
  return `${y}-${m}-${d}`
}

export function parseISODate(value: string): Date | null {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value)
  if (!match) return null
  const date = new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]))
  return Number.isNaN(date.getTime()) ? null : date
}

export function isSameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  )
}

export function addMonths(date: Date, count: number): Date {
  return new Date(date.getFullYear(), date.getMonth() + count, 1)
}

/** 6-week month grid (Sunday-first), the standard date-picker layout. */
export function monthGrid(year: number, month: number): CalendarDay[][] {
  const first = new Date(year, month, 1)
  const start = new Date(year, month, 1 - first.getDay())
  const today = new Date()
  const weeks: CalendarDay[][] = []
  for (let week = 0; week < 6; week++) {
    const days: CalendarDay[] = []
    for (let day = 0; day < 7; day++) {
      const date = new Date(
        start.getFullYear(),
        start.getMonth(),
        start.getDate() + week * 7 + day,
      )
      days.push({
        date,
        iso: toISODate(date),
        dayOfMonth: date.getDate(),
        inMonth: date.getMonth() === month,
        isToday: isSameDay(date, today),
      })
    }
    weeks.push(days)
  }
  return weeks
}

export function formatDate(date: Date, locale = 'en-US'): string {
  return date.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}
