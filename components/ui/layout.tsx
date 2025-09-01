'use client'
import React, { ReactNode } from 'react'
import { useState } from 'react'

export default function BackgroundLayout({ children }: { children: ReactNode }) {
  const [clicked, setClicked] = useState(false)
  return (
    <div
      onClick={() => setClicked(!clicked)}
      className={`
        rounded-2xl 
        bg-[#141414] 
        border
        border-neutral-800/60
        hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]
        hover:scale-[97%]
        transition-shadow duration-300 ease-in-out
        ${clicked ? 'lg:shadow-none lg:scale-100 shadow-[0_0_20px_rgba(168,85,247,0.3)] scale-[95%]' : 'shadow-none scale-[100%]'}
      `}
    >
      {children}
    </div>
  )
}
