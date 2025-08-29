'use client'
import React from 'react'
import BackgroundLayout from '../ui/layout'
import Image from 'next/image'
import Crown from '@/public/images/crown.png'
import Email from '@/public/images/email.png'

const Contact = () => {
  return (
    <main className='mt-5 md:mt-0 select-none'>
      <BackgroundLayout >
        <section className='p-5 flex flex-col gap-6 items-center justify-center'>
          <div>
            <Image src={Crown} width={50} height={50} alt=''/>
          </div>
          <div className='flex flex-col justify-center items-center'>
          <p className='text-xl font-bold'> Let&apos;s Connect</p>
          <p> Thanks for visiting my portfolio!</p>
          </div>

          <div className='space-y-2 flex flex-col w-full'>
            <button className=' py-5 flex flex-1 justify-center items-center rounded-xl bg-[#1F1F1F]'>
              <div className='flex justify-center gap-2'>
                <div>
            <Image src={Email} width={30} height={30} alt=''/>
            </div>
                <p> Email me</p>
              </div>
            </button>
            <button className=' py-5 flex flex-1 justify-center items-center rounded-xl bg-[#1F1F1F]'>
              <div className='flex justify-center gap-2'>
                <div>
            <Image src={Email} width={30} height={30} alt=''/>
            </div>
                <p> Email me</p>
              </div>
            </button>
          </div>
        </section>
      </BackgroundLayout>
    </main>
  )
}

export default Contact