import { clsx, type ClassValue } from 'clsx'

export type { ClassValue }

/** Merge class values (thin wrapper over clsx so both frameworks share one impl). */
export function cx(...inputs: ClassValue[]): string {
  return clsx(...inputs)
}

let counter = 0

/** Generate a stable unique id for aria wiring. */
export function uid(prefix = 'fluffy'): string {
  counter += 1
  return `${prefix}-${counter}`
}

/** Initials from a name/label, e.g. "Sandesh Rana" -> "SR". */
export function initials(label: string): string {
  return label
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word.charAt(0).toUpperCase())
    .join('')
}

/** Clamp a number between min and max. */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value))
}

/** Human readable file size, e.g. 1536 -> "1.5 KB". */
export function fileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`
  const units = ['KB', 'MB', 'GB', 'TB']
  let value = bytes
  let unit = -1
  do {
    value /= 1024
    unit += 1
  } while (value >= 1024 && unit < units.length - 1)
  return `${value.toFixed(1)} ${units[unit]}`
}
