'use client'

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

import { FaArrowRight, FaCode, FaLaptopCode, FaOpencart, FaSearchengin } from 'react-icons/fa6';
import { FaTools } from "react-icons/fa";
import { RxGear } from "react-icons/rx";
const FeatureCardModal = dynamic(() => import('./FeatureCardModal'), { ssr: false });

export default function FeatureCard() {
   const [featureItems, setFeatureItems] = useState([]);
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [selectedFeatureItem, setSelectedFeatureItem] = useState(null);
   const [isLoading, setIsLoading] = useState(true);
   const [error, setError] = useState(null);
   const [isClient, setIsClient] = useState(false);  // Ensure this runs only on the client

   // Check for client-side rendering
   useEffect(() => {
      setIsClient(true); // Set to true when mounted on the client

      const fetchFeatureItems = async () => {
         try {
            const response = await fetch('/features.json');
            if (!response.ok) {
               throw new Error('Failed to fetch features');
            }
            const data = await response.json();
            setFeatureItems(data);
         } catch (error) {
            setError(error.message);
         } finally {
            setIsLoading(false);
         }
      };

      fetchFeatureItems();
   }, []);

   const getIcon = (name) => {
      switch (name) {
         case 'Custom Web Development':
            return <FaTools />;
         case 'E-Commerce Web Solutions':
            return <FaOpencart />;
         case 'Responsive Web Design Services':
            return <FaCode />;
         case 'SEO Optimization Services':
            return <FaSearchengin />;
         case 'Website Support & Maintenance':
            return <RxGear />;
         case 'Web Application Development':
            return <FaLaptopCode />;
         default:
            return null;
      }
   };

   const openFeatureModal = (featureItem) => {
      setSelectedFeatureItem(featureItem);
      setIsModalOpen(true);
   };

   const closeFeatureModal = () => {
      setIsModalOpen(false);
   };

   if (!isClient) return null; // Ensure nothing is rendered during SSR

   if (isLoading) {
      return <div>Loading...</div>;
   }

   if (error) {
      return <div>Error: {error}</div>;
   }

   return (
      <>
         {isModalOpen && (
            <FeatureCardModal
               closeFeatureModal={closeFeatureModal}
               featureItem={selectedFeatureItem} 
               />

            // <div>dsk</div>
         )}

         {featureItems.map((featureItem, index) => (
            <div key={index} className='bg-gradient-primary shadow-shadow-primary p-10 rounded-lg cursor-pointer transition-all duration-500 relative group hover:py-5 hover:bg-gradient-secondary ease-in-out'>
               <div className='text-3xl md:text-4xl lg:text-5xl text-primary text-left'>
                  {getIcon(featureItem.title)}
               </div>

               <h3 className='text-2xl text-light font-bold mt-5'>{featureItem.title}</h3>
               <p className='text-lg tracking-wide leading-8 text-light mt-5'>{featureItem.short_description}</p>

               <FaArrowRight className='text-3xl text-primary mt-5 h-0 w-0 opacity-0 group-hover:h-5 group-hover:w-5 group-hover:opacity-100 transition-all duration-500' />

               <button className='absolute inset-0' onClick={() => openFeatureModal(featureItem)} aria-label='Open feature modal'></button>
            </div>
         ))}
      </>
   );
}
