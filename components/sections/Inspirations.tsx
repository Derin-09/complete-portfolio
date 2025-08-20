import React from 'react'
import BackgroundLayout from '../ui/layout'
import Image from 'next/image'
import Inspo from '@/public/images/inspo.png'
import InfiniteCarousel from '../motions/InfiniteCarousel'

const Inspirations = () => {
  return (
    <main className='mt-5 w-full'>
      <BackgroundLayout>
        <section className='flex flex-col items-center justify-center p-4'>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-2">
            <Image
              src={Inspo}
              width={16}
              height={16}
              alt=""
              className="object-contain"
            />
            <p className="text-sm leading-none">Inspirations</p>
          </div>
          <p className='mb-7'>Where I get my ideas</p>
          
          <InfiniteCarousel speed={5} gap={20}>
            <div className="w-[200px] h-[70px] rounded-xl flex items-center justify-center bg-[#191919] text-[#999999]">
              Aesthetic <br/> Approach
            </div>
            <div className="w-[200px] h-[70px] rounded-xl flex items-center justify-center bg-[#191919] text-[#999999]">
              Everyday<br />Creativity
            </div>
            <div className="w-[200px] h-[70px] rounded-xl flex items-center justify-center bg-[#191919] text-[#999999]">
              User-Centric<br />Design
            </div>
            <div className="w-[200px] h-[70px] rounded-xl flex items-center justify-center bg-[#191919] text-[#999999]">
              Dribble<br />Design
            </div>
          </InfiniteCarousel>
        </section>
      </BackgroundLayout>
    </main>
  )
}

export default Inspirations
