import React, { useState, useEffect } from 'react';
import { FaXmark } from 'react-icons/fa6';

export default function FeatureCardModal({ closeFeatureModal, featureItem }) {
   const [isClosing, setIsClosing] = useState(false);

   useEffect(() => {
      setIsClosing(false);
   }, []);

   const handleClose = () => {
      setIsClosing(true);
      setTimeout(() => {
         closeFeatureModal();
      }, 400);
   };

   // Close modal when clicking outside
   const handleBackdropClick = (e) => {
      if (e.target === e.currentTarget) {
         handleClose();
      }
   };

   return (
      <>
         <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-[9999999]">
            <div className="max-w-screen-2xl w-full p-6">
               <div className={`bg-bg-dark rounded-xl shadow-xl p-8 text-black ${isClosing ? 'animate-slide-down' : 'animate-slide-up'} h-fit max-h-[90vh] overflow-y-auto`}>

                  <div className='flex justify-between items-center space-x-5'>
                     <h3 className='text-2xl text-primary'>Service</h3>
                     <button onClick={handleClose} className='text-2xl cursor-pointer w-10 h-10 flex items-center justify-center bg-gradient-primary shadow-shadow-primary text-light hover:text-primary hover:bg-bg-dark hover:shadow-sm hover:-translate-y-1 hover:shadow-primary rounded-md transition-all duration-300'>
                        <FaXmark />
                     </button>
                  </div>
                  <div className='mt-5'>
                     <h2 className='text-2xl font-medium font-Roboto text-light'>{featureItem.title}</h2>
                     <p>{featureItem.long_description}</p>
                     <div>
                        <h2 className='text-2xl font-medium font-Roboto text-light'>Benefits</h2>
                        <div>
                           {featureItem.benefits.map((benefit, index) => (
                              <div key={index}>{benefit}</div>
                           ))}
                        </div>
                        <div>
                           <div>
                              <h2 className='text-2xl font-medium font-Roboto text-light'>Tools</h2>
                              <div>
                                 {featureItem.key_technologies_used.map((technology, index) => (
                                    <div key={index} >{technology}</div>
                                 ))}
                              </div>
                           </div>
                           <div>
                              <h2 className='text-2xl font-medium font-Roboto text-light'>Platfrom</h2>
                              <div>
                                 {
                                    featureItem.industry_focus.map((platform, index) => (
                                       <div key={index}>{platform}</div>
                                    ))
                                 }
                              </div>
                           </div>
                        </div>
                        <div>
                           <h2 className='text-2xl font-medium font-Roboto text-light'>Target</h2>
                           <div>{featureItem.target_audience}</div>
                        </div>
                     </div>
                  </div>

               </div>
            </div>

         </div >


      </>
   );
}
