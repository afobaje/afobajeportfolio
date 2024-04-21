'use client'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'

export default function Nav() {
  gsap.registerPlugin(useGSAP)
  const container = useRef(null)
  const tl = useRef<any>(null)
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { label: 'Projects', link: '/projects' },
    { label: 'About', link: '/about' },
    { label: 'Resume', link: 'https://empluy.vercel.app/afobaje' }]

  useGSAP(() => {

    gsap.set(container.current, { clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)', scale: .5, })
    tl.current = gsap.timeline({ paused: true })
      .to(container.current, {
        clipPath: 'inset(0% 0% 0% 0%)',
        duration: 0.3,
        // duration:5,
        stagger: 0.1,
        scale: 1,
        ease: 'power4.inOut'
      })
    const itemList = document.querySelector('.grab')
    gsap.utils.toArray(itemList).forEach((val: any) => {
      gsap.timeline()
        .from(val, {
          yPercent: 70
        })
        .to(val, {
          stagger: 0.5,
          yPercent: 0,
          duration: 5
        })
    })
  }, { scope: container })


  useEffect(() => {
    if (isOpen) {
      tl.current.play()
    } else {
      tl.current.reverse()
    }
  }, [isOpen])


  function toggleNav() {
    setIsOpen(!isOpen)
  }
  return (
    <header>
      <nav className='flex relative '>
        <div className='flex mx-3 md:mx-10 my-5 flex-1 justify-between'>
          <div>
            <Link className='uppercase text-4xl font-extrabold tracking-wide' href='/'>
              afobaje
            </Link>
          </div>
          <div onClick={toggleNav} className='flex relative cursor-pointer text-white gap-2 items-center'>
            <button className={`p-5   z-50 ${isOpen ? 'bg-milky-white fixed right-8 md:right-14 hamburger' : 'bg-slight-brown right-5 absolute'} w-[3.5rem] h-[3.5rem] inline-grid place-content-center rounded-full`}>
              <div className="flex gap-1  items-end flex-col">
                <span className='w-4 h-[1px] bg-black'></span>
                <span className='w-6 h-[1px] bg-black'></span>
                <span className='w-6 h-[1px] bg-black'></span>
              </div>
            </button>
          </div>
        </div>
        <div ref={container} className={`fixed item-animate z-40  w-full h-[100vh] ${isOpen ? 'flex' : 'invisible'} flex-col bg-slight-brown `}>
          <div className="flex grab flex-col  gap-3 h-full justify-center  ml-10">
            {
              links.map((link, index) => {
                let target = false;
                if (link.label === 'Resume') {
                  target = true
                }
                return <div onClick={() => setIsOpen(false)} className='link-items' key={index}>
                  <Link className='text-4xl md:text-8xl font-extrabold hover:underline' target={target ? '_blank' : '_self'} href={link.link}>{link.label}</Link>
                </div>
              })
            }
          </div>
        </div>
      </nav>
    </header>
  )
}
