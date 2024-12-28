import React from 'react';
import Image from 'next/image';
import ProjectImage from '@/assets/images/project.png';
import { FaCode, FaLink } from 'react-icons/fa6';
import Link from 'next/link';

export default function ProjectsCard({ items }) {
   return (
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
         {items.map((item, index) => (
            <div key={index} className="rounded-md relative shadow-shadow-primary bg-gradient-primary overflow-hidden h-fit group">
               {/* Scrollable container for image */}
               <div className='h-[350px] w-full overflow-auto rounded-md'>
                  <Image
                     src={item?.image_url || ProjectImage}
                     alt={item.title}
                     width={1000}
                     height={500}
                     className='rounded-md' // Ensures the image fits within the container
                  />
               </div>

               {/* Title section that animates into view */}
               <h3 className={`text-lg font-semibold p-4 absolute -bottom-full left-0 right-0 text-light bg-bg-dark/80 group-hover:bottom-0 transition-all duration-500 ${!item.image_url && 'pb-3'}`}>{item.title}</h3>

               {/* Icon links, only visible on hover */}
               <div className='absolute top-5 left-5 w-fit -translate-x-full bg-transparent flex !items-center justify-center gap-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500'>
                  <Link href={item?.code_url || ''} target={item?.code_url && '_blank' } className={`text-light text-xl w-12 h-12 bg-bg-dark/60 shadow-lg shadow-light/20 rounded-full flex items-center justify-center hover:text-primary hover:bg-bg-dark/80 transition-all duration-300`}>
                     <FaCode />
                  </Link>
                  <Link href={item?.project_url || ''} target={item?.project_url && '_blank'} className='text-light text-xl w-12 h-12 bg-bg-dark/60 shadow-lg shadow-light/20 rounded-full flex items-center justify-center hover:text-primary hover:bg-bg-dark/80 transition-all duration-300'>
                     <FaLink />
                  </Link>
               </div>

               <p className={`${item.image_url && 'hidden'} absolute bottom-0 left-0 right-0 text-center text-sm text-light mt-2 bg-bg-dark/50`}>Image by <Link href="https://www.freepik.com/" target='_blank' className='text-primary'>Freepik</Link></p>
            </div>
         ))}
      </div>
   );
}
