import React, { ReactNode } from 'react'

export default function BackgroundLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className="
        rounded-2xl 
        bg-[#141414] 
        hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]
        hover:scale-[90%]
        active:shadow-[0_0_20px_rgba(168,85,247,0.3)]
        transition-shadow duration-300
      "
    >
      {children}
    </div>
  )
}
