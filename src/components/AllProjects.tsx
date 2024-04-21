'use client'
import React, { useRef } from 'react'
import sendfast from './../assets/sendfast.png'
import Flourish from './../assets/Flourish.png'
import Moviehubb from './../assets/Moviehubb.png'
import { Project } from '@/types';
import Image, { StaticImageData } from 'next/image';
import Empluy from './../assets/Empluy.png'
import Oguntechies from './../assets/Oguntechies.png'
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const listOfProjects: Array<Project<StaticImageData>> = [
    {
        value: 'Resume creator Application',
        link: 'https://empluy.vercel.app',
        image: Empluy,
        color: '#3D348B'

    },
    {
        value: 'Tech community web application',
        link: 'https://ogun-techies.vercel.app',
        image: Oguntechies,
        color: '#7678ED'
    },
    {
        value: 'Movie application',
        link: 'https://moviehubb.vercel.app',
        image: Moviehubb,
        color: '#F7B801'
    },
    {
        value: 'Social platform application',
        link: 'https://sendfast.vercel.app',
        image: sendfast,
        color: '#F18701'
    },
    {
        value: 'Flourish Africa',
        link: 'https://oms.flourishafrica.com',
        image: Flourish,
        color: '#F35B04'
    }];

export default function AllProjects() {
    gsap.registerPlugin(ScrollTrigger)
    const tabRef = useRef<HTMLDivElement | null>(null)

    useGSAP(() => {
        const tl = gsap.timeline();
        tl.fromTo('.value-1', { yPercent: '100' }, { yPercent: '5' })
            .fromTo('.value-2', { yPercent: '100' }, { yPercent: '8' })
            .fromTo('.value-3', { yPercent: '100' }, { yPercent: '11' })
            .fromTo('.value-4', { yPercent: '100' }, { yPercent: '14' })
            .fromTo('.value-5', { yPercent: '100' }, { yPercent: '17' })

        ScrollTrigger.create({
            trigger: tabRef.current,
            animation: tl,
            start: 'top top',
            end: '+=500%',
            scrub: true,
            pin: true,
            anticipatePin: 1
        })
    }, { scope: tabRef })
    return (
        <section className='w-full'>
            <div className='l-container '>
                <h2 className=' text-6xl mt-60 '>Projects</h2>
                <div ref={tabRef} className='flex relative min-h-[150dvh] flex-col'>
                    {
                        listOfProjects.map((val: Project<StaticImageData>, i: number) => <div key={i} className={`w-full absolute flex flex-col gap-3 min-h-[70vh] md:min-h-[90dvh] p-10 rounded-2xl value-${i+1}`} style={{
                            backgroundColor:`${val.color}`
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
