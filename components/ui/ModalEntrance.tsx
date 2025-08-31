"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import Image, { StaticImageData } from "next/image"

type SlidesType = {
  title: string
  content: string
  pic: StaticImageData | string
  icon: StaticImageData | string
}

export default function AnimatedModal() {
  const [open, setOpen] = useState(true)

  const slides: SlidesType[] = [
    {
      title: "Slide 1",
      content: "This is the first slide",
      pic: "/images/bloomroot.png",
      icon: "/images/icons/bloomroot.png",
    },
    {
      title: "Slide 2",
      content: "This is the second slide",
      pic: "/images/bloomroot.png",
      icon: "/images/icons/bloomroot.png",
    },
    {
      title: "Slide 3",
      content: "This is the third slide",
      pic: "/images/bloomroot.png",
      icon: "/images/icons/bloomroot.png",
    },
  ]

  return (
    <AnimatePresence>
      {open && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
          onClick={() => setOpen(false)}
        >
          <motion.div
            key="modal"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-[600px] max-w-full bg-[#141414 rounded-2xl overflow-hidden"
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
              <section className="w-full flex justify-center items-center bg-gray-600 rounded-t-xl">
                <p>My Projects</p>
              </section>
            </motion.div>

            {/* Content Section w/ Swiper */}
            <Swiper
              modules={[Pagination, Navigation]}
              pagination={{ clickable: true }}
              navigation
              className="bg-gray-800"
            >
              {slides.map((item, idx) => (
                <SwiperSlide key={idx}>
                  <AnimatePresence mode="wait">
                    {open && (
                      <motion.div
                        key={item.title} // ensures exit/enter per slide
                        initial={{ x: 1000, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -1000, opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="text-gray-300 p-4 space-y-3 bg-gray-600 rounded-b-xl"
                      >
                        <div className="w-full">
                          <div className="flex justify-between items-center">
                            <div className="flex gap-3">
                              <Image
                                src={item.icon}
                                width={30}
                                height={30}
                                alt=""
                              />
                              <p className="text-white font-semibold">
                                {item.title}
                              </p>
                            </div>
                            <div className="text-sm text-blue-300">Live</div>
                          </div>

                          <div className="w-full mt-3">
                            <Image
                              src={item.pic}
                              width={200}
                              height={100}
                              alt=""
                              className="rounded-lg w-full"
                            />
                          </div>

                          <div className="w-full p-3">
                            <p>{item.content}</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}







// "use client"
// import { useState } from "react"
// import { motion } from "framer-motion"
// import { Swiper, SwiperSlide } from "swiper/react"
// import { Pagination, Navigation } from "swiper/modules"
// import "swiper/css"
// import "swiper/css/pagination"
// import "swiper/css/navigation"
// import Image, { StaticImageData } from "next/image"

// export default function AnimatedModal() {
//   const [open, setOpen] = useState(true)

//   type SlidesType = {
//     title: string,
//     content: string,
//     pic: StaticImageData | string,
//     icon: StaticImageData | string
//   }

//   const slides: SlidesType[] = [
//     {
//       title: "Slide 1",
//       content: "This is the first slide",
//       pic: "/images/bloomroot.png",
//       icon: "/images/icons/bloomroot.png"
//     },
//     {
//       title: "Slide 2",
//       content: "This is the second slide",
//       pic: "/images/bloomroot.png",
//       icon: "/images/icons/bloomroot.png"
//     },
//     {
//       title: "Slide 3",
//       content: "This is the third slide",
//       pic: "/images/bloomroot.png",
//       icon: "/images/icons/bloomroot.png"
//     },
//   ]

//   return (
//     <>
//       {open && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50" onClick={() => setOpen(false)}>
//           <div className="w-[600px] max-w-full bg-[#141414] rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
//             <motion.div
//               initial={{ x: -50, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ duration: 0.5, ease: "easeOut" }}
//               className="text-xl font-bold text-white"
//             >
//               <section className="w-full flex justify-center items-center bg-gray-600 rounded-t-xl">
//                 <p>My Projects</p>
//               </section>
//             </motion.div>



//             <motion.div
//               initial={{ x: 50, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
//               className="text-gray-300"
//             >
//               {slides.map((item, idx) => (
//                 <section key={idx} className="w-full space-y-3 bg-gray-600">
//                   <div className="w-full">
//                     <div className="flex justify-between items-center">
//                       <div className="flex gap-3">
//                         <Image src={item.icon} width={30} height={30} alt="" />
//                         <p>{item.title}</p>
//                       </div>
//                       <div>Live</div>
//                     </div>
//                     <div className="w-full">
//                       <Image src={item.pic} width={200} height={100} alt="" className="rounded-lg w-full" />
//                     </div>
//                     <div className="w-full p-3">
//                       <p>{item.content}</p>
//                     </div>
//                   </div>
//                 </section>
//               ))}
//             </motion.div>
//           </div>
//         </div>
//       )}
//     </>
//   )
// }










// <Swiper
//               modules={[Pagination, Navigation]}
//               pagination={{ clickable: true }}
//               navigation
//               className="p-6"
//             >
//               {slides.map((s, i) => (
//                 <SwiperSlide key={i}>
//                   <div className="flex flex-col gap-6">
//                     {/* Title */}
//                     <motion.h2
//                       initial={{ x: -50, opacity: 0 }}
//                       animate={{ x: 0, opacity: 1 }}
//                       transition={{ duration: 0.5, ease: "easeOut" }}
//                       className="text-xl font-bold text-white"
//                     >
//                       {s.title}
//                     </motion.h2>

//                     {/* Main content */}
//                     <motion.p
//                       initial={{ x: 50, opacity: 0 }}
//                       animate={{ x: 0, opacity: 1 }}
//                       transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
//                       className="text-gray-300"
//                     >
//                       {s.content}
//                     </motion.p>

//                     {/* Pagination & nav controls wrapper */}
//                     <motion.div
//                       initial={{ y: -10, opacity: 0 }}
//                       animate={{ y: 0, opacity: 1 }}
//                       transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
//                       className="flex justify-center"
//                     >
//                       {/* Swiper renders dots/nav here */}
//                     </motion.div>
//                   </div>
//                 </SwiperSlide>
//               ))}
//             </Swiper>