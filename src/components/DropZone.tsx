import { useState, useRef } from 'react'
import type { DragEvent, KeyboardEvent, ChangeEvent } from 'react'
import type { FileData } from '../types'

interface DropZoneProps {
  label: string
  file: FileData | null
  error: string | null
  onFile: (filename: string, file: File) => void
}

export function DropZone({ label, file, error, onFile }: DropZoneProps) {
  const [isDragging, setIsDragging] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => setIsDragging(false)

  const handleDrop = (e: DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const dropped = e.dataTransfer.files[0]
    if (dropped) onFile(dropped.name, dropped)
  }

  const handleClick = () => inputRef.current?.click()

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleClick()
    }
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0]
    if (selected) onFile(selected.name, selected)
    e.target.value = ''
  }

  const isLoaded = file !== null && error === null
  const hasError = error !== null

  let borderClass: string
  let bgClass: string
  if (hasError) {
    borderClass = 'border-red-300'
    bgClass = 'bg-red-50'
  } else if (isLoaded || isDragging) {
    borderClass = 'border-primary border-solid'
    bgClass = 'bg-[#e8f5ee]'
  } else {
    borderClass = 'border-border border-dashed hover:border-primary hover:bg-[#e8f5ee]'
    bgClass = 'bg-muted'
  }

  return (
    <div
      className={`relative min-h-[192px] rounded-xl border-2 cursor-pointer flex flex-col items-center justify-center gap-2.5 px-6 pt-10 pb-7 transition-colors duration-150 outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 text-center ${borderClass} ${bgClass}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`Upload ${label} — click or drag and drop a CSV file`}
    >
      <input
        ref={inputRef}
        type="file"
        accept=".csv"
        className="hidden"
        onChange={handleInputChange}
        aria-hidden="true"
      />

      <span
        className={`absolute top-3.5 left-[18px] text-[10px] font-bold uppercase tracking-widest ${isLoaded ? 'text-primary' : 'text-muted-foreground'}`}
      >
        {label}
      </span>

      <UploadIcon className={isLoaded ? 'text-primary' : hasError ? 'text-red-400' : 'text-border'} />

      {isLoaded && (
        <>
          <span className="text-[13px] font-semibold text-primary break-all">{file.filename}</span>
          <span className="text-[12px] text-primary/70">{file.species.size} species found</span>
        </>
      )}

      {!isLoaded && !hasError && (
        <>
          <span className="text-[14px] font-medium text-foreground">Drop file here</span>
          <span className="text-[13px] text-muted-foreground">or click to browse</span>
        </>
      )}

      {hasError && (
        <p className="text-[12px] text-red-600 max-w-[220px]" role="alert" aria-live="assertive">
          {error}
        </p>
      )}
    </div>
  )
}

function UploadIcon({ className }: { className: string }) {
  return (
    <svg
      className={`w-9 h-9 ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" />
    </svg>
  )
}
