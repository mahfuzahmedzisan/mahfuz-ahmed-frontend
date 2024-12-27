'use client'

import React, { useEffect, useState } from 'react'
import About from './About';
import Features from './Features';
import Project from './Projects';
import Skill from './Skills';
import Testimonial from './Testimonials';
import Contact from './Contact';
import PreLoader from '../PreLoader'; // Assuming PreLoader is another component

export default function MainPage() {
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      // Simulate a loading delay (3 seconds) before hiding the preloader
      const timer = setTimeout(() => {
         setIsLoading(false); // Hide preloader after 3 seconds
      }, 0);

      // Cleanup the timer when the component unmounts
      return () => clearTimeout(timer);
   }, []);

   return (
      isLoading ? (
         <PreLoader isLoading={isLoading} />
      ) : (
         <>
            <About />
            <Features />
            <Project />
            <Skill />
            <Testimonial />
            <Contact />
         </>
      )
   );
}
