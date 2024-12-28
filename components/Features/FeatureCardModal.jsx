import React, { useState, useEffect } from 'react';
import { FaXmark } from 'react-icons/fa6';
import { GiNinjaStar } from "react-icons/gi";
import { PiStarFourBold, PiStarFourFill } from "react-icons/pi";

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
          <div className={`bg-bg-dark rounded-xl shadow-shadow-primary shadow-light/5 p-8 text-black ${isClosing ? 'animate-slide-down' : 'animate-slide-up'} h-fit max-h-[90vh] overflow-y-auto`}>

            <div className='flex justify-between items-center space-x-5'>
              <h3 className='text-2xl text-primary font-medium'>Web Solutions</h3>
              <button onClick={handleClose} className='text-2xl cursor-pointer w-10 h-10 flex items-center justify-center bg-gradient-primary shadow-shadow-primary text-light hover:text-primary hover:bg-bg-dark hover:shadow-sm hover:-translate-y-1 hover:shadow-primary rounded-md transition-all duration-300'>
                <FaXmark />
              </button>
            </div>
            <div className='mt-5'>
              <h2 className='text-2xl font-medium font-Roboto text-transparent bg-clip-text bg-gradient-to-r from-primary to-light mb-2'>{featureItem.title}</h2>
              <p className='text-light text-base leading-7 mb-5'>{featureItem.long_description}</p>
              <div>
                <h2 className='text-2xl font-medium font-Roboto text-primary/80'>Your Benefits</h2>
                <div className='flex flex-col gap-2 my-5'>
                  {featureItem.benefits.map((benefit, index) => (
                    <div key={index} className='ml-5 flex items-center gap-3 text-light text-base'><GiNinjaStar className='text-primary' /> {benefit}</div>
                  ))}
                </div>

                <div className='flex flex-col gap-2'>
                  <h2 className='text-2xl font-medium font-Roboto text-primary/80'>Innovative Technologies</h2>
                  <div className='flex flex-wrap gap-3 mt-3 mb-5'>
                    {featureItem.key_technologies_used.map((technology, index) => (
                      <div key={index} className='px-5 py-2 bg-gradient-primary shadow-shadow-primary text-light rounded-md flex items-center gap-2 text-nowrap'><PiStarFourFill className='text-primary' />{technology}</div>
                    ))}
                  </div>
                </div>
                <div>
                  <h2 className='text-2xl font-medium font-Roboto text-primary/80'>Site Strategy</h2>
                  <div className='flex flex-wrap gap-3 mt-3 mb-5'>
                    {
                      featureItem.industry_focus.map((site, index) => (
                        <div key={index} className='px-5 py-2 bg-gradient-primary shadow-shadow-primary text-light rounded-md flex items-center gap-2 text-nowrap'><PiStarFourBold className='text-primary' />{site}</div>
                      ))
                    }
                  </div>
                </div>

                <div>
                  <h2 className='text-2xl font-medium font-Roboto text-primary/80'>Perfect for Your Market</h2>
                  <div className='text-light text-base leading-7 mt-3'>{featureItem.target_audience}</div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div >


    </>
  );
}
