'use client'

import React, { useEffect, useState } from 'react'

import Header from "@/components/header/Header";
import Footer from "@/components/Footer";

import About from './About';
import Features from './Features';
import Project from './Projects';
import Skill from './Skills';
import Testimonial from './Testimonials';
import Contact from './Contact';
import PreLoader from '../PreLoader';
import CustomCursor from '../CustomCursor';

export default function MainPage() {
   const [isLoading, setIsLoading] = useState(true);
   const [isClient, setIsClient] = useState(false);

   useEffect(() => {
      setIsClient(true);  // Only set this after the component mounts on the client side

      // Simulate a loading delay (3 seconds) before hiding the preloader
      const timer = setTimeout(() => {
         setIsLoading(false); // Hide preloader after 3 seconds
      }, 3000);

      // Cleanup the timer when the component unmounts
      return () => clearTimeout(timer);
   }, []);

   // Ensure no hydration issues by only rendering the real content after client-side mount
   if (!isClient) {
      return null; // Prevent mismatch during SSR
   }

   return (
      isLoading ? (
         <PreLoader isLoading={isLoading} />
      ) : (
         <>
            <Header />
            <section id='home'><About /></section>
            <section id='features'><Features /></section>
            <section id='projects'><Project /></section>
            <section id='skills'><Skill /></section>
            <section id='testimonials'><Testimonial /></section>
            <section id='contact'><Contact /></section>
            <Footer />
            <CustomCursor />

         </>
      )
   );
}
