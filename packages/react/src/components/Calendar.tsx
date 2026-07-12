import { useEffect, useState, type HTMLAttributes } from 'react'
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
import { ChevronLeft, ChevronRight } from 'lucide-react'

export interface CalendarProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Selected date as YYYY-MM-DD */
  value?: string
  onChange?: (value: string) => void
}

export function Calendar({ value = '', onChange, className, ...rest }: CalendarProps) {
  const initial = parseISODate(value) ?? new Date()
  const [view, setView] = useState({
    year: initial.getFullYear(),
    month: initial.getMonth(),
  })

  useEffect(() => {
    const date = parseISODate(value)
    if (date) setView({ year: date.getFullYear(), month: date.getMonth() })
  }, [value])

  const weeks = monthGrid(view.year, view.month)

  function move(delta: number) {
    const next = new Date(view.year, view.month + delta, 1)
    setView({ year: next.getFullYear(), month: next.getMonth() })
  }

  return (
    <div className={cx(calendarClass, className)} {...rest}>
      <div className={calendarHeaderClass}>
        <button
          type="button"
          className={calendarNavButtonClass}
          aria-label="Previous month"
          onClick={() => move(-1)}
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <span className={calendarMonthLabelClass}>
          {MONTH_NAMES[view.month]} {view.year}
        </span>
        <button
          type="button"
          className={calendarNavButtonClass}
          aria-label="Next month"
          onClick={() => move(1)}
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
      <div className="grid grid-cols-7">
        {WEEKDAYS_SHORT.map((day) => (
          <span key={day} className={calendarWeekdayClass}>
            {day}
          </span>
        ))}
      </div>
      {weeks.map((week, weekIndex) => (
        <div key={weekIndex} className="grid grid-cols-7">
          {week.map((day) => (
            <button
              key={day.iso}
              type="button"
              className={calendarDayVariants({
                inMonth: day.inMonth,
                today: day.isToday,
                selected: day.iso === value,
              })}
              onClick={() => onChange?.(day.iso)}
            >
              {day.dayOfMonth}
            </button>
          ))}
        </div>
      ))}
    </div>
  )
}
