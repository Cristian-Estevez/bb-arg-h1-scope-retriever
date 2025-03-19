import type { InputHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'
import C from '../../constants/constants'

export default function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  const { className, ...rest } = props
  return (
    <input
      className={twMerge(C.theme.inputBaseClassName, className)}
      {...rest}
    />
  )
}
