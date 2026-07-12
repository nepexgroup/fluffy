export type Size = 'sm' | 'md' | 'lg' | 'xl' | '2xl'

export type Theme = 'gray' | 'blue' | 'green' | 'red'

export type Variant = 'solid' | 'subtle' | 'outline' | 'ghost'

export interface SelectOption {
  label: string
  value: string
  disabled?: boolean
}

export interface BreadcrumbItem {
  label: string
  href?: string
}

export interface TabItem {
  label: string
  value: string
  disabled?: boolean
}

export interface ListViewColumn {
  key: string
  label: string
  width?: string
  align?: 'left' | 'center' | 'right'
}

export interface TreeNode {
  label: string
  value: string
  children?: TreeNode[]
  disabled?: boolean
}

export interface CommandItem {
  label: string
  value: string
  group?: string
  keywords?: string
  disabled?: boolean
}

export type ToastType = 'info' | 'success' | 'warning' | 'error'

export type ToastPosition =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right'

export interface ToastOptions {
  id?: string
  title?: string
  message?: string
  type?: ToastType
  position?: ToastPosition
  /** ms; 0 = sticky */
  duration?: number
}
