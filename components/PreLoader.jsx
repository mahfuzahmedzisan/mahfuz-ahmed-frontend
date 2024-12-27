import React, { useEffect, useState } from 'react';

export default function PreLoader({ isLoading }) {
   const [isMounted, setIsMounted] = useState(false);

   useEffect(() => {
      setIsMounted(true);
   }, []);

   if (!isMounted) {
      return null;
   }

   return (
      <div
         className={`preloader fixed inset-0 z-[99999999999999] flex items-center justify-center bg-transparent transition-all duration-500 ${!isLoading ? 'h-0' : 'h-screen'}`}
      >
         <svg
            viewBox="0 0 1000 1000"
            preserveAspectRatio="none"
            className="absolute top-0 w-[100vw] h-[110vh] fill-black"
         >
            <path d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
         </svg>
         <div className="preloader-heading z-20">
            <div className="load-text text-white font-light text-xl tracking-[15px] uppercase flex space-x-1">
               {['M', 'A', 'H', 'F', 'U', 'Z'].map((letter, index) => (
                  <span
                     key={index}
                     className="animate-loading"
                     style={{ animationDelay: `${index * 0.1}s` }}
                  >
                     {letter}
                  </span>
               ))}
            </div>
         </div>
      </div>
   );
}
