'use client'
import React from 'react'
import FeatureCard from '@/components/Features/FeatureCard'

export default function Features() {
   return (
      <>
         <div className="container mb-24">
            <p className='text-primary text-lg tracking-widest mt-10 lg:mt-0'>Features</p>
            <h2 className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-light mb-10 mt-3'>What I Do</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10'>
               <FeatureCard></FeatureCard>
            </div>
         </div>
      </>
   )
}
