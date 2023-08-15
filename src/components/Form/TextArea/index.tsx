import { ComponentProps } from 'react'

export interface TextAreaProps extends ComponentProps<'textarea'> {}

export default function TextArea(props: TextAreaProps) {
  return (
    <textarea
      {...props}
      className="resixe-y min-h-[120px] w-full rounded-lg border border-zinc-300 px-3 py-2 text-zinc-900 shadow-sm"
    />
  )
}
