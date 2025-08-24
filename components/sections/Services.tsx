import React from 'react'
import BackgroundLayout from '../ui/layout'
import Image from 'next/image'
import Inspo from '@/public/images/inspo.png'
import InfiniteCarousel from '../motions/InfiniteCarousel'
import InfiniteReverse from '../motions/InfiniteReverse'

  
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

const Services = () => {
  return (
    <main className='mt-5 w-full select-none'>
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
            <p className="text-sm leading-none">Services</p>
          </div>
          <p className='mb-7'>Solutions Suites</p>
          </div>
          
          <InfiniteCarousel speed={5} gap={15}>
            { content.map((c, idx) => (
            <div key={idx} className="w-[200px] h-[70px] rounded-xl flex items-center justify-center bg-[#191919] text-[#999999]">
              {c.first} <br/> {c.second}
            </div>
          ))}
          </InfiniteCarousel>
          <InfiniteReverse speed={5} gap={15}>
            { content.map((c, idx) => (
            <div key={idx} className="w-[200px] h-[70px] rounded-xl flex items-center justify-center bg-[#191919] text-[#999999]">
              {c.first} <br/> {c.second}
            </div>
          ))}
          </InfiniteReverse>
        </section>
      </BackgroundLayout>
    </main>
  )
}

export default Services
