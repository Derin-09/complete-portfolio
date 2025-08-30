'use client'
import React, { useState } from 'react'
import BackgroundLayout from '../ui/layout'
import Image from 'next/image'
import Inspo from '@/public/images/inspo.png'
import InfiniteCarousel from '../motions/InfiniteCarousel'
import Button from '../ui/Button'

const content = [
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
          <p className='mb-7'>Works Gallery</p>

          <InfiniteCarousel speed={15} gap={20}>
            {content.map((c, idx) => (
              <div key={idx} className="w-[200px] h-auto ">
                <Image src={`/images/${c.alt}.png`} width={200} height={150} alt={`${c.alt}`} className='rounded-xl' />
              </div>
            ))}
          </InfiniteCarousel>

          <div className='absolute top-[75%]' onClick={(e) => {
            e.stopPropagation()
           // handleClick()
          }}>
            <Button prop='View Works' />
          </div>
        </section>
      </BackgroundLayout>

      {isClicked && (
        <section className='w-screen h-screen bg-black/60 fixed inset-0 z-50 items-center justify-center px-15' onClick={handleClick}>
          <section className='flex flex-col gap-0 ' onClick={(e) => e.stopPropagation()}>
            <div className={`
        rounded-2xl 
        bg-[#141414]
        transition-shadow duration-300`}>
              My Projects
            </div>
            <section className='flex '>
            { content.map((c, idx) => (
            <section key={idx} className='bg-[#141414] w-full'>
              <p>{c.title}</p>
              <div className='w-full'>
              <Image src={`/images/${c.alt}.png`} width={200} height={200} alt={c.alt} className='w-full'/>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </section>
          ))}
          </section>
          </section>
        </section>
      )}
    </div>
  )
}

export default Projects
