'use client'

import React, { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'

export default function header() {

   const [isScrolled, setIsScrolled] = useState(false);
   const [showSecondNavbar, setShowSecondNavbar] = useState(false);

   // Detect scroll position
   useEffect(() => {
      const handleScroll = () => {
         if (window.scrollY > 50) {
            setIsScrolled(true);

            // After a slight delay, show the second navbar
            setTimeout(() => {
               setShowSecondNavbar(true);
            }, 300);
         } else {
            setIsScrolled(false);
            setShowSecondNavbar(false);
         }
      };

      window.addEventListener('scroll', handleScroll);

      // Cleanup the event listener when the component unmounts
      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);


   return (
      <>
         <header
            className={`fixed top-0 left-0 w-full transition-all duration-300 z-[9999999] ${isScrolled ? 'opacity-0 translate-y-[-100%]' : 'opacity-100'}`}
         >
            <Navbar />
         </header>
         <header
            className={`fixed top-0 left-0 w-full bg-dark-secondary/50 z-[9999999] transition-all duration-300 ${isScrolled && showSecondNavbar ? 'opacity-100' : 'opacity-0 translate-y-[-100%]'}`}
         >
            <Navbar />
         </header>
      </>
   )
}
