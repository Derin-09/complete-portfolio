'use client'
import React from 'react'
import BackgroundLayout from '../ui/layout'
import Image from 'next/image'
import Inspo from '@/public/images/inspo.png'
import InfiniteVertical from '../motions/InfiniteVertical'
import Button from '../ui/Button'

  
  const content = [
      {
        text: "Inventors Community",
        period: "01/25 - present"
      },
      {
        text: "NextGen Hackathon",
        period: "06/25 - present"
      },
      {
        text: "Accessivo",
        period: "08/25 - present"
      },
    ]

const Hobbies = () => {
  return (
    <main className='mt-5 md:mt-0 w-full relative select-none'>
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
            <div key={idx} className="w-full h-[70px] rounded-xl p-2 px-3 text-[#916CE7] bg-[#191919]">
              <p className='font-semibold'> {c.text}</p>  <p className=' text-[#999999]'> {c.period} </p>
            </div>
          ))}
        </section>
      </BackgroundLayout>
    </main>
  )
}

export default Hobbies
