import React from 'react'
import BackgroundLayout from '../ui/layout'
import Image from 'next/image'
import Inspo from '@/public/images/inspo.png'

const Inspirations = () => {
  return (
    <main className='mt-5 w-full'>
      <BackgroundLayout>
        <section className='flex flex-col items-center  justify-center p-4 '>
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full"
          >
            <Image
              src={Inspo}
              width={16}
              height={16}
              alt=""
              className="object-contain"
            />
            <p className="text-sm leading-none">Inspirations</p>
          </div>
          <p>Where I get my ideas</p>
        </section>
      </BackgroundLayout>
    </main>
  )
}

export default Inspirations