'use client'
import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import { useState, useEffect } from "react"

export default function Counter({ target }: { target: number }) {
    const count = useMotionValue(0)
    const rounded = useTransform(count, (latest) => Math.floor(latest))
    const [display, setDisplay] = useState(0)

    useEffect(() => {
        const controls = animate(count, target, {
            duration: 1,
            ease: [0.16, 1, 0.3, 1]
        })
        return controls.stop
    }, [count, target])  

    useEffect(() => {
        const unsubscribe = rounded.on("change", (v) => setDisplay(v))
        return unsubscribe
    }, [rounded])

    return (
        <motion.span
            initial={{ y: "-100%" }}
            animate={{ y: "0%" }}
            transition={{
                type: "spring",
                stiffness: 120,
                damping: 12,
            }}
        >
            {display}
        </motion.span>
    )
}
