import Image from 'next/image'
import React from 'react'
import Person from '@/assets/images/person.png'
import { FaAngleLeft, FaAngleRight, FaStar } from 'react-icons/fa6'

export default function TestimonialCard({ testimonials }) {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide(prevSlide => (prevSlide > 0 ? prevSlide - 1 : testimonials.length - 1));
  }

  const handleNextSlide = () => {
    setCurrentSlide(prevSlide => (prevSlide < testimonials.length - 1 ? prevSlide + 1 : 0));
  }

  return (
    <div className="relative">
      <button
        onClick={handlePrevSlide}
        className="flex items-center justify-center w-10 h-10 bg-gradient-primary shadow-shadow-primary rounded-md absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
        <FaAngleLeft />
      </button>
      <button
        onClick={handleNextSlide}
        className="flex items-center justify-center w-10 h-10 bg-gradient-primary shadow-shadow-primary rounded-md absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
        <FaAngleRight />
      </button>
      <div className="overflow-hidden">
        <div className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentSlide / testimonials.length) * 100}%)`,
            width: `${testimonials.length * 100}%`
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-primary shadow-shadow-primary rounded-md p-5 flex flex-wrap gap-5">
              <Image
                src={testimonial?.image || Person}
                alt={testimonial?.name || 'Person'}
                width={200}
                height={200}
              />
              <div className="w-3/5">
                {testimonial?.name && <h3 className="text-lg font-bold text-primary">{testimonial?.name}</h3>}
                {testimonial?.comment && <p className="text-base">{testimonial?.comment}</p>}
                <div className="flex items-center gap-2">
                  {testimonial?.title && <p className="text-base">{testimonial?.title}</p>}
                  {testimonial?.company && testimonial?.title && ','}
                  {testimonial?.company && <p className="text-base">{testimonial?.company}</p>}
                </div>
                {testimonial?.location && <p className="text-base">{testimonial?.location}</p>}
                {testimonial?.rating && (
                  <div className="flex items-center gap-2">
                    {Array.from({ length: testimonial?.rating }, (_, index) => (
                      <FaStar key={index} className="text-primary" />
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
