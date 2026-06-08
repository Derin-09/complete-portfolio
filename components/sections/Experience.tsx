'use client'
import React, { useState } from 'react'
import BackgroundLayout from '../ui/layout'
import Image from 'next/image'
import InfiniteVertical from '../motions/InfiniteVertical'
import Button from '../ui/Button'
import AnimatedModal from '../ui/ModalEntrance'
import { SwiperSlide } from 'swiper/react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaBriefcase } from 'react-icons/fa'


const content = [
  {
    text: "Inventors Community",
    period: "01/2022 - 02/2025"
  },
  {
    text: "NextGen Hackathon",
    period: "06/2025 - 09/025"
  },
  // {
  //   text: "Accessivo",
  //   period: "01/2025 - 03/2025"
  // },
  {
    text: "Dijix Global Solutions (Part-Time)",
    period: "03/2025 - 05/2026"
  },
  {
    text: "Astrotwig (Part-Time Contract)",
    period: "07/2025 - 12/2025"
  },
]


type SlidesType = {
  title: string
  content: string[]
  date: string
  detail: string
  role: string
}


const slides: SlidesType[] = [
  {
    title: "Inventors Community",
    detail: "Part of a diverse network of developers collaborating on innovative projects, exchanging knowledge, and building impactful solutions together.",
    content: [
      "Developed responsive interfaces using React.js and TailwindCSS, building reusable UI systems that supported scalable feature development.",
      "Integrated backend APIs and collaborated closely with backend teams to streamline frontend-to-database workflows.",
      "Implemented reusable component patterns and shared UI libraries that reduced duplicated frontend effort.",
      "Managed application state and frontend data flow using React patterns to improve maintainability and user experience.",
      "Wrote unit tests using Jest and React Testing Library to improve UI stability and reduce regressions during feature releases."
    ],
    role: "Frontend Developer",
    date: '01/2022 - 02/2025'
  },
  // {
  //   title: "Accessivo Internship",
  //   detail: "Hands-on intern at Accessivo, working on multiple client-facing projects, translating ideas into interactive user interfaces while improving accessibility and performance.",
  //   content: [
  //     "Optimized site performance, achieving up to 30% faster load times.",
  //     "Conducted accessibility audits, improving WCAG compliance.",
  //     "Implemented responsive UIs with modern frameworks to meet client requirements.",
  //     "Assisted in debugging, testing, and refining frontend code for smooth performance.",
  //   ],
  //   role: "Frontend Development Intern",
  //   date: '01/2025 - 03/2025'
  // },
  {
    title: "NextGen Hackathon",
    detail: "Part of a diverse network of developers collaborating on innovative projects, exchanging knowledge, and building impactful solutions together.",
    content: [
      "Developed engaging UI components to showcase project ideas effectively.",
      "Integrated user flows that balanced aesthetics with functionality.",
      "Collaborated in a fast-paced team setting to deliver a working prototype.",
      "Assisted in pitching technical features to judges and mentors.",
      "Integrated APIs to fetch and display real-time data efficiently.",
    ],
    role: "Frontend Developer (Participant)",
    date: '06/2025 - 09/2025'
  },
  {
    title: "Dijix Global Solutions (Part-Time)",
    detail: "Maintained a complex insurance brokerage platform using React, Next.js, and TypeScript, building reusable component systems, optimizing frontend performance, and delivering scalable customer-facing workflows.",
    content: [
      "Maintained and enhanced a complex insurance brokerage platform using React, Next.js, and TypeScript, building multi-step policy purchase workflows, quote comparison systems, and customer dashboards.",
      "Built reusable and accessible component systems using React hooks and composition patterns, improving consistency across policy selection, premium breakdown, and claims management flows.",
      "Managed complex frontend state across large forms and pricing views using efficient state management patterns, optimizing rendering performance through memoization and reducing UI bottlenecks.",
      "Implemented responsive, data-heavy interfaces while improving performance through component optimization and structured frontend architecture."
    ],
    role: "Frontend Developer",
    date: "03/2025 - 05/2026"
  },
  {
    title: "Astrotwig (Part-Time Contract)",
    detail: "Developed and optimized frontend experiences for a large-scale music streaming platform using React-based architecture with Next.js and TypeScript, building reusable component systems, managing real-time state, and delivering scalable user-facing features.",
    content: [
      "Built 30+ responsive interfaces using React-based architecture with Next.js, TypeScript, and TailwindCSS across discovery feeds, playlists, artist pages, and wallet systems.",
      "Translated Figma designs into reusable React/MUI component systems, implementing responsive layouts and scalable UI patterns across multiple user workflows.",
      "Managed frontend state and asynchronous data flows using React Query and Context patterns to support real-time interactions and dynamic content updates.",
      "Optimized application performance using memoization, lazy loading, component reuse, and efficient rendering techniques.",
      "Owned end-to-end feature delivery including authentication flows, protected routes, playlist systems, and payment-related interfaces within a remote agile environment."
    ],
    role: "Frontend Developer",
    date: "07/2025 - 12/2025"
  },

]


const Experience = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false)

  const handleClick = () => {
    setIsClicked(!isClicked)
  }
  return (
    <div className='mt-5 md:mt-0 w-full relative select-none'>
      <BackgroundLayout>
        <section className='flex flex-col gap-4 items-center justify-center p-5'>
          <div className='flex flex-col items-center'>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-2">
              {/* <Image
                src={Inspo}
                width={16}
                height={16}
                alt=""
                className="object-contain"
              /> */}

              <FaBriefcase color='#916CE7' />
              <p className="text-sm leading-none">Experience</p>
            </div>
            <p className='mb-7'>Work Highlights</p>
          </div>

          <InfiniteVertical speed={5} gap={15}>
            {content.map((c, idx) => (
              <div key={idx} className="w-full h-[70px] rounded-xl p-2 px-3 text-[#916CE7] bg-[#191919]">
                <p className='font-semibold'> {c.text}</p>  <p className=' text-[#999999]'> {c.period} </p>
              </div>
            ))}
          </InfiniteVertical>
          <div className='absolute top-[40%]' onClick={(e) => {
            handleClick()
            e.stopPropagation()
          }}>
            <Button prop='View Experiences' />
          </div>
        </section>
      </BackgroundLayout>




      {/* {MODAL VIEW} */}
      {isClicked && (
        <AnimatedModal props='My Work Experience'>
          {slides.map((item, idx) => (
            <SwiperSlide key={idx}>
              <AnimatePresence mode="wait">
                {isClicked && (
                  <motion.div
                    key={item.title}
                    initial={{ x: 1000, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -1000, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="text-white p-4 space-y-3 bg-[#191919] rounded-b-xl"
                  >
                    <div className="w-full">
                      <div className="flex justify-between items-center ">
                        <div className="flex flex-col">
                          <p className='text-2xl font-semibold text-[#916CE7]'>{item.title}</p>
                          <p className=" font-semibold">{item.role}</p>
                        </div>
                        <div className="  bg-gray-500 p-1 px-2 text-sm  rounded-full mr-5 text-center">{item.date}</div>
                      </div>

                      <div className=" mt-3 bg-[#161919]   border border-gray-400/50 p-4 rounded-lg w-full">
                        <p className=" font-semibold pb-2" >About Role</p>
                        <p className="text-gray-300 ">{item.detail}</p>
                      </div>
                      <p className=" font-semibold py-4">Key Responsibilities</p>
                      <ul className="w-full p-3 pb-10 list-disc marker:text-[#916CE7] pl-5 space-y-2">
                        {item.content.map((c, idx) => (
                          <li key={idx} className=" text-sm">{c}</li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </SwiperSlide>
          ))}</AnimatedModal>
      )}
    </div>
  )
}

export default Experience
