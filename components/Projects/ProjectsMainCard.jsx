'use client';

import React, { useEffect, useState } from 'react';
import ProjectsCard from './ProjectsCard';
import ProjectsFilter from './ProjectsFilter';

export default function ProjectsMainCard() {
   const [selectedCategory, setSelectedCategory] = useState('');
   const [projectsData, setProjectsData] = useState({ categories: [], projects: [] });

   const filteredItems = selectedCategory
      ? projectsData.projects.filter((item) => item.category === selectedCategory)
      : projectsData.projects;

   useEffect(() => {
      const fetchProjectsData = async () => {
         try {
            const res = await fetch('/projects.json');
            const data = await res.json();
            setProjectsData(data);
         } catch (err) {
            console.error('Error:', err);
         }
      };

      fetchProjectsData();
   }, []);

   return (
      <>
         <div className='flex flex-col lg:flex-row gap-10 relative'>
            <ProjectsFilter
               categories={projectsData.categories}
               selectedCategory={selectedCategory}
               onCategoryChange={setSelectedCategory}
            />
            <ProjectsCard items={filteredItems} />
         </div>
      </>
   );
}
