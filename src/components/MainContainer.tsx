import { PropsWithChildren } from 'react'

export default function MainContainer({ children }: PropsWithChildren) {
  return (
    <main className='w-full min-w-[400px] h-full'>
      <div className='flex flex-col items-center w-full h-full'>
        <div className='flex flex-col gap-4 items-center w-full justify-center'>
          {children}
        </div>
      </div>
    </main>
  )
}
