"use client"
import React, { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"

type InfiniteType = {
  children: React.ReactNode
  speed?: number
  gap?: number
}

export default function InfiniteVertical({ children, speed = 30, gap = 20 }: InfiniteType) {
  const items = React.Children.toArray(children)
  const containerRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (containerRef.current) {
      setHeight(containerRef.current.scrollHeight / 2) // one "set" of items
    }
  }, [children])

  if (!items.length) return null

  return (
    <div className="overflow-hidden w-full h-[200px]">
      <motion.div
        ref={containerRef}
        className="flex flex-col"
        animate={{ y: [0, -height] }}
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
