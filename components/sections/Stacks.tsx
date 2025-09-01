'use client'
import React from 'react'
import Image from 'next/image'
import Stack from '@/public/images/education.png'
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import {
  SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiSass,
  SiFramer, SiGit, SiGithub, SiFigma, SiPostman,
  SiCloudinary, SiGooglechrome, SiShadcnui,
  SiNextdotjs,
  SiTailwindcss
} from "react-icons/si"
import BackgroundLayout from '../ui/layout'

export const techStack = [
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss3 },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "SCSS", icon: SiSass },
  { name: "Framer Motion", icon: SiFramer },
  { name: "shadcn/ui", icon: SiShadcnui },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
  { name: "Figma", icon: SiFigma },
  { name: "Postman", icon: SiPostman },
  { name: "Cloudinary", icon: SiCloudinary },
  { name: "Chrome API", icon: SiGooglechrome },
]


const chunk = <T,>(arr: T[], size: number): T[][] =>
  arr.reduce((acc, _, i) =>
    i % size ? acc : [...acc, arr.slice(i, i + size)], [] as T[][])

const Stacks = () => {
  const chunkedStacks = chunk(techStack, 4)

  return (
    <div className='mt-5 md:mt-0 w-full select-none'>
      <BackgroundLayout>
        <section className='flex flex-col items-center justify-center p-4'>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-2">
            <Image
              src={Stack}
              width={16}
              height={16}
              alt=""
              className="object-contain"
            />
            <p className="text-sm leading-none">My Stacks</p>
          </div>
          <p className='mb-7'>Tech Arsenal</p>

          <div className="w-full">
            <Swiper
              modules={[Pagination]}
              spaceBetween={20}
              pagination={{ clickable: true }}
              className="w-full max-w-[600px] mx-auto"
            >
              {chunkedStacks.map((group, idx) => (
                <SwiperSlide key={idx} className="flex justify-center">
                  <section className="grid grid-cols-2 grid-rows-2 gap-3 md:gap-1 w-full">
                    {group.map(({ name, icon: Icon }) => (
                      <div
                        key={name}
                        className="rounded-xl flex gap-2 md:gap-1 items-center p-2 bg-[#191919]"
                      >
                        <Icon className="bg-[#282828] p-2 rounded-md flex-shrink-0 w-10 h-10 md:w-8 md:h-8" />
                        <div className="text-lg md:text-xs">{name}</div>
                      </div>
                    ))}
                  </section>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      </BackgroundLayout>
    </div>
  )
}

export default Stacks

