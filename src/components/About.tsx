'use client'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'


export default function About() {
  const aboutRef = useRef(null)
  gsap.registerPlugin(ScrollTrigger)
  useGSAP(() => {
    gsap.to(aboutRef.current, {
      // y: -100,
      scrollTrigger: {
        trigger: aboutRef.current,
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: true,
      }
    })
  })
  return (
    <section ref={aboutRef} className=''>
      <div className='l-container text-2xl md:text-4xl leading-normal md:leading-[3.4375rem]'>
        <div className=' '>
          <p >I am a software developer with vast experience creating different web applications for different niches. I have worked on e-commerce, chat applications among many others.</p>
          <p >I currently work as a <span className='text-deep-brown'>frontend developer</span> at <Link href='https://oms.flourishafrica.com' className='underline underline-offset-2 text-deep-brown'>Flourish Africa</Link></p>
          <p >I have a nack for creating great products and collaborating with people to accomplish strategic goals</p>
        </div>
        <div className='text-jet-black'>
          <p>PS: Besides tech, you can always catch me exploring different cities. I believe we are all supposed to see the world for its beauty</p>
        </div>
      </div>
    </section>
  )
}
