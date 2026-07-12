import { reactive } from 'vue'
import { uid, type ToastOptions, type ToastPosition } from '@fluffy/core'

export interface ToastRecord extends Required<Pick<ToastOptions, 'type' | 'position'>> {
  id: string
  title: string
  message: string
  duration: number
}

export const toastState = reactive<{ toasts: ToastRecord[] }>({ toasts: [] })

export function dismissToast(id: string) {
  const index = toastState.toasts.findIndex((toast) => toast.id === id)
  if (index !== -1) toastState.toasts.splice(index, 1)
}

export function toast(options: ToastOptions | string): string {
  const opts: ToastOptions = typeof options === 'string' ? { title: options } : options
  const record: ToastRecord = {
    id: opts.id ?? uid('toast'),
    title: opts.title ?? '',
    message: opts.message ?? '',
    type: opts.type ?? 'info',
    position: (opts.position ?? 'top-right') as ToastPosition,
    duration: opts.duration ?? 4000,
  }
  toastState.toasts.push(record)
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
