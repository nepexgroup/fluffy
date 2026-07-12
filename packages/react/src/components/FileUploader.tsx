import { useRef, useState, type ReactNode } from 'react'
import {
  cx,
  dropzoneHintClass,
  dropzoneIconClass,
  dropzoneTitleClass,
  dropzoneVariants,
  fileRowClass,
  fileRowIconClass,
  fileRowNameClass,
  fileRowRemoveClass,
  fileRowSizeClass,
  fileSize,
} from '@fluffy/core'
import { File as FileIcon, Trash2, Upload } from 'lucide-react'

export interface FileUploaderProps {
  files?: File[]
  onChange: (files: File[]) => void
  accept?: string
  multiple?: boolean
  disabled?: boolean
  hint?: string
  className?: string
  children?: ReactNode
}

export function FileUploader({
  files = [],
  onChange,
  accept,
  multiple = false,
  disabled = false,
  hint,
  className,
  children,
}: FileUploaderProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [dragActive, setDragActive] = useState(false)

  function addFiles(list: FileList | null) {
    if (!list?.length) return
    const incoming = Array.from(list)
    onChange(multiple ? [...files, ...incoming] : incoming.slice(0, 1))
  }

  function remove(index: number) {
    const next = [...files]
    next.splice(index, 1)
    onChange(next)
  }

  return (
    <div className={cx(className)}>
      <button
        type="button"
        className={dropzoneVariants({ active: dragActive, disabled })}
        disabled={disabled}
        onClick={() => inputRef.current?.click()}
        onDragOver={(event) => {
          event.preventDefault()
          setDragActive(true)
        }}
        onDragLeave={(event) => {
          event.preventDefault()
          setDragActive(false)
        }}
        onDrop={(event) => {
          event.preventDefault()
          setDragActive(false)
          if (!disabled) addFiles(event.dataTransfer?.files ?? null)
        }}
      >
        <Upload className={dropzoneIconClass} />
        <span className={dropzoneTitleClass}>
          {children ?? 'Click to upload or drag and drop'}
        </span>
        {hint && <span className={dropzoneHintClass}>{hint}</span>}
      </button>
      <input
        ref={inputRef}
        type="file"
        className="hidden"
        accept={accept}
        multiple={multiple}
        onChange={(event) => {
          addFiles(event.target.files)
          event.target.value = ''
        }}
      />
      {files.length > 0 && (
        <ul className="mt-2 space-y-1.5">
          {files.map((file, index) => (
            <li key={`${file.name}-${index}`} className={fileRowClass}>
              <FileIcon className={fileRowIconClass} />
              <span className={fileRowNameClass}>{file.name}</span>
              <span className={fileRowSizeClass}>{fileSize(file.size)}</span>
              <button
                type="button"
                className={fileRowRemoveClass}
                aria-label={`Remove ${file.name}`}
                onClick={() => remove(index)}
              >
                <Trash2 className="h-3.5 w-3.5" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
