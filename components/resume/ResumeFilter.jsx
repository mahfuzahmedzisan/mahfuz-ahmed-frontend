'use client';

import React from 'react';

export default function ResumeFilter({ categories, selectedCategory, onCategoryChange }) {
  return (
    <div className="flex flex-wrap mx-auto items-center justify-center gap-5 p-5 w-fit bg-gradient-primary shadow-shadow-primary rounded-md h-fit">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`${selectedCategory === category ? 'bg-gradient-secondary text-primary shadow-shadow-primary' : ''} text-xl font-semibold rounded-md hover:bg-gradient-primary hover:text-primary hover:shadow-shadow-primary transition-all duration-300 px-5 py-2 capitalize`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
