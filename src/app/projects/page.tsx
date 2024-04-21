import AllProjects from '@/components/AllProjects'
import React from 'react'

export default function Project() {
  return (
    <section className='min-h-[100dvh]'>
        <div className='flex flex-col'>
            <div className="l-container">

            <p className='text-8xl text-milky-white'>Some of my projects</p>
            </div>
            {/* <h2 className='text-milky-white text-8xl'>Projects</h2> */}
            <div>
                <AllProjects/>
            </div>
        </div>
    </section>
  )
}
