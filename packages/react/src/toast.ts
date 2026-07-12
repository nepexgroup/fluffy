import { uid, type ToastOptions, type ToastPosition } from '@fluffy/core'

export interface ToastRecord
  extends Required<Pick<ToastOptions, 'type' | 'position'>> {
  id: string
  title: string
  message: string
  duration: number
}

type Listener = () => void

let toasts: ToastRecord[] = []
const listeners = new Set<Listener>()

function notify() {
  for (const listener of listeners) listener()
}

export function subscribeToasts(listener: Listener): () => void {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

export function getToasts(): ToastRecord[] {
  return toasts
}

export function dismissToast(id: string) {
  toasts = toasts.filter((toast) => toast.id !== id)
  notify()
}

export function toast(options: ToastOptions | string): string {
  const opts: ToastOptions =
    typeof options === 'string' ? { title: options } : options
  const record: ToastRecord = {
    id: opts.id ?? uid('toast'),
    title: opts.title ?? '',
    message: opts.message ?? '',
    type: opts.type ?? 'info',
    position: (opts.position ?? 'top-right') as ToastPosition,
    duration: opts.duration ?? 4000,
  }
  toasts = [...toasts, record]
  notify()
  if (record.duration > 0) {
    setTimeout(() => dismissToast(record.id), record.duration)
  }
  return record.id
}

toast.success = (title: string, options: ToastOptions = {}) =>
  toast({ ...options, title, type: 'success' })
toast.error = (title: string, options: ToastOptions = {}) =>
  toast({ ...options, title, type: 'error' })
toast.warning = (title: string, options: ToastOptions = {}) =>
  toast({ ...options, title, type: 'warning' })
toast.info = (title: string, options: ToastOptions = {}) =>
  toast({ ...options, title, type: 'info' })
