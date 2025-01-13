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
         <div className="container">
            {isLoading && <Loading isLoading={isLoading} />}

            <TestimonialCard testimonials={testimonials} />
         </div>
      </>
   )
}
