import type { DOMAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

export default function IconButton(
  props: DOMAttributes<HTMLSpanElement> & { className?: string; title?: string }
) {
  const { children, className, title, ...rest } = props

  return (
    <span
      className={twMerge(
        'hover:cursor-pointer hover:text-sky-500 text-a',
        className
      )}
      {...rest}
      title={title}
    >
      {children}
    </span>
  )
}
