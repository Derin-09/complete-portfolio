'use client'
import React from 'react'
import { ReactElement } from "react";
import Image from 'next/image';
import Stack from '@/public/images/education.png'
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiSass,
  SiFramer,
  SiGit,
  SiGithub,
  SiFigma,
  SiPostman,
  SiCloudinary,
  SiGooglechrome,
  SiShadcnui
} from "react-icons/si";
import BackgroundLayout from '../ui/layout';

// const techLogos: Record<string, ReactElement> = {
//   html: <SiHtml5 />,
//   css: <SiCss3  />,
//   javascript: <SiJavascript  />,
//   typescript: <SiTypescript />,
//   react: <SiReact />,
//   scss: <SiSass />,
//   framer: <SiFramer />,
//   shadcn: <SiShadcnui />,
//   git: <SiGit />,
//   github: <SiGithub />,
//   figma: <SiFigma />,
//   postman: <SiPostman />,
//   cloudinary: <SiCloudinary />,
//   chrome: <SiGooglechrome />
// };

export const techStack = [
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss3 },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "SCSS", icon: SiSass },
  { name: "Framer Motion", icon: SiFramer },
  { name: "shadcn/ui", icon: SiShadcnui },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
  { name: "Figma", icon: SiFigma },
  { name: "Postman", icon: SiPostman },
  { name: "Cloudinary", icon: SiCloudinary },
  { name: "Chrome", icon: SiGooglechrome },
];

const Stacks = () => {
  return (
    <main className='mt-5 w-full'>
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

        <div className="max-w-4xl mx-auto px-6">
          <Swiper
            modules={[Grid, Pagination]}
            spaceBetween={20}
            slidesPerView={4}
            grid={{ rows: 2 }}
            pagination={{ clickable: true }}
            className="w-full"
          >
            {techStack.map(({ name, icon: Icon }) => (
              <SwiperSlide key={name}>
                <div className="w-[200px] h-[70px] rounded-xl flex  gap-2 items-center pl-2 bg-[#191919] ">
                  <Icon className='bg-[#282828] p-3 rounded-lg' />
                  <div className='text-lg'>{name}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          </div>
        </section>
      </BackgroundLayout>
    </main>
  )
}

export default Stacks
