'use client'
import { ChangeEvent, ComponentProps } from 'react'
import { useFileInput } from './Root'

export type ControllProps = ComponentProps<'input'>

export default function Controll(props: ControllProps) {
  const { id, onFileSelected } = useFileInput()

  const handleFilesSelected = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files?.length) return
    const files = Array.from(event.target.files)

    onFileSelected?.(files)
  }

  return (
    <input
      type="file"
      className="sr-only"
      id={id}
      {...props}
      onChange={handleFilesSelected}
    />
  )
}
