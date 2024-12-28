import React from 'react';

export default function ProjectsFilter({ categories, selectedCategory, onCategoryChange }) {
   return (
      <>
         <div className="lg:sticky top-0 left-0 flex flex-col gap-2 bg-gradient-primary shadow-shadow-primary rounded-md h-fit">
            <button
               onClick={() => onCategoryChange('')}
               className={`${selectedCategory === '' ? 'bg-gradient-secondary text-primary shadow-shadow-primary' : ''} text-xl font-semibold rounded-md px-16 lg:px-40 py-5 hover:bg-gradient-primary hover:text-primary hover:shadow-shadow-primary transition-all duration-300`}
            >
               All
            </button>
            {categories.map((category) => (
               <button
                  key={category}
                  onClick={() => onCategoryChange(category)}
                  className={`${selectedCategory === category ? 'bg-gradient-secondary text-primary shadow-shadow-primary' : ''} text-xl font-semibold rounded-md px-16 lg:px-40 py-5 hover:bg-gradient-primary hover:text-primary hover:shadow-shadow-primary transition-all duration-300`}
               >
                  {category}
               </button>
            ))}
         </div>
      </>
   )
}
