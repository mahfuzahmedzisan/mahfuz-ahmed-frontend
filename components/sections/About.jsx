'use client'
import React from 'react'
import AboutMain from '@/components/About/AboutMain'
import BackgroundText from '@/components/BackgroundText'

export default function About() {
   return (
      <>
         <div className="container">
            <div className="relative w-full mt-28 sm:mt-24 md:mt-10 lg:mt-16 2xl:0">
               <BackgroundText></BackgroundText>
               <AboutMain></AboutMain>
            </div>
         </div>
      </>
   )
}
