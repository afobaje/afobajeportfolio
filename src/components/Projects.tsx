'use client'
import Link from 'next/link';
import React, { useRef } from 'react'
import Empluy from './../assets/Empluy.png'
import Oguntechies from './../assets/Oguntechies.png'
import sendfast from './../assets/sendfast.png'
import Flourish from './../assets/Flourish.png'
import Moviehubb from './../assets/Moviehubb.png'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Image, { StaticImageData } from 'next/image';
import { Project } from '@/types';


gsap.registerPlugin(useGSAP)


const listOfProjects: Array<Project<StaticImageData>> = [
    {
        value: 'Resume creator Application',
        link: 'https://empluy.vercel.app',
        image: Empluy
    },
    {
        value: 'Tech community web application',
        link: 'https://ogun-techies.vercel.app',
        image: Oguntechies
    },
    {
        value: 'Movie application',
        link: 'https://moviehubb.vercel.app',
        image: Moviehubb
    },
    {
        value: 'Social platform application',
        link: 'https://sendfast.vercel.app',
        image: sendfast
    },
    {
        value: 'Flourish Africa',
        link: 'https://oms.flourishafrica.com',
        image: Flourish
    }];

export default function Projects() {
    const itemFromList = useRef<HTMLUListElement | null>(null)


    useGSAP(() => {
        if (itemFromList.current !== null) {
            const allItems = gsap.utils.toArray(itemFromList.current.children)
            allItems.forEach((val: any) => {
                const image = val.querySelector('img')
                gsap.set(image, {
                    height: '0px',
                    opacity: 0,
                    visibility:'hidden'
                })
                function mouseEnter(e: any) {
                    gsap.to(image, {
                        height: '600px',
                        duration: .5,
                        visibility:'visible',
                        opacity: 1,
                        ease: 'power4.inOut',
                       
                    })
                }
                function mouseLeave(e: any) {
                    gsap.to(image, {
                        height: '0px',
                        opacity: 0,
                        visibility:'hidden',
                        duration: .2,
                        ease: 'elastic.out',
                    })
                }

                val.addEventListener('mouseenter', mouseEnter)
                val.addEventListener('mouseleave', mouseLeave)


                return () => {
                    val.removeEventListener('mouseenter', mouseEnter)
                    val.removeEventListener('mouseleave', mouseLeave)
                }
            })
        }
    }, { scope: itemFromList })



    // useGSAP(() => {
    //     if (itemFromList.current !== null) {
    //         const allItems = gsap.utils.toArray(itemFromList.current.children)
    //         allItems.forEach((val: any) => {
    //             const image = val.querySelector('img')
    //             console.log(image,'whats your default')
    //             gsap.set(image, {
    //                 scale: 0.7
    //             })

    //             function moveItem(e: any) {
    //                 gsap.to(image, {
    //                     x: e.x,
    //                     xPercent: -50,
    //                     yPercent: -50,
    //                     scale: 1,
    //                     duration: 2

    //                 })
    //             };

    //             function mouseLeave(e: any) {
    //                 gsap.to(image, { autoAlpha: 0 })
    //             }

    //             function mouseEnter(e: any) {

    //                 gsap.to(image, {
    //                     autoAlpha: 1, visibility: 'visible', stagger: 1,
    //                     // scale:.8 
    //                 })
    //             }

    //             val.addEventListener('mouseenter', mouseEnter)
    //             val.addEventListener('mouseleave', mouseLeave)
    //             val.addEventListener('mousemove', moveItem)


    //             return () => {
    //                 val.removeEventListener('mouseenter', mouseEnter)
    //                 val.removeEventListener('mouseleave', mouseLeave)
    //                 val.removeEventListenter('mousemove', moveItem)
    //             }

    //         })
    //     }

    // }, { scope: itemFromList })



    return (
        <section className='my-10 '>

            <div className="flex l-container flex-col gap-5">
                <h2 className='text-2xl text-milky-white md:text-5xl font-bold ml-3 md:ml-5'>Projects</h2>
                <ul className='' ref={itemFromList}>
                    {listOfProjects.map((item: Project<StaticImageData>, index: any) => <li key={index} className='px-3 md:px-5 relative py-5 md:py-20 border-b border-black'>
                        <Image width={400} height={0} src={item.image.src} className='absolute rounded-xl -top-52  right-10 aspect-square object-contain ' alt="" />
                        <Link className='font-semibold text-milky-white text-2xl mix-blend-luminosity md:text-5xl' target='_blank' href={item.link}>{item.value}</Link>
                    </li>
                    )}
                </ul>
            </div>
        </section>
    )
}
