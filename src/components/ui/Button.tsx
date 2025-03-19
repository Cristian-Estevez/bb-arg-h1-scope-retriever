import type { ButtonHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'
import C from '../../constants/constants'

export default function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  const { className, children, ...rest } = props

  return (
    <button
      className={twMerge(
        'hover:cursor-pointer',
        C.theme.inputBaseClassName,
        className
      )}
      {...rest}
    >
      {children}
    </button>
  )
}
