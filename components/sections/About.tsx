import React from 'react'
import Image, { StaticImageData } from 'next/image'
import Picture from '@/public/images/my-pictureEditedUse.png'
import BackgroundLayout from '../ui/layout'
import Link from 'next/link'
import RoleLoop from '../motions/RoleLoop'
import Download from '@/public/images/resumeDownload.png'

type ContentType = {
  icon: string | StaticImageData,
  word: string
}

const content: ContentType[] = [
  {
    icon: "/images/location.png",
    word: "Nigeria"
  },
  {
    icon: "/images/earth.png",
    word: "English"
  },
  {
    icon: "/images/flag.png",
    word: "Frontend Developer"
  },
  {
    icon: "/images/education.png",
    word: "Bells University of Technology"
  },
]


const About = () => {
  return (
    <div className='pt-3 md:pt-0 select-none'>
      <BackgroundLayout>
        <section className='w-full p-5'>
          <section className='mb-8 flex gap-3 h-[120px]'>
            <div className=''>
              <Image src={Picture} width={120} height={120} alt='My picture' className='rounded-2xl md:w-[160px]' />
            </div>
            <div className=' flex flex-col space-y-2 w-full'>
              <div className='md:flex justify-between items-center'>
                <div className='flex items-center w-fit gap-2 px-3 py-1 rounded-full bg-[#191919]'>
                  <div className='w-2 h-2 bg-green-600 rounded-full'></div>
                  <p className='text-sm'>available to work</p>
                </div>
                <div className='hidden md:flex gap-2 items-center'>
                  <p>Resume</p>
                  <Link href={'/resume.pdf'} className="">
                  <div className='hover:cursor-pointer'>
                    <Image src={Download} alt='Download my resume'/>
                  </div>
                  </Link>
                </div>
              </div>
              <p className='font-bold text-xl'>Sam-Ashimi Aderinsola</p>
              <div>I&apos;m a <span className='text-[#916CE7]'><RoleLoop /></span></div>
            </div>
          </section>

          <section className="gap-2 px-3 py-4 rounded-xl bg-[#1A1A1A] space-y-1 mb-8">
            {content.map((c, index) => (
              <div
                key={index}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1B1B1B]"
              >
                <Image
                  src={c.icon}
                  width={16}
                  height={16}
                  alt=""
                  className="object-contain"
                />
                <p className="text-sm leading-none">{c.word}</p>
              </div>
            ))}
          </section>


          <section className='space-y-4'>
            <div className='flex justify-between gap-4'>
              <Link href={'https://www.linkedin.com/in/aderinsola-sam-ashimi/'} className="flex-1"><button className='w-full text-center py-5 rounded-xl bg-[#1F1F1F]'>LinkedIn</button></Link>
              <Link href={'https://github.com/Derin-09'} className="flex-1"><button className='w-full text-center py-5 rounded-xl bg-[#1F1F1F]'>Github</button></Link>
            </div>
            <Link href={'/resume.pdf'} className="flex-1 md:hidden"><button className='text-center w-full py-5 rounded-xl bg-[#1F1F1F]'>Resume</button></Link>
          </section>
        </section>
      </BackgroundLayout>
    </div>
  )
}

export default About