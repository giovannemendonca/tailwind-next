'use client'

import * as Select from '@radix-ui/react-select'
import { ChevronDown } from 'lucide-react'
import React, { ReactNode } from 'react'

export interface SelectProps {
  children: ReactNode
  placeholder: string
}

export function SelectInput({ children, placeholder }: SelectProps) {
  return (
    <Select.Root>
      <Select.Trigger
        className="flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 
      px-3 py-2 shadow-sm data-[placeholder]:text-zinc-600"
      >
        <Select.Value className="to-black" placeholder={placeholder} />
        <Select.Icon>
          <ChevronDown className="h-5 w-5 to-zinc-500" />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content
          side="bottom"
          position="popper"
          sideOffset={8}
          className="z-10 w-[--radix-select-trigger-width] overflow-hidden rounded-lg border border-zinc-300 bg-white"
        >
          <Select.Viewport>{children}</Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}
