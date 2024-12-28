import React from 'react'
import FeatureCard from '@/components/Features/FeatureCard'

export default function Features() {
   return (
      <>
         <div className="container">
            <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10'>
               <FeatureCard></FeatureCard>
            </div>
         </div>
      </>
   )
}
