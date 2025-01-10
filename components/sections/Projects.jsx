import React from 'react'
import ProjectsMainCard from '@/components/Projects/ProjectsMainCard'

export default function Project() {
   return (
      <>
         <div className="container pt-24">
            <div className='text-center'>
               <p className='text-primary text-lg tracking-widest mt-10 lg:mt-0'>Explore My Projects and Share Your Feedback</p>
               <h2 className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-light mb-10 mt-3'>Projects</h2>
            </div>
            <ProjectsMainCard />
         </div>
      </>
   )
}
