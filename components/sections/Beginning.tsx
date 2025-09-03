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
        num: "03",
        icon: "/images/experience.png",
        word: "Experience"
    },
    {
        num: "05",
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
        <div className="flex gap-3 sm:gap-3 justify-between w-full select-none">
            {content.map((c, index) => (
                <div key={index} className="flex-1 min-w-0">
                    <BackgroundLayout>
                        <section className="p-3 md:p-3">
                            <div className="flex items-center justify-center gap-1 sm:gap-2">
                                <div className="text-[20px] xs:text-[28px] sm:text-[35px] font-medium bg-clip-text bg-gradient-to-b from-[#d22121] to-[#111111]">
                                    <Counter target={Number(c.num)} />
                                </div>
                                <Image
                                    src={Plus}
                                    width={16}
                                    height={16}
                                    alt=""
                                    className="max-w-[20px] h-auto"
                                />
                            </div>

                            <div className="flex items-center justify-center text-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 rounded-full bg-[#1A1A1A]">
                                <Image
                                    src={c.icon}
                                    width={12}
                                    height={12}
                                    alt=""
                                    className="max-w-[20px]"
                                />
                                <p className="text-xs sm:text-sm truncate">{c.word}</p>
                            </div>
                        </section>
                    </BackgroundLayout>
                </div>
            ))}
        </div>

    )
}

export default Beginning