'use client'
import React, { useState } from 'react'
import BackgroundLayout from '../ui/layout'
import Image, { StaticImageData } from 'next/image'
import Inspo from '@/public/images/inspo.png'
import InfiniteCarousel from '../motions/InfiniteCarousel'
import Button from '../ui/Button'
import AnimatedModal from '../ui/ModalEntrance'
import { SwiperSlide } from 'swiper/react'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'

const content = [
  {
    title: "Nuroki",
    alt: "nuroki"
  },
  {
    title: "MyFlix",
    alt: "myflix"
  },
  {
    title: "Bloom & Root",
    alt: "bloomroot"
  },
  {
    title: "Harmony Feeds",
    alt: "harmony"
  },
  {
    title: "Countries",
    alt: "countries"
  },
  {
    title: "Math Game",
    alt: "mathgame"
  },
  {
    title: "Ice-Cream Figma",
    alt: "icecream"
  },
  {
    title: " Weather Dashboard",
    alt: "weather-dashboard"
  },
]

type SlidesType = {
  title: string
  content: string
  pic: StaticImageData | string
  icon: StaticImageData | string
  link: string
}


const slides: SlidesType[] = [
  {
    title: "Nuroki",
    content: "Nuroki is a smart learning hub—track moods, journal growth, and explore AI-powered course insights through a sleek, personalized dashboard.",
    pic: "/images/nuroki.png",
    icon: "/images/icons/nuroki.ico",
    link: "https://nuroki.vercel.app/"
  },
  {
    title: "MyFlix",
    content: "MyFlix site is a clean movie recommendation hub—discover, preview, and explore films with a sleek UI, simple navigation, and a cinematic feel without the clutter.",
    pic: "/images/myflix.png",
    icon: "/images/icons/myflix.ico",
    link: "https://myflix-movies.vercel.app/"
  },
  {
    title: "Weather Dashboard",
    content: "“A responsive weather dashboard that fetches live data to display forecasts, air quality, and key metrics like wind, UV index, and humidity with interactive charts and city search.",
    pic: "/images/weather-dashboard.png",
    icon: "/images/icons/default.png",
    link: "https://openweather-dashboard.vercel.app/"
  },
  {
    title: "Bloom & Root",
    content: "Bloom & Root is a sleek plant-themed app where style meets growth—minimal design, natural vibes, pure focus, built for calm productivity and inspired green living",
    pic: "/images/bloomroot.png",
    icon: "/images/icons/bloomroot.ico",
    link: "https://bloomroot.vercel.app/"
  },
  {
    title: "Harmony Feeds",
    content: "Harmony Feeds is a sleek animal feed site, simple and functional, with a clean, modern platform delivering curated content with balance, clarity, and flow.",
    pic: "/images/harmony.png",
    icon: "/images/icons/harmony.ico",
    link: "https://harmonyfeeds.vercel.app/"
  },
  {
    title: "Ice Cream Shop",
    content: "Ice Cream Shop project is a playful, mouth-watering design—bright colors, smooth layouts, and a sweet modern vibe that makes every scoop feel digital-delicious.",
    pic: "/images/icecream.png",
    icon: "/images/icons/default.png",
    link: "https://icecreamfigma.vercel.app/"
  },
  {
    title: "Countries",
    content: "Countries is a sleek explorer of the world—search and filter make finding nations smooth, fast, and interactive, while the design keeps it intuitive and visually engaging for effortless discovery.",
    pic: "/images/countries.png",
    icon: "/images/icons/countries.ico",
    link: "https://countries-derin.vercel.app/"
  },
  {
    title: "Math Game",
    content: "Math Game sharpens quick thinking—simple multiplications, a ticking timer, and live scorekeeping keep it fun, fast-paced, and addictive for anyone wanting to test their brainpower.",
    pic: "/images/mathgame.png",
    icon: "/images/icons/default.png",
    link: "https://derin-09.github.io/maths-game/"
  },
]

const Projects = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false)

  const handleClick = () => {
    setIsClicked(!isClicked)
  }

  return (
    <div className='mt-5 md:mt-0 w-full relative select-none'>
      <BackgroundLayout>
        <section className='flex flex-col items-center p-4 pb-8'>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-2">
            <Image
              src={Inspo}
              width={16}
              height={16}
              alt=""
              className="object-contain"
            />
            <p className="text-sm leading-none">Projects</p>
          </div>
          <p className='mb-7 lg:mb-7 md:mb-11'>Works Gallery</p>

          <InfiniteCarousel speed={15} gap={20}>
            {content.map((c, idx) => (
              <div key={idx} className="w-[200px] h-auto ">
                <Image src={`/images/${c.alt}.png`} width={200} height={150} alt={`${c.alt}`} className='rounded-xl' />
              </div>
            ))}
          </InfiniteCarousel>

          <div className='absolute top-[75%]' onClick={(e) => {
            e.stopPropagation()
            handleClick()
          }}>
            <Button prop='View Works' />
          </div>
        </section>
      </BackgroundLayout>


      {/* {MODAL VIEW} */}
      {isClicked && (
        <AnimatedModal props='My Projects'>
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
                    className="text-gray-300 p-4 space-y-3 bg-[#191919] rounded-b-xl"
                  >
                    <div className="w-full">
                      <div className="flex justify-between items-center text-center">
                        <div className="flex gap-3 items-center text-center">
                          <Image
                            src={item.icon}
                            width={40}
                            height={40}
                            alt=""
                            className="rounded-full"
                          />
                          <p className="text-white text-center font-semibold">
                            {item.title}
                          </p>
                        </div>
                        <Link href={item.link}>
                          <div className=" text-[#916CE7] pr-5">Live</div>
                        </Link>
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

                      <div className="w-full p-3 pb-10">
                        <p>{item.content}</p>
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

export default Projects
