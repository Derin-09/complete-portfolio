'use client'
import { useEffect, useState } from "react"

const CursorGlow = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const moveHandler = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", moveHandler)
    return () => window.removeEventListener("mousemove", moveHandler)
  }, [])

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 w-full h-full z-0"
      style={{ mixBlendMode: "screen" }}
    >
      <div
        className="absolute rounded-full blur-3xl opacity-30"
        style={{
          background: "#916CE7",
          width: "400px",
          height: "400px",
          transform: `translate(${pos.x - 200}px, ${pos.y - 200}px)`,
          transition: "transform 0.1s linear"
        }}
      />
    </div>
  )
}

export default CursorGlow
