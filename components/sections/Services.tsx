'use client'
import React, { useState } from 'react'
import BackgroundLayout from '../ui/layout'
import Image from 'next/image'
import Inspo from '@/public/images/inspo.png'
import InfiniteCarousel from '../motions/InfiniteCarousel'
import InfiniteReverse from '../motions/InfiniteReverse'
import Button from '../ui/Button'
import AnimatedModal from '../ui/ModalEntrance'
import { SwiperSlide } from 'swiper/react'
import { AnimatePresence, easeInOut, motion } from 'framer-motion'


const content = [
  {
    first: "Team",
    second: "Leadership"
  },
  {
    first: "Problem",
    second: "Solving"
  },
  {
    first: "Time",
    second: "Management"
  },
  {
    first: "Communication",
    second: " "
  },
]

type SlidesType = {
  id: number
  title: string
  detail: string
}


const slides: SlidesType[] = [
  {
    id: 1,
    title: "Problem Solving",
    detail: "Expert problem-solving solutions for complex technical challenges across web and mobile platforms.",
  },
  {
    id: 2,
    title: "Team Leadership",
    detail: "Effective team management and leadership to drive project success and team productivity.",
  },
  {
    id: 3,
    title: "Communication",
    detail: "Clear, concise communication to ensure all stakeholders remain informed and aligned.",
  },
  {
    id: 4,
    title: "Time Management",
    detail: "Strategic time planning and resource allocation to ensure project delivery within deadlines.",
  }
]


const Services = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false)
  const handleClick = () => {
    setIsClicked(!isClicked)
  }
  return (
    <div className='mt-5 md:mt-0 w-full select-none relative'>
      <BackgroundLayout>
        <section className='flex flex-col gap-4 md:gap-2 items-center justify-center p-5'>
          <div className='flex flex-col items-center'>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-2">
              <Image
                src={Inspo}
                width={16}
                height={16}
                alt=""
                className="object-contain"
              />
              <p className="text-sm leading-none">Services</p>
            </div>
            <p className='mb-7 lg:mb-7 md:mb-11'>Solutions Suites</p>
          </div>

          <InfiniteCarousel speed={50} gap={15}>
            {content.map((c, idx) => (
              <div key={idx} className="w-[200px] h-[70px] md:h-[50px] rounded-xl flex items-center justify-center bg-[#191919] text-[#999999]">
                {c.first} <br /> {c.second}
              </div>
            ))}
          </InfiniteCarousel>
          <InfiniteReverse speed={50} gap={15}>
            {content.map((c, idx) => (
              <div key={idx} className="w-[200px] h-[70px] md:h-[50px] rounded-xl flex items-center justify-center bg-[#191919] text-[#999999]">
                {c.first} <br /> {c.second}
              </div>
            ))}
          </InfiniteReverse>

          <div className='absolute top-[75%]' onClick={(e) => {
            e.stopPropagation()
            handleClick()
          }}>
            <Button prop='View All Services' />
          </div>
        </section>
      </BackgroundLayout>


      {/* {MODAL VIEW} */}
      {isClicked && (
        <AnimatedModal props='My Services'>
          {slides.map((item, idx) => (
            <SwiperSlide key={idx}>
              <AnimatePresence mode="wait">
                {isClicked && (
                  <motion.div
                    key={item.title} // ensures exit/enter per slide
                    initial={{ x: 1000, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -1000, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="text-white p-4 space-y-3 bg-[#191919] rounded-b-xl pb-20"
                  >
                    <div className="w-full">
                      <div className="">
                        <div className="flex gap-3 items-center text-center">
                          <p className=" font-semibold text-3xl text-[#C3A7FF] p-3 py-1 bg-[#916CE7]/30 border border-[#916CE7]/50 rounded-2xl">{item.id}</p>
                          <p className='text-2xl font-semibold text-[#916CE7]'>{item.title}</p>
                        </div>
                      </div>

                      <div className=" mt-3 bg-[#161919] space-y-3  border border-gray-400/50 p-6 rounded-lg w-full">
                        <p className="text-gray-300 ">{item.detail}</p>
                        <motion.div
                          key={item.id}
                          initial={{ width: 0, opacity: 0 }}
                          animate={{ width: "100%", opacity: 1 }}
                          transition={{ duration: 0.8, ease: easeInOut }}>
                          <div className='h-1  rounded-md bg-gradient-to-r from-purple-600 to-blue-900'></div>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </SwiperSlide>
          ))}
        </AnimatedModal>
      )}
    </div>
  )
}

export default Services
