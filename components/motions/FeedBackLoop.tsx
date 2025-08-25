"use client"
import React, { useState, useEffect, ReactNode } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function FeedBackLoop({ children }: { children: ReactNode }) {
  const feedbacks = React.Children.toArray(children)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % feedbacks.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [feedbacks.length])

  return (
    <div className="w-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="inline-block w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {feedbacks[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
