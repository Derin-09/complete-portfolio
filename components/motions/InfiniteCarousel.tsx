"use client"
import React from "react"
import { motion } from "framer-motion"

type InfiniteType = {
  children: React.ReactNode
  speed?: number
  gap?: number
}

export default function InfiniteCarousel({ children, speed = 30, gap = 20 }: InfiniteType) {
  const items = React.Children.toArray(children)

  if (!items.length) return null

  return (
    <div className="overflow-hidden w-full">
      <motion.div
        className="flex"
        animate={{ x: ["0%", "-100%"] }}
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
