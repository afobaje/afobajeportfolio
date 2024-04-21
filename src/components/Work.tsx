'use client'
import { Project } from '@/types'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import Flourish from './../assets/Flourish.png'
import React, { useRef } from 'react'

const listOfWOrk: Project<StaticImageData>[] = [{
    value: 'Flourish Africa',
    link: 'https://oms.flourishafrica.com',
    image: Flourish,
    color: '#F35B04'
}]
export default function Work() {
    const workRef = useRef(null)

    return (
        <section>
            <div className='l-container '>
                <h2 className='text-white text-6xl -mt-60 '>Experience</h2>
                <div ref={workRef} className='flex relative min-h-[150dvh] flex-col'>
                    {
                        listOfWOrk.map((val: Project<StaticImageData>, i: number) => <div key={i} className={`w-full absolute flex flex-col gap-3 min-h-[90dvh] p-10 rounded-2xl value-${i + 1}`} style={{
                            backgroundColor: `${val.color}`
                        }}>
                            <Link href={val.link} target='_blank' className='border-b-2 text-4xl py-20'>{val.value}</Link>
                            <div className="flex-1 rounded-2xl">
                                <Image src={val.image.src} className='object-cover rounded-2xl w-full h-full' alt="Project picture" width={val.image.width} height={val.image.height} />
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </section>
    )
}
