'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import TextPlugin from 'gsap/TextPlugin'
import React, { useRef } from 'react'




export default function Intro() {
    gsap.registerPlugin(useGSAP, TextPlugin)
    const titleRef = useRef(null)

    useGSAP(() => {
        gsap.to(titleRef.current, {
            duration: 3,
            text: {
                value: 'Creative developer',
               
            },
            delay: 1,
            ease: 'none',
        })
    }, { scope: titleRef })


    return (
        <section className='flex  flex-col my-20 w-full h-[100dvh] l-container'>
            <p className='font-bold text-6xl md:text-8xl'>Hi,I&apos;m David, a </p>
            <p className='font-bold text-6xl md:text-8xl' ref={titleRef}>Front end developer</p>
        </section>
    )
}
