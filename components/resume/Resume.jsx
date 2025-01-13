'use client';

import React, { useEffect, useState } from 'react';
import ResumeFilter from './ResumeFilter';
import ResumeCard from './ResumeCard';

export default function Resume() {
  const categories = ['technical', 'soft_skills', 'tools', 'languages', 'education', 'certifications'];

  // Initialize selectedCategory to the first category in the list
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [resumeData, setResumeData] = useState({});

  // Filter the items based on the selected category
  const filteredItems = selectedCategory
    ? resumeData[selectedCategory] || []  // Safe access for undefined categories
    : [
      ...(resumeData.technical || []),
      ...(resumeData.soft_skills || []),
      ...(resumeData.tools || []),
      ...(resumeData.languages || []),
      ...(resumeData.education || []),
      ...(resumeData.certifications || []),  // Include certifications
    ];

  // Load resume data (this could be from an API or a static file)
  const fetchresumeData = async () => {
    try {
      const res = await fetch('/Resume.json'); // Adjust with actual path
      const data = await res.json();
      setResumeData(data);
    } catch (err) {
      console.error('Error:', err);
    }
  };

  useEffect(() => {
    fetchresumeData();
  }, []);

  return (
    <>
      <p className='text-primary text-lg tracking-widest mt-10 lg:mt-0 text-center'>Explore My Resume</p>
      <h2 className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-light mb-10 text-center'>My Resume</h2>
      <div className='flex flex-col gap-20'>
        <ResumeFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
        <ResumeCard items={filteredItems} />
      </div>
    </>
  );
}
