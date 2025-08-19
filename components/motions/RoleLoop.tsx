"use client"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function RoleLoop() {
  const roles = ["Frontend Developer", "Next.js Engineer", "AI/ML Enthusiast"]
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [roles.length])

  return (
    <motion.span
      key={roles[index]}
      className=" inline-block"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 1.2, ease: "anticipate" }}
    >
      {roles[index]}
    </motion.span>
  )
}
