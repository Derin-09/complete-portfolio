import React from 'react'
import BackgroundLayout from '../ui/layout'
import Image from 'next/image'
import Inspo from '@/public/images/inspo.png'
import FeedBackLoop from '../motions/FeedBackLoop'

const content = [
    {
      feedback: "Creative thinker who turns vague ideas into polished results.",
      role: "Senior Frontend Developer",
      company: "NextGen Hackathon"
    },
    {
      feedback: "Always comes through with clean, innovative solutions—never half-baked.",
      role: "Senior Fullstack Developer",
      company: "Inventors Community"
    },
    {
      feedback: "Super reliable, communicates clearly, and pushes projects forward fast.",
      role: "Backend Engineer",
      company: "Accessivo"
    }
  ]


const Feedbacks = () => {
  return (
    <div className='mt-5 md:mt-0 w-full select-none'>
      <BackgroundLayout>
        <section className='flex flex-col gap-4 items-center justify-center py-5'>
          <div className='flex flex-col items-center'>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-2">
            <Image
              src={Inspo}
              width={16}
              height={16}
              alt=""
              className="object-contain"
            />
            <p className="text-sm leading-none">Feedbacks</p>
          </div>
          <p className='mb-7'>What People Say</p>
          </div>
          <hr className='w-full text-gray-700 '/>
          <FeedBackLoop>
            { content.map((c, idx) => (
            <div key={idx} className='h-[250px] md:h-[185px] flex flex-col justify-between p-5 py-2'>
              <p className=''> {c.feedback}</p>
              <div>
              <p className='text-xl font-bold'>{c.role}</p>
              <p className='text-gray-600'>{c.company}</p>
              </div>
            </div>
            ))}
          </FeedBackLoop>
        </section>
      </BackgroundLayout>
    </div>
  )
}

export default Feedbacks
