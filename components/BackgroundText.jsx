'use client'

import React, { useEffect } from 'react'

export default function BackgroundText() {
   const bgTextAnimationRef = React.useRef(null);


   useEffect(() => {
      const bgText = bgTextAnimationRef.current;
      if (bgText) {
         const animateStroke = () => {
            bgText.classList.add("animate-stroke");
            setTimeout(() => bgText.classList.remove("animate-stroke"), 4500);
         };
         setTimeout(animateStroke, 0);
      }
   }, []);

   return (
      <>
         <div className="absolute inset-0 -top-[55%] xs:-top-[40%] sm:-top-[30%] md:top-0 xl:top-48 flex justify-center items-center z-0">
            <svg
               viewBox="0 0 1320 300"
               className="w-full h-full absolute"
            >
               <defs>
                  <linearGradient id="gradient-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
                     <stop offset="0%" style={{ stopColor: '#c4cfde' }} />
                     <stop offset="100%" style={{ stopColor: '#ff014f' }} />
                  </linearGradient>
               </defs>
               <text
                  x="50%"
                  y="50%"
                  textAnchor="middle"
                  className="text-transparent fill-transparent text-[48vmin] xs:text-[38vmin] md:text-[25vmin] lg:text-[23vmin] xl:text-[25vmin] origin-center animate-pulsate uppercase font-Edu-AU font-bold"
                  ref={bgTextAnimationRef}
                  style={{
                     stroke: 'url(#gradient-stroke)',
                     strokeWidth: '2px'
                  }}
               >
                  MAHFUZ
               </text>
            </svg>
         </div>
      </>
   )
}
