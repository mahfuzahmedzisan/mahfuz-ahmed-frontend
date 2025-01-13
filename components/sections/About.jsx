import React from 'react'
import AboutMain from '@/components/About/AboutMain'
import BackgroundText from '@/components/BackgroundText'

export default function About() {
   return (
      <>
         <div className="container">
            <div className="relative w-full">
               <BackgroundText></BackgroundText>
               <AboutMain></AboutMain>
            </div>
         </div>
      </>
   )
}
