import React from 'react'
import Image, { StaticImageData } from 'next/image'
import Plus from '@/public/images/plus.png'
import BackgroundLayout from '../ui/layout'
import Counter from '../motions/Counter'

type ContentType = {
    num: string,
    icon: string | StaticImageData,
    word: string
}

const content: ContentType[] = [
    {
        num: "01",
        icon: "/images/experience.png",
        word: "Experience"
    },
    {
        num: "03",
        icon: "/images/collabs.png",
        word: "Collabs"
    },
    {
        num: "10",
        icon: "/images/flag.png",
        word: "Projects"
    },
]

const Beginning = () => {
    return (
        <main className='flex justify-between w-full'>
            {content.map((c, index) => (
                <div key={index} className=''>
                    <BackgroundLayout>
                        <section className='p-3'>
                        <div
                            className='flex items-center justify-center gap-2 ' >
                            <div className='text-[35px] font-medium bg-clip-text bg-gradient-to-b from-[#d22121] to-[#111111] '>
                                <Counter
                                 target={Number(c.num)}/>
                            </div>
                            <div>
                                <Image src={Plus} width={20} height={20} alt='' className='max-w-[30px] h-auto' />
                            </div>
                        </div>

                        <div className='flex items-center h-full text-center gap-2 px-3 py-1 rounded-full bg-[#1A1A1A]'>
                            <div>
                                <Image src={c.icon} width={16} height={16} alt='' className='max-w-[30px]' />
                            </div>
                            <p className='text-sm'>{c.word}</p>
                        </div>
                        </section>
                    </BackgroundLayout>
                </div>
            ))}
        </main>
    )
}

export default Beginning