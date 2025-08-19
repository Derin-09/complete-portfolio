import React, { ReactNode } from 'react'

export default function BackgroundLayout ({children}: {children: ReactNode}) {
  return (
    <div className='rounded-2xl bg-[#141414] '>
        {children}
    </div>
  )
}
