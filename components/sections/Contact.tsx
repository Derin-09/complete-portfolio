'use client'
import React from 'react'
import BackgroundLayout from '../ui/layout'
import Image from 'next/image'
import Crown from '@/public/images/crown.png'
import Email from '@/public/images/email.png'
import WhatsApp from '@/public/images/whatsapp.png'

const Contact = () => {
  return (
    <div className='mt-5 md:mt-0 select-none h-full'>
      <BackgroundLayout>
        <section className='p-5 flex flex-col gap-6 lg:gap-10 items-center justify-center'>
          <div>
            <Image src={Crown} width={50} height={50} alt='' />
          </div>

          <div className='flex flex-col justify-center items-center text-center'>
            <p className='text-xl font-bold'>Let&apos;s Connect</p>
            <p>Thanks for visiting my portfolio!</p>
          </div>

          <div className='space-y-2 flex flex-col w-full'>
            <a
              href="mailto:aderinsolasamashimi@gmail.com"
              className='py-5 flex flex-1 justify-center items-center rounded-xl bg-[#1F1F1F]'
            >
              <div className='flex justify-center gap-2'>
                <Image src={Email} width={30} height={30} alt='email' />
                <p>Email me</p>
              </div>
            </a>


            <a
              href="https://wa.me/2348147374245"
              target="_blank"
              rel="noopener noreferrer"
              className='py-5 flex flex-1 justify-center items-center rounded-xl bg-[#1F1F1F]'
            >
              <div className='flex justify-center gap-2'>
                <Image src={WhatsApp} width={30} height={30} alt='whatsapp' />
                <p>WhatsApp</p>
              </div>
            </a>
          </div>
        </section>
      </BackgroundLayout>
    </div>
  )
}

export default Contact
