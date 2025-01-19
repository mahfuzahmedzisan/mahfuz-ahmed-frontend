'use client'

import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic';

import Header from "@/components/header/Header";
import Footer from "@/components/Footer";

const About = dynamic(() => import('./About'), { ssr: false });
const Features = dynamic(() => import('./Features'), { ssr: false });
const Project = dynamic(() => import('./Projects'), { ssr: false });
const Skill = dynamic(() => import('./Skills'), { ssr: false });
const Testimonial = dynamic(() => import('./Testimonials'), { ssr: false });
const Contact = dynamic(() => import('./Contact'), { ssr: false });
const PreLoader = dynamic(() => import('../PreLoader'), { ssr: false });
const CustomCursor = dynamic(() => import('../CustomCursor'), { ssr: false })

export default function MainPage() {
   const [isLoading, setIsLoading] = useState(true);
   const [isClient, setIsClient] = useState(false);

   useEffect(() => {
      setIsClient(true);

      const timer = setTimeout(() => {
         setIsLoading(false);
      }, 3000);

      return () => clearTimeout(timer);
   }, []);

   if (!isClient) {
      return null;
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
