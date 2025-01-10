import React from 'react';

export default function ResumeCard({ items }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
      <span className="hidden 2xl:block absolute top-0 left-1/2 transform -translate-x-1/2 w-1.5 h-full bg-dark-primary"></span>
      {items.map((item, index) => (
        <div key={index} className={`${index % 2 === 0 ? '' : '2xl:pt-36'}`}>
          <div
            className={`relative flex w-full h-fit ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
          >
            <span
              className={`hidden 2xl:block absolute top-1/2 transform -translate-y-1/2 w-full h-1.5 bg-dark-primary after:content-[''] after:absolute after:top-1/2 after:transform after:-translate-y-1/2 after:w-6 after:h-6 after:bg-dark-primary after:rounded-full ${
                (index + 1) % 2 === 0 ? '-left-6 after:left-0' : '-right-6 after:right-0'
              }`}
            ></span>

            <div
              className={`w-full 2xl:w-5/6 bg-gradient-primary shadow-shadow-primary rounded-md p-5 z-10`}
            >
              {/* Check if the item is Education or Skills/Certifications */}
              {item.degree ? (
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-3">{item.degree}</h3>
                  <p className='text-base'>{item.institution} ({item.year_of_completion})</p>
                  <p className='text-sm mt-3'>Grade: {item.grade}</p>
                </div>
              ) : (
                <div>
                  {/* Render Skill or Certification */}
                  <h3 className="text-xl font-semibold text-primary mb-3">{item.name}</h3>
                  {item.proficiency && <p className='text-base'>Proficiency: {item.proficiency}</p>}
                  {item.year && <p className='text-base'>Year: {item.year}</p>}
                  {item.percentage && <p className='text-sm mt-3'>Percentage: {item.percentage}</p>}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
