'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaFacebookF, FaGithub, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'

export default function Footer() {
   const [socialLinks, setSocialLinks] = useState([]);
   const [navItems, setNavItems] = useState([]);

   useEffect(() => {
      const fetchSocialLinks = async () => {
         try {
            const response = await fetch('/social-links.json');  // Ensure this file is in your public folder
            const text = await response.text();  // Get the raw response as text
            console.log("Social Links Response:", text);  // Log the raw response
            try {
               const data = JSON.parse(text);  // Try to parse the text as JSON
               setSocialLinks(data);
            } catch (e) {
               console.error('Error parsing social-links.json:', e);
            }
         } catch (err) {
            console.error('Error fetching social-links.json:', err);
         }
      }

      const fetchNavItems = async () => {
         try {
            const response = await fetch('/NavItem.json');  // Ensure this file is in your public
            const data = await response.json()
            setNavItems(data)
         } catch (err) {
            console.error('Error: ', err);
         }
      }

      fetchSocialLinks();
      fetchNavItems();
   }, [])

   const handleScrollToSection = (e, section) => {
      e.preventDefault();

      let offset = 0;  // Adjust as needed depending on navbar height
      if (window.innerWidth <= 1024) {
         offset = 60;  // Mobile padding
      } else {
         offset = 80;  // Desktop padding
      }

      // Determine the target section
      const targetSection = section === "/" ? 0 : document.querySelector(section)?.offsetTop;
      if (targetSection !== undefined) {
         // Use a custom smooth scroll behavior with `requestAnimationFrame` for more control
         let start = window.scrollY;
         let distance = targetSection - offset - start;
         let startTime = null;

         // Smooth scroll function with easing
         const smoothScroll = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const easing = Math.min(progress / 600, 1); // Easing function (linear)
            window.scrollTo(0, start + distance * easing);

            if (progress < 600) {
               requestAnimationFrame(smoothScroll);
            } else {
               window.scrollTo(0, targetSection - offset); // Final position
            }
         };

         requestAnimationFrame(smoothScroll);
      }
   };


   const getSocialIcon = (name) => {
      switch (name) {
         case 'Facebook':
            return <FaFacebookF />
         case 'X':
            return <FaXTwitter />
         case 'LinkedIn':
            return <FaLinkedinIn />
         case 'GitHub':
            return <FaGithub />
         default:
            return null
      }
   }

   return (
      <>
         <footer className='mt-5'>
            <div className="container">
               <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-20 gap-y-10">

                  <div>
                     <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-light">Mahfuz Ahmed</h2>
                     <p>
                        <strong>Mahfuz Ahmed Zisan</strong> is a web developer skilled in front-end technologies like React, Next.js with experience in back-end development using Laravel, working to enhance his skills and build dynamic websites.
                     </p>
                  </div>

                  <div>
                     <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-light">Quick Links</h2>
                     <div className="grid grid-cols-2 gap-3">
                        {navItems && navItems.map((item, index) => (
                           <Link key={index} href={item.path} onClick={(e) => handleScrollToSection(e, item.path)} className="">
                              {item.name}
                           </Link>
                        ))}
                     </div>
                  </div>

                  <div>
                     <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-light">Follow me</h2>
                     <div className="flex justify-start space-x-4">
                        {
                           socialLinks && socialLinks.map((link, index) => (
                              <Link key={index} href={link?.url || ""} target={link?.url && "_blank"} rel="noopener noreferrer" className="text-lg hover:text-primary/80 transition-all duration-300 w-10 h-10 flex items-center justify-center shadow-shadow-primary bg-gradient-primary rounded-lg hover:bg-bg-dark hover:-translate-y-1 hover:shadow-sm hover:shadow-primary">
                                 {getSocialIcon(link.title)}
                              </Link>
                           ))
                        }
                     </div>
                  </div>
               </div>


               <span className='block w-4/5 mx-auto h-1 bg-gradient-to-r from-light/10 via-primary/50 to-light/10 my-10'></span>


               <p className="text-center text-base py-2 mb-5">&copy; All rights reserved</p>
            </div>
         </footer>
      </>
   )
}
