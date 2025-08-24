"use client"
import React, { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

type InfiniteType = {
  children: React.ReactNode
  speed?: number
  gap?: number
}

export default function InfiniteReverse({ children, speed = 30, gap = 20 }: InfiniteType) {
  const items = React.Children.toArray(children)
  const containerRef = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState(0)

    useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.scrollWidth / 2) 
    }
  }, [children])


  if (!items.length) return null

  return (
    <div className="overflow-hidden w-full">
      <motion.div
        ref={containerRef}
        className="flex"
        animate={{ x: [ -width, 0] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
        style={{ gap }}
      >
        {[...items, ...items].map((child, idx) => (
          <div key={idx}>{child}</div>
        ))}
      </motion.div>
    </div>
  )
}
