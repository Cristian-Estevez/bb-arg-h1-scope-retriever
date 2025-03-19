import { twMerge } from 'tailwind-merge'

export default function Skeleton({ className }: { className?: string }) {
  return (
    <div
      className={twMerge(
        'h-10 w-full bg-gray-400 animate-pulse rounded-md',
        className
      )}
    ></div>
  )
}
