"use client"
import { ReactNode, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Swiper } from "swiper/react"
import { Pagination, Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"


export default function AnimatedModal({ props, children }: { props: string, children: ReactNode }) {
  const [open, setOpen] = useState(true)


  return (
    <AnimatePresence>
      {open && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 select-none"
          onClick={() => setOpen(false)}
        >
          <motion.div
            key="modal"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-[600px] max-w-full rounded-2xl overflow-hidden px-3"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Title Section */}
            <motion.div
              initial={{ x: -1000, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -200, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-xl font-bold text-white"
            >
              <section className="w-full flex justify-center items-center py-3 bg-[#191919] rounded-t-xl text-[#C3A7FF] text-2xl font-bold">
                <p>{props}</p>
              </section>
            </motion.div>

            {/* Content Section w/ Swiper */}
            <Swiper
              modules={[Pagination, Navigation]}
              pagination={{ clickable: true }}
              navigation
              className=""
            >
              {children}
            </Swiper>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}


