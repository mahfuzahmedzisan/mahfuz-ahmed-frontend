import React, { useEffect, useState } from 'react'
import TestimonialCard from '../TestimonialCard'
import Loading from '../Loading';

export default function Testimonial() {
   const [testimonials, setTestimonials] = useState([]);
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      const fetchTestimonials = async () => {
         try {
            const response = await fetch('/Testimonial.json');
            const data = await response.json();
            setTestimonials(data);
            setIsLoading(false);
         } catch (error) {
            console.error('Error fetching testimonials:', error);
            setIsLoading(false);
         }
      }
      fetchTestimonials();
   }, []);



   return (
      <>
         <div className="container relative pb-24">
            {isLoading && <Loading isLoading={isLoading} />}

            <h3 className='text-primary text-lg tracking-widest text-center'>Recent Testimonials</h3>
            <h2 className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-light mb-16 text-center'>What People Are Saying</h2>

            <TestimonialCard testimonials={testimonials} />
         </div>
      </>
   )
}
