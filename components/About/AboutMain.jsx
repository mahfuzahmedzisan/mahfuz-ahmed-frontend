'use client'
import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { TypeAnimation } from 'react-type-animation';
import AboutModal from './AboutModal';
import Mahfuz from '@/assets/images/Mahfuz.jpg';
import Image from 'next/image';

export default function AboutMain() {
   const [isAboutDetailsOpen, setIsAboutDetailsOpen] = useState(false);
   const heroTextRef = React.useRef(null);

   const [socialItems, setSocialItems] = useState([]);

   useEffect(() => {
      fetch('/social-links.json')
         .then(res => res.json())
         .then(data => {
            setSocialItems(data);
         })
         .catch(error => console.error('Error fetching social items:', error));
   }, []);

   const getIcons = (name) => {
      switch (name) {
         case "Github":
            return <FaGithub />;
         case "Facebook":
            return <FaFacebookF />;
         case "Linkedin":
            return <FaLinkedinIn />;
         case "Twitter":
            return <FaXTwitter />;
         case "Instagram":
            return <FaInstagram />;
         default:
            return null;
      }
   }

   useEffect(() => {
      const heroText = heroTextRef.current;
      if (heroText) {
         const animateStroke = () => {
            heroText.classList.add("animate-stroke");
            setTimeout(() => heroText.classList.remove("animate-stroke"), 4500);
         };
         setTimeout(animateStroke, 0);
      }
   }, []);

   const openAboutDetails = () => setIsAboutDetailsOpen(true);
   const closeAboutDetails = () => setIsAboutDetailsOpen(false);

   return (
      <>
         {isAboutDetailsOpen && <AboutModal closeModal={closeAboutDetails} />}
         <section className="relative w-full min-h-screen">
            <div className="absolute inset-0 flex justify-center items-center z-0">
               <svg
                  viewBox="0 0 1320 300"
                  className="w-full h-full absolute"
               >
                  <defs>
                     <linearGradient id="gradient-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#ff014f' }} /> {/* purple-500 */}
                        <stop offset="100%" style={{ stopColor: '#c4cfde' }} /> {/* emerald-500 (green) */}
                     </linearGradient>
                  </defs>
                  <text
                     x="50%"
                     y="50%"
                     textAnchor="middle"
                     className="text-transparent fill-transparent text-[20vmin] origin-center animate-pulsate uppercase font-Edu-AU font-bold"
                     ref={heroTextRef}
                     style={{
                        stroke: 'url(#gradient-stroke)',
                        strokeWidth: '2px'
                     }}
                  >
                     MAHFUZ
                  </text>
               </svg>
            </div>


            <div className='relative'>
               <div>

                  <p>Welcome to my world</p>
                  <h2>Hi! I'm <span>Mahfuz Ahmed</span></h2>

                  <TypeAnimation
                     sequence={['Web Developer', 2000, 'Coder', 2000, 'Programmer', 2000]}
                     wrapper="p"
                     cursor={true}
                     repeat={Infinity}
                  />

               </div>
               <div>
                  <Image src={Mahfuz} alt="Mahfuz" width={500} height={500}></Image>
               </div>
            </div>

         </section>
      </>
   );
}
