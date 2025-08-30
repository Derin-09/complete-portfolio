'use client'
import React from 'react'
import BackgroundLayout from '../ui/layout'
import Image from 'next/image'
import Inspo from '@/public/images/inspo.png'
import InfiniteVertical from '../motions/InfiniteVertical'
import Button from '../ui/Button'

  
  const content = [
      {
        text: "Singing Alt Rock",
      },
      {
        text: "Cooking New Recipes",
      },
      {
        text: "Writing Urban Legends",
      },
      {
        text: "Drawing Ultrarealism",
      },
    ]

const Hobbies = () => {
  return (
    <div className='mt-5 md:mt-0 w-full h-full relative select-none'>
      <BackgroundLayout>
        <section className='flex flex-col gap-4 items-center justify-center p-5'>
          <div className='flex flex-col items-center'>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-2">
            <Image
              src={Inspo}
              width={16}
              height={16}
              alt=""
              className="object-contain"
            />
            <p className="text-sm leading-none">Hobbies</p>
          </div>
          <p className='mb-7'>Things I like to do</p>
          </div>
          
            { content.map((c, idx) => (
            <div key={idx} className="w-full h-[70px] md:h-[60px] rounded-xl md:flex items-center p-2 px-3  bg-[#191919]">
              <p className='font-semibold'> {c.text}</p> 
            </div>
          ))}
        </section>
      </BackgroundLayout>
    </div>
  )
}

export default Hobbies
