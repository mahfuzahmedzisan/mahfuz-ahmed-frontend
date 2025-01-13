import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Person from '@/assets/images/person-1.png'
import { FaStar } from 'react-icons/fa6'
import { SiPolestar } from "react-icons/si";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export default function TestimonialCard({ testimonials }) {

  const [img, setImg] = useState()

  useEffect(() => {
    if (window.width < 768) {
      setImg(200)
    }
  }, [])

  return (
    <div>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="basis-full">
              <div className='flex items-end justify-center gap-5 flex-col lg:flex-row'>
                <div className='bg-gradient-primary shadow-shadow-primary rounded-md p-5 w-full lg:min-w-fit lg:max-w-fit basis-1/5 flex lg:flex-col gap-5 '>
                  <div className='relative'>
                    <Image
                      src={testimonial?.image || Person}
                      alt={testimonial?.name || 'Person'}
                      className="rounded-lg w-24 h-24 sm:w-32 sm:h-32 lg:w-48 lg:h-48"
                    />
                    {!testimonial?.image && <p className="text-xs absolute bottom-0 left-0 right-0 text-center">Image by <a href="https://www.freepik.com/" target="_blank" className="text-primary">Freepik</a></p>}
                  </div>
                  <div >
                    {testimonial?.company && <p className="text-sm text-primary">{testimonial?.company}</p>}
                    {testimonial?.name && <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-light my-2">{testimonial?.name}</h3>}
                    {testimonial?.profession && <p className="text-base">{testimonial?.profession}</p>}
                  </div>
                </div>
                <div className='bg-gradient-primary shadow-shadow-primary rounded-md p-5 basis-4/5 2xl:basis-3/5 3xl:basis-2/5'>

                  <div className='flex items-end justify-between gap-5'>
                    <div>
                      <h3 className='text-xl lg:text-2xl mb-3 text-light'>{testimonial?.title}</h3>
                      <p>
                        {testimonial?.platform}
                        {testimonial?.platform && testimonial?.date && <span className="text-xl text-light"> | </span>}
                        {testimonial?.date}
                      </p>
                    </div>
                    <div className='flex gap-1 items-center p-3 bg-gradient-secondary shadow-shadow-primary rounded-md w-fit'>
                      {Array.from({ length: 5 }, (_, index) => (
                        <FaStar
                          key={index}
                          className={`text-sm ${index < testimonial?.rating ? 'text-primary' : 'text-light'}`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className='flex gap-1 items-center mt-2'>
                    <SiPolestar className='text-xl' />
                    <span className='w-full h-0.5 bg-primary block rounded'></span>
                    <SiPolestar className='text-xl' />
                    <SiPolestar className='text-xl' />
                  </div>
                  <div>
                    <p className='mt-3'>{testimonial?.comment}</p>
                    <p className='text-sm text-primary mt-2'>{testimonial?.location}</p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className={`left-10 hidden 2xl:flex`} />
        <CarouselNext className={`right-10 hidden 2xl:flex`} />
      </Carousel>
    </div>
  );
}
